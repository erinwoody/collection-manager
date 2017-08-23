const express = require("express");
const mongoose = require("mongoose");
const bluebird = require("bluebird");
const bodyParser = require("body-parser");
const logger = require("morgan");
const RareDog = require("./models/RareDog");

const app = express();
mongoose.Promise = bluebird;
mongoose.connect("mongodb://localhost27017/dogCollection");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger("dev"));

app.post("/raredog", function (req, res) {
    let newRareDog = new RareDog(comc);

    newRareDog
       .save()
       .then(function (savedDog) {
           res.send(savedDog);
       })
       .catch(function (err) {
           res.status(500).send(err);
       });
});

app.get("/raredog", function (req, res) {
    RareDog.find()
        .then(function (foundDog) {
            if (!foundDog) {
                return res.send({ msg: "No dogs found" });
            }
            
            res.send(foundDog);

        })
        .catch(function (err) {
            res.status(500).send(err);
        });
});

app.get("/raredog/:id", function (req, res) {
    RareDog.findById(req.params.id)
        .then(function (foundDog) {
            if (!foundDog) {
                return res.send({ msg: "No dogs found" });
            }
            
            res.send(foundDog);

        })
        .catch(function (err) {
            res.status(500).send(err);
        });
});

app.put("/raredog/:id", function (req, res) {
    RareDog.findByIdAndUpdate(req.params.id, req.body)
        .then(function (updatedDog) {
        if (!updatedDog) {
                return res.send({ msg: "Could not update" });
        }
            
        res.send(updatedDog);    
        })
        .catch(function (err) {
            res.status(500).send(err);
        });
});

app.delete("/raredog/:id", function (req, res) {
    RareDog.findByIdAndRemove(req.params.id)
        .then(function (message) {
            console.log("message: ", message);
            res.send(message);
        })
        .catch(function (err) {
            res.status(500).send(err);
        });
});



app.listen(8000, () => console.log("It works!"));
