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
      }, 1200);
    }, 5000);