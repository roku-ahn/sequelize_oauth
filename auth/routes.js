module.exports = (router, authenticator) => {
	
	router.post("/grant", authenticator.grant);    
	
	return router;
};