//定时器
var shengStart = "不限";
var shiStart = "不限";
var quStart = "不限";
var hangyeleixingStart = "不限";
var gongsiguimoStart = "不限";
var gongsimianjiStart = "不限";
var paixufangshiStart = "默认";

function timer() {
	var sheng = $("#zcityItem-head0 > a").html();
	var shi = $("#zcityItem-head1 > a").html();
	var qu = $("#zcityItem-head2 > a").html();
	if(shengStart != sheng || shiStart != shi || quStart != qu) {
		shengStart = sheng;
		shiStart = shi;
		quStart = qu;
		alert("工作地点变化")
	}

	var hangyeleixing = "";
	$("#hangyeleixing > span").each(function() {
		if($(this).hasClass("topSousuoClick")) {
			hangyeleixing = $(this).html();
		}
	});
	if(hangyeleixing != hangyeleixingStart) {
		hangyeleixingStart = hangyeleixing;
		alert("行业类型变化");
	}

	var gongsiguimo = "";
	$("#gongsiguimo > span").each(function() {
		if($(this).hasClass("topSousuoClick")) {
			gongsiguimo = $(this).html();
		}
	});
	if(gongsiguimo != gongsiguimoStart) {
		gongsiguimoStart = gongsiguimo;
		alert("公司规模变化");
	}

	var gongsimianji = "";
	$("#gongsimianji > span").each(function() {
		if($(this).hasClass("topSousuoClick")) {
			gongsimianji = $(this).html();
		}
	});
	if(gongsimianji != gongsimianjiStart) {
		gongsimianjiStart = gongsimianji;
		alert("公司面积变化");
	}

	var paixufangshi = "";
	$("#paixufangshi > span").each(function() {
		if($(this).hasClass("topSousuoClick")) {
			paixufangshi = $(this).html();
		}
	});
	if(paixufangshi != paixufangshiStart) {
		paixufangshiStart = paixufangshi;
		alert("排序方式变化");
	}
}

$(document).ready(function() {
	$("#qiuzhiTitleUl > li:nth-of-type(3) > a").addClass("qiuzhiTitleClick");
	$("#qiuzhiTitleUl > li:nth-of-type(3) > a").siblings("li").removeClass("qiuzhiTitleClick");

	var sousuoJiance = self.setInterval("timer()", 10000);
	//	排序方式鼠标悬停
	/*	var dianjiPaixuIndex = -1;
		$("#paixufangshi > span").mouseenter(function() {
			$(this).css("color", "white");
			$(this).css("background-color", "#C93756");
			$(this).children("img").attr("src", "img/whiteXiapaixu.png");
		}).mouseleave(function() {
			$(this).css("color", "#666");
			$(this).css("background-color", "white");
			$(this).children("img").attr("src", "img/xiaPaixu.png");
			if(dianjiPaixuIndex != -1) {
				$("#paixufangshi > span:nth-of-type(" + (dianjiPaixuIndex * 1) + ")").children("img").attr("src", "img/whiteXiapaixu.png");
			}
		});
	*/
	//	搜索条件的点击  begin
	$("#topSousuo > div > span, #paixufangshi > span").click(function() {
		$(this).addClass("topSousuoClick");
		$(this).siblings("span").removeClass("topSousuoClick");
	});
//	排序方式点击
	$("#paixufangshi > span").click(function() {
		var dianjiPaixuIndex = $(this).index();
		if(dianjiPaixuIndex == 0) {
			$(this).addClass("topSousuoClick");
			$(this).siblings("span").removeClass("topSousuoClick");
		}else{
			$(this).addClass("topSousuoClick");
			$(this).addClass("paixufangshiImg");
			$(this).siblings("span").removeClass("topSousuoClick");
			$(this).siblings("span").removeClass("paixufangshiImg");
		}

	});
	//	搜索条件的点击  end

	//	上面的分页  begin
	var nowPageNum = 1;
	$("#topPageLeft").click(function() {
		if(nowPageNum > 1) {
			nowPageNum -= 1;
			$("#topNowPage").html(nowPageNum);
		}
	});
	$("#topPageRight").click(function() {
		if(nowPageNum < $("#topAllpage").html()) {
			nowPageNum += 1;
			$("#topNowPage").html(nowPageNum);
		}
	});
	//	上面的分页  end
})