const navLinks = document.querySelectorAll('li a');
const progressBar = document.getElementById('scrollProgress');

function getCurrentSection() {
  const sections = document.querySelectorAll('section');
  let currentSection = null;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    // Check if the user is within the section
    if (window.scrollY >= sectionTop - sectionHeight / 2 && window.scrollY < sectionTop + sectionHeight - sectionHeight / 2) {
      currentSection = section;
    }
  });

  return currentSection;
}

function updateNavigation() {
  const currentSection = getCurrentSection();
  // Remove the 'active' class from all links initially
  navLinks.forEach(link => {
    link.classList.remove('active');
  });
  
  // If a section is currently in view, highlight the corresponding link
  if (currentSection) {
    const currentSectionId = currentSection.getAttribute('id');
    const correspondingNavLink = document.querySelector(`a[href="#${currentSectionId}"]`);
    if (correspondingNavLink) {
      correspondingNavLink.classList.add('active');
    }
  }
}

function updateProgressBar() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  progressBar.value = scrollPercent;
}

window.addEventListener('DOMContentLoaded', () => {
  updateNavigation();
  updateProgressBar();
});

window.addEventListener('scroll', () => {
  updateNavigation();
  updateProgressBar();
});

