// src/index.js
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

const app: Express = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");
const productRoutes = require("./routes/product");
const categoryRoutes = require("./routes/category");
const verifyToken  = require('./middlewares/verify-token')
dotenv.config();

// Other middleware
app.use(morgan(`:date[clf] :method :url :status :response-time ms`));
// Uncomment the cors middleware

app.use(cors());
// Define a route for sending emails
// Set up body-parser middleware to parse application/x-www-form-urlencoded and application/json
app.use(express.json()); // Parse JSON requests

app.use(express.urlencoded({ extended: false }));

// app.use(helmet());

app.use("/api", userRoutes);

app.use('/api',authRoutes);
app.use('/api/product',productRoutes);
app.use('/api/categories', verifyToken,categoryRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});
app.listen(process.env.PORT, () => {
  console.log("app is running on localhost:" + process.env.PORT);
});
