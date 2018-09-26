$(document).ready(function(){
//	$("body").click(function(e){
////		若积分规则窗体可见,点击空白处可消失
//		if($(".jifenguizeDisplay").css("display") == "block" && $(e.target).parent("a").attr("id") != "jifenguize"){
//			$(".jifenguizeDisplay").css("display","none");
//		}
//	})
	
//	积分规则点击
	$("#jifenguize").click(function(){
		if($(".jifenguizeDisplay").css("display") == "none"){
			$("#bac").css("display","block");
			$(".jifenguizeDisplay").css("display","block");
		}else{
			$("#bac").css("display","none");
			$(".jifenguizeDisplay").css("display","none");
		}
	})
	
//	积分规则关闭
	$("#jifenguizeClose").click(function(){
		$("#bac").css("display","none");
		$(".jifenguizeDisplay").css("display","none");
	})
	
//	分页

})
