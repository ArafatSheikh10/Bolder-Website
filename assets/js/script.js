$(document).ready(function() {

    //===== Sticky Menu-Bar Start
    $(window).on('scroll', function(event) {
    
        var scroll = $(window).scrollTop();
    
        var windowWidth = $(window).width();
            if (windowWidth > 768) { 
            
            if (scroll < 100) {
                $("nav").removeClass("sticky");
            } else {
                $("nav").addClass("sticky");
            }
            
        } else {
            $("nav").removeClass("sticky");
        }
    });
    //===== Sticky Menu-Bar End




    //==== Nav Menu Slider Start

    $('.menu_trigger').click(function(){
        $('.nav_menu').addClass('slide_menu');
    })

    $('.menu_dismess').click(function(){
        $('.nav_menu').removeClass('slide_menu');
    })

    //==== Nav Menu Slider End



    // const body = document.body,
    //   jsScroll = document.getElementsByClassName('js-scroll')[0],
    //   height = jsScroll.getBoundingClientRect().height - 1,
    //   speed = 0.05

    // var offset = 0

    // body.style.height = Math.floor(height) + "px"

    // function smoothScroll() {
    //     offset += (window.pageYOffset - offset) * speed
        
    //     var scroll = "translateY(-" + offset + "px) translateZ(0)"
    //     jsScroll.style.transform = scroll
        
    //     raf = requestAnimationFrame(smoothScroll)
    // }
    // smoothScroll()

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