$(document).ready(function() {
//	liSelect(3);
	//	轮播图定时更换
	var index = 0;
	$("#huodong").everyTime("5s", function() {
		if(index >= 3) {
			index = 0;
		}
		$(".huodong > ul >li:nth-of-type(" + (index * 1 + 1) + ")").css("display", "block");
		$(".huodong > ul >li:nth-of-type(" + (index * 1 + 1) + ")").siblings("li").css("display", "none");
		$(".yuandian > span:nth-of-type(" + (index * 1 + 1) + ")").css("background-color", "#8E8E8E");
		$(".yuandian > span:nth-of-type(" + (index * 1 + 1) + ")").siblings("span").css("background-color", "#C1C1C1");
		index += 1;
	})

	//	轮播图原点点击
	$(".yuandian > span").click(function() {
		index = $(this).index();
		if(index > 3) {
			index = 0;
		}
		$(".huodong > ul >li:nth-of-type(" + (index * 1 + 1) + ")").css("display", "block");
		$(".huodong > ul >li:nth-of-type(" + (index * 1 + 1) + ")").siblings("li").css("display", "none");
		$(".yuandian > span:nth-of-type(" + (index * 1 + 1) + ")").css("background-color", "#8E8E8E");
		$(".yuandian > span:nth-of-type(" + (index * 1 + 1) + ")").siblings("span").css("background-color", "#C1C1C1");
	})

	//	是否是会员,0代表不是会员,1代表是会员
	var isHuiyuan = 0;
	if(isHuiyuan == 0) {
		$(".weikaitongHuiyuantequan,.weikaitongState").css("display", "block");
	} else if(isHuiyuan == 1) {
		$(".yikaitongState,.yikaotongHuiyuantequan").css("display", "block");
	}

	//	正在充值中的是会员为0,美币为1
	var isPaying;
	//	充值的会员金额
	var payHuiyuanJine;
	//	充值的美币金额
	var payMeibiJine;
	//	立即开通会员点击
	$("#lijikaitong,#xufei").click(function() {
		$("#bacLight").css("display","block");
		$("#chongzhiHuiyuanDisplay").css("display", "block");
	})

	//	会员充值中的span点击效果
	$(".huiyuanPay > span").click(function() {
		payHuiyuanJine = $(this).children("span").html();
		//		console.log(payHuiyuanJine);
		$(this).addClass("huiyuanPayClick");
		$(this).siblings("span").removeClass("huiyuanPayClick");
	})
	//	会员充值中的立即充值  判断美币余额是否为0
	$("#chongzhiHuiyuanChongzhi").click(function() {
		if($(".meibiJine").html() <= 20) {
			$("#yueBuzuDisplay").css("display", "block");
			return false;
		}
		isPaying = 0;
		$("#quedingPayDisplay").css("display", "block");
		//		$("#chongzhiHuiyuanDisplay").css("display","none");
	})

	//	取消充值点击
//	$("#cancelPay").click(function() {
//		$(this).parent("div").parent("div").css("display", "none");
//	})

	//	充值会员弹窗中的美币充值
	$("#chongzhiMeibi").click(function() {
		$("#chongzhiMeibiDisplay").css("display", "block");
	})
	//	余额不足提示框点充值
	$("#yueBuzuChongzhi").click(function() {
		$(this).parent("div").parent("div").css("display", "none");
		$("#chongzhiMeibiDisplay").css("display", "block");
	})
	//	充值美币
	//	充值点击
	$("#chongzhi").click(function() {
		$("#bac").css("display", "block");
		$(".chongzhiDisplay").css("display", "block");
	})
	//	充值时选择金额
	$("#chongzhiMeibiJine span").click(function() {
		payMeibiJine = $(this).html();
		$(this).addClass("chongzhiJineClick");
		$(this).siblings("span").removeClass("chongzhiJineClick");
	})
	//	充值时选择方式
	$("#chongzhiFangshi div").click(function() {
		$(this).addClass("chongzhiFangshiClick");
		$(this).siblings("div").removeClass("chongzhiFangshiClick");
	})
	//	充值美币弹窗中的立即充值
	$("#chongzhiMeibiChongzhi").click(function() {
		isPaying = 1;
		$("#quedingPayDisplay").css("display", "block");
		//		$(this).parent("div").css("display","none");
	})

	//确定充值
	$("#okPay").click(function() {
		if(isPaying == 0) {
			//			会员支付
			var payHuiyuanMonth = 0;
			var shengyuJine = 0;
			switch(payHuiyuanJine) {
				case("20"):
					payHuiyuanMonth = 1;
					shengyuJine = $(".meibiJine").html() * 1 - 20;
					break;
				case("58"):
					payHuiyuanMonth = 3;
					shengyuJine = $(".meibiJine").html() * 1 - 58;
					break;
				case("108"):
					payHuiyuanMonth = 6;
					shengyuJine = $(".meibiJine").html() * 1 - 108;
					break;
				case("188"):
					payHuiyuanMonth = 12;
					shengyuJine = $(".meibiJine").html() * 1 - 188;
					break;
				default:
					break;
			}
			if(shengyuJine > 0) {
				$(".meibiJine").html("" + shengyuJine + "")
				var jiezhiHuiyuanDate = formatDate(addMonth($("#huiyuanJiezhiDate").html(), payHuiyuanMonth));
				//			console.log(jiezhiHuiyuanDate);
				$("#huiyuanJiezhiDate").html("" + jiezhiHuiyuanDate + "")
				$("#chongzhiHuiyuanSuccess").css("display", "block");
				$("#chongzhiHuiyuanDisplay").css("display", "none");
				$("#bacLight").css("display","none");
			} else {
				$("#yueBuzuDisplay").css("display", "block");
			}
			$(this).parent("div").parent("div").parent("div").css("display", "none");
		} else if(isPaying == 1) {
			//			美币支付
			switch(payMeibiJine) {
				case("¥20"):
					$(".meibiJine").html("" + ($(".meibiJine").html() * 1 + 20) + "")
					break;
				case("¥50"):
					$(".meibiJine").html("" + ($(".meibiJine").html() * 1 + 50) + "")
					break;
				case("¥100"):
					$(".meibiJine").html("" + ($(".meibiJine").html() * 1 + 100) + "")
					break;
				case("¥500"):
					$(".meibiJine").html("" + ($(".meibiJine").html() * 1 + 500) + "")
					break;
				case("¥1000"):
					$(".meibiJine").html("" + ($(".meibiJine").html() * 1 + 1000) + "")
					break;
				default:
					break;
			}
			$("#chongzhiMeibiSuccess").css("display", "block");
			$("#chongzhiMeibiDisplay").css("display", "none");
			$(this).parent("div").parent("div").parent("div").css("display", "none");
		}
	})

	//	已开通会员会员特权指向效果
	$(".noPoint").mouseenter(function() {
		$(this).css("display", "none");
		$(this).next("div").css("display", "block");
	})
	$(".point").mouseenter(function() {
		$(this).css("display", "block");
		$(this).prev("div").css("display", "none");
	})
	$(".point").mouseleave(function() {
		$(this).css("display", "none");
		$(this).prev("div").css("display", "block");
	})

})