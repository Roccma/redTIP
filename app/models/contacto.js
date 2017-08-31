import DS from 'ember-data';

export default DS.Model.extend({
	nickname : DS.attr('string'),
	avatar : DS.attr('string')
});
