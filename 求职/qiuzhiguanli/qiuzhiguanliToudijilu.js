$(document).ready(function() {
	$("#qiuzhiTitleUl > li:nth-of-type(5) > a").addClass("qiuzhiTitleClick");
	$("#qiuzhiTitleUl > li:nth-of-type(5) > a").siblings("li").removeClass("qiuzhiTitleClick");

	$("#zhiweijiluTitle > ul >li:nth-of-type(1) > a").addClass("zhiweijiluTitleClick");
	$("#zhiweijiluTitle > ul >li:nth-of-type(1)").siblings("li").children("a").removeClass("zhiweijiluTitleClick");
})