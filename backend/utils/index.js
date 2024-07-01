import mongoose from "mongoose";

const isValidObjectId = (id, res) => {
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'Object Id is not valid'})
    }
}


export{
    isValidObjectId
}