import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return this.store.findAll('usuario');

		/*return this.store.findAll('usuario').then(function(list){
			list = list.filterBy("nickname", "mauro2");
			list = list.filterBy("password", "1234");
			return list;			
		});*/
		//return this.store.query('usuario', {reload: true, filter : {nickname : 'mauro'}})
		//return this.store.query('usuario', { filter : {nickname: 'mauro', password: '1234'} });
		//this.store.findRecord('usuario', 1).then(function())
		/*var datos = [];
		datos["nickname"] = "mauro";
		return this.store.find('usuario', JSON.stringify(datos));*/
		//return $E.store.find('usuario', {nickname: "mauro"});

	}
});
