// Javascript Document

/* =================================
   LOADER
=================================== */
// makes sure the whole site is loaded
$(window).load(function() {

    "use strict";

    blink(900000, 1000);
});


/* =================================
   LOGIN-SIGNUP MODAL
=================================== */

function showRegisterForm(){
    "use strict";
    $('.loginBox').fadeOut('fast',function(){
        $('.registerBox').fadeIn('fast');
        $('.login-footer').fadeOut('fast',function(){
            $('.register-footer').fadeIn('fast');
        });
        $('.modal-title').html('Tạo tài khoản');
        $('.modal-subtitle').html('Trải nghiệm ngay với 14 ngày dùng thử miễn phí');
    });
    $('.error').removeClass('alert alert-danger').html('');
}


function showLoginForm(){
    "use strict";
    $('#loginModal .registerBox').fadeOut('fast',function(){
        $('.loginBox').fadeIn('fast');
        $('.register-footer').fadeOut('fast',function(){
            $('.login-footer').fadeIn('fast');
        });

        $('.modal-title').html('Đăng nhập vào <span>Teamcrop</span>');
        $('.modal-subtitle').html('Nhập email và mật khẩu của bạn');
    });
    $('.error').removeClass('alert alert-danger').html('');
}


function openLoginModal(){
    "use strict";
    showLoginForm();
    $('#loginModal').modal('show');
}


function openRegisterModal(){
    "use strict";
    showRegisterForm();
    $('#loginModal').modal('show');
}


/* =================================
   SCROLL NAVBAR
=================================== */
$(window).scroll(function(){
    "use strict";
    var b = $(window).scrollTop();
    if( b > 60 ){
        $(".navbar").addClass("is-scrolling");
    } else {
        $(".navbar").removeClass("is-scrolling");
    }
});


/* =================================
   HIDE MOBILE MENU AFTER CLICKING
=================================== */
(function($) {

    "use strict";

    $('.nav.navbar-nav li a').click(function () {
        var $togglebtn = $(".navbar-toggle");
        if (!($togglebtn.hasClass("collapsed")) && ($togglebtn.is(":visible"))){
            $(".navbar-toggle").trigger("click");
        }
    });

})(jQuery);


/* ==================================================== */
/* ==================================================== */
/* =======================================================
   DOCUMENT READY
======================================================= */
/* ==================================================== */
/* ==================================================== */

