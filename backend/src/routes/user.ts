const express = require("express");
import { NextFunction, Request,Response } from "express";

import { validateRequestBody } from "zod-express-middleware";
const z = require("zod");
import { UserController } from "../controllers/UserController";
// const UserController = require('../controllers/UserController');
const nodemailer = require("nodemailer");
import Mailgen from "mailgen";
const router = express.Router();

router.post(
  "/register",
  validateRequestBody(
    z.object({
      name: z.string(),
      email: z.string().email({ message: "Invalid email address" }),
      password: z.string(),
    })
  ),
  UserController.register
);

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "kaungminkhant6889@gmail.com",
    pass: "bqydajoifbcozwbg",
  },
});

router.post("/send-email", (req:Request, res:Response,next:NextFunction) => {
  try {
    const { to, name, message } = req.body;
  const mailOptions = {
    from: "kaungminkhant6889@gmail.com",
    to: to,
    subject: "Test Email",
    html: `<h1>Hello ${name}</h1><p>${message}</p>`,
  };
  console.log(mailOptions)

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

module.exports = router;
