
//slide show - slide shoe - slide show
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}
  
    // let book = document.getElementById("book");
    // let date = document.getElementsByName("date");
    // let persons = document.getElementsByName("persons");
    // let destination = document.getElementsByName("destination");
    // let buslist = document.getElementsByName("buslist");


    // book.addEventListener("click", function(){
    // console("Here are the details of your booking:" + date + persons + destination + buslist) 
    // });
