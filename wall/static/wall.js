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
			
			this.postCollection = new PostCollection;
			
			
			this.postCollection.fetch({
				add: true,
				success: function(posts) {
				    console.log(posts);
				},
			});
			
			this.listenTo(this.postCollection, 'add', function (post) {
				if(this.lastid < post.get('id'))
					$(this.el).prepend('<div>' + post.get('username') + ": " + post.get('text') + " (" + post.get('datetime') + ")" + '</div>');
				else
					$(this.el).append('<div>' + post.get('username') + ": " + post.get('text') + " (" + post.get('datetime') + ")" + '</div>');
				this.lastid = post.get('id')
			});
			
			this.lastid = -1
			
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
		},
	});
	
	var postView = new PostView();
	setInterval(postView.render, 1000);
}) (jQuery);