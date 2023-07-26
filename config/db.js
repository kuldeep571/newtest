const mysql = require("mysql");
const dbconfig = {
    host: "localhost",
    user: "root",
    password: "admin123",
    database: "mypro"
}
const connection = mysql.createConnection(dbconfig)
connection.connect(function(error){
    if(error){
        console.log("database is not connect");
    }else{
        console.log("database is connected");
    }
})
module.exports.connection = connection;