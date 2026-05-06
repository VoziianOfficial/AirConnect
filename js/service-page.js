"use strict";









document.addEventListener("DOMContentLoaded", () => {
    renderServicePage();
});





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
        <section class="service-hero service-hero-compact" aria-labelledby="serviceHeroTitle">
    <div class="container-wide">
        <div class="service-hero-card ${accentClass}"
            style="--service-hero-img: url('${escapeServiceHtml(service.heroImage || service.image || "./assets/images/home/hero-hvac.jpg")}');">

            <div class="service-hero-inner">
                <div class="service-hero-copy reveal-up">
                    <p class="eyebrow">
                        ${escapeServiceHtml(service.pageKicker || service.label || "HVAC provider matching")}
                    </p>

                    <h1 id="serviceHeroTitle">
                        ${escapeServiceHtml(service.heroTitle || service.title)}
                    </h1>

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
                </div>

                <aside class="service-hero-side reveal-up" aria-label="Service matching reminders">
                    <div class="service-hero-side-top">
                        <span class="service-hero-side-icon">
                            <i data-lucide="${escapeServiceHtml(service.icon || "wrench")}" aria-hidden="true"></i>
                        </span>

                        <div>
                            <span>Service path</span>
                            <strong>${escapeServiceHtml(service.shortTitle || service.title)}</strong>
                        </div>
                    </div>

                    <div class="service-hero-side-grid">
                        <div>
                            <span>Role</span>
                            <strong>Aggregator</strong>
                        </div>

                        <div>
                            <span>Providers</span>
                            <strong>Independent</strong>
                        </div>
                    </div>

                    <p>
                        Compare scope, credentials, timing, reviews, and warranty terms before choosing a provider.
                    </p>
                </aside>
            </div>

            <div class="service-hero-bottom reveal-up">
                <span class="service-hero-chip ${accentClass}">
                    <i data-lucide="${escapeServiceHtml(service.icon || "wrench")}" aria-hidden="true"></i>
                    ${escapeServiceHtml(service.title)}
                </span>

                <span class="service-hero-chip cool">
                    <i data-lucide="map-pin" aria-hidden="true"></i>
                    Local provider options
                </span>

                <span class="service-hero-chip lime">
                    <i data-lucide="shield-check" aria-hidden="true"></i>
                    Verify before hiring
                </span>

                <span class="service-hero-chip warm">
                    <i data-lucide="file-text" aria-hidden="true"></i>
                    Compare quote details
                </span>
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
                        <strong>Clear details</strong>
                    </article>

                    <article class="service-intro-item">
                        <div class="service-intro-icon">
                            <i data-lucide="map-pin" aria-hidden="true"></i>
                        </div>
                        <span>Local matching</span>
                        <strong>ZIP match</strong>
                    </article>

                    <article class="service-intro-item">
                        <div class="service-intro-icon">
                            <i data-lucide="file-text" aria-hidden="true"></i>
                        </div>
                        <span>Quote details</span>
                        <strong>Scope & fees</strong>
                    </article>

                    <article class="service-intro-item">
                        <div class="service-intro-icon">
                            <i data-lucide="shield-check" aria-hidden="true"></i>
                        </div>
                        <span>Before hiring</span>
                        <strong>Verify providers</strong>
                    </article>
                </div>
            </div>
        </section>

         <section class="service-process section" aria-labelledby="serviceProcessTitle">
            <div class="container-wide">
                <div class="section-heading center reveal-up">
                    <p class="section-kicker">How it works</p>
                    <h2 id="serviceProcessTitle">
                        ${escapeServiceHtml(service.processTitle || service.title)}
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

       

  <section class="service-photo-band service-photo-editorial section" aria-labelledby="servicePhotoTitle">
    <div class="container-wide">
        <div class="service-photo-card service-photo-editorial-card reveal-up">
            <img src="${escapeServiceHtml(service.image || service.heroImage || "./assets/images/home/thermostat.jpg")}" alt="${escapeServiceHtml(service.title)} provider matching context">

            <div class="service-photo-editorial-layout">
                <div class="service-photo-editorial-copy">
                    <p class="section-kicker">Provider fit lens</p>

                    <h2 id="servicePhotoTitle">
                        Compare the details behind every HVAC provider option.
                    </h2>

                    <p class="lead">
                        Before choosing a provider, review how each option handles scope, timing, warranty terms,
                        diagnostic fees, and local availability.
                    </p>
                </div>

                <div class="service-photo-editorial-list" aria-label="HVAC provider comparison details">
                    <div class="service-photo-editorial-row">
                        <span>01</span>
                        <strong>Scope and diagnostic fees</strong>
                    </div>

                    <div class="service-photo-editorial-row">
                        <span>02</span>
                        <strong>Local provider availability</strong>
                    </div>

                    <div class="service-photo-editorial-row">
                        <span>03</span>
                        <strong>Warranty and timeline details</strong>
                    </div>

                    <div class="service-photo-editorial-row">
                        <span>04</span>
                        <strong>Reviews, credentials, and experience</strong>
                    </div>
                </div>

                <div class="service-photo-editorial-note">
                    <i data-lucide="shield-check" aria-hidden="true"></i>
                    <p>
                        <strong>${escapeServiceHtml(config.companyName)}</strong> is a matching platform, not an HVAC contractor.
                        Providers are independent, so homeowners should verify details before hiring.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>

      <section class="service-form-section service-mini-request section" aria-labelledby="serviceFormTitle">
    <div class="container-wide">
        <div class="service-mini-request-card reveal-up">
            <div class="service-mini-copy">
                <p class="section-kicker">Start request</p>

                <h2 id="serviceFormTitle">
                    Prepare a ${escapeServiceHtml(service.shortTitle || service.title)} request in a few details.
                </h2>

                <p class="lead">
                    Share the ZIP code, timing, and short project notes so the request is easier to review before
                    comparing independent local provider options.
                </p>

                <div class="service-mini-points" aria-label="Request reminders">
                    <span>
                        <i data-lucide="ban" aria-hidden="true"></i>
                        No direct HVAC work
                    </span>

                    <span>
                        <i data-lucide="users" aria-hidden="true"></i>
                        Independent providers
                    </span>

                    <span>
                        <i data-lucide="shield-check" aria-hidden="true"></i>
                        Verify before hiring
                    </span>
                </div>
            </div>

            <form class="request-form service-mini-form" novalidate>
                <input type="hidden" name="service" value="${escapeServiceHtml(service.title)}">

                <div class="service-mini-form-head">
                    <div>
                        <span>Selected path</span>
                        <strong>${escapeServiceHtml(service.shortTitle || service.title)}</strong>
                    </div>

                    <i data-lucide="${escapeServiceHtml(service.icon || "wrench")}" aria-hidden="true"></i>
                </div>

                <div class="service-mini-form-grid">
                    <label class="service-mini-field">
                        <span>Name</span>
                        <input class="form-control" name="name" type="text" autocomplete="name" placeholder="Your name" required>
                    </label>

                    <label class="service-mini-field">
                        <span>Phone</span>
                        <input class="form-control" name="phone" type="tel" autocomplete="tel" placeholder="Phone number" required>
                    </label>

                    <label class="service-mini-field">
                        <span>ZIP code</span>
                        <input class="form-control" name="zip" type="text" inputmode="numeric" autocomplete="postal-code" placeholder="ZIP code" required minlength="5">
                    </label>

                    <label class="service-mini-field">
                        <span>Timing</span>
                        <select class="form-control" name="timing" required>
                            <option value="">Choose timing</option>
                            <option value="As soon as possible">As soon as possible</option>
                            <option value="This week">This week</option>
                            <option value="This month">This month</option>
                            <option value="Planning ahead">Planning ahead</option>
                        </select>
                    </label>

                    <label class="service-mini-field full">
                        <span>Project notes</span>
                        <textarea class="form-control" name="notes" placeholder="Briefly describe the issue, system notes, timing, or provider preferences." required></textarea>
                    </label>
                </div>

                <div class="form-message service-mini-message" data-form-message role="status" aria-live="polite"></div>

                <div class="service-mini-form-bottom">
                    <button class="btn btn-primary service-mini-submit" type="submit">
                        <span>Send request details</span>
                        <i data-lucide="arrow-right" aria-hidden="true"></i>
                    </button>

                    <p>
                        ${escapeServiceHtml(config.companyName)} is a matching platform. Providers are independent.
                    </p>
                </div>
            </form>
        </div>
    </div>
</section>

    <section class="service-faq-section service-faq-grid-section section-sm" aria-labelledby="serviceFaqTitle">
    <div class="container-narrow">
        <div class="section-heading center reveal-up">
            <p class="section-kicker">FAQ</p>
            <h2 id="serviceFaqTitle">
                ${escapeServiceHtml(service.shortTitle || service.title)} questions.
            </h2>
        </div>

        <div class="faq-list service-faq-grid reveal-up" data-faq-list data-faq-source="service"></div>
        <script type="application/ld+json" data-faq-schema data-faq-source="service"></script>
    </div>
</section>
    `;

    refreshAfterServiceRender();
}





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
