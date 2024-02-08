import { ProductController } from "../controllers/ProductController";
const express = require('express');
const router = express.Router();

// router.get('',ProductController.getAll);
// router.get('/:id',ProductController.getOne);
router.post('',ProductController.addItem);
// router.patch('/:id',ProductController.update);
// router.delete('/:id',ProductController.delete);


module.exports = router; 