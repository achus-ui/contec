$(document).ready(function () {
    if (window.visualViewport.width > 1025) {
        $('#fullpage').fullpage({
            licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
            navigation: false,
            slidesNavigation: false,
            anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', '5thpage', '6thpage', '7thpage'],
            menu: '#menus',
            responsiveHeight: 600,
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
                        $('#menuHolder').addClass('menus-holder home-bg business-sectors-bg');
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
    }
    // $('#section2 ul li .content p').ellipsis({ lines: 3 }); 
    let owl = $('.our-team-slider');
    owl.owlCarousel({
        margin: 10,
        loop: true,
        items: 1,
        nav: true,
        responsive: {
            768: {
                items: 1
            }
        } 
    });
    owl.find('.owl-prev').html('<i class="fas fa-caret-left"></i>');
    owl.find('.owl-next').html('<i class="fas fa-caret-right"></i>');
    let menuTrigger = $('.menu-icon');
    menuTrigger.click(function () {
        $(this).toggleClass('show-close');
        $('#menuHolder').toggleClass('show-menus');
    });
    let menuItem = $('.menus li');
    menuItem.mouseover(function (e) {
        switch (e.target.innerHTML) {
            case 'about':
                $("#menuHolder").removeAttr('class');
                $('#menuHolder').addClass('menus-holder home-bg show-menus about-bg');
                break;
            case 'services':
                $("#menuHolder").removeAttr('class');
                $('#menuHolder').addClass('menus-holder home-bg show-menus services-bg');
                break;
            case 'latest work':
                $("#menuHolder").removeAttr('class');
                $('#menuHolder').addClass('menus-holder home-bg show-menus latest-work-bg');
                break;
            case 'meet the team':
                $("#menuHolder").removeAttr('class');
                $('#menuHolder').addClass('menus-holder home-bg show-menus meet-team-bg');
                break;
            case 'business sectors':
                $("#menuHolder").removeAttr('class');
                $('#menuHolder').addClass('menus-holder home-bg show-menus business-sectors-bg');
                break;
            case 'project form':
                $("#menuHolder").removeAttr('class');
                $('#menuHolder').addClass('menus-holder home-bg show-menus contact-bg');
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
            case 'business sectors':
                $('#menuHolder').removeClass('business-sectors-bg');
                break;
            case 'project form':
                $('#menuHolder').removeClass('contact-bg');
                break;
            default:
                break;
        }
    });
});