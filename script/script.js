
//돋보기 아이콘 클릭하면 검색창 보임.
$('ul.header-icon > li:nth-of-type(1)').click(function(){
    $('ul.header-icon > li:nth-of-type(1)').hide();
    $('nav').hide();
    $('#menu-pc-search').show();
    $('.search').focus();
    $('body').css({'height': '100vh', 'overflow': 'hidden'}); 
    $('#container').show();
});


//돋보기 아이콘 클릭하면 검색창 보임.
$('#menu-pc-search button:last-of-type()').click(function(){
    $('ul.header-icon > li:nth-of-type(1)').show();
    $('nav').show();
    $('#menu-pc-search').hide();
    $('body').css({'height': 'auto', 'overflow': 'auto'}); 
    $('#container').hide(); 
});

$('#container').click(function(){
    $('ul.header-icon > li:nth-of-type(1)').show();
    $('nav').show();
    $('#menu-pc-search').hide();
    $('body').css({'height': 'auto', 'overflow': 'auto'});
    $('#container').hide(); 
    
});

//메인버튼
$('#main .main-text > button').mouseover(function(){
    $('.btn-hover1').css('transform','translateX(0)');
});
$('#main .main-text > button').mouseout(function(){
    $('.btn-hover1').css('transform','translateX(-206px)');
});

//섹션1버튼
$('.section-btn').mouseover(function(){
    $(this).find('.btn-hover').css('transform','translateX(0)');
});
$('.section-btn').mouseout(function(){
    $(this).find('.btn-hover').css('transform','translateX(-199px)');
});

//섹션5버튼
$('.btn-box > div .rt').click(function(){
    $('.btn-box .x-scroll > span').css('transform','translateX(0)');
    $('#section5 .wrapper').css('transform','translateX(-50px)');
});
$('.btn-box > div .lf').click(function(){
    $('.btn-box .x-scroll > span').css('transform','translateX(-250px)');
    $('#section5 .wrapper').css('transform','translateX(250px)');
});

/*
//섹션5 hover박스
$('#section5 .wrapper li.slide').mouseover(function(){
    $(this).find('.box-hover').css('transform','translateX(0)');
    $(this).find('.box-hover').css('transform','translateY(0)');
});
$('#section5 .wrapper li.slide').mouseout(function(){
    $(this).find('.box-hover').css('transform','translateX(-515.83px)');
    $(this).find('.box-hover').css('transform','translateY(435px)');
});
*/

var switch_1 = true; // 토글 스위치 변수
$('ul.header-icon > li:nth-of-type(2)').click(function(){ 
    $('ul.header-icon > li:nth-of-type(2)').toggleClass('on');
    $('ul.header-icon > li:nth-of-type(1)').toggleClass('on2');
    $('ul.header-icon > li:nth-of-type(2)').css('transition',"0.05s");
    $('body').toggleClass('scroll');
	if(switch_1 == true){
		switch_1 = false;
		
		$('#header-m').show();
		setTimeout(function(){
			$('#header-m .hambuger').addClass('on');
		}, 10)
	} else {
		switch_1 = true;
		
		$('#header-m .hambuger').removeClass('on');
		setTimeout(function(){
			$('#header-m').hide();
		}, 400)
	}
});


//스크롤 이벤트
$(window).scroll(function(){	
    var scrollTop = $(this).scrollTop();

    for(i = 0; i < 60; i++){
        if(scrollTop >= i * 25){
        $('p').css({'right':(i * 25) - 2200 + 'px'});
        }
    }
});

//푸터 이벤트
/*
$("#footer-m a.m").click(function() {   
    $(this).toggleClass("on3").next().slideToggle();
    $(this).parent().siblings().find(".footer-sub-m").slideUp();
    $(this).parent().siblings().find("a.m").removeClass("on3");
    $('#footer-m > nav > ul > li').toggleClass('change');
    return false; //a태그 링크 제거("href="javascript:;")
});*/

$("#footer-m > nav > ul > li").click(function() {   
    $(this).find('.footer-sub-m').slideToggle();
    $(this).toggleClass('change');
});

// swiper
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    grabCursor: true,
    slidesPerView: "auto",

    autoplay: {
        delay: 10000,
        disableOnInteraction: false, 
    },
    loop: true, 
    
    breakpoints: {
      
      320: {
      slidesPerView: 1,
      spaceBetween: 10
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 10
      },
     
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
     
      1024: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  });