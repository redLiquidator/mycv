$(document).ready(function(){
	$('#education').carouFredSel({
		responsive: true,
		width: '100%',
		pagination: "#education-pager",
		auto: false,
		scroll: 1,
		items: {
			width: 400,
		//	height: '30%',	//	optionally resize item-height
			visible: {
				min: 1,
				max: 1
			}
		}
	});
});

	$(document).ready(function(){
		// hide #back-top first
		$("#back-top").hide();		
		// fade in #back-top
		$(function () {
			$(window).scroll(function () {
				if ($(this).scrollTop() > 100) {
					$('#back-top').fadeIn();
				} else {
					$('#back-top').fadeOut();
				}
			});	
			// scroll body to 0px on click
			$('#back-top a').click(function () {
				$('body,html').animate({
					scrollTop: 0
				}, 800);
				return false;
			});
		});	
	});
$(document).ready(function(){
	$('#work-expeirence').carouFredSel({
		responsive: true,
		width: '100%',
		pagination: "#expeirence-pager",
		auto: false,
		scroll: 1,
		items: {
			width: 400,
		//	height: '30%',	//	optionally resize item-height
			visible: {
				min: 1,
				max: 1
			}
		}
	});
});
$(document).ready(function(){
 	$("#tab-container").easytabs({
		animate: true,
		updateHash		: false,
		transitionIn		:'slideDown',
		transitionOut		:'slideUp',
		animationSpeed	:600,
	});

});

$(document).ready(function() {
	$("a[rel^='prettyPhoto']").prettyPhoto({
		animation_speed: 'fast', /* fast/slow/normal */
        slideshow: false, /* false OR interval time in ms */
        autoplay_slideshow: false, /* true/false */
        opacity: 0.80, /* Value between 0 and 1 */
        show_title: true, /* true/false */
        allow_resize: true, /* Resize the photos bigger than viewport. true/false */
        default_width: 500,
        default_height: 344,
        counter_separator_label: '/', /* The separator for the gallery counter 1 "of" 2 */
        theme: 'pp_default', /* light_rounded / dark_rounded / light_square / dark_square / facebook */
        hideflash: false, /* Hides all the flash object on a page, set to TRUE if flash appears over prettyPhoto */
        wmode: 'opaque', /* Set the flash wmode attribute */
        autoplay: true, /* Automatically start videos: True/False */
        modal: false, /* If set to true, only the close button will close the window */
        overlay_gallery: false, /* If set to true, a gallery will overlay the fullscreen image on mouse over */
        keyboard_shortcuts: true, /* Set to false if you open forms inside prettyPhoto */
        deeplinking: false,
        social_tools: false
	});
});

$(document).ready(function() {  
	$('.portfolio-img').each(function() {
		$(this).hover(
			function() {
				$(this).stop().animate({ opacity: 0.5 }, 400);
			},
		   function() {
			   $(this).stop().animate({ opacity: 1.0 }, 400);
	   })
	});
});

	$(document).ready(function(){
		$("#contact_form").validate({
			meta: "validate",
			submitHandler: function (form) {
			    $('#contact_form').hide();
				var s_name=$("#name").val();
				var s_email=$("#email").val();
				var s_website=$("#phone").val();
				var s_comment=$("#comment").val();
				$.post("contact.php",{name:s_name,email:s_email,website:s_website,comment:s_comment},
			   	function(result){
                  $('#sucessmessage').append(result);
                });
				return false;
			},
			/* */
			rules: {
				name: "required",
				
				lastname: "required",
				// simple rule, converted to {required:true}
				email: { // compound rule
					required: true,
					email: true
				},
				subject: {
					required: true,
				},
				comment: {
					required: true
				}
			},
			messages: {
				name: "Please enter your name.",
				lastname: "Please enter your last name.",
				email: {
					required: "Please enter email.",
					email: "Please enter valid email"
				},
				subject: "Please enter a subject.",
				comment: "Please enter a comment."
			},
		}); /*========================================*/
	});