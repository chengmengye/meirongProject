/*
        三个参数
        file：一个是文件(类型是图片格式)，
        w：一个是文件压缩的后宽度，宽度越小，字节越小
        objDiv：一个是容器或者回调函数
        photoCompress()
         */
function photoCompress(file, w, objDiv) {
	var ready = new FileReader();
	/*开始读取指定的Blob对象或File对象中的内容. 当读取操作完成时,readyState属性的值会成为DONE,如果设置了onloadend事件处理程序,则调用之.同时,result属性中将包含一个data: URL格式的字符串以表示所读取文件的内容.*/
	ready.readAsDataURL(file);
	ready.onload = function() {
		var re = this.result;
		canvasDataURL(re, w, objDiv)
	}
}

function canvasDataURL(path, obj, callback) {
	var img = new Image();
	img.src = path;
	img.onload = function() {
		var that = this;
		// 默认按比例压缩
		var w = that.width,
			h = that.height,
			scale = w / h;
		w = obj.width || w;
		h = obj.height || (w / scale);
		var quality = 0.7; // 默认图片质量为0.7
		//生成canvas
		var canvas = document.createElement('canvas');
		var ctx = canvas.getContext('2d');
		// 创建属性节点
		var anw = document.createAttribute("width");
		anw.nodeValue = w;
		var anh = document.createAttribute("height");
		anh.nodeValue = h;
		canvas.setAttributeNode(anw);
		canvas.setAttributeNode(anh);
		ctx.drawImage(that, 0, 0, w, h);
		// 图像质量
		if(obj.quality && obj.quality <= 1 && obj.quality > 0) {
			quality = obj.quality;
		}
		// quality值越小，所绘制出的图像越模糊
		var base64 = canvas.toDataURL('image/jpeg', quality);
		// 回调函数返回base64的值
		callback(base64);
	}
}
/**  
 * 将以base64的图片url数据转换为Blob  
 * @param urlData  
 *            用url方式表示的base64图片数据  
 */
function convertBase64UrlToBlob(urlData) {
	var arr = urlData.split(','),
		mime = arr[0].match(/:(.*?);/)[1],
		bstr = atob(arr[1]),
		n = bstr.length,
		u8arr = new Uint8Array(n);
	while(n--) {
		u8arr[n] = bstr.charCodeAt(n);
	}
	return new Blob([u8arr], {
		type: mime
	});
}

var xhr;
//上传图片
var i = 1;

function UpladFileImg(param, isHuiyuan) {
	var img_id = $(param)[0].value; //根据id得到值
	var index = img_id.indexOf("."); //得到"."在第几位
	img_id = img_id.substring(index); //截断"."之前的，得到后缀
	if(isHuiyuan == 0 && parseInt($(".photo > ul > li").length) >= 8) {
//		$(".bacLight").css("display", "block");
		$("#imgCountXianzhi").css("display", "block");
	} else if(img_id != ".png" && img_id != ".gif" && img_id != ".jpg" && img_id != ".jpeg") { //根据后缀，判断是否符合图片格式
//		$(".bacLight").css("display", "block");
		$("#imgGeshiError").css("display", "block");
		$(param)[0].value = ""; // 不符合，就清除，重新选择
	} else {
		var fileObj = $(param)[0].files[0]; // js 获取文件对象
		//	var url = "后台图片上传接口"; // 接收上传文件的后台地址 
		//	var form = new FormData(); // FormData 对象
		console.log(fileObj);
		if(fileObj.size / 1024 > 1025) { //大于1M，进行压缩上传
			photoCompress(fileObj, {
				quality: 0.2
			}, function(base64Codes) {
				//console.log("压缩后：" + base.length / 1024 + " " + base);
				var bl = convertBase64UrlToBlob(base64Codes);
				console.log("base64Codes:" + base64Codes.length);
				console.log(bl);
				var file = convertBase64UrlToFile(base64Codes,"123.png");
				$("#notHavePhoto").css("display", "none");
				$("#havePhoto").css("display", "block");
				var uploadImg = "<li><div class='divImg'><img id='img" + i + "' alt='' src='" + URL.createObjectURL(bl) + "'  onmouseenter='imgEnter(this)'  onload = 'imgLoad(this)'/><div class='imgBck' onmouseenter='imgEnter(this)' onmouseleave='imgLeave(this)' onclick='imgLook(this)'></div></div><div class='imgCaozuo'><a onclick='zhuyezhanshi(this)'>开启主页展示</a><a onclick='delImg(this)'>删除</a></div></li>";
				$("#photo > ul").append(uploadImg);

				//				xhr = new XMLHttpRequest(); // XMLHttpRequest 对象
				//				xhr.open("post", url, true); //post方式，url为服务器请求地址，true 该参数规定请求是否异步处理。
				//				xhr.onload = uploadComplete; //请求完成
				//				xhr.onerror = uploadFailed; //请求失败
				//				xhr.send(form); //开始上传，发送form数据
			});
		} else { //小于等于1M 原图上传
			$("#notHavePhoto").css("display", "none");
			$("#havePhoto").css("display", "block");
			var uploadImg = "<li><div class='divImg'><img alt='' id = 'img" + i + "' src='" + URL.createObjectURL(fileObj) + "' onload = 'imgLoad(this)' onmouseenter='imgEnter(this)'/><div class='imgBck' onmouseenter='imgEnter(this)' onmouseleave='imgLeave(this)' onclick='imgLook(this)'></div></div><div class='imgCaozuo'><a onclick='zhuyezhanshi(this)'>开启主页展示</a><a onclick='delImg(this)'>删除</a></div></li>";
			$("#photo > ul").append(uploadImg);
			//		form.append("file", fileObj); // 文件对象
			//		xhr = new XMLHttpRequest(); // XMLHttpRequest 对象
			//		xhr.open("post", url, true); //post方式，url为服务器请求地址，true 该参数规定请求是否异步处理。
			//		xhr.onload = uploadComplete; //请求完成
			//		xhr.onerror = uploadFailed; //请求失败
			//		xhr.send(form); //开始上传，发送form数据
		}

	}

}



