const express = require("express")
const app = express();
const path = require("path")
const todosRouter = require('./routers/todos');
const homeRouter = require('./routers/home')
const pug = require("pug")

app.use(express.json())



app.set("view engine", "pug");
app.set('views', path.join(__dirname, 'views'));

app.use('/todos',todosRouter);
app.use('/',homeRouter);
app.use((_req: any, res:any) => res.status(404).send("Sorry, that route doesn't exist. Please try again."));

app.listen(3000);

