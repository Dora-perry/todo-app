import express from 'express'
import {addTodo,getTodo,editTodo,deleteTodo} from '../controller/todoController'

const router = express.Router()

router.post('/add-todo', addTodo)
router.get('/get-all-todos', getTodo)
router.put('/edit-todo', editTodo)
router.delete('/delete-todo', deleteTodo)



export default router;