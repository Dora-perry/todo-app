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
};
exports.getTodo = getTodo;
const editTodo = async (req, res) => {
};
exports.editTodo = editTodo;
const deleteTodo = async (req, res) => {
};
exports.deleteTodo = deleteTodo;
// addTodo
// getTodo
// editTodo
// deleteTodo
