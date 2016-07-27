import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['done'],
  done: Ember.computed.alias('item.done'),


  actions: {
    toggleDone() {
      // let id = this.get('item.id');
      // let store = this.get('store');

      let id = Ember.get( this, 'item.id');
      let store = this.get('store');

      store.findRecord('item', id)
      .then((item) => {
        item.toggleProperty('done');
        return item;
      })
      .then((item) => item.save());
      // this.toggleProperty('done')
    }
  },
  // store: Ember.inject.service('store'),
  store: Ember.inject.service(),
});
// Ember injects store into routes automatically
// but components isolated so need to manually inject store
