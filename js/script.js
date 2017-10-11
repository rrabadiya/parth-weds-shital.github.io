/** Document Ready **/
$(document).ready(function() {
    /* Page Loader */
    var pageloader = $("#pageloader");
    pageloader.liveloader({
        bgcolor: '#ED2437',
        bordercolor: '#222222',
        imgurl: 'img/bride-icon.png'
    });

    /* Slider */
    var pageloader = $("#fade-slider");
    if (pageloader.length) {
        pageloader.slippry({
            captions: false,
            pager: false,
            controls: true,
            responsive: true
        });
    }

    /* Flip Bless US */
    function flip() {
        $('.bless-flipcard').toggleClass('flipped');
    }
    $(".btn-flip").on("click", flip);

    
   

    /* Initialize Lightcase */
    var lightcase_icon = $("a[data-rel^=lightcase]");    
    if (lightcase_icon.length) {
        $(lightcase_icon).lightcase();
    }

    /* Initialize Mb Comming Soon */
    var countdown = $("#myCounter");
    if (countdown.length) {
		//new Date(year, month, day, hours, minutes, seconds, milliseconds)
        $(countdown).mbComingsoon({expiryDate: new Date(2017, 10, 27, 09, 00, 00, 00), speed: 100});
        [].slice.call(document.querySelectorAll('select.cs-select')).forEach(function(el) {
            new SelectFx(el);
        });
    }


    /* Scroll Spy */
    $('body').scrollspy({target: "#Wedding_menu", offset: 80});

    /* Add smooth scrolling on all links inside the navbar */
    $("#Wedding_menu a").on('click', function(event) {

        $("#myNavbar").removeClass('in');
        /* Make sure this.hash has a value before overriding default behavior */
        if (this.hash !== "") {
            /* Prevent default anchor click behavior */
            event.preventDefault();

            /* Store hash */
            var hash = this.hash;

            /* Using jQuery's animate() method to add smooth page scroll */
            /* The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area */
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 79
            }, 1500, 'easeOutExpo', function() {

                /* Add hash (#) to URL when done scrolling (default click behavior) */
                /* window.location.hash = hash; */
                history.pushState(null, null, hash);

            });
        }  /* End if */
    });


    /* Convert Placeholder to Label */
    $('input,textarea').on("focus", function() {
        var placeholderText = $(this).attr('placeholder');
        $(this).data('placeholder', $(this).attr('placeholder')).attr('placeholder', '');
        $(this).closest('.form-group').append("<label class='lbl-text'>" + placeholderText + "</label>")
    }).blur(function() {
        $(this).attr('placeholder', $(this).data('placeholder'));
        $(this).closest('.form-group').find('label').remove();
    });


    /* Calculate Hexagon Gap */
    var hexaw = $('.hexagon-in2').outerWidth() / 2;
    var hexagap = hexaw + 15;
    $('.hexa-gap').css('margin-left', hexagap);
    $(window).resize(function() {
        var hexaw = $('.hexagon-in2').outerWidth() / 2;
        var hexagap = hexaw + 15;
        $('.hexa-gap').css('margin-left', hexagap);
    });

    /* Visible top navigation on Scroll*/
    var offset_val = $('#Banner').height();
    function navSlide() {
        var scroll_top = $(window).scrollTop();

        if (scroll_top >= offset_val) { // the detection!
            $('.gototop').css('opacity', '0.5');
        } else {
            $('.gototop').css('opacity', '0');
        }
    }
    $(window).scroll(navSlide);

    /* Go To Top*/
    $("a[href='#top']").on("click", function() {
        $("html, body").animate({scrollTop: 0}, 1500, 'easeOutExpo');
        return false;
    });

    /* Isotope */
    var myTheme = window.myTheme || {},
            $win = $(window);

    myTheme.Isotope = function() {

        var isotopeContainer = $('.isotopeContainer');
        if (!isotopeContainer.length || !jQuery().isotope)
            return;
        $win.load(function() {
            isotopeContainer.isotope({
                itemSelector: '.isotopeSelector'
            });
            $('.isotopeFilters').on('click', 'a', function(e) {
                $('.isotopeFilters').find('.active').removeClass('active');
                $(this).parent().addClass('active');
                var filterValue = $(this).attr('data-filter');
                isotopeContainer.isotope({filter: filterValue});
                e.preventDefault();
            });            
        });
    };
    myTheme.Isotope();

    /* Initialize owlCarousel */
    var owl = document.querySelectorAll(".owl-carousel");
    if (owl.length > 0) {
        $(owl).owlCarousel({
            loop: true,
            margin: 10,
            navRewind: false,
            navText: ["Next", "Prev"],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true,
                    loop: false
                },
                600: {
                    items: 2,
                    nav: true,
                    loop: false
                },
                1000: {
                    items: 3,
                    nav: true,
                    loop: false
                }
            }
        });
    }
});

/* Play & Pause Feature Update 1.1 */
function togglePlay() {   

    var myAudio = document.getElementById("myAudio");
    
    var isPlaying = $("#isPlaying").val();

    if (isPlaying === "true") {
        $("#isPlaying").val("false");
        myAudio.pause();
    } else {        
        $("#isPlaying").val("true");
        myAudio.play();
    }
}
$("#togglePlay").on("click", function() {
    togglePlay();
    $(this).toggleClass('active');
});
setTimeout(function() {
    $("#togglePlay").trigger("click");         
}, 4000);
