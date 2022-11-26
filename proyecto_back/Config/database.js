const mongoose=require("mongoose");

const host ="usuario_so";
const port ="12345";
const db= "villaplast.rutxqo3.mongodb.net/?retryWrites=true&w=majority";





exports.mongoConnect=()=>{
    const mongoStringConnection=`mongodb+srv://${host}:${port}@${db}`;
    mongoose.connect(mongoStringConnection);
    mongoose.Promise=global.Promise;
    const dbConnection=mongoose.connection;
    dbConnection.on("error",console.error.bind(console,"Mongo connection error"));

}