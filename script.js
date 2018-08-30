$(function(){
	let key = 'sneAVnUGOJmdlDPum7t3Jb4pZXjd9EGM';
	let urlProjects = 'https://api.behance.net/v2/users/KJG/projects?client_id=sneAVnUGOJmdlDPum7t3Jb4pZXjd9EGM';

	if($('#works').length > 0){
		$.ajax({
			url:urlProjects,
			dataType:'jsonp',
			success:function(res){
				_(res.projects).each(function(project,i){

					if(i<8){
						console.log(project);
						$('<li class="'+project.fields["0"]+' all scale grid-item"><img src="'+project.covers.original+'" alt=""></li>').appendTo('ul.projects');
					}
				});
			}
		});
	}

	var selectedClass = "";
	$('button').on('click',function(){
		selectedClass = $(this).attr("data-rel");

		// $('.grid-item.'+selectedClass).css('display','block');
		$('.grid-item').css('opacity',0).one('transitionend',function(){

			$('.grid-item').not('.grid-item.'+selectedClass).css('display','none');

			$('.grid-item.'+selectedClass).css('display','block');

			setTimeout(function(){
				$('.grid-item.'+selectedClass).css('opacity',1);
			});

		});
		
		// $("#works").fadeTo(100, 0.1);
		// $("#works li").not("."+selectedClass).fadeOut().removeClass('scale');


  //   	setTimeout(function() {
  //     		$("."+selectedClass).fadeIn().addClass('scale');
  //     		$("#works").fadeTo(300, 1);
  //  		}, 1);
	});

// 	$('[data-to]').on('click',function(e){
// 		e.preventDefault();


// 		var sTarget = $(this).data('to');
// 		$('.sections>section').not(sTarget).removeClass('show');
// 		$(sTarget).addClass('show');

// 	});



});