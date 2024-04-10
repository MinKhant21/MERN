import { AuthController } from "../controllers/AuthController";

const express = require("express");
const z = require("zod");
const router = express.Router();

const authController  = AuthController();


router.post("/login", authController.loginUser);
router.post("/register", authController.registerUser);

module.exports = router;
