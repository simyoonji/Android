$('ul.header-icon > li:nth-of-type(1)').click(function(){
    $('p.bg-box').show().stop();
    $('p.bg-box').css('transition',"0.05s");
});

$('ul.header-icon > li:nth-of-type(2)').click(function(){ 
    $('ul.header-icon > li:nth-of-type(2)').toggleClass('on');
    $('ul.header-icon > li:nth-of-type(1)').toggleClass('on2');
    $('ul.header-icon > li:nth-of-type(2)').css('transition',"0.05s");
    $('#header-m .hambuger').toggleClass('active');
   
});
