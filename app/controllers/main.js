import Ember from 'ember';

export default Ember.Controller.extend({
	session : Ember.inject.service('session'),
	actions : {
		
		login : function(){
			var nickname = this.get('nickname');
			var password = this.get('password');

			//Ember.ENV.ACTIVE_MODEL_API_URL = "http//localhost:3000/canales";
			
			//alert(nickname + " - " + password);
			var that = this;
			if(nickname && password){
				var usuario = this.store.createRecord('usuario',{
					nickname : nickname,
					password : password
				});

				
				/*var lista = this.store.findAll('usuario').then(function(list){
					list = list.filterBy("nickname", nickname);
					list = list.filterBy("password", password);
					return list;			
				});*/

				//var lista = this.store.findAll('usuario');

				//console.log(lista);
				/*if(lista['usuarios'].length() < 1){
					$('#alertLogin').html("<strong>ERROR:</strong> Credenciales incorrectas");
					$('.rowAlert').fadeIn();
					setTimeout(function(){
						$('.rowAlert').fadeOut();
					}, 5000);
				}
				else{
					window.location.href = "/chat";
				}*/
				alert("aca");
				this.get('session').authenticate('devise', nickname, password).catch((reason) => {
					$('#alertLogin').html("<strong>ERROR:</strong> Credenciales incorrectas");
					$('.rowAlert').fadeIn();
					setTimeout(function(){
						$('.rowAlert').fadeOut();
					}, 5000);
				});

			}
			else{
				if(!nickname){
					$('#nickname').parent().addClass("has-error");					
				}
				else{
					$('#nickname').parent().removeClass("has-error");
				}

				if(!password){
					$('#password').parent().addClass("has-error");	
				}
				else{
					$('#password').parent().removeClass("has-error");
				}

				$('#alertLogin').html("<strong>ERROR:</strong> No se han completado campos");
				$('.rowAlert').fadeIn();
				setTimeout(function(){
					$('.rowAlert').fadeOut();
				}, 5000);
			}
		}
	}
});
