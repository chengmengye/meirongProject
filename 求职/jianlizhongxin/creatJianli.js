/*
 *input点击下拉框显示
 * input失去焦点并且焦点不在下拉框上时下拉框消失
 * 下拉框点击li赋值input
 * $param为input的id
 */
function selectXiala($param) {
	var clickTarget = 0;
	$param.click(function() {
		$param.siblings("ul").css("display", "block");
	});
	$param.siblings("ul").children("li").hover(function() {
		clickTarget = 1;
	}, function() {
		clickTarget = 0;
	});
	$param.siblings("ul").children("li").click(function() {
		clickTarget = 0;
		$param.val("" + $(this).html());
		$param.siblings("ul").css("display", "none");
		$param.siblings("img").css("display", "none");
	});
	$param.blur(function() {
		if(clickTarget == 0) {
			$param.siblings("ul").css("display", "none");
		}
		//		if(clickTarget == 0 && $param.val().length == 0) {
		//			$param.siblings("img").css("display", "inline-block");
		//		}
	});

};
/*
 *div点击下拉框显示
 * 点击空白处下拉框消失
 * 下拉框点击li赋值div中的span
 * $param为div的id
 */
function mulSelcetXiala($param) {
	$param.click(function() {
		event.stopPropagation();
		$(".ulDisplay").each(function() {
			$(this).css("display", "none");
		});
		$(this).next(".ulDisplay").css("display", "block");
	});

	$param.next(".ulDisplay").children("li").click(function() {
		event.stopPropagation();
		if($(this).children("input").is(":checked")) {
			var value = $(this).children("span").html();
			$(this).children("input").prop("checked", false);
			$param.children("span").each(function() {
				if($(this).children("span").html() == value) {
					$(this).remove();
				}
			});
		} else {
			if($param.children("span").length < 3) {
				$(this).children("input").prop("checked", true);
				$param.append("<span><img onclick='delMulSelect(this," + $param.attr("id") + ")' src='../common/img/close.png' /><span>" + $(this).children("span").html() + "</span></span>")
			}
		}
		if($param.children("span").length > 0) {
			$param.children("a").css("display", "none");
		} else {
			$param.children("a").css("display", "inline-block");
		}
	});
	$param.next(".ulDisplay").children("li").children("input").click(function() {
		event.stopPropagation();
		if(!$(this).is(":checked")) {
			var value = $(this).siblings("span").html();
			$(this).prop("checked", false);
			$param.children("span").each(function() {
				if($(this).children("span").html() == value) {
					$(this).remove();
				};
			});
		} else {
			if($param.children("span").length < 3) {
				$(this).prop("checked", true);
				$param.append("<span><img onclick='delMulSelect(this," + $param.attr("id") + ")' src='../common/img/close.png' /><span>" + $(this).siblings("span").html() + "</span></span>")
			}
		}
		if($param.children("span").length > 0) {
			$param.children("a").css("display", "none");
		} else {
			$param.children("a").css("display", "inline-block");
		}
	});

	/*	$(".delMulSelect").click(function() {
			var value = $(this).next().html();
			$(this).parent("span").remove();
			$param.next(".ulDisplay").children("li").each(function() {
				if($(this).children("span").html() == value) {
					$(this).children("input").prop("checked", false);
				}
			})
		})*/

	$(document).click(function() {
		if($param.next(".ulDisplay").css("display") == "block") {
			$param.next(".ulDisplay").css("display", "none");
			if($param.children("span").length == 0) {
				$param.siblings("img").css("display", "inline-block");
			} else {
				$param.siblings("img").css("display", "none");
			}
		}

	});
};
/*
 * 期望行业  期望职位的多选删除
 * param：当前删除的span
 * paramId：div的id
 */
function delMulSelect(param, paramId) {
	var value = $(param).siblings("span").html();
	$(param).parent("span").remove();
	$(paramId).next(".ulDisplay").children("li").each(function() {
		if($(this).children("span").html() == value) {
			$(this).children("input").prop("checked", false);
		}
	});
	if($(paramId).children("span").length > 0) {
		$(paramId).children("a").css("display", "none");
	} else {
		$(paramId).children("a").css("display", "inline-block");
	}
};

/*
 * 必填项是否输入的判断
 */
