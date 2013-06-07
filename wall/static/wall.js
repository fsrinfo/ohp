(function ($) {
	
	PostCollection = Backbone.Collection.extend({
		url: '/api/post/',
		parse: function (resp, xhr) {
			return resp.results;
		}
	});

	PostView = Backbone.View.extend({
		el: '.posts',
		initialize: function () {
			_.bindAll(this);
			this.postCollection = new PostCollection();
			_.bindAll(this.postCollection.this);
			this.listenTo(this.postCollection, 'add', function (post) {
				$(this.el).append('<div>' + post.get('text') + '</div>');
			});
		},
		render: function () {
			this.loadPosts();
		},
		loadPosts: function () {
			this.postCollection.fetch({
				add: true,
				remove: false,
				update: true,
				merge: true,
				reset: false,
			});
		}
	});
	
	var postView = new PostView();
	setInterval(postView.render, 1000);
}) (jQuery);