import { validateRequestBody } from "zod-express-middleware";
import CategoryController from '../controllers/CategoryController'
const express = require("express");
const router = express.Router();
const z = require("zod");
const Category  = new CategoryController();
// router.get("", CategoryController.getAll);
// router.get("/search", CategoryController.getOne);
router.post(
  "",
  validateRequestBody(
    z.object({
      name: z.string(),
    })
  ),
  Category.store
);
// router.patch("", CategoryController.update);
// router.delete("", CategoryController.delete);

module.exports = router;
