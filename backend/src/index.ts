// src/index.js
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

const app: Express = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const mongoose = require("mongoose");
const userRoutes = require('./routes/user')
dotenv.config();

// Other middleware
app.use(morgan(`:date[clf] :method :url :status :response-time ms`));
// Uncomment the cors middleware
app.use(cors());

// Set up body-parser middleware to parse application/x-www-form-urlencoded and application/json

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const mongoURL = "mongodb+srv://admin:tprYkf78RaD3jUy2@eccom.tlcnxfp.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(mongoURL).then(() => {
    console.log('connected to db');
    app.listen(process.env.PORT,() => {
        console.log('app is running on localhost:'+process.env.PORT);
    })
});
mongoose.set("strictQuery", true, "useNewUrlParser", true);
// app.use(helmet());

app.use('/api',userRoutes)

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});


