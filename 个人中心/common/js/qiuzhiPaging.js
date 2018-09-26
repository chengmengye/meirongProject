$(document).ready(function() {
	$(".box button").mouseover(function() {
		if($(this).attr("disabled") != "disabled") {
			$(this).addClass("buttonHover");
		}
	}).mouseout(function() {
		$(this).removeClass("buttonHover");
	})

});

(function($, window, document) {

	// 定义构造函数
	function Paging(el, options) {
		this.el = el;
		this.options = {
			pageNo: options.initPageNo || 1, // 初始页码
			totalPages: options.totalPages || 1, //总页数
			totalCount: options.totalCount || '', // 条目总数
			slideSpeed: options.slideSpeed || 0, // 缓动速度
			jump: options.jump || true, // 支持跳转
			callback: options.callback || function() {} // 回调函数
		};
		this.init();
	}
	// 给实例对象添加公共属性和方法
	Paging.prototype = {
		constructor: Paging,
		init: function() {
			this.createDom();
			this.bindEvents();
		},
		createDom: function() {
			var that = this,
				ulDom = '',
				jumpDom = '',
				content = '',
				liWidth = 32, // li的宽度
				totalPages = that.options.totalPages, // 总页数
				wrapLength = 0;
			totalPages > 6 ? wrapLength = 6 * liWidth : wrapLength = totalPages * liWidth;
			for(var i = 1; i <= that.options.totalPages; i++) {
				i != 1 ? ulDom += '<li>' + i + '</li>' : ulDom += '<li class="sel-page">' + i + '</li>';
			}
			that.options.jump ? jumpDom = '<input type="text" placeholder="1" class="jump-text" id="jumpText"><button type="button" class="jump-button" id="jumpBtn">跳转</button>' : jumpDom = '';
			content = '<button type="button" id="firstPage" class="turnPage first-page"><<</button>' +
				'<button class="turnPage" id="prePage"><</button>' +
				'<div class="pageWrap" style="width:' + wrapLength + 'px">' +
				'<ul id="pageSelect" style="transition:all ' + that.options.slideSpeed + 'ms">' +
				ulDom +
				'</ul></div>' +
				'<button class="turnPage" id="nextPage">></button>' +
				'<button type="button" id="lastPage" class="last-page">>></button>';
			//              +
			//              jumpDom +
			//              '<p class="total-pages">共&nbsp;' +
			//              that.options.totalPages +
			//              '&nbsp;页</p>' +
			//              '<p class="total-count">' +
			//              that.options.totalCount +
			//              '</p>';
			that.el.html(content);
		},
		bindEvents: function() {
			var that = this,
				pageSelect = $('#pageSelect'), // ul
				lis = pageSelect.children("li"), // li的集合
				liWidth = $(".sel-page").width() + 10, // li的宽度
				totalPages = that.options.totalPages, // 总页数
				pageIndex = that.options.pageNo, // 当前选择的页码
				distance = 0, // ul移动距离
				prePage = $('#prePage'),
				nextPage = $('#nextPage'),
				firstPage = $('#firstPage'),
				lastPage = $('#lastPage'),
				jumpBtn = $('#jumpBtn'),
				jumpText = $('#jumpText');

			prePage.on('click', function() {
				pageIndex--;
				if(pageIndex < 1) pageIndex = 1;
				handles(pageIndex);
				if(prePage.attr("disabled") != "disabled") {
					prePage.addClass("buttonHover");
				}
			})

			nextPage.on('click', function() {
				pageIndex++;
				if(pageIndex > lis.length) pageIndex = lis.length;
				handles(pageIndex);
				if(nextPage.attr("disabled") != "disabled") {
					nextPage.addClass("buttonHover");
				}
			})

			firstPage.on('click', function() {
				pageIndex = 1;
				handles(pageIndex);
				if(firstPage.attr("disabled") != "disabled") {
					firstPage.addClass("buttonHover");
				}
			})

			lastPage.on('click', function() {
				pageIndex = totalPages;
				handles(pageIndex);
				if(lastPage.attr("disabled") != "disabled") {
					lastPage.addClass("buttonHover");
				}
			})

			jumpBtn.on('click', function() {
				var jumpNum = parseInt(jumpText.val().replace(/\D/g, ''));
				if(jumpNum && jumpNum >= 1 && jumpNum <= totalPages) {
					pageIndex = jumpNum;
					handles(pageIndex);
					jumpText.val(jumpNum);
				}
			})

			lis.on('click', function() {
				pageIndex = $(this).index() + 1;
				handles(pageIndex);
			})

			function handles(pageIndex) {
				lis.removeClass('sel-page').eq(pageIndex - 1).addClass('sel-page');
				pageIndex == 1 ? firstPage.attr('disabled', true) : firstPage.attr('disabled', false), firstPage.removeClass("buttonHover");
				pageIndex == 1 ? prePage.attr('disabled', true) : prePage.attr('disabled', false), prePage.removeClass("buttonHover");
				pageIndex == totalPages ? lastPage.attr('disabled', true) : lastPage.attr('disabled', false), lastPage.removeClass("buttonHover");
				pageIndex == totalPages ? nextPage.attr('disabled', true) : nextPage.attr('disabled', false), nextPage.removeClass("buttonHover");
				if(totalPages <= 6) {
					that.options.callback(pageIndex);
					return false;
				}
//				if(pageIndex >= 3 && pageIndex <= totalPages - 1) distance = (pageIndex - 3) * liWidth;
//				if(pageIndex == 2 || pageIndex == 1) distance = 0;
//				if(pageIndex > totalPages - 3) distance = (totalPages - 6) * liWidth;
				if (pageIndex >= 3 && pageIndex <= totalPages - 2) distance = (pageIndex - 3) * liWidth;
                if (pageIndex == 2 || pageIndex == 1) distance = 0;
                if (pageIndex > totalPages - 3) distance = (totalPages - 6) * liWidth;
                pageSelect.css('transform', 'translateX(' + (-distance) + 'px)');

				that.options.callback(pageIndex);
			}

			handles(that.options.pageNo); // 初始化页码位置
		}
	}
	$.fn.paging = function(options) {
		return new Paging($(this), options);
	}
})(jQuery, window, document);