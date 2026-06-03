// src/pages/index.js
import React, { useState } from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import { GUIDELINES } from '../data/guidelines';

function WcagBadge({ text }) {
  return (
    <div className={styles.wcagBadge}>
      <span className={styles.wcagBadgeIcon}>⚠</span>
      <span>{text}</span>
    </div>
  );
}

function linkify(text) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;

  return text.split(urlRegex).map((part, i) => {
    if (part.match(urlRegex)) {
      return (
        <a key={i} href={part} target="_blank" rel="noreferrer">
          {part}
        </a>
      );
    }
    return part;
  });
}

function GuidelineCard({ guideline, checked, onToggleCheck }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`${styles.guidelineCard} ${
        checked ? styles.guidelineCardChecked : ''
      }`}
    >
      <div className={styles.guidelineHeader} onClick={() => setOpen(!open)}>
        <div
          className={`${styles.guidelineCheckbox} ${
            checked ? styles.guidelineCheckboxChecked : ''
          }`}
          onClick={(event) => {
            event.stopPropagation();
            onToggleCheck();
          }}
          role="checkbox"
          aria-checked={checked}
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === ' ') {
              event.preventDefault();
              event.stopPropagation();
              onToggleCheck();
            }
          }}
        />

        <div className={styles.guidelineTitleGroup}>
          <span className={styles.guidelineId}>{guideline.code}</span>
          <div className={styles.guidelineTitle}>{guideline.title}</div>

          {guideline.wcagOverlap && (
            <span className={styles.wcagPill}>⚠ WCAG overlap</span>
          )}
        </div>

        <span className={styles.guidelineExpand}>
          {open ? '−' : '+'}
        </span>
      </div>

      {open && (
        <div className={styles.guidelineBody}>
          {guideline.wcagOverlap && (
            <WcagBadge text={guideline.wcagOverlap} />
          )}

          {guideline.image && (
            <img
              src={guideline.image.src}
              alt={guideline.image.alt}
              className={styles.guidelineImage}
            />
          )}

          {guideline.body.split('\n\n').map((para, i) => (
            <p key={i} className={styles.guidelinePara}>
              {linkify(para)}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const [checked, setChecked] = useState(new Set());

  const toggleCheck = (id) => {
    setChecked((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const completedCount = checked.size;
  const total = GUIDELINES.length;
  const pct = (completedCount / total) * 100;

  const grouped = GUIDELINES.reduce((acc, g) => {
    acc[g.category] = acc[g.category] || [];
    acc[g.category].push(g);
    return acc;
  }, {});

  return (
    <Layout
      title="Age-Inclusive Web Standard"
      description="A practical framework for designing inclusive digital services for older adults."
    >
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <h1 className={styles.heroTitle}>
            Age-Inclusive Web Standard
          </h1>

          <p className={styles.heroSubtitle}>
            A practical framework for designing inclusive digital services
            that meet the needs of older adults, placing particular emphasis
            on older women as a priority audience. It addresses common
            barriers such as lower digital confidence, caring
            responsibilities, and the need to navigate multiple devices.
            The framework is supported by actionable checklists.
          </p>
        </div>
      </section>

      <main className={styles.main}>
        <div className={styles.progressCard}>
          <div className={styles.progressLabel}>
            Guidelines complete
          </div>

          <div className={styles.progressBarBg}>
            <div
              className={styles.progressBarFill}
              style={{ width: `${pct}%` }}
            />
          </div>

          <div className={styles.progressCount}>
            {completedCount} / {total}
          </div>
        </div>

        {Object.entries(grouped).map(([category, items]) => (
          <section key={category} className={styles.categorySection}>
            <h2 className={styles.categoryHeader}>
              {category}
            </h2>

            {items.map((g) => (
              <GuidelineCard
                key={g.id}
                guideline={g}
                checked={checked.has(g.id)}
                onToggleCheck={() => toggleCheck(g.id)}
              />
            ))}
          </section>
        ))}
      </main>
    </Layout>
  );
}