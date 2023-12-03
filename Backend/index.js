const express = require('express');
const app = express(); 
const connectFunction = require('./database');
const axios = require('axios');

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
app.get('/test-route', async (req, res) => { // test get request to return "hello world" as a message in JSON
    res.status(200).send({message: "Hello world"});
})


// GET
// http://localhost:8080/testConnection
app.get('/test-connection', async (req, res) => { // test get request to return a dummy document from the database in JSON
     // connect to collection and retrieve dummy document
     try {
        const users = req.db.collection('Recipes');
        const query = { name: "abc" };
        const user = await users.findOne(query);
        
        // if user is not found, return error message, otherwise return error
        if (!user) {
            res.status(404).send({message : "dummy document not found"});
        } else {
            res.status(200).send({user : user});
        }

    } catch (err) {
        console.log(err);
        res.status(400).send({message : `An error ocurred trying to retrieve data`});
    } finally {
        if (req.db) {
            await req.db.client.close();
        }
    }
})

// POST
// http://localhost:8080/add-user
// MAKE SURE TO INCLUDE JSON OBJECT TO INSERT IN REQUEST BODY
/* Example JSON:
    {
	    "user" : {
            "username" : "abcExampleUserasdf",
	        "password" : "badPasswordlalksjdf2"
        }
    }

*/
app.post('/add-user', async(req, res)=> {
    const newUser = req.body.user;
    try {
        current_users = await axios.get('http://localhost:8080/getAllUsers');
        //console.log(current_users.data);
        for (const user of current_users.data) {
            if (user.username == newUser.username) {
                res.status(422).send({message : "username already exists"});
            }
        }

        // inserts new user into the database
        const users = req.db.collection("Users"); 
        await users.insertOne(newUser); 
        res.status(200).send({
            message : "new user was added successfully",
            user : newUser
        }); 
    } catch (err) {
        console.log(err); 
        //res.status(422).send({message : "an error occurred attempting to add user"}); 
    } finally {
        // closes MongoDB client
        if (req.db) {
            await req.db.client.close(); 
        }
    }
})

// POST
// http://localhost:8080/add-recipe
// MAKE SURE TO INCLUDE JSON OBJECT TO INSERT IN REQUEST BODY
/* Example JSON:
    {
	    "recipe" : {
		    "user_id" : "abcexampleid",
		    "name" : "Fried Rice",
		    "ingredient_list" : [ "rice", "onion"],
	    },
	    "username" : "abcExampleUser"
    }
*/
app.post('/add-recipe', async (req, res)=> {
    const newRecipe = req.body.recipe; 
    const userToInsert = req.body.username;

    const apiKey = '8818bbeb9ec555d9a37cb91ee663472b';
    const applicationId = '1432197e';
    const apiIDEndpoint = 'https://trackapi.nutritionix.com/v2/search/instant';
    const apiNutritionEndpoint = 'https://trackapi.nutritionix.com/v2/natural/nutrients';

    const ingredients = newRecipe.ingredient_list;

    const headers = {
        'x-app-id': applicationId,
        'x-app-key': apiKey,
        'Content-Type': 'application/json',
    }

    const allNutritionData = [];
    data = newRecipe;
    for (const ingredient of ingredients) {
        try {
            // Make a get request to v2/search/instant to find item id
            console.log(ingredient.name);
            const idResponse = await axios.get(apiIDEndpoint, {
                params: {
                    query: ingredient.name,
                },
                headers,
            });

            const id = idResponse.data.common[0].food_name;

            // Make a post request to v2/natural/nutrients (with id as query) to get nutritional info
            const nutritionResponse = await axios.post(apiNutritionEndpoint, {
                query: id,
            }, {
                headers,
            });

            // Add the nutritional info to the array
            console.log(nutritionResponse.data.foods[0])
            allNutritionData.push(nutritionResponse.data.foods[0].nf_calories);
            
        }  catch (err) {
            console.error(err);
        }
    }

    //finding specified user
    console.log("userToInsert: " + userToInsert);
    try {
        const users = req.db.collection("Users");
        console.log("connected to users collection");
        const query = { username: userToInsert };
        const user = await users.findOne(query);
        console.log("user: " + user);
        var queried_user_id = user.username;
    } catch (err) {
        console.log(err);
        res.status(422).send({message : "an error occurred attempting to find the specified user"});
    }



    try {
        // inserts new recipe into the database
        const recipe = req.db.collection("Recipes"); 
        newRecipe.user_id = queried_user_id;
        newRecipe.nutrition_data = allNutritionData;
        console.log("connected to collection");
        await recipe.insertOne(data); 
        res.status(200).send({
            message : "new recipe was added successfully",
            recipe : data
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

// GET
// http://localhost:8080/getUser
/* Example JSON:
    {
	    "username" : "abcExampleUser",
        "password" : "badPassword"
    }
*/
app.post('/getUser', async (req, res) => {
    try {
        console.log(req.body);
        const un = req.body.username;
        const pw = req.body.password;
        const collection = req.db.collection('Users'); 
        const user = await collection.find({username: un}).toArray();
        if (user[0].password != pw) {
            res.status(422).send({message : `wrong password`});
        }
        res.status(200).send(user); 
    } catch (err) {
        console.log(err);
        res.status(400).send({message : `An error ocurred trying to retrieve User from database`});
    } finally {
        if (req.db) {
            await req.db.client.close();
        }
    }
})

app.get('/getAllUsers', async (req, res) => {
    try {
        const collection = req.db.collection('Users'); 
        const items = await collection.find({}).toArray();
        res.status(200).send(items); 
    } catch (err) {
        console.log(err);
        res.status(400).send({message : `An error ocurred trying to retrieve Users database`});
    } finally {
        if (req.db) {
            await req.db.client.close();
        }
    }
})

// GET
// http://localhost:8080/getAllRecipes
/* Example JSON:
    {
	    "username" : "abcExampleUser"
    }
*/
app.post('/getAllRecipes', async (req, res) => {
    try {
        const user = req.body.username;
        console.log(user);
        const collection = req.db.collection('Recipes'); 
        
        const items = await collection.find({user_id: user}).toArray();
        res.status(200).send(items); 
    } catch (err) {
        console.log(err);
        res.status(400).send({message : `An error ocurred trying to retrieve Recipes database`});
    } finally {
        if (req.db) {
            await req.db.client.close();
        }
    }
})