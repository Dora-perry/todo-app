"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const mongoose_1 = __importDefault(require("mongoose"));
const todoRoutes_1 = __importDefault(require("./routes/todoRoutes"));
const app = (0, express_1.default)();
// dotenv.config()
mongoose_1.default.connect('mongodb://localhost:27017/todo', () => {
    console.log('Db connected succesfully');
});
app.use(express_1.default.json());
app.use((0, morgan_1.default)("dev"));
app.use('/todo', todoRoutes_1.default);
const port = 3005;
app.listen(port, () => {
    console.log(`Sever is running at http://localhost:${port}`);
});
exports.default = app;
