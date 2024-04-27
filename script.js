$(document).ready(function() {
$(".card").each(function() {
var imageSrc = $(this).attr("data-image-src");
$(this).append(`<img src="${imageSrc}">`);
});
});