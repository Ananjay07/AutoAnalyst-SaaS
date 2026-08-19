const SIM_DATASETS = {
  churn: {
    filename: 'telecom_churn.csv',
    records: '1,000 rows',
    features: '5 features',
    time: '106.9ms',
    cv: '0.710',
    top_weight: '40.5%',
    columns: [
      { name: 'Customer_ID', type: 'string', fill: 100, status: 'OK', statusClass: 'success' },
      { name: 'Monthly_Charges', type: 'float', fill: 100, status: 'unscaled', statusClass: 'warning' },
      { name: 'Contract_Type', type: 'string', fill: 100, status: 'OK', statusClass: 'success' },
      { name: 'Support_Calls', type: 'int', fill: 92.4, status: '7.6% nulls (imputed)', statusClass: 'danger' },
      { name: 'Churned', type: 'boolean', fill: 100, status: 'Target', statusClass: 'success' }
    ],
    drivers: [
      { name: 'Monthly_Charges', weight: 40.5 },
      { name: 'Contract_Type', weight: 22.1 },
      { name: 'Support_Calls', weight: 18.4 },
      { name: 'Tenure_Months', weight: 12.0 },
      { name: 'Payment_Method', weight: 7.0 }
    ],
    heatmap: [
      [1.00, 0.45, 0.32, -0.21],
      [0.45, 1.00, 0.15, -0.08],
      [0.32, 0.15, 1.00, 0.11],
      [-0.21, -0.08, 0.11, 1.00]
    ],
    heatmap_labels: ['Charges', 'Contract', 'Calls', 'Tenure'],
    briefing: `### Executive Briefing: Customer Churn Analysis\n\n**Key Takeaway**: Customer churn is heavily driven by **Monthly Charges** and month-to-month contracts. High charge amounts correlate strongly with subscriber attrition.\n\n- **Monthly charges** account for **40.5%** of model predictive weight.\n- **Contract types** represent another **22.1%** of churn correlation.\n- **Data Sanity Check**: Support Calls contained **7.6% nulls**, which were successfully imputed using median values. Outliers (5.2%) were capped to prevent variance skew.\n- **Actionable Advice**: Proactively target month-to-month subscribers with high charges using annual contract incentives before they hit the 3-month tenure cliff.`
  },
  saas: {
    filename: 'saas_expansion_mrr.csv',
    records: '4,500 rows',
    features: '8 features',
    time: '241.4ms',
    cv: '0.842',
    top_weight: '48.2%',
    columns: [
      { name: 'Workspace_ID', type: 'string', fill: 100, status: 'OK', statusClass: 'success' },
      { name: 'Usage_Growth', type: 'float', fill: 100, status: 'OK', statusClass: 'success' },
      { name: 'Team_Size', type: 'int', fill: 100, status: 'OK', statusClass: 'success' },
      { name: 'Last_Login_Days', type: 'int', fill: 98.8, status: '1.2% nulls (imputed)', statusClass: 'warning' },
      { name: 'NPS_Score', type: 'int', fill: 95.0, status: '5.0% nulls (imputed)', statusClass: 'warning' },
      { name: 'Expanded', type: 'boolean', fill: 100, status: 'Target', statusClass: 'success' }
    ],
    drivers: [
      { name: 'Usage_Growth', weight: 48.2 },
      { name: 'Team_Size', weight: 25.3 },
      { name: 'Industry_Type', weight: 12.5 },
      { name: 'Last_Login_Days', weight: 8.0 },
      { name: 'NPS_Score', weight: 6.0 }
    ],
    heatmap: [
      [1.00, 0.58, 0.18, -0.42],
      [0.58, 1.00, 0.22, -0.31],
      [0.18, 0.22, 1.00, 0.05],
      [-0.42, -0.31, 0.05, 1.00]
    ],
    heatmap_labels: ['Usage', 'Team Size', 'Vertical', 'Login'],
    briefing: `### Executive Briefing: SaaS Expansion MRR\n\n**Key Takeaway**: Workspace expansion revenue correlates directly with **Usage Growth** and the addition of team members to the account.\n\n- **Usage growth** is the primary driver representing **48.2%** of expansion likelihood.\n- **Team size increases** account for **25.3%** of upselling events.\n- **Data Sanity Check**: Imputed nulls on Last_Login_Days and NPS_Score. Columns were standardized and scaled for tree algorithms.\n- **Actionable Advice**: Integrate product alerts in customer success systems to trigger automated expansion outreach when team size grows beyond 5 members.`
  },
  defect: {
    filename: 'factory_defects_log.csv',
    records: '12,000 rows',
    features: '6 features',
    time: '488.1ms',
    cv: '0.915',
    top_weight: '51.8%',
    columns: [
      { name: 'Machine_ID', type: 'string', fill: 100, status: 'OK', statusClass: 'success' },
      { name: 'Operating_Temp', type: 'float', fill: 100, status: 'OK', statusClass: 'success' },
      { name: 'Vibration_Index', type: 'float', fill: 100, status: 'OK', statusClass: 'success' },
      { name: 'Hours_Active', type: 'float', fill: 100, status: 'OK', statusClass: 'success' },
      { name: 'Lubricant_Level', type: 'float', fill: 98.8, status: '1.2% nulls (imputed)', statusClass: 'warning' },
      { name: 'Defect_Triggered', type: 'boolean', fill: 100, status: 'Target', statusClass: 'success' }
    ],
    drivers: [
      { name: 'Operating_Temp', weight: 51.8 },
      { name: 'Vibration_Index', weight: 24.0 },
      { name: 'Hours_Active', weight: 15.5 },
      { name: 'Lubricant_Level', weight: 6.2 },
      { name: 'Model_Year', weight: 2.5 }
    ],
    heatmap: [
      [1.00, 0.68, 0.44, -0.55],
      [0.68, 1.00, 0.38, -0.42],
      [0.44, 0.38, 1.00, -0.18],
      [-0.55, -0.42, -0.18, 1.00]
    ],
    heatmap_labels: ['Temp', 'Vibration', 'Hours', 'Lubricant'],
    briefing: `### Executive Briefing: Machine Defects Analysis\n\n**Key Takeaway**: Mechanical defects are primarily caused by thermal variance. Specifically, elevated **Operating Temperature** is the core indicator of bearing failure.\n\n- **Operating temperature** accounts for **51.8%** of defect root causes.\n- **Vibration index** spikes signal bearing fatigue and add **24.0%** to predictive models.\n- **Data Sanity Check**: Removed sensor null spikes (1.2%) automatically. Normalized active machine hours.\n- **Actionable Advice**: Introduce cooling cycles and bearing inspections when operating temperatures exceed 80°C.`
  }
};

