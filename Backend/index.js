const express = require('express');
const app = express(); 
const connectFunction = require('./database');

app.use(express.json())

app.listen(
    process.env.PORT,
    () => console.log(`alive on http://localhost:${process.env.PORT}`)
)


// middleware to connect to mongodb client
app.use(async (req, res, next) => {
    console.log("route called");
    try {
        // connect to database via function in database.js
        const client = await connectFunction();

        // grab db object from client and pass to route via req object
        const db = client.db('CS222Backend');
        req.db = db;

        // proceed to expressjs route
        console.log("connected to db");
        next();
    } catch (error) {
        console.log(error);
        res.status(500).send({message: 'Database connection error',
                              error : error});
    }
})


// GET
// http://localhost:8080/testRoute
app.get('/testRoute', async (req, res) => { // test get request to return "hello world" as a message in JSON
    res.status(200).send({message: "Hello world"});

    name = req.body.name

})

app.post('/addrecipe', async (req, res)=> {
    const newRecipe = req.body.recipe; 
    console.log(newRecipe); 

    try {
        // inserts new recipe into the database
        const recipe = req.db.collection("Recipes"); 
        console.log("connected to collection");
        await recipe.insertOne(newRecipe); 
        res.status(200).send({
            message : "new recipe was added successfully",
            recipe : newRecipe
        }); 
    } catch (err) {
        console.log(err); 
        res.status(422).send({message : "an error occurred attempting to add recipe"}); 
    } finally {
        // closes MongoDB client
        if (req.db) {
            await req.db.client.close(); 
        }
    }
}); 


