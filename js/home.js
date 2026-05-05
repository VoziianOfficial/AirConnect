"use strict";

/* ==========================================================
   AIRCONNECT — HOME PAGE SCRIPT
   File: /js/home.js

   Home-only behavior:
   - subtle hero visual parallax
   - floating badge depth movement
   - intro strip active item
   - review cards soft focus
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {
    initHomeHeroParallax();
    initIntroStripInteraction();
    initReviewFocus();
});

/* =========================
   HERO PARALLAX
   ========================= */

function initHomeHeroParallax() {
    const wrap = document.querySelector(".home-hero-visual-wrap");
    const visual = document.querySelector(".home-hero-visual");
    const badges = document.querySelectorAll(".hero-floating-badge");

    if (!wrap || !visual) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    wrap.addEventListener("mousemove", (event) => {
        const rect = wrap.getBoundingClientRect();

        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;

        visual.style.transform = `translate3d(${x * 8}px, ${y * 8}px, 0)`;

        badges.forEach((badge, index) => {
            const depth = (index + 1) * 3;
            badge.style.transform = `translate3d(${x * depth}px, ${y * depth}px, 0)`;
        });
    });

    wrap.addEventListener("mouseleave", () => {
        visual.style.transform = "translate3d(0, 0, 0)";

        badges.forEach((badge) => {
            badge.style.transform = "translate3d(0, 0, 0)";
        });
    });
}

/* =========================
   INTRO STRIP INTERACTION
   ========================= */

function initIntroStripInteraction() {
    const items = document.querySelectorAll(".intro-strip-item");

    if (!items.length) return;

    items.forEach((item) => {
        item.addEventListener("mouseenter", () => {
            items.forEach((otherItem) => otherItem.classList.remove("is-active"));
            item.classList.add("is-active");
        });

        item.addEventListener("mouseleave", () => {
            item.classList.remove("is-active");
        });
    });
}

/* =========================
   REVIEW FOCUS
   ========================= */

function initReviewFocus() {
    const cards = document.querySelectorAll(".review-card");

    if (!cards.length) return;

    cards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
            cards.forEach((otherCard) => {
                if (otherCard !== card) {
                    otherCard.classList.add("is-muted");
                }
            });
        });

        card.addEventListener("mouseleave", () => {
            cards.forEach((otherCard) => {
                otherCard.classList.remove("is-muted");
            });
        });
    });
}