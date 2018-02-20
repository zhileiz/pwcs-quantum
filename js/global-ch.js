var openToggle = 0;
var navToggle = 0;
var tempContent = "<i class='icofont icofont-caret-right'></i>";


$("#nav").click(function() {
  switchMenu();
});

$("#lang").click(function() {
  switchMenu();
});

$("#alt-nav-btn").click(function(){
  altSwitch();
})

$("#close").click(function(){
  altClose();
})

$("#m-alt-nav-btn").click(function(){
  maltSwitch();
})

$("#m-close-nav").click(function(){
  maltClose();
})

var switchNav = function() {
  if (navToggle % 2 == 0) {
    $(".windows-hover-ne").animate({
      right: "-180px"
    }), 200, "linear", function() {
    }
    $("#nav-toggle").html("<i class='icofont icofont-caret-left'></i>");
  } else {
    $(".windows-hover-ne").animate({
      right: "40px"
    }), 200, "linear", function() {
    }
    $("#nav-toggle").html("<i class='icofont icofont-caret-right'></i>");
  }
  navToggle += 1;
}

$("#nav-toggle").click(function() {
  switchNav();
});

$(".option").mouseenter(function() {
  $(this).css("height", "auto");
  $(this).animate({
    paddingTop: "7.5px",
  }, 200, "linear", function() {
    $(this).find(".hover-text").show();
    $(this).css("paddingBottom", "10px");
  });
}).mouseleave(function() {
  $(this).animate({
    paddingTop: "2.5px",
    paddingBottom: "0px"
  }, 200, "linear", function() {
    $(this).find(".hover-text").hide();
    $(this).css("paddingBottom", "10px");
    $(this).css("height", "35px");
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
    // $("#reg").show();
    // showWithSave("#nav-toggle");
    // $(".option").css("background-color", "black");
    $("#alt-nav").show();
    $("#abs-nav").hide();
  } else {
    $("#abs-nav").show();
    $("#alt-nav").hide();
    // $("#reg").hide();
    // hideWithSave("#nav-toggle");
    // $(".option").css("background-color", "transparent");
  }
});

var switchMenu = function(){
  console.log("switchMenu");
 $("#nav").find("i").toggleClass("icofont-navigation-menu");
 $("#nav").find("i").toggleClass("icofont-close");
 $("#menu-container").fadeToggle(300);
 if (openToggle % 2 == 0) {
   $(".windows-hover-ne").css("background-color", "transparent");
   $("#lang").hide();
   hideWithSave("#nav-toggle");
   $("#reg").hide();
   $("#nav").find(".hover-text").text("关闭");
  } else {
    $("#lang").show();
    if ($(window).scrollTop() > $(window).height()) {
      $("#reg").show();
      showWithSave("#nav-toggle");
      $(".option").css("background-color", "black");
    }
    $("#nav").find(".hover-text").text("菜单");
  }
  openToggle += 1;
}

var altSwitch = function() {
  $("#menu-container").fadeToggle(300);
  $("#close-nav").show();
  console.log("alt-switch")
}

var altClose = function() {
  $("#menu-container").fadeToggle(300);
  $("#close-nav").hide();
  console.log("alt-close")
}

var maltSwitch = function() {
  $("#menu-container").fadeToggle(300);
  $("#m-close-nav").show();
  console.log("alt-switch")
}

var maltClose = function() {
  $("#menu-container").fadeToggle(300);
  $("#m-close-nav").hide();
  console.log("alt-close")
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

var hideWithSave = function(e) {
  $(e).html("");
}

var showWithSave = function(e) {
  if (navToggle % 2 == 0) {
    $(e).html("<i class='icofont icofont-caret-right'></i>");
  } else {
    $(e).html("<i class='icofont icofont-caret-left'></i>");
  }
}
