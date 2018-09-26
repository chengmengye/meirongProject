//	若已屏蔽列表没有数据  已屏蔽列表标题隐藏
function isHavePingbi() {
	if($(".everyPingbi").length == 0) {
		$("#yipingbiliebiaoTitle").css("display", "none");
	} else {
		$("#yipingbiliebiaoTitle").css("display", "block");
	}
}

function everyPingbiMouseenter(param) {
	$(param).css("background-color", "#F5F5F5");
	$(param).children("a").css("display", "inline-block");
}

function everyPingbiMouseleave(param) {
	$(param).css("background-color", "white");
	$(param).children("a").css("display", "none");
}

function delPingbi(param) {
	$(param).parent(".everyPingbi").remove();
	isHavePingbi();
}

$(document).ready(function() {
	//	点击空白处搜索屏蔽弹窗消失
	$(".rightContent").click(function(e) {
		if($(e.target).parents(".sousuo").length == 0) {
			$("#sousuoDisplay").css("display", "none");
		}
	})

	isHavePingbi();
	//	屏蔽职位鼠标悬停效果 
	/*$(".everyPingbi").mouseenter(function() {
		$(this).css("background-color", "#F5F5F5");
		$(this).children("a").css("display", "inline-block");
	})
	$(".everyPingbi").mouseleave(function() {
		$(this).css("background-color", "white");
		$(this).children("a").css("display", "none");
	})*/
	//	删除点击
	//	$(".delPingbi").click(function() {
	//		$(this).parent(".everyPingbi").remove();
	//	})

	$("#sousuoInput").click(function() {
		$("#sousuoDisplay").css("display", "block");
		$(".everySousuo").children("input").attr("checked", false);
		$("#cbkQuanxuan").attr("checked", false);
	})
	//	全选点击
	$("#cbkQuanxuan").click(function() {
		if($(this).is(":checked")) {
			$(".everySousuo").each(function() {
				$(this).children("input").prop("checked", true);
			})
		} else {
			$(".everySousuo").each(function() {
				$(this).children("input").prop("checked", false);
			})
		}
	})

	//屏蔽所选公司点击
	var selectGongsiPingbi = new Array();
	$("#pingbiSelectGongsi").click(function() {
		$("#sousuoDisplay").css("display", "none");
		var pingbiInfo = "<div class='everyPingbi' onmouseenter='everyPingbiMouseenter(this)' onmouseleave='everyPingbiMouseleave(this)'>" +
			"<a class='delPingbi' onclick='delPingbi(this)'>删除</a></div>";
		$(".everySousuo").each(function() {
			if($(this).children("input").is(":checked")) {
				//				selectGongsiPingbi.push($(this).index());
				$("#yipingbiLiebiao").append(pingbiInfo);
				$(this).children(".pingbiInfo").clone().appendTo($(".everyPingbi:last-of-type"));
				//				$(".everyPingbi:last-of-type").prepend($(this).children(".pingbiInfo"));
				//				$(this).remove();
			}
		})
		isHavePingbi();
		//		for(var i = 0; i < selectGongsiPingbi.length; i++) {
		//			$("#yipingbiLiebiao").append(pingbiInfo);
		//			$(".everyPingbi:last-of-type").prepend($(".everySousuo:nth-of-type(" + (selectGongsiPingbi[i] * 1 + 1) + ")").children(".pingbiInfo"));
		//			$(".everySousuo:nth-of-type(" + (selectGongsiPingbi[i] * 1 + 1) + ")").remove();
		//		}

	})
})