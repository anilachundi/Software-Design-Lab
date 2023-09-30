const app = require('express')();
const PORT = 8080;

app.listen(
    PORT,
    () => console.log(`alive on http://localhost:${PORT}`)
)

// GET
// http://localhost:8080/testRoute
app.get('/testRoute', async (req, res) => { // test get request to return "hello world" as a message in JSON
    res.status(200).send({message: "Hello world"});
})