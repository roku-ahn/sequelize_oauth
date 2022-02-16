let user;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = (injectedUserDB) => {
    user = injectedUserDB;
   
    return {
        registerPromise,
        getUserPromise,
        isValidUserPromise,
    };
};

let  registerPromise = (id,pw,name) =>{
    return new Promise(function (resolve, reject){
        user.create({
            id : id,
            pw : pw,
            name : name
        }).then(result => {console.log(result), resolve(result)})
        .catch(err=> {console.log(err),reject(err) })
    });
} 

let getUserPromise = (userid, userpw) =>{
    return new Promise(function (resolve, reject){
        
        console.log(getUserPromise);
        user.findAll({
            where : {              
                    [Op.and] : [{id:userid}, {pw:userpw}]                
            }            
        }
        )
        .then(function (result) {

             let client;
             //console.log(result.length);
             if(result.length == 1){
                 
                const id = result[0].id;
                const pw = result[0].pw;
                client = {
                    username : id,
                    password : pw								
                };
                resolve(client);
             }
             else{
                 reject('not user');
             }
            })
        .catch(err=> {reject(err) })


    });
} 
let isValidUserPromise = (userid) =>{
    return new Promise(function (resolve, reject){
        console.log("isValidUserPromise", Op)
        //console.log(Op.or)
        user.findAll({
            where : {
                id : {
                    [Op.eq] : userid
                }
            }            
        }
        )
        .then(result => {console.log(result), resolve(result)})
        .catch(err=> {console.log(err),reject(err) })

    });
} 