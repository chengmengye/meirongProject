

//图片加载时设置宽高
function imgLoad(param, maxWidth, maxHeight) {
	var width = $(param)[0].naturalWidth;
	var height = $(param)[0].naturalHeight;
	if(width > height) {
		$(param).css("height", maxHeight + "px");
		$(param).css("margin-left", "-" + (width / height * maxHeight - maxWidth) / 2 + "px");
		$(param).css("margin-top", "0");
	} else if(width < height) {
		$(param).css("width", maxWidth + "px");
		$(param).css("margin-top", "-" + (maxWidth * height / width - maxWidth) / 2 + "px");
		$(param).css("margin-left", "0");
	} else if(width == height) {
		$(param).css("height", maxHeight + "px");
		$(param).css("margin-left", "-" + (width / height * maxHeight - maxWidth) / 2 + "px");
		$(param).css("margin-top", "0");
	}
};






$(function() {

	//	是否存在培训经历页面显示效果
	var isHavePeixunjingli = 1; //是否有培训经历
	if(isHavePeixunjingli == 0) {
		$("#noPeixunjingli").css("display", "block");
		$("#peixunjingli").css("display", "none");
	} else {
		$("#noPeixunjingli").css("display", "none");
		$("#peixunjingli").css("display", "block");
	}

	//	是否存在工作经验页面显示效果
	var isHaveGongzuojingyan = 1; //是否有工作经验
	if(isHaveGongzuojingyan == 0) {
		$("#noGongzuojingyan").css("display", "block");
		$("#gongzuojingyan").css("display", "none");
	} else {
		$("#noGongzuojingyan").css("display", "none");
		$("#gongzuojingyan").css("display", "block");
	}
	
	//是否存在个人形象
	var isHaveXingxiang = 0;
	if(isHaveXingxiang == 0){
		$(".gerenxingxiang").css("display","none");
	}else{
		$(".gerenxingxiang").css("display","block");
	}
	
	//简历匿名  0代表没有开启，1代表开启
	var jianliNiming = 0;
	//简历匿名开启的时候   预览简历时  名称，头像，个人形象
	if(jianliNiming == 1){
		var name = $("#name").html();
		var sex =$("#spanSex").html();
		var yulanjianliName = name.substring(0,1)+sex+"士";
		$("#name").html(yulanjianliName);
		
		$("#jianliTouxiang").attr("src","img/jianliTouxiang.png");
		$(".gerenxingxiang").css("display","none");
	}
});