let currentDatasetKey = 'churn';
let currentActiveTab = 0; // 0: Quality, 1: Drivers, 2: Briefing
let isAnimating = false;

// --- CUSTOM CURSOR FOLLOWER ---
let mouseX = 0, mouseY = 0;
let dotX = 0, dotY = 0;
let ringX = 0, ringY = 0;
const ringInertia = 0.15;

const dot = document.querySelector('.custom-cursor-dot');
const ring = document.querySelector('.custom-cursor-ring');

let targetDx = 0;
let targetDy = 0;
let cachedHeroGlow = null;

window.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  // Calculate relative offset from center (-1 to +1)
  const wHalf = window.innerWidth / 2;
  const hHalf = window.innerHeight / 2;
  targetDx = (e.clientX - wHalf) / wHalf;
  targetDy = (e.clientY - hHalf) / hHalf;

  if (!cachedHeroGlow) cachedHeroGlow = document.getElementById('heroGlow');
  if (cachedHeroGlow) {
    cachedHeroGlow.style.transform = `translateX(calc(-50% + ${-targetDx * 35}px)) translateY(${-targetDy * 25}px)`;
  }
});

function initParticles() {
  const canvas = document.getElementById('bgCanvas');
  const hero = document.querySelector('.hero');
  if (!canvas) return;

  const ctx = canvas.getContext('2d', { alpha: true });
  if (!ctx) return;

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reduce.matches) return;

  let W = 0, H = 0, dpr = 1, raf = 0, last = performance.now();

  const pointer = { x: 0, y: 0, active: false };
  const nodes = [];
  const satellites = [];
  const NODE_COUNT = window.innerWidth < 768 ? 45 : 85;

  function resize() {
    W = window.innerWidth;
    H = window.innerHeight;
    dpr = Math.min(window.devicePixelRatio || 1, 1.6);
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width = W + 'px';
    canvas.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    while (nodes.length > NODE_COUNT) nodes.pop();
    while (nodes.length < NODE_COUNT) {
      nodes.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - .5) * .10,
        vy: (Math.random() - .5) * .10,
        r: .55 + Math.random() * 1.15,
        phase: Math.random() * Math.PI * 2
      });
    }
  }

  function setPointer(x, y) {
    pointer.x = x;
    pointer.y = y;
    pointer.active = true;
    if (!satellites.length) {
      for (let i = 0; i < 7; i++) {
        const a = (Math.PI * 2 * i) / 7;
        const r = 48 + (i % 3) * 20;
        satellites.push({
          x: x + Math.cos(a) * r,
          y: y + Math.sin(a) * r,
          vx: 0, vy: 0,
          ox: Math.cos(a) * r,
          oy: Math.sin(a) * r,
          phase: Math.random() * Math.PI * 2,
          speed: .001 + Math.random() * .001
        });
      }
    }
  }

  window.addEventListener('pointermove', e => setPointer(e.clientX, e.clientY), { passive: true });
  window.addEventListener('pointerleave', () => {
    pointer.active = false;
  }, { passive: true });
  window.addEventListener('resize', resize, { passive: true });

  function draw(time) {
    const dt = Math.min(32, time - last);
    last = time;
    ctx.clearRect(0, 0, W, H);

    // Quiet ambient network across the entire page viewport.
    nodes.forEach(n => {
      n.phase += .0018;
      n.x += n.vx + Math.sin(n.phase) * .006;
      n.y += n.vy + Math.cos(n.phase * .7) * .004;
      if (n.x < -15) n.x = W + 15;
      if (n.x > W + 15) n.x = -15;
      if (n.y < -15) n.y = H + 15;
      if (n.y > H + 15) n.y = -15;
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255,46,99,.055)';
      ctx.fill();
    });

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j];
        const dx = a.x - b.x, dy = a.y - b.y, d2 = dx * dx + dy * dy;
        const max = 135;
        if (d2 > max * max) continue;
        const d = Math.sqrt(d2);
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = `rgba(255,46,99,${(1 - d / max) * .035})`;
        ctx.lineWidth = .55;
        ctx.stroke();
      }
    }

    // Global cursor constellation, rendered INTO the background canvas.
    if (pointer.active) {
      satellites.forEach((n, i) => {
        n.phase += n.speed * dt;
        const tx = pointer.x + n.ox + Math.cos(n.phase) * 7;
        const ty = pointer.y + n.oy + Math.sin(n.phase * 1.15) * 7;
        n.vx += (tx - n.x) * .05;
        n.vy += (ty - n.y) * .05;
        n.vx *= .86;
        n.vy *= .86;
        n.x += n.vx;
        n.y += n.vy;
      });

      satellites.forEach((n, i) => {
        const next = satellites[(i + 1) % satellites.length];

        ctx.beginPath();
        ctx.moveTo(pointer.x, pointer.y);
        ctx.lineTo(n.x, n.y);
        ctx.strokeStyle = 'rgba(255,46,99,.16)';
        ctx.lineWidth = .7;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(n.x, n.y);
        ctx.lineTo(next.x, next.y);
        ctx.strokeStyle = 'rgba(255,46,99,.085)';
        ctx.lineWidth = .6;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.25, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,46,99,.78)';
        ctx.shadowBlur = 10;
        ctx.shadowColor = 'rgba(255,46,99,.35)';
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      ctx.beginPath();
      ctx.arc(pointer.x, pointer.y, 2, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255,255,255,.85)';
      ctx.fill();

      const g = ctx.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, 145);
      g.addColorStop(0, 'rgba(255,46,99,.055)');
      g.addColorStop(.45, 'rgba(255,46,99,.018)');
      g.addColorStop(1, 'rgba(255,46,99,0)');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(pointer.x, pointer.y, 145, 0, Math.PI * 2);
      ctx.fill();
    }

    raf = requestAnimationFrame(draw);
  }

  resize();
  raf = requestAnimationFrame(draw);
}

function updateCursor() {
  dotX = mouseX;
  dotY = mouseY;

  ringX += (mouseX - ringX) * ringInertia;
  ringY += (mouseY - ringY) * ringInertia;

  if (dot) {
    dot.style.left = `${dotX}px`;
    dot.style.top = `${dotY}px`;
  }

  if (ring) {
    ring.style.left = `${ringX}px`;
    ring.style.top = `${ringY}px`;
  }

  requestAnimationFrame(updateCursor);
}

