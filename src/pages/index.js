// src/pages/index.js
import React, { useState } from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const GUIDELINES = [
  {
    id: 'g1',
    code: 'AIWS-01 · Navigation visibility',
    title: 'Avoid hiding actions inside abstract icons or hamburger menus',
    body: `Many older users prefer visible navigation and recognition over exploration-based interfaces. Hidden navigation increases cognitive load and reduces confidence.

Desktop interfaces should avoid hamburger menus and instead display top-level navigation clearly. On mobile, if there are 4 or fewer links, show them directly. If there are more than 4, consider alternative structures such as in-page navigation or clearly supported expanded menus.

Reference: https://www.nngroup.com/articles/hamburger-menus/`,
  },
  {
    id: 'g2',
    code: 'AIWS-02 · Time & pacing',
    title: 'Avoid time pressure and allow users to work at their own pace',
    body: `Older adults may take longer to read, verify, and build confidence before submitting information. Systems should avoid forced time limits wherever possible.

Provide save-and-return-later functionality and allow users to extend sessions. Where applicable, allow adjustment of interaction speed or experience pacing.

Example: NatWest accessibility features highlight adjustable interaction support and inclusive design approaches.`,
  },
  {
    id: 'g3',
    code: 'AIWS-03 · Device flexibility',
    title: 'Do not make mobile app use mandatory',
    body: `Not all users are comfortable with or have access to smartphones. Many older users prefer tablets or desktop devices.

All critical services should be fully accessible via the web. Provide alternatives to smartphone authentication and avoid app-only flows.

Based on research from Pew Research Center on older adults' technology use.`,
  },
  {
    id: 'g4',
    code: 'AIWS-04 · Support visibility',
    title: 'Keep support options visible throughout high-risk flows',
    body: `Older users are more likely to seek reassurance or human assistance during complex tasks. If help is not visible, they are more likely to abandon the process.

Provide persistent "Need help" links in forms and checkout flows. Include clear escalation paths from chatbots to human support.`,
  },
  {
    id: 'g5',
    code: 'AIWS-05 · Memory load',
    title: 'Avoid requiring memorisation across steps or screens',
    body: `Interfaces that rely on short-term recall increase errors and frustration.

Keep previously entered information visible where possible, use progress indicators, and avoid requiring users to remember codes or instructions across screens.`,
  },
];

function GuidelineCard({ guideline, checked, onToggleCheck }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`${styles.guidelineCard} ${checked ? styles.guidelineCardChecked : ''}`}>
      <div className={styles.guidelineHeader} onClick={() => setOpen(!open)}>
        <div
          className={`${styles.guidelineCheckbox} ${checked ? styles.guidelineCheckboxChecked : ''}`}
          onClick={(e) => { e.stopPropagation(); onToggleCheck(); }}
          role="checkbox"
          aria-checked={checked}
          tabIndex={0}
          onKeyDown={(e) => e.key === ' ' && (e.stopPropagation(), onToggleCheck())}
        />
        <div className={styles.guidelineTitleGroup}>
          <span className={styles.guidelineId}>{guideline.code}</span>
          <div className={styles.guidelineTitle}>{guideline.title}</div>
        </div>
        <span className={styles.guidelineExpand}>{open ? '−' : '+'}</span>
      </div>
      {open && (
        <p className={styles.guidelineBody}>
          {guideline.body.split('\n\n').map((para, i) => (
            <React.Fragment key={i}>{para}<br /><br /></React.Fragment>
          ))}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  const [checked, setChecked] = useState(new Set());

  const toggleCheck = (id) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };

  const completedCount = checked.size;
  const total = GUIDELINES.length;
  const pct = (completedCount / total) * 100;

  return (
    <Layout title="Age-Inclusive Web Standard" description="A practical framework for designing inclusive digital services for older adults.">
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <h1 className={styles.heroTitle}>Age-Inclusive Web Standard</h1>
          <p className={styles.heroSubtitle}>
            A practical framework for designing inclusive digital services that meet the needs of older adults,
            placing particular emphasis on older women as a priority audience. It addresses common barriers such
            as lower digital confidence, caring responsibilities, and the need to navigate multiple devices.
            The framework is supported by actionable checklists, and a clear pathway to certification.
          </p>
          <blockquote className={styles.heroQuote}>
            "WCAG provides an essential accessibility foundation, but it doesn't fully account for the realities
            of aging—where vision, cognition, motor control, and digital familiarity change together over time.
            Age-inclusive design builds on WCAG by focusing on clarity, confidence, and adaptability across a
            lifetime." — Elevate Team
          </blockquote>
        </div>
      </section>

      <main className={styles.main}>
        <div className={styles.progressCard}>
          <div className={styles.progressLabel}>Guidelines complete</div>
          <div className={styles.progressBarBg}>
            <div className={styles.progressBarFill} style={{ width: `${pct}%` }} />
          </div>
          <div className={styles.progressCount}>{completedCount} / {total}</div>
        </div>

        {GUIDELINES.map((g) => (
          <GuidelineCard
            key={g.id}
            guideline={g}
            checked={checked.has(g.id)}
            onToggleCheck={() => toggleCheck(g.id)}
          />
        ))}
      </main>
    </Layout>
  );
}