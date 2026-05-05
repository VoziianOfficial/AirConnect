"use strict";

/* ==========================================================
   AIRCONNECT — MAIN GLOBAL SCRIPT
   File: /js/main.js
   ========================================================== */

let requestFormCounter = 0;

document.addEventListener("DOMContentLoaded", () => {
    const config = window.SITE_CONFIG;

    if (!config) {
        console.warn("SITE_CONFIG is missing. Make sure /js/config.js loads before /js/main.js.");
        return;
    }

    applyPageMeta();
    renderHeader();
    renderFooter();
    injectConfigValues();
    renderServiceCards();
    renderFaqLists();
    renderFaqSchema();
    renderRequestForms();
    renderMapCards();
    renderPolicyBanner();
    initMobileMenu();
    initFaqAccordions();
    initRevealAnimations();
    refreshIcons();
});

/* =========================
   HELPERS
   ========================= */

function getConfig() {
    return window.SITE_CONFIG || {};
}

function getCurrentPageName() {
    if (window.AIRCONNECT && typeof window.AIRCONNECT.getCurrentPageName === "function") {
        return window.AIRCONNECT.getCurrentPageName();
    }

    const path = window.location.pathname;
    const filename = path.substring(path.lastIndexOf("/") + 1);

    return filename || "index.html";
}

