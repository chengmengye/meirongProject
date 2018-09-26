//判断是否选中职位   以及选中职位时的样式变化，位置变化
function xuanzhongzhiweiCssChange(xuanzhongzhiweiIndex) {
	//判断是否选中职位   以及选中职位时的样式变化
	if(xuanzhongzhiweiIndex.length > 0) {
		//			$("#yixuanzeFixed").addClass("yixuanFixed");
		//			$(".allSelect").addClass("allSelectFixed");
		$("#bottomShenqingzhiwei").addClass("yiShenqingzhiwei");
		$("#shenqingzhiweiNum").html(xuanzhongzhiweiIndex.length);
	} else {
		//			$("#yixuanzeFixed").removeClass("yixuanFixed");
		//			$(".allSelect").removeClass("allSelectFixed");
		$("#bottomShenqingzhiwei").removeClass("yiShenqingzhiwei");
		$("#shenqingzhiweiNum").html("");
	}
	//	选中职位时位置的变化
	var scrollTop = $(this).scrollTop();　　
	var scrollHeight = $(document).height();　　
	var windowHeight = $(this).height();　　
	if(xuanzhongzhiweiIndex.length > 0) {
		if(scrollTop + windowHeight <= scrollHeight - 230) {　
			$(".allSelect").addClass("allSelectFixed");
			$("#yixuanzeFixed").addClass("yixuanFixed");　　　

		} else {
			$(".allSelect").removeClass("allSelectFixed");
			$("#yixuanzeFixed").removeClass("yixuanFixed");
		}
	} else {
		$(".allSelect").removeClass("allSelectFixed");
		$("#yixuanzeFixed").removeClass("yixuanFixed");
	}
};
//清空所有选中的职位
function clearXuanzhongzhiwei(xuanzhongzhiweiIndex) {
	$(".allSelect").removeClass("allSelectFixed");
	$("#yixuanzeFixed").removeClass("yixuanFixed");
	$("#bottomShenqingzhiwei").removeClass("yiShenqingzhiwei");
	xuanzhongzhiweiIndex = new Array;
	$("#shenqingzhiweiNum").html("");
	$(".everyZhiwei").children("img").attr("src", "img/weixuanzhong.png");
	$(".everyZhiwei").children("img").css("display", "none");
	return xuanzhongzhiweiIndex;
};
//定时器
var shengStart = "不限";
var shiStart = "不限";
var quStart = "不限";
var xinzidaiyuStart = "不限";
var gongzuojingyanStart = "不限";
var xueliStart = "不限";
var zhiweileixingStart = "不限";
var paixufangshiStart = "默认";
var zhiweileibieStart = "不限";

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

	var xinzidaiyu ="";
	$("#xinzidaiyu > span").each(function(){
		if($(this).hasClass("topSousuoClick")){
			xinzidaiyu = $(this).html();
		}
	});
	if(xinzidaiyu != xinzidaiyuStart) {
		xinzidaiyuStart = xinzidaiyu;
		alert("薪资待遇变化");
	}

	var gongzuojingyan = "";
	$("#gongzuojingyan > span").each(function(){
		if($(this).hasClass("topSousuoClick")){
			gongzuojingyan = $(this).html();
		}
	});
	if(gongzuojingyan != gongzuojingyanStart) {
		gongzuojingyanStart = gongzuojingyan;
		alert("工作经验变化");
	}

	var xueli = "";
	$("#xueli > span").each(function(){
		if($(this).hasClass("topSousuoClick")){
			xueli = $(this).html();
		}
	});
	if(xueli != xueliStart) {
		xueliStart = xueli;
		alert("学历变化");
	}

	var zhiweileixing = "";
	$("#zhiweileixing > span").each(function(){
		if($(this).hasClass("topSousuoClick")){
			zhiweileixing = $(this).html();
		}
	});
	if(zhiweileixing != zhiweileixingStart) {
		zhiweileixingStart = zhiweileixing;
		alert("职位类型变化");
	}

	var paixufangshi = "";
	$("#paixufangshi > span").each(function(){
		if($(this).hasClass("topSousuoClick")){
			paixufangshi = $(this).html();
		}
	});
	if(paixufangshi != paixufangshiStart) {
		paixufangshiStart = paixufangshi;
		alert("排序方式变化");
	}

	var zhiweileibie = $("#zhiweileibieContent > span").html();
	if(zhiweileibie != zhiweileibieStart) {
		zhiweileibieStart = zhiweileibie;
		alert("职位类别变化");
	}
}

