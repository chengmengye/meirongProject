//个人中心列表点击效果

$(".part li").click(function(){
	var partli = $(this).index();
	$(".part li a").css("background-image","none");
	$(".part li a").css("color","#212121");
	$(".part li a").eq(partli).css("background-image","url(img/zhanghu.png)");
	$(".part li a").eq(partli).css("background-repeat","no-repeat");
	$(".part li a").eq(partli).css("color","#C93756");
});

function liSelect(param){
	$(".part li a").css("background-image", "none");
	$(".part li:nth-of-type("+param+")").children("a").css("background-image", "url(../common/img/zhanghu.png)");
	$(".part li:nth-of-type("+param+")").children("a").css("background-repeat", "no-repeat");

}

