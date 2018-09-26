$(document).ready(function() {
	$("#qiuzhiTitleUl > li:nth-of-type(5) > a").addClass("qiuzhiTitleClick");
	$("#qiuzhiTitleUl > li:nth-of-type(5) > a").siblings("li").removeClass("qiuzhiTitleClick");

	$("#zhiweijiluTitle > ul >li:nth-of-type(3) > a").addClass("zhiweijiluTitleClick");
	$("#zhiweijiluTitle > ul >li:nth-of-type(3)").siblings("li").children("a").removeClass("zhiweijiluTitleClick");

	$(".everyZhiweijilu").each(function() {
		if($(this).find(".zhiweiStateP").html() != "待确认") {
			$(this).find(".zhiweiStateP").css("color", "#666");
		}
	});

	//	职位记录鼠标悬停 
	var zhiweiState = -2; //0代表待确认   1代表已接受  -1代表已拒绝
	$(".everyZhiweijilu").mouseenter(function() {
		switch($(this).find(".zhiweiStateP").html()) {
			case "待确认":
				zhiweiState = 0;
				break;
			case "已接受":
				zhiweiState = 1;
				break;
			case "已拒绝":
				zhiweiState = -1;
				break;
		};
		$(this).find(".zhiweiStatePHover").css("display", "block");
		//		if($(this).find(".zhiweiStateP").html() == "待确认") {
		//			$(this).find(".zhiweiStatePHover").css("display", "block");
		//			zhiweiState = 0;
		//		} else if($(this).find(".zhiweiStateP").html() == "已接受") {
		//			$(this).find(".zhiweiStatePHover").css("display", "block");
		//			zhiweiState = 1;
		//		} else if($(this).find(".zhiweiStateP").html() == "已拒绝") {
		//			$(this).find(".zhiweiStatePHover").css("display", "block");
		//			zhiweiState = -1;
		//		}
	}).mouseleave(function() {
		switch(zhiweiState) {
			case 0:
				$(this).find(".zhiweiStateP").html("待确认");
				break;
			case 1:
				$(this).find(".zhiweiStateP").html("已接受");
				break;
			case -1:
				$(this).find(".zhiweiStateP").html("已拒绝");
				break;
		}
		$(this).find(".zhiweiStatePHover").css("display", "none");
		zhiweiState = -2;
	});
	var caozuoZhiweiIndex = -1;
	$(".zhiweiStatePHover").click(function() {

		switch(zhiweiState) {
			case 0:
				$("#mianshiyaoqing").css("display", "block");
				caozuoZhiweiIndex = $(this).parents(".everyZhiweijilu").index();
				break;
			case 1:
				$("#jieshouMianshiyaoqing").css("display", "block");
				break;
			case -1:
				$("#jujueMianshiyaoqing").css("display", "block");
				break;
		}
		//		if($(this).html() == "查看邀请函") {
		//			caozuoZhiweiIndex = $(this).parents(".everyZhiweijilu").index();
		//			$("#mianshiyaoqing").css("display", "block");
		//		}
	});

	$("#jieshouMianshi").click(function() {
		$("#mianshiyaoqing").css("display", "none");
		$(".everyZhiweijilu:nth-of-type(" + (caozuoZhiweiIndex * 1 + 1) + ")").find(".zhiweiStateP").html("已接受");
		$(".everyZhiweijilu:nth-of-type(" + (caozuoZhiweiIndex * 1 + 1) + ")").find(".zhiweiStateP").css("color", "#666");
		caozuoZhiweiIndex = -1;
	});
	$("#fangqiMianshi").click(function() {
		$("#mianshiyaoqing").css("display", "none");
		$(".everyZhiweijilu:nth-of-type(" + (caozuoZhiweiIndex * 1 + 1) + ")").find(".zhiweiStateP").html("已拒绝");
		$(".everyZhiweijilu:nth-of-type(" + (caozuoZhiweiIndex * 1 + 1) + ")").find(".zhiweiStateP").css("color", "#666");
		caozuoZhiweiIndex = -1;
	});

	//正在评价的当前everyZhiweijilu 的index
	var isPingjia = -1;
	$(".everyZhiweijilu").each(function() {
		if($(this).find(".zhiweiStateP").html() == "已接受") {
			var mianshiTime = new Date("2018-09-17");
			var now = new Date();
			if(mianshiTime <= now) {
				$(this).find(".mianshiPingjia").css("display", "inline-block");
			}
		}
	});
	$(".mianshiPingjia").click(function(){
		$("#mianshipingjiaDisplay").css("display","block");
		isPingjia = $(this).parents(".everyZhiweijilu").index();
	});

	//	星级评价鼠标悬停效果
	$(".xingjipingjia > div > ul > li").hover(function() {
		$(this).css("background", "url(img/xingxing.png) no-repeat center");
		$(this).prevAll("li").css("background", "url(img/xingxing.png) no-repeat center");
	}, function() {
		$(this).css("background", "url(img/huiXingxing.png) no-repeat center");
		$(this).prevAll("li").css("background", "url(img/huiXingxing.png) no-repeat center");
	});
	//	星星点击效果
	$(".xingjipingjia > div > ul > li").click(function() {
		$(this).addClass("xingxingClick");
		$(this).prevAll("li").addClass("xingxingClick");
		$(this).nextAll("li").removeClass("xingxingClick");
	});
	//	确定评价点击
	$("#okPingjia").click(function(){
		$("#mianshipingjiaDisplay").css("display","none");
		$(".xingjipingjia > div > ul > li").removeClass("xingxingClick");
		$(".everyZhiweijilu:nth-of-type("+(isPingjia*1+1)+")").find(".zhiweiStateP").html("已评价");
		$(".everyZhiweijilu:nth-of-type("+(isPingjia*1+1)+")").unbind("mouseenter mouseleave");
		$(".everyZhiweijilu:nth-of-type("+(isPingjia*1+1)+")").find(".mianshiPingjia").css("display","none");
	});
})