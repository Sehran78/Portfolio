// Formulärhantering (om formulär och bekräftelse finns på sidan)
const form = document.getElementById('contactForm');
const confirmation = document.getElementById('confirmation');

if (form && confirmation) {
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    confirmation.classList.add('show');
    form.reset();
    setTimeout(() => {
      confirmation.classList.remove('show');
    }, 3000);
  });
}

// När DOM är laddad körs allt nedan
document.addEventListener('DOMContentLoaded', () => {
  // Cookie-banner – endast på startsidan
  if (
    window.location.pathname.endsWith('index.html') ||
    window.location.pathname === '/' ||
    window.location.pathname === '/index'
  ) {
    const banner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('accept-cookies');

    if (banner && acceptBtn) {
      if (!localStorage.getItem('cookiesAccepted')) {
        banner.style.display = 'flex'; // Visa bannern
      }

      acceptBtn.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'true');
        banner.style.display = 'none'; // Dölj bannern när man accepterar
      });
    }
  }

  // Typ-effekt för startsidan, om elementen finns
  const welcomeEl = document.getElementById('welcome');
  const nameEl = document.getElementById('name');
  const img = document.getElementById('animated-img');

  if (welcomeEl && nameEl && img) {
    function typeEffect(element, text, speed, callback) {
      let i = 0;
      function typing() {
        if (i < text.length) {
          element.innerHTML += text.charAt(i);
          i++;
          setTimeout(typing, speed);
        } else if (callback) {
          callback();
        }
      }
      typing();
    }

    typeEffect(welcomeEl, 'Välkommen till min portfolio!', 95, () => {
      typeEffect(nameEl, 'Jag heter Sehran Nazarov', 75, () => {
        // Visa och animera bilden när texten är klar
        img.style.opacity = '1';
        img.style.left = '0';
      });
    });
  }
});
