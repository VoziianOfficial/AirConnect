"use strict";

/* ==========================================================
   AIRCONNECT — ABOUT PAGE SCRIPT
   File: /js/about.js
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {
    initAboutPanelHover();
});

/* =========================
   ABOUT PANEL HOVER
   ========================= */

function initAboutPanelHover() {
    const items = document.querySelectorAll(".about-panel-item");

    if (!items.length) return;

    items.forEach((item) => {
        item.addEventListener("mouseenter", () => {
            items.forEach((otherItem) => {
                if (otherItem !== item) {
                    otherItem.classList.add("is-muted");
                }
            });
        });

        item.addEventListener("mouseleave", () => {
            items.forEach((otherItem) => {
                otherItem.classList.remove("is-muted");
            });
        });
    });
}