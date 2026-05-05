"use strict";

/* ==========================================================
   AIRCONNECT — SERVICE PAGE SCRIPT
   File: /js/service-page.js

   This renders each service page from /js/config.js
   based on the current HTML filename.
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {
    renderServicePage();
});

/* =========================
   SERVICE PAGE RENDER
   ========================= */

function renderServicePage() {
    const config = window.SITE_CONFIG;
    const mount = document.querySelector("[data-service-page]");

    if (!config || !mount) return;

    const service = window.AIRCONNECT?.getCurrentService?.();

    if (!service) {
        mount.innerHTML = getMissingServiceHtml();
        refreshAfterServiceRender();
        return;
    }

    const accentClass = getAccentClass(service.accent);

    mount.innerHTML = `
        <section class="service-hero" aria-labelledby="serviceHeroTitle">
            <div class="container-wide">
                <div class="service-hero-inner">
                    <div class="service-hero-copy reveal-up">
                        <div>
                            <p class="eyebrow">${escapeServiceHtml(service.pageKicker || service.label || "HVAC matching")}</p>
                            <h1 id="serviceHeroTitle">
                                ${escapeServiceHtml(service.heroTitle || service.title)}
                            </h1>
                        </div>

                        <p class="lead">
                            ${escapeServiceHtml(service.heroText || service.summary || "")}
                        </p>

                        <div class="service-hero-actions">
                            <a class="btn btn-primary" href="contact.html">
                                <span>Start matching request</span>
                                <i data-lucide="arrow-right" aria-hidden="true"></i>
                            </a>

                            <a class="btn btn-secondary" href="services.html">
                                <span>View all services</span>
                                <i data-lucide="grid-2x2" aria-hidden="true"></i>
                            </a>
                        </div>

                        <div class="service-hero-chips">
                            <span class="chip ${accentClass}">
                                <i data-lucide="${escapeServiceHtml(service.icon || "wrench")}" aria-hidden="true"></i>
                                ${escapeServiceHtml(service.title)}
                            </span>

                            <span class="chip cool">
                                <i data-lucide="map-pin" aria-hidden="true"></i>
                                Local provider options
                            </span>

                            <span class="chip lime">
                                <i data-lucide="shield-check" aria-hidden="true"></i>
                                Verify before hiring
                            </span>
                        </div>
                    </div>

                    <div class="service-hero-media reveal-up">
                        <img src="${escapeServiceHtml(service.heroImage || service.image || "./assets/images/home/hero-hvac.jpg")}" alt="${escapeServiceHtml(service.title)} visual">

                        <span class="service-media-badge one float-soft">
                            <i data-lucide="${escapeServiceHtml(service.icon || "wrench")}" aria-hidden="true"></i>
                            ${escapeServiceHtml(service.shortTitle || service.title)}
                        </span>

                        <span class="service-media-badge two float-soft delay-1">
                            <i data-lucide="shield-check" aria-hidden="true"></i>
                            Provider Matching
                        </span>

                        <div class="airflow-lines" aria-hidden="true">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                        <div class="service-media-panel">
                            <div class="service-media-stat">
                                <span>Platform</span>
                                <strong>Aggregator</strong>
                            </div>

                            <div class="service-media-stat">
                                <span>Providers</span>
                                <strong>Independent</strong>
                            </div>

                            <div class="service-media-stat">
                                <span>Reminder</span>
                                <strong>Verify details</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="service-intro-strip section-sm" aria-label="Service matching highlights">
            <div class="container-wide">
                <div class="service-intro-panel reveal-up">
                    <article class="service-intro-item">
                        <div class="service-intro-icon">
                            <i data-lucide="clipboard-check" aria-hidden="true"></i>
                        </div>
                        <span>Request context</span>
                        <strong>Describe the project clearly</strong>
                    </article>

                    <article class="service-intro-item">
                        <div class="service-intro-icon">
                            <i data-lucide="map-pin" aria-hidden="true"></i>
                        </div>
                        <span>Local matching</span>
                        <strong>Compare by ZIP code</strong>
                    </article>

                    <article class="service-intro-item">
                        <div class="service-intro-icon">
                            <i data-lucide="file-text" aria-hidden="true"></i>
                        </div>
                        <span>Quote details</span>
                        <strong>Review scope and fees</strong>
                    </article>

                    <article class="service-intro-item">
                        <div class="service-intro-icon">
                            <i data-lucide="shield-check" aria-hidden="true"></i>
                        </div>
                        <span>Before hiring</span>
                        <strong>Verify provider details</strong>
                    </article>
                </div>
            </div>
        </section>

        <section class="service-detail section" aria-labelledby="serviceDetailTitle">
            <div class="container-wide">
                <div class="service-detail-layout">
                    <div class="service-detail-copy reveal-up">
                        <p class="section-kicker">Comparison focus</p>
                        <h2 id="serviceDetailTitle">
                            A clearer way to compare ${escapeServiceHtml(service.shortTitle || service.title)} options.
                        </h2>
                        <p class="lead">
                            ${escapeServiceHtml(service.pageIntro || service.summary || "")}
                        </p>

                        <p class="text-muted">
                            ${escapeServiceHtml(config.companyName)} does not perform HVAC work directly. The platform helps homeowners prepare a structured request and compare independent local provider options where available.
                        </p>

                        <div class="service-hero-actions">
                            <a class="btn btn-primary" href="contact.html">
                                <span>Prepare request</span>
                                <i data-lucide="arrow-right" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>

                    <div class="service-check-panel reveal-up">
                        ${getEvaluationHtml(service)}
                    </div>
                </div>
            </div>
        </section>

        <section class="service-process section" aria-labelledby="serviceProcessTitle">
            <div class="container-wide">
                <div class="section-heading center reveal-up">
                    <p class="section-kicker">How it works</p>
                    <h2 id="serviceProcessTitle">
                        From service need to provider comparison.
                    </h2>
                    <p class="lead">
                        The goal is not to promise a specific provider, price, or timeline. The goal is to help organize the request before follow-up.
                    </p>
                </div>

                <div class="service-process-grid">
                    <article class="service-process-card reveal-up">
                        <span class="service-process-number">1</span>
                        <h3>Share the service need</h3>
                        <p>
                            Choose ${escapeServiceHtml(service.shortTitle || service.title)} and add property, timing, and system notes.
                        </p>
                    </article>

                    <article class="service-process-card reveal-up">
                        <span class="service-process-number">2</span>
                        <h3>Review provider options</h3>
                        <p>
                            Compare independent local provider options where available in your service area.
                        </p>
                    </article>

                    <article class="service-process-card reveal-up">
                        <span class="service-process-number">3</span>
                        <h3>Verify before hiring</h3>
                        <p>
                            Review licensing, insurance, quote details, timelines, warranty terms, and service scope.
                        </p>
                    </article>
                </div>
            </div>
        </section>

        <section class="service-photo-band section" aria-labelledby="servicePhotoTitle">
            <div class="container-wide">
                <div class="service-photo-card reveal-up">
                    <img src="${escapeServiceHtml(service.image || service.heroImage || "./assets/images/home/thermostat.jpg")}" alt="${escapeServiceHtml(service.title)} provider matching context">

                    <div class="service-photo-content">
                        <p class="section-kicker">Provider fit lens</p>
                        <h2 id="servicePhotoTitle">
                            Compare the details that affect comfort, timing, and cost.
                        </h2>
                        <p class="lead">
                            Different providers may structure diagnostics, quotes, warranties, and scheduling differently. Use the request flow to keep those details easier to review.
                        </p>

                        <ul class="service-form-list">
                            <li>Service scope and diagnostic fees</li>
                            <li>Provider availability by location</li>
                            <li>Warranty and timeline details</li>
                            <li>Reviews, credentials, and experience</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section class="service-form-section section" aria-labelledby="serviceFormTitle">
            <div class="container-wide">
                <div class="service-form-layout">
                    <div class="service-form-copy reveal-up">
                        <p class="section-kicker">Start request</p>
                        <h2 id="serviceFormTitle">
                            Prepare a ${escapeServiceHtml(service.shortTitle || service.title)} matching request.
                        </h2>
                        <p class="lead">
                            Share the service type, ZIP code, contact details, and project notes. A local provider option may follow up depending on availability.
                        </p>

                        <ul class="service-form-list">
                            <li>No direct HVAC work by ${escapeServiceHtml(config.companyName)}</li>
                            <li>Independent local providers</li>
                            <li>Credential and quote verification reminders</li>
                        </ul>
                    </div>

                    <div data-request-form class="reveal-up"></div>
                </div>
            </div>
        </section>

        <section class="service-faq-section section-sm" aria-labelledby="serviceFaqTitle">
            <div class="container-narrow">
                <div class="section-heading center reveal-up">
                    <p class="section-kicker">FAQ</p>
                    <h2 id="serviceFaqTitle">
                        ${escapeServiceHtml(service.shortTitle || service.title)} questions.
                    </h2>
                </div>

                <div class="faq-list reveal-up" data-faq-list data-faq-source="service"></div>
                <script type="application/ld+json" data-faq-schema data-faq-source="service"></script>
            </div>
        </section>
    `;

    refreshAfterServiceRender();
}

