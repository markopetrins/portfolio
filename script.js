const navLinks = Array.from(document.querySelectorAll(".nav-link"));
const pages = Array.from(document.querySelectorAll(".page"));
const particleContainer = document.querySelector(".bg-particles");
const trailContainer = document.querySelector(".cursor-trail-container");
const contactForm = document.querySelector(".contact-form");
const goPageButtons = Array.from(document.querySelectorAll("[data-go-page]"));
const langToggle = document.querySelector(".lang-toggle");
const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
const sidebarMenu = document.querySelector(".sidebar-menu");
const isTouchDevice =
  window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window || navigator.maxTouchPoints > 0;
const mobileViewportQuery = window.matchMedia("(max-width: 980px)");

function isMobileMenuMode() {
  return mobileViewportQuery.matches;
}

function closeMobileMenu() {
  if (!sidebarMenu || !mobileNavToggle || !isMobileMenuMode()) {
    return;
  }
  sidebarMenu.classList.remove("is-open");
  mobileNavToggle.setAttribute("aria-expanded", "false");
  mobileNavToggle.textContent = "Menu";
}

function activatePage(pageId) {
  let activePage = null;

  navLinks.forEach((link) => {
    const isActive = link.dataset.page === pageId;
    link.classList.toggle("active", isActive);
    link.setAttribute("aria-current", isActive ? "page" : "false");
  });

  pages.forEach((page) => {
    const isTargetPage = page.id === pageId;
    page.classList.toggle("active", isTargetPage);
    if (isTargetPage) {
      activePage = page;
    }
  });

  closeMobileMenu();

  if (activePage) {
    activePage.scrollTop = 0;
  }
  window.scrollTo({ top: 0, behavior: "auto" });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    activatePage(link.dataset.page);
  });
});

goPageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activatePage(button.dataset.goPage);
  });
});

