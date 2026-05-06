"use strict";


document.addEventListener("DOMContentLoaded", () => {
    initContactPanelHover();
    initContactMethodHover();
});

/* =========================
   CONTACT PANEL HOVER
   ========================= */

function initContactPanelHover() {
    const items = document.querySelectorAll(".contact-panel-item");

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

/* =========================
   CONTACT METHOD FOCUS
   ========================= */

function initContactMethodHover() {
    const methods = document.querySelectorAll(".contact-method");

    if (!methods.length) return;

    methods.forEach((method) => {
        method.addEventListener("mouseenter", () => {
            methods.forEach((otherMethod) => {
                if (otherMethod !== method) {
                    otherMethod.style.opacity = "0.64";
                }
            });
        });

        method.addEventListener("mouseleave", () => {
            methods.forEach((otherMethod) => {
                otherMethod.style.opacity = "";
            });
        });
    });
}