let userDB;
let tokenDB;

module.exports = (injectedUserDB, injectedTokenDB) => {
	userDB = injectedUserDB;
	tokenDB = injectedTokenDB;

    return {
        getClient: getClient,
		saveToken: saveToken,
		getUser: getUser,
		grantTypeAllowed: grantTypeAllowed,
		getAccessToken: getAccessToken,
		getUserFormClient :getUserFormClient
    }
}

function getUserFormClient(client,cbFunc){
	console.log('tokenService getUserFormClient');
	cbFunc(false,client);
}

function getClient(clientID, clientSecret, cbFunc) {
	const client = {
		clientID,
		clientSecret,
		grants: ['password'],
		redirectUris: null,
	};
    console.log("tokenService getClient")
	
	cbFunc(false, client);
	
}
function saveToken(accessToken, client, user, cbFunc) {
	console.log("accessToken")
	console.log(cbFunc)
	tokenDB.saveAccessToken(accessToken,client.clieentID)
	.then(res => console.log('saved')//cbFunc(false,res) 
	).catch(err => console.log(err))//cbFunc(true,err))

	//cbFunc(false, true);
}
function grantTypeAllowed(clientID, grantType, cbFunc) {
	console.log("grantTypeAllowed ",clientID);
	cbFunc(false, true);
}


function getUser(username, password, cbFunc) {
	console.log("tokenService : getUser")
	//console.log(userDB)
	userDB.getUserPromise(username, password).then(
		function (result) {
			console.log("!!", result);
			cbFunc(false,result);
		}
	).catch(err => console.log(err));
	//cbFunc(false, true);
}
function getAccessToken(bearerToken, cbFunc) {
    console.log("getAccessTokenss")

	cbFunc(userID === null, userID === null ? null : accessToken);
	
}