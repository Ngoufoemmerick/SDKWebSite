const toggleBtn = document.querySelector('.toggle_btn');
      const toggleBtnIcon = document.querySelector('.toggle_btn i');
      const dropdownMenu = document.querySelector('.dropdown_menu');

      toggleBtn.onclick = function(){
        dropdownMenu.classList.toggle('open');

        const isOpen = dropdownMenu.classList.contains('open');

        toggleBtnIcon.classList = isOpen ? 'fa fa-times' : 'fa fa-bars';
      }

      /**
       * Js for reveal elements
       */
      ScrollReveal({
        reset: false,
        distance: '80px',
        duration: 2500,
        delay: 400,
      });

      ScrollReveal().reveal('.logo', {delay: 100, origin: 'left'});
      ScrollReveal().reveal('.menu .links li, .footer-first div, .aside .news-item', {delay: 100, origin: 'left', interval: 200});
      ScrollReveal().reveal('.main-title, .h1-title', {delay: 200, origin: 'left'});
      ScrollReveal().reveal('.sub-title', {delay: 500, origin: 'left'});
      ScrollReveal().reveal('.circle, .aside, .client-logos', {delay: 200, origin: 'right'});
      ScrollReveal().reveal('.man', {delay: 600, origin: 'bottom'});
      ScrollReveal().reveal('.circle_btn, .after-title', {delay: 600, origin: 'left'});

      
      ScrollReveal().reveal('.services-content, .client-block', {delay: 200, origin: 'left'});
      ScrollReveal().reveal('.services-content div:nth-child(1), .services-content div:nth-child(4), .latest-project .projects .imgbox:nth-child(1), .get-in-touh-form form div:nth-child(1)', {delay: 300, origin: 'left'});
      ScrollReveal().reveal('.services-content div:nth-child(3), .services-content div:nth-child(6), .latest-project .projects .imgbox:nth-child(3), .get-in-touh-form form div:nth-child(2), .get-in-touh-form form div:nth-child(4)', {delay: 300, origin: 'right'});
      ScrollReveal().reveal('.services-content div:nth-child(2), .services-content div:nth-child(5), .latest-project .projects .imgbox:nth-child(2), .get-in-touh-form form textarea, section.partners-logo', {delay: 300, origin: 'bottom'});



       