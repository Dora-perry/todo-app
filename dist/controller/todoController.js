"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.editTodo = exports.getTodo = exports.addTodo = void 0;
const todoModel_1 = require("../model/todoModel");
const addTodo = async (req, res) => {
    const { description, done } = req.body;
    const todo = { description, done };
    await todoModel_1.Todo.create(todo, (err, data) => {
        if (err) {
            return res.status(500).json({ err });
        }
        return res.status(200).json({ data });
    });
};
exports.addTodo = addTodo;
const getTodo = async (req, res) => {
    todoModel_1.Todo.find({}, (err, data) => {
        if (err) {
            return res.status(400).json({ err });
        }
        return res.status(200).json({ data });
    });
};
exports.getTodo = getTodo;
const editTodo = async (req, res) => {
    const { description, done } = req.body;
    const { _id } = req.params;
    const todo = { description, done };
    todoModel_1.Todo.findByIdAndUpdate(_id, todo, (err, data) => {
        if (err) {
            return res.status(500).json({ err });
        }
        return res.status(200).json({
            message: 'you have succesfully edited one item'
        });
    });
};
exports.editTodo = editTodo;
const deleteTodo = async (req, res) => {
    const { _id } = req.params;
    todoModel_1.Todo.findByIdAndRemove(_id, (err, data) => {
        if (err) {
            return res.status(500).json({ err });
        }
        return res.status(200).json({ message: "you have successfully deleted one field" });
    });
};
exports.deleteTodo = deleteTodo;
// addTodo
// getTodo
// editTodo
// deleteTodo