function escapeHtml(value) {
    return String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function createIcon(iconName) {
    return `<i data-lucide="${escapeHtml(iconName)}" aria-hidden="true"></i>`;
}

function refreshIcons() {
    if (window.lucide && typeof window.lucide.createIcons === "function") {
        window.lucide.createIcons();
    }
}

function setText(selector, text) {
    document.querySelectorAll(selector).forEach((element) => {
        element.textContent = text;
    });
}

function setHref(selector, href) {
    document.querySelectorAll(selector).forEach((element) => {
        element.setAttribute("href", href);
    });
}

function isServicePage(pageName) {
    const config = getConfig();
    return (config.services || []).some((service) => service.href === pageName);
}

function isPrimaryNavActive(item, currentPage) {
    if (item.href === currentPage) return true;

    if (item.href === "services.html" && isServicePage(currentPage)) {
        return true;
    }

    return false;
}

/* =========================
   PAGE META
   ========================= */

function applyPageMeta() {
    const config = getConfig();
    const currentPage = getCurrentPageName();
    const meta = config.pageMeta?.[currentPage];

    if (!meta) {
        console.warn(`No pageMeta found for ${currentPage}`);
        return;
    }

    if (meta.title) {
        document.title = meta.title;
    }

    if (meta.description) {
        let descriptionTag = document.querySelector('meta[name="description"]');

        if (!descriptionTag) {
            descriptionTag = document.createElement("meta");
            descriptionTag.setAttribute("name", "description");
            document.head.appendChild(descriptionTag);
        }

        descriptionTag.setAttribute("content", meta.description);
    }
}

/* =========================
   CONFIG VALUE INJECTION
   ========================= */

function injectConfigValues() {
    const config = getConfig();

    setText("[data-company-name]", config.companyName || "");
    setText("[data-company-id]", config.companyId || "");
    setText("[data-phone-text]", config.phoneLabel || config.phone || "");
    setText("[data-phone-number]", config.phone || "");
    setText("[data-email-text]", config.email || "");
    setText("[data-address-text]", config.address?.full || "");
    setText("[data-footer-text]", config.footerText || "");
    setText("[data-service-area]", config.serviceArea || "");
    setText("[data-disclaimer]", config.disclaimer || "");
    setText("[data-legal-notice]", config.legalNotice || "");

    setHref("[data-phone-link]", `tel:${config.phoneHref || config.phone || ""}`);
    setHref("[data-email-link]", `mailto:${config.email || ""}`);
}

/* =========================
   HEADER
   ========================= */

function renderHeader() {
    const config = getConfig();
    const mount = document.querySelector("[data-site-header]");

    if (!mount) return;

    const currentPage = getCurrentPageName();

    const navHtml = (config.navigation || [])
        .map((item) => {
            const activeClass = isPrimaryNavActive(item, currentPage) ? "is-active" : "";

            return `
                <a href="${escapeHtml(item.href)}" class="${activeClass}">
                    ${escapeHtml(item.label)}
                </a>
            `;
        })
        .join("");

    const mobileNavHtml = (config.navigation || [])
        .map((item) => {
            const activeClass = isPrimaryNavActive(item, currentPage) ? "is-active" : "";

            return `
                <a href="${escapeHtml(item.href)}" class="${activeClass}">
                    <span>${escapeHtml(item.label)}</span>
                    ${createIcon("arrow-up-right")}
                </a>
            `;
        })
        .join("");

    const mobileServicesHtml = (config.services || [])
        .map((service) => {
            const activeClass = service.href === currentPage ? "is-active" : "";

            return `
                <a href="${escapeHtml(service.href)}" class="${activeClass}">
                    <span>${escapeHtml(service.shortTitle || service.title)}</span>
                    ${createIcon(service.icon || "arrow-up-right")}
                </a>
            `;
        })
        .join("");

    mount.innerHTML = `
        <header class="site-header-shell">
            <div class="site-header">
                <a class="site-logo" href="index.html" aria-label="${escapeHtml(config.brand?.logoLabel || config.companyName)}">
                    <span class="site-logo-mark">
                        ${createIcon("wind")}
                    </span>
                    <span data-company-name>${escapeHtml(config.companyName)}</span>
                </a>

                <nav class="site-nav" aria-label="Primary navigation">
                    ${navHtml}
                </nav>

                <div class="header-actions">
                    <a class="btn btn-primary" href="contact.html">
                        <span>${escapeHtml(config.phoneLabel || "Start request")}</span>
                        ${createIcon("arrow-right")}
                    </a>
                </div>

                <button class="mobile-menu-toggle" type="button" aria-label="Open menu" aria-expanded="false" data-mobile-menu-open>
                    ${createIcon("menu")}
                </button>
            </div>
        </header>

        <div class="mobile-menu-backdrop" data-mobile-menu-backdrop></div>

        <aside class="mobile-menu" data-mobile-menu inert>
            <div class="mobile-menu-head">
                <a class="site-logo" href="index.html" aria-label="${escapeHtml(config.brand?.logoLabel || config.companyName)}">
                    <span class="site-logo-mark">
                        ${createIcon("wind")}
                    </span>
                    <span>${escapeHtml(config.companyName)}</span>
                </a>

                <button class="mobile-menu-close" type="button" aria-label="Close menu" data-mobile-menu-close>
                    ${createIcon("x")}
                </button>
            </div>

            <div class="mobile-menu-body">
                <div class="mobile-menu-section">
                    <span class="mobile-menu-label">Navigation</span>
                    <nav class="mobile-menu-nav" aria-label="Mobile navigation">
                        ${mobileNavHtml}
                    </nav>
                </div>

                <div class="mobile-menu-section">
                    <span class="mobile-menu-label">HVAC services</span>
                    <nav class="mobile-menu-services" aria-label="Service navigation">
                        ${mobileServicesHtml}
                    </nav>
                </div>
            </div>

            <div class="mobile-menu-foot">
                <div class="mobile-menu-contact">
                    <a href="tel:${escapeHtml(config.phoneHref || config.phone || "")}">
                        ${createIcon("phone")}
                        <span>${escapeHtml(config.phoneLabel || config.phone || "")}</span>
                    </a>

                    <a href="mailto:${escapeHtml(config.email || "")}">
                        ${createIcon("mail")}
                        <span>${escapeHtml(config.email || "")}</span>
                    </a>
                </div>

                <a class="btn btn-primary" href="contact.html">
                    <span>Start request</span>
                    ${createIcon("arrow-right")}
                </a>
            </div>
        </aside>
    `;
}

/* =========================
   FOOTER
   ========================= */

function renderFooter() {
    const config = getConfig();
    const mount = document.querySelector("[data-site-footer]");

    if (!mount) return;

    const navLinks = (config.navigation || [])
        .map((item) => `<a href="${escapeHtml(item.href)}">${escapeHtml(item.label)}</a>`)
        .join("");

    const serviceLinks = (config.services || [])
        .map((service) => `<a href="${escapeHtml(service.href)}">${escapeHtml(service.title)}</a>`)
        .join("");

    const legalLinks = (config.legalLinks || [])
        .map((item) => `<a href="${escapeHtml(item.href)}">${escapeHtml(item.label)}</a>`)
        .join("");

    mount.innerHTML = `
        <footer class="site-footer">
            <div class="container-wide">
                <div class="footer-grid">
                    <div class="footer-brand">
                        <a class="site-logo" href="index.html" aria-label="${escapeHtml(config.brand?.logoLabel || config.companyName)}">
                            <span class="site-logo-mark">
                                ${createIcon("wind")}
                            </span>
                            <span>${escapeHtml(config.companyName)}</span>
                        </a>

                        <p data-footer-text>${escapeHtml(config.footerText || "")}</p>

                        <div class="chip cool">
                            ${createIcon("map-pin")}
                            <span data-service-area>${escapeHtml(config.serviceArea || "")}</span>
                        </div>
                    </div>

                    <div class="footer-column">
                        <h3>Pages</h3>
                        ${navLinks}
                    </div>

                    <div class="footer-column">
                        <h3>Services</h3>
                        ${serviceLinks}
                    </div>

                    <div class="footer-column">
                        <h3>Contact</h3>
                        <a href="tel:${escapeHtml(config.phoneHref || config.phone || "")}" data-phone-link>
                            ${escapeHtml(config.phoneLabel || config.phone || "")}
                        </a>
                        <a href="mailto:${escapeHtml(config.email || "")}" data-email-link>
                            ${escapeHtml(config.email || "")}
                        </a>
                        <span>${escapeHtml(config.address?.full || "")}</span>
                    </div>
                </div>

                <div class="footer-bottom">
                    <div class="footer-meta">
                        <span>
                            <strong data-company-name>${escapeHtml(config.companyName || "")}</strong>
                        </span>
                        <span>
                            ID: <strong data-company-id>${escapeHtml(config.companyId || "")}</strong>
                        </span>
                        <span data-address-text>${escapeHtml(config.address?.full || "")}</span>
                    </div>

                    <p data-disclaimer>${escapeHtml(config.disclaimer || "")}</p>
                    <p data-legal-notice>${escapeHtml(config.legalNotice || "")}</p>

                    <div class="footer-meta">
                        ${legalLinks}
                    </div>
                </div>
            </div>
        </footer>
    `;
}

/* =========================
   MOBILE MENU
   ========================= */

function initMobileMenu() {
    const menu = document.querySelector("[data-mobile-menu]");
    const openButton = document.querySelector("[data-mobile-menu-open]");
    const closeButton = document.querySelector("[data-mobile-menu-close]");
    const backdrop = document.querySelector("[data-mobile-menu-backdrop]");

    if (!menu || !openButton || !closeButton || !backdrop) return;

    let lastFocusedElement = null;

    const focusableSelector = [
        "a[href]",
        "button:not([disabled])",
        "input:not([disabled])",
        "select:not([disabled])",
        "textarea:not([disabled])",
        '[tabindex]:not([tabindex="-1"])'
    ].join(",");

    function openMenu() {
        lastFocusedElement = document.activeElement;

        document.body.classList.add("menu-open");
        menu.removeAttribute("inert");
        openButton.setAttribute("aria-expanded", "true");

        const firstFocusable = menu.querySelector(focusableSelector);
        firstFocusable?.focus();
    }

    function closeMenu() {
        document.body.classList.remove("menu-open");
        menu.setAttribute("inert", "");
        openButton.setAttribute("aria-expanded", "false");

        if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
            lastFocusedElement.focus();
        }
    }

    function trapFocus(event) {
        if (!document.body.classList.contains("menu-open")) return;
        if (event.key !== "Tab") return;

        const focusableElements = Array.from(menu.querySelectorAll(focusableSelector));

        if (!focusableElements.length) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey && document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
        }

        if (!event.shiftKey && document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
        }
    }

    openButton.addEventListener("click", openMenu);
    closeButton.addEventListener("click", closeMenu);
    backdrop.addEventListener("click", closeMenu);

    menu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && document.body.classList.contains("menu-open")) {
            closeMenu();
        }

        trapFocus(event);
    });
}

