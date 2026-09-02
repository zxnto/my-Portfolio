"use client";

import { useEffect, useState } from "react";

const tickerItems = [
  "WEB DEVELOPMENT",
  "ANDROID APPS",
  "VIBE CODING",
  "SOFTWARE ENGINEERING",
  "WEB DEVELOPMENT",
  "ANDROID APPS",
  "VIBE CODING",
  "SOFTWARE ENGINEERING",
];

const skillCards = [
  {
    number: "01",
    icon: "</>",
    title: <>Programming<br />languages</>,
    skills: ["JavaScript", "Java", "Python", "C++", "PHP", "Dart"],
    featured: true,
  },
  {
    number: "02",
    icon: "◈",
    title: <>Web<br />development</>,
    skills: ["HTML5", "CSS3", "React.js", "Node.js", "Laravel", "Responsive design"],
  },
  {
    number: "03",
    icon: "▣",
    title: <>Mobile<br />development</>,
    skills: ["Android", "Flutter", "Dart", "Cross-platform"],
  },
  {
    number: "04",
    icon: "⌘",
    title: <>Data &<br />development tools</>,
    skills: ["MySQL", "SQL", "Git", "GitHub", "VS Code"],
  },
];

const supportingSkills = [
  "Figma",
  "Canva",
  "Adobe Photoshop",
  "CapCut",
  "UI/UX design",
  "Graphic design",
  "Video editing",
  "Prompt engineering",
  "AI-assisted development",
];

const timelineItems = [
  {
    label: "Education · Present",
    title: "BELTEI University",
    description:
      "Software Engineering student developing a strong foundation across programming, databases, web development, and software design.",
  },
  {
    label: "Professional experience · 2+ years",
    title: "Mengda Footwear",
    description:
      "Shipping logistics and buyer document specialist. Building accuracy, organization, communication, and real-world problem-solving skills.",
  },
  {
    label: "Creative technology",
    title: "Vibe coder · Pharmkulen",
    description:
      "Exploring AI-assisted development and modern coding workflows to move from ideas to prototypes with speed and creativity.",
  },
];

const particles = [
  [8, 22, 2, -2, 13], [20, 46, 3, -8, 18], [31, 18, 2, -5, 16], [44, 36, 2, -11, 19],
  [58, 20, 3, -7, 15], [70, 44, 2, -14, 20], [84, 17, 2, -4, 17], [92, 63, 3, -10, 22],
  [14, 76, 2, -6, 21], [26, 88, 3, -13, 18], [39, 69, 2, -3, 15], [51, 83, 2, -12, 23],
  [64, 72, 3, -9, 17], [76, 91, 2, -15, 20], [87, 79, 2, -1, 14], [96, 34, 3, -7, 19],
];

