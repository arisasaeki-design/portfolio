$(function() {
    $('.header-line-wrap').on('click', function () {
      $('.header-navigation-wrap').toggleClass('header-navigation-wrap-open');
      $('.header-line-top').toggleClass('header-line-top-open');
      $('.header-line-middle').toggleClass('header-line-middle-open');
      $('.header-line-bottom').toggleClass('header-line-bottom-open');
    })
  });

$(function() {
    $('.header-navigation-link').on('click', function () {
      $('.header-navigation-wrap').removeClass('header-navigation-wrap-open');  
      $('.header-line-top').removeClass('header-line-top-open');      
      $('.header-line-middle').removeClass('header-line-middle-open');     
      $('.header-line-bottom').removeClass('header-line-bottom-open');      
    })
  })




