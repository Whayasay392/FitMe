// Aos script
AOS.init({
    duration: 1200,
});






// Countdown Timer script
let myDay = document.querySelector('.days')
let myHour = document.querySelector('.hours')
let myMin = document.querySelector('.minutes')
let mySec = document.querySelector('.seconds')

 var countDownDate = new Date("Oct 5, 2020 10:00:00").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();

    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60 )) / 1000);

   

    myDay.innerHTML = days;
    myHour.innerHTML = hours;
    myMin.innerHTML = minutes;
    mySec.innerHTML = seconds;



    if(distance < 0)    {
        clearInterval(x);
        myDay.innerHTML = "EXPIRED";
        myHour.innerHTML = "EXPIRED";
        myMin.innerHTML = "EXPIRED";
        mySec.innerHTML = "EXPIRED";
    }   
}, 1000);



// Lightbox script
let slideIndex = 1;
showSlide(slideIndex);


function openLightbox() {
  document.getElementById('Lightbox').style.display = 'block';
}

function closeLightbox() {
  document.getElementById('Lightbox').style.display = 'none';
};


function changeSlide(n) {
  showSlide(slideIndex += n);
};

function toSlide(n) {
  showSlide(slideIndex = n);
};

function showSlide(n) {
  const slides = document.getElementsByClassName('slide');
  let modalPreviews = document.getElementsByClassName('modal-preview');

  if (n > slides.length) {
    slideIndex = 1;	
  };
  
  if (n < 1) {
    slideIndex = slides.length;
  };

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  };
  
  for (let i = 0; i < modalPreviews.length; i++) {
    modalPreviews[i].className = modalPreviews[i].className.replace(' active', '');
  };
  
  slides[slideIndex - 1].style.display = 'block';
  modalPreviews[slideIndex - 1].className += ' active';
};



