jQuery(document).ready(function ($) {

	// /*----------------------------------------------------*/
	//  Hamburger menu
	// ------------------------------------------------------*/
	$(".hamburger").click(function () {
		$(".main-menu").slideToggle("slow", function () {
			$(".hamburger").hide();
			$(".close").show();
			$(".menu").css('opacity', 1);
		});
	});

	$(".close").click(function () {
		$(".main-menu").slideToggle("slow", function () {
			$(".close").hide();
			$(".hamburger").show();
			$(".menu").css('opacity', 0.7);
		});
	});

	$(".main-menu ul li a").click(function () {
		if ($(window).outerWidth() < 768) {
			$(".main-menu").slideToggle("slow", function () {
				$(".close").hide();
				$(".hamburger").show();
				$(".menu").css('opacity', 0.9);
			});
		}
	});

	// /*----------------------------------------------------*/
	//  Highlight the current section in the navigation bar
	// ------------------------------------------------------*/
	var sections = $('section'),
		nav = $('.main-menu'),
		nav_height = $('.menu').outerHeight();
	$(window).on('scroll', function () {
		var cur_pos = $(this).scrollTop();

		sections.each(function () {
			var top = $(this).offset().top - nav_height,
				bottom = top + $(this).outerHeight();

			if (cur_pos >= top && cur_pos <= bottom) {
				nav.find('li').removeClass('current');
				nav.find('a[href="#' + $(this).attr('id') + '"]').parent().addClass('current');
			}
		});
	});

	// /*----------------------------------------------------*/
	//  Smooth Scrolling
	// ------------------------------------------------------*/
	$('a[href*=#]:not([href=#])').click(function () {
		// nav_height = $('.menu').outerHeight();
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top - nav_height
				}, 1000);
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
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

});