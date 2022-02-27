window.onload = function () {
  $(".menu li")
    .mouseover(function () {
      $(".submenu").stop().slideDown();
      $(".subback").stop().slideDown();
    })
    .mouseleave(function () {
      $(".subback").stop().slideUp();
      $(".submenu").stop().slideUp();
    });
};

 

  /*$(".menu.active")
    .mouseover(function () {
      $(this).find(".submenu li").stop().slideDown();
      $(".subback.active ul li").stop().slideDown();
    }) 
    .mouseleave(function () {
      $(".subback.active ul li").stop().slideUp();
      $(".submenu.active ul li").stop().slideUp();
    });*/




$( document ).ready( function() {
    $( '#slide_div' ).slick( { //슬라이드 시작
        autoplay: true, //자동 재생
        autoplaySpeed: 3000, //속도
        prevArrow: $(".slick-prev"), //왼쪽 화살표
        nextArrow: $(".slick-next"), //오른쪽 화살표
        dots:true
    } );
  } );

 /* const menuBtn = document.querySelector(".menu_btn");
  const menu = document.querySelector("nav .menu");
  const submenu = document.querySelector(".submenu");
  const subback = document.querySelector(".subback");
 menuBtn.addEventListener("click",function(){
   menuBtn.classList.toggle("active");
   menu.classList.toggle("active");
  submenu.classList.toggle("active");
  subback.classList.toggle("active");

  })*/