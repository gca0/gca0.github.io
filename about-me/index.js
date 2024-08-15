const profilePic = document.getElementById('profile-image');
const textContainer = document.getElementById('container');

function transform34() {
  textContainer.style.transform = "scale(0.75)";
  textContainer.style.transformOrigin = "0 0";
  textContainer.style.width = "133.33%";
  textContainer.style.height = "133.33%";
}

function transform24() {
  textContainer.style.transform = "scale(0.50)";
  textContainer.style.transformOrigin = "0 0";
  textContainer.style.width = "200%";
  textContainer.style.height = "200%";
  textContainer.style.marginRight = "3%";
}

function checkWidth() {
  if (window.innerWidth < 784) {
    var firstChild = textContainer.firstElementChild;
    if (firstChild) {
      textContainer.insertBefore(profilePic, firstChild.nextSibling);
      transform34();
    }
  }

  if (window.innerWidth < 412) {
    transform24();
  }

  if (window.innerWidth > 788) {
    textContainer.style.transform = "scale(1)";
    textContainer.style.transformOrigin = "initial";
    textContainer.style.width = "100%";
    textContainer.style.height = "auto";
    textContainer.style.marginLeft = "0";
    textContainer.style.marginRight = "0";
    var introContainer = document.querySelector('.intro-container');
    introContainer.insertBefore(profilePic, introContainer.firstChild);
  }
}

// Call checkWidth() when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', checkWidth);

// Also call checkWidth() when the window is resized
window.addEventListener('resize', checkWidth);
