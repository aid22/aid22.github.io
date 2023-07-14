var link = document.getElementById("toggle-link");
var destination = "footer";

link.addEventListener("click", function(e) {
  e.preventDefault(); // Prevent the default anchor link behavior

  if (destination === "footer") {
    scrollToElement("footer");
    destination = "splash";
  } else {
    scrollToElement("splash");
    destination = "footer";
  }
});

function scrollToElement(id) {
  var element = document.getElementById(id);
  element.scrollIntoView({ behavior: "smooth" });
}
