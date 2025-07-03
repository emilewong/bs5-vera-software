/**
 * Header Text Replacement Animation
 * Uses ReplaceMe.js to cycle through text phrases in the header
 * Animation: Fade in effect with 2000ms transition
 * Loop: Infinite
 */
const checkReplace = document.querySelector('.replace-me');

if (checkReplace !== null) {
    const replace = new ReplaceMe(checkReplace, {
        animation: 'animated fadeIn',
        speed: 2000,
        separator: ',',
        loopCount: 'infinite',
        autoRun: true,
    });
}

/**
 * Navbar Scroll Behavior
 * Adds/removes classes based on scroll position to change navbar appearance
 * - When scrolled >50px: Adds dark background and border
 * - When at top: Removes background and border
 */
function userScroll() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-dark', 'border-bottom', 'border-secondary', 'navbar-sticky');
        } else {
            navbar.classList.remove('bg-dark', 'border-bottom', 'border-secondary', 'navbar-sticky');
        }
    });
}

// Initialize navbar scroll behavior when DOM is fully loaded
document.addEventListener('DOMContentLoaded', userScroll);

/**
 * Video Modal Functionality
 * Handles YouTube video playback in a Bootstrap modal
 * - Extracts video URL from data attribute on button click
 * - Sets video source with autoplay when modal is shown
 * - Resets video source when modal is closed to stop playback
 */
const videoBtn = document.querySelector('.video-btn');
const videoModal = document.querySelector('#videoModal');
const video = document.querySelector('#video');
let videoSrc;

if (videoBtn !== null) {
    videoBtn.addEventListener('click', () => {
        videoSrc = videoBtn.getAttribute('data-bs-src');
    });
}

if (videoModal !== null) {
    // Set video source with autoplay when modal is shown
    videoModal.addEventListener('shown.bs.modal', () => {
        video.setAttribute('src', `${videoSrc}?autoplay=1&modestbranding=1&showInfo=0`);
    });

    // Reset video source when modal is closed to stop playback
    videoModal.addEventListener('hide.bs.modal', () => {
        video.setAttribute('src', videoSrc);
    });
}