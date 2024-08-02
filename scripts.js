const mobileToggle = document.querySelector(".mobile-toggle");
const closeToggle = document.querySelector(".close-toggle");
const desktopHeader = document.querySelector(".desktop-header");
const mobileHeader = document.querySelector(".mobile-header");
const getAppBtn = document.querySelector(".get-app-btn");
const getKudaApp = document.querySelector(".get-kuda-app");
const dismissBtn = document.getElementById("dismiss");
document.addEventListener("DOMContentLoaded", function () {
    mobileToggle.addEventListener("click", function () {
        desktopHeader.style.display = "none";
        mobileHeader.style.display = "flex";
        mobileHeader.classList.add("slide-in");
    });

    closeToggle.addEventListener("click", function () {
        mobileHeader.style.display = "none";
        desktopHeader.style.display = "flex";
        desktopHeader.classList.add("slide-in");
    });
});

// Function to handle header display based on window width
function handleResize() {
    if (window.innerWidth >= 991) {
        mobileHeader.style.display = "none";
        desktopHeader.style.display = "flex";
    }
}

// Initial check
handleResize();
