const db = require("../config/db")
class usermodel{
    constructor(){}

    insertdata(userdata){
        return new Promise(function(resolve, reject){
            const data = `INSERT INTO test(firstname, lastname, email, password, contact)VALUES('${userdata.firstname}', '${userdata.lastname}', '${userdata.email}', '${userdata.password}', '${userdata.contact}')`;
            db.connection.query(data, function(error, result){
                if(error){
                    reject(error);
                }else{
                    resolve(result);
                }
            })
        })
    }
    
    loginauth(email){
        return new Promise(function(resolve, reject){
            const data = `SELECT * FROM test WHERE email='${email}'`;
            db.connection.query(data, function(error, result){
                if(error){
                    reject(error);
                }else{
                    resolve(result);
                }
            })
        })
    }

    insertpro(data, userid){
        return new Promise(function(resolve, reject){
            const datas= `INSERT INTO product(title, price, quantity, description, profile, userid)VALUES('${data.title}', '${data.price}', '${data.quantity}', '${data.description}', '${data.imagenewname}', '${userid}')`;
            db.connection.query(datas, function(error, result){
                if(error){
                    reject(error);
                }else{
                    resolve(result);
                }
            })
        })
    }

    async product_list(){
        return new Promise(function(resolve, reject){
            const prodata = `SELECT * FROM product`
            db.connection.query(prodata, function(error, result){
                if(error){
                    reject(error);
                }else{
                    resolve(result);
                }
            })
        })
    }

    async deletepro(deleteid){
        return new Promise(function(resolve, reject){
            const deletedata = `DELETE FROM product WHERE id= '${deleteid}'`;
            db.connection.query(deletedata, function(error, result){
                if(error){
                    reject(error);
                }else{
                    resolve(result);
                }
            })
        })
    }

    async userpro(data){
        return new Promise(function(resolve, reject){
            const getlogindata = `SELECT * FROM product where userid = '${data.isUserLogin}'`;
            db.connection.query(getlogindata, function(error, result){
                if(error){
                    reject(error);
                }else{
                    resolve(result);
                }
            })
        })
    }

    async userlist(){
        return new Promise(function(resolve, reject){
            const deletedata = `SELECT * FROM test`;
            db.connection.query(deletedata, function(error, result){
                if(error){
                    reject(error);
                }else{
                    resolve(result);
                }
            })
        })
    }

    async edit_pro(editid){
        return new Promise(function(resolve, reject){
            const editdata = `SELECT * FROM product WHERE id= '${editid}'`;
            db.connection.query(editdata, function(error, result){
                if(error){
                    reject(error);
                }else{
                    resolve(result);
                }
            })
        })
    }

    async updatepro(data){
        return new Promise(function(resolve, reject){
            let updates = `UPDATE product SET title='${data.title}', price='${data.price}', description='${data.description}', quantity='${data.quantity}'`;
            if(data.imagenewname){
                updates += `, profile='${data.imagenewname}'`;
            }
            updates += `WHERE id='${data.updateid}'`;
            db.connection.query(updates, function(error, result){
                if(error){
                    reject(error);
                }else{
                    resolve(result);
                }
            })
        })
    }

    async deleteuser(deleteid){
        return new Promise(function(resolve, reject){
            const deletedata = `DELETE FROM test WHERE id= '${deleteid}'`;
            db.connection.query(deletedata, function(error, result){
                if(error){
                    reject(error);
                }else{
                    resolve(result);
                }
            })
        })
    }

    async edituser(editid){
        return new Promise(function(resolve, reject){
            const deletedata = `SELECT * FROM test WHERE id= '${editid}'`;
            db.connection.query(deletedata, function(error, result){
                if(error){
                    reject(error);
                }else{
                    resolve(result[0]);
                }
            })
        })
    }

    async updateuser(data, updateid){
        return new Promise(function(resolve, reject){
            const updatedata = `UPDATE test SET firstname = '${data.firstname}', lastname='${data.lastname}', email="${data.email}", contact='${data.contact}' WHERE id='${updateid}'`;
            db.connection.query(updatedata, function(error, result){
                if(error){
                    reject(error);
                }else{
                    resolve(result);
                }
            })
        })
    }

    
    async profile(data){
        return new Promise(function(resolve, reject){
            const getproid = `SELECT * FROM test where id = '${data.isUserLogin}'`;
            db.connection.query(getproid, function(error, result){
                if(error){
                    reject(error);
                }else{
                    resolve(result);
                }
            })
        })
    }

}
module.exports = new usermodel();