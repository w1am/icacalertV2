import "dotenv/config";
import express from "express";
import cors from "cors";
import compression from "compression";
import path from "path";
import { ApolloServer } from "apollo-server-express";
import { fileLoader, mergeTypes, mergeResolvers } from "merge-graphql-schemas";
import { startMongoose } from "./mongodb/mongoose";
import moment from "moment";
import axios from "axios";
import jwt from "jsonwebtoken";
import indexRouter from "./routes/index";
require("dotenv").config({ path: "../../.env" }).parsed;

const SECRET = process.env.SECRET;

const typeDefs = mergeTypes(fileLoader(path.join(__dirname, "./schema")));
const resolvers = mergeResolvers(
  fileLoader(path.join(__dirname, "./resolvers"))
);

const app = express();

app.use(cors("*"));

app.use(express.static(path.resolve(__dirname + '/../client/dist')));

app.use(compression());
app.use(innn
dexRouter);

if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/../client/dist/index.html'));
  })
}

const getToday = async (req, res, next) => {
  const worldtime = await axios.get("https://worldtimeapi.org/api/ip");
  const datetime = worldtime.data.utc_datetime;
  const mdhm = moment(datetime).format("MMMM D HH:mm");
  const my = moment(datetime).format("MMMM YYYY");
  const d = moment(datetime).format("D");
  const m = moment(datetime).format("MMMM");
  const y = moment(datetime).format("YYYY");
  req.mdhm = mdhm;
  req.my = my;
  req.d = d;
  req.m = m;
  req.y = y;
  next();
};

app.use(getToday);


startMongoose();

new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({
    mdhm: req.mdhm,
    my: req.my,
    d: req.d,
    m: req.m,
    y: req.y,
    SECRET
  })
}).applyMiddleware({ app });

module.exports = app;
