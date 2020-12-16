/*!
    * Start Bootstrap - Grayscale v6.0.3 (https://startbootstrap.com/theme/grayscale)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            console.log(location);
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 100,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    
    //change backgroundcolor
    var scroll_pos = 0;
            $(document).scroll(function() { 
                
                scroll_pos = $(this).scrollTop();
                console.log(scroll_pos);
                if(scroll_pos < 500) {
                    $("body").css('background-color', '#f8f1f1');
                } else if (scroll_pos >= 500 && scroll_pos <= 1500) {
                    $("body").css('background-color', '#008dd4');

                } else if (scroll_pos >= 1500 && scroll_pos <= 2400) {
                    $("body").css('background-color', '#ffa62b');
                } else if (scroll_pos >= 2400 && scroll_pos <= 4300) {
                    $("body").css('background-color', '#64a19d');
                }
            });
      
    
      
    

        
})(jQuery); // End of use strict