function isInput(param) {
	$(param).blur(function() {
		if($(this).val().length == 0) {
			$(this).siblings("img").css("display", "inline-block");
		} else {
			if($(param).is($("#lianxidianhuaInput"))) {
				var pattern = /^1[34578]\d{9}$/;
				if(!pattern.test($(this).val())) {
					$(this).siblings("img").css("display", "inline-block");
				} else {
					$(this).siblings("img").css("display", "none");
				}
			}else if($(param).is($("#youxiangInput"))) {
				var pattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
				if(!pattern.test($(this).val())) {
					$(this).siblings("img").css("display", "inline-block");
				} else {
					$(this).siblings("img").css("display", "none");
				}
			}else{
				$(this).siblings("img").css("display", "none");
			}
		}
	});
};
/*
 * 结束时间小于开始时间  清空结束时间
 * 结束时间选择后取消至今的选择   至今选择后清空结束时间的选择
 * 至今可取消选择
 */
/*function endDate($startDate, $endDate, $zhijin) {
	$endDate.change(function(e) {
		var start = new Date($(e.target).prev("input").val().replace("-", "/").replace("-", "/"));
		var end = new Date($(e.target).val().replace("-", "/").replace("-", "/"));
		if(end < start) {
			$(e.target).val("");
		} else {
			$(e.target).next("input").prop("checked", false);
		}
	});
	$startDate.change(function(e) {
		var start = new Date($(e.target).val().replace("-", "/").replace("-", "/"));
		var end = new Date($(e.target).next("input").val().replace("-", "/").replace("-", "/"));
		if(start > end) {
			$(e.target).val("");
		}
		$(e.target).next("input").next("input").prop("checked", "checked");
	});
	$zhijin.click(function(e) {
		$(e.target).prev("input").val("");
	});
};*/

function startDate(startDate) {
	var start = new Date($(startDate).val().replace("-", "/").replace("-", "/"));
	var end = new Date($(startDate).next("input").val().replace("-", "/").replace("-", "/"));
	var now = new Date();
	if(start > end || start > now) {
		$(startDate).val("");
	}
	if($(startDate).next("input").val() == "") {
		$(startDate).next("input").next("input").prop("checked", "checked");
	}
};

function endDate(endDate) {
	var start = new Date($(endDate).prev("input").val().replace("-", "/").replace("-", "/"));
	var end = new Date($(endDate).val().replace("-", "/").replace("-", "/"));
	var now = new Date();
	if(end < start) {
		$(endDate).val("");
	} else if(end > now) {
		$(endDate).val("");
		$(endDate).next("input").prop("checked", true);
	} else {
		$(endDate).next("input").prop("checked", false);
	}
};

function zhijin(zhijin) {
	$(zhijin).prev("input").val("");
};
//上传图片
function uploadFileImg(param, imgShowId) {
	var img_id = $(param)[0].value; //根据id得到值
	var index = img_id.indexOf("."); //得到"."在第几位
	img_id = img_id.substring(index); //截断"."之前的，得到后缀
	var fileObj = $(param)[0].files[0]; // js 获取文件对象
	//	var url = "后台图片上传接口"; // 接收上传文件的后台地址 
	//	var form = new FormData(); // FormData 对象
	console.log(fileObj);
	if(imgShowId == "editZhengshu") {
		$(param).parents(".zhengshuImg").find(".editZhengshu").attr("src", "" + URL.createObjectURL(fileObj));
	} else {
		if(fileObj.size / 1024 > 500) {
			$("#photoNotUploadDisplay").css("display", "block");
		} else if(img_id != ".jpg") {
			$("#photoNotUploadDisplay").css("display", "block");
		} else {
			$("#" + imgShowId).attr("src", "" + URL.createObjectURL(fileObj));
		}
	}

};

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

//	每一条培训经历鼠标悬停效果  
function everyPeixunjinglienter(param) {
	$(param).find(".editHover").css("display", "inline-block");
};

