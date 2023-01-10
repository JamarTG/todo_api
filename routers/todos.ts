const express2 = require("express");

const todoRouter = express2.Router()


const {connectToDatabase:connectToDatabaseForTodo , showInDatabase:showInDatabaseForTodo} = require("../database/mongodatabase")
connectToDatabaseForTodo().catch(console.dir);

todoRouter.post('/', (request: { body: { title: any; description: any; dueDate: any; completed: any; }; }, response: any) => {

    const {title,description,dueDate,completed} = request.body;
    insertIntoDatabase(request.body);
})


todoRouter.get('/', async (request :{}, response : any) => {
    const collectionData = await showInDatabaseForTodo();

    response.render('test' ,{Name:"Jamari" , todoData:collectionData })
});
  


module.exports = todoRouter;