document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".experience-card, .education-card");
  
    cards.forEach(card => {
      card.addEventListener("click", function() {
        this.classList.toggle("expanded");
      });
    });
  
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
  
    navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
          behavior: 'smooth'
        });
        setActiveNavLink(targetId);
      });
    });
  
    // IntersectionObserver to add 'visible' class
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    });
  
    document.querySelectorAll('.slide-in').forEach(section => {
      observer.observe(section);
    });
  
    // Change active nav link on scroll
    const sections = document.querySelectorAll('section');
  
    const setActiveNavLink = (id) => {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === id) {
          link.classList.add('active');
        }
      });
    };
  
    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveNavLink(entry.target.id);
        }
      });
    }, { threshold: 0.5 });
  
    sections.forEach(section => {
      sectionObserver.observe(section);
    });
  });
