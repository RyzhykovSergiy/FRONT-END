$(document).ready(function() {

	$("#portfolio_grid").mixItUp();

	$(".s-portfolio__list li").click(function() {
		$(".s-portfolio__list li").removeClass("active");
		$(this).addClass("active");
	});


	function heightDetect() {
		$(".h-main").css("height", $(window).height());
	};
	heightDetect();

	$(window).resize(function() {
		heightDetect();
	});
	
	$(".popup").magnificPopup({type:"image"});

	$(".hamburger").click(function() {
		if ($(".menu__body").is(":visible")) {
			$(".hamburger").removeClass("is-active");
			$(".menu__body").fadeOut(600);
		} else {
			$(".hamburger").addClass("is-active");
			$(".menu__body").fadeIn(600);
		}
		
	});

	$(".menu__body-link").click(function() {
		$(".hamburger").removeClass("is-active");
		$(".menu__body").fadeOut();
	});


	$(".animation_up").animated("flipInY", "fadeOutDown");
	$(".animation_left").animated("fadeInLeft", "fadeOutDown");
	$(".animation_right").animated("fadeInRight", "fadeOutDown");

	$(".menu__body li a").mPageScroll2id();

});