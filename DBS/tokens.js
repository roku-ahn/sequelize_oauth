let token;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
module.exports = (injectedtokenDB) =>{
    token = injectedtokenDB;
	return {
		saveAccessToken: saveAccessToken,
		getUserIDFromBearerToken: getUserIDFromBearerToken,
	};
}


let  saveAccessToken = (accessToken, userID) =>{
    return new Promise(function (resolve, reject){
       // console.log(accessToken);
        if(accessToken != null){
			console.log("11123",accessToken);
			resolve(accessToken);
		}
        
        else 
        reject(userID)
    });
} 
function tokenToString(tk){
	const ret = 'accessToken:' + tk.accessToken.toString() +',' + 
				'accessTokenExpiresAt:' + tk.accessTokenExpiresAt.toString() +',' +
				'refreshToken:' + tk.refreshToken.toString() +',' +
				'refreshTokenExpiresAt:' + tk.refreshTokenExpiresAt.toString() +',' +
				'scope:' + tk.scope;				
	return ret;
}	

let  getUserIDFromBearerToken = (bearerToken, userID) =>{
    return new Promise(function (resolve, reject){
        console.log(bearerToken);
        /*
    const getUserIDQuery = `SELECT * FROM access_tokens WHERE access_token = '${bearerToken}';`;

	pgPool.query(getUserIDQuery, (response) => {
		const userID =
			response.results && response.results.rowCount == 1
				? response.results.rows[0].user_id
				: null;

		cbFunc(userID);
	});
    */
        resolve(accessToken);
    });
} 
