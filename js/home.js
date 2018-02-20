var images = ["#pbi-1", "#pbi-2", "#pbi-3", "#pbi-4", "#pbi-5", "#pbi-6"];
var descs = ["#pdesc-1", "#pdesc-2", "#pdesc-3", "#pdesc-4", "#pdesc-5", "#pdesc-6"];
var imgs = ["#panel-img-1", "#panel-img-2", "#panel-img-3", "#panel-img-4", "#panel-img-5", "#panel-img-6"]
var mimgs = ["#panel-m-img-1", "#panel-m-img-2", "#panel-m-img-3", "#panel-m-img-4", "#panel-m-img-5", "#panel-m-img-6"]
var titles = ["#panel-title-1", "#panel-title-2", "#panel-title-3", "#panel-title-4", "#panel-title-5", "#panel-title-6"]
var panelToggle = 0;
var imgShowIndex = 0;
var iScrollPos = 0;
var scrollIndex = 0;
var throttle = 10;
var isPaused = false;

if ($( window ).width() > 767) {
  $(".panel-banner").click(function () {
    var element = $(this).attr('id');
    var num = Number.parseInt(element.charAt(element.length-1)) - 1;
    if (panelToggle % 2 == 0) {
      $(".panel-banner").hide();
      $(images[num]).show();
      $(imgs[num]).css("filter", "grayscale(0%)");
      $(imgs[num]).css("-webkit-filter", "grayscale(0%)");
      isPaused = true;
      $(descs[num]).show();
    } else {
      $(descs[num]).hide();
      $(".panel-banner").show();
      $(imgs[num]).css("filter", "grayscale(100%)");
      $(imgs[num]).css("-webkit-filter", "grayscale(100%)");
      $(titles[num]).css("color", "white");
      isPaused = false;
    }
    panelToggle ++;
  });

  $(".desc-back-btn").click(function() {
    var element = $(this).attr('id');
    var num = Number.parseInt(element.charAt(element.length-1)) - 1;
    $(descs[num]).hide();
    $(".panel-banner").show();
    $(imgs[num]).css("filter", "grayscale(0%)");
    $(imgs[num]).css("-webkit-filter", "grayscale(0%)");
    isPaused = false;
    panelToggle++;
  });

  var changeImage = setInterval(function(){
     if (!isPaused) {
       var tempIndex = imgShowIndex % 6;
       var lastIndex = (imgShowIndex - 1) % 6
       console.log(tempIndex)
       $(imgs[tempIndex]).css("filter", "grayscale(0%)");
       $(imgs[tempIndex]).css("-webkit-filter", "grayscale(0%)");
       $(imgs[lastIndex]).css("filter", "grayscale(100%)");
       $(imgs[lastIndex]).css("-webkit-filter", "grayscale(100%)");
       $(titles[lastIndex]).css("color", "white");
       imgShowIndex += 1;
     }
   }, 1200);
} else {
  $(".panel-banner").click(function () {
    var element = $(this).attr('id');
    var num = Number.parseInt(element.charAt(element.length-1)) - 1;
    if (panelToggle % 2 == 0) {
      $(".panel-banner").hide();
      $(images[num]).show();
      $(mimgs[num]).css("filter", "grayscale(0%)");
      $(mimgs[num]).css("-webkit-filter", "grayscale(0%)");
      isPaused = true;
      $(descs[num]).show();
    } else {
      $(descs[num]).hide();
      $(".panel-banner").show();
      $(mimgs[num]).css("filter", "grayscale(100%)");
      $(mimgs[num]).css("-webkit-filter", "grayscale(100%)");
      $(titles[num]).css("color", "white");
      isPaused = false;
    }
    panelToggle ++;
  });

  $(".desc-back-btn").click(function() {
    var element = $(this).attr('id');
    var num = Number.parseInt(element.charAt(element.length-1)) - 1;
    $(descs[num]).hide();
    $(".panel-banner").show();
    $(mimgs[num]).css("filter", "grayscale(0%)");
    $(mimgs[num]).css("-webkit-filter", "grayscale(0%)");
    isPaused = false;
    panelToggle++;
  });

  var changeImage = setInterval(function(){
     if (!isPaused) {
       var tempIndex = imgShowIndex % 6;
       var lastIndex = (imgShowIndex - 1) % 6
       console.log(tempIndex)
       $(mimgs[tempIndex]).css("filter", "grayscale(0%)");
       $(mimgs[tempIndex]).css("-webkit-filter", "grayscale(0%)");
       $(mimgs[lastIndex]).css("filter", "grayscale(100%)");
       $(mimgs[lastIndex]).css("-webkit-filter", "grayscale(100%)");
       $(titles[lastIndex]).css("color", "white");
       imgShowIndex += 1;
     }
   }, 1200);
}

 $( ".hover-show" ).hover(
  function() {
    $( this ).css("filter", "grayscale(0%)");
    $( this ).css("-webkit-filter", "grayscale(0%)");
  }, function() {
    if (!isPaused) {
      $( this ).css("filter", "grayscale(100%)");
      $( this ).css("-webkit-filter", "grayscale(100%)");
    }
  }
);
