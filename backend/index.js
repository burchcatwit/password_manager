
//Insert your "secret link" here to access mongodb
const uri = "";
const MongoClient = require("mongodb").MongoClient;
const client = new MongoClient(uri, {
    useNewUrlParser: true,
});

// For backend and express
const express = require('express');
const app = express();
const cors = require("cors");
console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());
app.get("/api/passwords", async (req, resp) => {
    await client.connect();
    const collection = client.db("PassManager").collection("Test");
    const passwords = await collection.find( {accountUsername: "Alexane_Schneider"} ).toArray();
    resp.setHeader('Content-Type', 'application/json');
    resp.send(JSON.stringify(passwords));
});

app.listen(5000);