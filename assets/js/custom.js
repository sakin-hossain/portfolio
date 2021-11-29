jQuery(function ($) {
    'use strict';
    
    // Menu JS
    $(window).on('scroll', function() {
        if ($(this).scrollTop() >50) {
            $('.navbar-light').addClass('menu-shrink');
        } else {
            $('.navbar-light').removeClass('menu-shrink');
        }
    });			
    $('.navbar-nav .nav-item .nav-link').on('click', function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 30
        }, 1500);
        e.preventDefault();
    });
    $(document).on('click','.navbar-collapse.show',function(e) {
        if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
            $(this).collapse('hide');
        }
    });	

    // Sidebar Modal
    $ ('.modal a').not ('.dropdown-toggle').on('click', function() {
        $ ('.modal').modal ('hide');
    });

    // Nav Toggler JS
    $('.toggler-btn').on('click', function(){
        $('.pufo-nav-wrap').toggle();
    });

	// Popup Youtube JS
	$('.popup-youtube').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

	// Review Slider JS
	$('.review-slider').owlCarousel({
		items: 1,
		loop: true,
		margin: 0,
		nav: true,
		dots: false,
		smartSpeed: 1000,
		autoplay: true,
		autoplayTimeout: 3000,
        autoplayHoverPause: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        navText: [
			"<i class='bx bx-chevron-left'></i>",
			"<i class='bx bx-chevron-right'></i>"
		],
    });

    // Review Slider Two JS
	$('.review-slider-two').owlCarousel({
		items: 1,
		loop: true,
		margin: 0,
		nav: true,
		dots: true,
		smartSpeed: 1000,
		autoplay: true,
		autoplayTimeout: 3000,
        autoplayHoverPause: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        navText: [
			"<i class='bx bx-chevron-left'></i>",
			"<i class='bx bx-chevron-right'></i>"
		],
    });

    // Odometer JS
	$('.odometer').appear(function(e) {
		var odo = $('.odometer');
		odo.each(function() {
			var countNumber = $(this).attr('data-count');
			$(this).html(countNumber);
		});
	});
    
    // Go Top JS
	$(function(){
		$(window).on('scroll', function(){
			var scrolled = $(window).scrollTop();
			if (scrolled > 500) $('.go-top').addClass('active');
			if (scrolled < 500) $('.go-top').removeClass('active');
		});  
		$('.go-top').on('click', function() {
			$('html, body').animate({ scrollTop: '0' },  500);
		});
    });
    
    // Wow JS
    new WOW().init();

    // Nice Select JS
    $('select').niceSelect();
    
    // Logo Slider JS
	$('.logo-slider').owlCarousel({
		loop: true,
		margin: 0,
		nav: false,
		dots: false,
		smartSpeed: 1000,
		autoplay: true,
		autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:2,
            },
            600:{
                items:3,
            },
            1000:{
                items:5,
            }
        }
    });

    // Preloader JS
	jQuery(window).on('load',function(){
		jQuery('.loader').fadeOut(500);
	});

    // Subscribe Form JS
    $('.newsletter-form').validator().on('submit', function (event) {
        if (event.isDefaultPrevented()) {
            // Hande the invalid form...
            formErrorSub();
            submitMSGSub(false, 'Please enter your email correctly.');
        } else {
            // Everything looks good!
            event.preventDefault();
        }
    });
    function callbackFunction (resp) {
        if (resp.result === 'success') {
            formSuccessSub();
        }
        else {
            formErrorSub();
        }
    }
    function formSuccessSub(){
        $('.newsletter-form')[0].reset();
        submitMSGSub(true, 'Thank you for subscribing!');
        setTimeout(function() {
            $('#validator-newsletter').addClass('hide');
        }, 4000)
    }
    function formErrorSub(){
        $('.newsletter-form').addClass('animated shake');
        setTimeout(function() {
            $('.newsletter-form').removeClass('animated shake');
        }, 1000)
    }
    function submitMSGSub(valid, msg){
        if(valid){
            var msgClasses = 'validation-success';
        } else {
            var msgClasses = 'validation-danger';
        }
        $('#validator-newsletter').removeClass().addClass(msgClasses).text(msg);
    }

    // AJAX Mail Chimp JS
    $('.newsletter-form').ajaxChimp({
        url: 'https://envytheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9', // Your url MailChimp
        callback: callbackFunction
    });
}(jQuery));