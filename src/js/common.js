$(document).ready(function () {
	$(".sub > a").click(function() {
		var ul = $(this).next(),
				clone = ul.clone().css({"height":"auto"}).appendTo(".main-menu"),
				height = ul.css("height") === "0px" ? ul[0].scrollHeight + "px" : "0px";
		clone.remove();
		ul.animate({"height":height});
		return false;
	});
       $('.main-menu > ul > li > a').click(function(){
	   $('.main-menu > ul > li > a, .sub a').removeClass('active');
	   $(this).addClass('active');
	}),
       $('.sub ul li a').click(function(){
	   $('.sub ul li a').removeClass('active');
	   $(this).addClass('active');
	});

	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		}
	});
});