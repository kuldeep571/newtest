const usermodel = require('../model/usermodel');
const comman = require('../helper/comman');

class userService{
    constructor(){}
    async insertdata(req, res){
        let userdata = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
            contact: req.body.contact
        }
        let result = await usermodel.insertdata(userdata);
        return result;
    }

     async loginauth(req, res){
        const email = req.body.email;
        const password = req.body.password;
        const emaildata = await usermodel.loginauth(email);
        let user = emaildata[0];
        if (emaildata && emaildata.length > 0) {
            if (password == user.password) {
                req.session.isuserloggedin = user.id;
                res.cookie("isUserLogin", user.id)
                return;
            } else {
                req.session.message = "This password is incurrect";
                res.redirect("/login")
            }
        } else {
            req.session.message = "This email incurrect";
            res.redirect("/login");
        }
    }

   async insertpro(req, res){
        let userid = req.cookies; 
        let newid = userid.isUserLogin;
        const data = {
            title: req.body.title,
            price: req.body.price,
            description: req.body.description,
            quantity: req.body.quantity,
        }
        // console.log("userid******", userid);
        // console.log("data******", data);
        // console.log("newid******", newid);
        // return false;//
        const profile = req.files.profile;
        const image = profile.name;
        const image2 = image.split(".");
        const image3 = image2.splice(-1);
        const currentTime = new Date().getTime();
        const random = Math.round(Math.random(16, 1000) * 1000);
        const imagenewname = `${currentTime}_${random}.${image3}`;

        data.imagenewname = imagenewname;
        await comman.imageupload(profile, imagenewname)
        await usermodel.insertpro(data, newid);
        res.redirect("/userpro");
    }

    async product_list(){
        let result = await usermodel.product_list()
        return result;
    }

    async edit_pro(req, res){
        const editid = req.query.editid;
        let result = await usermodel.edit_pro(editid);
        return result;
    }

    async updatepro(req, res){
        const data = {
            updateid: req.query.updateid,
            title: req.body.title,
            price: req.body.price,
            description: req.body.description,
            quantity: req.body.quantity,
        }
        console.log(data, "data ***************");
        let imagenewname = "";
        if (req.files && req.files.profile) {
            const profile = req.files.profile;
            const img1 = profile.name;
            const img2 = img1.split('.');
            const img3 = img2.splice(-1);
            const currentTime = new Date().getTime();
            const random = Math.round(Math.random(1000, 10000) * 1000);
            imagenewname = `${currentTime}_${random}.${img3}`;
            data.imagenewname = imagenewname;
            await comman.uploadimage(profile, imagenewname);
        }
        let result = await usermodel.updatepro(data);
        return result;
    }

    async deletepro(req, res){
        const deleteid = req.query.deleteid;
        let result = await usermodel.deletepro(deleteid);
        return result;
    }

    async userpro(req, res){
        const data = req.cookies;
        let result = await usermodel.userpro(data);
        return result;
    }

    async userlist(){
        let result = await usermodel.userlist();
        return result;
    }
    
    async deleteuser(req, res){
        const deleteid = req.query.deleteid;
        let result = await usermodel.deleteuser(deleteid);
        return result;
    }

    async edituser(req, res){
        let editid = req.query.editid;
        let result =  await usermodel.edituser(editid);
        // console.log("result", result);
        return result;
    }

    async updateuser(req, res){
        const updateid = req.query.updateid;
        let userdata = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            contact: req.body.contact
        }
        let result = await usermodel.updateuser(userdata, updateid);
        return result;
    }

    async profile(req, res){
        const data = req.cookies;
        let result=await usermodel.profile(data);
        console.log("result^^^^^^", result)
        return result;
    }
}
module.exports = new userService();