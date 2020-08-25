 // define a schema
 var mongoose = require('mongoose');
 var Schema =mongoose.Schema;
 var animalSchema = new Schema({ name: String, type: String });

 // assign a function to the "methods" object of our animalSchema
 animalSchema.methods.findSimilarTypes = function(cb) {
   return mongoose.model('Animal').find({name:this.name }, cb);
 };

 var Animal = mongoose.model('Animal', animalSchema);
 var animals = new Animal({name: 'wols', type: 'dog1' });

 var dog = new Animal({ name: 'wols',type: 'dog1' });

  mongoose.connect("mongodb://localhost:27017/actorsdb",{useNewUrlParser:true});
//  animals.save(function(err){
//     mongoose.disconnect();
//     if(err) return console.log(err);
//     console.log(`save object is:${animals}`);
// });
  dog.findSimilarTypes(function(err, dogs) {
     if(err) return console.log(err);
   console.log(dogs); // woof
 });

// mongoose.model('Animal').find({type:'dog'}, function(err,doc){
//     if(err)return console.log(err);
//     console.log(doc);
// })