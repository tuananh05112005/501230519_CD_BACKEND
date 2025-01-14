import express from 'express';
import {
         listCategory,
         createCategory,
         renderPageCreateCategory,
         renderPageUpdateCategory,
         updateCategory,
         deleteCategory,
         renderPageDeleteCategory
         } from '../controllers/categoryController.js';
const router = express.Router();


router.get("/", listCategory)

router.get("/create", renderPageCreateCategory)
router.post("/create", createCategory)

router.get("/update/:id", renderPageUpdateCategory)
router.post("/update/", updateCategory)

router.get("/delete/:id", renderPageDeleteCategory)
router.post("/delete/", deleteCategory)

export default router; 