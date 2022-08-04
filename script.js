// Transition when a question is clicked
$(".ques").click(function () {
  $(this).siblings(".ans").toggleClass("display");
  $(this).toggleClass("rotate");
});

// Transition of the box-img when a hovered in FAQ
$("#faq").hover(function () {
  $("#box").toggleClass("hover");
});

// Change in images when shifting in screen size
$(window).resize(function () {
  if ($("#card").width() === 350) {
    $("#woman-img").attr(
      "src",
      "./images/illustration-woman-online-mobile.svg"
    );
    $("#box").removeAttr("src");
  } else if ($("#card").width() === 1000) {
    $("#woman-img").attr(
      "src",
      "./images/illustration-woman-online-desktop.svg"
    );
    $("#box").attr("src", "./images/illustration-box-desktop.svg");
  }
});
