import DS from 'ember-data';

export default DS.Model.extend({
	nickname : DS.attr('string'),
	password : DS.attr('string'),
	email : DS.attr('string'),
	facebook : DS.attr('string'),
	twitter : DS.attr('string'),
	linkedin : DS.attr('string'),
	avatar : DS.attr('string'),
	contactos : DS.hasMany('contacto'),
	canales : DS.hasMany('canal'),
	creado : DS.attr('string', {
		defaultValue : function(){
			return new Date();
		}
	})
});
