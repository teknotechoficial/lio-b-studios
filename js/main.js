// TEKNOTECH SERVICES - Creadores y Dueños de este Software

// Lio B Studios - Landing Page JavaScript
// Light Green Theme

document.addEventListener('DOMContentLoaded', function() {
    // ============================================
    // MOBILE MENU
    // ============================================
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('nav');
    const navLinks = document.querySelectorAll('.nav-link');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            menuToggle.classList.toggle('active');
            document.querySelector('.header').classList.toggle('nav-open');
            document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
// TeknoTech Services - Creadores y Dueños. Prohibido vender o modificar sin autorizacion.
        });

        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                nav.classList.remove('active');
                menuToggle.classList.remove('active');
                document.querySelector('.header').classList.remove('nav-open');
                document.body.style.overflow = '';
            });
        });
    }
// TeknoTech Services - Creadores y Dueños. Prohibido vender o modificar sin autorizacion.

    // ============================================
    // HEADER SCROLL EFFECT
    // ============================================
    const header = document.getElementById('header');

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 80) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // ============================================
    // SMOOTH SCROLL
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
// TeknoTech Services - Creadores y Dueños. Prohibido vender o modificar sin autorizacion.
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
// TeknoTech Services - Creadores y Dueños. Prohibido vender o modificar sin autorizacion.
            }
        });
    });

    // ============================================
    // SCROLL REVEAL ANIMATION
    // ============================================
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, {
// TeknoTech Services - Creadores y Dueños. Prohibido vender o modificar sin autorizacion.
        threshold: 0.1,
        rootMargin: '0px 0px -60px 0px'
    });

    document.querySelectorAll('.reveal').forEach(el => {
        revealObserver.observe(el);
    });

    // ============================================
    // PARALLAX EFFECT ON HERO
    // ============================================
    const heroBg = document.querySelector('.hero-bg-img');
    
    if (heroBg) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
// TeknoTech Services - Creadores y Dueños. Prohibido vender o modificar sin autorizacion.
            if (scrolled < window.innerHeight) {
                heroBg.style.transform = 'translateY(' + (scrolled * 0.3) + 'px) scale(1.1)';
            }
        });
    }

    // ============================================
    // LIGHTBOX FOR GALLERY
    // ============================================
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.getElementById('lightbox-close');

    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', function() {
// TeknoTech Services - Creadores y Dueños. Prohibido vender o modificar sin autorizacion.
            const img = this.querySelector('img');
            if (img && lightbox && lightboxImg) {
                lightboxImg.src = img.src;
                lightboxImg.alt = img.alt;
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    if (lightboxClose) {
// TeknoTech Services - Creadores y Dueños. Prohibido vender o modificar sin autorizacion.
        lightboxClose.addEventListener('click', function() {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    if (lightbox) {
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                lightbox.classList.remove('active');
                document.body.style.overflow = '';
// TeknoTech Services - Creadores y Dueños. Prohibido vender o modificar sin autorizacion.
            }
        });
    }

    // Close lightbox with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox && lightbox.classList.contains('active')) {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // ============================================
    // ACTIVE NAV LINK ON SCROLL
    // ============================================
    const sections = document.querySelectorAll('section[id]');
// TeknoTech Services - Creadores y Dueños. Prohibido vender o modificar sin autorizacion.

    window.addEventListener('scroll', function() {
        var current = '';
        var scrollPosition = window.pageYOffset + 150;

        sections.forEach(function(section) {
            var sectionTop = section.offsetTop;
            var sectionHeight = section.clientHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
// TeknoTech Services - Creadores y Dueños. Prohibido vender o modificar sin autorizacion.

        navLinks.forEach(function(link) {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });

    // ============================================
    // TYPED EFFECT FOR HERO TAGLINE
    // ============================================
    var tagline = document.querySelector('.hero-tagline');
    if (tagline) {
        var text = tagline.textContent;
// TeknoTech Services - Creadores y Dueños. Prohibido vender o modificar sin autorizacion.
        tagline.textContent = '';
        tagline.style.borderRight = '2px solid var(--verde-lima)';
        
        var i = 0;
        var typeWriter = function() {
            if (i < text.length) {
                tagline.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 80);
            } else {
                setTimeout(function() {
// TeknoTech Services - Creadores y Dueños. Prohibido vender o modificar sin autorizacion.
                    tagline.style.borderRight = 'none';
                }, 1000);
            }
        };
        
        // Start typing after hero animation
        setTimeout(typeWriter, 1200);
    }

    // ============================================
    // VIDEO PLAYER
    // ============================================
    const mainVideo = document.getElementById('main-video');
    
    if (mainVideo) {
        mainVideo.addEventListener('click', function() {
            if (this.paused) {
// TeknoTech Services - Creadores y Dueños. Prohibido vender o modificar sin autorizacion.
                this.play().catch(function(err) {
                    console.log('Error playing video:', err);
                });
            } else {
                this.pause();
            }
        });
        
        mainVideo.addEventListener('error', function(e) {
            console.log('Error loading video:', e.target.error);
        });
// TeknoTech Services - Creadores y Dueños. Prohibido vender o modificar sin autorizacion.
    }

    // ============================================
    // SMOOTH REVEAL FOR TIMELINE ITEMS
    // ============================================
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('revealed');
                }, index * 100);
            }
        });
