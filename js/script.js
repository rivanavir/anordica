$(document).ready(function () {

  // Slider initialization

  var coverSlider = $('.top-slider').bxSlider({
    slideWidth: 400,
    minSlides: 1,
    maxSlides: 3,
    moveSlides: 1,
    controls:false,
    slideMargin: 0
  });
  function sliderRun() {
    if($(window).width() > 768){
      coverSlider.reloadSlider();
    } else{
      coverSlider.destroySlider();
    }
  }
  if ($('.top-slider').length > 0) {
    sliderRun();
  }

  function responseTable() {
    $('.table-custom').stacktable({myClass:'custom-class-table'});
  }
  if ($('.table-custom').length > 0) {
    responseTable();
  }

  $('.navbar-toggle, .close-menu').on('click',function () {
    $('body').toggleClass('menu-slider in');
    $('.soc-wrap').toggle();
    $('.mobile-menu').toggleClass('open');
  });

  $('#back-to-top').on('click',function () {
    $('html, body').animate({scrollTop : 0},800);
		return false;
  });

  $('.close-contact').on('click',function () {
    var remClass = $(this).data('wrap-class');
    $(this).parents('#contactWrap').removeClass(remClass);
    $(this).parents('#contactWrap').removeClass('absolute');
    $('body').removeAttr('style');
  });

  $('.txt-block').on('click',function () {
    var displayClass = $(this).data('contact-version');
    $(this).parent('#contactWrap').addClass(displayClass);
    if($(window).width()<768){
      $('html, body').animate({scrollTop : 0},800);
      $(this).parent('#contactWrap').addClass('absolute');
      $('body').css('overflow-x','hidden');
    }
  });

  if($(window).width() < 768){
    $('.clone-button-wrap').removeClass('hidden');
  }
  function DoPrevent(e) {
    e.preventDefault();
    e.stopPropagation();
  }
  function collapseToggle() {
    if($(window).width() > 768){
      $('.mobile-btn').attr('data-toggle','');
    } else{
      $('.mobile-btn').attr('data-toggle','collapse');
    }
  }
  collapseToggle();
  $( window ).resize(function() {
    if ($('.top-slider').length > 0) {
      sliderRun();
    }
    collapseToggle();
    if ($('.table-custom').length > 0) {
      console.log('sdvsv');
    }
  });

  $('.prod-show-more').on('click',function (e) {
    e.preventDefault();
    var typeButton = $(this).data('button-type');
    if(typeButton == 'original'){
      $(this).parents('.contain').find('.prod-row-wrap .clone-button-wrap').removeClass('hidden');
    }
    var cloneDiv = $(this).parents('.contain').find('.prod-row-wrap .prod-inner').html();
    var cloneHTML = $('<div class="prod-inner">'+cloneDiv+'</div>');
    var cloneButton = $(this).parents('.contain').find('.prod-row-wrap .clone-button-wrap');
    cloneButton.before(cloneHTML);
  });

  // $('.language-drop li a').on('click',function (e) {
  //   e.preventDefault();
  //   var langLink = $(this).parents('.language-drop').find('li');
  //   langLink.each(function () {
  //     $(this).find('a').removeClass('active');
  //   });
  //   $(this).addClass('active');
  // })

  $('#topSearch').on('click',function () {
    $('.search-form-desk').toggleClass('current');
  });
  $('.close-search').on('click',function () {
    $('.search-form-desk').toggleClass('current');
  });

  $('.prod-ttl-page, .prod-ttl').on('click',function (e) {
    e.preventDefault();
  });

  $('header .navbar-nav > li > a').on('click',function () {

    if(!$(this).hasClass('multi-link')){
      var navLink = $(this).parents('.navbar-nav').find('>li');
      navLink.each(function () {
        $(this).removeClass('active');
      });
      $(this).parent('li').addClass('active');
    }
    // Move first sub-menu item to left
    var droplayer = $(this).parent('li.active');
    droplayer.on('shown.bs.dropdown', function () {
      var link = droplayer.find('.sub-menu li').first();
      var linkWidth = -link.width();
      link.parents('.sub-menu-wrap').css('left', linkWidth);
    });
    var dropBigLayer = $(this).parent('li.productItem');
    dropBigLayer.on('shown.bs.dropdown', function () {
      $('.big-sub-menu-wrap').addClass('current');
    });
    dropBigLayer.on('hide.bs.dropdown', function () {
      $('.big-sub-menu-wrap').removeClass('current');
    });
  });
  $('.nav-tabs li').on('click',function (e) {
    e.stopPropagation();
    e.preventDefault();
    var links = $(this).parent('.nav-tabs').find('li');
    var tabHref = $(this).find('a').attr('href');
    var tabContent = $(this).parents('.big-sub-menu-wrap').find('.tab-content');
    var contentItem = tabContent.find('.tab-pane');
    links.each(function () {
      $(this).removeClass('active');
    })
    contentItem.each(function () {
      $(this).removeClass('active in');
    })
    $(this).addClass('active');
    tabContent.find(tabHref).addClass('active in');
  });

  $('.select-drop li').on('click',function () {
    var value = $(this).text();
    var input = $(this).parents('.custom-select').find('input[type="text"]');
    input.val(value);
  });

  $('.changeInput').on('click',function(){
    var fileHidden = $(this).next('.fileHidden');
    fileHidden.trigger('click');
  });
  $('.custom-file-wrap .fileHidden').change(function () {
    var changeInput = $(this).parents('.custom-file-wrap').find('.changeInput');
    changeInput.val($(this).val());
    console.log($(this).val());
  })

})
// Google map
function initMap() {
  var mapDiv = document.getElementById('map');
  var myLatlng = new google.maps.LatLng(55.615100, 12.985656);
  var myOptions = {
    zoom: 17,
    scrollwheel: false,
    center: myLatlng
  }
  var map = new google.maps.Map(mapDiv, myOptions);
  var iconImage, pointCoord;
  if($(window).width() < 992){
    iconImage = './images/map-marker-sm.png';
    pointCoord = new google.maps.Point(30,90);
  }else{
    iconImage = './images/map-marker.png';
    pointCoord = new google.maps.Point(70,220);
  }
  var markerImage = new google.maps.MarkerImage(
    iconImage,
    new google.maps.Size(165,249),
    new google.maps.Point(0,0),
    pointCoord
  );
  var marker = new google.maps.Marker({
    icon: markerImage,
    position: myLatlng,
    map: map
  });
}
