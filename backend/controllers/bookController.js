import Book from '../models/book.js';
import { isValidObjectId } from '../utils/index.js';

const getAllBooks = async (req,res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books)
        
    } catch (error) {
        console.error("Error at getAllBooks", error);
        return res.status(500).json({error: 'Internal Server Error'})
        
    }

};

const getABook = async (req,res) => {
    const {id} = req.params;

    if (isValidObjectId(id, res)) return;

try {
    const book = await Book.findById(id);

    if(!book) {
        return res.status(404).json({error: 'The book is not exist!'})
    }

    res.status(200).json(book);
} catch (error) {
    console.error("Error at getABook", error);
    return res.status(500).json({error: 'Internal Server Error'})
    
    
}

}

const createABook = async (req,res) => {
try {
    const { title, author} = req.body;

    const existingBook = await Book.findOne({title, author});

    if (existingBook) {
        return res
        .status(400)  
        .json({eror: 'A book with same title and author already exist!'})
    }


    const newBook = await Book.create(req.body);

    return res.status(201).json({message: "Book created succesfully",book: newBook})

} catch (error) {
    //Handle mongoose validation error
    if (error.name ==='ValidationError') {
        const validationErrors = {}

        for (let field in error.errors) {
            validationErrors[field] = error.errors[field].message;

        }
        return res.status(400).json({error: "Validation error", validationErrors})
    } else {
        console.error("Error at createBook", error);
        return res.status(500).json({error: 'Internal Server Error'})
    }
}
};

const updateABook = async(req, res) => {
    const {id} = req.params;

const { title, author, description,pageNumber, rating } = req.body;

    if (isValidObjectId(id, res)) return;

try {
    const book = await Book.findById(id);

    if(!book) {
        return res.status(404).json({error: 'The book is not exist!'})
    }

    book.title = title || book.title;
    book.author = author || book.author;
    book.description = description || book.description;
    book.pageNumber = pageNumber || book.pageNumber;
    book.rating = rating || book.rating;

    await book.save();

    res.status(200).json({message: 'The book updated succesfully'})


} catch (error) {
    console.error("Error at updateABook", error);
    return res.status(500).json({error: 'Internal Server Error'})
    
}



}

const deleteABook = async(req,res) => {
    const {id} = req.params;

    if (isValidObjectId(id, res)) return;

    
    try {
        const book = await Book.findById(id);

        if(!book) {
            return res.status(404).json({error: 'The book is not exist!'})
        }

        await book.deleteOne();
        res.status(200).json({message: 'Book deleted succesfully.'})
    } catch (error) {
        console.error("Error at deleteABook", error);
        return res.status(500).json({error: 'Internal Server Error'})
    }

}

export {
    getAllBooks,
    createABook,
    getABook,
    updateABook,
    deleteABook

}

