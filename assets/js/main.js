$(document).ready(function () {
    $('#fullpage').fullpage({
        navigation: false,
        slidesNavigation: false,
        anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', '5thpage', '6thpage', '7thpage'],
        menu: '#menus',
        lazyLoad: true,
        afterLoad: function (anchorLink, index, slideAnchor, slideIndex) {
            switch (index.index) {
                case 0:
                    $("#menuHolder").removeAttr('class');
                    $('#menuHolder').addClass('menus-holder home-bg');
                    if ($('.menu-icon').hasClass('show-close')) {
                        $('.menu-icon').removeClass('show-close')
                    }
                    break;
                case 1:
                    $("#menuHolder").removeAttr('class');
                    $('#menuHolder').addClass('menus-holder home-bg about-bg');
                    if ($('.menu-icon').hasClass('show-close')) {
                        $('.menu-icon').removeClass('show-close')
                    }
                    break;
                case 2:
                    $("#menuHolder").removeAttr('class');
                    $('#menuHolder').addClass('menus-holder home-bg services-bg');
                    if ($('.menu-icon').hasClass('show-close')) {
                        $('.menu-icon').removeClass('show-close')
                    }
                    break;
                case 3:
                    $("#menuHolder").removeAttr('class');
                    $('#menuHolder').addClass('menus-holder home-bg latest-work-bg');
                    if ($('.menu-icon').hasClass('show-close')) {
                        $('.menu-icon').removeClass('show-close')
                    }
                    break;
                case 4:
                    $("#menuHolder").removeAttr('class');
                    $('#menuHolder').addClass('menus-holder home-bg meet-team-bg');
                    if ($('.menu-icon').hasClass('show-close')) {
                        $('.menu-icon').removeClass('show-close')
                    }
                    break;
                case 5:
                    $("#menuHolder").removeAttr('class');
                    $('#menuHolder').addClass('menus-holder home-bg testomonials-bg');
                    if ($('.menu-icon').hasClass('show-close')) {
                        $('.menu-icon').removeClass('show-close')
                    }
                    break;
                case 6:
                    $("#menuHolder").removeAttr('class');
                    $('#menuHolder').addClass('menus-holder home-bg contact-bg');
                    if ($('.menu-icon').hasClass('show-close')) {
                        $('.menu-icon').removeClass('show-close')
                    }
                    break;
                default:
                    break;
            }
        },
    });
    var owl = $('.our-team-slider');
    owl.owlCarousel({
        margin: 10,
        loop: false,
        items: 1,
        nav: true
    });
    owl.find('.owl-prev').html('<i class="fas fa-caret-left"></i>');
    owl.find('.owl-next').html('<i class="fas fa-caret-right"></i>');
    var menuTrigger = $('.menu-icon');
    menuTrigger.click(function () {
        $(this).toggleClass('show-close');
        $('#menuHolder').toggleClass('show-menus');
    });
    var menuItem = $('.menus li');
    menuItem.mouseover(function (e) {
        switch (e.target.innerHTML) {
            case 'about':
                $('#menuHolder').addClass('about-bg');
                break;
            case 'services':
                $('#menuHolder').addClass('services-bg');
                break;
            case 'latest work':
                $('#menuHolder').addClass('latest-work-bg');
                break;
            case 'meet the team':
                $('#menuHolder').addClass('meet-team-bg');
                break;
            case 'testimonials':
                $('#menuHolder').addClass('testomonials-bg');
                break;
            case 'contact':
                $('#menuHolder').addClass('contact-bg');
                break;
            default:
                break;
        }
    });
    menuItem.mouseout(function (e) {
        switch (e.target.innerHTML) {
            case 'about':
                $('#menuHolder').removeClass('about-bg');
                break;
            case 'services':
                $('#menuHolder').removeClass('services-bg');                
                break;
            case 'latest work':
                $('#menuHolder').removeClass('latest-work-bg');
                break;
            case 'meet the team':
                $('#menuHolder').removeClass('meet-team-bg');
                break;
            case 'testimonials':
                $('#menuHolder').removeClass('testomonials-bg');
                break;
            case 'contact':
                $('#menuHolder').removeClass('contact-bg');
                break;
            default:
                break;
        }
    });
});