"use strict";


const companyName = "AirConnect";

window.SITE_CONFIG = {
    companyName,

    companyId: "ARC-HVAC-4827",

    brand: {
        shortName: companyName,
        tagline: "Compare independent HVAC provider options with a cleaner request flow.",
        shortTagline: "HVAC provider matching",
        logoLabel: `${companyName} HVAC provider matching platform`
    },

    phone: "+1 888 614 2096",
    phoneHref: "+18886142096",
    phoneLabel: "Compare HVAC Providers",

    email: "hello@airconnectmatch.com",

    address: {
        line1: "401 Congress Avenue",
        city: "Austin",
        state: "TX",
        zip: "78701",
        country: "USA",
        full: "401 Congress Avenue, Austin, TX 78701, USA"
    },

    serviceArea: "Independent HVAC provider matching across the United States",

    footerText:
        `${companyName} is an independent HVAC provider matching platform that helps homeowners compare local provider options for AC repair, cooling installation, heating repair, ventilation, and related HVAC requests.`,

    disclaimer:
        `${companyName} is an independent HVAC provider matching platform. ${companyName} does not perform heating, cooling, ventilation, repair, installation, or maintenance work directly. All providers are independent. Homeowners should verify licensing, insurance, quotes, warranties, timelines, and service details before hiring any provider.`,

    legalNotice:
        "Provider availability, pricing, licensing, insurance, warranties, response times, and service details vary by location and provider. Submitting a request does not guarantee provider availability or a specific quote.",

    navigation: [
        {
            label: "Home",
            href: "index.html"
        },
        {
            label: "Services",
            href: "services.html"
        },
        {
            label: "About",
            href: "about.html"
        },
        {
            label: "Contact",
            href: "contact.html"
        }
    ],

    legalLinks: [
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
    ],

    services: [
        {
            id: "ac-repair",
            title: "AC Repair & Cooling",
            shortTitle: "AC Repair",
            href: "ac-repair.html",
            icon: "snowflake",
            accent: "cool",
            label: "Cooling support",
            image: "./assets/images/services/ac-repair.jpg",
            heroImage: "./assets/images/service-pages/ac-repair-hero.jpg",
            summary:
                "Compare independent local provider options for AC repair, cooling concerns, airflow issues, and related system checks.",
            cardText:
                "Start a structured AC request and review local provider options before choosing who to contact.",
            heroTitle:
                "Compare AC repair provider options with clearer project details.",
            heroText:
                "Use AirConnect to organize cooling issues, ZIP code context, and service preferences before comparing independent local provider options.",
            pageKicker: "AC repair matching",
            pageIntro:
                "Cooling issues can vary by system age, property layout, timing, and provider availability. AirConnect helps homeowners start with a clearer request so they can compare independent HVAC provider options more confidently.",
            evaluationPoints: [
                "Describe cooling symptoms, system age, and urgency.",
                "Compare provider availability by service area.",
                "Review quote scope, diagnostic fees, and warranty details.",
                "Verify licensing, insurance, reviews, and service terms before hiring."
            ],
            faq: [
                {
                    question: "Does AirConnect repair AC systems directly?",
                    answer:
                        "No. AirConnect is not an HVAC contractor and does not perform AC repair work. The platform helps homeowners compare independent local provider options."
                },
                {
                    question: "Can I request help for urgent cooling issues?",
                    answer:
                        "You can describe the urgency in the request form. Provider response times and emergency availability vary by location and provider."
                }
            ]
        },

        {
            id: "cooling-installation",
            title: "Cooling Installation",
            shortTitle: "Cooling Installation",
            href: "cooling-installation.html",
            icon: "fan",
            accent: "cool",
            label: "System options",
            image: "./assets/images/services/cooling-installation.jpg",
            heroImage: "./assets/images/service-pages/cooling-installation-hero.jpg",
            summary:
                "Explore local provider options for cooling installation, replacement planning, and system quote comparison.",
            cardText:
                "Compare cooling installation options, project scope, timing, and quote details from independent providers.",
            heroTitle:
                "Find cooling installation provider options for your home.",
            heroText:
                "AirConnect helps homeowners organize installation needs and compare independent local HVAC provider options before moving forward.",
            pageKicker: "Cooling installation matching",
            pageIntro:
                "A cooling installation request may involve system sizing, property layout, efficiency preferences, quote details, and warranty terms. AirConnect helps structure the request so homeowners know what to compare.",
            evaluationPoints: [
                "Compare quote details and included equipment scope.",
                "Ask about system sizing, efficiency ratings, and project timeline.",
                "Review warranty terms and maintenance expectations.",
                "Verify provider credentials, insurance, and local licensing."
            ],
            faq: [
                {
                    question: "Does AirConnect install cooling systems?",
                    answer:
                        "No. AirConnect does not install HVAC equipment. Homeowners can use the platform to compare independent provider options."
                },
                {
                    question: "Can I compare more than one installation quote?",
                    answer:
                        "The platform is designed to help users organize requests and compare provider options. Quote availability depends on local providers."
                }
            ]
        },

        {
            id: "heating-repair",
            title: "Heating Repair",
            shortTitle: "Heating Repair",
            href: "heating-repair.html",
            icon: "flame",
            accent: "warm",
            label: "Heating support",
            image: "./assets/images/services/heating-repair.jpg",
            heroImage: "./assets/images/service-pages/heating-repair-hero.jpg",
            summary:
                "Compare provider options for heating repair, furnace service, inconsistent heat, and cold-weather system concerns.",
            cardText:
                "Prepare a heating request and compare independent local HVAC provider options before choosing.",
            heroTitle:
                "Compare heating repair provider options without direct-service claims.",
            heroText:
                "AirConnect helps homeowners describe heating concerns, timing, and property context before reviewing independent provider options.",
            pageKicker: "Heating repair matching",
            pageIntro:
                "Heating issues can involve comfort, safety, energy use, system age, and scheduling urgency. AirConnect helps homeowners organize the details needed to compare provider options.",
            evaluationPoints: [
                "Note whether heating is inconsistent, noisy, delayed, or unavailable.",
                "Compare response timing and service area availability.",
                "Review diagnostic fees, repair scope, and warranty terms.",
                "Verify licensing, insurance, reviews, and provider experience."
            ],
            faq: [
                {
                    question: "Does AirConnect provide furnace repair?",
                    answer:
                        "No. AirConnect does not repair furnaces or heating systems directly. It helps users compare independent local provider options."
                },
                {
                    question: "Can I mention emergency heating concerns?",
                    answer:
                        "Yes. You can include urgency in the request notes. Availability and response times vary by provider and location."
                }
            ]
        },

        {
            id: "ventilation",
            title: "Ventilation",
            shortTitle: "Ventilation",
            href: "ventilation.html",
            icon: "wind",
            accent: "cool",
            label: "Airflow planning",
            image: "./assets/images/services/ventilation.jpg",
            heroImage: "./assets/images/service-pages/ventilation-hero.jpg",
            summary:
                "Explore provider options for ventilation concerns, airflow balance, duct-related requests, and comfort improvements.",
            cardText:
                "Compare ventilation provider options based on home layout, airflow notes, timing, and service area.",
            heroTitle:
                "Start a clearer ventilation provider matching request.",
            heroText:
                "AirConnect helps homeowners organize ventilation concerns and compare independent local HVAC provider options.",
            pageKicker: "Ventilation matching",
            pageIntro:
                "Ventilation requests may involve airflow comfort, duct layout, stale air, humidity, or indoor air movement. A structured request can make provider conversations easier.",
            evaluationPoints: [
                "Describe rooms with weak airflow, stale air, or comfort concerns.",
                "Mention property type, system age, and known duct issues.",
                "Compare provider experience with ventilation and airflow requests.",
                "Review quote scope, timing, and warranty details."
            ],
            faq: [
                {
                    question: "Is AirConnect a ventilation contractor?",
                    answer:
                        "No. AirConnect is an independent provider matching platform and does not perform ventilation work directly."
                },
                {
                    question: "Can I include duct or airflow notes?",
                    answer:
                        "Yes. Project notes can help organize details before speaking with independent providers."
                }
            ]
        }
    ],

    home: {
        hero: {
            eyebrow: "Independent HVAC provider matching",
            title: "Compare HVAC providers for cleaner comfort.",
            text:
                "AirConnect helps homeowners start a structured HVAC request and compare independent local provider options for cooling, heating, ventilation, maintenance, and indoor air quality projects.",
            primaryCta: "Start request",
            secondaryCta: "View services",
            trustText: "Independent HVAC provider matching across the U.S."
        },

        introStrip: [
            {
                icon: "clipboard-check",
                label: "Step one",
                title: "Describe your HVAC need"
            },
            {
                icon: "map-pin",
                label: "Local context",
                title: "Match by service area"
            },
            {
                icon: "shield-check",
                label: "Provider options",
                title: "Compare before choosing"
            },
            {
                icon: "phone",
                label: "Next step",
                title: "Continue with quotes"
            }
        ],

        process: [
            {
                number: "1",
                tone: "lime",
                icon: "clipboard-check",
                title: "Tell us what you need",
                text: "Share your service type, ZIP code, timing, and project notes."
            },
            {
                number: "2",
                tone: "cool",
                icon: "scan-search",
                title: "Get matched with provider options",
                text: "Review independent local HVAC provider options where available."
            },
            {
                number: "3",
                tone: "warm",
                icon: "badge-check",
                title: "Compare details before choosing",
                text: "Check quotes, credentials, reviews, timing, and warranties."
            }
        ],

        comparisonPoints: [
            "Licensing and insurance",
            "Quote details and diagnostic fees",
            "Service timing and availability",
            "Warranty terms",
            "Reviews and experience",
            "Emergency availability"
        ],

        whyCards: [
            {
                icon: "workflow",
                title: "Structured request flow",
                text: "Organize the HVAC details providers usually need before follow-up."
            },
            {
                icon: "users",
                title: "Independent provider options",
                text: "Compare local provider options instead of relying on a single path."
            },
            {
                icon: "shield-check",
                title: "No direct-service claims",
                text: "AirConnect is a matching platform, not an HVAC contractor."
            },
            {
                icon: "list-checks",
                title: "Clear comparison reminders",
                text: "Review credentials, quotes, timelines, warranties, and service terms."
            }
        ],

        reviews: [
            {
                rating: "★★★★★",
                quote: "The request flow made it easier to compare HVAC options without starting from scratch.",
                name: "Jessica M.",
                location: "Austin, TX"
            },
            {
                rating: "★★★★★",
                quote: "I liked having the service type and project notes organized before speaking with providers.",
                name: "Mark T.",
                location: "Denver, CO"
            },
            {
                rating: "★★★★★",
                quote: "The platform helped me think through quotes, timing, and provider details more clearly.",
                name: "Sarah L.",
                location: "Nashville, TN"
            }
        ]
    },

    forms: {
        requestTitle: "Start your HVAC provider matching request",
        requestText:
            "Share a few details so your request is easier to review. Provider availability may vary by location.",
        submitLabel: "Prepare request",
        successMessage:
            "Your request has been prepared. A local provider option may follow up depending on availability.",
        errorMessage:
            "Please complete the required fields before submitting your request.",
        serviceTypes: [
            "AC repair",
            "Cooling installation",
            "Heating repair",
            "Ventilation",
            "Not sure yet"
        ]
    },

    faq: [
        {
            question: "Is AirConnect an HVAC contractor?",
            answer:
                "No. AirConnect is an independent HVAC provider matching platform. AirConnect does not perform heating, cooling, ventilation, repair, installation, or maintenance work directly."
        },
        {
            question: "Can I compare HVAC provider options?",
            answer:
                "Yes. AirConnect helps homeowners start a structured request and compare independent local provider options where available."
        },
        {
            question: "Should I verify provider credentials?",
            answer:
                "Yes. Homeowners should verify licensing, insurance, reviews, quote details, warranty terms, timelines, and service scope before hiring any provider."
        },
        {
            question: "Does submitting a request guarantee service?",
            answer:
                "No. Provider availability, pricing, response times, and service details vary by location and provider."
        }
    ],

    cookieBanner: {
        storageKey: "airconnect_policy_choice",
        title: "Privacy preferences",
        text:
            "AirConnect uses basic site functionality and may use cookies or similar technologies to improve the browsing experience. Please review our policies before continuing.",
        accept: "Accept",
        decline: "Decline",
        links: [
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
        ]
    },

    mapCard: {
        eyebrow: "Platform address",
        title: "AirConnect request hub",
        text:
            "A central business address is shown for platform contact context. Service availability depends on independent local providers.",
        address: "401 Congress Avenue, Austin, TX 78701, USA",
        regionLabel: "U.S. provider matching coverage"
    },

    pageMeta: {
        "index.html": {
            title: `${companyName} | Compare HVAC Provider Options`,
            description:
                "AirConnect helps homeowners compare independent local HVAC provider options for AC repair, cooling installation, heating repair, ventilation, and related HVAC requests."
        },

        "services.html": {
            title: `HVAC Services | ${companyName}`,
            description:
                "Explore HVAC provider matching categories including AC repair, cooling installation, heating repair, and ventilation provider options."
        },

        "about.html": {
            title: `About ${companyName} | Independent HVAC Provider Matching`,
            description:
                "Learn how AirConnect helps homeowners start structured HVAC requests and compare independent local provider options before choosing."
        },

        "contact.html": {
            title: `Contact ${companyName} | Start an HVAC Matching Request`,
            description:
                "Contact AirConnect to start a structured HVAC provider matching request for AC repair, cooling installation, heating repair, ventilation, or related HVAC needs."
        },

        "ac-repair.html": {
            title: `AC Repair Provider Matching | ${companyName}`,
            description:
                "Compare independent local provider options for AC repair, cooling issues, airflow concerns, and related HVAC requests."
        },

        "cooling-installation.html": {
            title: `Cooling Installation Provider Matching | ${companyName}`,
            description:
                "Start a structured cooling installation request and compare independent local HVAC provider options before choosing."
        },

        "heating-repair.html": {
            title: `Heating Repair Provider Matching | ${companyName}`,
            description:
                "Compare independent local provider options for heating repair, furnace service, and cold-weather HVAC concerns."
        },

        "ventilation.html": {
            title: `Ventilation Provider Matching | ${companyName}`,
            description:
                "Explore independent local HVAC provider options for ventilation, airflow, duct-related concerns, and comfort projects."
        },

        "privacy-policy.html": {
            title: `Privacy Policy | ${companyName}`,
            description:
                "Read the AirConnect Privacy Policy for information about how the platform handles user-submitted information."
        },

        "cookie-policy.html": {
            title: `Cookie Policy | ${companyName}`,
            description:
                "Read the AirConnect Cookie Policy for information about cookies and similar technologies."
        },

        "terms-of-service.html": {
            title: `Terms of Service | ${companyName}`,
            description:
                "Read the AirConnect Terms of Service for use of the independent HVAC provider matching platform."
        }
    }
};

/* ==========================================================
   SMALL CONFIG HELPERS
   ========================================================== */

window.AIRCONNECT = {
    getCurrentPageName() {
        const path = window.location.pathname;
        const filename = path.substring(path.lastIndexOf("/") + 1);
        return filename || "index.html";
    },

    getServiceById(serviceId) {
        return window.SITE_CONFIG.services.find((service) => service.id === serviceId);
    },

    getServiceByHref(href) {
        return window.SITE_CONFIG.services.find((service) => service.href === href);
    },

    getCurrentService() {
        const currentPage = this.getCurrentPageName();
        return this.getServiceByHref(currentPage);
    }
};