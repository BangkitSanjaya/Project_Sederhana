// JQuery Navbar DropDown
$(document).ready(function () {
    $(".navbar li").hover(function () {
      $(this).find("ul").slideToggle(1000);
    });
  });
  
  // Modal di Gallery
  $(document).ready(function () {
    $(".tombol1").click(function () {
      $(".modal-box1").fadeIn(1000);
      $(".background-gelap1").fadeIn(1000);
    });
  
    $(".close1").click(function () {
      $(".modal-box1").fadeOut(1000);
      $(".background-gelap1").fadeOut(1000);
    });
  });
  
  $(document).ready(function () {
    $(".tombol2").click(function () {
      $(".modal-box2").fadeIn(1000);
      $(".background-gelap2").fadeIn(1000);
    });
  
    $(".close2").click(function () {
      $(".modal-box2").fadeOut(1000);
      $(".background-gelap2").fadeOut(1000);
    });
  });
  
  $(document).ready(function () {
    $(".tombol3").click(function () {
      $(".modal-box3").fadeIn(1000);
      $(".background-gelap3").fadeIn(1000);
    });
  
    $(".close3").click(function () {
      $(".modal-box3").fadeOut(1000);
      $(".background-gelap3").fadeOut(1000);
    });
  });
  