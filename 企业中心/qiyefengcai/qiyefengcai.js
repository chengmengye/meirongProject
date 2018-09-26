//主页展示
function zhuyezhanshi(param) {
	if($(param).html() == "开启主页展示") {
//		$(".bacLight").css("display", "block");
		$("#zhanshiOpen").css("display", "block");
		$("#zhanshiClose").css("display", "none");
		$(param).parents("li").append("<div class='imgTopRight'></div>");
//		$(param).parents("li").siblings("li").children(".imgTopRight").remove();
		$(param).html("关闭主页展示");
//		$(param).parents("li").siblings("li").children(".imgCaozuo").children("a:first-of-type").html("开启主页展示");
	} else if($(param).html() == "关闭主页展示") {
//		$(".bacLight").css("display", "block");
		$("#zhanshiClose").css("display", "block");
		$("#zhanshiOpen").css("display", "none");
		$(param).parents("li").children(".imgTopRight").remove();
		$(param).html("开启主页展示");
	}
}
//查看图片
var indexLooking;

function imgLook(param) {
	$("#bac").css("display", "block");
	$("#imgLook > img").attr("src", "" + $(param).prev("img").attr("src") + "");
	indexLooking = $(param).parents("li").index();
	console.log(indexLooking);
	$(".imgLookDisplay").css("display", "block");
}
//图片加载时设置宽高
function imgLoad(param) {
	var width = $(param)[0].naturalWidth;
	var height = $(param)[0].naturalHeight;
	if(width > height) {
		$(param).css("max-height", "233px");
		$(param).css("min-height", "233px");
		$(param).css("margin-left", "-" + (width / height * 233 - 175) / 2 + "px");
		$(param).css("margin-top", "0");
	} else if(width < height) {
		$(param).css("max-width", "175px");
		$(param).css("min-width", "175px");
		$(param).css("margin-top", "-" + (175 * height / width - 233) / 2 + "px");
		$(param).css("margin-left", "0");
	} else if(width == height) {
		$(param).css("max-height", "233px");
		$(param).css("min-height", "233px");
		$(param).css("margin-left", "-" + (width / height * 233 - 175) / 2 + "px");
		$(param).css("margin-top", "0");
	}
}

//图片鼠标悬停时图片加遮罩
function imgEnter(param){
	if($(param)[0].tagName.toLowerCase() == "div"){
		$(param).css("display","block");
	}else{
		$(param).next("div").css("display","block");
	}
}

//点击删除图片
function delImg(param){
//	$(".bac").css("display","block");
	$("#deleteImg").css("display","block");
}
//点击删除视频
function delShipin(param){
//	$(".bac").css("display","block");
	$("#deleteShipin").css("display","block");
}
//图片鼠标悬停时图片去掉遮罩
function imgLeave(param){
	$(param).css("display","none");
}

//点击播放视频
var id;

function bofang(param) {
	$("#bac").css("display", "block");
	$(param).siblings("video").css("display", "block");
	$(param).siblings("video")[0].play();
	id = $(param).siblings("video").attr("id");
}

$(document).ready(function() {
	//	0代表非会员,1代表会员
	var isHuiyuan = 1;
	if(isHuiyuan == 0) {
		$(".isHuiyuan").html("立即开通");
	} else if(isHuiyuan == 1) {
		$(".isHuiyuan").html("立即续费");
	}
	//	导航点击
	$("#topDaohang > ul > li").click(function() {
		$(this).addClass("topDaohangClick");
		$(this).siblings("li").removeClass("topDaohangClick");
		if($(this).html() == "个人形象") {
			if($("#photo > ul >li").length > 0) {
				$("#havePhoto").css("display", "block");
				$("#noShipin").css("display", "none");
				$("#notHaveShipin").css("display", "none");
				$("#haveShipin").css("display", "none");
			} else {
				$("#notHavePhoto").css("display", "block");
				$("#noShipin").css("display", "none");
				$("#notHaveShipin").css("display", "none");
				$("#haveShipin").css("display", "none");
			}
		} else if($(this).html() == "视频展示") {
			if(isHuiyuan == 0) {
				$("#noShipin").css("display", "block");
				$("#notHavePhoto").css("display", "none");
				$("#havePhoto").css("display", "none");
			} else if(isHuiyuan == 1) {
				if($("#video > ul > li").length > 0) {
					$("#haveShipin").css("display", "block");
					$("#notHavePhoto").css("display", "none");
					$("#havePhoto").css("display", "none");
				} else {
					$("#notHaveShipin").css("display", "block");
					$("#notHavePhoto").css("display", "none");
					$("#havePhoto").css("display", "none");
				}
			}

		}
	})

	//	鼠标悬停按钮变化
	$("#imgLast").mouseenter(function() {
		$(this).attr("src", "img/imgLastClick.png");
		$(this).css("left", "198px");
	}).mouseleave(function() {
		$(this).attr("src", "img/imgLast.png");
		$(this).css("left", "220px");
	})
	$("#imgNext").mouseenter(function() {
		$(this).attr("src", "img/imgNextClick.png");
		$(this).css("right", "198px");
	}).mouseleave(function() {
		$(this).attr("src", "img/imgNext.png");
		$(this).css("right", "220px");
	})

	//	鼠标点击左右图片切换
	//图片的数量
	var imgCount = $(".photo > ul > li").length;
	$("#imgLast").click(function() {
		if(indexLooking == 0) {
			$("#imgLook > img").attr("src", "" + $(".photo > ul > li").eq($(".photo > ul > li").length - 1).find("img").attr("src") + "");
			indexLooking = $(".photo > ul > li").length - 1;
		} else {
			$("#imgLook > img").attr("src", "" + $(".photo > ul > li").eq(indexLooking - 1).find("img").attr("src") + "");
			indexLooking -= 1;
		}

	})
	$("#imgNext").click(function() {
		if(indexLooking == ($(".photo > ul > li").length - 1)) {
			$("#imgLook > img").attr("src", "" + $(".photo > ul > li").eq(0).find("img").attr("src") + "");
			indexLooking = 0;
		} else {
			$("#imgLook > img").attr("src", "" + $(".photo > ul > li").eq(indexLooking + 1).find("img").attr("src") + "");
			indexLooking += 1;
		}
	})
	//	点击空白处查看图片关闭
	$("#bac,.imgLook").click(function() {
		$("#bac").css("display", "none");
		$(".imgLookDisplay").css("display", "none");
	})

	//	没有图片时上传图片按钮
	$("#aNohaveShangchuan").click(function() {
		$("#noHavePhotoFile").click();
	})

	//	有图片时的上传图片
	$("#aHaveShangchuan").click(function() {
		$("#havePhotoFile").click();
	})

	//视频

	//	没有视频时上传视频按钮
	$("#aNohaveShangchuanShipin").click(function() {
		$("#noHaveShipinFile").click();
	})
	//	有视频时的上传视频
	$("#aHaveShangchuanShipin").click(function() {
		$("#haveShipinFile").click();
	})
	//	点击空白处视频停止播放
	$("#bac").click(function() {
		$("#" + id).css("display", "none");
		$("#" + id)[0].pause();
	})

})