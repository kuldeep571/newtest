const Joi = require('joi');
class uservalidation{
    constructor(){}

    async insertdata(req, res){
        let responce={
            validate: true,
            message: null
        }
        const schema = Joi.object({
            firstname : Joi.string().trim().required(),
            lastname : Joi.string().trim().required(),
            email : Joi.string().email().required(),
            password : Joi.string().min(8).max(15).required(),
            contact : Joi.string().min(10).required()
        })
        const responcedata = schema.validate(req.body);
        if(responcedata.error && responcedata.error.details){
            responce.validate = false;
            responce.message = responcedata.error.details[0].message;
        }
        return responce;
    }

    async loginauth(req, res){
        let responce={
            validate: true,
            message: null
        }
        const schema = Joi.object({
            email : Joi.string().email().required(),
            password : Joi.string().min(8).max(15).required()
        })
        const responcedata = schema.validate(req.body);
        if(responcedata.error && responcedata.error.details){
            responce.validate = false;
            responce.message = responcedata.error.details[0].message;
        }
        return responce;
    }

    async insertpro(req, res){
        let responce={
            validate: true,
            message: null
        }
        const schema = Joi.object({
            title : Joi.string().trim().required(),
            price : Joi.string().trim().required(),
            description : Joi.string().trim().required(),
            quantity : Joi.string().trim().required()
            
        })
        const responcedata = schema.validate(req.body);
        if(responcedata.error && responcedata.error.details){
            responce.validate = false;
            responce.message = responcedata.error.details[0].message;
        }
        return responce;
    }

    async updatepro(req, res){
        let responce={
            validate: true,
            message: null
        }
        const schema = Joi.object({
            title : Joi.string().trim().required(),
            price : Joi.string().trim().required(),
            description : Joi.string().trim().required(),
            quantity : Joi.string().trim().required()
            
        })
        const responcedata = schema.validate(req.body);
        if(responcedata.error && responcedata.error.details){
            responce.validate = false;
            responce.message = responcedata.error.details[0].message;
        }
        return responce;
    }

    async updateuser(req, res){
        let responce={
            validate: true,
            message: null
        }
        const schema = Joi.object({
            firstname : Joi.string().trim().required(),
            lastname : Joi.string().trim().required(),
            email : Joi.string().email().required(),
            contact : Joi.string().min(10).required()
        })
        const responcedata = schema.validate(req.body);
        if(responcedata.error && responcedata.error.details){
            responce.validate = false;
            responce.message = responcedata.error.details[0].message;
        }
        return responce;
    }
}
module.exports = new uservalidation();