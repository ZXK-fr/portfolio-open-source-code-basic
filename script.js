window.addEventListener("scroll", function () {
    let sections = document.querySelectorAll('section');
    sections.forEach(function (section) {
        let sectionPosition = section.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 1.3;
        if (sectionPosition < screenPosition) {
            section.classList.add('active');
        }
    });
});

const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.transform = 'scale(1.1)';
    });
    link.addEventListener('mouseout', () => {
        link.style.transform = 'scale(1)';
    });
});

function showSection(id) {
    document.querySelectorAll('section').forEach(sec => sec.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

window.addEventListener("scroll", () => {
    const textElements = document.querySelectorAll('.animated-text');
    textElements.forEach((textElement) => {
        let position = textElement.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 1.5;
        if (position < screenPosition) {
            textElement.classList.add('fade-in');
        }
    });
});

const animatedText = document.querySelectorAll('.animated-text');
animatedText.forEach((el) => {
    el.classList.add('fade-in');
});

const particles = document.createElement('div');
particles.classList.add('particles');
document.body.appendChild(particles);

document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    let particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    document.body.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 500);
});

// Style de particules
const style = document.createElement('style');
style.innerHTML = `
    .particles {
        position: absolute;
        top: 0;
        left: 0;
        pointer-events: none;
        z-index: 10;
    }
    .particle {
        position: absolute;
        width: 5px;
        height: 5px;
        background: rgba(255, 255, 255, 0.8);
        border-radius: 50%;
        animation: particleMove 1s ease-in-out forwards;
    }
    @keyframes particleMove {
        0% {
            transform: scale(0.8);
            opacity: 1;
        }
        100% {
            transform: scale(0);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

document.addEventListener("DOMContentLoaded", () => {
    const githubIcon = document.querySelector('.social-links i');
    const creditsSection = document.getElementById('credits');

    function showCredits() {
        githubIcon.classList.add('active');
    }

    window.addEventListener('scroll', () => {
        const rect = creditsSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            showCredits();
        }
    });

    if (creditsSection.getBoundingClientRect().top <= window.innerHeight && creditsSection.getBoundingClientRect().bottom >= 0) {
        showCredits();
    }
});
