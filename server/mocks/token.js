module.exports = function(app){
	var express = require('express');
	var tokenRouter = express.Router();
	alert("llegue");
	tokenRouter.post('/token', function(req, res){
		if(req.body.grant.type === "password"){
			if(req.body.nickname === "mauro" && req.body.password === "1234"){
				//alert("correcto");
				res.status(200).send('{"access_token" : "secret token"}');
			}
			else{
				res.status(400).send('{"error" : "credenciales incorrectas"}');
			}
		}
		else{
			res.status(400).send('{"error" : "unsoported_grant_type"}');
		}
	});
}