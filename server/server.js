const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// to use all routes in the routes folder
const { readdirSync } = require("fs");

require('dotenv').config();

const app = express();

// database 

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
}).then(() => console.log("DB CONNECTED"))
    .catch((error) => console.log("DB CONNECTION FAILED", error))

// middlewares

app.use(bodyParser.json({ limit: "2mb" }));
app.use(cors());



// to use all routes in a routes folder applying middleware
readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));

// port

const port = process.env.PORT || 8000
const host = process.env.HOST || '127.0.0.1';

app.listen(port, host, () => {
    console.log(`Server started on port ${port}`)
}
)
