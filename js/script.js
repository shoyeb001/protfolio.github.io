


var typed = new Typed('.type', {
	// Waits 1000ms after typing "First"
	strings: ['Shoyeb','Developer', 'Blogger', 'Student', 'YouTuber'],
	loop: true,
	typeSpeed: 100,
    backSpeed: 50,
	backDelay: 1500,
});

$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 300) {

        $(".navbar").css("width" , "100%");  
        $(".navbar").css("background" , "#fff");
        $(".navbar").css("position" , "fixed");  
        $(".navbar").css("top" , "-70px");  
        $(".navbar").css("transform" , "translateY(70px)");  
        $(".navbar").css("z-index" , "1000");
        $(".navbar").css("transition" , "all 0.9s");
        $(".navbar").css("box-shadow" , "0px 3px 16px 0px rgb(0 0 0 / 10%)");
  
        }
  
        if (scroll < 300) {
  
        $(".navbar").css("position" , "relative");  
        $(".navbar").css("background" , "transparent");
        $(".navbar").css("box-shadow" , "none");
        $(".navbar").css("top" , "0");

        $(".navbar").css("transform" , "none");  
  
  
  
  
        }
    })
  })