// Binds cursor scales to hover elements
function setupCursorHovers() {
  const hoverables = document.querySelectorAll('a, button, .preset-card, .mockup-tab, .btn');
  hoverables.forEach(el => {
    // Prevent duplicate binding
    el.removeEventListener('mouseenter', onHoverEnter);
    el.removeEventListener('mouseleave', onHoverLeave);

    el.addEventListener('mouseenter', onHoverEnter);
    el.addEventListener('mouseleave', onHoverLeave);
  });
}

function onHoverEnter() {
  if (dot) dot.classList.add('hovered');
  if (ring) ring.classList.add('hovered');
}

function onHoverLeave() {
  if (dot) dot.classList.remove('hovered');
  if (ring) ring.classList.remove('hovered');
}

// --- LIVE ZONE TIME CLOCKS ---
function updateClocks() {
  const nycTime = document.getElementById('timeNyc');
  const lonTime = document.getElementById('timeLon');
  const sinTime = document.getElementById('timeSin');

  const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };

  if (nycTime) {
    nycTime.textContent = new Date().toLocaleTimeString('en-US', { ...options, timeZone: 'America/New_York' });
  }
  if (lonTime) {
    lonTime.textContent = new Date().toLocaleTimeString('en-US', { ...options, timeZone: 'Europe/London' });
  }
  if (sinTime) {
    sinTime.textContent = new Date().toLocaleTimeString('en-US', { ...options, timeZone: 'Asia/Singapore' });
  }
}

// --- INITIALIZATION ---
window.scrollTo(0, 0);
document.documentElement.scrollTop = 0;
document.body.scrollTop = 0;

