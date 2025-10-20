/* =========================================================
   FADE-IN SCROLL ANIMATION
   ---------------------------------------------------------
   Adds "visible" class to elements with .fade-in when they
   enter the viewport. Includes debounce for performance.
========================================================= */

// ✅ Utility: Check if element is within viewport range
function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const threshold = 100; // pixels before element enters view
    return (
        rect.top <= windowHeight - threshold &&
        rect.bottom >= 0 + threshold
    );
}

// ✅ Main: Apply fade-in animation
function handleScrollAnimations() {
    document.querySelectorAll('.fade-in').forEach(el => {
        if (isInViewport(el)) {
            el.classList.add('visible');
        } else {
            el.classList.remove('visible');
        }
    });
}

// ✅ Debounce utility (limit scroll calls for performance)
function debounce(func, wait = 100) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// ✅ Initialize animations once DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    document.documentElement.classList.add('js-loaded');
    
    // Initial check (for elements already in view)
    handleScrollAnimations();

    // Add debounced scroll listener
    window.addEventListener('scroll', debounce(handleScrollAnimations, 100));
});

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('contactModal');
  const closeBtn = document.getElementById('closeModal');

  // open modal when clicking / cell link
  const contactLink = document.querySelector('a[href="#contacts"]');
  contactLink.addEventListener('click', (e) => {
    e.preventDefault(); // prevent scrolling
    modal.style.display = 'block';
  });

  // close modal on X click
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // close modal when clicking outside the box
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});