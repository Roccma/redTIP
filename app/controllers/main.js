import Ember from 'ember';

export default Ember.Controller.extend({
	actions : {
		login : function(){
			var nickname = this.get('nickname');
			var password = this.get('password');
			
			//alert(nickname + " - " + password);
			if(nickname && password){
				var usuario = this.store.createRecord('usuario',{
					nickname : nickname,
					password : password
				});
				//usuario.save();
				alert("Guardado!");
				this.setProperties({
					nickname : '',
					password : ''
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