/* =========================
   SERVICE CARDS
   ========================= */

function renderServiceCards() {
    const config = getConfig();
    const mounts = document.querySelectorAll("[data-service-cards]");

    if (!mounts.length) return;

    mounts.forEach((mount) => {
        const limit = Number(mount.dataset.limit || config.services.length);
        const services = (config.services || []).slice(0, limit);

        mount.innerHTML = services
            .map((service) => {
                return `
                    <article class="service-card reveal-up" data-accent="${escapeHtml(service.accent || "cool")}">
                        <a href="${escapeHtml(service.href)}" aria-label="View ${escapeHtml(service.title)}">
                            <div class="service-card-icon">
                                ${createIcon(service.icon || "wrench")}
                            </div>

                            <div class="service-card-content">
                                <span class="service-card-label">${escapeHtml(service.label || "HVAC matching")}</span>
                                <h3>${escapeHtml(service.title)}</h3>
                                <p>${escapeHtml(service.cardText || service.summary || "")}</p>
                            </div>

                            <div class="service-card-footer">
                                <span>Compare options</span>
                                ${createIcon("arrow-up-right")}
                            </div>
                        </a>
                    </article>
                `;
            })
            .join("");
    });
}

/* =========================
   FAQ
   ========================= */

function renderFaqLists() {
    const config = getConfig();
    const mounts = document.querySelectorAll("[data-faq-list]");

    if (!mounts.length) return;

    mounts.forEach((mount, mountIndex) => {
        const faqItems = getFaqForMount(mount, config);

        mount.innerHTML = faqItems
            .map((item, index) => {
                const id = `faq-${mountIndex + 1}-${index + 1}`;

                return `
                    <article class="faq-item">
                        <button class="faq-question" type="button" aria-expanded="false" aria-controls="${id}">
                            <span>${escapeHtml(item.question)}</span>
                            ${createIcon("plus")}
                        </button>

                        <div class="faq-answer" id="${id}">
                            <div class="faq-answer-inner">
                                <p>${escapeHtml(item.answer)}</p>
                            </div>
                        </div>
                    </article>
                `;
            })
            .join("");
    });
}

