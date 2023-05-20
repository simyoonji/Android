
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

var switch_1 = true; // 토글 스위치 변수

$('ul.header-icon > li:nth-of-type(2)').click(function(){ 
    $('ul.header-icon > li:nth-of-type(2)').toggleClass('on');
    $('ul.header-icon > li:nth-of-type(1)').toggleClass('on2');
    $('ul.header-icon > li:nth-of-type(2)').css('transition',"0.05s");
	
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
$("#footer a.m").click(function() {               
    $(this).next().addBack().toggleClass("on3").end().find(".footer-sub").removeClass("on3").end().parent().siblings().find(".footer-sub").removeClass("on3");              
     return false;
 });*/

$("#footer a.m").click(function() {   
    $(this).toggleClass("on3").next().slideToggle();
    $(this).parent().siblings().find(".footer-sub").slideUp();
    $(this).parent().siblings().find("a.m").removeClass("on3");

    return false; //a태그 링크 제거("href="javascript:;")
});