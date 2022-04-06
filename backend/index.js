
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
const { ObjectId } = require("mongodb");
console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());
app.get("/api/passwords", async (req, resp) => {
    await client.connect();
    const collection = client.db("PassManager").collection("Username/Password");
    const passwords = await collection.find( {accountUsername: "Alexane_Schneider"} ).toArray();
    resp.setHeader('Content-Type', 'application/json');
    resp.send(JSON.stringify(passwords));
});

app.delete("/api/passwords", async (req, resp) =>{
    let {_id} = req.body;
    await client.connect();
    console.log("Connected correctly to server");
    const collection = client.db("PassManager").collection("Username/Password");
    await collection.deleteOne({_id: ObjectId(_id)})
});

const pushUpdate = async (password) =>{
    let $set  = { ...password };
    delete $set._id;
    await client.connect();
    console.log("Connected correctly to server");
    const collection = client.db("PassManager").collection("Username/Password");
    let result = await collection.updateOne(
        { _id: ObjectId(password._id) },
        {
            $set: $set
        },
        { upsert: true }
    )
}

//Used to update any 
app.post("/api/passwords", req => pushUpdate(req.body) );


app.post("/api/import", async (req, resp) => {
    await client.connect();
    console.log("Connected correctly to server");
    const collection = client.db("PassManager").collection("Username/Password");
    for (let i in req.body){
        await pushUpdate(req.body[i]);
    }
    resp.send({ success: true });
})
app.listen(5000);
