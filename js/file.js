const tabHome = document.getElementById("tab-home");
const tabProfile = document.getElementById("tab-profile");
const tabContact = document.getElementById("tab-contact");
const tabDelivery = document.getElementById("tab-delivery");

$(".navlink1").addClass("buttoncolor");

$(".nav-link").click(function (e) {
  const targetSelector = $(this).data("target");

  if (targetSelector === "#tab-profile") {
    tabHome.style.display = "none";
    tabContact.style.display = "none";
    tabDelivery.style.display = "none";
    tabProfile.style.display = "block";
    $(".navlink2").addClass("buttoncolor");
    $(".navlink1").removeClass("buttoncolor");
    $(".navlink3").removeClass("buttoncolor");
    $(".navlink4").removeClass("buttoncolor");
  } else {
    tabHome.style.display = "block";
  }

  if (targetSelector === "#tab-home") {
    tabProfile.style.display = "none";
    tabContact.style.display = "none";
    tabDelivery.style.display = "none";
    $(".navlink1").addClass("buttoncolor");
    $(".navlink2").removeClass("buttoncolor");
    $(".navlink3").removeClass("buttoncolor");
    $(".navlink4").removeClass("buttoncolor");
  }

  if (targetSelector === "#tab-contact") {
    tabContact.style.display = "block";
    tabProfile.style.display = "none";
    tabHome.style.display = "none";
    tabDelivery.style.display = "none";
    $(".navlink3").addClass("buttoncolor");
    $(".navlink1").removeClass("buttoncolor");
    $(".navlink2").removeClass("buttoncolor");
    $(".navlink4").removeClass("buttoncolor");
  }
  if (targetSelector === "#tab-delivery") {
    tabDelivery.style.display = "block";
    tabProfile.style.display = "none";
    tabHome.style.display = "none";
    tabContact.style.display = "none";
    $(".navlink4").addClass("buttoncolor");
    $(".navlink1").removeClass("buttoncolor");
    $(".navlink3").removeClass("buttoncolor");
    $(".navlink2").removeClass("buttoncolor");
  }
});
