/*

Camera

* Use person and face detection to know when people are around, or cats

*/

var cameraSource = (function(global) {

  var id = 'source-camera',
      title = 'Camera',
      enabled = 'mediaDevices' in navigator;

  function start() {
  }

  // public
  return {
    id: id,
    title: title,
    enabled: enabled,
    start: start
  };

})(this);
