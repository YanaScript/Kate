$(document).ready(function() {
	$('.fullscreen__title').click(function(event) {
		if($('.fullscreen').hasClass('one')){
			$('.fullscreen__title').not($(this)).removeClass('active');
			$('.fullscreen__lines').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});
});