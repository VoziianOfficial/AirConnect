"use strict";

/* ==========================================================
   AIRCONNECT — SERVICES PAGE SCRIPT
   File: /js/services.js

   Page-specific services behavior.
   Shared rendering is handled by /js/main.js.
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {
    initServicesPanelHover();
});

/* =========================
   HERO PANEL HOVER
   ========================= */

function initServicesPanelHover() {
    const items = document.querySelectorAll(".services-panel-item");

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