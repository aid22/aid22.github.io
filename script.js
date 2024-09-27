const navLinks = document.querySelectorAll('nav a');

function getCurrentSection() {
    const sections = document.querySelectorAll('section');
    let currentSection = null;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 2) {
            currentSection = section;
        }
    });

    return currentSection;
}

function updateNavigation() {
    const currentSection = getCurrentSection();
    if (currentSection) {
        const currentSectionId = currentSection.getAttribute('id');
        // Remove the 'selected' class from all links
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        // Add the 'selected' class to the corresponding link
        const correspondingNavLink = document.querySelector(`nav a[href="#${currentSectionId}"]`);
        if (correspondingNavLink) {
            correspondingNavLink.classList.add('active');
        }
    }
}

window.addEventListener('DOMContentLoaded', updateNavigation);
window.addEventListener('scroll', updateNavigation);


function runEducation() {
    var x = document.getElementById("education-output");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function blinkCursor() {
    var cursor = document.getElementById("cursor");
    cursor.style.visibility = (cursor.style.visibility == "visible") ? "hidden" : "visible";
}
setInterval(blinkCursor, 1000);

window.onload = function() {
  toggle_popup();
};

function toggle_popup() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", function() {
    const myDiv = document.getElementById('myPopup');
    myDiv.style.display = 'block'; // Makes the div visible on load
});
