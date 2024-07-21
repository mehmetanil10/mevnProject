import Comment from '../models/Comment.js';


const createAComment = async (req,res) => {
try {

    const { bookId, content, userId} = req.body;

    console.log("content", content)

    const newComment = await Comment.create ({
        content: content,
        book: bookId,
        postedBy: userId,

    });
    return res.status(201).json({message: 'Comment Created Succesfully', comment: newComment}, )

} catch (error) {

}
};

export {
    createAComment,
}

