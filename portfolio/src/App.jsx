import { useEffect } from 'react';
import './index.css';

function App() {
  useEffect(() => {
    const items = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    items.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="topbar">
        <div className="wrap">
          <nav>
            <a className="brand" href="#top">TARUN ROY<span>.</span></a>
            <div className="navlinks">
              <a href="#about">About</a>
              <a href="#cases">Case Studies</a>
              <a href="#experience">Experience</a>
              <a href="#skills">Skills</a>
              <a className="nav-cta" href="#contact">Let's Connect</a>
            </div>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="floating-bg">
            <span className="float-text float-1">GROWTH</span>
            <span className="float-text float-2">SEO</span>
            <span className="float-text float-3">DATA</span>
          </div>
          <div className="wrap hero-grid">
            <div className="hero-text-content">
              <div className="eyebrow reveal" style={{ transitionDelay: '0.1s' }}><span className="dot"></span> Growth Marketing Specialist</div>
              <h1 className="reveal" style={{ transitionDelay: '0.2s' }}>
                I turn <span className="gradient">data, strategy,</span>
                and execution into growth.
              </h1>
              <p className="hero-copy reveal" style={{ transitionDelay: '0.3s' }}>
                With experience across paid media, SEO, CRM, automation, and funnel optimization,
                I build and improve growth programs from first click to conversion.
              </p>

              <div className="hero-actions reveal" style={{ transitionDelay: '0.4s' }}>
                <a className="btn btn-primary" href="#cases">View My Work ↗</a>
                <a className="btn btn-ghost" href="#contact">Contact Me</a>
              </div>
            </div>

            <aside className="reveal" style={{ transitionDelay: '0.5s' }}>
              <div className="avatar reveal" style={{ transitionDelay: '0.6s' }}><img src="Tarun-profile.png" alt="Tarun Roy profile photo" /></div>

              <div className="pill-row">
                <span className="pill reveal" style={{ transitionDelay: '1.0s' }}>SEO</span>
                <span className="pill reveal" style={{ transitionDelay: '1.1s' }}>Google Ads</span>
                <span className="pill reveal" style={{ transitionDelay: '1.2s' }}>Meta Ads</span>
                <span className="pill reveal" style={{ transitionDelay: '1.3s' }}>Meritto CRM</span>
                <span className="pill reveal" style={{ transitionDelay: '1.4s' }}>Automation</span>
                <span className="pill reveal" style={{ transitionDelay: '1.5s' }}>GA4</span>
              </div>
            </aside>
          </div>
        </section>

        <section>
          <div className="wrap">
            <div className="section-head reveal">
              <div>
                <div className="section-kicker">Impact at a glance</div>
                <h2>Numbers that define the work.</h2>
              </div>
              <div className="section-note">
                A selection of quantified outcomes from the experience and achievements documented in my resume.
              </div>
            </div>

            <div className="metrics">
              <div className="metric reveal" style={{ transitionDelay: '0s' }}><strong>43×</strong><span>Monthly organic traffic growth</span></div>
              <div className="metric reveal" style={{ transitionDelay: '0.1s' }}><strong>₹2–2.5Cr</strong><span>Monthly paid media spend managed / optimized</span></div>
              <div className="metric reveal" style={{ transitionDelay: '0.2s' }}><strong>12K–13K</strong><span>Leads generated per month</span></div>
              <div className="metric reveal" style={{ transitionDelay: '0.3s' }}><strong>15%</strong><span>CPL improvement</span></div>
            </div>
          </div>
        </section>

        <section id="about">
          <div className="wrap">
            <div className="section-head reveal">
              <div>
                <div className="section-kicker">About</div>
                <h2>Marketing with an operator mindset.</h2>
              </div>
            </div>

            <div className="about-grid">
              <div className="panel reveal">
                <p>
                  I’m Tarun Roy, a Growth Marketing professional with 3+ years of experience across
                  SEO, paid media, CRM, marketing automation and funnel optimization.
                </p>
                <p>
                  My work spans acquisition through admission: campaign execution, lead management,
                  segmentation, scoring, nurturing, analytics, CRO and performance reporting.
                </p>
                <p>
                  At LPU Online, I work across growth channels and CRM systems, connecting campaign-level
                  data with lead quality, conversion and business outcomes.
                </p>
              </div>

              <div className="panel reveal">
                <div className="section-kicker">Core Expertise</div>
                <div className="tag-list">
                  <span className="tag">Growth Strategy</span>
                  <span className="tag">Funnel Optimization</span>
                  <span className="tag">SEO & Technical SEO</span>
                  <span className="tag">Google Ads</span>
                  <span className="tag">Meta Ads</span>
                  <span className="tag">CRM Lead Management</span>
                  <span className="tag">Lead Scoring</span>
                  <span className="tag">Email / WhatsApp / SMS</span>
                  <span className="tag">Marketing Automation</span>
                  <span className="tag">Lifecycle Marketing</span>
                  <span className="tag">A/B Testing & CRO</span>
                  <span className="tag">Funnel Analytics</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="how-i-work">
          <div className="wrap">
            <div className="section-head reveal">
              <div>
                <div className="section-kicker">How I Work</div>
                <h2>Diagnose. Optimize. Automate.</h2>
              </div>
              <div className="section-note">
                A simple operating framework for turning marketing data into repeatable growth.
              </div>
            </div>

            <div className="skills-grid">
              <div className="skill-card reveal">
                <div className="section-kicker">01 — Diagnose</div>
                <h3>Data before decisions</h3>
                <p>I analyse the full funnel to understand where traffic, leads or conversions are being lost.</p>
              </div>

              <div className="skill-card reveal">
                <div className="section-kicker">02 — Optimize</div>
                <h3>Performance with a purpose</h3>
                <p>I continuously improve acquisition, CPL, conversion and lead quality across paid and organic channels.</p>
              </div>

              <div className="skill-card reveal">
                <div className="section-kicker">03 — Automate</div>
                <h3>Systems that scale growth</h3>
                <p>I use CRM, segmentation, scoring and automation to turn follow-ups into a repeatable growth process.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="cases">
          <div className="wrap">
            <div className="section-head reveal">
              <div>
                <div className="section-kicker">Selected Case Studies</div>
                <h2>From channel growth to funnel impact.</h2>
              </div>
              <div className="section-note">
                These are condensed portfolio stories based on the quantified results in the resume.
              </div>
            </div>

            <div className="cases">
              <article className="case reveal">
                <div className="num">01 / SEO</div>
                <h3>43× Organic Traffic Scale-Up</h3>
                <p>
                  Implemented end-to-end SEO across technical optimization, on-page SEO,
                  keyword research and authority-building through backlink outreach.
                </p>
                <div className="case-stat">
                  <strong>30K → 1.3M</strong>
                  <span>monthly sessions in 7 months at The Crypto Times</span>
                </div>
              </article>

              <article className="case reveal">
                <div className="num">02 / PAID MEDIA</div>
                <h3>High-Volume Lead Acquisition</h3>
                <p>
                  Supported performance optimization across Google Ads and Meta Ads,
                  spanning Search, Display, YouTube, Performance Max and remarketing.
                </p>
                <div className="case-stat">
                  <strong>12K–13K</strong>
                  <span>leads/month while improving CPL by 15%</span>
                </div>
              </article>

              <article className="case reveal">
                <div className="num">03 / EDTECH SEO</div>
                <h3>High-Intent Organic Lead Growth</h3>
                <p>
                  Led SEO strategy around high-intent terms such as “online degree” and
                  “online MBA” to strengthen qualified organic acquisition.
                </p>
                <div className="case-stat">
                  <strong>+20%</strong>
                  <span>qualified organic leads within 6 months at LPU</span>
                </div>
              </article>

              <article className="case reveal">
                <div className="num">04 / CRM AUTOMATION</div>
                <h3>Email Automation Rebuild</h3>
                <p>
                  Rebuilt automation workflows and lifecycle follow-ups to improve delivery,
                  campaign reach and nurturing effectiveness.
                </p>
                <div className="case-stat">
                  <strong>45% → 65%+</strong>
                  <span>email delivery rate after workflow improvements</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="experience">
          <div className="wrap">
            <div className="section-head reveal">
              <div>
                <div className="section-kicker">Experience</div>
                <h2>Career timeline.</h2>
              </div>
            </div>

            <div className="timeline">
              <article className="job reveal">
                <div>
                  <div className="job-date">SEP 2025 — PRESENT</div>
                  <div className="job-company">Jalandhar</div>
                </div>
                <div>
                  <div className="job-role">Growth Marketing Specialist</div>
                  <div className="job-company">Lovely Professional University (EdTech)</div>
                  <ul>
                    <li>Own end-to-end growth marketing across SEO, paid media, CRM and email.</li>
                    <li>Contribute to ₹2–2.5Cr monthly paid media optimization and 12,000–13,000 monthly leads.</li>
                    <li>Run Meritto CRM segmentation, scoring, prioritization and lifecycle-stage tracking.</li>
                    <li>Build multi-channel nurturing campaigns with email, WhatsApp and SMS automation.</li>
                    <li>Run A/B testing, CRO and real-time performance reporting across GA4, GSC and Looker Studio.</li>
                  </ul>
                </div>
              </article>

              <article className="job reveal">
                <div>
                  <div className="job-date">SEP 2023 — SEP 2025</div>
                  <div className="job-company">Ahmedabad</div>
                </div>
                <div>
                  <div className="job-role">SEO Analyst</div>
                  <div className="job-company">The Crypto Times</div>
                  <ul>
                    <li>Implemented end-to-end SEO across technical, on-page, keyword and authority-building work.</li>
                    <li>Scaled monthly organic traffic 43× from 30K to 1.3M sessions within 7 months.</li>
                    <li>Contributed to ₹2Cr+ monthly revenue for the business.</li>
                    <li>Used GA4 and Google Search Console for performance monitoring and KPI reporting.</li>
                  </ul>
                </div>
              </article>

              <article className="job reveal">
                <div>
                  <div className="job-date">JUN 2023 — AUG 2023</div>
                  <div className="job-company">Remote</div>
                </div>
                <div>
                  <div className="job-role">Digital Marketing Intern</div>
                  <div className="job-company">Ahuja Media</div>
                  <ul>
                    <li>Improved website authority and rankings through backlink analysis and link-building outreach.</li>
                    <li>Used GA4 to track website performance and digital marketing activity.</li>
                    <li>Supported social publishing and keyword research for content visibility.</li>
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="skills">
          <div className="wrap">
            <div className="section-head reveal">
              <div>
                <div className="section-kicker">Skills & Stack</div>
                <h2>Tools I work with.</h2>
              </div>
            </div>

            <div className="skills-grid">
              <div className="skill-card reveal">
                <h3>Analytics & Reporting</h3>
                <p>GA4, Google Search Console, Looker Studio, Excel, Google Sheets</p>
              </div>
              <div className="skill-card reveal">
                <h3>SEO</h3>
                <p>SEMrush, Ahrefs, Screaming Frog, RankMath, Google Keyword Planner</p>
              </div>
              <div className="skill-card reveal">
                <h3>Paid Media</h3>
                <p>Google Ads, Meta Ads Manager, Programmatic Ads, LinkedIn Ads</p>
              </div>
              <div className="skill-card reveal">
                <h3>CRM — Meritto</h3>
                <p>Segmentation, scoring, Hot/Warm/Cold/Dead prioritization, lifecycle management, lead assignment and UTM tracking</p>
              </div>
              <div className="skill-card reveal">
                <h3>Automation & CMS</h3>
                <p>WordPress, Zapier, Mailchimp, Zoho, AI marketing tools and email automation</p>
              </div>
              <div className="skill-card reveal">
                <h3>Growth Operations</h3>
                <p>Lead generation, nurturing, A/B testing, CRO, MQL/SQL analysis and stakeholder reporting</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="wrap">
            <div className="section-head reveal">
              <div>
                <div className="section-kicker">Education & Certifications</div>
                <h2>Continuous learning.</h2>
              </div>
            </div>

            <div className="edu-grid">
              <div className="edu-item reveal">
                <div className="eyebrow-mini">Education</div>
                <h3>Master of Commerce (M.Com)</h3>
                <p>Government Commerce College, Kota · 2022–2024</p>
              </div>
              <div className="edu-item reveal">
                <div className="eyebrow-mini">Education</div>
                <h3>Bachelor of Commerce (B.Com)</h3>
                <p>Government Commerce College, Kota · 2019–2022</p>
              </div>
              <div className="edu-item reveal">
                <div className="eyebrow-mini">Certification</div>
                <h3>Foundation of Digital Marketing</h3>
                <p>Skillcircle</p>
              </div>
              <div className="edu-item reveal">
                <div className="eyebrow-mini">Certification</div>
                <h3>Generative AI Overview for Project Managers</h3>
                <p>PMI</p>
              </div>
              <div className="edu-item reveal">
                <div className="eyebrow-mini">Certification</div>
                <h3>Prompt Engineering for ChatGPT</h3>
                <p>Coursera</p>
              </div>
              <div className="edu-item reveal">
                <div className="eyebrow-mini">Certification</div>
                <h3>Introduction to Generative AI</h3>
                <p>Google</p>
              </div>
              <div className="edu-item reveal">
                <div className="eyebrow-mini">Certification</div>
                <h3>Content Marketing</h3>
                <p>HubSpot</p>
              </div>
              <div className="edu-item reveal">
                <div className="eyebrow-mini">Certification</div>
                <h3>LinkedIn Marketing Strategy</h3>
                <p>LinkedIn</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="wrap contact">
            <div className="contact-box reveal">
              <div className="section-kicker">Let's Connect</div>
              <h2>Have a growth challenge? Let's talk.</h2>
              <p>
                Open to conversations around growth marketing, SEO, performance marketing,
                CRM and marketing automation opportunities.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="mailto:tarunroy.in01@gmail.com">Email Me ↗</a>
                <a className="btn btn-ghost" href="https://www.linkedin.com/in/iamtarunroy/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
              </div>
            </div>

            <div className="panel reveal">
              <div className="contact-list">
                <div className="contact-item"><b>Email</b><span>tarunroy.in01@gmail.com</span></div>
                <div className="contact-item"><b>LinkedIn</b><span>linkedin.com/in/iamtarunroy</span></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap footer-inner">
          <span>© 2026 Tarun Roy. All rights reserved.</span>
          <span>Growth • Performance • SEO • CRM</span>
        </div>
      </footer>
    </>
  );
}

export default App;
