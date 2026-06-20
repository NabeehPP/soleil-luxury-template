// ─── DYNAMIC NICHE DATA SYSTEM ───
const nicheData = {
  hotel: {
    name: "Maison Soleil",
    tagline: "Boutique Hotel & Spa",
    eyebrow: "★ Boutique Hotel & Spa",
    headline: "Where Luxury<br>Meets Serenity",
    subheadline: "An intimate collection of 24 suites, each a world unto itself. Experience Mediterranean luxury with personalized, digital-first hospitality.",
    primaryCta: "Book Your Stay",
    secondaryCta: "Explore Rooms",
    heroImage: "assets/hotel_hero.png",
    storyImgLarge: "assets/hotel_hero.png",
    storyImgSmall1: "assets/restaurant_hero.png",
    storyImgSmall2: "assets/cafe_hero.png",
    
    // Story Section
    storyEyebrow: "OUR STORY",
    storyHeadline: "A sanctuary built on craft and intention",
    storyText1: "Founded in 2010 by architect Élodie Marais, Maison Soleil grew from a singular vision: to create a space where luxury felt intimate rather than impersonal. Every material was chosen by hand, every surface considered at length.",
    storyText2: "Today, we remain a family-owned property with deep roots in the local community. Our team has been with us an average of seven years — and that continuity shows in every interaction.",
    storyBadge: "14+ Years of Excellence",
    stats: [
      { value: "4,800+", label: "Happy Guests" },
      { value: "98%", label: "Satisfaction Rate" },
      { value: "12", label: "Industry Awards" }
    ],
    
    // Services Section
    servicesTitle: "Curated Guest Experiences",
    servicesSubtitle: "We design every detail of your stay to offer absolute relaxation, modern convenience, and unforgettable memories.",
    services: [
      {
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>`,
        title: "Concierge App",
        desc: "A touch-button mobile app to manage keyless room entry, request dining services, or book custom local excursions.",
        tags: ["Digital-First", "Keyless Entry", "24/7 Support"]
      },
      {
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 6V12L16 14"></path></svg>`,
        title: "Thermal Wellness Spa",
        desc: "Access our exclusive heated saltwater pool, dry sauna, and customized aromatherapy massage sessions.",
        tags: ["Infinity Pool", "Saltwater Spa", "Massages"]
      },
      {
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line><line x1="15" y1="3" x2="15" y2="21"></line><line x1="3" y1="9" x2="21" y2="9"></line><line x1="3" y1="15" x2="21" y2="15"></line></svg>`,
        title: "Private Airport Shuttle",
        desc: "Complimentary Tesla transport from the terminal directly to your private suite corridor, with luggage handling.",
        tags: ["Tesla Fleet", "Complimentary", "Zero Stress"]
      },
      {
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>`,
        title: "Bespoke Breakfast",
        desc: "Each morning, a fresh organic French-Mediterranean breakfast is delivered directly to your terrace garden.",
        tags: ["Organic Food", "In-Room Dining", "Artisanal"]
      }
    ],
    
    // Featured Offerings (Rooms)
    offeringsTitle: "Signature Sanctuary Suites",
    offeringsSubtitle: "Explore our collection of bespoke architectural spaces designed for tranquility and luxury.",
    offerings: [
      {
        title: "The Alabaster Suite",
        desc: "An architectural masterpiece with micro-cement finishes, a private plunge pool, and panoramic garden views.",
        price: "₹18,500 / night",
        tag: "Plunge Pool",
        image: "assets/hotel_hero.png"
      },
      {
        title: "Ocean Infinity Suite",
        desc: "Suspended over the cliff edge, featuring full-height glass walls, private terrace, and open sky rain shower.",
        price: "₹24,000 / night",
        tag: "Ocean View",
        image: "assets/hotel_hero.png"
      },
      {
        title: "The Terracotta Loft",
        desc: "Split-level luxury with a fireplace, hand-sourced Italian antiques, and a premium copper soaking tub.",
        price: "₹15,000 / night",
        tag: "Historic Details",
        image: "assets/hotel_hero.png"
      }
    ],

    // FAQ Section
    faqs: [
      { q: "What is your check-in and check-out policy?", a: "Standard check-in is at 3:00 PM and check-out is at 11:00 AM. Early arrivals and late check-outs can be requested via our mobile concierge app." },
      { q: "Is spa access included in the room rate?", a: "Yes, all staying guests enjoy unlimited access to the thermal pools, steam rooms, and relax zones. Specialized treatments can be booked separately." },
      { q: "Do you offer private event bookings?", a: "Absolutely. Maison Soleil offers complete buyouts for boutique weddings, private dinner parties, and curated corporate retreats." },
      { q: "What is your cancellation policy?", a: "Reservations can be cancelled or rescheduled up to 72 hours before check-in with a full refund." }
    ],

    // Contact Details
    contactLabel: "Room / Booking Inquiry",
    contactPlaceholder: "Select your preferred suite type...",
    formFields: `
      <div class="form-row">
        <div class="form-group">
          <label for="checkin" class="form-label">Check-In Date</label>
          <input type="date" id="checkin" class="form-input" required>
        </div>
        <div class="form-group">
          <label for="checkout" class="form-label">Check-Out Date</label>
          <input type="date" id="checkout" class="form-input" required>
        </div>
      </div>
      <div class="form-group">
        <label for="guests" class="form-label">Guests</label>
        <select id="guests" class="form-select" required>
          <option value="1">1 Guest</option>
          <option value="2" selected>2 Guests</option>
          <option value="3">3 Guests</option>
          <option value="4+">4+ Guests</option>
        </select>
      </div>
    `,
    hours: [
      { days: "Front Desk & Concierge", time: "24 / 7 Available" },
      { days: "The Thermal Spa Suite", time: "07:00 AM – 10:00 PM" },
      { days: "Garden Breakfast Service", time: "08:00 AM – 11:30 AM" }
    ],
    themeColor: "#c5a880" // Champagne Gold
  }
}


