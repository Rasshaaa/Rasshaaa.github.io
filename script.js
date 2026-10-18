// Shared site behavior: navigation, simple blog search, and scroll animations.

document.addEventListener("DOMContentLoaded", () => {
    const year = document.querySelector("#year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    setupNavigation();
    setupBlogSearch();
    setupAnimations();
});

function setupNavigation() {
    const menuButton = document.querySelector(".nav-toggle");
    const links = document.querySelector(".nav-links");
    const navbar = document.querySelector(".navbar");

    if (!menuButton || !links || !navbar) {
        return;
    }

    function closeMenu() {
        links.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
    }

    menuButton.addEventListener("click", () => {
        const isOpen = links.classList.toggle("is-open");
        menuButton.setAttribute("aria-expanded", String(isOpen));
    });

    links.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
        }
    });

    document.addEventListener("click", (event) => {
        if (!navbar.contains(event.target)) {
            closeMenu();
        }
    });
}

function setupBlogSearch() {
    const search = document.querySelector("#post-search");
    const posts = Array.from(document.querySelectorAll(".blog-list-item"));
    const counter = document.querySelector("#post-count");
    const emptyMessage = document.querySelector("#empty-search");

    if (!search || !counter || !emptyMessage) {
        return;
    }

    search.addEventListener("input", () => {
        const query = search.value.trim().toLowerCase();
        let visible = 0;

        posts.forEach((post) => {
            const matches = post.dataset.search.includes(query);
            post.hidden = !matches;

            if (matches) {
                visible++;
            }
        });

        counter.textContent = `${visible} ${visible === 1 ? "post" : "posts"}`;
        emptyMessage.hidden = visible !== 0;
    });
}

function setupAnimations() {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (typeof AOS !== "undefined") {
        AOS.init({
            duration: reducedMotion ? 0 : 650,
            once: true,
            offset: 55,
            disable: reducedMotion
        });
    }

    if (!reducedMotion && window.innerWidth > 800 && typeof Rellax !== "undefined") {
        new Rellax(".rellax", {
            center: true
        });
    }
}