/* =========================
   HTML HELPERS
   ========================= */

function getEvaluationHtml(service) {
    const points = service.evaluationPoints || [];

    if (!points.length) {
        return `
            <div class="service-check-item">
                <span class="service-check-icon">
                    <i data-lucide="check" aria-hidden="true"></i>
                </span>
                <p>Compare provider credentials, quote details, timing, and service scope before hiring.</p>
            </div>
        `;
    }

    return points
        .map((point) => {
            return `
                <div class="service-check-item">
                    <span class="service-check-icon">
                        <i data-lucide="check" aria-hidden="true"></i>
                    </span>
                    <p>${escapeServiceHtml(point)}</p>
                </div>
            `;
        })
        .join("");
}

function getMissingServiceHtml() {
    return `
        <section class="service-hero">
            <div class="container-narrow">
                <div class="service-hero-copy reveal-up">
                    <p class="eyebrow">Service not found</p>
                    <h1>This HVAC service page is not connected in config.js.</h1>
                    <p class="lead">
                        Check that this HTML filename matches one of the service href values inside window.SITE_CONFIG.services.
                    </p>
                    <a class="btn btn-primary" href="services.html">
                        <span>Back to services</span>
                        <i data-lucide="arrow-right" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </section>
    `;
}

function getAccentClass(accent) {
    if (accent === "warm") return "warm";
    if (accent === "lime") return "lime";
    return "cool";
}

function escapeServiceHtml(value) {
    return String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

/* =========================
   REFRESH AFTER RENDER
   ========================= */

function refreshAfterServiceRender() {
    if (typeof injectConfigValues === "function") {
        injectConfigValues();
    }

    if (typeof renderRequestForms === "function") {
        renderRequestForms();
    }

    if (typeof renderFaqLists === "function") {
        renderFaqLists();
    }

    if (typeof renderFaqSchema === "function") {
        renderFaqSchema();
    }

    if (typeof initFaqAccordions === "function") {
        initFaqAccordions();
    }

    if (typeof initRevealAnimations === "function") {
        initRevealAnimations();
    }

    if (typeof refreshIcons === "function") {
        refreshIcons();
    }
}