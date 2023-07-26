class comman{
    constructor(){}

    imageupload(profile, imagenewname){
        return new Promise(function(resolve, reject){
            const uploadPath = `${__dirname}/../public/image/${imagenewname}`;
            profile.mv(uploadPath, async function(error){
                if(error){
                    reject("error")
                }else{
                    resolve(true);
                }
            })

        })
    }

    uploadimage(profile, imagenewname){
        return new Promise(function(resolve, reject){
            const uploadPaths = `${__dirname}/../public/image/${imagenewname}`;
            profile.mv(uploadPaths, async function(error){
                if(error){
                    reject("error")
                }else{
                    resolve(true);
                }
            })

        })
    }

   
    
}
module.exports = new comman();