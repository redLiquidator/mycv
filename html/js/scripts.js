$(document).ready(function(){
	$isIE6 = false;
	if ($.browser.msie && $.browser.version.substr(0,1)<7) {
		$isIE6 = true;
	}
	
	$('body').removeClass('noJS');
	
	
	var $scrollerWindow = $('#content');
	var $speed = 1500;
	
	function gotoHome()
	{
		$scrollerWindow.stop().scrollTo( $('#home'), $speed, {axis:'x'} );
		return false;
	}
	
	function gotoWeb()
	{
		$scrollerWindow.stop().scrollTo( $('#web'), $speed, {axis:'x'} );
		return false;
	}
	
	function gotoAbout()
	{
		$scrollerWindow.stop().scrollTo( $('#about'), $speed, {axis:'x'} );
		return false;
	}
	
	function gotoContact()
	{
		$scrollerWindow.stop().scrollTo( $('#contact'), $speed, {axis:'x'} );
		return false;
	}
	
	function noScroll()
	{
		return false;
	}
	
	$('.goto_home').live("click", gotoHome);
	$('.goto_about').live("click", gotoAbout);
	$('.goto_web').live("click", gotoWeb);
	$('.goto_contact').live("click", gotoContact);
	$('.noScroll').live("click", noScroll);	
});