function everyPeixunjingliLeave(param) {
	$(param).find(".editHover").css("display", "none");
};
//	每一条培训经历鼠标悬停时的编辑
function redEditClick(param) {
	$(param).parents(".everyPeixunjingliShow").css("display", "none");
	$(param).parents(".everyPeixunjingli").children(".divPeixunjingliEdit").css("display", "block");
	var peixunjigou = $(param).parents(".everyPeixunjingliShow").children("p:first-of-type").html();
	var peixunkecheng = $(param).parents(".everyPeixunjingliShow").children("p:nth-of-type(2)").html();
	var peixunShijian = $(param).parents(".everyPeixunjingliShow").children("p:nth-of-type(3)").html();
	var peixunStartShijian = peixunShijian.substring(0, 7).replace(".", "-");
	var peixunEndShijian = peixunShijian.substring(8, 15).replace(".", "-");
	if(peixunEndShijian == "至今") {
		$(param).parents(".everyPeixunjingli").find(".peixunDateZhijin").prop("checked", "checked");
	} else {
		$(param).parents(".everyPeixunjingli").find(".peixunEndDate").val(peixunEndShijian);
	}
	$(param).parents(".everyPeixunjingli").find(".peixunjigouInput").val(peixunjigou);
	$(param).parents(".everyPeixunjingli").find(".peixunKechengInput").val(peixunkecheng);
	$(param).parents(".everyPeixunjingli").find(".peixunStartDate").val(peixunStartShijian);

	var zhengshuImg = $(param).parents(".everyPeixunjingliShow").children("img").attr("src");
	if(zhengshuImg != undefined) {
		$(param).parents(".everyPeixunjingli").find(".editZhengshu").attr("src", "" + zhengshuImg);
	} else {
		$(param).parents(".everyPeixunjingli").find(".editZhengshu").attr("src", "");
	}
};
//	每一条培训经历鼠标悬停时的删除
function redDelClick(param) {
	$(param).parents(".everyPeixunjingli").remove();
	if($(".everyPeixunjingli").length == 0) {
		$("#peixunjingli").css("display", "none");
		$("#noPeixunjingli").css("display", "block");
	}
};

//	培训经历编辑时的保存	
function peixunjinliEditSave(param) {
	//		判空
	var isNull = 0;
	var $peixunjigouInput = $(param).parents(".everyPeixunjingli").find(".divPeixunjingliEdit").find(".peixunjigouInput");
	var $peixunKechengInput = $(param).parents(".everyPeixunjingli").find(".divPeixunjingliEdit").find(".peixunKechengInput");
	var $peixunStartDate = $(param).parents(".everyPeixunjingli").find(".divPeixunjingliEdit").find(".peixunStartDate");
	if($peixunjigouInput.val() == "") {
		$peixunjigouInput.siblings("img").css("display", "inline-block");
		isNull += 1;
	}
	if($peixunKechengInput.val() == "") {
		$peixunKechengInput.siblings("img").css("display", "inline-block");
		isNull += 1;
	}
	if($peixunStartDate.val() == "") {
		$peixunStartDate.siblings("img").css("display", "inline-block");
		isNull += 1;
	}
	if(isNull == 0) {
		var jigouName = $peixunjigouInput.val();
		var peixunKecheng = $peixunKechengInput.val();
		var peixunShijian;
		var $peixunEndDate = $(param).parents(".everyPeixunjingli").find(".divPeixunjingliEdit").find(".peixunEndDate");
		var $peixunDateZhijin = $(param).parents(".everyPeixunjingli").find(".divPeixunjingliEdit").find(".peixunDateZhijin");
		if($peixunDateZhijin.is(":checked")) {
			var peixunStartDate = $peixunStartDate.val() + "".substring(0, 7).replace("-", ".");
			peixunShijian = peixunStartDate + "- 至今";
		} else {
			var peixunStartDate = $peixunStartDate.val() + "".substring(0, 7).replace("-", ".");
			var peixunEndDate = $peixunEndDate.val() + "".substring(0, 7).replace("-", ".");
			peixunShijian = peixunStartDate + "-" + peixunEndDate;
		}
		$(param).parents(".everyPeixunjingli").find(".everyPeixunjingliShow > p:first-of-type").html(jigouName);
		$(param).parents(".everyPeixunjingli").find(".everyPeixunjingliShow > p:nth-of-type(2)").html(peixunKecheng);
		$(param).parents(".everyPeixunjingli").find(".everyPeixunjingliShow > p:nth-of-type(3)").html(peixunShijian);
		var zhengshuImg = $(param).parents(".everyPeixunjingli").find(".divPeixunjingliEdit").find(".editZhengshu").attr("src");
		if(zhengshuImg != "") {
			$(param).parents(".everyPeixunjingli").find(".everyPeixunjingliShow > img").attr("src", "" + zhengshuImg);
		}
		$(param).parents(".everyPeixunjingli").find(".divPeixunjingliEdit").css("display", "none");
		$(param).parents(".everyPeixunjingli").find(".everyPeixunjingliShow").css("display", "block");
	}
};
// 取消按钮
function peixunjinliEditCancle(param) {
	$(param).parents(".everyPeixunjingli").find(".divPeixunjingliEdit").css("display", "none");
	$(param).parents(".everyPeixunjingli").find(".everyPeixunjingliShow").css("display", "block");
};

