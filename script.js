$(function(){

	$("#slideshow > div:gt(0)").hide();
	setInterval(function() {
	$('#slideshow > div:first')
	  .fadeOut(1000)
	  .next()
	  .fadeIn(1000)
	  .end()
	  .appendTo('#slideshow');
	}, 8000);

	var offset1 = $('.section1').offset().top;
	var offset2 = $('.section2').offset().top;
	var offset3 = $('.section3').offset().top;

	$(document).on('scroll',function(){

		var iScrollTop = $(document).scrollTop();

		var activeLi;
		if(iScrollTop>=offset1-50 && iScrollTop<offset2){
			activeLi = $('.menu>li:nth-child(1)');
		}
		if(iScrollTop>=offset2-50 && iScrollTop<offset3){
			activeLi = $('.menu>li:nth-child(2)');
		}
		if(iScrollTop>=offset3-50){
			activeLi = $('.menu>li:nth-child(3)');
		}
		activeLi.addClass('active');
		$('.menu>li').not(activeLi).removeClass('active');

	});

	$('[data-to]').on('click',function(e){
		e.preventDefault();

		var sTarget = $(this).data('to');
		var targetOffsetTop = $(sTarget).offset().top;

		$('html,body').animate({scrollTop:targetOffsetTop},1000);

	});

});



// $(function(){

// 	$('[data-to]').on('click',function(e){
// 		e.preventDefault();


// 		var sTarget = $(this).data('to');
// 		$('.sections>section').not(sTarget).removeClass('show');
// 		$(sTarget).addClass('show');

// 	});

	// setTimeout(function(){
	// $(".first").css("display","none");
	// },3000);

// });









