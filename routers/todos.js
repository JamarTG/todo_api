"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const express2 = require("express");
const todoRouter = express2.Router();
const { connectToDatabase: connectToDatabaseForTodo, showInDatabase: showInDatabaseForTodo } = require("../database/mongodatabase");
connectToDatabaseForTodo().catch(console.dir);
todoRouter.post('/', (request, response) => {
    const { title, description, dueDate, completed } = request.body;
    insertIntoDatabase(request.body);
});
todoRouter.get('/', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const collectionData = yield showInDatabaseForTodo();
    response.render('test', { Name: "Jamari", todoData: collectionData });
}));
module.exports = todoRouter;
