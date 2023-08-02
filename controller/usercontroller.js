const uservalidation = require("../validation/uservalidation");
const userService = require("../service/userService");
class usercontroller {
    constructor() { }

    async home(req, res) {
        const pagedata = {
            title: "home page",
            pagename: "home",
            message: "",
            userloggedin: false
        }
        if(req.session.message){
            pagedata.message = req.session.message;
            delete req.session.message;
        }
        let userpro = await userService.product_list(req, res);
        console.log('userpro', userpro);
        pagedata.pro = userpro;
        res.render("template", pagedata);
    }

    signup(req, res) {
        const pagedata = {
            title: "signup page",
            pagename: "signup",
            message: "",
            userloggedin: false
        }
        if(req.session.isuserloggedin){
            pagedata.userloggedin = true;
        }
        if(req.session.message){
            pagedata.message = req.session.message;
            delete req.session.message;
        }
        res.render("template", pagedata);
    }

    async insertdata(req, res) {
        try {
           let result = await uservalidation.insertdata(req, res);
           console.log('result', result);
           if(result && !result.validate){
                req.session.message = result.message;
                res.redirect('/signup');
                return false;
           }
           await userService.insertdata(req, res);
           res.redirect('/login');
        } catch (error) {
            console.log(error);
        }
    }

    login(req, res) {
        const pagedata = {
            title: "login page",
            pagename: "login",
            message: "",
            userloggedin: false
        }
        if(req.session.isuserloggedin){
            pagedata.userloggedin = true;
        }
        if (req.session.message) {
            pagedata.message = req.session.message;
            delete req.session.message;
        }
        res.render("template", pagedata);
    }

    async loginauth(req, res) {
        try {
            let result =await uservalidation.loginauth(req, res);
            if(result && !result.validate){
                 req.session.message = result.message;
                 res.redirect('/login');
                 return false;
            }
            await userService.loginauth(req, res);
            res.redirect("/product")
         } catch (error) {
             console.log(error);
         }
    }

    product(req, res) {
        const pagedata = {
            title: "product page",
            pagename: "product",
            message: "",
            userloggedin: false
        };
        if(req.session.isuserloggedin){
            pagedata.userloggedin = true;
        }
        if(req.session.message){
            pagedata.message = req.session.message;
            delete req.session.message;
        }
        res.render("template", pagedata);
    }
    
    async insertpro(req, res) {
       try {
            let result = await uservalidation.insertpro(req, res);
            if(result && !result.validate){
                req.session.message = result.message;
                res.redirect('/product');
                return false;
           }
           await userService.insertpro(req, res);
           res.redirect("/product")
       } catch (error) {
            console.log(error);
       }
    }

    async product_list(req, res) {
       try {
        const pagedata = {
            title: "product list",
            pagename: "product_list",
            userloggedin: false
        }
        if (req.session.isuserloggedin) {
            pagedata.userloggedin = true;
        }   
        let userpro = await userService.product_list();
        pagedata.pro = userpro;
        res.render("template", pagedata);
       } catch (error) {
            console.log(error)
       }
    }

    async deletepro(req, res) {
        try {
            await userService.deletepro(req, res);
            res.redirect("/product_list")
        } catch (error) {
            console.log(error);
        }
    }

    logout(req, res) {
        if (req.session.isuserloggedin) {
            delete req.session.isuserloggedin;
            res.clearCookie("isUserLogin");
        }
        res.redirect("/home")
    }

    async edit_pro(req, res) {
        const pagedata = {
            title: "edit product page",
            pagename: "editpro",
            userloggedin: false
        }
        if (req.session.isuserloggedin) {
            pagedata.userloggedin = true;
        }
        let getdata = await userService.edit_pro(req, res);
        let editdata = getdata[0];
        pagedata.data = editdata;
        res.render("template", pagedata);
    }

    async updatepro(req, res) {
        try {
            let result = await uservalidation.updatepro(req, res);
            if(result && !result.validate){
                req.session.message = result.message;
                res.redirect('/product');
                return false;
           }
           await userService.updatepro(req, res);
           res.redirect("/product_list")
        } catch (error) {
            console.log("catch error", error);
        }
    }

    async userpro(req, res) {
        const pagedata = {
            title: "userpro page",
            pagename: "userpro",
            userloggedin: false
        }
        if(req.session.isuserloggedin){
            pagedata.userloggedin = true;
        }
        let result = await userService.userpro(req, res);
        pagedata.pro = result;
        res.render("template", pagedata);
    }

    async userlist(req, res) {
        const pagedata = {
            title: "userlist page",
            pagename: "userlist",
            userloggedin: false
        }
        if(req.session.isuserloggedin){
            pagedata.userloggedin = true;
        }
        let result = await userService.userlist();
        pagedata.user = result;
        res.render("template", pagedata);
    }

    async deleteuser(req, res) {
        try {
            await userService.deleteuser(req, res);
            res.redirect("/userlist")
        } catch (error) {
            console.log(error);
        }
    }

    async edituser(req, res) {
        const pagedata= {
            title: "edit user",
            pagename: "edituser",
            message: "",
            userloggedin: false
        }
        if(req.session.message){
            pagedata.message = req.session.message;
            delete req.session.message;
        }
        if(req.session.isuserloggedin){
            pagedata.userloggedin = true;
        }
        let data=await userService.edituser(req, res);
        pagedata.user = data;
        res.render('template', pagedata);
    }

    async updateuser(req, res) {
        try {
           let result = await uservalidation.updateuser(req, res);
           if(result && !result.validate){
                req.session.message = result.message;
                res.redirect('/edituser');
                return false;
           }
           await userService.updateuser(req, res);
           res.redirect('/userlist');
        } catch (error) {
            console.log(error);
        }
    }

    async profile(req, res) {
        try {
            const pagedata = {
                title: "profile",
                pagename: "profile",
                userloggedin: false
            }
            if(req.session.isuserloggedin){
                pagedata.userloggedin = true;
            }
           let result=await userService.profile(req, res);
           pagedata.pro = result;
           res.render('template', pagedata);
        } catch (error) {
            console.log(error);
        }
    }
}
module.exports = new usercontroller();