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
});