function getFaqForMount(mount, config) {
    if (mount.dataset.faqSource === "service") {
        const service = window.AIRCONNECT?.getCurrentService?.();
        return service?.faq || config.faq || [];
    }

    return config.faq || [];
}

function initFaqAccordions() {
    document.querySelectorAll(".faq-item").forEach((item) => {
        const button = item.querySelector(".faq-question");

        if (!button || button.dataset.faqReady === "true") return;

        button.dataset.faqReady = "true";

        button.addEventListener("click", () => {
            const isOpen = item.classList.toggle("is-open");
            button.setAttribute("aria-expanded", String(isOpen));
        });
    });
}

function renderFaqSchema() {
    const config = getConfig();
    const mounts = document.querySelectorAll("[data-faq-schema]");

    if (!mounts.length) return;

    mounts.forEach((mount) => {
        const faqItems = getFaqForMount(mount, config);

        if (!faqItems.length) return;

        const schema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: item.answer
                }
            }))
        };

        mount.textContent = JSON.stringify(schema);
    });
}

/* =========================
   REQUEST FORMS
   ========================= */

function renderRequestForms() {
    const config = getConfig();
    const mounts = document.querySelectorAll("[data-request-form]");

    if (!mounts.length) return;

    mounts.forEach((mount) => {
        if (mount.dataset.formRendered === "true") return;

        requestFormCounter += 1;
        mount.dataset.formRendered = "true";
        mount.innerHTML = getRequestFormHtml(config, requestFormCounter);
        initSingleForm(mount.querySelector("form"));
    });

    refreshIcons();
}

