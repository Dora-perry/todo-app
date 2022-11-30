"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todoController_1 = require("../controller/todoController");
const router = express_1.default.Router();
router.post('/add-todo', todoController_1.addTodo);
router.get('/get-all-todos', todoController_1.getTodo);
router.put('/edit-todo', todoController_1.editTodo);
router.delete('/delete-todo', todoController_1.deleteTodo);
exports.default = router;
