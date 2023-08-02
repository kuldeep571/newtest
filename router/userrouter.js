const usercontroller = require("../controller/usercontroller");
const express = require("express");
const app = express();


app.get("/home", usercontroller.home)

app.get("/signup", usercontroller.signup)

app.post("/signup", usercontroller.insertdata)

app.get("/login", usercontroller.login)

app.post("/login", usercontroller.loginauth)

app.get("/product", usercontroller.product)

app.post("/product", usercontroller.insertpro)

app.get("/product_list", usercontroller.product_list)

app.get("/deletepro", usercontroller.deletepro)

app.get("/logout", usercontroller.logout)

app.get("/editpro", usercontroller.edit_pro)

app.post("/update", usercontroller.updatepro)

app.get("/userpro", usercontroller.userpro)

app.get("/userlist", usercontroller.userlist)

app.get("/deleteuser", usercontroller.deleteuser)

app.get("/edituser", usercontroller.edituser)

app.post("/updateuser", usercontroller.updateuser)

app.get("/profile", usercontroller.profile)



module.exports = app;