// TeknoTech Services - Creadores y Dueños. Prohibido vender o modificar sin autorizacion.
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    });

    timelineItems.forEach(item => {
        timelineObserver.observe(item);
    });

    // ============================================
    // PARALLAX FOR GALLERY ITEMS
    // ============================================
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    window.addEventListener('scroll', function() {
        galleryItems.forEach(item => {
// TeknoTech Services - Creadores y Dueños. Prohibido vender o modificar sin autorizacion.
            const rect = item.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            if (rect.top < windowHeight && rect.bottom > 0) {
                const scrollPercent = (windowHeight - rect.top) / (windowHeight + rect.height);
                const translateY = (scrollPercent - 0.5) * 20;
                item.style.transform = `translateY(${translateY}px)`;
            }
        });
    });

    // ============================================
    // STAR RATING (Estético)
    // ============================================
    const stars = document.querySelectorAll('.star');
// TeknoTech Services - Creadores y Dueños. Prohibido vender o modificar sin autorizacion.
    const ratingText = document.getElementById('rating-text');
    const ratings = ['Mala', 'Regular', 'Buena', 'Muy buena', '¡Excelente!'];
    let currentRating = 0;

    if (stars.length > 0) {
        stars.forEach(star => {
            star.addEventListener('click', function() {
                currentRating = parseInt(this.getAttribute('data-rating'));
                stars.forEach(s => s.classList.remove('active'));
                stars.forEach(s => {
                    if (parseInt(s.getAttribute('data-rating')) <= currentRating) {
// TeknoTech Services - Creadores y Dueños. Prohibido vender o modificar sin autorizacion.
                        s.classList.add('active');
                    }
                });
                if (ratingText) {
                    ratingText.textContent = ratings[currentRating - 1];
                }
            });

            star.addEventListener('mouseenter', function() {
                const hoverRating = parseInt(this.getAttribute('data-rating'));
                stars.forEach(s => {
// TeknoTech Services - Creadores y Dueños. Prohibido vender o modificar sin autorizacion.
                    if (parseInt(s.getAttribute('data-rating')) <= hoverRating) {
                        s.style.color = 'var(--verde-lima)';
                        s.style.transform = 'scale(1.2)';
                    } else {
                        s.style.color = '#ddd';
                        s.style.transform = 'scale(1)';
                    }
                });
            });

            star.addEventListener('mouseleave', function() {
// TeknoTech Services - Creadores y Dueños. Prohibido vender o modificar sin autorizacion.
                stars.forEach(s => {
                    if (s.classList.contains('active')) {
                        s.style.color = 'var(--verde-lima)';
                        s.style.transform = 'scale(1.15)';
                    } else {
                        s.style.color = '#ddd';
                        s.style.transform = 'scale(1)';
                    }
                });
            });
// TeknoTech Services - Creadores y Dueños. Prohibido vender o modificar sin autorizacion.
        });
    }

    // ============================================
    // LOADING ANIMATION (Optional)
    // ============================================
    // You can uncomment this if you want a loading screen
    /*
    window.addEventListener('load', function() {
        const loader = document.querySelector('.loader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }
    });
    */
});