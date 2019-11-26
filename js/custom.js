(function($) {
  e = document.getElementById("mause");

  document
    .getElementsByTagName("body")[0]
    .addEventListener("mousemove", function(n) {
      (e.style.left = n.clientX + "px"), (e.style.top = n.clientY + "px");
    });
})(jQuery);
