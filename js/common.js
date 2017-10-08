$(document).ready(function() {

	$(".auth_buttons").click(function() {
		$(this).next().slideToggle();
	});
	$(".main_mnu_button").click(function() {
		$(".maian_mnu ul").slideToggle();
	});

	//Таймер обратного отсчета
	//Документация: http://keith-wood.name/countdown.html
	//<div class="countdown" date-time="2015-01-07"></div>
	var austDay = new Date($(".countdown").attr("date-time"));
	$(".countdown").countdown({until: austDay, format: 'yowdHMS'});

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();

	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	$(".top_mnu").navigation();

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$("a.scroll").click(function() {
		$.scrollTo($(".div"), 800, {
			offset: -90
		});
	});

	//Каруселька
	//Документация: https://owlcarousel2.github.io/OwlCarousel2/docs/
	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:0,
		dots: false,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:false
			},
			600:{
				items:1,
				nav:false
			},
			1000:{
				items:1,
				nav:false,
				loop:false
			}
		}
	})

	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#callback").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("#callback").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});
});

//Скрипт спойлер
$(document).ready(function () {
	$('input#toggle-button1').click(function (e) {
		$(this).toggleClass('active');
		$('#content1').toggle();   
		e.stopPropagation();
	});
	$('#content1').click(function (e) {
		e.stopPropagation();
	});
	$('body').click(function () {
		var link = $('input#toggle-button1');
		if (link.hasClass('active')) {
			link.click();
		}
	});
	$('input#toggle-button2').click(function (e) {
		$(this).toggleClass('active');
		$('#content2').toggle();   
		e.stopPropagation();
	});
	$('#content2').click(function (e) {
		e.stopPropagation();
	});
	$('body').click(function () {
		var link = $('input#toggle-button2');
		if (link.hasClass('active')) {
			link.click();
		}
	});
	$('input#toggle-button3').click(function (e) {
		$(this).toggleClass('active');
		$('#content3').toggle();   
		e.stopPropagation();
	});
	$('#content1').click(function (e) {
		e.stopPropagation();
	});
	$('body').click(function () {
		var link = $('input#toggle-button3');
		if (link.hasClass('active')) {
			link.click();
		}
	});
});
// Цена товара 
// function fun1() {
//     var rng=document.getElementById('range'); //rng - это Input
//     var span=document.getElementById('rangeValue'); // p - абзац
//     span.innerHTML=rng.value;
// }
function rangeChange() {
	var rgnName = document.getElementById('range');
	var spanName = document.getElementById('rangeValue');
	spanName.innerHTML=rgnName.value;
}
// Оформление ползунка
$(function() {
  var r = $('input[type=range]');
  r.on('mouseenter', function() {
    var p = r.val();
    r.on('click', function() {
      p = r.val();
      bg(p);
    });
    r.on('mousemove', function() {
      p = r.val();
      console.log(p)
      bg(p);
    });
  });

  function bg(n) {
    r.css({
      'background-image': '-webkit-linear-gradient(left ,#00ca74 0%,#00ca74 ' + n / 300 + '%,#fff ' + n / 300 + '%, #fff 100%)'
    });
  }
});