window.addEventListener('DOMContentLoaded', () => {
  // Start Custom Cursor loop
  updateCursor();
  setupCursorHovers();

  // Start Canvas Particle Constellation
  initParticles();

  // Start timezone clock ticker
  setInterval(updateClocks, 1000);
  updateClocks();

  // Header Scroll Class + Scroll Progress Bar
  const header = document.querySelector('header');
  const scrollBar = document.getElementById('scrollBar');
  window.addEventListener('scroll', () => {
    if (header) {
      header.classList.toggle('scrolled', window.scrollY > 15);
    }
    if (scrollBar) {
      const max = Math.max(1, document.body.scrollHeight - window.innerHeight);
      scrollBar.style.width = (window.scrollY / max * 100) + '%';
    }
  }, { passive: true });

  // Scroll reveal transitions (Luminous Labs style blur reveal)
  const blurObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-active');
        blurObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.blur-reveal').forEach(el => blurObserver.observe(el));

  // Hero first paint: content is visible immediately. GSAP only adds a
  // tiny entrance from the already-visible state; it never hides the hero.
  requestAnimationFrame(() => {
    const intro = [
      document.querySelector('.hero > .animate-slide'),
      document.querySelector('.hero-actions'),
      document.querySelector('.hero-meta'),
      document.querySelector('#heroProductPreview')
    ].filter(Boolean);

    intro.forEach((el, index) => {
      gsap.fromTo(el,
        { y: 14, opacity: 1 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: index * 0.08,
          ease: 'power3.out',
          clearProps: 'transform,opacity'
        }
      );
    });
  });

  // ─────────────────────────────────────────────────────────────────────────────
  // ─────────────────────────────────────────────────────────────────────────────
  // CINEMATIC PRODUCT-SITE MOTION
  //
  // Inspired by the motion language of the Luminous Labs page:
  // - slow inertial scrolling
  // - hero depth
  // - gentle product parallax
  // - staggered section reveals
  // - scroll-aware marquee
  // - process cards that activate as the story progresses
  //
  // Stability rule:
  // Each visual element has ONE transform owner.
  // No tile fades out while scrolling. No repeated reverse reveals.
  // ─────────────────────────────────────────────────────────────────────────────
  let lenis = null;

  if (typeof Lenis !== 'undefined') {
    lenis = new Lenis({
      duration: 1.5,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier: 0.82,
      touchMultiplier: 1,
      syncTouch: false
    });
  }

  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    if (lenis) {
      lenis.on('scroll', ScrollTrigger.update);
    }

    // One master clock for Lenis + GSAP.
    gsap.ticker.add((time) => {
      if (lenis) lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(1000, 16);

    // ── HERO: SMOOTH CINEMATIC ZOOM ─────────────────────────────────────────
    // IMPORTANT: the hero is NOT pinned. Pinning the entire hero while the
    // preview is scaling was causing layout jumps/horizontal movement.
    // We instead let normal scrolling continue and animate only the visual.
    const hero = document.querySelector('.hero');
    const heroTitle = document.querySelector('.hero h1');
    const heroLead = document.querySelector('.hero .lead');
    const heroActions = document.querySelector('.hero-actions');
    const heroMeta = document.querySelector('.hero-meta');
    const heroPreview = document.querySelector('#heroProductPreview');
    const heroGlow = document.querySelector('#heroGlow');

    if (hero && heroPreview) {
      [heroTitle, heroLead, heroActions, heroMeta, heroPreview, heroGlow]
        .filter(Boolean)
        .forEach(el => gsap.killTweensOf(el));

      // Fixed baseline — prevents old transform values from accumulating.
      gsap.set(heroPreview, {
        x: 0,
        y: 0,
        scale: 1,
        rotation: 0,
        rotateX: 0,
        rotateY: 0,
        // Anchor the bottom edge. The zoom grows upward into the hero
        // instead of expanding down over the marquee below it.
        transformOrigin: '50% 100%',
        force3D: true
      });

      const heroZoom = gsap.timeline({
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: () => `+=${Math.max(650, window.innerHeight * 0.95)}`,
          scrub: 2.8,
          invalidateOnRefresh: true
        }
      });

      // Keep the hero copy calm — very small movement.
      if (heroTitle) {
        heroZoom.to(heroTitle, {
          y: -34,
          scale: 0.97,
          opacity: 0.82,
          ease: 'none',
          duration: 1
        }, 0);
      }

      if (heroLead) {
        heroZoom.to(heroLead, {
          y: -18,
          opacity: 0.78,
          ease: 'none',
          duration: 1
        }, 0);
      }

      if (heroActions) {
        heroZoom.to(heroActions, {
          y: -10,
          opacity: 0.86,
          ease: 'none',
          duration: 1
        }, 0);
      }

      if (heroMeta) {
        heroZoom.to(heroMeta, {
          y: -6,
          opacity: 0.86,
          ease: 'none',
          duration: 1
        }, 0);
      }

      // The actual cinematic effect: a controlled, moderate zoom.
      // No x movement whatsoever, so the page cannot drift sideways.
      heroZoom.to(heroPreview, {
        scale: 1.13,
        y: 0,
        x: 0,
        ease: 'none',
        duration: 1
      }, 0);

      const previewBody = heroPreview.querySelector('.hero-preview-body');
      if (previewBody) {
        gsap.set(previewBody, {
          x: 0,
          y: 0,
          scale: 1
        });

        heroZoom.to(previewBody, {
          x: 0,
          y: 0,
          scale: 1.004,
          ease: 'none',
          duration: 1
        }, 0);
      }

      if (heroGlow) {
        heroZoom.to(heroGlow, {
          x: 0,
          y: 30,
          scale: 1.08,
          opacity: 0.24,
          ease: 'none',
          duration: 1
        }, 0);
      }
    }

    // ── MARQUEE: horizontal depth movement ──────────────────────────────────
    const marquee = document.querySelector('.marquee-track');

    if (marquee) {
      gsap.to(marquee, {
        xPercent: -7,
        ease: 'none',
        scrollTrigger: {
          trigger: '.marquee-container',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 2.4,
          invalidateOnRefresh: true
        }
      });
    }

    // ── SANDBOX: CINEMATIC PICTURE ZOOM ───────────────────────────────────
    // The mockup stays visible while its outer frame slowly scales and lifts.
    // No opacity scrub = no disappear/reappear glitch.
    const productMockup = document.querySelector('#product');

    if (productMockup) {
      gsap.killTweensOf(productMockup);

      gsap.set(productMockup, {
        y: 0,
        x: 0,
        scale: 1,
        rotation: 0,
        rotateX: 0,
        rotateY: 0,
        opacity: 1,
        clearProps: 'transform,opacity'
      });

      gsap.timeline({
        scrollTrigger: {
          trigger: productMockup,
          start: 'top 92%',
          end: 'bottom 12%',
          scrub: 2.4,
          invalidateOnRefresh: true
        }
      })
        .fromTo(productMockup,
          {
            scale: 0.94,
            y: 42
          },
          {
            scale: 1,
            y: 0,
            duration: 0.38,
            ease: 'power3.out'
          }
        )
        .to(productMockup, {
          scale: 1.035,
          y: -24,
          duration: 0.62,
          ease: 'none'
        });
    }

    // ── STATS: soft lift, once ───────────────────────────────────────────────
    const statsStrip = document.querySelector('.stats-strip');

    if (statsStrip) {
      gsap.fromTo(statsStrip,
        { y: 34, opacity: 0.001, scale: 0.985 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
          scrollTrigger: {
            trigger: statsStrip,
            start: 'top 88%',
            toggleActions: 'play none none none',
            once: true,
            invalidateOnRefresh: true
          }
        }
      );

      gsap.fromTo(statsStrip.querySelectorAll('.stat-item'),
        { y: 16, opacity: 0.001 },
        {
          y: 0,
          opacity: 1,
          duration: 0.62,
          stagger: 0.07,
          ease: 'power2.out',
          clearProps: 'transform,opacity',
          scrollTrigger: {
            trigger: statsStrip,
            start: 'top 82%',
            toggleActions: 'play none none none',
            once: true,
            invalidateOnRefresh: true
          }
        }
      );
    }

    // ── HEADINGS: editorial reveal ───────────────────────────────────────────
    document.querySelectorAll('.section-header').forEach((header) => {
      const parts = [
        header.querySelector('.subheading'),
        header.querySelector('h2'),
        header.querySelector('p')
      ].filter(Boolean);

      gsap.killTweensOf(parts);

      gsap.set(parts, {
        y: 0,
        x: 0,
        opacity: 1,
        filter: 'none',
        clearProps: 'transform,opacity,filter'
      });

      gsap.fromTo(parts,
        { y: 28, opacity: 0.001 },
        {
          y: 0,
          opacity: 1,
          duration: 0.78,
          stagger: 0.075,
          ease: 'power3.out',
          clearProps: 'transform,opacity,filter',
          scrollTrigger: {
            trigger: header,
            start: 'top 88%',
            toggleActions: 'play none none none',
            once: true,
            invalidateOnRefresh: true
          }
        }
      );
    });

    // ── FEATURES: PINNED HORIZONTAL PRODUCT STORY ──────────────────────────
    const featuresSection = document.querySelector('#features');
    const bentoGrid = document.querySelector('#features .bento-grid');

    if (featuresSection && bentoGrid && window.innerWidth > 768) {
      const cards = Array.from(bentoGrid.querySelectorAll('.bento-card'));

      // Give the track a stable transform baseline.
      gsap.set(bentoGrid, { x: 0, force3D: true });

      // Cards begin slightly below the visual plane.
      gsap.set(cards, {
        y: 42,
        opacity: 0,
        scale: 0.965,
        force3D: true
      });

      const featureTl = gsap.timeline({
        scrollTrigger: {
          trigger: featuresSection,
          start: 'top top',
          end: () => `+=${Math.max(1500, bentoGrid.scrollWidth * 1.15)}`,
          scrub: 1.6,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true
        }
      });

      // Bring the first card into focus.
      featureTl.to(cards, {
        y: 0,
        opacity: 1,
        scale: 1,
        stagger: 0.08,
        duration: 0.28,
        ease: 'power3.out'
      }, 0);

      // The actual horizontal journey.
      featureTl.to(bentoGrid, {
        x: () => -(bentoGrid.scrollWidth - featuresSection.clientWidth + 70),
        duration: 0.72,
        ease: 'none'
      }, 0.12);

      // As the track travels, cards receive a tiny scale rhythm. This is
      // deliberately subtle and does not alter their y-position.
      cards.forEach((card, index) => {
        featureTl.to(card, {
          scale: 1.025,
          duration: 0.12,
          ease: 'none'
        }, 0.18 + index * 0.14);

        featureTl.to(card, {
          scale: 1,
          duration: 0.12,
          ease: 'none'
        }, 0.30 + index * 0.14);
      });
    } else {
      // Mobile: vertical editorial reveals.
      document.querySelectorAll('#features .bento-card').forEach((card, index) => {
        gsap.fromTo(card,
          { y: 32, opacity: 0.001, scale: 0.985 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.72,
            delay: index * 0.07,
            ease: 'power3.out',
            clearProps: 'transform,opacity',
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
              toggleActions: 'play none none none',
              once: true,
              invalidateOnRefresh: true
            }
          }
        );
      });
    }

    // ── HOW IT WORKS: CHAPTERD STORY ───────────────────────────────────────
    const processSection = document.querySelector('#how-it-works');
    const processGrid = document.querySelector('#how-it-works .process-grid');

    if (processSection && processGrid && window.innerWidth > 768) {
      const steps = Array.from(processGrid.querySelectorAll('.process-step'));

      gsap.set(steps, {
        x: 0,
        y: 0,
        opacity: 1,
        scale: 1,
        force3D: true
      });

      const processTl = gsap.timeline({
        scrollTrigger: {
          trigger: processSection,
          start: 'top top',
          end: () => `+=${Math.max(1200, steps.length * 430)}`,
          scrub: 1.5,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true
        }
      });

      steps.forEach((step, index) => {
        const fromX = index === 0 ? 0 : 90;
        const previous = index > 0 ? steps[index - 1] : null;

        if (index === 0) {
          processTl.to(step, {
            x: 0,
            opacity: 1,
            scale: 1.02,
            duration: 0.22,
            ease: 'power3.out'
          }, 0);
        } else {
          // Previous chapter recedes slightly.
          processTl.to(previous, {
            x: -90,
            opacity: 0.42,
            scale: 0.965,
            duration: 0.22,
            ease: 'power3.inOut'
          });

          // New chapter enters from the right.
          processTl.fromTo(step,
            {
              x: fromX,
              opacity: 0.25,
              scale: 0.965
            },
            {
              x: 0,
              opacity: 1,
              scale: 1.02,
              duration: 0.26,
              ease: 'power3.out'
            }
          );
        }

        processTl.to(step, {
          scale: 1,
          duration: 0.12,
          ease: 'none'
        });

        ScrollTrigger.create({
          trigger: step,
          start: 'top 62%',
          end: 'bottom 38%',
          invalidateOnRefresh: true,
          onEnter: () => step.classList.add('is-active'),
          onEnterBack: () => step.classList.add('is-active'),
          onLeave: () => step.classList.remove('is-active'),
          onLeaveBack: () => step.classList.remove('is-active')
        });
      });
    } else {
      document.querySelectorAll('#how-it-works .process-step').forEach((step, index) => {
        gsap.fromTo(step,
          { x: 34, opacity: 0.001 },
          {
            x: 0,
            opacity: 1,
            duration: 0.72,
            delay: index * 0.08,
            ease: 'power3.out',
            clearProps: 'transform,opacity',
            scrollTrigger: {
              trigger: step,
              start: 'top 88%',
              toggleActions: 'play none none none',
              once: true,
              invalidateOnRefresh: true
            }
          }
        );
      });
    }

    // ── RADAR: CINEMATIC ZOOM MOMENT ───────────────────────────────────────
    const radarWidget = document.querySelector('.radar-widget');
    const honestSection = document.querySelector('.honest-section');

    if (radarWidget) {
      gsap.set(radarWidget, {
        y: 0,
        scale: 0.91,
        opacity: 1,
        force3D: true
      });

      gsap.to(radarWidget, {
        scale: 1.045,
        y: -18,
        ease: 'none',
        scrollTrigger: {
          trigger: radarWidget,
          start: 'top 88%',
          end: 'bottom 18%',
          scrub: 2.3,
          invalidateOnRefresh: true
        }
      });
    }

    if (honestSection) {
      gsap.fromTo(honestSection,
        { x: 34, opacity: 0.001 },
        {
          x: 0,
          opacity: 1,
          duration: 0.78,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
          scrollTrigger: {
            trigger: honestSection,
            start: 'top 88%',
            toggleActions: 'play none none none',
            once: true,
            invalidateOnRefresh: true
          }
        }
      );
    }

    // ── CTA: final editorial reveal ──────────────────────────────────────────
    const cta = document.querySelector('.cta-banner');

    if (cta) {
      gsap.fromTo(cta,
        { y: 42, opacity: 0.001, scale: 0.985 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.82,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
          scrollTrigger: {
            trigger: cta,
            start: 'top 89%',
            toggleActions: 'play none none none',
            once: true,
            invalidateOnRefresh: true
          }
        }
      );
    }

    // ── AMBIENT SECTION STATE ────────────────────────────────────────────────
    // Adds a little depth without moving the actual content.
    document.querySelectorAll('main > section').forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top 70%',
        end: 'bottom 30%',
        invalidateOnRefresh: true,
        onEnter: () => section.classList.add('is-story-active'),
        onEnterBack: () => section.classList.add('is-story-active'),
        onLeave: () => section.classList.remove('is-story-active'),
        onLeaveBack: () => section.classList.remove('is-story-active')
      });
    });
  }

  // Make sure ScrollTrigger measures the final layout.
  requestAnimationFrame(() => ScrollTrigger.refresh());
});

