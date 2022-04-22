/* mySeedScript.js */

// require the necessary libraries
const faker = require("@faker-js/faker").faker;
const MongoClient = require("mongodb").MongoClient;

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

async function seedDB() {
    // Connection URL
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
        await collection.drop();

        // make a bunch of time series data
        let entryList = [];

        const userName = "Alexane_Schneider";
        for (let i = 0; i < 50; i++) {
            let entry = {
                accountUsername: "Alexane_Schneider",
                siteUsername: faker.internet.email(userName),
                sitePassword: faker.internet.password(),
                OtherNotes: faker.hacker.phrase(),
                siteName: faker.internet.domainName(),
            }

            
            entryList.push(entry);
        }
        await collection.insertMany(entryList);

        console.log(entryList);
        await client.close();
    } catch (err) {
        console.log(err.stack);
    }
}

seedDB();