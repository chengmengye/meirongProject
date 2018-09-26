$(document).ready(function() {
	$("#qiuzhiTitleUl > li:first-of-type > a").addClass("qiuzhiTitleClick");
	$("#qiuzhiTitleUl > li:first-of-type > a").siblings("li").removeClass("qiuzhiTitleClick");
	//	liSelect(3);
	//	轮播图定时更换
	var index = 1;
	$(".lunbo").everyTime("3s", function() {
		if(index >= 3) {
			index = 0;
		}
		$(".lunbo > ul >li:nth-of-type(" + (index * 1 + 1) + ")").css("display", "block");
		$(".lunbo > ul >li:nth-of-type(" + (index * 1 + 1) + ")").siblings("li").css("display", "none");
		$(".yuandian > span:nth-of-type(" + (index * 1 + 1) + ")").addClass("yuandianSpanClick");
		$(".yuandian > span:nth-of-type(" + (index * 1 + 1) + ")").siblings("span").removeClass("yuandianSpanClick");
		index += 1;
	});
	//	轮播图鼠标悬停左右切换按钮出现
	$(".lunbo > ul > li,.leftLunbo,.rightLunbo").hover(function() {
		$("#leftLunbo").css("display", "inline-block");
		$("#rightLunbo").css("display", "inline-block");
	}, function() {
		$("#leftLunbo").css("display", "none");
		$("#rightLunbo").css("display", "none");
	})
	//	左右切换按钮点击
	$("#leftLunbo").click(function() {
		if(index <= 1) {
			index = 4;
		}
		$(".lunbo > ul >li:nth-of-type(" + (index * 1 - 1) + ")").css("display", "block");
		$(".lunbo > ul >li:nth-of-type(" + (index * 1 - 1) + ")").siblings("li").css("display", "none");
		$(".yuandian > span:nth-of-type(" + (index * 1 - 1) + ")").addClass("yuandianSpanClick");
		$(".yuandian > span:nth-of-type(" + (index * 1 - 1) + ")").siblings("span").removeClass("yuandianSpanClick");
		index -= 1;
	})

	$("#rightLunbo").click(function() {
		if(index >= 3) {
			index = 0;
		}
		$(".lunbo > ul >li:nth-of-type(" + (index * 1 + 1) + ")").css("display", "block");
		$(".lunbo > ul >li:nth-of-type(" + (index * 1 + 1) + ")").siblings("li").css("display", "none");
		$(".yuandian > span:nth-of-type(" + (index * 1 + 1) + ")").addClass("yuandianSpanClick");
		$(".yuandian > span:nth-of-type(" + (index * 1 + 1) + ")").siblings("span").removeClass("yuandianSpanClick");
		index += 1;
	})
	//	轮播图原点点击
	$(".yuandian > span").click(function() {
		index = $(this).index();
		if(index > 3) {
			index = 0;
		}
		$(".lunbo > ul >li:nth-of-type(" + (index * 1 + 1) + ")").css("display", "block");
		$(".lunbo > ul >li:nth-of-type(" + (index * 1 + 1) + ")").siblings("li").css("display", "none");
		$(".yuandian > span:nth-of-type(" + (index * 1 + 1) + ")").addClass("yuandianSpanClick");
		$(".yuandian > span:nth-of-type(" + (index * 1 + 1) + ")").siblings("span").removeClass("yuandianSpanClick");
	});

	//是否存在简历
	var isHaveJianli = 0;
	if(isHaveJianli == 0) {
		$("#noJianliInfo").css("display", "inline-block");
		$("#jianliInfo").css("display", "none");
	} else {
		$("#noJianliInfo").css("display", "none");
		$("#jianliInfo").css("display", "inline-block");
	}

	//	有简历时操作   begin
	// 公开隐藏的点击事件
	$("#jianliIsShow > span").click(function() {
		alert($(this).html());
		$(this).addClass("jinliIsshowClick");
		$(this).siblings("span").removeClass("jinliIsshowClick");
	});
	$("#bianjiJianli").click(function() {
		window.open("../jianlizhongxin/jianlizhongxin.html");
	});

	//	企业查看点击事件
	$("#qiyeChakan").click(function() {
		window.open("../qiuzhiguanli/qiuzhiguanliQiyeChakan.html", "_self");
	});

	//	面试邀请点击事件
	$("#mianshiYaoqing").click(function() {
		window.open("../qiuzhiguanli/qiuzhiguanli.html", "_self");
	});

	//	刷新简历点击事件
	$("#refeshJianli").click(function() {
		$("#refeshJianliDisplay").css("display", "block");
	});

	//	置顶简历点击事件
	$("#zhidingJianli").click(function() {
		$("#bac").css("display", "block");
		$("#goumaizhiding").css("display", "block");
	});
	//	购买置顶服务点击
	$(".everyTaocan").click(function() {
		$(this).addClass("everyTaocanClick");
		$(this).siblings("div").removeClass("everyTaocanClick");
	});
	//	立即购买置顶
	$("#lijigoumaiZhiding").click(function() {
		$("#zhidingSuccess").css("display", "block");
		$("#goumaizhiding").css("display", "none");
		$("#bac").css("display", "none");
	});
	//	有简历时操作   end

	//	无简历时操作 begin
	$("#yijianCreatJianli").click(function() {
		$("#creatJianliFail").css("display", "block");
	});
	$("#creatJianli").click(function() {
		window.open("../jianlizhongxin/creatJianli.html");
	});
	//	无简历时操作 end

})