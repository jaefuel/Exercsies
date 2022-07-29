const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const PORT = 3000;

MongoClient.connect("mongodb+srv://jaefuel:15962058@cluster0.qbhiu3b.mongodb.net/?retryWrites=true&w=majority" , {useUnifiedTopology: true})
.then(client =>
{
    const db = client.db("nba-legends");
    const playerCollection = db.collection("players");

    app.set("view engine", "ejs");

    app.use(express.static("public"));
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));

    app.get("/" , (req,res) => 
    {
        playerCollection.find().toArray()
        .then(result =>
        {
            res.render("index.ejs", {list: result});
        }).catch(error => console.log(error));
        
    });

    app.post("/players" , (req,res) =>
    {
        
        playerCollection.insertOne(req.body)
        .then(result =>
        {
            res.redirect("/")
        })
        .catch(error => console.log(error));
    });

    app.delete("/deletePlayer" , (req,res) =>
    {
        playerCollection.deleteOne
        (
            {
                name: req.body.name,
                rating: req.body.rating
            }
        )
        .then(result =>
        {
            console.log(result);
            res.json('Player Deleted')
        })
        .catch(error => console.error(error))
    });

    app.put("/updatePlayer" , (req,res) =>
    {
        playerCollection.findOneAndUpdate
        (
            {
                name: req.body.name,
                rating: req.body.rating
            },
            {
                $set:
                {
                    rating: req.body.newRating
                }
            }
        )
        .then(result =>
        {
            console.log(result);
            res.json('Player Updated')
        })
        .catch(error => console.error(error))
    });



    app.listen(PORT, () =>
    {
        console.log("Listening on PORT " + PORT)
    })
})
.catch(error => console.log(error))

