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
// Import MongoDB
const { MongoClient } = require("mongodb");
const { config } = require("dotenv");
// Configure the dotenv
config();
// Get the URI from enviroment
const URI = process.env.URI;
// Create the client
const client = new MongoClient(URI);
// Connection Settings
function connectToDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        console.log("connected");
    });
}
function insertIntoDatabase(validTodo) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const database = client.db("todoDatabase");
            const todoCollection = database.collection("todoCollection");
            yield todoCollection.insertOne(validTodo);
        }
        finally {
            yield client.close();
        }
    });
}
function showInDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const database = client.db("todoDatabase");
            const todoCollection = database.collection("todoCollection");
            return yield todoCollection.find({}).toArray();
        }
        finally {
            yield client.close();
        }
    });
}
module.exports = {
    insertIntoDatabase,
    connectToDatabase,
    showInDatabase
};
