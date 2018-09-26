$(document).ready(function() {
	$("body").click(function(e) {
		
//		点击空白处若个人中心选择框存在则隐藏
		if($(".gerenzhongxinDisplay").css("display") == "block" && $(e.target).attr("id") != "aGerenzhongxin") {
			$(".gerenzhongxinDisplay").css("display", "none");
		}
		
		//点击空白处若网站导航选择框存在则隐藏
		if($(".wangzhandaohangDisplay").css("display") == "block" && $(e.target).attr("id") != "aWangzhandaohang") {
			$(".wangzhandaohangDisplay").css("display", "none");
		}
	});

	

	//	个人中心点击
	$("#aGerenzhongxin").click(function() {
//		if($(".gerenzhongxinDisplay").css("display") == "none") {
			$(".gerenzhongxinDisplay").show();
//			$(".gerenzhongxinDisplay").css("display", "block");
//		}else{
//			$(".gerenzhongxinDisplay",window.parent.document).hide();
//			$(".gerenzhongxinDisplay").css("display", "none");
//		}
	})

//	网站导航点击
	$("#aWangzhandaohang").click(function() {
		if($(".wangzhandaohangDisplay").css("display") == "none") {
			$(".wangzhandaohangDisplay").css("display", "block");
		}else{
			$(".wangzhandaohangDisplay").css("display", "none");
		}
	})
})