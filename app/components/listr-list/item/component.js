import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['done'],
  done: Ember.computed.alias('item.done'),

  actions: {
    // click references a function by its passed in name
    click () {
      this.sendAction('click', this.get('item'));
    },
    delete () {
      this.sendAction('delete', this.get('item'));
    },
  },
  // store: Ember.inject.service('store'),
  store: Ember.inject.service(),
});
// Ember injects store into routes automatically
// but components isolated so need to manually inject store
