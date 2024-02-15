const express = require("express");
import { NextFunction, Request,Response } from "express";

import { validateRequestBody } from "zod-express-middleware";
const z = require("zod");
import { UserController } from "../controllers/UserController";
// const UserController = require('../controllers/UserController');
const nodemailer = require("nodemailer");
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


module.exports = router;
