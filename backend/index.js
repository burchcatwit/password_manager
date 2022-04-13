//Insert your "secret link" here to access mongodb
const uri = "mongodb+srv://burchy99:%2AJL0hn36%23%2AgC@passmanager.lkwxg.mongodb.net";
const MongoClient = require("mongodb").MongoClient;
const client = new MongoClient(uri, {
    useNewUrlParser: true,
});

let AccountCreation;
MongoClient.connect(uri)
  .then(client => {
    // ...
    const db = client.db('PassManager')

    AccountInfo = db.collection('UserInformation')
    TestInsert = db.collection('Test1')

    // ...
  })

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
    const collection = client.db("PassManager").collection("Test");
    const passwords = await collection.find( {accountUsername: "Alexane_Schneider"} ).toArray();
    resp.setHeader('Content-Type', 'application/json');
    resp.send(JSON.stringify(passwords));
});



app.delete("/api/passwords", async (req, resp) =>{
    let {_id} = req.body;
    await client.connect();
    console.log("Connected correctly to server");
    const collection = client.db("PassManager").collection("Test");
    await collection.deleteOne({_id: ObjectId(_id)})
});

const pushUpdate = async (password) =>{
    let $set  = { ...password };
    delete $set._id;
    await client.connect();
    console.log("Connected correctly to server");
    const collection = client.db("PassManager").collection("Test");
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
    const collection = client.db("PassManager").collection("Test");
    for (let i in req.body){
        await pushUpdate(req.body[i]);
    }
    resp.send({ success: true });
})

app.post('/accountcreation', async (req, resp) => {
    await client.connect();
    console.log("Connected correctly to server");
    AccountInfo.insertOne(req.body)
      .then(result => {
        console.log(result)
      })
      .catch(error => console.error(error))
      resp.send({ success: true }); 
  })

  app.post('/login', async (req, resp) => {
    await client.connect();
    console.log("Connected correctly to server");
    AccountInfo.aggregate([ { $match : { username : req.body.username,password: req.body.password } } ]).toArray()
    .then(result => {
      resp.sendStatus(200)
        console.log(result)
        console.log("We found it") 
      })
     
      .catch(error => console.error(error))
    

  })

app.listen(5000, () => console.log('API is running on http://localhost:5000/login'));