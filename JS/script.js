// Particles Config
particlesJS("particles-js", {
    particles: {
        number: { value: 50, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.5 },
        size: { value: 3 },
        line_linked: { enable: true, distance: 150, color: "#ffffff" },
        move: { enable: true, speed: 2 }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "repulse" }
        }
    },
    retina_detect: true
});

// Likes and Dislikes
let likes = 16;
let dislikes = 3;

function addLike() {
    likes++;
    document.getElementById('like-count').textContent = likes;
}

function addDislike() {
    dislikes++;
    document.getElementById('dislike-count').textContent = dislikes;
}

// Accordion
document.querySelectorAll(".accordion-btn").forEach(button => {
    button.addEventListener("click", () => {
        button.nextElementSibling.style.display = 
            button.nextElementSibling.style.display === "block" ? "none" : "block";
    });
});

// Sidebar
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.left = sidebar.style.left === "0px" ? "-100%" : "0";
}

// Language Switch
function switchLanguage() {
    const lang = document.getElementById('language-switch').value;

    const translations = {
        en: {
            title: "CD Hub Wiki",
            description: "Find the answers you need for our mod and services.",
            blogText: "Check out our <a href='https://blog.cdhub.store/'>mod blog</a> for detailed updates and features.",
            discordText: "For better assistance or to purchase access keys, make sure you’re on our <a href='discord.gg/cdhub'>Discord server</a>.",
            feedback: "Did this article help you?",
            faq: "FAQ",
            faqContent: "This section contains the frequently asked questions.",
            install: "Installation Guide",
            installContent: "Detailed guide for installing the mod.",
            config: "Configuration",
            configContent: "How to configure the mod for optimal use.",
            trouble: "Troubleshooting",
            troubleContent: "Fix common issues with our service.",
            contact: "Contact Us",
            contactContent: "Get in touch with us for support."
        },
        es: {
            title: "CD Hub Wiki",
            description: "Encuentra las respuestas que necesitas para nuestro mod y servicios.",
            blogText: "Visita nuestro <a href='https://blog.cdhub.store/'>blog del mod</a> para actualizaciones detalladas y características.",
            discordText: "Para mejor asistencia o comprar llaves de acceso, asegúrate de estar en nuestro <a href='discord.gg/cdhub'>servidor de Discord</a>.",
            feedback: "¿Te sirvió este artículo?",
            faq: "Preguntas Frecuentes",
            faqContent: "Esta sección contiene las preguntas más frecuentes.",
            install: "Guía de Instalación",
            installContent: "Guía detallada para instalar el mod.",
            config: "Configuración",
            configContent: "Cómo configurar el mod para un uso óptimo.",
            trouble: "Resolución de Problemas",
            troubleContent: "Soluciona problemas comunes con nuestro servicio.",
            contact: "Contáctanos",
            contactContent: "Ponte en contacto con nosotros para soporte."
        }
    };

    const elements = {
        title: 'wiki-title',
        description: 'wiki-description',
        blogText: 'blog-text',
        discordText: 'discord-text',
        feedback: 'feedback-title',
        faq: 'faq-btn',
        faqContent: 'faq-content',
        install: 'install-btn',
        installContent: 'install-content',
        config: 'config-btn',
        configContent: 'config-content',
        trouble: 'trouble-btn',
        troubleContent: 'trouble-content',
        contact: 'contact-btn',
        contactContent: 'contact-content'
    };

    const selectedTranslations = translations[lang];

    for (let key in elements) {
        const element = document.getElementById(elements[key]);
        if (element) {
            element.innerHTML = selectedTranslations[key];
        }
    }
}
