var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n){
  var i;
  var slides = document.getElementsByClassName('ourProfiles');
  var bars = document.getElementsByClassName('teamBars');
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for(i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for(i = 0; i < bars.length; i++) {
    bars[i].className = bars[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  bars[slideIndex-1].className += " active";
}
