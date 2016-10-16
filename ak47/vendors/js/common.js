$(document).ready(function(){

	//переключение автоматов в шапке сайта
	$('h1 small a').on('click', function(e){
		e.preventDefault();
		var s = $(this).attr('href');
		$('img.logo').attr('src', s);
		$('h1 small a').removeClass('active_small');	
		$(this).addClass('active_small');
	});

	//активация fancybox
	$(".fancybox").fancybox({
		openEffect	: 'elastic',
		closeEffect	: 'elastic',
		prevEffect	: 'elastic',
		nextEffect	: 'elastic',
		closeBtn	: false,
		helpers		: {
			title	: { type : 'inside' },
			buttons	: {}
		},
	});

	//появление и скрытие кнопки прокрутки
	$('#back-to-top').fadeOut(0);
	$(window).scroll(function () {
        if ($(this).scrollTop() > 1400) {
            $('#back-to-top').fadeIn(500);
        } else {
            $('#back-to-top').fadeOut(250);
        }
    });

	//анимация прокрутки вверх
    $('#back-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    //анимация цифр
	/*var show = true;
	var countbox = "#counts";
	$(window).on("scroll load resize", function(){

		if(!show) return false;

		var w_top = $(window).scrollTop();
		var e_top = $(countbox).offset().top;

		var w_height = $(window).height();
		var d_height = $(document).height();

		var e_height = $(countbox).outerHeight();

		if(w_top + 200 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
			$(".spincrement").spincrement({
				thousandSeparator: " ",
				duration: 3000
			});

			show = true;
		}
	});*/

		
});