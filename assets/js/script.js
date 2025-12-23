$(document).ready(function() {

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