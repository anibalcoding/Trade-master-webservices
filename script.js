
// Mobile menu
const toggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('primary-nav');
if (toggle && nav){
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    nav.classList.remove('cl');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

// Intersection Observer reveal animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add('revealed');
      observer.unobserve(entry.target);
    }
  });
}, {threshold: .12});

document.querySelectorAll('.reveal, .card, .price-card, .tile').forEach(el => observer.observe(el));

// Contact form (demo only)
const form = document.getElementById('contact-form');
if (form){
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    alert(`Thanks ${data.name || ""}! We'll reach out at ${data.email || "your email"} soon.`);
    form.reset();
  });
}
