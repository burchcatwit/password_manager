/* mySeedScript.js */

// require the necessary libraries
const MongoClient = require("mongodb").MongoClient;


async function seedDB() {
    //Insert your "secret link" here to access mongodb
    const uri = "";

    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        // useUnifiedTopology: true,
    });

    try {
        await client.connect();
        console.log("Connected correctly to server");

        const collection = client.db("PassManager").collection("Username/Password");

        // The drop() command destroys all data from a collection.
        // Make sure you run it against proper database and collection.
        //await collection.drop();

        
        let entry = {}
        const util = require('util');
        const readline = require('readline');
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        const question = util.promisify(rl.question).bind(rl);

        let siteName = await question("What site is this for?\n");
        let siteUsername = await question("Wait is your Username?\n");
        let sitePassword = await question("What is your Password?\n");
        let otherNotes = await question("Is there anything else you want to note?\n");
        rl.close();
        let accountUsername = "Alexane_Schneider";
        entry = {
            siteName: siteName,
            siteUsername: siteUsername,
            sitePassword: sitePassword,
            OtherNotes: otherNotes,
            accountUsername: accountUsername
        }
        await collection.insertOne(entry);


        await client.close();
    } catch (err) {
        console.log(err.stack);
    }
}

seedDB();