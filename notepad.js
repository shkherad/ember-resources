this.get('item').toggleProperty('done');
this.get('item').save();

// we can write it like ^ cuz we are in the component itself, not the
// route.

// let id = Ember.get( this, 'item.id');
// let store = this.get('store');
//
// store.findRecord('item', id)
// .then((item) => {
//   item.toggleProperty('done');
//   return item;
// })
// .then((item) => item.save());
// // this.toggleProperty('done')