// ─── DOM INITIATION & SWITCHING LOGIC ───
document.addEventListener("DOMContentLoaded", () => {
  // Elements
  const tabs = document.querySelectorAll(".switcher-tab");
  const root = document.documentElement;

  // Dark/Light Mode Elements
  const themeToggle = document.getElementById("theme-toggle");

  // Mobile Menu Elements
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileClose = document.getElementById("mobile-menu-close");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  // FAQ Accordion Setup
  initAccordions();

  // Testimonial Navigation Setup
  initTestimonialNav();

  // Scroll Reveal Observer Setup
  initScrollReveal();

  // Load Saved Theme
  const savedTheme = localStorage.getItem("theme") || "light";
  root.setAttribute("data-theme", savedTheme);
  updateThemeIcons(savedTheme);

  // Theme Toggle Listener
  themeToggle.addEventListener("click", () => {
    const currentTheme = root.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateThemeIcons(newTheme);
  });

  // Mobile Menu Listeners
  mobileMenuToggle.addEventListener("click", () => {
    mobileMenu.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  const closeMenu = () => {
    mobileMenu.classList.remove("active");
    document.body.style.overflow = "";
  };

  mobileClose.addEventListener("click", closeMenu);
  mobileLinks.forEach(link => link.addEventListener("click", closeMenu));

  // Niche Switcher Tab Listeners
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const nicheKey = tab.getAttribute("data-niche");
      
      // Update Tab CSS States
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      // Sync both desktop and mobile headers
      const activeTabs = document.querySelectorAll(`.switcher-tab[data-niche="${nicheKey}"]`);
      activeTabs.forEach(t => t.classList.add("active"));

      // Trigger Dynamic Transitions
      switchNiche(nicheKey);
    });
  });

  // Initialize Default Niche (Hotel)
  switchNiche("hotel", true);
});

// Function to update SVG/icons for light/dark mode
function updateThemeIcons(theme) {
  const darkIcon = document.querySelector(".theme-icon-dark");
  const lightIcon = document.querySelector(".theme-icon-light");
  if (theme === "dark") {
    if (darkIcon) darkIcon.style.display = "none";
    if (lightIcon) lightIcon.style.display = "block";
  } else {
    if (darkIcon) darkIcon.style.display = "block";
    if (lightIcon) lightIcon.style.display = "none";
  }
}

