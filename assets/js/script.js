$(document).ready(function() {


    //===== Sticky Menu-Bar Start

    window.onscroll = function() {stickyNavbar()};

    var navbar = document.querySelector(".bottom-menu__bar");
    
    var stickyPoint = 100;
    
    function stickyNavbar() {
      if (window.pageYOffset >= stickyPoint) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    }
    
    //===== Sticky Menu-Bar End


    // ====== Menu Id Select Start
    $('.nav-menu a[href^="#"], .hero__scroll-icon[href^="#"], .bottom-menu__bar a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var target = $(this.hash);
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 70 
            }, 800);
        }
    });
    // ====== Menu Id Select End





    // ===== Body smooth Scroll Start
    const body = document.body,
      jsScroll = document.getElementsByClassName('js-scroll')[0],
      speed = 0.05;

    let height = jsScroll.getBoundingClientRect().height;
    let offset = 0;


    body.style.height = Math.floor(height) + "px";

    function smoothScroll() {
        offset += (window.pageYOffset - offset) * speed;
        
        jsScroll.style.transform = `translateY(-${offset}px) translateZ(0)`;
        
        requestAnimationFrame(smoothScroll);
    }

    window.addEventListener('resize', () => {
        height = jsScroll.getBoundingClientRect().height;
        body.style.height = Math.floor(height) + "px";
    });

    smoothScroll();
    // ===== Body smooth Scroll End





    // ==== Aos Start

    AOS.init();

    // ==== Aos End

    // ==== Mobail Bar Tooltip Start
    $('.link-tooltip').tooltipster({
        theme: 'tooltipster-shadow', 
        animation: 'grow',           
        delay: 200,                  
        side: 'top',                 
        distance: 10                 
    });
    // ==== Mobail Bar Tooltip End

    


});




    // ======= Service Name Start

    document.addEventListener('DOMContentLoaded', () => {
        const serviceItems = document.querySelectorAll('.service-item');

        serviceItems.forEach(item => {
            const icon = item.querySelector('.service-icon');

            item.addEventListener('mousemove', (e) => {
                const rect = item.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                icon.style.left = `${x}px`;
                icon.style.top = `${y}px`;
                
                icon.style.transform = `translate(-50%, -50%) scale(1.1) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });

            item.addEventListener('mouseleave', () => {
                icon.style.transform = `translate(-50%, -50%) scale(1.1) rotateX(0deg) rotateY(0deg)`;
            });
        });
    });

    // ======= Service Name End





    gsap.registerPlugin(ScrollTrigger);

    let allSplits = [];

    function initAnimations() {
        allSplits.forEach(s => s && s.revert());
        allSplits = [];

        // --- Character Animations (Left, Right, Top, Bottom) ---
        const config = [
            { class: '.animation-text-left', from: { x: -70, opacity: 0 } },
            { class: '.animation-text-right', from: { x: 70, opacity: 0 } },
            { class: '.animation-text-top', from: { y: -70, opacity: 0 } },
            { class: '.animation-text-bottom', from: { y: 70, opacity: 0 } }
        ];

        config.forEach(item => {
            document.querySelectorAll(item.class).forEach(el => {
                const split = new SplitType(el, { types: 'chars' });
                allSplits.push(split);
                
                gsap.from(split.chars, {
                    scrollTrigger: {
                        trigger: el,
                        start: "top 90%",
                        toggleActions: "play none none none"
                    },
                    ...item.from,
                    duration: 0.8,
                    ease: "power4.out",
                    stagger: 0.03
                });
            });
        });

    }

    document.fonts.ready.then(() => {
        initAnimations();
    });

    let resizeTimer;
    window.addEventListener("resize", () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(initAnimations, 250);
    });


    
