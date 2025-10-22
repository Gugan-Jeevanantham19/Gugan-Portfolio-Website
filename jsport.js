// script.js — minimal interactive behavior

document.addEventListener('DOMContentLoaded', function () {
  // Insert current year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Smooth scroll for nav links
  document.querySelectorAll('a.nav-link[href^="#"], a.btn[href^="#"]').forEach(link=>{
    link.addEventListener('click', (e)=>{
      const href = link.getAttribute('href');
      if (!href.startsWith('#')) return;
      const target = document.querySelector(href);
      if (target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
        // collapse navbar on mobile
        const bsCollapse = document.querySelector('.navbar-collapse');
        if (bsCollapse && bsCollapse.classList.contains('show')){
          new bootstrap.Collapse(bsCollapse).hide();
        }
      }
    });
  });

  // Simple bootstrap form validation
  const contactForm = document.getElementById('contactForm');
  if (contactForm){
    contactForm.addEventListener('submit', function(e){
      if (!contactForm.checkValidity()){
        e.preventDefault();
        e.stopPropagation();
      } else {
        e.preventDefault();
        // TODO: Hook to email service or backend. For now, show an alert.
        alert('Thanks — message sent (demo). Replace with your backend or Formspree.');
        contactForm.reset();
      }
      contactForm.classList.add('was-validated');
    }, false);
  }
});