function getRequestFormHtml(config, formId) {
    const serviceOptions = (config.forms?.serviceTypes || [])
        .map((type) => `<option value="${escapeHtml(type)}">${escapeHtml(type)}</option>`)
        .join("");

    const nameId = `request-name-${formId}`;
    const phoneId = `request-phone-${formId}`;
    const emailId = `request-email-${formId}`;
    const zipId = `request-zip-${formId}`;
    const serviceId = `request-service-${formId}`;
    const notesId = `request-notes-${formId}`;

    return `
        <div class="form-card">
            <div class="form-card-inner">
                <div>
                    <p class="section-kicker">Request flow</p>
                    <h3>${escapeHtml(config.forms?.requestTitle || "Start request")}</h3>
                    <p class="text-muted">${escapeHtml(config.forms?.requestText || "")}</p>
                </div>

                <form class="request-form" novalidate>
                    <div class="form-grid">
                        <div class="form-field">
                            <label for="${nameId}">Name</label>
                            <div class="input-wrap">
                                <input class="form-control" id="${nameId}" name="name" type="text" autocomplete="name" placeholder="Your name" required>
                                <span class="input-status">${createIcon("check")}</span>
                            </div>
                        </div>

                        <div class="form-field">
                            <label for="${phoneId}">Phone</label>
                            <div class="input-wrap">
                                <input class="form-control" id="${phoneId}" name="phone" type="tel" autocomplete="tel" placeholder="Phone number" required>
                                <span class="input-status">${createIcon("check")}</span>
                            </div>
                        </div>

                        <div class="form-field">
                            <label for="${emailId}">Email</label>
                            <div class="input-wrap">
                                <input class="form-control" id="${emailId}" name="email" type="email" autocomplete="email" placeholder="Email address" required>
                                <span class="input-status">${createIcon("check")}</span>
                            </div>
                        </div>

                        <div class="form-field">
                            <label for="${zipId}">ZIP code</label>
                            <div class="input-wrap">
                                <input class="form-control" id="${zipId}" name="zip" type="text" inputmode="numeric" autocomplete="postal-code" placeholder="ZIP code" required minlength="5">
                                <span class="input-status">${createIcon("check")}</span>
                            </div>
                        </div>

                        <div class="form-field full">
                            <label for="${serviceId}">Service type</label>
                            <div class="select-wrap">
                                <select class="form-control" id="${serviceId}" name="service" required>
                                    <option value="">Choose service type</option>
                                    ${serviceOptions}
                                </select>
                            </div>
                        </div>

                        <div class="form-field full">
                            <label for="${notesId}">Project notes</label>
                            <div class="textarea-wrap">
                                <textarea class="form-control" id="${notesId}" name="notes" placeholder="Describe the HVAC issue, timing, system notes, or provider preferences." required></textarea>
                            </div>
                        </div>
                    </div>

                    <div class="form-message" data-form-message role="status" aria-live="polite"></div>

                    <button class="btn btn-primary" type="submit">
                        <span>${escapeHtml(config.forms?.submitLabel || "Submit request")}</span>
                        ${createIcon("arrow-right")}
                    </button>

                    <p class="form-disclaimer">${escapeHtml(config.disclaimer || "")}</p>
                </form>
            </div>
        </div>
    `;
}

function initSingleForm(form) {
    const config = getConfig();

    if (!form || form.dataset.formReady === "true") return;

    form.dataset.formReady = "true";

    const fields = Array.from(form.querySelectorAll(".form-control"));
    const message = form.querySelector("[data-form-message]");

    fields.forEach((field) => {
        field.addEventListener("input", () => {
            updateFieldState(field);
        });

        field.addEventListener("blur", () => {
            updateFieldState(field);
        });

        field.addEventListener("change", () => {
            updateFieldState(field);
        });
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        let isValid = true;

        fields.forEach((field) => {
            const fieldValid = updateFieldState(field);

            if (!fieldValid) {
                isValid = false;
            }
        });

        if (!message) return;

        message.classList.add("is-visible");

        if (!isValid) {
            message.classList.add("error");
            message.textContent = config.forms?.errorMessage || "Please complete the required fields.";
            return;
        }

        message.classList.remove("error");
        message.textContent =
            config.forms?.successMessage ||
            "Your request has been prepared. A local provider option may follow up depending on availability.";

        form.reset();

        fields.forEach((field) => {
            field.classList.remove("is-valid", "is-invalid");
        });
    });
}

function updateFieldState(field) {
    const value = field.value.trim();
    let isValid = field.checkValidity();

    if (field.name === "zip") {
        isValid = /^\d{5}(-\d{4})?$/.test(value);
    }

    if (!value) {
        field.classList.remove("is-valid", "is-invalid");
        return false;
    }

    field.classList.toggle("is-valid", isValid);
    field.classList.toggle("is-invalid", !isValid);

    return isValid;
}