function convertBase64UrlToFile(dataurl,filename) {
  var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],  
    bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);  
    while(n--){  
        u8arr[n] = bstr.charCodeAt(n);  
    }  
    return new File([u8arr], filename, {type:mime});  
}


//上传成功响应
function uploadComplete(evt) {
	//服务断接收完文件返回的结果

	var data = JSON.parse(evt.target.responseText);
	if(data.success) {
		alert("上传成功！");
	} else {
		alert("上传失败！");
	}

}
//上传失败
function uploadFailed(evt) {
	alert("上传失败！");
}
//取消上传
function cancleUploadFile() {
	xhr.abort();
}

//上传视频
var i = 1;

function uploadShipin(param) {
	var file = $(param)[0].files[0];
	var img_id = $(param)[0].value; //根据id得到值
	var index = img_id.indexOf("."); //得到"."在第几位
	img_id = img_id.substring(index); //截断"."之前的，得到后缀
	if(parseInt($("#video > ul > li").length) >= 3) {
//		$(".bacLight").css("display", "block");
		$("#shipinCountXianzhi").css("display", "block");
		return false;
	}
	if(img_id != '.ogg' && img_id != '.mp4' && img_id != '.webm') {
//		$(".bacLight").css("display", "block");
		$("#shipinGeshiError").css("display", "block");
		return false;
	}
	console.log(file.type) /*文件类型*/
	var reader = new FileReader();
	reader.readAsDataURL(file);
	reader.onload = function() {
		var audioBlob = convertBase64UrlToBlob(reader.result, file.type)
		$("#notHaveShipin").css("display", "none");
		$("#haveShipin").css("display", "block");
		var uploadShipin = "<li><div class='divVideo'><video src='" + URL.createObjectURL(audioBlob) + "' id = 'video" + i + "' controls='controls' muted='true'>很抱歉，您的浏览器不支持播放标签!</video><img id = 'img" + i + "'/><div class='shipinZhezhao' onclick='bofang(this)'></div><img src='img/bofang.png' id = 'bofang' onclick='bofang(this)'/></div><div class='imgCaozuo'><a onclick='zhuyezhanshi(this)'>开启主页展示</a><a onclick='delShipin(this)'>删除</a></div></li>";
		$("#video > ul").append(uploadShipin);
		//	绘制视频的第一帧
		"use strict"; //严格模式
		var scale = 0.8; //第一帧图片与源视频的比例
		//      video = $("#video").get(0);//赋值标签
		$("#video" + i).on("loadeddata", function() { //加载完成事件，调用函数
			var canvas = document.createElement("canvas"); //canvas画布
			canvas.width = parseInt($("#video" + i).css("width")) * scale;
			canvas.height = parseInt($("#video" + i).css("height")) * scale;
			canvas.getContext('2d').drawImage($("#video" + i)[0], 0, 0, canvas.width, canvas.height); //画图
			$("#img" + i).attr("src", canvas.toDataURL("image/png"));
		})
		/*request("audio",audioBlob)这里是我的ajax请求*/
	};
	i++;
}

function convertBase64UrlToBlob(urlData, type) { /*转成二进制对象*/
	var bytes = window.atob(urlData.split(',')[1]);
	var ab = new ArrayBuffer(bytes.length);
	var ia = new Uint8Array(ab);
	for(var i = 0; i < bytes.length; i++) {
		ia[i] = bytes.charCodeAt(i);
	}
	return new Blob([ab], {
		type: type
	});

}

function request(type, Blob) {

	var formData = new FormData(); /*创建formData对象*/

	formData.append("cover_img", Blob);
	$.ajax({
		url: "文件上传地址",
		type: "POST",
		processData: false,
		contentType: false,
		data: formData,
		dataType: 'json',
		success: function(data) {

		}

	});

}