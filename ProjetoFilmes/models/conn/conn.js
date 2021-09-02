const mongoose = require('mongoose');

function Conn(url,porta,banco){
    mongoose.connect(`mongodb://${url}:${porta}/${banco}`,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() =>{
        console.log("Connected");
    }).catch((err)=>{
        console.log(err);
    });
}

module.exports = Conn;