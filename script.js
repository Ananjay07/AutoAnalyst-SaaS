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
    cachedHeroGlow.style.setProperty('--mouse-x', `${-targetDx * 35}px`);
    cachedHeroGlow.style.setProperty('--mouse-y', `${-targetDy * 25}px`);
  }
});

function initParticles() {
  const canvas = document.getElementById('bgCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H;
  function resize() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
  resize();
  window.addEventListener('resize', resize);

  // ── Scroll progress (0 = top, 1 = bottom) ─────────────────────────────────
  let scroll = 0;
  window.addEventListener('scroll', () => {
    const max = Math.max(1, document.body.scrollHeight - window.innerHeight);
    scroll = window.scrollY / max;
  }, { passive: true });

  // ── Stage data (generated once) ───────────────────────────────────────────
  // Stage 1 – Hero: perspective grid config
  const GRID_COLS = 14;  // vertical lines spreading from VP
  const GRID_ROWS = 10;  // horizontal lines receding to VP
  // Flowing data particles (pre-seeded, animated along grid columns)
  const FLOW_COUNT = 55;
  const flowParticles = Array.from({ length: FLOW_COUNT }, (_, i) => ({
    col: Math.floor(Math.random() * GRID_COLS),  // which column to travel along
    progress: Math.random(),   // 0=at bottom wide end, 1=at vanishing point
    speed: 0.0008 + Math.random() * 0.0014,
    alpha: 0.3 + Math.random() * 0.5,
    size: 1.2 + Math.random() * 1.8,
  }));

  // Stage 2 – Bar chart columns
  const BAR_COUNT = 18;
  const barHeights = Array.from({ length: BAR_COUNT }, () => 0.15 + Math.random() * 0.55);

  // Stage 3 – Scatter dots (pre-seeded positions)
  const DOT_COUNT = 38;
  const scatterDots = Array.from({ length: DOT_COUNT }, () => ({
    nx: 0.08 + Math.random() * 0.84,   // 0–1 normalised
    ny: 0.15 + Math.random() * 0.65,
    r:  0.8 + Math.random() * 1.4,
  }));

  // ── Helpers ───────────────────────────────────────────────────────────────
  const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
  const stageFade = (s, start, peak, end) =>
    s < start  ? 0 :
    s < peak   ? clamp((s - start) / (peak - start), 0, 1) :
    s < end    ? clamp(1 - (s - peak) / (end - peak), 0, 1) : 0;

  let t = 0;

  // ── Draw: faint grid ─────────────────────────────────────────
  function drawGrid(alpha) {
    if (alpha < 0.005) return;
    ctx.lineWidth = 0.5;
    ctx.strokeStyle = `rgba(255,46,99,${alpha * 0.04})`;
    for (let y = 0; y < H; y += 64) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
    }
    for (let x = 0; x < W; x += 80) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
    }
  }

  // ── Draw: perspective grid + data particle flow (hero stage ONLY) ─────────
  function drawHeroGrid(alpha) {
    if (alpha < 0.005) return;

    const vpX = W * 0.5;
    const vpY = H * 0.42;
    const baseY = H * 1.05;
    const baseHalfW = W * 0.95;

    // Vertical perspective lines
    for (let c = 0; c <= GRID_COLS; c++) {
      const t_c = c / GRID_COLS;
      const bx = (vpX - baseHalfW) + t_c * baseHalfW * 2;
      const lineAlpha = 0.07 * alpha * (1 - Math.abs(t_c - 0.5) * 0.6);
      ctx.beginPath();
      ctx.moveTo(bx, baseY);
      ctx.lineTo(vpX, vpY);
      ctx.strokeStyle = `rgba(255,46,99,${lineAlpha})`;
      ctx.lineWidth = 0.8;
      ctx.stroke();
    }

    // Horizontal perspective rows
    for (let r = 1; r <= GRID_ROWS; r++) {
      const p = Math.pow(r / GRID_ROWS, 1.8);
      const y = vpY + (baseY - vpY) * p;
      const hw = baseHalfW * p;
      const rowAlpha = 0.055 * alpha * p;
      ctx.beginPath();
      ctx.moveTo(vpX - hw, y);
      ctx.lineTo(vpX + hw, y);
      ctx.strokeStyle = `rgba(255,46,99,${rowAlpha})`;
      ctx.lineWidth = 0.7;
      ctx.stroke();
    }

    // Animated data particles flowing upward along column lines
    flowParticles.forEach(fp => {
      fp.progress += fp.speed;
      if (fp.progress > 1) fp.progress = 0;

      const p = Math.pow(fp.progress, 1.8);
      const t_c = fp.col / GRID_COLS;
      const bx = (vpX - baseHalfW) + t_c * baseHalfW * 2;

      const px = bx + (vpX - bx) * p;
      const py = baseY + (vpY - baseY) * p;

      const distFade = p < 0.1 ? p / 0.1 : p > 0.82 ? (1 - p) / 0.18 : 1;
      const dotAlpha = fp.alpha * distFade * alpha * 0.9;
      const dotSize  = fp.size * (1 - p * 0.7);

      ctx.beginPath();
      ctx.arc(px, py, dotSize, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,46,99,${dotAlpha})`;
      ctx.fill();
    });
  }

  // ── Animation loop ────────────────────────────────────────────────────────
  function animate() {
    t++;
    ctx.clearRect(0, 0, W, H);

    // Hero perspective grid ONLY — completely fades out by 22% scroll so Features section stays 100% clean
    const heroAlpha = stageFade(scroll, 0, 0.01, 0.22);
    if (heroAlpha > 0) {
      drawGrid(heroAlpha);
      drawHeroGrid(heroAlpha);
    }

    requestAnimationFrame(animate);
  }

  animate();
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

  // Initial hero entrance. After the first paint, GSAP takes over all
  // scroll-linked transforms so CSS and JS never fight over the same property.
  requestAnimationFrame(() => {
    document.querySelectorAll('.animate-slide').forEach((el, index) => {
      gsap.fromTo(el,
        { y: 28, opacity: 0, filter: 'blur(6px)' },
        {
          y: 0,
          opacity: 1,
          filter: 'blur(0px)',
          duration: 1.05,
          delay: Math.min(index * 0.06, 0.35),
          ease: 'power4.out',
          clearProps: 'filter'
        }
      );
    });
  });

  // ─────────────────────────────────────────────────────────────────────────────
  // PREMIUM SCROLL ENGINE
  // Lenis + GSAP ScrollTrigger are intentionally driven by ONE RAF loop.
  // This avoids double-rendering/jitter and gives the page the slow, cinematic
  // scroll feel used by premium product sites.
  // ─────────────────────────────────────────────────────────────────────────────
  let lenis = null;

  if (typeof Lenis !== 'undefined') {
    lenis = new Lenis({
      duration: 1.35,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier: 0.85,
      touchMultiplier: 1.0,
      syncTouch: false
    });
  }

  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    if (lenis) {
      lenis.on('scroll', ScrollTrigger.update);
    }

    // ONE master RAF loop for Lenis + GSAP.
    gsap.ticker.add((time) => {
      if (lenis) lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(1000, 16);

    // ── HERO: slow depth/parallax ────────────────────────────────────────────
    const hero = document.querySelector('.hero');
    const heroTitle = document.querySelector('.hero h1');
    const heroLead = document.querySelector('.hero .lead');
    const heroActions = document.querySelector('.hero-actions');
    const heroMeta = document.querySelector('.hero-meta');
    const heroGlow = document.querySelector('#heroGlow');

    if (hero) {
      const heroTl = gsap.timeline({
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.4
        }
      });

      if (heroTitle) {
        heroTl.to(heroTitle, {
          y: -90,
          scale: 0.94,
          opacity: 0.18,
          ease: 'none'
        }, 0);
      }

      if (heroLead) {
        heroTl.to(heroLead, {
          y: -55,
          opacity: 0.18,
          ease: 'none'
        }, 0.05);
      }

      if (heroActions) {
        heroTl.to(heroActions, {
          y: -35,
          opacity: 0,
          ease: 'none'
        }, 0.08);
      }

      if (heroMeta) {
        heroTl.to(heroMeta, {
          y: -20,
          opacity: 0,
          ease: 'none'
        }, 0.12);
      }

      if (heroGlow) {
        heroTl.to(heroGlow, {
          y: 150,
          scale: 1.45,
          opacity: 0.15,
          ease: 'none'
        }, 0);
      }
    }

    // ── MARQUEE: CSS owns the continuous loop ─────────────────────────────────
    // Do not animate transform here with GSAP; the CSS marquee keyframe already
    // owns transform and mixing the two causes visible snapping.

    // ── SANDBOX: ONE continuous cinematic timeline ─────────────────────────────
    // Previously three independent ScrollTriggers all wrote to the same
    // transform/opacity properties (y, scale, rotateY, opacity). Their ranges
    // overlapped, so the browser could visibly "snap" an element backwards and
    // forwards while scrolling. A single timeline owns these properties now.
    const productMockup = document.querySelector('#product');

    if (productMockup) {
      gsap.set(productMockup, {
        transformPerspective: 1200,
        transformOrigin: '50% 50%',
        force3D: true
      });

      const productTl = gsap.timeline({
        scrollTrigger: {
          trigger: productMockup,
          start: 'top 92%',
          end: 'bottom 18%',
          scrub: 1.25,
          invalidateOnRefresh: true
        }
      });

      productTl
        .fromTo(productMockup,
          {
            rotateX: 7,
            rotateY: -1.5,
            scale: 0.88,
            y: 90,
            opacity: 0
          },
          {
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            y: 0,
            opacity: 1,
            duration: 0.34,
            ease: 'power3.out'
          },
          0
        )
        .to(productMockup, {
          y: -38,
          rotateY: 1,
          scale: 0.985,
          opacity: 1,
          duration: 0.38,
          ease: 'none'
        })
        .to(productMockup, {
          y: -58,
          rotateY: 0,
          scale: 0.965,
          opacity: 0.92,
          duration: 0.28,
          ease: 'none'
        });
    }

    // ── STATS: numbers/cards float into place ─────────────────────────────────
    const statsStrip = document.querySelector('.stats-strip');
    if (statsStrip) {
      gsap.fromTo(statsStrip,
        { y: 70, opacity: 0, scale: 0.97 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: statsStrip,
            start: 'top 88%',
            end: 'top 50%',
            scrub: 1
          }
        }
      );

      gsap.fromTo('.stat-item',
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: statsStrip,
            start: 'top 78%',
            end: 'top 45%',
            scrub: 1
          }
        }
      );
    }

    // ── SECTION HEADERS: editorial reveal ─────────────────────────────────────
    document.querySelectorAll('.section-header').forEach((headerEl) => {
      const eyebrow = headerEl.querySelector('.subheading');
      const heading = headerEl.querySelector('h2');
      const paragraph = headerEl.querySelector('p');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: headerEl,
          start: 'top 84%',
          end: 'top 45%',
          scrub: 1
        }
      });

      if (eyebrow) {
        tl.fromTo(eyebrow,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.35, ease: 'power3.out' }, 0);
      }
      if (heading) {
        tl.fromTo(heading,
          { y: 55, opacity: 0, filter: 'blur(8px)' },
          { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.55, ease: 'power4.out' }, 0.05);
      }
      if (paragraph) {
        tl.fromTo(paragraph,
          { y: 35, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out' }, 0.16);
      }
    });

    // ── FEATURES / BENTO: ONE OWNER PER CARD ──────────────────────────────────
    // Each card previously had two ScrollTriggers writing to `y`: one for the
    // entrance and one for the passing parallax. Their ranges overlapped and
    // could make cards visibly jump/disappear. A single timeline now owns all
    // transform/opacity values for each card.
    const bentoCards = document.querySelectorAll('.bento-card');

    if (bentoCards.length) {
      bentoCards.forEach((card, index) => {
        const cardTl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            end: 'bottom 18%',
            scrub: 1.2,
            invalidateOnRefresh: true
          }
        });

        cardTl
          .fromTo(card,
            {
              y: 75 + (index % 2) * 20,
              opacity: 0,
              scale: 0.96,
              rotateX: 3
            },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              rotateX: 0,
              duration: 0.45,
              ease: 'power3.out'
            },
            0
          )
          .to(card, {
            y: -22,
            scale: 0.985,
            duration: 0.55,
            ease: 'none'
          });
      });
    }

    // ── PROCESS / HOW IT WORKS: ONE CONTINUOUS STEP MOTION ─────────────────────
    // Keep each step's movement in one ScrollTrigger. The active-state trigger
    // below only toggles a class; it never changes transform/opacity.
    const steps = document.querySelectorAll('.process-step');

    if (steps.length) {
      steps.forEach((step) => {
        const stepTl = gsap.timeline({
          scrollTrigger: {
            trigger: step,
            start: 'top 88%',
            end: 'bottom 18%',
            scrub: 1.15,
            invalidateOnRefresh: true
          }
        });

        stepTl
          .fromTo(step,
            {
              y: 55,
              opacity: 0,
              scale: 0.97
            },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.42,
              ease: 'power3.out'
            },
            0
          )
          .to(step, {
            y: -18,
            scale: 0.99,
            duration: 0.58,
            ease: 'none'
          });

        ScrollTrigger.create({
          trigger: step,
          start: 'top 62%',
          end: 'bottom 38%',
          invalidateOnRefresh: true,
          onEnter: () => step.classList.add('is-active'),
          onLeave: () => step.classList.remove('is-active'),
          onEnterBack: () => step.classList.add('is-active'),
          onLeaveBack: () => step.classList.remove('is-active')
        });
      });
    }

    // ── LIVE RADAR + DISCLAIMER: ONE STABLE STORY TIMELINE ─────────────────────
    // The entire section used to have an animate-slide wrapper while the radar
    // and disclaimer also had their own ScrollTriggers. That meant the parent
    // could change opacity/transform while its children were being moved.
    // The parent now owns the entrance only; the two panels own a small amount
    // of internal depth. No overlapping y/opacity ownership.
    const radarStory = document.querySelector('.radar-story-section');
    const radarWidget = document.querySelector('.radar-widget');
    const honestSection = document.querySelector('.honest-section');

    if (radarStory) {
      const storyTl = gsap.timeline({
        scrollTrigger: {
          trigger: radarStory,
          start: 'top 88%',
          end: 'top 48%',
          scrub: 1.15,
          invalidateOnRefresh: true
        }
      });

      storyTl.fromTo(radarStory,
        {
          y: 48,
          opacity: 0.2
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out'
        }
      );
    }

    if (radarWidget) {
      gsap.fromTo(radarWidget,
        {
          y: 24,
          scale: 0.985,
          opacity: 0.92
        },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: radarStory || radarWidget,
            start: 'top 76%',
            end: 'top 42%',
            scrub: 1.2,
            invalidateOnRefresh: true
          }
        }
      );
    }

    if (honestSection) {
      gsap.fromTo(honestSection,
        {
          x: 26,
          opacity: 0.88
        },
        {
          x: 0,
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: radarStory || honestSection,
            start: 'top 72%',
            end: 'top 42%',
            scrub: 1.2,
            invalidateOnRefresh: true
          }
        }
      );
    }

    // ── CTA: slower, larger final reveal ──────────────────────────────────────
    const cta = document.querySelector('.cta-banner');
    if (cta) {
      gsap.fromTo(cta,
        { y: 80, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: cta,
            start: 'top 88%',
            end: 'top 48%',
            scrub: 1.15
          }
        }
      );

      gsap.to(cta, {
        y: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: cta,
          start: 'top 40%',
          end: 'bottom top',
          scrub: 1.5
        }
      });
    }

    // Measure after fonts/layout have settled. This prevents triggers from
    // being calculated at one height and then jumping when web fonts finish.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => ScrollTrigger.refresh());
    });
    window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
  }
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
    { t: 300, msg: `[PARSER] Headers extracted: [${dataset.columns.map(c=>c.name).join(', ')}]` },
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
                ${dataset.columns.find(c=>c.status==='Target') ? dataset.columns.find(c=>c.status==='Target').name : 'Target'}
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
