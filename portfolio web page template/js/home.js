var labelElement1 = document.getElementById("ABOUT_US");
labelElement1.style.color = "#0052fc";
var labelElement2 = document.getElementById("RESUME");
var labelElement3 = document.getElementById("PROJECTS");
var labelElement4 = document.getElementById("CONTACT US");

labelElement2.style.color = "black";
labelElement3.style.color = "black";
labelElement4.style.color = "black";

labelElement1.style.cursor = "text";

function resume() {
  window.open("../media/RESUME.pdf");
}

function projects() {
  window.location.href = "../html/projects.html";
}

function contact_us() {
  window.location.href = "../html/contact_us.html";
}
