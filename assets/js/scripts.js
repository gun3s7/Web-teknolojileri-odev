//type effect
var i = 0;
var j = 0;
var txt ='MERHABA, BEN OĞUZHAN GÜNEŞ.';
var txt2 = 'SAKARYA ÜNİVERSİTESİNDE BİLGİSAYAR MÜHENDİSLİĞİ ÖĞRENCİSİYİM.';
var speed = 100; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.querySelector(".header-header").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function typeWriter2() {
  if (j < txt2.length) {
    document.querySelector(".header-desc").innerHTML += txt2.charAt(j);
    j++;
    setTimeout(typeWriter2, speed);
  }
  
}

setTimeout(typeWriter, speed);
setTimeout(typeWriter2, speed);


//burger menu
var burger = document.querySelector(".burger");
var navLinks = document.querySelector('.nav-links');
burger.addEventListener('click', layoutHandler);

function layoutHandler(){
    if(navLinks.style.display == "block"){
      navLinks.style.display = "none";
    }else{
      navLinks.style.display = "block";
    }
}
