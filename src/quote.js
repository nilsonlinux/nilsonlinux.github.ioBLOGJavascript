function quote() {
  var extras = document.getElementById("extras").value;
  var numTracks = document.getElementById("numTracks").value;
  var price;
  var ddp = document.getElementById("ddp").checked;

  // Work out per track price.
  if (numTracks == 1) {
    price = 40;
  } else if (numTracks > 1 && numTracks <= 4) {
    price = 40 + ((numTracks - 1) * 30);
  } else if (numTracks > 4) {
    price = 145 + ((numTracks - 4) * 25);
  } else {
    price = 0;
  }

  // Check if client has added extras without first adding track for mastering.
  if (numTracks === '0') {
    if (extras !== '0' && ddp === false) {
      document.getElementById("results").innerHTML = "Please add at least one track before adding extras.";
      $('#results')
      .css("color", "red");
    } else if (extras === '0' && ddp === true) {
      document.getElementById("results").innerHTML = "Please add at least one track before adding a DDPi/CDR.";
      $('#results')
      .css("color", "red");
    } else {
      document.getElementById("results").innerHTML = "Please add at least one track.";
      $('#results')
      .css("color", "red");
    }
  } else {
    document.getElementById("results").innerHTML = "Total cost will be: &pound;" + (price + (extras * 10) + (ddp * 20)); // Add up the total cost.
    $('#results')
      .stop(true, true)
      .effect("highlight", {color: "#00ffff"})
      .css("color", "#00ffff")
      .animate({color: "#fff"}, {queue: false, duration: 500});
  }
}