// --- SANDBOX NAVIGATION ---
function switchMockupTab(tabIndex) {
  if (isAnimating) return;
  currentActiveTab = tabIndex;

  const tabs = document.querySelectorAll('.mockup-tab');
  tabs.forEach((tab, idx) => {
    tab.classList.toggle('active', idx === tabIndex);
  });

  renderDashboardState();
}

function selectPreset(key) {
  if (isAnimating) return;
  currentDatasetKey = key;
  startSimulation();
}

function resetSim() {
  if (isAnimating) return;
  const body = document.getElementById('mockupBody');
  if (!body) return;

  currentActiveTab = 0;

  body.innerHTML = `
    <div style="flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; padding: 20px 0;">
      <h3 style="font-family: 'Plus Jakarta Sans', sans-serif; font-size: 18px; font-weight: 600; margin-bottom: 12px;">Pre-loaded Simulation Datasets</h3>
      <p style="color: var(--text-muted); font-size: 14px; max-width: 480px; margin: 0 auto 36px; line-height: 1.6;">
        Select one of our standard SaaS templates below to run the local audit pipeline. Custom file upload is available in the commercial version.
      </p>
      <div class="presets-grid" style="width: 100%; max-width: 800px;">
        <div class="preset-card" onclick="selectPreset('churn')">
          <h4>📊 Customer Churn</h4>
          <span>1,000 rows • 5 metrics</span>
        </div>
        <div class="preset-card" onclick="selectPreset('saas')">
          <h4>💰 SaaS MRR Expansion</h4>
          <span>4,500 rows • 8 metrics</span>
        </div>
        <div class="preset-card" onclick="selectPreset('defect')">
          <h4>⚙️ Machine Defects</h4>
          <span>12,000 rows • 6 metrics</span>
        </div>
      </div>
    </div>
  `;

  const title = document.getElementById('mockupTitle');
  if (title) title.textContent = "AutoAnalyst sandbox — Choose Data Source";

  // Deactivate tabs
  const tabs = document.querySelectorAll('.mockup-tab');
  tabs.forEach(tab => tab.classList.remove('active'));

  // Hide tabs container
  const tabsContainer = document.querySelector('.mockup-tabs');
  if (tabsContainer) tabsContainer.style.display = 'none';

  // Re-bind cursor triggers for preset cards
  setupCursorHovers();
}

