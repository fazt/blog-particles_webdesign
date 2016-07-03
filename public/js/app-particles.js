/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
$(document).ready(function() {
  var ancho=$(window).width();
  console.log(ancho);
  if (ancho>600) {
    particlesJS.load('particles-js', 'js/assets/particles.json');
    console.log('desktop');
  }else{
    console.log('mobil');
  }

});
