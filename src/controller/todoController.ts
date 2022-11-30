import { Todo ,} from '../model/todoModel'
import { request, Request, Response } from 'express'



export const addTodo = async(req: Request, res: Response) => {  
    const { description, done } = req.body;
    const todo = { description, done }
   await Todo.create(todo, (err, data) => {
       if (err) {
           return res.status(500).json({err})
       }
       return res.status(200).json({data})
    })
    
}
export const getTodo = async(req: Request, res: Response) => {
    Todo.find({}, (err: any, data: any) => {
        if (err) {
          return res.status(400).json({err})
        }
        return res.status(200).json({data})
  })
    
}
export const editTodo = async (req: Request, res: Response) => {
    const { description, done } = req.body;
    const { _id } = req.params
    const todo = { description, done }
    Todo.findByIdAndUpdate(_id, todo, (err: any, data: any) => {
        if (err) {
            return res.status(404).json({err})
        }
        return res.status(200).json({
            message:'you have succesfully deleted one item'
        })
    })


    
}
export const deleteTodo = async(req: Request, res: Response) => {
    
}























// addTodo
// getTodo
// editTodo
// deleteTodo



