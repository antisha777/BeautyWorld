$('.menu-btn-mobile').on('click', function(e) {
	e.preventDefault();
	$(this).toggleClass('menu-btn-active');
	$('.links-menu').toggleClass('links-menu-active');
});

