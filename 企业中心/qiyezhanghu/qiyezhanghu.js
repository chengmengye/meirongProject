
	
//	弹窗关闭
	function tanchuangClose(param){
		$(param).parent("div").css("display","none");
		$("#bac").css("display","none");
	}
	
//	点击需要输入信息时
	function readyInput(param){
		if($(param)[0].tagName.toLowerCase() == "input"){
			$(param).next("a").css("display","none");
		}else if($(param)[0].tagName.toLowerCase() == "a"){
			$(param).css("display","none");
			$(param).siblings("input")[0].focus();
		}
	}
	
	
//	输入信息后验证
	function input(param){
		var inputLeixing = $(param).attr("id");
		switch(inputLeixing){
			case "inputJine":
				if($(param).val() % 100 != 0 || $(param).val() == ""){
					$(param).siblings("a:last-of-type").css("display","inline-block");
				}else{
					$(param).siblings("a:last-of-type").css("display","none");
				}
				break;
			case "inputYinhangkahao":
				   var pattern = /^([1-9]{1})(\d{14}|\d{18})$/;
				   if(!pattern.test($(param).val()) || $(param).val() == ""){
					   	$(param).siblings("a:last-of-type").css("display","inline-block");
					}else{
						$(param).siblings("a:last-of-type").css("display","none");
					}
				break;
			case "inputKaihuhang":
			case "inputXingming":
				if($(param).val() == ""){
					$(param).siblings("a:last-of-type").css("display","inline-block");
				}else{
					$(param).siblings("a:last-of-type").css("display","none");
				}
				break;
		}
	}
	
$(document).ready(function(){
	$("body").click(function(e){
//		若明细类别弹窗可见,点击空白处可消失
		
		if($(".mingxiDisplay").css("display") == "block" && $(e.target).parent("a").attr("id") != "quanbumingxi"){
			$(".mingxiDisplay").css("display","none");
		}
	})
	
//	明细选择
	$("#quanbumingxi").click(function(){
		if($(".mingxiDisplay").css("display") == "none"){
			$(".mingxiDisplay").css("display","block");
		}else{
			$(".mingxiDisplay").css("display","none");
		}
	})
	
	$(".mingxiDisplay ul li").click(function(){
		$("#quanbumingxi span").html(""+$(this).html()+"");
	})
	
	
//	充值
//	充值点击
	$("#chongzhi").click(function(){
		$("#bac").css("display","block");
		$(".chongzhiDisplay").css("display","block");
	})
//	充值时选择金额
	$("#chongzhiJine span").click(function(){
		$(this).addClass("chongzhiJineClick");
		$(this).siblings("span").removeClass("chongzhiJineClick");
	})
	//	充值时选择方式
	$("#chongzhiFangshi div").click(function(){
		$(this).addClass("chongzhiFangshiClick");
		$(this).siblings("div").removeClass("chongzhiFangshiClick");
	})
	//	充值失败继续充值
	$("#changeZhifufangshi").click(function(){
		$(".chongzhiFail").css("display","none");
		$(".chongzhiDisplay").css("display","block");
	})
	
//	提现
//	提现点击
	$("#tixian").click(function(){
		$("#bac").css("display","block");
		$(".tixianDisplay").css("display","block");
	})
//	提现时选择金额
	$("#tixianJine span").click(function(){
		$(this).addClass("chongzhiJineClick");
		$(this).siblings("span").removeClass("chongzhiJineClick");
	})
//	提现时输入金额
	$("#inputJine, #inputJine > a").click(function(){
		$("#inputJine > a").css("display","none");
	})
	

})
