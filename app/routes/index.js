import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    new_subreddit(sub_input) {
      //trastionto new route - model will refresh to use new param i believe
    }
  }
  model(params) {
    //load a new subreddit's data
  }
});

outline - i will retrieve a subreddit record with ember, then modify it with the action using an ajax request.
