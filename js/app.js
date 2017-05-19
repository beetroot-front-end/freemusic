(function($){
	let search = $('.search'),
		container = $('.container'),
		list = $('.container_list-notActive'),
		song = $('.container_song'),
		controller = $('.controller'),
		search_input = $('.search_input'),
		value = search_input.val(),
		action = $('.container_icon_action'),
		info = $('.container_list-info'),
		name = $('.container_list-name'),
		like = $('.container_icon_like'),
		liImg = $('.container_list-img');

		action.on('click', function() {
			name.addClass('invisible');
			info.removeClass('invisible');
		})


		search_input.keyup(function() {
			let search_input = $('.search_input'),
				value = search_input.val();
			if (value.trim().length) {
				container.removeClass('invisible');
				search.removeClass('search_clear')
			  		  	.addClass('search_full');
			
		} else { 
			container.addClass('invisible');
			list.removeClass('container_list')
				.addClass('container_list-notActive');
			song.addClass('invisible');
			search.removeClass('search_full')
				  .addClass('search_clear');
			controller.addClass('invisible');
			info.addClass('invisible');
			name.removeClass('invisible');
	}
		})
	name.on('click', function(){
		list.removeClass('container_list-notActive')
			.addClass('container_list');
		song.removeClass('invisible');
		controller.removeClass('invisible');
	})
	info.on('click', function(){
		list.removeClass('container_list-notActive')
			.addClass('container_list');
		song.removeClass('invisible');
		controller.removeClass('invisible');
	})
	like.on('click', function(){
		list.removeClass('container_list-notActive')
			.addClass('container_list');
		song.removeClass('invisible');
		controller.removeClass('invisible');
	})
	liImg.on('click', function(){
		list.removeClass('container_list-notActive')
			.addClass('container_list');
		song.removeClass('invisible');
		controller.removeClass('invisible');
	})
}(jQuery));