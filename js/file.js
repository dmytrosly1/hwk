$(".navlink1").addClass("buttoncolor");

$(".nav-link").click(function (e) {
  const targetSelector = $(this).data("target");
  $(".nav-link").removeClass("buttoncolor");
  $(this).addClass("buttoncolor");

  $(".tab-content1").hide();
  $(targetSelector).show();
});
