$(function(){

  var imgHeight = $('.fv__img').outerHeight();//fvの画像の高さを取得
  var fvHeight = $('.fv').outerHeight();//fvの高さを取得

  //スクロールしたら、サイトロゴとバーガーボタンの色が変わる
  $(window).on('load scroll', function(){
    if ($(window).scrollTop() < imgHeight -50){
      $('.header__logo').removeClass('black');
    }else{
      $('.header__logo').addClass('black');
    }

    if ($(window).scrollTop() < fvHeight -50){
      $('.bar, .menu').removeClass('black');
    }else{
      $('.bar, .menu').addClass('black');
    }
  });

  //バーガーメニュー
  $('.burger__btn').click(function(){
    if ($(window).scrollTop() < fvHeight -50){
      $(this).toggleClass('active');
      $('.header__nav').toggleClass('active');
      $('.burger-musk').fadeToggle(300);
      $('body').toggleClass('noscroll');
    }else{
      $('.bar, .menu').toggleClass('black')
      $(this).toggleClass('active');
      $('.header__nav').toggleClass('active');
      $('.burger-musk').fadeToggle(300);
      $('body').toggleClass('noscroll');
    }
  });




});