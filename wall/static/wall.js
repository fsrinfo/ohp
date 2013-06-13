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
			
			this.listenTo(this.postCollection, 'add', this.appendPosts);
			
			
			
			this.listenTo(this.postCollection, 'sync', function () {
				this.stopListening(this.postCollection, 'add');
				this.stopListening(this.postCollection, 'sync');
				this.listenTo(this.postCollection, 'add', this.prependPosts);
				setInterval(this.render, 2000);
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
		},
		prependPosts: function (post) {
				var msg = $('<div id="'+post.get('id')+'">' + post.get('username') + ": " + post.get('text') + '</div>')
				$(this.el).prepend(msg);
		},
		appendPosts: function (post) {
				var msg = $('<div id="'+post.get('id')+'">' + post.get('username') + ": " + post.get('text') + '</div>')
				$(this.el).append(msg);
		},
	});
	
	var postView = new PostView();
}) (jQuery);