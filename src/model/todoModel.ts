import mongoose, { model, Schema } from "mongoose";


interface ITodo {
    _id?: string,
    description: string,
    done:boolean
}

const todoSchema = new Schema<ITodo>({
    description: {
        type: String,
        required:true
    },
    done: {
        type: Boolean
    }
})
     

export const Todo = model<ITodo>('Todo', todoSchema)



