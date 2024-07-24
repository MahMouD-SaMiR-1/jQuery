$(".open").click(function () {
	$(".sidenav").css({ width: "250px" });
	$(".navOpen").css({ marginLeft: "250px" });
});

$(".closebtn").click(function () {
	$(".sidenav").css({ width: "0px" });
	$(".navOpen").css({ marginLeft: "0px" });
});

$("#leftMenu a").click(function () {
	var sectionId = $(this).attr("href");
	var positionOfSection = $(sectionId).offset().top;
	$("html , body").animate({ scrollTop: positionOfSection }, 2000);
});

$("#sliderDown h3").click(function () {
	$("#sliderDown div").not($(this).next()).slideUp(500);
	$(this).next().slideToggle(500);
});

$("textarea").keyup(function () {
    let myLength = $(this).val().length
    $("#chars").text(100 - myLength <= 0 ? "Your finished your characters" : 100 - myLength);
})
