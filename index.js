const express = require('express');
const cors = require('cors');
require('dotenv').config();
// const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 5000;


const app = express();

//middleware
app.use(cors());
app.use(express.json());


//mongoDB connection
// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_USER_KEY}@cluster0.iipcqf5.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// });


// async function run() {
//     try {

//         const voterCollection = client.db("election").collection("voterList");

//         //store data
//         app.post("/voter", async (req, res) => {
//             const voter = req.body;
//             console.log(voter);

//             const result = await voterCollection.insertOne(voter);
//             console.log(result);
//             res.send(result);
//         })


//         //get data all item
//         app.get("/voter", async (req, res) => {
//             const query = {};
//             const cursor = voterCollection.find(query);

//             const storedVoter = await cursor.toArray();
//             res.send(storedVoter);
//         });

//         //delete data
//         app.delete("/voter/:id", async (req, res) => {
//             const id = req.params.id;
//             const query = { _id: new ObjectId(id) };

//             const result = await voterCollection.deleteOne(query);
//             console.log(result);
//             res.send(result);
//         })

//         //upload image
//         app.put("/voter/:id", async (req, res) => {
//             const id = req.params.id;
//             const selectedUser = req.body;
//             // console.log(id);
//             // console.log(selectedUser.imageURL);

//             const filter = { _id: new ObjectId(id) };
//             const option = { upsert: true };
//             const updatedUser = {
//                 $set: {
//                     imageURL: selectedUser.imageURL
//                 }
//             }

//             const result = await voterCollection.updateOne(filter, updatedUser, option);
//             res.send(result);
//         })


//         //provide the api to smart voting
//         app.get("/voter/smartVoting", async (req, res) => {
//             const filter = {
//                 disability: { $ne: "mental" }
//             }
//             const specificColumn = { occupation: 0, birthPlace: 0, disability: 0, dob: 0 }

//             const cursor = voterCollection.find(filter).project(specificColumn).sort({ age: 1 });

//             const filteredVoter = await cursor.toArray();
//             res.send(filteredVoter)
//         })


//     } finally {
//     }
// }

// run().catch(e => console.log(e));`



app.get('/', (req, res) => {
    res.send("Server Running Successfully");
});


app.post('/register', (req, res) => {
    const voter = req.body;
            console.log(voter);
            res.send(voter);

});

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});

