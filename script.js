$(function(){

	$('[data-to]').on('click',function(e){
		e.preventDefault();


		var sTarget = $(this).data('to');
		$('.sections>section').not(sTarget).removeClass('show');
		$(sTarget).addClass('show');

	});



});