$(function() {
  $("li").filter(function(index) {
    return index % 3 === 2;
  }).css("background-color", "orange");
});