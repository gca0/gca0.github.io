const profilePic = document.getElementById('profile-image');
const textContainer = document.getElementById('container');

function transform34() {
  textContainer.style.transform = "scale(0.65)";
  textContainer.style.transformOrigin = "0 0";
  textContainer.style.width = "132%";
  textContainer.style.height = "132%";
  textContainer.style.marginLeft = "20px";  
}

function heightTransform() {
  textContainer.style.transform = "scale(0.7)";
  textContainer.style.transformOrigin = "initial";
  textContainer.style.width = "100%";
  textContainer.style.height = "auto";
}

function resetTransform() {
  textContainer.style.transform = "scale(1)";
  textContainer.style.transformOrigin = "initial";
  textContainer.style.width = "100%";
  textContainer.style.height = "auto";
  textContainer.style.marginLeft = "0"; 
}

function checkDimensions() {
  const innerWidth = window.innerWidth;
  const firstChild = textContainer.firstElementChild;
  
  if (innerWidth < 500) {
    textContainer.style.marginTop = "0";
    if (firstChild) {
      textContainer.insertBefore(profilePic, firstChild.nextSibling);
      transform34();
    }
  } 
  else {
    textContainer.style.marginTop = "-80px";
    heightTransform();
    const introContainer = document.querySelector('.intro-container');
    introContainer.insertBefore(profilePic, introContainer.firstChild);
  }

}

// Debounce function to limit the frequency of the checkWidth function
function debounce(func, delay) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}

const debouncedCheckDimensions = debounce(checkDimensions, 100);

// Call checkDimensions() when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', checkDimensions);

window.addEventListener('resize', checkDimensions);
