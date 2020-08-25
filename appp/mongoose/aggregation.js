const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/actorsdb',
{useNewUrlParser:true,useUnifiedTopology: true });
const Schema = mongoose.Schema;
const actorSchema = new Schema(
    {
        //  name:{
        //   type: String,
        //   required: true
        //  },
        // age1: String
    }
);
// mongoose.connect("mongodb://localhost:27017/actorsdb",{useNewUrlParser:true});
 var Actor = mongoose.model('Actor',actorSchema);
//  var actors = new Actor({
//      name:"newoleg", 
//      age: 89
//  });
const docs =  mongoose.model('Actor').find({name1: 'Number'},function(err, res){
    if (err) return console.log(err);
console.log(res);
});