// Function to perform dynamic fade-in content switches
function switchNiche(nicheKey, isInitial = false) {
  const data = nicheData[nicheKey];
  if (!data) return;

  const root = document.documentElement;

  // 1. Update Custom Primary Accent Variable
  root.style.setProperty("--accent-primary", data.themeColor);

  // Elements to transition
  const heroImage = document.getElementById("hero-image-bg");
  const logoText = document.querySelectorAll(".logo-name");
  const heroEyebrow = document.getElementById("hero-eyebrow-text");
  const heroHeadline = document.getElementById("hero-headline-text");
  const heroSubheadline = document.getElementById("hero-subheadline-text");
  const heroPrimaryCta = document.getElementById("hero-primary-cta");
  const heroSecondaryCta = document.getElementById("hero-secondary-cta");

  // Story Elements
  const storyEyebrow = document.getElementById("story-eyebrow-text");
  const storyHeadline = document.getElementById("story-headline-text");
  const storyText1 = document.getElementById("story-text-1");
  const storyText2 = document.getElementById("story-text-2");
  const storyBadge = document.getElementById("story-badge-text");
  const storyStats = document.getElementById("story-stats-container");
  const storyImgLarge = document.getElementById("story-img-large");
  const storyImgSmall1 = document.getElementById("story-img-small-1");
  const storyImgSmall2 = document.getElementById("story-img-small-2");

  // Services Elements
  const servicesTitle = document.getElementById("services-title");
  const servicesSubtitle = document.getElementById("services-subtitle");
  const servicesGrid = document.getElementById("services-grid");

  // Offerings Elements
  const offeringsTitle = document.getElementById("offerings-title");
  const offeringsSubtitle = document.getElementById("offerings-subtitle");
  const offeringsGrid = document.getElementById("offerings-grid");

  // FAQ Elements
  const faqContainer = document.getElementById("faq-accordion");

  // Contact Elements
  const contactHeading = document.getElementById("contact-section-heading");
  const contactNicheFields = document.getElementById("contact-niche-fields");
  const contactHours = document.getElementById("contact-hours-list");

  // Form Booking Button
  const formSubmitSpan = document.querySelector("#contact-form button[type='submit'] span");

  // Apply visual fade transition class
  const transitionTargets = [
    heroEyebrow, heroHeadline, heroSubheadline, heroPrimaryCta, heroSecondaryCta,
    storyEyebrow, storyHeadline, storyText1, storyText2, storyBadge, storyStats,
    storyImgLarge, storyImgSmall1, storyImgSmall2,
    servicesTitle, servicesSubtitle, servicesGrid,
    offeringsTitle, offeringsSubtitle, offeringsGrid,
    faqContainer, contactHeading, contactNicheFields, contactHours
  ];

  if (!isInitial) {
    // Add fade out
    transitionTargets.forEach(el => { if (el) el.classList.add("niche-transition-fade") });
    if (heroImage) heroImage.style.opacity = "0.2";

    setTimeout(() => {
      updateDOM();
      // Remove fade out and trigger fade in
      transitionTargets.forEach(el => { if (el) el.classList.remove("niche-transition-fade") });
      if (heroImage) heroImage.style.opacity = "1";
    }, 350); // Matches CSS transition duration
  } else {
    updateDOM();
  }

  function updateDOM() {
    // Update logo name
    logoText.forEach(el => { el.textContent = data.name; });

    // Update Hero
    if (heroEyebrow) heroEyebrow.innerHTML = `<span>★</span> ${data.tagline.toUpperCase()}`;
    if (heroHeadline) heroHeadline.innerHTML = data.headline;
    if (heroSubheadline) heroSubheadline.textContent = data.subheadline;
    if (heroPrimaryCta) {
      heroPrimaryCta.innerHTML = `<span>${data.primaryCta}</span>`;
      // Update form booking button copy
      if (formSubmitSpan) formSubmitSpan.textContent = data.primaryCta;
    }
    if (heroSecondaryCta) {
      heroSecondaryCta.innerHTML = `<span>${data.secondaryCta}</span> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12,5 19,12 12,19"></polyline></svg>`;
    }
    if (heroImage) {
      heroImage.style.backgroundImage = `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.65)), url('${data.heroImage}')`;
    }

    // Update Story
    if (storyEyebrow) storyEyebrow.textContent = data.storyEyebrow;
    if (storyHeadline) storyHeadline.textContent = data.storyHeadline;
    if (storyText1) storyText1.textContent = data.storyText1;
    if (storyText2) storyText2.textContent = data.storyText2;
    if (storyBadge) storyBadge.textContent = data.storyBadge;

    if (storyImgLarge) storyImgLarge.src = data.storyImgLarge;
    if (storyImgSmall1) storyImgSmall1.src = data.storyImgSmall1;
    if (storyImgSmall2) storyImgSmall2.src = data.storyImgSmall2;

    if (storyStats) {
      storyStats.innerHTML = data.stats.map(stat => `
        <div class="stat-block">
          <div class="stat-value">${stat.value}</div>
          <div class="stat-label">${stat.label}</div>
        </div>
      `).join('');
    }

    // Update Services
    if (servicesTitle) servicesTitle.textContent = data.servicesTitle;
    if (servicesSubtitle) servicesSubtitle.textContent = data.servicesSubtitle;
    if (servicesGrid) {
      servicesGrid.innerHTML = data.services.map((service, index) => `
        <div class="service-card reveal-item" style="animation-delay: ${index * 0.1}s">
          <div class="service-card-icon">${service.icon}</div>
          <h3 class="service-card-title">${service.title}</h3>
          <p class="service-card-desc">${service.desc}</p>
          <div class="service-card-tags">
            ${service.tags.map(t => `<span class="service-tag">${t}</span>`).join('')}
          </div>
        </div>
      `).join('');
    }

    // Update Offerings
    if (offeringsTitle) offeringsTitle.textContent = data.offeringsTitle;
    if (offeringsSubtitle) offeringsSubtitle.textContent = data.offeringsSubtitle;
    if (offeringsGrid) {
      offeringsGrid.innerHTML = data.offerings.map((offering, index) => `
        <div class="offering-card reveal-item" style="animation-delay: ${index * 0.15}s">
          <div class="offering-image-container">
            <img src="${offering.image}" alt="${offering.title}" class="offering-img" loading="lazy">
            <span class="offering-badge">${offering.tag}</span>
          </div>
          <div class="offering-details">
            <h3 class="offering-card-title">${offering.title}</h3>
            <p class="offering-card-desc">${offering.desc}</p>
            <div class="offering-footer">
              <span class="offering-price">${offering.price}</span>
              <a href="#contact" class="offering-btn-link">Select <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12,5 19,12 12,19"></polyline></svg></a>
            </div>
          </div>
        </div>
      `).join('');
    }

    // Update FAQs
    if (faqContainer) {
      faqContainer.innerHTML = data.faqs.map((faq, index) => `
        <div class="faq-accordion-item">
          <button class="faq-accordion-trigger" aria-expanded="false">
            <span>${faq.q}</span>
            <span class="faq-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></span>
          </button>
          <div class="faq-accordion-content" style="max-height: 0px;">
            <div class="faq-accordion-inner">
              <p>${faq.a}</p>
            </div>
          </div>
        </div>
      `).join('');
      initAccordions(); // Rebind event listeners
    }

    // Update Contact Details
    if (contactHeading) {
      contactHeading.innerHTML = `Let's Start Your <br><span class="accent-span">${data.primaryCta.split(" ")[0]}</span>`;
    }
    if (contactNicheFields) {
      contactNicheFields.innerHTML = data.formFields;
    }
    if (contactHours) {
      contactHours.innerHTML = data.hours.map(h => `
        <div class="hours-row">
          <span class="hours-day">${h.days}</span>
          <span class="hours-time">${h.time}</span>
        </div>
      `).join('');
    }
  }
}

