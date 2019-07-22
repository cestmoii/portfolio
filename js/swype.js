var touchstartX = 0;
var touchstartY = 0;
var touchendX = 0;
var touchendY = 0;

var gesuredZone = document.getElementById('swype1');

gesuredZone.addEventListener('touchstart', function(event) {
    touchstartX = event.screenX;
    touchstartY = event.screenY;
}, false);

gesuredZone.addEventListener('touchend', function(event) {
    touchendX = event.screenX;
    touchendY = event.screenY;
    handleGesure();
}, false);

function handleGesure() {
  if (touchendX = touchstartX) {
    $('#swype1').show()
  }
  if (touchendX < touchstartX) {
    $('#swype4').show()
  }
  if (touchendX > touchstartX) {
      alert(swiped + 'right!');
  }
}
