$(function(){
	let key = 'sneAVnUGOJmdlDPum7t3Jb4pZXjd9EGM';
	let urlProjects = 'https://api.behance.net/v2/users/KJG/projects?client_id=sneAVnUGOJmdlDPum7t3Jb4pZXjd9EGM';


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
		if(iScrollTop>=offset1-100 && iScrollTop<offset2){
			activeLi = $('.menu>li:nth-child(1)');
		}
		if(iScrollTop>=offset2-100 && iScrollTop<offset3){
			activeLi = $('.menu>li:nth-child(2)');
		}
		if(iScrollTop>=offset3-100){
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
		
		
	});

	"use strict";



    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })

    var name = $('.validate-input input[name="name"]');
    var email = $('.validate-input input[name="email"]');
    var message = $('.validate-input textarea[name="message"]');


    $('.validate-form').on('submit',function(){
        var check = true;

        if($(name).val().trim() == ''){
            showValidate(name);
            check=false;
        }


        if($(email).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
            showValidate(email);
            check=false;
        }

        if($(message).val().trim() == ''){
            showValidate(message);
            check=false;
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
       });
    });

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }


});


