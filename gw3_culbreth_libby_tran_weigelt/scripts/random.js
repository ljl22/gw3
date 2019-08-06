//random images

var rand_int = Math.floor(Math.random() * 3);
var r_image = [
  "images/banner.jpg",
  "images/banner2.jpg",
  "images/banner3.jpg"
],

im = document.getElementById("my_image");
im.src = r_image[rand_int];

//Text Animation Home

var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 1250,
    delay: function(el, i) {
      return 50 * i;
    }
  });
