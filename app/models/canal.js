import DS from 'ember-data';

export default DS.Model.extend({
	nombre : DS.attr('string'),
	imagen : DS.attr('string'),
	fecha : DS.attr('string', {
		defaultValue : function(){
			return new Date();
		}
	}),
	estado : DS.attr('string'),
	usuarios : DS.hasMany('usuario')
});
