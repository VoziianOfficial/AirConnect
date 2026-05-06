"use strict";






document.addEventListener("DOMContentLoaded", () => {
    renderLegalPage();
});





const LEGAL_PAGES = {
    "privacy-policy.html": {
        eyebrow: "Privacy Policy",
        title: "Privacy Policy",
        accent: "How AirConnect handles request information.",
        updated: "Last updated: May 5, 2026",
        intro:
            "This Privacy Policy explains how AirConnect may collect, use, and handle information submitted through this independent HVAC provider matching platform.",
        notice:
            "AirConnect is not an HVAC contractor and does not perform heating, cooling, ventilation, repair, installation, or maintenance work directly.",
        sections: [
            {
                title: "1. Information we may collect",
                paragraphs: [
                    "When you use the request form, AirConnect may collect information you choose to provide, such as your name, phone number, email address, ZIP code, selected HVAC service type, and project notes.",
                    "The site may also process basic technical information such as browser type, device information, pages visited, and general interaction data for functionality, security, and performance purposes."
                ]
            },
            {
                title: "2. How information may be used",
                items: [
                    "To prepare or process a homeowner HVAC provider matching request.",
                    "To help connect a request with independent local provider options where available.",
                    "To respond to contact requests or platform inquiries.",
                    "To maintain, troubleshoot, and improve the website experience.",
                    "To comply with applicable legal, security, or operational requirements."
                ]
            },
            {
                title: "3. Independent provider context",
                paragraphs: [
                    "AirConnect may help homeowners compare independent local provider options. Providers are not employees of AirConnect and may have their own privacy practices, terms, pricing, availability, and service policies.",
                    "Before hiring any provider, homeowners should verify licensing, insurance, reviews, quote details, warranty terms, timelines, and service scope."
                ]
            },
            {
                title: "4. Sharing of information",
                paragraphs: [
                    "Information submitted through the platform may be shared with service providers, matching partners, technology vendors, or operational partners as needed to support the request flow.",
                    "AirConnect does not represent that submitting a request guarantees a provider response, specific pricing, service availability, or a completed HVAC project."
                ]
            },
            {
                title: "5. Data security",
                paragraphs: [
                    "AirConnect uses reasonable organizational and technical measures intended to protect information. However, no website, transmission method, or storage system can be guaranteed to be completely secure."
                ]
            },
            {
                title: "6. Your choices",
                paragraphs: [
                    "You may choose not to submit a request form. You may also contact AirConnect using the email address listed on the site for privacy-related questions."
                ]
            },
            {
                title: "7. Contact",
                paragraphs: [
                    "For privacy questions, contact AirConnect using the contact details listed on the website footer or contact page."
                ]
            }
        ]
    },

    "cookie-policy.html": {
        eyebrow: "Cookie Policy",
        title: "Cookie Policy",
        accent: "How cookies and preferences may be used.",
        updated: "Last updated: May 5, 2026",
        intro:
            "This Cookie Policy explains how AirConnect may use cookies, local storage, and similar technologies on this HVAC provider matching website.",
        notice:
            "The policy banner stores a simple preference choice so the banner does not keep appearing after a user accepts or declines.",
        sections: [
            {
                title: "1. What cookies and similar technologies are",
                paragraphs: [
                    "Cookies are small files or browser-based storage methods that may help a website remember preferences, support functionality, understand usage, or improve the browsing experience.",
                    "This site may also use local storage for simple preference settings such as policy banner choices."
                ]
            },
            {
                title: "2. Types of technologies this site may use",
                items: [
                    "Essential functionality technologies needed for site operation.",
                    "Preference storage, such as remembering whether the policy banner was accepted or declined.",
                    "Basic analytics or performance technologies if added to the website in the future.",
                    "Security or spam-prevention technologies if added to request forms or platform workflows."
                ]
            },
            {
                title: "3. Policy banner preference",
                paragraphs: [
                    "When a user accepts or declines the policy banner, the choice may be stored in the browser so the banner does not keep appearing during later visits.",
                    "Clearing browser data or local storage may reset this preference."
                ]
            },
            {
                title: "4. Third-party services",
                paragraphs: [
                    "Some website features, fonts, icons, analytics, hosting, or platform tools may be provided by third parties. Those third parties may use their own cookies or similar technologies according to their own policies."
                ]
            },
            {
                title: "5. Managing cookies",
                paragraphs: [
                    "Most browsers allow users to block, delete, or manage cookies and storage preferences. Blocking certain technologies may affect website functionality or saved preferences."
                ]
            },
            {
                title: "6. Updates",
                paragraphs: [
                    "AirConnect may update this Cookie Policy from time to time to reflect changes in website functionality, technology, or legal requirements."
                ]
            }
        ]
    },

    "terms-of-service.html": {
        eyebrow: "Terms of Service",
        title: "Terms of Service",
        accent: "Rules for using the AirConnect platform.",
        updated: "Last updated: May 5, 2026",
        intro:
            "These Terms of Service describe the terms for using AirConnect, an independent HVAC provider matching platform.",
        notice:
            "AirConnect does not perform HVAC work directly. All HVAC providers are independent, and homeowners are responsible for verifying provider details before hiring.",
        sections: [
            {
                title: "1. Platform role",
                paragraphs: [
                    "AirConnect is an independent HVAC provider matching platform. AirConnect does not perform heating, cooling, ventilation, repair, installation, maintenance, inspection, diagnostic, or contractor services directly.",
                    "The platform may help homeowners prepare a request and compare independent local provider options where available."
                ]
            },
            {
                title: "2. No guarantee of service",
                items: [
                    "Submitting a request does not guarantee that a provider will respond.",
                    "Submitting a request does not guarantee pricing, availability, timelines, or service quality.",
                    "AirConnect does not guarantee that any provider is suitable for a specific project.",
                    "Provider availability may vary by ZIP code, service category, timing, and provider capacity."
                ]
            },
            {
                title: "3. Independent providers",
                paragraphs: [
                    "Providers are independent businesses or contractors and are not employees, agents, or representatives of AirConnect.",
                    "Any agreement for HVAC work is between the homeowner and the selected provider. AirConnect is not responsible for provider work, pricing, warranties, timelines, permits, materials, inspections, or service outcomes."
                ]
            },
            {
                title: "4. Homeowner responsibility",
                items: [
                    "Verify licensing, bonding, insurance, and local qualifications.",
                    "Review quotes, diagnostic fees, included scope, exclusions, and payment terms.",
                    "Ask about permits, warranties, timelines, equipment, materials, and service details.",
                    "Check reviews, references, and provider experience before hiring.",
                    "Make the final hiring decision independently."
                ]
            },
            {
                title: "5. Website use",
                paragraphs: [
                    "Users agree not to misuse the website, submit false information, interfere with site operation, attempt unauthorized access, or use the platform for unlawful purposes.",
                    "AirConnect may update, limit, suspend, or discontinue website features at any time."
                ]
            },
            {
                title: "6. Limitation of liability",
                paragraphs: [
                    "To the maximum extent permitted by law, AirConnect is not liable for damages related to provider services, provider communications, project outcomes, delays, quotes, warranties, or independent hiring decisions.",
                    "The website is provided on an as-available basis without guarantees that all features will be uninterrupted, error-free, or suitable for every user need."
                ]
            },
            {
                title: "7. Updates to these terms",
                paragraphs: [
                    "AirConnect may update these Terms of Service from time to time. Continued use of the website after updates means the user accepts the updated terms."
                ]
            },
            {
                title: "8. Contact",
                paragraphs: [
                    "For questions about these terms, contact AirConnect using the contact details listed on the website."
                ]
            }
        ]
    }
};