$(document).ready(function() {


"use strict";


/* =====================================
    PARALLAX STELLAR WITH MOBILE FIXES
======================================== */
if (Modernizr.touch && ($('.header').attr('data-stellar-background-ratio') !== undefined)) {
    $('.header').css('background-attachment', 'scroll');
    $('.header').removeAttr('data-stellar-background-ratio');
} else {
    $(window).stellar({
        horizontalScrolling: false
    });
}

    /* ---- particles.js config ---- */
    if ($('#particles-js').length) {
        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 1200
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 250,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 6,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 340,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    }


/* ==========================================
    EASY TABS
============================================= */
$('.tabs.testimonials').easytabs({
    animationSpeed: 300,
    updateHash: false,
    cycle: 10000
});

$('.tabs.features').easytabs({
    animationSpeed: 300,
    updateHash: false
});

/* ==========================================
    FEATURE SIDEBAR
============================================= */
$('.feature-group-list ul li a').each(function(){
    if ($(this).hasClass('active')) {
        $(this).parent().parent().addClass('active');
        $(this).parent().parent().parent().find('h5 i').removeClass('icon_plus-box').addClass('icon_minus-box');
    }
});
$('.feature-group-list h5').on('click', function(){
    var parent = $(this).parent();
    parent.find('ul').toggleClass('active');
    if (parent.find('ul').hasClass('active')) {
        $(this).find('i').removeClass('icon_plus-box').addClass('icon_minus-box');
    } else {
        $(this).find('i').addClass('icon_plus-box').removeClass('icon_minus-box');
    }
});


/* ==========================================
   OWL CAROUSEL
============================================= */
/* App Screenshot Carousel in Mobile-Download for TC-POS Section */
$(".owl-carousel-shots-phone").owlCarousel({
    singleItem:true,navigation: true,
    navigationText: [
        "<i class='icon arrow_carrot-left'></i>",
        "<i class='icon arrow_carrot-right'></i>"
                    ],
    addClassActive : true,
    itemsDesktop : [1200, 1],
    itemsDesktopSmall : [960, 1],
    itemsTablet : [769, 1],
    itemsMobile : [700, 1],
    responsiveBaseWidth : ".shot-container",
    items : 1,
    slideSpeed : 1000,
    mouseDrag : true,
    responsiveRefreshRate : 200,
    autoPlay: 5000
});

/* ==========================================
    VENOBOX - LIGHTBOX FOR GALLERY AND VIDEOS
============================================= */
$('.venobox').venobox();



/* =================================
   SCROLL TO
=================================== */
var onMobile;

onMobile = false;
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) { onMobile = true; }

if (onMobile === true) {
    jQuery('a.scrollto').click(function (event) {
    jQuery('html, body').scrollTo(this.hash, this.hash, {gap: {y: -10}, animation:  {easing: 'easeInOutCubic', duration: 0}});
    event.preventDefault();
});
} else {
    jQuery('a.scrollto').click(function (event) {
    jQuery('html, body').scrollTo(this.hash, this.hash, {gap: {y: -10}, animation:  {easing: 'easeInOutCubic', duration: 1500}});
        event.preventDefault();
});
}


/* ==========================================
   FUNCTION FOR EMAIL ADDRESS VALIDATION
============================================= */
function isValidEmail(emailAddress) {

    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

    return pattern.test(emailAddress);

}

/* ==========================================
   LOCAL NEWSLETTER
============================================= */
$("#subscribe").submit(function(e) {
    e.preventDefault();
    var data = {
        email: $("#s-email").val()
    };

    if ( isValidEmail(data['email']) ) {
        $.ajax({
            type: "POST",
            url: "assets/php/subscribe.php",
            data: data,
            success: function() {
                $('.subscription-success').fadeIn(1000);
                $('.subscription-failed').fadeOut(500);
            }
        });
    } else {
        $('.subscription-failed').fadeIn(1000);
        $('.subscription-success').fadeOut(500);
    }

    return false;
});


/* ===========================================
   SIGNUP-MODAL VALIDATION. WITH CONFIRM PSW.
============================================== */
$("#signup-modal .btn").on('click', function(e) {
    e.preventDefault();

    if ($("#signup-modal .btn").hasClass('loading-indicator')) {
        console.log('Processing...');
    } else {

        var data = {
            faccesscode: $('#faccesscode').val().trim(),
            femail: $("#sm-email").val().trim(),
            ffullname: $("#sm-fullname").val().trim(),
            fcompanyname: $("#sm-companyname").val().trim(),
            fphone: $("#sm-phone").val().trim(),
            fcompanyindustry: $("#sm-companyindustry").val(),
        };

        var pass = true;
        var error = '';
        var errorrequired = false;
        if (data['femail'].length == 0) {
            errorrequired = true;
            pass = false;
        } else {
            if (!isValidEmail(data['femail'])) {
                error += 'Email không hợp lệ <br />';
                pass = false;
            }
        }
        if (data['ffullname'].length == 0) {
            errorrequired = true;
            pass = false;
        }
        if (data['fcompanyname'].length == 0) {
            errorrequired = true;
            pass = false;
        }

        if (data['fphone'].length == 0) {
            errorrequired = true;
            pass = false;
        } else {
            if (data['fphone'].length < 8 || data['fphone'].length > 11) {
                error += 'Điện thoại không hợp lệ <br />';
                pass = false;
            }
        }

        if (errorrequired) {
            error += 'Bạn hãy nhập tất cả các thông tin bên dưới <br />';
        }

        if (pass) {
            var oldRegisterText = $("#signup-modal .btn").text();

            $("#signup-modal .btn").addClass('loading-indicator').text('Đang xử lý...');

            $.ajax({
                type: "POST",
                dataType: "xml",
                url: "/tao-tai-khoan/indexajax",
                data: data,
                success: function(xml) {
                    var success = $(xml).find('success').text();
                    var message = $(xml).find('message').text();

                    var success = $(xml).find('success').text();
                    var message = $(xml).find('message').text();


                    if (success == '1') {
                        $('.sm-success').fadeIn(1000);
                        $('.sm-failed').fadeOut(0);

                        $('#signup-modal table').hide();

                        var redirecturl = $(xml).find('redirecturl').text();
                        document.location.href = redirecturl;

                    } else {
                        $('#sm-failed strong').text(message);

                        $('.sm-success').fadeOut(0);
                        $('.sm-failed').fadeIn(1000);
                    }
                },
                complete: function() {
                    $("#signup-modal .btn").removeClass('loading-indicator').text(oldRegisterText);
                }
            });
        } else {
            $('#sm-failed strong').html(error);
            $('.sm-failed').fadeIn(1000);
            $('.sm-success').fadeOut(500);
        }
    }
});



/* =======================================================================
   SIGNUP-DIVIDER ANIMATED POLYGON BACKGROUND
========================================================================== */
    var container = document.getElementById('canvas-bg');
    var renderer = new FSS.CanvasRenderer();
    var scene = new FSS.Scene();
    var light = new FSS.Light('323A45', '323A45');
    var geometry = new FSS.Plane(2000, 1000, 15, 8);
    var material = new FSS.Material('FFFFFF', 'FFFFFF');
    var mesh = new FSS.Mesh(geometry, material);
    var now, start = Date.now();

    function initialise() {
      scene.add(mesh);
      scene.add(light);
      if (typeof container !== 'undefined' && container !== null) {
        container.appendChild(renderer.element);
        window.addEventListener('resize', resize);
      }
    }

    function resize() {
        if (typeof container !== 'undefined' && container !== null) {
            renderer.setSize(container.offsetWidth, container.offsetHeight);
        }
    }

    function animate() {
      now = Date.now() - start;
      light.setPosition(300*Math.sin(now*0.001), 200*Math.cos(now*0.0005), 60);
      renderer.render(scene);
      requestAnimationFrame(animate);
    }

    initialise();
    resize();
    animate();

    /* ===========================================================
       BOOTSTRAP FIX FOR IE10 in Windows 8 and Windows Phone 8
    ============================================================== */
    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var msViewportStyle = document.createElement('style');
        msViewportStyle.appendChild(
            document.createTextNode(
                '@-ms-viewport{width:auto!important}'
                )
            );
        document.querySelector('head').appendChild(msViewportStyle);
    }

    $(function() {
        $("img.lazy").lazyload();
    });

});




function blink(time, interval){
    var timer = window.setInterval(function(){
        $("#newbadge").css("opacity", "0.1");
        window.setTimeout(function(){
            $("#newbadge").css("opacity", "1");
        }, 100);
    }, interval);
    window.setTimeout(function(){clearInterval(timer);}, time);
}