function Ticker() {
  return (
    <div className="ticker" aria-label="Areas of focus">
      <div className="ticker-track">
        {tickerItems.map((item, index) => (
          <span key={`${item}-${index}`} className={index % 2 ? "ticker-item" : "ticker-item ticker-item--spaced"}>
            {index % 2 === 0 ? item : <><b>✦</b>{item}</>}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.13 },
    );

    elements.forEach((element) => observer.observe(element));

    const cursorGlow = document.querySelector(".cursor-glow");
    const cursorCore = document.querySelector(".cursor-core");
    const cursorRing = document.querySelector(".cursor-ring");
    const trailNodes = [...document.querySelectorAll(".cursor-trail span")];
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!cursorGlow || !cursorCore || !cursorRing || !trailNodes.length || isTouchDevice || reducedMotion) {
      return () => observer.disconnect();
    }

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    const trail = trailNodes.map(() => ({ x: targetX, y: targetY }));

    const handlePointerMove = (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
      cursorGlow.style.setProperty("--cursor-x", `${event.clientX}px`);
      cursorGlow.style.setProperty("--cursor-y", `${event.clientY}px`);
      cursorCore.style.setProperty("--cursor-x", `${event.clientX}px`);
      cursorCore.style.setProperty("--cursor-y", `${event.clientY}px`);
      cursorRing.style.setProperty("--cursor-x", `${event.clientX}px`);
      cursorRing.style.setProperty("--cursor-y", `${event.clientY}px`);
      cursorGlow.classList.add("is-visible");
      cursorCore.classList.add("is-visible");
      cursorRing.classList.add("is-visible");
      document.querySelector(".cursor-trail")?.classList.add("is-visible");
    };
    const handlePointerLeave = () => {
      cursorGlow.classList.remove("is-visible");
      cursorCore.classList.remove("is-visible");
      cursorRing.classList.remove("is-visible");
      document.querySelector(".cursor-trail")?.classList.remove("is-visible");
      document.body.classList.remove("cursor-hover");
    };
    const handleInteractiveEnter = () => document.body.classList.add("cursor-hover");
    const handleInteractiveLeave = () => document.body.classList.remove("cursor-hover");
    const interactiveNodes = [...document.querySelectorAll("a, button")];

    const animateTrail = () => {
      trail.forEach((point, index) => {
        const ease = Math.max(0.08, 0.22 - index * 0.018);
        point.x += (targetX - point.x) * ease;
        point.y += (targetY - point.y) * ease;
        trailNodes[index].style.transform = `translate3d(${point.x}px, ${point.y}px, 0) translate(-50%, -50%)`;
      });
      trailFrame = window.requestAnimationFrame(animateTrail);
    };
    let trailFrame = window.requestAnimationFrame(animateTrail);

    window.addEventListener("pointermove", handlePointerMove);
    document.documentElement.addEventListener("mouseleave", handlePointerLeave);
    interactiveNodes.forEach((node) => {
      node.addEventListener("pointerenter", handleInteractiveEnter);
      node.addEventListener("pointerleave", handleInteractiveLeave);
    });

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(trailFrame);
      window.removeEventListener("pointermove", handlePointerMove);
      document.documentElement.removeEventListener("mouseleave", handlePointerLeave);
      interactiveNodes.forEach((node) => {
        node.removeEventListener("pointerenter", handleInteractiveEnter);
        node.removeEventListener("pointerleave", handleInteractiveLeave);
      });
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="page-glow page-glow--one" />
      <div className="page-glow page-glow--two" />
      <div className="ambient-orb ambient-orb--one" />
      <div className="ambient-orb ambient-orb--two" />
      <div className="ambient-orb ambient-orb--three" />
      <div className="ambient-scanline" />
      <div className="cursor-glow" aria-hidden="true" />
      <div className="cursor-ring" aria-hidden="true" />
      <div className="cursor-core" aria-hidden="true" />
      <div className="cursor-trail" aria-hidden="true">
        {Array.from({ length: 8 }, (_, index) => <span key={index} />)}
      </div>
      <div className="particle-field" aria-hidden="true">
        {particles.map(([x, y, size, delay, duration], index) => (
          <span key={index} style={{ left: `${x}%`, top: `${y}%`, width: `${size}px`, height: `${size}px`, animationDelay: `${delay}s`, animationDuration: `${duration}s` }} />
        ))}
      </div>

      <header className="site-header" id="top">
        <nav className="nav container" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="Chan Kim Kheang home" onClick={closeMenu}>
            <span className="brand-mark">CKK</span>
            <span className="brand-name">Chan Kim Kheang</span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>

          <div className={`nav-links${menuOpen ? " is-open" : ""}`}>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#journey" onClick={closeMenu}>Journey</a>
            <a href="#contact" className="nav-contact" onClick={closeMenu}>Let&apos;s talk <span>↗</span></a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero container" aria-labelledby="hero-title">
          <div className="hero-copy reveal">
            <p className="eyebrow"><span className="eyebrow-dot" /> Software engineer · vibe coder</p>
            <p className="hero-name">Chan Kim Kheang</p>
            <h1 id="hero-title">I turn ideas into <span className="gradient-text">digital experiences.</span></h1>
            <p className="hero-lede">Hi, I&apos;m <strong>Chan Kim Kheang</strong> — a web developer, Android app developer, and software engineering student building with curiosity, code, and modern tools.</p>
            <div className="hero-actions">
              <a className="button button--primary" href="#contact">Let&apos;s connect <span>↗</span></a>
              <a className="button button--ghost" href="#skills">Explore my skills <span>↓</span></a>
            </div>
            <div className="hero-meta">
              <span><i className="meta-icon">⌖</i> Phnom Penh, Cambodia</span>
              <span><i className="availability-dot" /> Open to opportunities</span>
            </div>
          </div>

          <div className="hero-visual reveal reveal--delay" aria-label="Profile portrait of Chan Kim Kheang">
            <div className="visual-orbit visual-orbit--outer" />
            <div className="visual-orbit visual-orbit--inner" />
            <div className="orbit-dot orbit-dot--one" />
            <div className="orbit-dot orbit-dot--two" />
            <div className="portrait-frame">
              <div className="portrait-backdrop" />
              <img src="/assets/profile.jpg" alt="Chan Kim Kheang presenting at an event" />
              <div className="portrait-shine" />
            </div>
            <div className="floating-card floating-card--code">
              <span className="card-kicker">currently coding</span>
              <code><b>const</b> future = <em>build</em>();</code>
            </div>
            <div className="floating-card floating-card--stack">
              <span className="stack-symbol">✦</span>
              <span>JavaScript<br /><small>+ modern tools</small></span>
            </div>
          </div>
        </section>

        <Ticker />

        <section className="section about container" id="about" aria-labelledby="about-title">
          <div className="section-intro reveal">
            <p className="eyebrow">01 / About me</p>
            <h2 id="about-title">The person<br /><span className="muted-text">behind the code.</span></h2>
          </div>
          <div className="about-content reveal reveal--delay">
            <p className="about-lede">I&apos;m a Software Engineering student at <span className="accent-text">BELTEI University</span> with a practical mindset and a passion for building useful things.</p>
            <p>I have two years of professional experience in shipping logistics as a buyer document specialist at Mengda Footwear, and experience as a vibe coder at Pharmkulen. That mix of detail, communication, and technology shapes how I work: thoughtfully, collaboratively, and always ready to learn.</p>
            <p>My goal is to keep sharpening my technical skills and grow into a professional software developer in Cambodia.</p>
            <div className="about-tags"><span>Curious by nature</span><span>Always learning</span><span>Built in Cambodia</span></div>
          </div>
        </section>

        <section className="section skills-section" id="skills" aria-labelledby="skills-title">
          <div className="container">
            <div className="section-heading reveal">
              <div>
                <p className="eyebrow">02 / Skills &amp; technologies</p>
                <h2 id="skills-title">A versatile <span className="gradient-text">toolkit.</span></h2>
              </div>
              <p className="section-note">From first idea to working interface, I enjoy exploring the tools that make digital products feel clear, useful, and alive.</p>
            </div>

            <div className="skills-grid">
              {skillCards.map((card, index) => (
                <article className={`skill-card${card.featured ? " skill-card--featured" : ""} reveal reveal--delay-${index}`} key={card.number}>
                  <div className="skill-card-top"><span className="skill-number">{card.number}</span><span className="skill-icon">{card.icon}</span></div>
                  <h3>{card.title}</h3>
                  <div className="pill-list">{card.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
                </article>
              ))}
            </div>

            <div className="supporting-skills reveal">
              <div className="supporting-label">Also comfortable with</div>
              <div className="supporting-list">{supportingSkills.map((skill) => <span key={skill}>{skill}</span>)}</div>
            </div>
          </div>
        </section>

        <section className="section journey container" id="journey" aria-labelledby="journey-title">
          <div className="section-intro reveal">
            <p className="eyebrow">03 / My journey</p>
            <h2 id="journey-title">Learning by<br /><span className="muted-text">doing.</span></h2>
          </div>
          <div className="timeline reveal reveal--delay">
            {timelineItems.map((item) => (
              <article className="timeline-item" key={item.title}>
                <div className="timeline-marker"><span /></div>
                <div className="timeline-body"><p className="timeline-label">{item.label}</p><h3>{item.title}</h3><p>{item.description}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-grid-lines" />
          <div className="container contact-inner reveal">
            <p className="eyebrow">04 / Contact</p>
            <h2 id="contact-title">Have an idea?<br /><span className="gradient-text">Let&apos;s make it real.</span></h2>
            <p className="contact-copy">I&apos;m always open to learning, collaborating, and talking about technology. Reach out anytime.</p>
            <div className="contact-actions">
              <a className="contact-link" href="tel:+855976308980"><span className="contact-link-icon">☎</span><span><small>Phone</small>097 630 8980</span><b>↗</b></a>
              <a className="contact-link" href="https://t.me/+855976308980" target="_blank" rel="noreferrer"><span className="contact-link-icon">➤</span><span><small>Telegram</small>097 630 8980</span><b>↗</b></a>
            </div>
            <p className="location-line">⌖ Based in Phnom Penh, Cambodia</p>
          </div>
        </section>
      </main>

      <footer className="site-footer container">
        <span>© 2026 Chan Kim Kheang</span>
        <span>Built with curiosity <span className="footer-spark">✦</span></span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  );
}
