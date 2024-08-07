import Comment from '../models/Comment.js';


const createAComment = async (req,res) => {
try {

    const { bookId, content, userId} = req.body;


    const newComment = await Comment.create ({
        content: content,
        book: bookId,
        postedBy: userId,

    });
    return res.status(201).json({message: 'Comment Created Succesfully', comment: newComment}, )

} catch (error) {
    console.error("Error at createAComment", error);
    return res.status(500).json({error: 'Internal Server Error'})
}
};

const getCommentsForBook = async(req,res) => {
    try {
        const {id} = req.params;

        const comments = await Comment.find({book:id}).populate('postedBy');
        return res.status(201).json({message: 'Comment for book fetched', comments}, )

    } catch (error) {
        console.error("Error at getCommentsForBook", error);
        return res.status(500).json({error: 'Internal Server Error'})
    }
};

const getCommentsByUser = async(req,res) => {
    try {
        const {id} = req.params;

        const comments = await Comment.find({postedBy: id}).populate('book');
        return res.status(201).json({message: 'Comment for book fetched', comments}, )

    } catch (error) {
        console.error("Error at getCommentsForBook", error);
        return res.status(500).json({error: 'Internal Server Error'})
    }
};

export {
    createAComment,
    getCommentsForBook,
    getCommentsByUser,
}