//	每一条工作经验鼠标悬停时的编辑
function gongzuoRedEditClick(param) {
	$(param).parents(".everyGongzuojingyanShow").css("display", "none");
	$(param).parents(".everyGongzuojingyan").children(".divGongzuojingyanEdit").css("display", "block");
};
//	每一条工作经验鼠标悬停时的删除
function gongzuoRedDelClick(param) {
	$(param).parents(".everyGongzuojingyan").remove();
	if($(".everyGongzuojingyan").length == 0) {
		$("#gongzuojingyan").css("display", "none");
		$("#noGongzuojingyan").css("display", "block");
	}
};

//	工作经验编辑时的保存	
function gongzuojingyanEditSave(param) {
	//		判空
	var isNull = 0;
	var $gongsiNameInput = $(param).parents(".everyGongzuojingyan").find(".divGongzuojingyanEdit").find(".gongsiNameInput");
	var $zhiweiNameInput = $(param).parents(".everyGongzuojingyan").find(".divGongzuojingyanEdit").find(".zhiweiNameInput");
	var $shuiqianyuexin = $(param).parents(".everyGongzuojingyan").find(".divGongzuojingyanEdit").find(".shuiqianyuexinInput");
	var $peixunStartDate = $(param).parents(".everyGongzuojingyan").find(".divGongzuojingyanEdit").find(".gongzuoStartDate");
	var $gongzuomiaoshu = $(param).parents(".everyGongzuojingyan").find(".divGongzuojingyanEdit").find(".gongzuomiaoshuInput");
	if($gongsiNameInput.val() == "") {
		$gongsiNameInput.siblings("img").css("display", "inline-block");
		isNull += 1;
	}
	if($zhiweiNameInput.val() == "") {
		$zhiweiNameInput.siblings("img").css("display", "inline-block");
		isNull += 1;
	}
	if($shuiqianyuexin.val() == "") {
		$shuiqianyuexin.siblings("img").css("display", "inline-block");
		isNull += 1;
	}
	if($peixunStartDate.val() == "") {
		$peixunStartDate.siblings("img").css("display", "inline-block");
		isNull += 1;
	}
	if($gongzuomiaoshu.val() == "") {
		$gongzuomiaoshu.siblings("img").css("display", "inline-block");
		isNull += 1;
	}
	if(isNull == 0) {
		$(param).parents(".everyGongzuojingyan").find(".divGongzuojingyanEdit").css("display", "none");
		$(param).parents(".everyGongzuojingyan").find(".everyGongzuojingyanShow").css("display", "block");
	}
};
// 取消按钮
function gongzuojingyanEditCancle(param) {
	$(param).parents(".everyGongzuojingyan").find(".divGongzuojingyanEdit").css("display", "none");
	$(param).parents(".everyGongzuojingyan").find(".everyGongzuojingyanShow").css("display", "block");
};

