import {AuthController} from '../controllers/AuthController';
const express = require('express');

const router = express.Router();

router.post('/login',AuthController.login)

export default router;