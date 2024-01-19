
	$(document).ready(function(){
$('.navbar-toggler').click(function(){
$('.navbar-toggler').toggleClass('showtoggle');
});	
});	
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 30) {
        $(".header_sec").addClass("fixxed");
    } else {
        $(".header_sec").removeClass("fixxed");
    }
});


$(document).ready(function() {
var owl = $('.ftr_sec .owl-carousel');
  owl.owlCarousel({
    dots: false,
    autoplay: true,
    nav: true,
    dotsEach: false,
    loop: true,
    responsive: {
      0: {	
        items: 1
      },
      480: {		
        items: 1
      },
      575: {	
        items: 1
      },
      768: {
        items: 1
      },         
      992: {
        items: 1
      },
      1200: {
        items: 1
      }
    }
  });
});
$(document).ready(function() {
var owl = $('.course_det');
  owl.owlCarousel({
  	margin:18,
    dots: false,
    autoplay: false,
    nav: false,
    dotsEach: false,
    loop: false,
    stagePadding: 75,
    responsive: {
      0: {	
        items: 1
      },
      480: {		
        items: 1
      },
      575: {	
        items: 2
      },
      768: {
        items: 2
      },         
      992: {
        items: 3
      },
      1200: {
        items: 3
      }
    }
  });
});


$(document).ready(function() {
var owl = $('.fea_sec .owl-carousel');
  owl.owlCarousel({
    dots: false,
    autoplay: true,
    nav: true,
    dotsEach: false,
    loop: true,
    responsive: {
      0: {	
        items: 1
      },
      480: {		
        items: 2
      },
      575: {	
        items: 2
      },
      768: {
        items: 3
      },         
      992: {
        items: 4
      },
      1200: {
        items: 4
      }
    }
  });
});