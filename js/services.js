"use strict";









document.addEventListener("DOMContentLoaded", () => {
    initServicesPanelHover();
});





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