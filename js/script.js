function navResize() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  }
  else {
    x.className = "topnav";
  }
}

function subscribe() {
    alert("You have been subscribed (not really).")
}