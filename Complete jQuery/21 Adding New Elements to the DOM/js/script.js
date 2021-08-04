$(function() {
  $("<li>I'm gonna the last item</li>").appendTo($("ul ul:first"));
  $(".red-box").after("<div class='red-box'>Another Red</div>");
  $(".green-box").after("<div class='green-box'>Another Green</div>");
  $(".blue-box").after("<div class='blue-box'>Another Blue</div>");
});