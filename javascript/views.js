Vue.component('navbar', {
  template: '<h1>This is a try</h1>'
})

var navbar = new Vue({
  el: '#navbar'
})

var test = new Vue({
  el: '#try',
  data: {
    message: 'Hello Vue!'
  }
})

// Creating a new Vue instance and pass in an options object.
var demo = new Vue({

	// A DOM element to mount our view model.
	el: '#main',

    // This is the model.
	// Define properties and give them initial values.
	data: {
		isActive: 'home'
	},

	// Functions we will be using.
	methods: {
		makeActive: function(item){
			// When a model is changed, the view will be automatically updated.
			this.isActive = item;
		}
	}
});