//定时器筛选搜索条件的变化
//function sousuoJiance(){
//	var shengStart = "不限";
//	var shiStart = "不限";
//	var quStart = "不限";
//	var xinzidaiyuStart = "不限";
//	var gongzuojingyanStart = "不限";
//	var xueliStart = "不限";
//	var zhiweileixingStart = "不限";
//	var paixufangshiStart = "默认";
//	var zhiweileibieStart = "不限";
//	var sousuoJiance = self.setInterval("timer()", 10000);
//}
$(document).ready(function() {

	$("#qiuzhiTitleUl > li:nth-of-type(2) > a").addClass("qiuzhiTitleClick");
	$("#qiuzhiTitleUl > li:nth-of-type(2) > a").siblings("li").removeClass("qiuzhiTitleClick");

	$(".remensousuo > p").click(function() {
		$("#sousuoZhiwei").val($(this).html());
	});

	//	搜索条件的点击  begin
	$("#topSousuo > div > span, #paixufangshi > span").click(function() {
		$(this).addClass("topSousuoClick");
		$(this).siblings("span").removeClass("topSousuoClick");
	});

//	var sousuoJiance = self.setInterval("timer()", 10000);

	//	搜索条件的点击  end

	//	职位类别点击   begin

	$("#zhiweileibieContent").click(function() {
		//		$("#zhiweileibieDisplay").find("li").css("background-color", "white");
		$("#zhiweileibieDisplay").css("display", "block");
		$("#jibie").css("display", "none");
		$("#zhiwei").css("display", "none");
		$("#zhiweileibieDisplay").css("width", "150px");
	});
	$("#hangye > li").click(function() {
		$(this).css("background-color", "#E6E6E6");
		$(this).siblings("li").css("background-color", "white");
		$("#zhiwei").css("display", "inline-block");
		if($(this).html() != "不限") {
			$("#zhiweileibieDisplay").css("width", "346px");
		} else {
			$("#zhiwei").css("display", "none");
			$("#zhiweileibieContent > span").html("不限");
			$("#zhiweileibieDisplay > ul > li").css("background-color", "white");
			$("#zhiweileibieDisplay").css("display", "none");
			//			$("#zhiweileibieDisplay").css("width", "150px");
		}
	});
	/*$("#jibie > li").click(function() {
		$(this).css("background-color", "#E6E6E6");
		$(this).siblings("li").css("background-color", "white");
		$("#zhiwei").css("display", "inline-block");
		$("#zhiweileibieDisplay").css("width", "526px");
	});*/
	$("#zhiwei > li").click(function() {
		$(this).css("background-color", "#E6E6E6");
		$(this).siblings("li").css("background-color", "white");
		$("#zhiweileibieContent > span").html($(this).html());
		$("#zhiweileibieContent > span").css("color", "#212121");
		$("#zhiweileibieDisplay > ul > li").css("background-color", "white");
		$("#zhiweileibieDisplay").css("display", "none");
	});
	//	职位类别点击   end

	//	职位选择  begin
	//	鼠标悬停在每个职位上面的事件
	var xuanzhongzhiweiIndex = new Array;
	$(".everyZhiwei").mouseenter(function() {
		$(this).children("img").css("display", "block");
	}).mouseleave(function() {
		if($(this).children("img").attr("src") == "img/weixuanzhong.png") {
			$(this).children("img").css("display", "none");
		}
	});

	//	鼠标点击选中职位事件
	$(".everyZhiwei > img").click(function() {
		if($(this).attr("src") == "img/weixuanzhong.png") {
			$(this).attr("src", "img/yixuanzhong.png");
			xuanzhongzhiweiIndex.push($(this).parent(".everyZhiwei").index());
		} else {
			$(this).attr("src", "img/weixuanzhong.png");
			xuanzhongzhiweiIndex.splice($.inArray($(this).parent(".everyZhiwei").index(), xuanzhongzhiweiIndex), 1);
		}
		xuanzhongzhiweiCssChange(xuanzhongzhiweiIndex);

	});
	$(".middle").click(function() {
		if($(this).siblings("img").attr("src") == "img/weixuanzhong.png") {
			$(this).siblings("img").attr("src", "img/yixuanzhong.png");
			xuanzhongzhiweiIndex.push($(this).parent(".everyZhiwei").index());
		} else {
			$(this).siblings("img").attr("src", "img/weixuanzhong.png");
			xuanzhongzhiweiIndex.splice($.inArray($(this).parent(".everyZhiwei").index(), xuanzhongzhiweiIndex), 1);
		}
		xuanzhongzhiweiCssChange(xuanzhongzhiweiIndex);

	});

	//	全选
	$("#ckbQuanxuan").click(function() {
		if($(this).is(":checked")) {
			$(".everyZhiwei").children("img").attr("src", "img/yixuanzhong.png");
			$(".everyZhiwei").children("img").css("display", "block");
			xuanzhongzhiweiIndex = new Array();
			$(".everyZhiwei").each(function() {
				xuanzhongzhiweiIndex.push($(this).index());
			})
			$("#shenqingzhiweiNum").html(xuanzhongzhiweiIndex.length);
			$("#bottomShenqingzhiwei").addClass("yiShenqingzhiwei");
		} else {
			xuanzhongzhiweiIndex = clearXuanzhongzhiwei(xuanzhongzhiweiIndex);
		}

	});

	$(".ckbQuanxuan > a").click(function() {
		$("#ckbQuanxuan").click();
	});

	//	选中职位div在滚动条滚到下方时放在职位下面
	$(window).scroll(function() {　　
		var scrollTop = $(this).scrollTop();　　
		var scrollHeight = $(document).height();　　
		var windowHeight = $(this).height();　　
		if(xuanzhongzhiweiIndex.length > 0) {
			if(scrollTop + windowHeight <= scrollHeight - 230) {　
				$(".allSelect").addClass("allSelectFixed");
				$("#yixuanzeFixed").addClass("yixuanFixed");

			} else {
				$(".allSelect").removeClass("allSelectFixed");
				$("#yixuanzeFixed").removeClass("yixuanFixed");
			}
		} else {
			$(".allSelect").removeClass("allSelectFixed");
			$("#yixuanzeFixed").removeClass("yixuanFixed");
		}

	});

	//		职位选择  end
	//	收藏职位点击  begin
	$(".shoucangzhiweiA").click(function() {
		if($(this).html() != "已收藏") {
			$("#shoucangSuccess").css("display", "block");
			$(this).html("已收藏");
			$(this).addClass("yishoucangzhiweiA");
		}
	});
	$("#bottomShoucangzhiwei").click(function() {
		var isXuanZhiwei = 0;
		$(".everyZhiwei > img").each(function() {
			if($(this).attr("src") == "img/yixuanzhong.png") {
				$("#shoucangSuccess").css("display", "block");
				isXuanZhiwei = 1;
				$(this).parent(".everyZhiwei").find(".shoucangzhiweiA").html("已收藏");
			}
		})
		if(isXuanZhiwei == 0) {
			$("#weixuanZhiwei").css("display", "block");
		}

	});
	//	收藏职位点击  end
	//	申请职位点击  begin
	//	申请方式  默认为-1为多个选择  单个选择时为被选择的index
	var shenqingfangshi = 0;
	$(".shenqingzhiweiA").click(function() {
		$(this).addClass("shenqingzhiweiAClick");
		$(this).parent(".everyZhiwei").find(".shenqingzhiweiA").removeClass("shenqingzhiweiAClick");
		if($(this).html() != "已申请") {
			$("#zhiweishenqingDisplay").css("display", "block");
			shenqingfangshi = $(this).parents(".everyZhiwei").index();
			//			$(this).html("已申请");
			//			$(this).addClass("yishenqingzhiweiA");
		}
	});
	$("#bottomShenqingzhiwei").click(function() {
		var isXuanZhiwei = 0;
		$(".everyZhiwei > img").each(function() {
			if($(this).attr("src") == "img/yixuanzhong.png") {
				$("#zhiweishenqingDisplay").css("display", "block");
				isXuanZhiwei = 1;
				shenqingfangshi = -1;
				//				$(this).parent(".everyZhiwei").find(".shenqingzhiweiA").html("已申请");
			}
		})
		if(isXuanZhiwei == 0) {
			$("#weixuanZhiwei").css("display", "block");
		}
	});
	//	申请职位点击  end

	$("#zhiweishenqingClose").click(function() {
		$(this).parent("div").parent("div").css("display", "none");
		$(".everyZhiwei:nth-of-type(" + (shenqingfangshi * 1 + 1) + ")").find(".shenqingzhiweiA").removeClass("shenqingzhiweiAClick");
	});

	//立即申请点击  begin
	$("#displayLijishenqing").click(function() {
		if(shenqingfangshi != -1) {
			$(".shenqingzhiweiA").parents(".everyZhiwei:nth-of-type(" + (shenqingfangshi * 1 + 1) + ")").find(".shenqingzhiweiA").html("已申请");
			$(".shenqingzhiweiA").parents(".everyZhiwei:nth-of-type(" + (shenqingfangshi * 1 + 1) + ")").find(".shenqingzhiweiA").removeClass("shenqingzhiweiAClick");
			$(".shenqingzhiweiA").parents(".everyZhiwei:nth-of-type(" + (shenqingfangshi * 1 + 1) + ")").find(".shenqingzhiweiA").addClass("yishenqingzhiweiA");
			$("#zhiweishenqingDisplay").css("display", "none");
			$("#shenqingSuccess").css("display", "block");
		} else {
			var nowShenqing = 0;
			var yiShenqing = 0;
			var zhiweiIndex;
			for(zhiweiIndex in xuanzhongzhiweiIndex) {
				if($(".everyZhiwei:nth-of-type(" + (xuanzhongzhiweiIndex[zhiweiIndex] * 1 + 1) + ")").find(".shenqingzhiweiA").html() == "已申请") {
					yiShenqing += 1;
				} else {
					nowShenqing += 1;
					$(".everyZhiwei:nth-of-type(" + (xuanzhongzhiweiIndex[zhiweiIndex] * 1 + 1) + ")").find(".shenqingzhiweiA").html("已申请");
					$(".everyZhiwei:nth-of-type(" + (xuanzhongzhiweiIndex[zhiweiIndex] * 1 + 1) + ")").find(".shenqingzhiweiA").addClass("yishenqingzhiweiA");
				}
			}
			if(yiShenqing != 0) {
				$("#shenqingSuccess").find("#shenqingSuccessInfo").html(yiShenqing + "个职位已申请，成功申请职位" + nowShenqing + "个");
			}
			$("#shenqingSuccess").css("display", "block");
			$("#zhiweishenqingDisplay").css("display", "none");
			xuanzhongzhiweiIndex = clearXuanzhongzhiwei(xuanzhongzhiweiIndex);
			$("#ckbQuanxuan").attr("checked", false);
		}

	});
	//立即申请点击  end

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