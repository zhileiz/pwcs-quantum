var images = ["#pbi-1", "#pbi-2", "#pbi-3", "#pbi-4", "#pbi-5", "#pbi-6"];
var descs = ["#pdesc-1", "#pdesc-2", "#pdesc-3", "#pdesc-4", "#pdesc-5", "#pdesc-6"];
var imgs = ["#panel-img-1", "#panel-img-2", "#panel-img-3", "#panel-img-4", "#panel-img-5", "#panel-img-6"]
var titles = ["#panel-title-1", "#panel-title-2", "#panel-title-3", "#panel-title-4", "#panel-title-5", "#panel-title-6"]
var panelToggle = 0;
var imgShowIndex = 0;
var iScrollPos = 0;
var scrollIndex = 0;
var throttle = 10;
var isPaused = false;

$(".panel-banner").click(function () {
  var element = $(this).attr('id');
  var num = Number.parseInt(element.charAt(element.length-1)) - 1;
  if (panelToggle % 2 == 0) {
    $(".panel-banner").hide();
    $(images[num]).show();
    $(imgs[num]).css("filter", "blur(10px)");
    $(imgs[num]).css("-webkit-filter", "blur(10px)");
    $(titles[num]).css("color", "crimson");
    isPaused = true;
    $(descs[num]).show();
  } else {
    $(descs[num]).hide();
    $(".panel-banner").show();
    $(imgs[num]).css("filter", "blur(0px)");
    $(imgs[num]).css("-webkit-filter", "blur(0px)");
    $(titles[num]).css("color", "black");
    isPaused = false;
  }
  panelToggle ++;
});

var changeImage = setInterval(function(){
   if (!isPaused) {
     var tempIndex = imgShowIndex % 6;
     var lastIndex = (imgShowIndex - 1) % 6
     console.log(tempIndex)
     $(imgs[tempIndex]).css("filter", "blur(10px)");
     $(imgs[tempIndex]).css("-webkit-filter", "blur(10px)");
     $(titles[tempIndex]).css("color", "crimson");
     $(imgs[lastIndex]).css("filter", "blur(0px)");
     $(imgs[lastIndex]).css("-webkit-filter", "blur(0px)");
     $(titles[lastIndex]).css("color", "black");
     imgShowIndex += 1;
   }
 }, 1200);

 $( ".hover-show" ).hover(
  function() {
    $( this ).css("filter", "blur(10px)");
    $( this ).css("-webkit-filter", "blur(10px)");
  }, function() {
    if (!isPaused) {
      $( this ).css("filter", "blur(0px)");
      $( this ).css("-webkit-filter", "blur(0px)");
    }
  }
);

$(".desc-back-btn").click(function() {
  var element = $(this).attr('id');
  var num = Number.parseInt(element.charAt(element.length-1)) - 1;
  $(descs[num]).hide();
  $(".panel-banner").show();
  $(imgs[num]).css("filter", "blur(10px)");
  $(imgs[num]).css("-webkit-filter", "blur(10px)");
  isPaused = false;
  panelToggle++;
});
