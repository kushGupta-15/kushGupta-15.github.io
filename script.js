// Kush Gupta Portfolio Script
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons if available
  if (window.lucide) {
    window.lucide.createIcons();
  }

  initAmbientCanvas();
  initThemeToggle();
  initDynamicTyping();
  initStatsCounter();
  initProjectFilters();
  initProjectModal();
  initResumeModal();
  initCopyActions();
  initContactForm();
  initMobileMenu();
  initScrollSpy();
});

/* ----------------------------------------------------
   1. AMBIENT PARTICLES CANVAS
---------------------------------------------------- */
function initAmbientCanvas() {
  const canvas = document.getElementById('ambient-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particleCount = Math.min(Math.floor((width * height) / 18000), 70);
  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      radius: Math.random() * 2 + 1
    });
  }

  let mouseX = -1000;
  let mouseY = -1000;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function render() {
    ctx.clearRect(0, 0, width, height);

    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    const dotColor = isLight ? 'rgba(79, 70, 229, 0.45)' : 'rgba(99, 102, 241, 0.45)';
    const lineColor = isLight ? 'rgba(79, 70, 229, 0.08)' : 'rgba(99, 102, 241, 0.12)';

    // Update & draw particles
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      // Mouse influence
      const dx = mouseX - p.x;
      const dy = mouseY - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        p.x -= (dx / dist) * 0.7;
        p.y -= (dy / dist) * 0.7;
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = dotColor;
      ctx.fill();

      // Connect near particles
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dxx = p.x - p2.x;
        const dyy = p.y - p2.y;
        const d = Math.sqrt(dxx * dxx + dyy * dyy);

        if (d < 110) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = lineColor;
          ctx.lineWidth = 1 - d / 110;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(render);
  }

  render();
}

/* ----------------------------------------------------
   2. THEME TOGGLE (Dark / Light)
---------------------------------------------------- */
function initThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle-btn');
  const toggleIcon = document.getElementById('theme-toggle-icon');
  const html = document.documentElement;

  const savedTheme = localStorage.getItem('kg_portfolio_theme') || 'dark';
  html.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const current = html.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      localStorage.setItem('kg_portfolio_theme', next);
      updateThemeIcon(next);
    });
  }

  function updateThemeIcon(theme) {
    if (!toggleIcon) return;
    if (theme === 'light') {
      toggleIcon.setAttribute('data-lucide', 'moon');
    } else {
      toggleIcon.setAttribute('data-lucide', 'sun');
    }
    if (window.lucide) window.lucide.createIcons();
  }
}

/* ----------------------------------------------------
   3. DYNAMIC TYPING ROTATOR
---------------------------------------------------- */
function initDynamicTyping() {
  const el = document.getElementById('typing-role');
  if (!el || !window.PORTFOLIO_DATA) return;

  const roles = window.PORTFOLIO_DATA.profile.rolesRotating;
  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let delay = 100;

  function type() {
    const current = roles[roleIdx];

    if (isDeleting) {
      el.textContent = current.substring(0, charIdx - 1);
      charIdx--;
      delay = 40;
    } else {
      el.textContent = current.substring(0, charIdx + 1);
      charIdx++;
      delay = 80;
    }

    if (!isDeleting && charIdx === current.length) {
      delay = 2000;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      delay = 400;
    }

    setTimeout(type, delay);
  }

  type();
}

/* ----------------------------------------------------
   4. STATS ANIMATED COUNTER
---------------------------------------------------- */
function initStatsCounter() {
  const counters = document.querySelectorAll('.stat-number');
  if (!counters.length) return;

  let started = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !started) {
        started = true;
        counters.forEach((counter) => {
          const target = parseFloat(counter.getAttribute('data-target'));
          const isDecimal = counter.getAttribute('data-decimal') === 'true';
          const duration = 1600;
          const startTime = performance.now();

          function update(now) {
            const progress = Math.min((now - startTime) / duration, 1);
            const current = progress * target;

            if (isDecimal) {
              counter.textContent = current.toFixed(2);
            } else {
              counter.textContent = Math.floor(current).toLocaleString();
            }

            if (progress < 1) {
              requestAnimationFrame(update);
            } else {
              if (isDecimal) {
                counter.textContent = target.toFixed(2);
              } else {
                counter.textContent = target.toLocaleString();
              }
            }
          }

          requestAnimationFrame(update);
        });
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.getElementById('stats-row');
  if (statsSection) observer.observe(statsSection);
}