/* =========================
   MAP CARD
   ========================= */

function renderMapCards() {
    const config = getConfig();
    const mounts = document.querySelectorAll("[data-map-card]");

    if (!mounts.length) return;

    mounts.forEach((mount) => {
        if (mount.dataset.mapRendered === "true") return;

        mount.dataset.mapRendered = "true";

        mount.innerHTML = `
            <div class="map-card">
                <div class="map-card-top">
                    <p class="section-kicker">${escapeHtml(config.mapCard?.eyebrow || "Address")}</p>
                    <h3>${escapeHtml(config.mapCard?.title || config.companyName)}</h3>
                    <p>${escapeHtml(config.mapCard?.text || "")}</p>
                </div>

                <div class="map-visual" aria-label="${escapeHtml(config.mapCard?.regionLabel || "Map visual")}">
                    <div class="map-grid"></div>
                    <div class="map-route route-one"></div>
                    <div class="map-route route-two"></div>

                    <div class="map-pin main-pin">
                        ${createIcon("map-pin")}
                    </div>

                    <div class="map-dot dot-one"></div>
                    <div class="map-dot dot-two"></div>
                    <div class="map-dot dot-three"></div>

                    <span class="map-label">${escapeHtml(config.mapCard?.regionLabel || "")}</span>
                </div>

                <div class="map-card-bottom">
                    <span>${createIcon("building-2")}</span>
                    <p>${escapeHtml(config.mapCard?.address || config.address?.full || "")}</p>
                </div>
            </div>
        `;
    });
}

/* =========================
   POLICY BANNER
   ========================= */

function renderPolicyBanner() {
    const config = getConfig();
    const bannerConfig = config.cookieBanner;

    if (!bannerConfig) return;

    const storedChoice = localStorage.getItem(bannerConfig.storageKey);

    if (storedChoice) return;

    if (document.querySelector("[data-policy-banner]")) return;

    const banner = document.createElement("div");
    banner.className = "policy-banner is-visible";
    banner.setAttribute("data-policy-banner", "");
    banner.setAttribute("role", "region");
    banner.setAttribute("aria-label", "Privacy preferences");

    const linksHtml = (bannerConfig.links || [])
        .map((link) => `<a href="${escapeHtml(link.href)}">${escapeHtml(link.label)}</a>`)
        .join("");

    banner.innerHTML = `
        <div class="policy-banner-card">
            <div class="policy-banner-content">
                <strong class="policy-banner-title">${escapeHtml(bannerConfig.title || "Privacy preferences")}</strong>
                <p class="policy-banner-text">${escapeHtml(bannerConfig.text || "")}</p>
                <div class="policy-banner-links">
                    ${linksHtml}
                </div>
            </div>

            <div class="policy-banner-actions">
                <button class="btn btn-secondary" type="button" data-policy-decline>
                    ${escapeHtml(bannerConfig.decline || "Decline")}
                </button>

                <button class="btn btn-primary" type="button" data-policy-accept>
                    ${escapeHtml(bannerConfig.accept || "Accept")}
                </button>
            </div>
        </div>
    `;

    document.body.appendChild(banner);

    banner.querySelector("[data-policy-accept]")?.addEventListener("click", () => {
        localStorage.setItem(bannerConfig.storageKey, "accepted");
        banner.remove();
    });

    banner.querySelector("[data-policy-decline]")?.addEventListener("click", () => {
        localStorage.setItem(bannerConfig.storageKey, "declined");
        banner.remove();
    });
}

/* =========================
   REVEAL ANIMATIONS
   ========================= */

function initRevealAnimations() {
    const elements = document.querySelectorAll(".reveal-up:not(.is-visible)");

    if (!elements.length) return;

    if (!("IntersectionObserver" in window)) {
        elements.forEach((element) => element.classList.add("is-visible"));
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            });
        },
        {
            threshold: 0.14,
            rootMargin: "0px 0px -40px 0px"
        }
    );

    elements.forEach((element) => observer.observe(element));
}