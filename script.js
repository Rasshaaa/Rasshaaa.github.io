// Disable Scroll via add class list
function disableScroll() {
    document.body.classList.add("stop-scrolling");
}

// Agar disable scroll saat posisi scroll berada pada titik 0 (teratas)
if(window.scrollY == 0) {
    disableScroll();
}

// Agar saat reload page di section lain auto pergi ke section awal
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}

// Enable Scroll via add class list
function enableScroll() {
    document.body.classList.remove("stop-scrolling");
    document.documentElement.style.scrollBehavior = 'smooth';
}

// Initialize Animate on Scroll (AOS)
if (window.AOS) AOS.init();

// Rellax Setup
if (window.Rellax) new Rellax('.rellax');

/* Unlock section links and close the mobile menu. */
document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', () => {
        enableScroll();
        const menu = document.getElementById('check-icon');
        if (menu) menu.checked = false;
    });
});
