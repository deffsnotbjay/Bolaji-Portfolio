    setTimeout(function() {
      const loader = document.getElementById("loading-screen");
      loader.classList.add("fade-out");

      setTimeout(function() {
        loader.style.display = "none";
        document.getElementById("main-content").style.display = "block";
      }, 1000); // matches the fade-out duration
    }, 5000);

//  setTimeout(function() {
//     document.getElementById("loading-screen").style.display = "none";
//     document.getElementById("main-content").style.display = "block";
//   }, 5000);

document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const mobileMenuContent = document.getElementById('mobileMenuContent');
    const navbarContainer = document.querySelector('.navbar');

    hamburgerMenu.addEventListener('click', function() {
        
        hamburgerMenu.classList.toggle('active');
        navbarContainer.classList.toggle('menu-open');
    });

  
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