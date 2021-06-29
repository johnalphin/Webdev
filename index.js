

$(window).ready(function() {
  $("h1.n").fadeOut(1);
  $("h1.n").fadeIn(1600);
  $("img.title-image").fadeOut(1);
  $("img.title-image").fadeIn(1600);
  $("button.con").fadeOut(1);
  $("button.con").fadeIn(1600);
  $("input").fadeOut(1);
  $("input").fadeIn(1200);
    $("p").fadeOut(1);
    $("p").fadeIn(1800);
    $("h3").fadeOut(1);
    $("h3").fadeIn(1800);
    $("h2").fadeOut(1);
    $("h2").fadeIn(1800);
  });


$("input").on('keypress',function(e) {

    if(e.which == 13) {
      var x=$('input:text').val();
      if(x!=="yes")
      {

    var y=$("h2.answer").html("Hi "+x+" Welcome to my site!!")
    y.fadeOut(1);
    y.fadeIn(1000);
    y.fadeOut(2000);
    $("h2.query").html("Wanna play a game?")
    $("h2.query").fadeOut(1);
    $("h2.query").fadeIn(4000);
    }
else if(x=="yes")
{{
  $("h2.query").fadeOut(2000);
 var y=$("h2.answer").html("Okay come lets play dice game , have fun !!");
 y.fadeOut(1);
 y.fadeIn(1000);
}  
 window.location.href="https://www.addictinggames.com/";
}}

});
  //invoke scroll-handler on page-load
