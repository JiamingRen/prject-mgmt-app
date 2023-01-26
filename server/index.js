
const express = require('express');
const colors = require('colors');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema')
const connectDB = require('./config/db');

const port = process.env.PORT || 4000;

const app = express();
connectDB();

const isInDevelopment = process.env.NODE_ENV === 'development';

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: isInDevelopment,
}));  

app.listen(port, console.log(`Listening on port ${port}`));

