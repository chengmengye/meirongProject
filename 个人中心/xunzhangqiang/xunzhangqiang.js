$(document).ready(function() {
	//	勋章鼠标悬停的时候变化  begin
	$(".xunzhangDiv > ul > li").mouseenter(function() {
		$(this).addClass("xunzhangLiHover");
		$(this).children("img:first-of-type").css("display", "none");
		$(this).children("div").css("display", "block");
	}).mouseleave(function() {
		$(this).removeClass("xunzhangLiHover");
		$(this).children("div").css("display", "none");
		$(this).children("img:first-of-type").css("display", "block");
	})
	//	勋章鼠标悬停的时候变化  end

//	勋章点亮时的顺序排列  begin
//	实名认证   公益认证  职位认证  替人担保  周年勋章  好为人师  特殊职位  高级会员  完善简历信息
//	根据位置 isLighted的位置和xunzhang位置一一对应
//	isLighted记录某一位置上勋章是否被点亮
	var isLighted = new Array(0, 1, 1, 1, 0, 0, 0, 1, 0);
//	xunzhang记录某一位置上的图片名称
	var xunzhang = new Array("shimingrenzheng", "gongyirenzheng", "zhiweirenzheng", "tirendanbao", "zhounianxunzhang", "haoweirenshi", "teshuzhiwei", "gaojihuiyuan", "wanshanjianli");
//	判断是否是第一个点亮的
	var j = 0;
//	记录上一个点亮的index
	var isLightedLastIndex = 0;
	for(var i = 0; i < isLighted.length; i++) {
		if(isLighted[i] == 1) {
			j += 1;
			$("#xunzhangDiv > ul > li:nth-of-type(" + (i + 1) + ")").remove();
			var isLightedHtml = "<li class='xunzhangLi' id='xunzhangLi" + i + "'><img src='img/" + xunzhang[i] + ".png'/></li>";
			
			if(j == 1) {
				$("#xunzhangDiv > ul").prepend(isLightedHtml);
			} else {
				$("#xunzhangLi" + isLightedLastIndex).after(isLightedHtml);
			}
			isLightedLastIndex = i;
		}
	}
	//勋章点亮时的顺序排列  end
})