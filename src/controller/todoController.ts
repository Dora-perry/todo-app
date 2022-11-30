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

    
}
export const editTodo = async(req: Request, res: Response) => {
    
}
export const deleteTodo = async(req: Request, res: Response) => {
    
}























// addTodo
// getTodo
// editTodo
// deleteTodo



