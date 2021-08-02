$(function() {
   $(".red-box").fadeTo(1000, 0, function() {
     alert("This is the callback: Animation finished")
   });
});