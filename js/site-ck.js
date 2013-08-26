// If/Gather Scripts
// -----------------
// Hover Image Overlays
$(".image-list li").hover(function(){$(this).addClass("active").animate({right:parseInt(nw)+ -nw+"px"},200)},function(){$(this).removeClass("active").animate({right:parseInt(-nw)+60+"px"},200)});$(document).foundation();