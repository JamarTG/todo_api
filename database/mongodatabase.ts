// Import MongoDB
const {MongoClient} = require("mongodb");
const {config} = require("dotenv");


// Configure the dotenv
config();

// Get the URI from enviroment
const URI = process.env.URI;

// Create the client
const client = new MongoClient(URI);

// Connection Settings
async function connectToDatabase(){
    await client.connect();
    console.log("connected")
}

async function insertIntoDatabase(validTodo: {
        title: any;
        // Connection Settings
        description: any; dueDate: any; completed: any;
    }) {
    try{
        const database = client.db("todoDatabase");
        const todoCollection = database.collection("todoCollection")

        await todoCollection.insertOne(validTodo)
    } finally{
        await client.close()
    }
}

async function showInDatabase() {
    try {
        const database = client.db("todoDatabase")
        const todoCollection = database.collection("todoCollection")

        return await todoCollection.find({}).toArray()

    }finally{
        await client.close()
    }
}


module.exports = {
    insertIntoDatabase,
    connectToDatabase,
    showInDatabase
}
