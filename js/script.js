// Let's start with the search bar handler
$(function(){
	var searchField = $('#query');
	var icon = $('#search-btn');

// Next let's take care of the Focus Event Handler
	$(searchField).on('focus', function(){
		$(this).animate({
			width: '100%'
		},400);
		$(icon).animate({
			right: '10px'
		},400)
	});

// 	Here we will make the Blur Event Handler
	$(searchField).on('blur', function(){
		if(searchField.val() == '') {
			$(searchField).animate({
				width: '45%'
			},400, function(){});
			$(icon).animate({
				right: '360px'
			},400, function(){});
		}
	});
})