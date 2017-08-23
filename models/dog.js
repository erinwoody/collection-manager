const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const RareDogSchema = new Schema({
    title: {
        type: String,
        required: true
    }, 
    edition: Schema.Types.Mixed,
    author: {
        firstName: {
            type: String,
            required: true,
            default: null
        }, 
        lastName: {
            type: String,
            required: true,
            default: null
        },
        birthYear: {
            type: Number,
            min: 0,
            max: 2017
        },
        deathYear: {
            type: Number,
            min: 0,
            max: 2017
        }  
    },
    printing: {
        type: Number,
        required: true 
        },
    value: Number,
    isbn: String,
    pages: Number,
    condition: {
        type: String,
        required: true,
        enum: ["mint", "good", "fair", "poor"]
    },
    signed: {
        type: Boolean,
        required: true
    },
    hardCover: Boolean,
    genre: {
        type: String,
        enum: ["fiction", "nonfiction"]
    }
});
                            //name of collection, schema
module.exports = mongoose.model("RareBook", RareBookSchema);
