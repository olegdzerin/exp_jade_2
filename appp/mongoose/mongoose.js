const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const actorSchema = new Schema(
    {
        name: String,
        // age: {
        //     type: String,
        //     required: true
        // }
        age: String
    }
);
mongoose.connect("mongodb://localhost:27017/actorsdb",{useNewUrlParser:true});
const Actor =  mongoose.model('Actor',actorSchema);
const actor = new Actor(
    {
        name: "Bykov1",
        age: "52"

    }
);
actor.save(function(err){
    mongoose.disconnect();
    if(err) return console.log(err);
    console.log(`save object is:${actor}`);
});

