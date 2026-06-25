const header = document.querySelector('[data-header]');
const year = document.querySelector('[data-year]');
if (year) year.textContent = new Date().getFullYear();

const updateHeader = () => {
  if (!header) return;
  header.classList.toggle('is-scrolled', window.scrollY > 16);
};
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
reveals.forEach((el) => observer.observe(el));

// Newsletter signup → Kit (Letters from Lombok, form 9607819).
// Submits via fetch (no page reload) and shows the inline welcome message.
(function () {
  const form = document.getElementById('letters-form');
  if (!form) return;
  const success = document.getElementById('letters-success');
  const btn = form.querySelector('button[type="submit"]');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }
    if (btn) { btn.disabled = true; btn.textContent = 'Joining…'; }
    const data = new URLSearchParams(new FormData(form));
    const done = () => {
      if (success) { form.style.display = 'none'; success.hidden = false; }
    };
    fetch(form.action, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: data.toString()
    }).then(done).catch(done);
  });
})();
