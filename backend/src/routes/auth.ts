import { AuthController } from "../controllers/AuthController";
const express = require("express");

import { validateRequestBody } from "zod-express-middleware";
const z = require("zod");
const router = express.Router();
const Auth = new AuthController();
router.post("/login", Auth.login);

module.exports = router;
