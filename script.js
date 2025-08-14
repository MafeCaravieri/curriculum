
const translations = {
    pt: {
        pageTitle: "Maria Fernanda Caravieri",
        degreeText: "Estudante de Engenharia de Software",
        careerText: "Desenvolvedora Front-End",
        aboutTitle: "Sobre Mim",
        aboutText: "Olá! Meu nome é Maria Fernanda Caravieri, sou estudante de Engenharia de Software na UBM, com uma paixão por desenvolvimento Front End. Adoro aprender coisas novas e deixar tudo mais bonito e funcional. Atualmente busco oportunidades onde eu possa crescer como dev, aprender cada dia mais e criar coisas incríveis.",
        formationTitle: "Formação Acadêmica",
        degree2Text: "Engenharia de Software",
        collegeText: "UBM",
        timeText: "2025 - Em Andamento",
        skillsTitle: "Skills",
        htmlTitle: "HTML",
        cssTitle: "CSS",
        jsTitle: "JavaScript",
        portfolioTitle: "Portfólio",
        certificationsTitle: "Certificados",
        experienceTitle: "Experiência",
        companyText: "Prefeitura Municipal de Quatis",
        jobTitle: "Estagiária do Centro de Processamento de Dados",
        jobTime: "Abr/2025 - atual",
        jobDesc: "Atuo prestando suporte técnico e auxiliando na manutenção de sistemas internos, redes e equipamentos de informática.",
        contactTitle: "Contato",
        linkedinTitle: "Linkedin",
        githubTitle: "GitHub",
        phoneTitle: "Telefone",
        emailTitle: "Email",
        languagesTitle: "Idiomas",
        ptTitle: "Português",
        enTitle: "Inglês",
        ptProficiency: "Proficiência: Nativa",
        enProficiency: "Proficiência: B1",
        enCertificate: "Clique para exibir certificado",

    },
    en: {
        pageTitle: "Maria Fernanda Caravieri",
        degreeText: "Software Engineering Student",
        careerText: "Front-End Developer",
        aboutTitle: "About Me",
        aboutText: "Hello! My name is Maria Fernanda Caravieri, I am a Software Engineering student at UBM with a passion for Front-End development. I love learning new things and making everything more beautiful and functional. I am currently seeking opportunities where I can grow as a developer, learn more every day, and create amazing things.",
        formationTitle: "Academic Background",
        degree2Text: "Software Engineering",
        collegeText: "UBM",
        timeText: "2025 - Ongoing",
        skillsTitle: "Skills",
        htmlTitle: "HTML",
        cssTitle: "CSS",
        jsTitle: "JavaScript",
        portfolioTitle: "Portfolio",
        certificationsTitle: "Certifications",
        experienceTitle: "Experience",
        companyText: "Municipal Government of Quatis",
        jobTitle: "Intern at Data Processing Center",
        jobTime: "Apr/2025 - present",
        jobDesc: "I provide technical support and assist in maintaining internal systems, networks, and IT equipment.",
        contactTitle: "Contact",
        linkedinTitle: "LinkedIn",
        githubTitle: "GitHub",
        phoneTitle: "Phone",
        emailTitle: "Email",
        languagesTitle: "Languages",
        ptTitle: "Portuguese",
        enTitle: "English",
        ptProficiency: "Proficiency: Native",
        enProficiency: "Proficiency: B1",
        enCertificate: "Click to view certificate",
    }
};

let currentLang = "pt";

function switchLanguage() {
    currentLang = currentLang === "pt" ? "en" : "pt";
    const t = translations[currentLang];

    document.getElementById("page-title").textContent = t.pageTitle;
    document.getElementById("degree-text").textContent = t.degreeText;
    document.getElementById("career-text").textContent = t.careerText;
    document.getElementById("about-title").textContent = t.aboutTitle;
    document.getElementById("about-text").textContent = t.aboutText;
    document.getElementById("formation-title").textContent = t.formationTitle;
    document.getElementById("degree2-text").textContent = t.degree2Text;
    document.getElementById("college-text").textContent = t.collegeText;
    document.getElementById("time-text").textContent = t.timeText;
    document.getElementById("skills-title").textContent = t.skillsTitle;
    document.getElementById("html-title").textContent = t.htmlTitle;
    document.getElementById("css-title").textContent = t.cssTitle;
    document.getElementById("js-title").textContent = t.jsTitle;
    document.getElementById("portfolio-title").textContent = t.portfolioTitle;
    document.getElementById("certifications-title").textContent = t.certificationsTitle;
    document.getElementById("experience-title").textContent = t.experienceTitle;
    document.getElementById("company-text").textContent = t.companyText;
    document.getElementById("job-title").textContent = t.jobTitle;
    document.getElementById("job-time").textContent = t.jobTime;
    document.getElementById("job-desc").textContent = t.jobDesc;
    document.getElementById("contact-title").textContent = t.contactTitle;
    document.getElementById("linkedin-title").textContent = t.linkedinTitle;
    document.getElementById("github-title").textContent = t.githubTitle;
    document.getElementById("phone-title").textContent = t.phoneTitle;
    document.getElementById("email-title").textContent = t.emailTitle;
    document.getElementById("pt-title").textContent = t.ptTitle
    document.getElementById("en-title").textContent = t.enTitle
    document.getElementById("languages-title").textContent = t.languagesTitle
    document.getElementById("pt-proficiency").textContent = t.ptProficiency
    document.getElementById("en-proficiency").textContent = t.enProficiency
    document.getElementById("en-certificate").textContent = t.enCertificate

    document.getElementById("lang-btn").textContent = currentLang === "pt" ? "English / Português" : "Português / English";
}

document.getElementById("lang-btn").addEventListener("click", switchLanguage);
