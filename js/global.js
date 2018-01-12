var openToggle = 0;

$("#nav").click(function() {
  switchMenu();
});

$("#lang").click(function() {
  switchMenu();
});

$(".option").mouseenter(function() {
  $(this).animate({
    paddingTop: "5px"
  }, 200, "linear", function() {
    $(this).find(".hover-text").show();
  });
}).mouseleave(function() {
  $(this).animate({
    paddingTop: "15px"
  }, 200, "linear", function() {
    $(this).find(".hover-text").hide();
  });
});

$("#item-0").mouseenter(function() {
  showDesc(0);
});
$("#item-1").mouseenter(function() {
  showDesc(1);
});
$("#item-2").mouseenter(function() {
  showDesc(2);
});
$("#item-3").mouseenter(function() {
  showDesc(3);
});
$("#item-4").mouseenter(function() {
  showDesc(4);
});

$(window).scroll(function(){
  if (($(window).scrollTop() > $(window).height() - 90) && (openToggle % 2 == 0)) {
    $(".windows-hover-ne").css("background-color", "black");
  } else {
    $(".windows-hover-ne").css("background-color", "transparent");
  }
});

var switchMenu = function(){
 $("#nav").find("i").toggleClass("icofont-navigation-menu");
 $("#nav").find("i").toggleClass("icofont-close");
 $("#menu-container").fadeToggle(300);
 if (openToggle % 2 == 0) {
   $(".windows-hover-ne").css("background-color", "transparent");
   $("#lang").hide();
    $(".navigation").css("width", "80px");
    $("#nav").find(".hover-text").text("close");
  } else {
    $("#lang").show();
    if ($(window).scrollTop() > $(window).height()) {
      $(".windows-hover-ne").css("background-color", "black");
    }
    $(".navigation").css("width", "160px");
    $("#nav").find(".hover-text").text("menu");
  }
  openToggle += 1;
}

var showDesc = function(option) {
  var options = ["#desc-0", "#desc-1", "#desc-2", "#desc-3", "#desc-4"];
  for (var i = 0; i < options.length(); i++) {
    if (i == option) {
      $(options[i]).show();
    } else {
      $(options[i]).hide();
    }
  }
}

var disableScroll = function() {
  var scrollPosition = [
    self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
    self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
  ];
  var html = jQuery('html');
  html.data('scroll-position', scrollPosition);
  html.data('previous-overflow', html.css('overflow'));
  html.css('overflow', 'hidden');
  window.scrollTo(scrollPosition[0], scrollPosition[1]);
}

var enableScroll = function() {
  var html = jQuery('html');
  var scrollPosition = html.data('scroll-position');
  html.css('overflow', html.data('previous-overflow'));
  window.scrollTo(scrollPosition[0], scrollPosition[1]);
}
