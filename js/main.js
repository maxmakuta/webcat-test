$(function() {
	$('.works-carousel').owlCarousel({
	    loop:true,
	    margin:30,
	    nav:true,
	    dots: true,
	    navText: ['<img src="img/stleft.svg">', '<img src="img/stright.svg">'],
	    startPosition: 1,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	});

	
	$('ul.tabs__caption').on('click', 'li:not(.active)', function(e) {
		e.preventDefault();
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('section.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });

});