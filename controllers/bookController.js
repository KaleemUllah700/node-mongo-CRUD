import Book from "../model/Book.js";
//Create Book
const createBook =  async (req, res) => {
    const { title, author, year } = req.body;
    try {
        const newBook = new Book({ title, author, year });
        await newBook.save();
        res.status(200).send("Book data saved");
    } catch (error) {
        console.log(error);
        res.status(500).send("internal sever error",error);
    }
}

//GET Book
const getBook = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).send(books);
    } catch (error) {
        console.log(error);
        res.status(500).send("internal server error",error);
    }
}

//Update Book
const updateBook =  async (req, res) => {
    const { id } = req.params;
    const { title, author, year } = req.body;
    try {
        const updatedBook = await Book.findByIdAndUpdate(id, { title, author, year }, { new: true });
        res.status(200).send("Book data updated");
    } catch (error) {
        console.log(error);
        res.status(500).send("internal server eroor",error);
    }
}

//Delete Book
const deleteBook = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedBook = await Book.findByIdAndDelete(id);
        res.status(200).send("Data deleted");
    } catch (error) {
        console.log(error);
        res.status(500).send("internal server error",error);
    }
}

//export all functions
export default {
    createBook,
    getBook,
    updateBook,
    deleteBook
}