// --- LOADING SIMULATOR ---
function startSimulation() {
  isAnimating = true;
  const body = document.getElementById('mockupBody');
  if (!body) return;

  const dataset = SIM_DATASETS[currentDatasetKey];

  const title = document.getElementById('mockupTitle');
  if (title) title.textContent = `Analyzing ${dataset.filename}...`;

  body.innerHTML = `
    <div class="loading-view">
      <div class="progress-track">
        <div class="progress-bar" id="progressBar"></div>
      </div>
      <div class="loading-text" id="loadingText">Initializing parser...</div>
      <div class="loading-subtext" id="loadingSubtext">Allocating memory buffers</div>
      <div class="loading-console" id="loadingConsole"></div>
    </div>
  `;

  const logs = [
    { t: 0, msg: `[SYS] Mount directory file: ${dataset.filename}` },
    { t: 300, msg: `[PARSER] Headers extracted: [${dataset.columns.map(c => c.name).join(', ')}]` },
    { t: 600, msg: `[AUDITOR] Memory layout loaded. Parsing ${dataset.records}...` },
    { t: 900, msg: `[AUDITOR] Calculated fill indexes. Quality scores ready.` },
    { t: 1200, msg: `[SANITY] Identified anomalies. Applying medians to missing values...` },
    { t: 1500, msg: `[MODEL] Splitting train/test matrices (80/20)...` },
    { t: 1900, msg: `[MODEL] Training gradient boosted classifier pipeline...` },
    { t: 2300, msg: `[MODEL] 5-Fold cross validation complete. Accuracy score: ${dataset.cv}` },
    { t: 2700, msg: `[REPORT] Generating text briefing models...` },
    { t: 3100, msg: `[SYS] Audit analysis successfully complete.` }
  ];

  const progressBar = document.getElementById('progressBar');
  const textEl = document.getElementById('loadingText');
  const subtextEl = document.getElementById('loadingSubtext');
  const consoleEl = document.getElementById('loadingConsole');

  const startTime = performance.now();
  const duration = 3400;
  let loggedIndices = new Set();

  function addConsoleLine(msg) {
    if (!consoleEl) return;
    const div = document.createElement('div');
    div.className = 'console-line';
    div.textContent = msg;
    consoleEl.appendChild(div);
    consoleEl.scrollTop = consoleEl.scrollHeight;
  }

  function update(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);

    if (progressBar) progressBar.style.width = `${progress * 100}%`;

    if (textEl && subtextEl) {
      if (progress < 0.25) {
        textEl.textContent = "Parsing headers and data streams...";
        subtextEl.textContent = "Decoding binary CSV vectors";
      } else if (progress < 0.55) {
        textEl.textContent = "Evaluating data quality vectors...";
        subtextEl.textContent = "Calculating column statistics and null ratios";
      } else if (progress < 0.8) {
        textEl.textContent = "Fitting predictive tree classification model...";
        subtextEl.textContent = `Computing 5-fold cross-validation weights`;
      } else {
        textEl.textContent = "Writing natural language brief...";
        subtextEl.textContent = "Structuring executive report output";
      }
    }

    logs.forEach((log, idx) => {
      if (elapsed >= log.t && !loggedIndices.has(idx)) {
        addConsoleLine(log.msg);
        loggedIndices.add(idx);
      }
    });

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      setTimeout(() => {
        isAnimating = false;
        // Default to quality tab
        currentActiveTab = 0;

        // Activate Tab buttons
        const tabs = document.querySelectorAll('.mockup-tab');
        tabs.forEach((tab, idx) => {
          tab.classList.toggle('active', idx === 0);
        });

        // Show tabs container
        const tabsContainer = document.querySelector('.mockup-tabs');
        if (tabsContainer) tabsContainer.style.display = 'flex';

        renderDashboardState();
        updateMainStatsStrip(dataset);
      }, 300);
    }
  }

  requestAnimationFrame(update);
}

// --- RENDER CURRENT TAB STATE ---
function renderDashboardState() {
  const body = document.getElementById('mockupBody');
  if (!body) return;

  const dataset = SIM_DATASETS[currentDatasetKey];
  const title = document.getElementById('mockupTitle');
  if (title) title.textContent = `${dataset.filename} — Audit Results`;

  if (currentActiveTab === 0) {
    renderTabQuality(body, dataset);
  } else if (currentActiveTab === 1) {
    renderTabDrivers(body, dataset);
  } else {
    renderTabBriefing(body, dataset);
  }

  // Re-bind custom cursor triggers to new elements inside tab views
  setupCursorHovers();
}

