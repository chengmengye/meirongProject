$(document).ready(function() {
	$("#qiuzhiTitleUl > li:nth-of-type(4) > a").addClass("qiuzhiTitleClick");
	$("#qiuzhiTitleUl > li:nth-of-type(4) > a").siblings("li").removeClass("qiuzhiTitleClick");
	//	无简历时操作 begin
	$("#yijianCreatJianli").click(function() {
		$("#creatJianliFail").css("display", "block");
	})
	$("#creatJianli").click(function() {
		window.open("../jianlizhongxin/creatJianli.html");
	})
	//	无简历时操作 end
})