$(document).ready(function() {
	$("#qiuzhiTitleUl > li:nth-of-type(4) > a").addClass("qiuzhiTitleClick");
	$("#qiuzhiTitleUl > li:nth-of-type(4) > a").siblings("li").removeClass("qiuzhiTitleClick");
	//		endDate($("#peixunStartDate"),$("#peixunEndDate"),$("#peixunDateZhijin"));

	// 公开隐藏的点击事件end

	//	所有时间默认为当前时间  begin
	/*var nowDate = new Date();
	var day = nowDate.getDate();
	if(nowDate.getMonth() < 10) {
		var month = "0" + (nowDate.getMonth() + 1);
	}
	if(nowDate.getDate() < 10) {
		day = "0" + nowDate.getDate();
	}
	var datew = nowDate.getFullYear() + "-" + month + "-" + day;
	$("[type='date']").val(datew);*/
	//	所有时间默认为当前时间  end

	//	基本信息   begin

	//	下拉框
	selectXiala($("#xueliInput"));
	selectXiala($("#gongzuojingyanInput"));
	isInput($("#lianxidianhuaInput"));
	isInput($("#youxiangInput"));

	$(".form-control").blur(function() {
		if($("#xianjudiInput").val().length == 0) {
			$("#xianjudiInput").siblings("img").show();
		} else {
			$("#xianjudiInput").siblings("img").hide();
		}
	});

	$(".form-controlp").blur(function() {
		if($("#hukoudiInput").val().length == 0) {
			$("#hukoudiInput").siblings("img").show();
		} else {
			$("#hukoudiInput").siblings("img").hide();
		}
	});

	$(".form-controlr").blur(function() {
		if($("#qiwanggongzuodiInput").val().length == 0) {
			$("#qiwanggongzuodiInput").siblings("img").show();
		} else {
			$("#qiwanggongzuodiInput").siblings("img").hide();
		}
	});

	$("#editTouxiang, #editTouxiangHover").mouseenter(function() {
		$("#editTouxiangHover").css("display", "inline-block");
	});
	$("#editTouxiang,#editTouxiangHover").mouseleave(function() {
		$("#editTouxiangHover").css("display", "none");
	});
	$("#delTouxiang").click(function() {
		$("#editTouxiang").attr("src", "img/jianliTouxiang.png");
		$("#imgFileInput").val("");
	});

	//	基本信息  end

	//	求职意向  begin

	mulSelcetXiala($("#divQiwanghangye"));
	mulSelcetXiala($("#divQiwangzhiwei"));
	selectXiala($("#qiwangxinziInput"));
	selectXiala($("#gongzuoxingzhiInput"));
	selectXiala($("#qiuzhizhuangtaiInput"));
	//	$("#divQiwanghangye").blur(function(){
	//		if($(this).children("span").length == 0){
	//			$(this).siblings("img").css("display","inline-block");
	//		}else{
	//			$(this).siblings("img").css("display","none");
	//		}
	//	})
	//	求职意向  end

	//	培训经历  begin
	//	培训经历必填项判断
	isInput($(".peixunjigouInput"));
	isInput($(".peixunKechengInput"));
	//	$("body").on("blur",$(".peixunjigouInput"),isInput($(".peixunjigouInput")));
	//	$("body").on("blur",$(".peixunKechengInput"),isInput($(".peixunKechengInput")));
	//	endDate($(".peixunStartDate"), $(".peixunEndDate"), $(".peixunDateZhijin"));
	$("#peixunStartDate").change(function() {
		startDate($("#peixunStartDate"))
	});
	$("#peixunEndDate").change(function() {
		endDate($("#peixunEndDate"))
	});
	$("#peixunDateZhijin").change(function() {
		zhijin($("#peixunDateZhijin"))
	});
	//	endDate($("#peixunEndDate"));
	//	zhijin($("#peixunDateZhijin"));

	//	是否存在培训经历页面显示效果
	var isHavePeixunjingli = 0; //是否有培训经历
	if(isHavePeixunjingli == 0) {
		$("#noPeixunjingli").css("display", "block");
		$("#peixunjingli").css("display", "none");
	} else {
		$("#noPeixunjingli").css("display", "none");
		$("#peixunjingli").css("display", "block");
	}

	//	未填写培训经历时新增
	$("#noJingliXinzeng, #addPeixunjingli").click(function() {
		$("#noPeixunjingli").css("display", "none");
		$("#peixunjingli").css("display", "block");
		$("#addDivPeixunjingliEdit input[type='text']").val("");
		$("#addDivPeixunjingliEdit input[type='month']").val("");
		$("#delZhengshu").click();
		$("#addDivPeixunjingliEdit").css("display", "block");
	});
	//	培训经历新增时的保存	
	$("#savePeixunjingli").click(function() {
		//		判空
		var isNull = 0
		if($("#peixunjigouInput").val() == "") {
			$("#peixunjigouInput").siblings("img").css("display", "inline-block");
			isNull += 1;
		}
		if($("#peixunKechengInput").val() == "") {
			$("#peixunKechengInput").siblings("img").css("display", "inline-block");
			isNull += 1;
		}
		if($("#peixunStartDate").val() == "") {
			$("#peixunStartDate").siblings("img").css("display", "inline-block");
			isNull += 1;
		}
		if(isNull == 0) {
			var jigouName = $("#peixunjigouInput").val();
			var peixunKecheng = $("#peixunKechengInput").val();
			var peixunShijian;
			if($("#peixunDateZhijin").is(":checked")) {
				var peixunStartDate = $("#peixunStartDate").val().substring(0, 7).replace("-", ".");
				peixunShijian = peixunStartDate + "- 至今";
			} else {
				var peixunStartDate = $("#peixunStartDate").val().substring(0, 7).replace("-", ".");
				var peixunEndDate = $("#peixunEndDate").val().substring(0, 7).replace("-", ".");
				peixunShijian = peixunStartDate + "-" + peixunEndDate;
			}
			var zhengshuImg = $("#editZhengshu").attr("src");
			var everyPeixunjingli;
			if(zhengshuImg == "") {
				everyPeixunjingli = "<div class='everyPeixunjingli' onmouseenter='everyPeixunjinglienter(this)' onmouseleave='everyPeixunjingliLeave(this)'><div class='everyPeixunjingliShow'><p>" + jigouName + "</p><p>" + peixunKecheng + "</p><p>" + peixunShijian + "</p><div class='editHover'><img src='img/redEdit.png' onclick='redEditClick(this)'/><img src='img/redDel.png' onclick='redDelClick(this)' /></div><img src=''/></div></div>";
			} else {
				everyPeixunjingli = "<div class='everyPeixunjingli' onmouseenter='everyPeixunjinglienter(this)' onmouseleave='everyPeixunjingliLeave(this)'><div class='everyPeixunjingliShow'><p>" + jigouName + "</p><p>" + peixunKecheng + "</p><p>" + peixunShijian + "</p><div class='editHover'><img src='img/redEdit.png' onclick='redEditClick(this)' /><img src='img/redDel.png' onclick='redDelClick(this)' /></div><img src='" + zhengshuImg + "'/></div></div>";
			}
			$("#peixunjingliContent > .divPeixunjingliEdit").before(everyPeixunjingli);
			$("#peixunjingli > .divPeixunjingliEdit").clone().appendTo($("#peixunjingliContent > .everyPeixunjingli:last"));

			$("#addDivPeixunjingliEdit").css("display", "none");
		}
	});
	// 取消按钮
	$("#cancelPeixunjingli").click(function() {
		if($(".everyPeixunjingli").length == 0) {
			$("#peixunjingli").css("display", "none");
			$("#noPeixunjingli").css("display", "block");
		} else {
			$("#addDivPeixunjingliEdit").css("display", "none");
		}
	});

	//	证书
	$("body").on("mouseenter", ".uploadZhengshuImg", function() {
		if($(this).children(".editZhengshu").attr("src") != "") {
			$(this).next(".editZhengshuHover").css("display", "inline-block");
		}
	});
	$("body").on("mouseenter", ".editZhengshuHover", function() {
		$(".uploadZhengshuImg").mouseenter();
	});
	$("body").on("mouseleave", ".uploadZhengshuImg", function() {
		$(this).next(".editZhengshuHover").css("display", "none");
	});
	$("body").on("mouseleave", ".editZhengshuHover", function() {
		$(".uploadZhengshuImg").mouseleave();
	});
	$("body").on("click", ".delZhengshu", function() {
		$(this).parents(".editZhengshuHover").prev(".uploadZhengshuImg").children("img").attr("src", "");
		$(this).prev(".zhengshuFile").children(".zhengshuFileInput").val("");
		$(this).parents(".editZhengshuHover").prev(".uploadZhengshuImg").children(".emptyZhengshuFileInput").val("");
	});

	//	培训经历 end

	//	工作经验  begin
	//	工作经验必填项判断
	isInput($("#gongsiNameInput"));
	isInput($("#zhiweiNameInput"));
	isInput($("#shuiqianyuexinInput"));
	isInput($("#gongzuomiaoshu"));
	//	endDate($("#gongzuoStartDate"), $("#gongzuoEndDate"), $("#gongzuoDatezhijin"));
	$("#gongzuoStartDate").change(function() {
		startDate($("#gongzuoStartDate"))
	});
	$("#gongzuoEndDate").change(function() {
		endDate($("#gongzuoEndDate"))
	});
	$("#gongzuoDatezhijin").change(function() {
		zhijin($("#gongzuoDatezhijin"))
	});

	//	是否存在工作经验页面显示效果
	var isHaveGongzuojingyan = 0; //是否有工作经验
	if(isHaveGongzuojingyan == 0) {
		$("#noGongzuojingyan").css("display", "block");
		$("#gongzuojingyan").css("display", "none");
	} else {
		$("#noGongzuojingyan").css("display", "none");
		$("#gongzuojingyan").css("display", "block");
	}

	//	未填写工作经验时新增
	$("#noGongzuojingyanAdd, #addGongzuojingyan").click(function() {
		$("#noGongzuojingyan").css("display", "none");
		$("#gongzuojingyan").css("display", "block");
		$("#addDivGongzuojingyanEdit input[type='text']").val("");
		$("#addDivGongzuojingyanEdit input[type='month']").val("");
		$("#addDivGongzuojingyanEdit").css("display", "block");
	});
	//	工作经验新增时的保存	
	$("#saveGongzuojingyan").click(function() {
		//		判空
		var isNull = 0
		if($("#gongsiNameInput").val() == "") {
			$("#gongsiNameInput").siblings("img").css("display", "inline-block");
			isNull += 1;
		}
		if($("#zhiweiNameInput").val() == "") {
			$("#zhiweiNameInput").siblings("img").css("display", "inline-block");
			isNull += 1;
		}
		if($("#shuiqianyuexinInput").val() == "") {
			$("#shuiqianyuexinInput").siblings("img").css("display", "inline-block");
			isNull += 1;
		}
		if($("#gongzuoStartDate").val() == "") {
			$("#gongzuoStartDate").siblings("img").css("display", "inline-block");
			isNull += 1;
		}
		if($("#gongzuomiaoshu").val() == "") {
			$("#gongzuomiaoshu").siblings("img").css("display", "inline-block");
			isNull += 1;
		}
		if(isNull == 0) {
			var gongsiName = $("#gongsiNameInput").val();
			var zhiweiName = $("#zhiweiNameInput").val();
			var shuiqianyuexin = $("#shuiqianyuexinInput").val();
			var gongzuoShijian;
			if($("#gongzuoDatezhijin").is(":checked")) {
				var gongzuoStartDate = $("#gongzuoStartDate").val().substring(0, 7).replace("-", ".");
				gongzuoShijian = gongzuoStartDate + "- 至今";
			} else {
				var gongzuoStartDate = $("#gongzuoStartDate").val().substring(0, 7).replace("-", ".");
				var gongzuoEndDate = $("#gongzuoEndDate").val().substring(0, 7).replace("-", ".");
				gongzuoShijian = gongzuoStartDate + "-" + gongzuoEndDate;
			}
			var gongzuomiaoshu = $("#gongzuomiaoshu").val();
			var everyGongzuojingyan;
			everyGongzuojingyan = "<div class='everyGongzuojingyan' onmouseenter='everyPeixunjinglienter(this)' onmouseleave='everyPeixunjingliLeave(this)'><div class='everyGongzuojingyanShow'><p>" + gongsiName + "</p><p>" + gongzuoShijian + "</p><p>" + zhiweiName + "<span>" + shuiqianyuexin + "</span></p><p>" + gongzuomiaoshu + "</p><div class='editHover'><img src='img/redEdit.png' onclick='gongzuoRedEditClick(this)'/><img src='img/redDel.png' onclick='gongzuoRedDelClick(this)' /></div></div></div>";
			$("#gongzuojingyanContent > .divGongzuojingyanEdit").before(everyGongzuojingyan);
			$("#gongzuojingyan > .divGongzuojingyanEdit").clone().appendTo($("#gongzuojingyanContent > .everyGongzuojingyan:last"));

			$("#addDivGongzuojingyanEdit").css("display", "none");
		}
	});
	// 取消按钮
	$("#cancelGongzuojingyan").click(function() {
		if($(".everyGongzuojingyan").length == 0) {
			$("#gongzuojingyan").css("display", "none");
			$("#noGongzuojingyan").css("display", "block");
		} else {
			$("#addDivGongzuojingyanEdit").css("display", "none");
		}
	});
	//	工作经验  end

	//个人介绍  begin
	//	个人介绍必填  begin
	isInput($("#xingquaihaoInput"));
	isInput($("#ziwopingjia"));
	//	个人介绍必填  end

	//个人形象照片上传  begin
	$("#xingxiangImg, #editXingxiangHover").mouseenter(function() {
		if($("#xingxiangImg").attr("src") != "") {
			$("#editXingxiangHover").css("display", "inline-block");
		}
	});
	$("#xingxiangImg,#editXingxiangHover").mouseleave(function() {
		$("#editXingxiangHover").css("display", "none");
	});
	$("#editXingxiang").click(function() {
		$("#selectPhotoDisplay").css("display", "block");
		$(".bac").css("display", "block");
	});
	$("#uploadXingxiangImg").click(function() {
		if($("#xingxiangImg").attr("src") == "") {
			$("#selectPhotoDisplay").css("display", "block");
			$(".bac").css("display", "block");
		}
	});
	$("#delXingxiang").click(function() {
		$("#xingxiangImg").attr("src", "");
	});
	//个人形象照片上传  end

	//	个人形象照片选择弹窗 begin
	$("#gerenxingxiangPhoto > li").click(function() {
		$(this).addClass("gerenxingxiangPhotoClick");
		$(this).siblings("li").removeClass("gerenxingxiangPhotoClick");
		//		$("#xingxiangImg").attr("src",""+$(this).children("img").attr("src"));
	});

	$("#selectPhotoOk").click(function() {
		$(".bac").css("display", "none");
		$("#selectPhotoDisplay").css("display", "none");
		$("#gerenxingxiangPhoto > li").each(function() {
			if($(this).hasClass("gerenxingxiangPhotoClick")) {
				$("#xingxiangImg").attr("src", "" + $(this).children("img").attr("src"));
			}
		});
	});
	//	个人形象照片选择弹窗  end
	//个人介绍 end

	//	创建简历 begin
	$("#creatJianli").click(function() {
		var isNull = 0;
		if($("#birthInput").val().length == 0) {
			$("#birthInput").siblings("img").css("display", "inline-block");
			isNull += 1;
		}
		if($("#xueliInput").val().length == 0) {
			$("#xueliInput").siblings("img").css("display", "inline-block");
			isNull += 1;
		}
		if($("#gongzuojingyanInput").val().length == 0) {
			$("#gongzuojingyanInput").siblings("img").css("display", "inline-block");
			isNull += 1;
		}
		if($("#xianjudiInput").val().length == 0) {
			$("#xianjudiInput").siblings("img").css("display", "inline-block");
			isNull += 1;
		}
		if($("#hukoudiInput").val().length == 0) {
			$("#hukoudiInput").siblings("img").css("display", "inline-block");
			isNull += 1;
		}
		if($("#lianxidianhuaInput").val().length == 0) {
			$("#lianxidianhuaInput").siblings("img").css("display", "inline-block");
			isNull += 1;
		}
		if($("#youxiangInput").val().length == 0) {
			$("#youxiangInput").siblings("img").css("display", "inline-block");
			isNull += 1;
		}

		if($("#divQiwanghangye").children("span").length == 0) {
			$("#divQiwanghangye").siblings("img").css("display", "inline-block");
			isNull += 1;
		}
		if($("#divQiwangzhiwei").children("span").length == 0) {
			$("#divQiwangzhiwei").siblings("img").css("display", "inline-block");
			isNull += 1;
		}
		if($("#qiwangxinziInput").val().length == 0) {
			$("#qiwangxinziInput").siblings("img").css("display", "inline-block");
			isNull += 1;
		}
		if($("#qiwanggongzuodiInput").val().length == 0) {
			$("#qiwanggongzuodiInput").siblings("img").css("display", "inline-block");
			isNull += 1;
		}
		if($("#xingquaihaoInput").val().length == 0) {
			$("#xingquaihaoInput").siblings("img").css("display", "inline-block");
			isNull += 1;
		}
		if($("#ziwopingjia").val().length == 0) {
			$("#ziwopingjia").siblings("img").css("display", "inline-block");
			isNull += 1;
		}
		if(isNull == 0) {
			window.open("jianlizhongxin.html", "_self");
		}
	});

	$("#cancleCreat").click(function() {
		window.close();
	})
});