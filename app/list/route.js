import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    this.get('store').findRecord('list', params.lists_id);
  },

  actions: {
    toggleItemDone (item) {
      item.toggleProperty('done');
      item.save();
    },

    deleteItem (item) {
      item.destroyRecord();
    },

    createItem (data) {
      let item = this.get('store').createRecord('item', data);
      item.save();
    }
  }

});
