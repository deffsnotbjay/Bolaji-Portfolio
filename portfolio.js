document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const mobileMenuContent = document.getElementById('mobileMenuContent');
    const navbarContainer = document.querySelector('.navbar');

    hamburgerMenu.addEventListener('click', function() {
        // Toggle 'active' class on hamburger icon for animation
        hamburgerMenu.classList.toggle('active');
        // Toggle 'menu-open' on container to control visibility of the mobile menu content
        navbarContainer.classList.toggle('menu-open');
    });

    // Close menu if a link is clicked (for better mobile UX)
    // Now querying links within the mobileMenuContent
    mobileMenuContent.querySelectorAll('.navbar-links-mobile a').forEach(link => {
        link.addEventListener('click', () => {
            if (navbarContainer.classList.contains('menu-open')) {
                hamburgerMenu.classList.remove('active');
                navbarContainer.classList.remove('menu-open');
            }
        });
    });
});

 const heroText = document.getElementById("herotext");
    const headline = document.getElementById("headline");
    const subtext = document.getElementById("subtext");

    const messages = [
      {
        headline: "Hello!",
        subtext: "I'm a <span class='name'>Full-Stack Developer</span><br> based in Nigeria"
      },
      {
        headline: "Hello!",
        subtext: "I'm <span class='name'>Ologunde Bolaji</span><br> <p class='free'>A Freelance Developer</p>"
      }
    ];

    let index = 0;

    setInterval(() => {
      heroText.classList.add("fade-out");

      setTimeout(() => {
        index = (index + 1) % messages.length;
        headline.innerHTML = messages[index].headline;
        subtext.innerHTML = messages[index].subtext;
        heroText.classList.remove("fade-out");
      }, 1500);
    }, 5000);


const counters = document.querySelectorAll('#stats h3');
  let started = false;

  function animateCount(el, target) {
    let count = 0;
    const speed = 200; 
    const increment = Math.ceil(target / speed);

    const updateCount = () => {
      count += increment;
      if (count >= target) {
        el.textContent = target.toLocaleString();
      } else {
        el.textContent = count.toLocaleString();
        requestAnimationFrame(updateCount);
      }
    };
    updateCount();
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !started) {
        counters.forEach(counter => {
          const target = +counter.getAttribute('data-target');
          animateCount(counter, target);
        });
        started = true;
      }
    });
  }, { threshold: 0.5 });

  observer.observe(document.querySelector('#stats'));