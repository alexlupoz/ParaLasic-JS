/**	
	* ParaLasic
	* Version: 1.1	
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
		var paralasicValue = $('.paralasic').attr('data-paralasic');
		$('.paralasic').css('background-position', 'center top -' + scrollTop * paralasicValue + 'px'); /* 1.8 - default value. Increase less to go stopping the effect */
	});
			
});
