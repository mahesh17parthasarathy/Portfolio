// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (navMenu && navMenu.classList.contains('active')) {
        if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
});

// Close mobile menu on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
    }
});

// Active navigation link highlighting
const sections = document.querySelectorAll('section[id]');

function highlightActiveSection() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightActiveSection);

// Form submission handler
const contactForm = document.getElementById('contactForm');

// EmailJS Configuration (Replace these with your actual EmailJS credentials)
const EMAILJS_CONFIG = {
    PUBLIC_KEY: "S1SgUn7Qn00TogDnl",        // Get from EmailJS Account → General
    SERVICE_ID: "service_o40ch77",        // Get from EmailJS Email Services
    TEMPLATE_ID: "template_jar07vb"       // Get from EmailJS Email Templates
};

// Initialize EmailJS when the page loads
document.addEventListener('DOMContentLoaded', () => {
    if (typeof emailjs !== 'undefined' && EMAILJS_CONFIG.PUBLIC_KEY && EMAILJS_CONFIG.PUBLIC_KEY !== "YOUR_PUBLIC_KEY") {
        emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
    }
});

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get submit button and disable it
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    const formData = {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message,
        to_email: 'mastermahesh17@gmail.com'
    };

    // Check if EmailJS is configured (check if values are NOT the placeholder defaults)
    const isEmailJSConfigured = EMAILJS_CONFIG.PUBLIC_KEY && 
                                EMAILJS_CONFIG.PUBLIC_KEY !== "YOUR_PUBLIC_KEY" &&
                                EMAILJS_CONFIG.SERVICE_ID && 
                                EMAILJS_CONFIG.SERVICE_ID !== "YOUR_SERVICE_ID" &&
                                EMAILJS_CONFIG.TEMPLATE_ID && 
                                EMAILJS_CONFIG.TEMPLATE_ID !== "YOUR_TEMPLATE_ID";

    if (isEmailJSConfigured && typeof emailjs !== 'undefined') {
        try {
            // Send email using EmailJS
            await emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID, formData);
            
            // Show success notification
            showNotification('Thank you for your message! I will get back to you soon.', 'success');
            contactForm.reset();
            
        } catch (error) {
            console.error('Email sending failed:', error);
            // Fall through to mailto fallback
            useMailtoFallback(name, email, subject, message);
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;
        }
    } else {
        // Use mailto fallback if EmailJS is not configured
        useMailtoFallback(name, email, subject, message);
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
    }
});

// Fallback function to use mailto link
function useMailtoFallback(name, email, subject, message) {
    const emailBody = `From: ${name} (${email})\n\n${message}`;
    const mailtoLink = `mailto:mastermahesh17@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Show user option to send via mailto
    if (confirm('Would you like to open your email client to send this message?\n\n(To receive emails directly to your inbox, please configure EmailJS - see EMAILJS_SETUP.md)')) {
        window.location.href = mailtoLink;
        // Still show success since mailto was opened
        setTimeout(() => {
            contactForm.reset();
        }, 500);
    }
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.project-card, .skill-category, .stat-item');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add typing effect to hero name (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Enable typing effect on hero name
window.addEventListener('load', () => {
    setTimeout(() => {
        const heroName = document.querySelector('.hero-name');
        if (heroName) {
            const originalText = heroName.textContent;
            typeWriter(heroName, originalText, 100);
        }
    }, 1000);
});

// Loading screen - hide after page loads
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }, 500);
    }
});

// Scroll Progress Indicator
window.addEventListener('scroll', () => {
    const scrollProgress = document.getElementById('scrollProgress');
    if (scrollProgress) {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        scrollProgress.style.width = scrolled + '%';
    }
});

// Scroll to Top Button
const scrollToTopBtn = document.getElementById('scrollToTop');
if (scrollToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Animated Counter for Stats
function animateCounter(element) {
    const target = parseFloat(element.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;

    const updateCounter = () => {
        current += increment;
        if (current < target) {
            const displayValue = element.getAttribute('data-target').includes('.') 
                ? current.toFixed(2) 
                : Math.floor(current);
            element.textContent = displayValue;
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = element.getAttribute('data-target');
        }
    };

    updateCounter();
}

// Observe stat items for counter animation
const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target.querySelector('.counter');
            if (counter && !counter.classList.contains('counted')) {
                counter.classList.add('counted');
                animateCounter(counter);
            }
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.stat-item').forEach(item => {
        statObserver.observe(item);
    });
});

// Enhanced animations - observe more elements
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.project-card, .skill-category, .stat-item, .education-card, .certification-card, .experience-card');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });
});

// Form validation with visual feedback
document.addEventListener('DOMContentLoaded', () => {
    const formInputs = document.querySelectorAll('#contactForm input, #contactForm textarea');
    
    formInputs.forEach(input => {
        // Email validation
        if (input.type === 'email') {
            input.addEventListener('blur', function() {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (this.value.trim() !== '' && emailRegex.test(this.value)) {
                    this.classList.add('valid');
                    this.classList.remove('invalid');
                } else if (this.value.trim() !== '') {
                    this.classList.add('invalid');
                    this.classList.remove('valid');
                    showNotification('Please enter a valid email address', 'error');
                } else {
                    this.classList.remove('valid', 'invalid');
                }
            });
        } else {
            input.addEventListener('blur', function() {
                if (this.value.trim() !== '') {
                    this.classList.add('valid');
                    this.classList.remove('invalid');
                } else if (this.hasAttribute('required')) {
                    this.classList.add('invalid');
                    this.classList.remove('valid');
                } else {
                    this.classList.remove('valid', 'invalid');
                }
            });
        }

        input.addEventListener('input', function() {
            if (this.value.trim() !== '') {
                this.classList.remove('invalid');
                if (this.type === 'email') {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (emailRegex.test(this.value)) {
                        this.classList.add('valid');
                    }
                } else {
                    this.classList.add('valid');
                }
            } else {
                this.classList.remove('valid', 'invalid');
            }
        });
    });
});

// Improved success message (better than alert)
function showNotification(message, type = 'success') {
    // Remove existing notification if any
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();

    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `<i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i> ${message}`;
    document.body.appendChild(notification);
    
    setTimeout(() => notification.classList.add('show'), 10);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

