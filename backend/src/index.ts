// src/index.js
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
const nodemailer = require("nodemailer");
import Mailgen from "mailgen";
const app: Express = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");
dotenv.config();

// Other middleware
app.use(morgan(`:date[clf] :method :url :status :response-time ms`));
// Uncomment the cors middleware
app.use(cors());
// Define a route for sending emails
app.use(express.json()); // Parse JSON requests
// Set up body-parser middleware to parse application/x-www-form-urlencoded and application/json

app.use(express.urlencoded({ extended: false }));

const mongoURL =
  "mongodb+srv://admin:tprYkf78RaD3jUy2@eccom.tlcnxfp.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongoURL).then(() => {
  console.log("connected to db");
  app.listen(process.env.PORT, () => {
    console.log("app is running on localhost:" + process.env.PORT);
  });
});
mongoose.set("strictQuery", true, "useNewUrlParser", true);
// app.use(helmet());

app.use("/api", userRoutes);

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "kaungminkhant6889@gmail.com",
    pass: "bqydajoifbcozwbg",
  },
});

app.post("/send-email", (req, res) => {
  try {
    const { to, name, message } = req.body;

  const mailOptions = {
    from: "kaungminkhant6889@gmail.com",
    to: to,
    subject: "Test Email",
    html: `<h1>Hello ${name}</h1><p>${message}</p>`,
  };

  transporter.sendMail(mailOptions, (error: any, info: any) => {
    if (error) {
      console.error(error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent:", info.response);
      res.send("Email sent successfully");
    }
  });
  } catch (error) {
    console.error("Error parsing JSON:", error);
    res.status(400).send("Invalid JSON payload");
  }
});

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});