var api = null;
function imgCaijian($) {
	
	var jcrop_api,
		boundx,
		boundy,

		// Grab some information about the preview pane
		$preview = $('.rightTouxiang'),
		$pcnt = $('.rightTouxiang .rightTouxiang1'),
		$pimg = $('.rightTouxiang .rightTouxiang1 img'),
		xsize = $pcnt.width(), 
		ysize = $pcnt.height(),
		

		$pcnt2 = $('.rightTouxiang .rightTouxiang2'),
		$pimg2 = $('.rightTouxiang .rightTouxiang2 img'),
		xsize2 = $pcnt2.width(),
		ysize2 = $pcnt2.height();

//	console.log('init', [xsize, ysize]);
	api = $('#target').Jcrop({
		onChange: updatePreview,
		onSelect: updatePreview,
		aspectRatio: xsize / ysize
	}, function() {
		// Use the API to get the real image size
		var bounds = this.getBounds();
		boundx = bounds[0];	
		boundy = bounds[1];	
		// Store the API in the jcrop_api variable
		jcrop_api = this;

		// Move the preview into the jcrop container for css positioning
		$preview.appendTo(jcrop_api.ui.holder);
	});
	function updatePreview(c) {
		if(parseInt(c.w) > 0) {
			var rx = xsize / c.w;
			var ry = ysize / c.h;

			$pimg.css({
				width: Math.round(rx * boundx) + 'px',
				height: Math.round(ry * boundy) + 'px',
				marginLeft: '-' + Math.round(rx * c.x) + 'px',
				marginTop: '-' + Math.round(ry * c.y) + 'px'
			});

			var rx2 = xsize2 / c.w;
			var ry2 = ysize2 / c.h;
			var caijian;
			$pimg2.css({
				width: Math.round(rx2 * boundx) + 'px',
				height: Math.round(ry2 * boundy) + 'px',
				marginLeft: '-' + Math.round(rx2 * c.x) + 'px',
				marginTop: '-' + Math.round(ry2 * c.y) + 'px'
			});
		}
	};
}
