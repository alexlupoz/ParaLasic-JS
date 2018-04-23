/**	
	* ParaLasic
	* Version: 1.0	
	* Author: Alex Lupóz
	* Author URI: https://github.com/alexlupoz
	* Dependencies: Jquery
	
	Description:
	
	A lightweight and very simple Parallax Effect plugin made with Jquery
	
**/

jQuery(window).bind('scroll', function () {

	/* PARALLAX EFFECT ON HEADER */
	$(window).scroll(function() {
		var scrollTop = $(window).scrollTop();
		//$('#teste').html(scrollTop).css({'color':'white','position':'fixed','z-index':'999999999'});
		$('.paralasic').css('background-position', 'center top -' + scrollTop * 1.8 + 'px'); /* 1.7 ´o valor padrão. Quanto menor o número, menor o efeito */
	});
			
});