// ─── FAQ ACCORDIONS CONTROLLER ───
function initAccordions() {
  const triggers = document.querySelectorAll(".faq-accordion-trigger");
  triggers.forEach(trigger => {
    // Avoid double binding
    trigger.removeEventListener("click", accordionClickHandler);
    trigger.addEventListener("click", accordionClickHandler);
  });
}

function accordionClickHandler(e) {
  const trigger = e.currentTarget;
  const item = trigger.parentElement;
  const content = trigger.nextElementSibling;
  const isOpen = trigger.getAttribute("aria-expanded") === "true";

  // Close other open accordions
  const activeItems = document.querySelectorAll(".faq-accordion-item");
  activeItems.forEach(i => {
    if (i !== item) {
      const activeTrigger = i.querySelector(".faq-accordion-trigger");
      const activeContent = i.querySelector(".faq-accordion-content");
      if (activeTrigger) activeTrigger.setAttribute("aria-expanded", "false");
      if (activeContent) activeContent.style.maxHeight = "0px";
      i.classList.remove("open");
    }
  });

  // Toggle current accordion
  if (isOpen) {
    trigger.setAttribute("aria-expanded", "false");
    content.style.maxHeight = "0px";
    item.classList.remove("open");
  } else {
    trigger.setAttribute("aria-expanded", "true");
    content.style.maxHeight = content.scrollHeight + "px";
    item.classList.add("open");
  }
}

// ─── TESTIMONIAL SLIDER CONTROLLER ───
let currentTestimonialIndex = 0;

function initTestimonialNav() {
  const nextBtn = document.getElementById("testimonial-next");
  const prevBtn = document.getElementById("testimonial-prev");
  const container = document.getElementById("testimonial-slides-container");

  if (!nextBtn || !prevBtn || !container) return;

  const slides = container.querySelectorAll(".testimonial-slide");
  const maxIndex = slides.length - 1;

  const updateSlidePosition = () => {
    container.style.transform = `translateX(-${currentTestimonialIndex * 100}%)`;
  };

  nextBtn.addEventListener("click", () => {
    if (currentTestimonialIndex < maxIndex) {
      currentTestimonialIndex++;
    } else {
      currentTestimonialIndex = 0; // Wrap around
    }
    updateSlidePosition();
  });

  prevBtn.addEventListener("click", () => {
    if (currentTestimonialIndex > 0) {
      currentTestimonialIndex--;
    } else {
      currentTestimonialIndex = maxIndex; // Wrap around
    }
    updateSlidePosition();
  });
}

// ─── SCROLL REVEAL (INTERSECTION OBSERVER) ───
function initScrollReveal() {
  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Trigger once
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback if IntersectionObserver not supported
    revealElements.forEach(el => el.classList.add("visible"));
  }

 // NAVBAR THROUGHOUT

window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav-wrapper');

    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});
}
