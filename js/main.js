jQuery(document).ready(function ($) {

	$(".hamburger").click(function () {
		$(".cont").slideToggle("slow", function () {
			$(".hamburger").hide();
			$(".cross").show();
			$(".menu").css('opacity', 1);
		});
	});

	$(".cross").click(function () {
		$(".cont").slideToggle("slow", function () {
			$(".cross").hide();
			$(".hamburger").show();
			$(".menu").css('opacity', 0.7);
		});
	});

	$(".cont ul li a").click(function () {
		if ($(window).outerWidth() < 768) {
			$(".cont").slideToggle("slow", function () {
				$(".cross").hide();
				$(".hamburger").show();
				$(".menu").css('opacity', 0.9);
			});
		}
	});

	// /*----------------------------------------------------*/
	//  Highlight the current section in the navigation bar
	// ------------------------------------------------------*/

	var sections = $('.section'),
		nav = $('.cont'),
		nav_height = $('.menu').outerHeight();

	$(window).on('scroll', function () {
		var cur_pos = $(this).scrollTop();

		sections.each(function () {
			var top = $(this).offset().top - nav_height,
				bottom = top + $(this).outerHeight();

			if (cur_pos >= top && cur_pos <= bottom) {
				nav.find('li').removeClass('current');
				// sections.removeClass('current');

				// $(this).addClass('current');
				nav.find('a[href="#' + $(this).attr('id') + '"]').parent().addClass('current');
			}
		});
	});

	nav.find('a').on('click', function () {
		var $el = $(this),
			id = $el.attr('href');
		$('html, body').animate({
			scrollTop: $(id).offset().top - nav_height
		}, 700);
		$('html, body').animate({
			scrollTop: $(id).offset().top
		}, 700);

		return false;
	});

	/*----------------------------------------------------*/
	/*	Fade In/Out Primary Navigation
	------------------------------------------------------*/

	$(window).on('scroll', function () {

		var h = $('#home').height();
		var y = $(window).scrollTop();
		var nav = $('.menu');

		if ((y > h * 0.10) && (y < h) && ($(window).outerWidth() > 768)) {
			nav.fadeOut('fast');
		} else {
			if (y < h * 0.10) {
				nav.css('opacity', 0.9).fadeIn('fast');
			} else {
				nav.css('opacity', 1).fadeIn('fast');

			}
		}

	});


	/*----------------------------------------------------*/
	/*	Make sure that #header-background-image height is
	/* equal to the browser height.
	------------------------------------------------------ */

	// $('.home').css({
	// 	'height': $(window).height()
	// });
	// $(window).on('resize', function () {

	// 	$('.home').css({
	// 		'height': $(window).height()
	// 	});
	// 	$('body').css({
	// 		'width': $(window).width()
	// 	});
	// });

	// /*----------------------------------------------------*/
	//  Highlight the current section in the navigation bar
	// ------------------------------------------------------*/
	// var sections = $(".section");
	// var navigation_links = $(".cont a");

	// sections.waypoint({

	// 	handler: function (event, direction) {

	// 		var active_section;

	// 		active_section = $(this);
	// 		if (direction === "up") active_section = active_section.prev();
	// 		var active_link = $('.cont a[href="#' + active_section.attr("id") + '"]');

	// 		navigation_links.parent().removeClass("current");
	// 		active_link.parent().addClass("current");

	// 	},
	// 	offset: '10%'

	// });

	// /*----------------------------------------------------*/
	//  Smooth Scrolling
	// ------------------------------------------------------*/
	// $('a[href*=#]:not([href=#])').click(function () {
	// 	if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
	// 		var target = $(this.hash);
	// 		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	// 		if (target.length) {
	// 			$('html,body').animate({
	// 				scrollTop: target.offset().top
	// 			}, 700);
	// 			return false;
	// 		}
	// 	}
	// });

});