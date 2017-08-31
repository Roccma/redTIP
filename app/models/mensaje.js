import DS from 'ember-data';

export default DS.Model.extend({
	emisor : DS.belongsTo('usuario'),
	canal : DS.belongsTo('canal'),
	contenido : DS.attr('string'),
	fechaHora : DS.attr('string', {
		defaultValue : function(){
			return new Date();
		}
	})
});