/* ----------------------------------------------------
   5. PROJECT FILTERING
---------------------------------------------------- */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.project-filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => {
        b.classList.remove('bg-indigo-600', 'text-white', 'shadow-lg');
        b.classList.add('text-slate-400', 'hover:text-white', 'bg-slate-800/40');
      });

      btn.classList.add('bg-indigo-600', 'text-white', 'shadow-lg');
      btn.classList.remove('text-slate-400', 'hover:text-white', 'bg-slate-800/40');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach((card) => {
        const cat = card.getAttribute('data-category') || '';
        const cats = cat.split(/\s+/);
        if (filter === 'all' || cats.includes(filter)) {
          card.style.display = 'flex';
          card.classList.add('animate-fadeIn');
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ----------------------------------------------------
   6. PROJECT DETAILS MODAL
---------------------------------------------------- */
function initProjectModal() {
  const modal = document.getElementById('project-modal');
  if (!modal || !window.PORTFOLIO_DATA) return;

  const closeBtn = document.getElementById('close-project-modal');
  const modalTitle = document.getElementById('modal-project-title');
  const modalTagline = document.getElementById('modal-project-tagline');
  const modalDate = document.getElementById('modal-project-date');
  const modalTech = document.getElementById('modal-project-tech');
  const modalSummary = document.getElementById('modal-project-summary');
  const modalHighlights = document.getElementById('modal-project-highlights');
  const modalGithub = document.getElementById('modal-project-github');
  const modalDemo = document.getElementById('modal-project-demo');

  window.openProjectModal = function (projectId) {
    const project = window.PORTFOLIO_DATA.projects.find((p) => p.id === projectId);
    if (!project) return;

    modalTitle.textContent = project.title;
    modalTagline.textContent = project.tagline;
    modalDate.textContent = project.date;
    modalSummary.textContent = project.summary;

    modalTech.innerHTML = project.tech
      .map((t) => `<span class="px-2.5 py-1 text-xs rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-mono-code">${t}</span>`)
      .join('');

    modalHighlights.innerHTML = project.highlights
      .map((h) => `<li class="flex items-start gap-2 text-sm text-slate-300"><span class="text-indigo-400 font-bold mt-0.5">•</span><span>${h}</span></li>`)
      .join('');

    modalGithub.href = project.github;
    modalDemo.href = project.demo;

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
    if (window.lucide) window.lucide.createIcons();
  };

  function closeModal() {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
}

/* ----------------------------------------------------
   7. RESUME PREVIEW & PRINT MODAL
---------------------------------------------------- */
function initResumeModal() {
  const modal = document.getElementById('resume-modal');
  if (!modal) return;

  const openBtns = document.querySelectorAll('.open-resume-modal-btn');
  const closeBtn = document.getElementById('close-resume-modal');
  const printBtn = document.getElementById('print-resume-btn');

  openBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      document.body.style.overflow = 'hidden';
      if (window.lucide) window.lucide.createIcons();
    });
  });

  function closeModal() {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
}

/* ----------------------------------------------------
   8. COPY TO CLIPBOARD ACTIONS
---------------------------------------------------- */
function initCopyActions() {
  const copyBtns = document.querySelectorAll('.copy-trigger');

  copyBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      const label = btn.getAttribute('data-label') || 'Text';

      if (navigator.clipboard && textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`Copied ${label} to clipboard!`);
        });
      }
    });
  });
}

function showToast(message) {
  let toast = document.getElementById('floating-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'floating-toast';
    toast.className = 'fixed bottom-6 right-6 z-50 bg-indigo-600 text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-2 text-sm font-medium transition-all transform duration-300 translate-y-12 opacity-0';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<span class="inline-block w-2 h-2 rounded-full bg-emerald-400"></span> ${message}`;
  toast.classList.remove('translate-y-12', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');

  setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-12', 'opacity-0');
  }, 2600);
}

/* ----------------------------------------------------
   9. CONTACT FORM
---------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const subject = document.getElementById('contact-subject').value || 'Portfolio Contact Inquiry';
    const message = document.getElementById('contact-message').value;

    // Trigger user email client
    const mailtoUri = `mailto:kushg1517@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Hi Kush,\n\n${message}\n\nFrom: ${name} (${email})`)}`;
    
    showToast('Opening your email client...');
    window.location.href = mailtoUri;

    form.reset();
  });
}

/* ----------------------------------------------------
   10. MOBILE MENU TOGGLE
---------------------------------------------------- */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav-drawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!menuBtn || !mobileNav) return;

  menuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('hidden');
  });

  mobileLinks.forEach((link) => {
    link.addEventListener('click', () => {
      mobileNav.classList.add('hidden');
    });
  });
}

/* ----------------------------------------------------
   11. SCROLL SPY
---------------------------------------------------- */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link-item');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPos = window.scrollY + 200;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('text-indigo-400', 'font-semibold');
      link.classList.add('text-slate-400');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.remove('text-slate-400');
        link.classList.add('text-indigo-400', 'font-semibold');
      }
    });
  });
}
