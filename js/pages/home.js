function topNav() {
	var topPos = $(window).scrollTop();

	if (topPos >= 80) {
		$('nav').addClass('white');
	}
	else {
		$('nav').removeClass('white');
	}
}

function sidebarStick() {
	var pagewrapTop = $('.page-wrap').offset().top - $(window).scrollTop();
	
	if (pagewrapTop <= 54) {
		$('.page-wrap').addClass('stick');
	}
	else {
		$('.page-wrap').removeClass('stick');
	}
}

if(!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
	if ($(window).scrollTop() <= 200) {
		$('.main-search').focus();
	}
}


/**********************************************************************************
|
|	Check if login prompt is initiated
|
**********************************************************************************/

if ($('#login-signup-modal').attr('data-login-prompt') == 'true') {
	$('#login-signup-modal .tab-pane').removeClass('active');
	$('#login-signup-modal #login-tab').addClass('active');
	$('#login-signup-modal').modal('show');
}

/**********************************************************************************
|
|	Initiate scroll function
|
**********************************************************************************/

$(window).scroll(function() {
	topNav();
	sidebarStick();	
});

topNav();
sidebarStick();