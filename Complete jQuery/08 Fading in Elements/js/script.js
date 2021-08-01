$(function() {
  // jQuery goes here...

  // Uncomment this line to fade out the red box on page load
  //  $(".red-box").fadeOut(2000);
  //  $(".green-box").fadeOut(2000);
  //  $(".blue-box").fadeOut(2000);
  //  $(".red-box").fadeIn(2000);
  //  $(".green-box").fadeIn(2000);
  //  $(".blue-box").fadeIn(2000);
   $(".red-box").fadeTo(1000, 0.2);
   $(".green-box").fadeTo(3000, 0.5);
   $(".blue-box").fadeTo(4000, 0.8);

   $(".blue-box").fadeToggle(2000);
   $(".blue-box").fadeToggle(2000);
});