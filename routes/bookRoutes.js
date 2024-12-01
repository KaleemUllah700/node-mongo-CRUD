import express from "express";
import bookController from "../controllers/bookController.js";

const router = express.Router();

// Create Book
router.post('/books', bookController.createBook);

// Get All Books
router.get('/books', bookController.getBook);

// Update Book
router.put('/books/:id', bookController.updateBook);

// Delete Book
router.delete('/books/:id', bookController.deleteBook);

export default router;
