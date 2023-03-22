// Requiring the Express Library
const express = require('express');

// Using the express app
const app = express();

// Initializing the PORT
const PORT = 3000;

// Using the json response
app.use(express.json())

//End points - Data Route
app.get("/data", (req, res) => {
    const data = [
        {
            id: 1,
            name: "Ruban"
        },
        {
            id: 2,
            name: "Gino"
        },
        {
            id: 3,
            name: "Singh"
        }
    ]

    res.json({
        status: "ok",
        message: "Data sucessfully Stored",
        data
    })
})

// Home Route
app.get('/', (req, res) => {
    res.send("REST API using Express Server.")
})

app.listen(PORT, () => {
    console.log(`Server is running in Port: ${PORT}`);
})