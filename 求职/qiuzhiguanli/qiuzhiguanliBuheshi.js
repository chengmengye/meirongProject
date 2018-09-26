$(document).ready(function() {
	$("#qiuzhiTitleUl > li:nth-of-type(5) > a").addClass("qiuzhiTitleClick");
	$("#qiuzhiTitleUl > li:nth-of-type(5) > a").siblings("li").removeClass("qiuzhiTitleClick");

	$("#zhiweijiluTitle > ul >li:nth-of-type(4) > a").addClass("zhiweijiluTitleClick");
	$("#zhiweijiluTitle > ul >li:nth-of-type(4)").siblings("li").children("a").removeClass("zhiweijiluTitleClick");
	
	$(".everyZhiweijilu").each(function(){
		if($(this).find(".zhiweiStateP").html() != "待确认"){
			$(this).find(".zhiweiStateP").css("color","#666");
		}
	});

})