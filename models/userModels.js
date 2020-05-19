var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    name : {type:String,require:true},
    age : {type:Number,require:true},
    state : {type:String,require:true},
    bloodgroup : {type:String,require:true},
    phonenumber : {type:Number,require:true}
})

module.exports = mongoose.model('bloodBank',schema);