/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    document.getElementById("Sidenav").style.width = "250px";
    document.getElementById("container").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("Sidenav").style.width = "0";
    document.getElementById("container").style.marginLeft = "0";
    document.body.style.backgroundColor = "#ededed";
} 

function toggleNavPanel(x) {
  var panel = document.getElementById(x),
    navarrow = document.getElementById("navarrow"),
    maxH = "300px";
  if (panel.style.height == maxH) {
    panel.style.height = "0px";
  } else {
    panel.style.height = maxH;
  }
}