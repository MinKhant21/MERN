import {AuthController} from '../controllers/AuthController';
const express = require('express');

import { validateRequestBody } from "zod-express-middleware";
const z = require("zod");
const router = express.Router();

router.post('/login',validateRequestBody(
     z.object({
       email: z.string().email({ message: "Invalid email address" }),
       password: z.string(),
     })
   ),AuthController.login)

module.exports = router;