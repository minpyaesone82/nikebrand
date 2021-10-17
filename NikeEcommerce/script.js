gsap.from(".navbar-brand", {opacity:1,duration: 1,delay:0.5, y: -70});
gsap.from(".navbar-toggler", {opacity:2,duration: 1,delay:1, x: -20});
gsap.from(".nav-item", {opacity:0,duration: 1,delay:1.2, x: -20,stagger:0.2});
gsap.from(".content-home span", {opacity:0,duration: 1,delay:1, y: -50});
gsap.from(".content-home h1", {opacity:0,duration: 1,delay:1.5, y: -40});
gsap.from(".content-home p", {opacity:0,duration: 1,delay:2, y: -40});
gsap.from("#content-img", {opacity:0,duration: 1,delay:2, x: -200});
gsap.from(".cart-button", {opacity:0,duration: 1,delay:2, y: -40});


AOS.init({
  duration:1200,
});


function test(){
    var tabsNewAnim = $('#navbarSupportedContent');
    var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      "top":itemPosNewAnimTop.top + "px", 
      "left":itemPosNewAnimLeft.left + "px",
      "height": activeWidthNewAnimHeight + "px",
      "width": activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click","li",function(e){
      $('#navbarSupportedContent ul li').removeClass("active");
      $(this).addClass('active');
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        "top":itemPosNewAnimTop.top + "px", 
        "left":itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
      });
    });
  }
  $(document).ready(function(){
    setTimeout(function(){ test(); });
  });
  $(window).on('resize', function(){
    setTimeout(function(){ test(); }, 500);
  });
  $(".navbar-toggler").click(function(){
    setTimeout(function(){ test(); });
  });

  const cartButtons = document.querySelectorAll('.cart-button');

  cartButtons.forEach(button => {
    button.addEventListener('click', cartClick);
  });
  
  function cartClick() {
    let button = this;
    button.classList.add('clicked');
  }


  // product
 function changeImageone(x){
  document.querySelector(".shoess").src = x;
 }
 function changeImagetwo(x){
  document.querySelector(".shoe2").src = x;
 }
 function changeImagethree(anything){
  document.querySelector(".shoe3").src = anything;
 }
 function changeImagefour(anything){
  document.querySelector(".shoe4").src = anything;
 }
 function changeImagefive(anything){
  document.querySelector(".shoe5").src = anything;
 }
 function changeImagesix(anything){
  document.querySelector(".shoe6").src = anything;
 }