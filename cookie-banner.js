document.addEventListener('DOMContentLoaded', () => {
    const banner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('accept-cookies');
  
    if (banner && acceptBtn) {
      if (!localStorage.getItem('cookiesAccepted')) {
        banner.style.display = 'flex';
      }
  
      acceptBtn.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'true');
        banner.style.display = 'none';
      });
    }
  });
  