// --- TAB 1: DATA QUALITY ---
function renderTabQuality(container, dataset) {
  let tableRows = dataset.columns.map(col => `
    <tr>
      <td class="mono" style="font-weight: 600;">${col.name}</td>
      <td class="mono" style="color: var(--text-muted);">${col.type}</td>
      <td>
        <div class="fill-bar-container">
          <div class="fill-bar-track">
            <div class="fill-bar-fill" style="width: ${col.fill}%"></div>
          </div>
          <span class="mono">${col.fill}%</span>
        </div>
      </td>
      <td>
        <span class="badge badge-${col.statusClass}">${col.status}</span>
      </td>
    </tr>
  `).join('');

  container.innerHTML = `
    <div class="dashboard-view">
      <div>
        <div class="view-card">
          <div class="view-card-header">
            <h3>Sanity score metrics</h3>
            <span class="mono" style="font-size:12px; color: var(--primary);">Profile stable</span>
          </div>
          <table class="data-table">
            <thead>
              <tr>
                <th>Column Name</th>
                <th>Data Type</th>
                <th>Fill Rate</th>
                <th>Sanity Audit Remarks</th>
              </tr>
            </thead>
            <tbody>
              ${tableRows}
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <div class="view-card">
          <div class="view-card-header">
            <h3>Integrity Index</h3>
          </div>
          <p style="font-size:14px; color: var(--text-muted); margin:0 0 18px; line-height: 1.6;">
            The model flags missing fields, outliers, and scales variables. High fill rates optimize tree classification trees.
          </p>
          <div style="padding: 18px; border:1px solid var(--border); border-radius: var(--radius-md); background: rgba(0,0,0,0.25)">
            <div style="display:flex; justify-content:space-between; margin-bottom: 10px; font-size:13px; font-family:'Plus Jakarta Sans', sans-serif;">
              <span>Target Metric:</span>
              <strong class="mono" style="color:var(--primary); font-weight:600;">
                ${dataset.columns.find(c => c.status === 'Target') ? dataset.columns.find(c => c.status === 'Target').name : 'Target'}
              </strong>
            </div>
            <div style="display:flex; justify-content:space-between; font-size:13px; font-family:'Plus Jakarta Sans', sans-serif;">
              <span>Model Confidence:</span>
              <strong class="mono" style="color:var(--success); font-weight:600;">${dataset.cv}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// --- TAB 2: DRIVER RANKINGS & CORRELATION ---
function renderTabDrivers(container, dataset) {
  container.innerHTML = `
    <div class="dashboard-view">
      <div>
        <div class="view-card">
          <div class="view-card-header">
            <h3>Relative Driver Contribution</h3>
            <span class="mono" style="font-size:11px; color:var(--primary)">Weighted Impact</span>
          </div>
          <div class="driver-list" id="driverBarsList"></div>
        </div>
      </div>
      <div>
        <div class="view-card" style="text-align:center;">
          <div class="view-card-header" style="text-align:left;">
            <h3>Correlation Matrix</h3>
          </div>
          <div class="heatmap-container">
            <div class="heatmap-grid" id="heatmapGrid"></div>
            <p style="font-size:11px; color:var(--text-muted); margin:18px 0 0; font-family:'Plus Jakarta Sans', sans-serif; font-weight: 500;">
              Hover cells to read correlation values
            </p>
          </div>
        </div>
      </div>
    </div>
  `;

  // Render drivers list
  const list = document.getElementById('driverBarsList');
  if (list) {
    dataset.drivers.forEach((drv, i) => {
      const row = document.createElement('div');
      row.className = 'driver-row';
      row.innerHTML = `
        <div class="driver-info">
          <span class="driver-name">${drv.name}</span>
          <span class="driver-value">${drv.weight.toFixed(1)}%</span>
        </div>
        <div class="driver-track">
          <div class="driver-fill" id="drvFill_${i}" style="width: 0%"></div>
        </div>
      `;
      list.appendChild(row);

      // Delay animation to make it smooth
      setTimeout(() => {
        const fill = document.getElementById(`drvFill_${i}`);
        if (fill) fill.style.width = `${drv.weight}%`;
      }, 100 + i * 50);
    });
  }

  // Render correlation heatmap (Redgevity Rose styling)
  const grid = document.getElementById('heatmapGrid');
  if (grid) {
    const labels = dataset.heatmap_labels;
    const matrix = dataset.heatmap;

    grid.style.gridTemplateColumns = `repeat(${labels.length}, 1fr)`;

    for (let i = 0; i < labels.length; i++) {
      for (let j = 0; j < labels.length; j++) {
        const val = matrix[i][j];
        const cell = document.createElement('div');
        cell.className = 'heatmap-cell';

        let bg = '';
        if (i === j) {
          bg = 'rgba(255, 46, 99, 0.12)';
        } else if (val > 0) {
          bg = `rgba(255, 46, 99, ${val * 0.7})`;
        } else {
          bg = `rgba(239, 68, 68, ${Math.abs(val) * 0.65})`;
        }
        cell.style.background = bg;

        const valText = val === 1 ? '1.0' : (val > 0 ? '+' : '') + val.toFixed(2);
        cell.innerHTML = `<span class="heatmap-cell-val">${valText}</span>`;

        const tooltip = document.createElement('div');
        tooltip.className = 'heatmap-tooltip';

        let strength = 'No correlation';
        if (Math.abs(val) > 0.6) strength = val > 0 ? 'Strong Positive' : 'Strong Negative';
        else if (Math.abs(val) > 0.3) strength = val > 0 ? 'Moderate Positive' : 'Moderate Negative';
        else if (Math.abs(val) > 0.1) strength = val > 0 ? 'Weak Positive' : 'Weak Negative';

        tooltip.innerHTML = `<strong class="mono">${labels[i]}</strong> vs <strong class="mono">${labels[j]}</strong><br>r = ${val.toFixed(2)} (${strength})`;
        cell.appendChild(tooltip);

        grid.appendChild(cell);
      }
    }
  }
}

// --- TAB 3: EXECUTIVE BRIEFING WRITER ---
function renderTabBriefing(container, dataset) {
  container.innerHTML = `
    <div class="dashboard-view" style="grid-template-columns: 1fr;">
      <div class="view-card" style="margin-bottom:0;">
        <div class="briefing-view-doc" id="briefingDoc"></div>
        
        <div class="briefing-reset-container">
          <span style="font-family:'Plus Jakarta Sans', sans-serif; font-size:12px; color:var(--text-muted)">
            Processing footprint: <strong>${dataset.time}</strong>
          </span>
          <button class="briefing-reset-btn" onclick="resetSim()">↺ Reset Sandbox</button>
        </div>
      </div>
    </div>
  `;

  typewriterBriefing(dataset.briefing, 'briefingDoc');
}

function typewriterBriefing(markdownText, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';

  const lines = markdownText.split('\n');
  let lineIdx = 0;

  function parseAndTypeLine() {
    if (lineIdx >= lines.length) return;

    const rawLine = lines[lineIdx];
    if (rawLine.trim() === '') {
      lineIdx++;
      setTimeout(parseAndTypeLine, 10);
      return;
    }

    let element;
    let targetText = rawLine;

    if (rawLine.startsWith('### ')) {
      element = document.createElement('h3');
      targetText = rawLine.substring(4);
    } else if (rawLine.startsWith('- ')) {
      element = document.createElement('div');
      element.className = 'briefing-bullet-item';

      const dot = document.createElement('span');
      dot.className = 'briefing-bullet-dot';
      dot.textContent = '▪';
      element.appendChild(dot);

      const content = document.createElement('span');
      element.appendChild(content);
      container.appendChild(element);

      element = content;
      targetText = rawLine.substring(2);
    } else {
      element = document.createElement('p');
    }

    if (element !== container.lastChild && !rawLine.startsWith('- ')) {
      container.appendChild(element);
    }

    const boldRegex = /\*\*([^*]+)\*\*/g;
    const formattedHtml = targetText.replace(boldRegex, '<strong>$1</strong>');

    const words = formattedHtml.split(' ');
    let wordIdx = 0;

    function typeWord() {
      if (wordIdx < words.length) {
        element.innerHTML = words.slice(0, wordIdx + 1).join(' ');
        wordIdx++;
        setTimeout(typeWord, 30);
      } else {
        lineIdx++;
        setTimeout(parseAndTypeLine, 60);
      }
    }

    typeWord();
  }

  parseAndTypeLine();
}

// --- UPDATE STATS GRID STRIP ---
function updateMainStatsStrip(dataset) {
  const stats = document.querySelectorAll('.stats-strip .stat-item');
  if (stats.length < 4) return;

  const f1Val = parseFloat(dataset.f1 || '71.9');
  const cvVal = parseFloat(dataset.cv);
  const weightVal = parseFloat(dataset.top_weight);
  const rowsVal = parseInt(dataset.records.replace(/,/g, ''));

  const values = [f1Val, cvVal, weightVal, rowsVal];
  const decimals = [1, 3, 1, 0];
  const suffixes = ['%', '', '%', ''];

  stats.forEach((el, index) => {
    const endValue = values[index];
    const dec = decimals[index];
    const suff = suffixes[index];
    const boldEl = el.querySelector('b');

    const start = performance.now();
    const duration = 1200;

    function tick(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic

      const currentVal = endValue * eased;
      if (boldEl) {
        boldEl.textContent = (dec ? currentVal.toFixed(dec) : Math.round(currentVal).toLocaleString()) + suff;
      }

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }
    requestAnimationFrame(tick);
  });
}

// --- KONAMI CODE EASTER EGG (REDGEVITY UNLOCKED) ---
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

window.addEventListener('keydown', (e) => {
  const key = e.key;
  if (key === konamiSequence[konamiIndex]) {
    konamiIndex++;
    if (konamiIndex === konamiSequence.length) {
      triggerKonamiEgg();
      konamiIndex = 0;
    }
  } else {
    konamiIndex = (key === konamiSequence[0]) ? 1 : 0;
  }
});

function triggerKonamiEgg() {
  if (isAnimating) return;

  SIM_DATASETS.redgevity = {
    filename: 'luminous_redgevity_master.log',
    records: '4,608 rows',
    features: '12 features',
    time: '280.0ms',
    cv: '0.999',
    top_weight: '80.0%',
    columns: [
      { name: 'LED_Unit_Count', type: 'int', fill: 100, status: 'OK', statusClass: 'success' },
      { name: 'Wavelength_blend', type: 'float', fill: 100, status: 'OK', statusClass: 'success' },
      { name: 'Thermal_cooling_fan', type: 'int', fill: 100, status: 'OK', statusClass: 'success' },
      { name: 'Power_output_kW', type: 'float', fill: 100, status: 'Target', statusClass: 'success' },
      { name: 'Longevity_index', type: 'float', fill: 100, status: 'OK', statusClass: 'success' }
    ],
    drivers: [
      { name: 'Wavelength_blend', weight: 80.0 },
      { name: 'LED_Unit_Count', weight: 12.0 },
      { name: 'Thermal_cooling_fan', weight: 8.0 }
    ],
    heatmap: [
      [1.00, 0.72, 0.44],
      [0.72, 1.00, 0.35],
      [0.44, 0.35, 1.00]
    ],
    heatmap_labels: ['Wavelength', 'LEDs', 'Cooling'],
    briefing: `### Executive Briefing: Luminous Specialist Protocol\n\n**Specialist Program Unlocked**: Redgevity Master active. Light wavelength mix: 630nm (Red) + 850nm (NIR) operating at 2.8kW.\n\n- **Patented Light Blend**: 4,608 actively cooled dual LEDs configured.\n- **Data Sanity Check**: Quality index verified at 100% stable. Zero signal outliers.\n- **Actionable Advice**: Maintain partner program schedules. Longevity index: Optimal.`
  };

  currentDatasetKey = 'redgevity';
  startSimulation();
}


