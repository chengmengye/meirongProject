
$(document).ready(function() {
	//	申请职位  begin
	$("#shenqingZhiwei").click(function() {
		$(this).html("已申请");
		$(this).css("background-color", "#ccc");
		$(this).css("cursor", "default");
		$(this).unbind("click");
	});
	//	申请职位  end

	//	收藏职位   begin
	$("#shoucangZhiwei").click(function() {
		$(this).html("已收藏");
		$(this).css("cursor", "default");
		$(this).unbind("click");
	});
	//	收藏职位   end

	//	举报职位   begin
	$("#jubaoZhiwei").click(function() {
		$("#jubaodisplay").css("display", "block");
	});
	$(".jubaoSelect > input").change(function(e) {
		if($(e.target).is(":checked")) {
			$(".jubaoSelect").children("label").each(function() {
				$(this).removeClass("jubaoSelected");
			});
			$(e.target).next("label").addClass("jubaoSelected");
		}
	});
	$("#okJubao").click(function() {
		$("#jubaodisplay").css("display", "none");
		$("#jubaoZhiwei").html("已举报");
		$("#jubaoZhiwei").css("cursor", "default");
		$("#jubaoZhiwei").unbind("click");
	});
	//	举报职位   end

	//	是否存在评价  begin
	var isHavePingjia = 1;
	if(isHavePingjia == 0) {
		$(".noMianshipingjia").css("display", "block");
		$(".mianshipingjiaContent").css("display", "none");
	} else {
		$(".noMianshipingjia").css("display", "none");
		$(".mianshipingjiaContent").css("display", "block");
	}
	//	是否存在评价 end
	//	评价星星显示  begin
	$(".xingjipingjia ul").each(function(){
		var xingxingNum = $(this).attr("xingxingNum");
		$(this).children("li:nth-of-type("+xingxingNum+")").css("background","url(img/xingxing.png) no-repeat center");
		$(this).children("li:nth-of-type("+xingxingNum+")").prevAll("li").css("background","url(img/xingxing.png) no-repeat center");
	})
	//	评价星星显示  end
	//评价中有用的点击  begin
	$(".pingjiaCaozuo > p").click(function() {
		var pingjiaNum = $(this).children("span").html();
		pingjiaNum = pingjiaNum * 1 + 1;
		$(this).children("span").html(pingjiaNum);
	});
	//评价中有用的点击  begin
});