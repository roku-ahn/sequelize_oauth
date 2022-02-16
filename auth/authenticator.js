let oauth;
var OAuth2Server = require('oauth2-server');
Request = OAuth2Server.Request,
Response = OAuth2Server.Response;

module.exports = (inputOauth) =>{
    oauth = inputOauth;

    return{
           
        grant: grant
    }
}

function grant(req,res){
    //app.oauth.grant();
    
    var request = new Request(req);
	var response = new Response(res);    
	return oauth.token(request, response)
		.then(function(token) {
            console.log("1234");
			res.status(200).json(token);
		}).catch(function(err) {
            console.log(err);
			res.status(err.code || 500).json(err);
		});           
    
} 