function initBackgroundParticles() {
  if (!particleContainer) {
    return;
  }

  const particleCount = isMobileMenuMode() ? 38 : 110;
  for (let i = 0; i < particleCount; i += 1) {
    const particle = document.createElement("span");
    particle.className = "bg-particle";

    const size = Math.floor(Math.random() * 10) + 5;
    const left = Math.random() * 100;
    const startY = Math.random() * 120 + 10;
    const duration = Math.random() * 14 + 10;
    const delay = Math.random() * -24;
    const drift = (Math.random() - 0.5) * 120;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${left}%`;
    particle.style.top = `${startY}vh`;
    particle.style.animationDuration = `${duration}s`;
    particle.style.animationDelay = `${delay}s`;
    particle.style.setProperty("--drift-x", `${drift}px`);

    particleContainer.appendChild(particle);
  }
}

initBackgroundParticles();

const translations = {
  en: {
    siteTitle: "Marko Petrina",
    siteSubtitle: "Developer Portfolio",
    navAbout: "About Me",
    navSkills: "Skills",
    navProjects: "Projects",
    navResume: "Resume",
    navContact: "Contact Me",
    aboutTitle: "About Me",
    contactFlashBtn: "CONTACT ME",
    aboutP1:
      "I am a full-stack software developer with strong training in Software Development and Software Support from Mohawk College, where I have consistently earned Dean's Honour List standing. Across co-op, internship, and contract roles, I have built end-to-end solutions using React, Vue, Angular, .NET, Node.js, and SQL systems. I am attending McMaster University studying Software Engineering to earn a Bachelor of Technology.",
    aboutP2:
      "My work spans frontend and backend development, including responsive interfaces, API design, data pipelines, and real-time integrations for reporting platforms and internal business tools. I also focus on local AI model deployment and practical AI-driven selection systems, with strong interest in transparent, high-performance solutions that connect software, infrastructure, and real-world impact.",
    educationHeader: "Education",
    experienceHeader: "Previous Experience",
    progressText: "In Progress",
    skillsTitle: "Skills",
    programmingLanguages: "Programming Languages",
    developmentStrengths: "Development Strengths",
    frameworksToolsInfra: "Frameworks, Tools, and Infrastructure",
    frameworksHeader: "Frameworks",
    dataToolsHeader: "Data and Tools",
    aiInfraHeader: "AI and Infrastructure",
    skillStrengthLabels: [
      "Full-Stack Delivery",
      "API Integration",
      "Data and SQL Systems",
      "UI Engineering",
      "Performance Optimization",
    ],
    skillLanguageItems: ["JavaScript", "TypeScript", "Python", "C#", "Java", "C++", "SQL", "HTML / CSS"],
    frameworkItems: ["React", "Angular", "Vue.js", "Vuetify", ".NET", "Node.js", "Express.js"],
    dataToolItems: ["MySQL", "SQL Server", "MongoDB", "Firebase", "Git", "GitHub", "Postman", "Visual Studio"],
    aiInfraItems: [
      "Local AI model deployment",
      "Model tuning workflows",
      "AI electoral analysis systems",
      "Real-time data pipelines",
      "Homelab environments",
      "Server setup and self-hosting",
    ],
    experienceCards: [
      {
        role: "AI Research Assistant (Applied Research)",
        company: "Royal Canadian Air Force Museum",
        date: "Jan 2025 - Apr 2025",
        summary:
          "Supported AI facial recognition research using archival and family-provided images to improve unknown soldier identification accuracy.",
      },
      {
        role: "Software Developer (Contract)",
        company: "The Crow Report",
        date: "Jun 2025 - Aug 2025",
        summary:
          "Expanded a live sports platform with API and real-time data integrations while improving frontend performance and ad monetization readiness.",
      },
      {
        role: "Frontend Web Developer (Intern)",
        company: "Actor's Pocket Guide",
        date: "Feb 2025 - Jun 2025",
        summary:
          "Built scalable Angular UI components and analytics dashboard features for a stable, data-driven platform used in the film industry.",
      },
      {
        role: "Software Developer (Co-op)",
        company: "Rosa Flora Limited",
        date: "Apr 2024 - Aug 2024",
        summary:
          "Developed full-stack internal tools including a consolidated reporting system replacing 20+ reports to improve operational efficiency.",
      },
    ],
    projectsTitle: "Projects",
    project1Summary:
      "Browser extension that analyzes Facebook Marketplace gold and silver listings, estimates purity and weight value, and compares market pricing to surface likely ROI opportunities.",
    project2Summary:
      "A reusable personal portfolio template focused on clean navigation, animated section transitions, responsive layouts, and customizable project/resume blocks for developer branding.",
    project3Summary:
      "Python scraper that collects every available image from an Amazon product listing and prioritizes the highest-quality versions for download-ready output.",
    resumeTitle: "Resume",
    resumeDownload: "Download Resume",
    contactTitle: "Contact Me",
    contactIntro:
      "Open to project-based work and consulting engagements. If you need a developer who can build, integrate AI, and solve technical problems quickly, send a request below.",
    contactServicesTitle: "What I Can Do For You",
    contactFormTitle: "Request Work / Get a Quote",
    formName: "Name",
    formEmail: "Email",
    formProjectType: "Project Type",
    formBudget: "Estimated Budget",
    formDetails: "Project Details",
    sendRequest: "Send Request",
    emailDirect: "Email Directly",
    projectTypeOptions: ["Website Development", "AI Integration", "Debugging / Fixes", "Consulting", "Other"],
    serviceItems: [
      "Custom websites and web application features",
      "AI integration into existing or new products",
      "Backend API development and optimization",
      "Codebase debugging and performance improvements",
      "Technical consulting for product planning",
    ],
    placeholders: {
      name: "Your full name",
      email: "yourname@email.com",
      budget: "e.g. $2,000 - $5,000",
      details: "Describe your goals, timeline, and what you need help with.",
    },
  },
  hr: {
    siteTitle: "Marko Petrina",
    siteSubtitle: "Portfolio Programera",
    navAbout: "O Meni",
    navSkills: "Vještine",
    navProjects: "Projekti",
    navResume: "Životopis",
    navContact: "Kontakt",
    aboutTitle: "O Meni",
    contactFlashBtn: "KONTAKTIRAJ ME",
    aboutP1:
      "Ja sam full-stack softverski developer sa snažnim obrazovanjem iz razvoja softvera i softverske podrške na Mohawk Collegeu, gdje sam redovito bio na Dean's Honour Listi. Kroz co-op, praksu i ugovorne uloge gradio sam end-to-end rješenja koristeći React, Vue, Angular, .NET, Node.js i SQL sustave. Trenutno pohađam McMaster University, smjer Software Engineering, kako bih stekao Bachelor of Technology diplomu.",
    aboutP2:
      "Moj rad obuhvaća frontend i backend razvoj, uključujući responzivna sučelja, dizajn API-ja, podatkovne pipelineove i integracije u stvarnom vremenu za platforme izvještavanja i interne poslovne alate. Također se fokusiram na lokalno pokretanje AI modela i praktične AI sustave za odabir, uz snažan interes za transparentna, visokoučinkovita rješenja koja povezuju softver, infrastrukturu i stvarni učinak.",
    educationHeader: "Obrazovanje",
    experienceHeader: "Radno Iskustvo",
    progressText: "U Tijeku",
    skillsTitle: "Vještine",
    programmingLanguages: "Programski Jezici",
    developmentStrengths: "Razvojne Snage",
    frameworksToolsInfra: "Frameworkovi, Alati i Infrastruktura",
    frameworksHeader: "Frameworkovi",
    dataToolsHeader: "Podaci i Alati",
    aiInfraHeader: "AI i Infrastruktura",
    skillStrengthLabels: [
      "Full-Stack Isporuka",
      "API Integracija",
      "Podatkovni i SQL Sustavi",
      "UI Inzenjering",
      "Optimizacija Performansi",
    ],
    skillLanguageItems: ["JavaScript", "TypeScript", "Python", "C#", "Java", "C++", "SQL", "HTML / CSS"],
    frameworkItems: ["React", "Angular", "Vue.js", "Vuetify", ".NET", "Node.js", "Express.js"],
    dataToolItems: ["MySQL", "SQL Server", "MongoDB", "Firebase", "Git", "GitHub", "Postman", "Visual Studio"],
    aiInfraItems: [
      "Lokalno pokretanje AI modela",
      "Workflow za tuning modela",
      "AI sustavi za izbornu analizu",
      "Podatkovni pipelineovi u realnom vremenu",
      "Homelab okruzenja",
      "Postavljanje servera i self-hosting",
    ],
    experienceCards: [
      {
        role: "AI Istrazivacki Asistent (Primijenjeno Istrazivanje)",
        company: "Royal Canadian Air Force Museum",
        date: "Sij 2025 - Tra 2025",
        summary:
          "Podrzavao AI istrazivanje prepoznavanja lica koristeci arhivske i obiteljski dostavljene fotografije za poboljsanje identifikacije nepoznatih vojnika.",
      },
      {
        role: "Softverski Developer (Ugovor)",
        company: "The Crow Report",
        date: "Lip 2025 - Kol 2025",
        summary:
          "Prosirio live sports platformu API i real-time integracijama podataka te poboljsao frontend performanse i spremnost za monetizaciju oglasa.",
      },
      {
        role: "Frontend Web Developer (Praksa)",
        company: "Actor's Pocket Guide",
        date: "Velj 2025 - Lip 2025",
        summary:
          "Izradio skalabilne Angular UI komponente i dashboard znacajke analitike za stabilnu, podatkovno vodenu platformu u filmskoj industriji.",
      },
      {
        role: "Softverski Developer (Co-op)",
        company: "Rosa Flora Limited",
        date: "Tra 2024 - Kol 2024",
        summary:
          "Razvio full-stack interne alate, ukljucujuci objedinjeni sustav izvjestavanja koji je zamijenio 20+ izvjestaja i povecao operativnu ucinkovitost.",
      },
    ],
    projectsTitle: "Projekti",
    project1Summary:
      "Browser ekstenzija koja analizira Facebook Marketplace oglase za zlato i srebro, procjenjuje čistoću i vrijednost po težini te uspoređuje tržišne cijene kako bi istaknula potencijalne ROI prilike.",
    project2Summary:
      "Ponovno iskoristiv predložak osobnog portfolija fokusiran na čistu navigaciju, animirane prijelaze sekcija, responzivan raspored i prilagodljive blokove za projekte i životopis.",
    project3Summary:
      "Python scraper koji prikuplja sve dostupne slike s Amazon product stranice i prioritizira najkvalitetnije verzije za preuzimanje.",
    resumeTitle: "Životopis",
    resumeDownload: "Preuzmi Životopis",
    contactTitle: "Kontakt",
    contactIntro:
      "Otvoren sam za projektni rad i konzultantske angažmane. Ako trebate developera koji može graditi, integrirati AI i brzo rješavati tehničke probleme, pošaljite upit ispod.",
    contactServicesTitle: "Što Mogu Napraviti Za Vas",
    contactFormTitle: "Upit Za Suradnju / Ponudu",
    formName: "Ime",
    formEmail: "Email",
    formProjectType: "Tip Projekta",
    formBudget: "Procijenjeni Budžet",
    formDetails: "Detalji Projekta",
    sendRequest: "Pošalji Upit",
    emailDirect: "Pošalji Email",
    projectTypeOptions: ["Izrada Web Stranice", "AI Integracija", "Debugging / Popravci", "Konzultacije", "Ostalo"],
    serviceItems: [
      "Izrada prilagođenih web stranica i funkcionalnosti",
      "AI integracija u postojeće ili nove proizvode",
      "Razvoj i optimizacija backend API-ja",
      "Debugging koda i poboljšanje performansi",
      "Tehničko savjetovanje za planiranje proizvoda",
    ],
    placeholders: {
      name: "Vaše puno ime",
      email: "vaseime@email.com",
      budget: "npr. $2,000 - $5,000",
      details: "Opišite ciljeve, rok i što vam je potrebno.",
    },
  },
};

function setText(selector, value) {
  const el = document.querySelector(selector);
  if (el) {
    el.textContent = value;
  }
}

function setListText(selector, values) {
  const items = Array.from(document.querySelectorAll(selector));
  items.forEach((item, index) => {
    if (values[index] !== undefined) {
      item.textContent = values[index];
    }
  });
}

function applyLanguage(lang) {
  const t = translations[lang] || translations.en;

  setText(".site-title", t.siteTitle);
  setText(".subtitle", t.siteSubtitle);
  setText('.nav-link[data-page="about"]', t.navAbout);
  setText('.nav-link[data-page="skills"]', t.navSkills);
  setText('.nav-link[data-page="projects"]', t.navProjects);
  setText('.nav-link[data-page="resume"]', t.navResume);
  setText('.nav-link[data-page="contact"]', t.navContact);

  setText("#about-title", t.aboutTitle);
  setText(".contact-flash-btn", t.contactFlashBtn);
  setText("#about .info-block p:nth-of-type(1)", t.aboutP1);
  setText("#about .info-block p:nth-of-type(2)", t.aboutP2);
  setText(".education-carousel .carousel-header h3", t.educationHeader);
  setText(".experience-carousel .carousel-header h3", t.experienceHeader);
  const progressRow = document.querySelector(".progress-row");
  if (progressRow) {
    const spinner = progressRow.querySelector(".loading-spinner");
    progressRow.textContent = `${t.progressText} `;
    if (spinner) {
      progressRow.appendChild(spinner);
    }
  }

  setText("#skills-title", t.skillsTitle);
  setText("#skills .skills-box:nth-child(1) h3", t.programmingLanguages);
  setText("#skills .skills-box:nth-child(2) h3", t.developmentStrengths);
  setText("#skills .skills-box:nth-child(3) > h3", t.frameworksToolsInfra);
  setText("#skills .stack-group:nth-child(1) h4", t.frameworksHeader);
  setText("#skills .stack-group:nth-child(2) h4", t.dataToolsHeader);
  setText("#skills .stack-group:nth-child(3) h4", t.aiInfraHeader);
  setListText("#skills .skills-box:nth-child(1) .skill-chip-list li", t.skillLanguageItems);
  setListText("#skills .skills-box:nth-child(2) .skill-item label", t.skillStrengthLabels);
  setListText("#skills .stack-group:nth-child(1) .skill-chip-list li", t.frameworkItems);
  setListText("#skills .stack-group:nth-child(2) .skill-chip-list li", t.dataToolItems);
  setListText("#skills .stack-group:nth-child(3) .skill-chip-list li", t.aiInfraItems);

  const experienceCards = Array.from(document.querySelectorAll(".experience-carousel .carousel-card"));
  experienceCards.forEach((card, index) => {
    const item = t.experienceCards[index];
    if (!item) return;
    const role = card.querySelector("h4");
    const company = card.querySelector(".company-line");
    const date = card.querySelector(".date-line");
    const summary = card.querySelector(".summary-line");
    if (role) {
      role.innerHTML = item.role.replace(" (Co-op)", " <br />(Co-op)");
    }
    if (company) company.textContent = item.company;
    if (date) date.textContent = item.date;
    if (summary) summary.textContent = item.summary;
  });

  setText("#projects-title", t.projectsTitle);
  setText("#projects .project-card:nth-child(1) .project-summary", t.project1Summary);
  setText("#projects .project-card:nth-child(2) .project-summary", t.project2Summary);
  setText("#projects .project-card:nth-child(3) .project-summary", t.project3Summary);

  setText("#resume-title", t.resumeTitle);
  setText(".resume-download-btn", t.resumeDownload);

  setText("#contact-title", t.contactTitle);
  setText(".contact-intro", t.contactIntro);
  setText(".contact-services h3", t.contactServicesTitle);
  setText(".contact-form h3", t.contactFormTitle);
  setText('label[for="client-name"]', t.formName);
  setText('label[for="client-email"]', t.formEmail);
  setText('label[for="project-type"]', t.formProjectType);
  setText('label[for="project-budget"]', t.formBudget);
  setText('label[for="project-details"]', t.formDetails);
  setText(".contact-actions button[type='submit']", t.sendRequest);
  setText(".contact-actions .contact-link", t.emailDirect);

  const nameInput = document.getElementById("client-name");
  const emailInput = document.getElementById("client-email");
  const budgetInput = document.getElementById("project-budget");
  const detailsInput = document.getElementById("project-details");
  if (nameInput) nameInput.placeholder = t.placeholders.name;
  if (emailInput) emailInput.placeholder = t.placeholders.email;
  if (budgetInput) budgetInput.placeholder = t.placeholders.budget;
  if (detailsInput) detailsInput.placeholder = t.placeholders.details;

  setListText(".contact-services .service-list li", t.serviceItems);
  setListText("#project-type option", t.projectTypeOptions);
}

if (langToggle) {
  langToggle.addEventListener("click", () => {
    const current = langToggle.dataset.lang === "hr" ? "hr" : "en";
    const next = current === "en" ? "hr" : "en";
    const nextLabel = next.toUpperCase();
    const nextLanguageText = next === "en" ? "English" : "Croatian";

    langToggle.classList.remove("is-switching");
    // restart animation reliably on repeated clicks
    void langToggle.offsetWidth;
    langToggle.classList.add("is-switching");

    langToggle.dataset.lang = next;
    langToggle.setAttribute("aria-pressed", next === "hr" ? "true" : "false");
    langToggle.setAttribute("aria-label", `Switch language to ${next === "en" ? "Croatian" : "English"}`);

    const label = langToggle.querySelector(".lang-label");
    if (label) {
      label.textContent = nextLabel;
      label.setAttribute("title", nextLanguageText);
    }

    applyLanguage(next);

    window.setTimeout(() => {
      langToggle.classList.remove("is-switching");
    }, 380);
  });
}

applyLanguage("en");

if (mobileNavToggle && sidebarMenu) {
  mobileNavToggle.addEventListener("click", () => {
    const isOpen = sidebarMenu.classList.toggle("is-open");
    mobileNavToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    mobileNavToggle.textContent = isOpen ? "Close" : "Menu";
  });
}

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const name = formData.get("client-name") || "";
    const email = formData.get("client-email") || "";
    const type = formData.get("project-type") || "";
    const budget = formData.get("project-budget") || "";
    const details = formData.get("project-details") || "";

    const subject = encodeURIComponent(`Work Request: ${type}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nProject Type: ${type}\nEstimated Budget: ${budget}\n\nProject Details:\n${details}`
    );
    window.location.href = `mailto:your-email@example.com?subject=${subject}&body=${body}`;
  });
}

let trailThrottle = false;
if (!isTouchDevice) {
  window.addEventListener("mousemove", (event) => {
    if (trailThrottle || !trailContainer) {
      return;
    }

    trailThrottle = true;
    const dot = document.createElement("span");
    dot.className = "trail-dot";
    dot.style.left = `${event.clientX}px`;
    dot.style.top = `${event.clientY}px`;
    trailContainer.appendChild(dot);

    window.setTimeout(() => {
      dot.remove();
    }, 550);

    window.setTimeout(() => {
      trailThrottle = false;
    }, 16);
  });
}
