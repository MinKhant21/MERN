import { validateRequestBody } from "zod-express-middleware";
import { CategoryController } from "../controllers/CategoryController";
const express = require("express");
const router = express.Router();
const z = require("zod");

router.get("", CategoryController.getAll);
router.get("/search", CategoryController.getOne);
router.post(
  "",
  validateRequestBody(
    z.object({
      name: z.string(),
    })
  ),
  CategoryController.add
);
router.patch("/:id", CategoryController.update);
router.delete("", CategoryController.delete);

module.exports = router;
