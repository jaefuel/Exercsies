console.log('May Node be with you');

const express = require('express');
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const app = express();

MongoClient.connect("mongodb+srv://jayfuel:15962058@cluster0.wxmgryp.mongodb.net/?retryWrites=true&w=majority", 
{ useUnifiedTopology: true })
    .then(client => 
    {
        console.log('Connected to Database');
        const db = client.db('star-wars-quotes');
        const quotesCollection = db.collection("quotes");

        app.set("view engine", "ejs");
        
        app.use(bodyParser.urlencoded({extended:true}));
        app.use(bodyParser.json());

        app.use(express.static('public'));

        app.get('/', (req, res) =>
        {
            quotesCollection.find().toArray()
            .then (results => 
                {
                    res.render("index.ejs", {quotes: results});
                    console.log(results);
                })  
                .catch (error => console.log(error));

            
            //res.sendFile(__dirname + '/index.html');
        });

        app.post("/quotes", (req,res) => 
        {
            quotesCollection.insertOne(req.body)
            .then(result => {
                console.log(JSON.stringify(result));
                res.redirect('/')
                })
                .catch (error => console.log(error));
       
        })

        app.put("/quotes", (req,res) => 
        {
            quotesCollection.findOneAndUpdate
            (
                {name: "Yoda"},
                {
                    $set: 
                    {
                        name: req.body.name,
                        quote: req.body.quote
                    }
                },
                {
                    upsert: true
                }               
            )
            .then (result => {
                console.log(result);
                res.json('Success');
            })
            .catch (error => 
            {
                console.log(error)
            });
        })

        app.delete("/quotes", (req,res) =>
        {
            quotesCollection.deleteOne
            (
                {name: req.body.name}
            )
            .then (result => {
                console.log(result.deletedCount);
                if (result.deletedCount === 0) {
                 res.json('No quote to delete');
                  }
                res.json('Deleted quote');
            })
            .catch (error => 
            {
                console.log(error)
            });

        })

        app.listen(3001, () =>
        {
            console.log('listening on 3000')
        });

    })
    .catch(error => console.error(error))