window.addEventListener('load', () => {
  if (typeof ScrollTrigger !== 'undefined') {
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });
  }
});


// --- PREMIUM NAV ACTIVE STATE ----------------------------------------------
(function initNavActiveState() {
  const nav = document.querySelector('.site-nav');
  if (!nav) return;

  const links = Array.from(nav.querySelectorAll('.nav-link'));
  if (!links.length) return;

  const normalize = (value) => {
    try {
      return new URL(value, window.location.href).hash;
    } catch {
      return '';
    }
  };

  const sections = links
    .map((link) => {
      const hash = normalize(link.getAttribute('href') || '');
      if (!hash || hash === '#') return null;
      const section = document.querySelector(hash);
      return section ? { link, section } : null;
    })
    .filter(Boolean);

  const setActive = (activeLink) => {
    links.forEach((link) => {
      const active = link === activeLink;
      link.classList.toggle('active', active);
      if (active) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  };

  // Landing state.
  if (sections.length) {
    setActive(sections[0].link);
  }

  if ('IntersectionObserver' in window && sections.length) {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visible.length) {
        const match = sections.find((item) => item.section === visible[0].target);
        if (match) setActive(match.link);
      }
    }, {
      rootMargin: '-28% 0px -58% 0px',
      threshold: [0.05, 0.2, 0.45]
    });

    sections.forEach(({ section }) => observer.observe(section));
  }

  // Smooth anchor navigation. Use Lenis when available; otherwise native
  // scrollIntoView handles it.
  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      const href = link.getAttribute('href') || '';
      if (!href.startsWith('#') || href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      event.preventDefault();
      setActive(link);

      if (typeof lenis !== 'undefined' && lenis) {
        lenis.scrollTo(target, {
          offset: -88,
          duration: 1.15
        });
      } else {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }

      history.replaceState(null, '', href);
    });
  });
})();


// Sandbox navigation landing position.
// A negative offset places the Sandbox slightly higher in the viewport while
// preserving the existing cinematic scroll behavior.
(function initSandboxNavOffset() {
  const sandboxLinks = document.querySelectorAll(
      'a[href="#product"], a[href="#product"] *'
  );

  sandboxLinks.forEach((link) => {
    const anchor = link.closest('a[href="#product"]');
    if (!anchor || anchor.dataset.sandboxNavOffset) return;

    anchor.dataset.sandboxNavOffset = 'true';

    anchor.addEventListener('click', (event) => {
      const target = document.querySelector('#product');
      if (!target) return;

      event.preventDefault();

      if (typeof lenis !== 'undefined' && lenis) {
        lenis.scrollTo(target, {
          offset: -180,
          duration: 1.35
        });
      } else {
        const y = target.getBoundingClientRect().top + window.scrollY - 180;
        window.scrollTo({
          top: y,
          behavior: 'smooth'
        });
      }
    });
  });
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
}
})();
