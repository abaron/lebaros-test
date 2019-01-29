$(function() {

    'use strict';

    $('#menu-left').sideNav({
        menuWidth: 240,
        edge: 'left',
        closeOnClick: false
    });

    $(document).on('click', '#main-menu li.has-sub > a', function(){
        $(this).removeAttr('href');
        var element = $(this).parent('li');
        if (element.hasClass('open')) {
            element.removeClass('open');
            element.find('li').removeClass('open');
            element.find('ul').slideUp();
        } else {
            element.addClass('open');
            element.children('ul').slideDown();
            element.siblings('li').children('ul').slideUp();
            element.siblings('li').removeClass('open');
            element.siblings('li').find('li').removeClass('open');
            element.siblings('li').find('ul').slideUp();
        }
    });

    $('#main-menu > ul > li.has-sub > a').append('<span class="fa fa-angle-right"></span>');
    $('#main-menu > ul > li.has-sub > ul > li.has-sub > a').append('<span class="fa fa-angle-double-right"></span>');

    $('.product-list-slider').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		prevArrow: '<span class="prev-arr"><i class="fa fa-angle-left"></i></span>',
		nextArrow: '<span class="next-arr"><i class="fa fa-angle-right"></i></span>',
		responsive: [
		{
			breakpoint: 401,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 1025,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1
			}
		}]
	});

    $('.product-list-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '<span class="prev-arr"><i class="fa fa-angle-left"></i></span>',
        nextArrow: '<span class="next-arr"><i class="fa fa-angle-right"></i></span>',
        responsive: [
        {
            breakpoint: 401,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        }]
    });

});
