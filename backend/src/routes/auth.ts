import { AuthController } from "../controllers/AuthController";
const express = require("express");
const z = require("zod");
const router = express.Router();

const Auth = new AuthController();

router.post("/login", Auth.loginUser);
router.post("/register", Auth.registerUser);

module.exports = router;