function deepReplaceString(value, searchValue, replacement) {
    if (typeof value === "string") {
        return value.split(searchValue).join(replacement);
    }

    if (Array.isArray(value)) {
        return value.map((item) => deepReplaceString(item, searchValue, replacement));
    }

    if (value && typeof value === "object") {
        const next = {};

        Object.keys(value).forEach((key) => {
            next[key] = deepReplaceString(value[key], searchValue, replacement);
        });

        return next;
    }

    return value;
}





function renderLegalPage() {
    const config = window.SITE_CONFIG || {};
    const mount = document.querySelector("[data-legal-page]");

    if (!mount) return;

    const currentPage = getLegalCurrentPageName();
    const companyName = config.companyName || "AirConnect";
    const pages = deepReplaceString(LEGAL_PAGES, "AirConnect", companyName);
    const page = pages[currentPage] || pages["privacy-policy.html"];

    mount.innerHTML = `
        <section class="legal-hero" aria-labelledby="legalHeroTitle">
            <div class="container-wide">
                <div class="legal-hero-inner reveal-up">
                    <div>
                        <p class="eyebrow">${escapeLegalHtml(page.eyebrow)}</p>
                        <h1 id="legalHeroTitle">
                            ${escapeLegalHtml(page.title)} <span>${escapeLegalHtml(companyName)}</span>
                        </h1>
                    </div>

                    <p class="lead">
                        ${escapeLegalHtml(page.intro)}
                    </p>

                    <div class="legal-meta-row">
                        <span class="legal-meta-chip">
                            <i data-lucide="calendar" aria-hidden="true"></i>
                            ${escapeLegalHtml(page.updated)}
                        </span>

                        <span class="legal-meta-chip">
                            <i data-lucide="shield-check" aria-hidden="true"></i>
                            Independent platform
                        </span>
                    </div>
                </div>
            </div>
        </section>

        <section class="legal-section section">
            <div class="container-wide">
                <div class="legal-layout">
                    <aside class="legal-sidebar reveal-up">
                        <div class="legal-nav-card">
                            <h2>Legal pages</h2>
                            <nav class="legal-nav-list" aria-label="Legal navigation">
                                ${getLegalLinksHtml(currentPage, config)}
                            </nav>
                        </div>

                        <div class="legal-contact-card">
                            <h2>Contact</h2>
                            <p>
                                Questions about this policy can be sent through the platform contact details.
                            </p>

                            <a class="legal-contact-link" href="mailto:${escapeLegalHtml(config.email || "")}">
                                <i data-lucide="mail" aria-hidden="true"></i>
                                ${escapeLegalHtml(config.email || "Contact email")}
                            </a>
                        </div>
                    </aside>

                    <article class="legal-content-card reveal-up">
                        <div class="legal-notice-box">
                            <strong>Platform notice</strong>
                            <p>${escapeLegalHtml(page.notice)}</p>
                        </div>

                        <div class="legal-content">
                            ${getLegalSectionsHtml(page.sections)}
                        </div>
                    </article>
                </div>
            </div>
        </section>

  <section class="legal-cta legal-final-ribbon final-ribbon section-sm" aria-labelledby="legalCtaTitle">
    <div class="container-wide">
        <div class="legal-final-ribbon-card reveal-up">
            <div class="legal-final-ribbon-content">
                <p class="section-kicker">Back to ${escapeLegalHtml(companyName)}</p>

                <h2 id="legalCtaTitle">
                    Start a structured HVAC provider matching request.
                </h2>

                <p class="lead">
                    Compare independent local provider options for AC repair, cooling installation, heating repair,
                    and ventilation projects.
                </p>

                <div class="legal-final-ribbon-actions">
                    <a class="btn btn-primary legal-final-ribbon-btn" href="contact.html">
                        <span>Start request</span>
                        <i data-lucide="arrow-right" aria-hidden="true"></i>
                    </a>

                    <a class="legal-final-ribbon-phone" href="tel:${escapeLegalHtml(config.phoneHref || config.phone || "")}" data-phone-link>
                        <i data-lucide="phone" aria-hidden="true"></i>
                        <span data-phone-text>${escapeLegalHtml(config.phoneLabel || config.phone || "Compare HVAC options")}</span>
                    </a>
                </div>

                <p class="legal-final-ribbon-disclaimer" data-disclaimer>
                    ${escapeLegalHtml(config.disclaimer || "")}
                </p>
            </div>
        </div>
    </div>
</section>
    `;

    refreshLegalPage();
}





function getLegalLinksHtml(currentPage, config) {
    const links = Array.isArray(config?.legalLinks) && config.legalLinks.length
        ? config.legalLinks
        : [
              {
                  label: "Privacy Policy",
                  href: "privacy-policy.html"
              },
              {
                  label: "Cookie Policy",
                  href: "cookie-policy.html"
              },
              {
                  label: "Terms of Service",
                  href: "terms-of-service.html"
              }
          ];

    return links
        .map((link) => {
            const activeClass = link.href === currentPage ? "is-active" : "";

            return `
                <a class="${activeClass}" href="${escapeLegalHtml(link.href)}">
                    <span>${escapeLegalHtml(link.label)}</span>
                    <i data-lucide="arrow-up-right" aria-hidden="true"></i>
                </a>
            `;
        })
        .join("");
}

function getLegalSectionsHtml(sections) {
    return (sections || [])
        .map((section) => {
            const paragraphs = (section.paragraphs || [])
                .map((paragraph) => `<p>${escapeLegalHtml(paragraph)}</p>`)
                .join("");

            const items = (section.items || [])
                .map((item) => `<li>${escapeLegalHtml(item)}</li>`)
                .join("");

            return `
                <section class="legal-block">
                    <h2>${escapeLegalHtml(section.title)}</h2>
                    ${paragraphs}
                    ${items ? `<ul>${items}</ul>` : ""}
                </section>
            `;
        })
        .join("");
}

function getLegalCurrentPageName() {
    const path = window.location.pathname;
    const filename = path.substring(path.lastIndexOf("/") + 1);

    return filename || "privacy-policy.html";
}

function escapeLegalHtml(value) {
    return String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function refreshLegalPage() {
    if (typeof injectConfigValues === "function") {
        injectConfigValues();
    }

    if (typeof initRevealAnimations === "function") {
        initRevealAnimations();
    }

    if (typeof refreshIcons === "function") {
        refreshIcons();
    }
}
