// src/pages/index.js
import React, { useState, useMemo } from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import { GUIDELINES } from '../data/guidelines';

/* -----------------------------
 * Utilities
 * ----------------------------- */

function getCodeNumber(code) {
  const match = code.match(/\d+/);
  return match ? parseInt(match[0], 10) : 0;
}

function linkify(text) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;

  return text.split(urlRegex).map((part, i) => {
    if (urlRegex.test(part)) {
      return (
        <a key={i} href={part} target="_blank" rel="noreferrer">
          {part}
        </a>
      );
    }
    return part;
  });
}

/* -----------------------------
 * Small UI components
 * ----------------------------- */

function WcagBadge({ text }) {
  return (
    <div className={styles.wcagBadge}>
      <span className={styles.wcagBadgeIcon}>⚠</span>
      <span>{text}</span>
    </div>
  );
}

/* -----------------------------
 * Guideline Card
 * ----------------------------- */

function GuidelineCard({ guideline, checked, onToggle }) {
  const [open, setOpen] = useState(false);

  const handleToggleOpen = () => setOpen((v) => !v);

  const handleCheckboxClick = (event) => {
    event.stopPropagation();
    onToggle();
  };

  const handleKeyDown = (e) => {
    if (e.key === ' ') {
      e.preventDefault();
      e.stopPropagation();
      onToggle();
    }
  };

  return (
    <div
      className={`${styles.guidelineCard} ${
        checked ? styles.guidelineCardChecked : ''
      }`}
    >
      <div className={styles.guidelineHeader} onClick={handleToggleOpen}>
        <div
          className={`${styles.guidelineCheckbox} ${
            checked ? styles.guidelineCheckboxChecked : ''
          }`}
          role="checkbox"
          aria-checked={checked}
          tabIndex={0}
          onClick={handleCheckboxClick}
          onKeyDown={handleKeyDown}
        />

        <div className={styles.guidelineTitleGroup}>
          <span className={styles.guidelineId}>{guideline.code}</span>
          <div className={styles.guidelineTitle}>{guideline.title}</div>

          {guideline.wcagOverlap && (
            <span className={styles.wcagPill}>⚠ WCAG overlap</span>
          )}
        </div>

        {/* Accordion caret */}
        <span className={styles.guidelineExpand} aria-hidden="true">
          {open ? '▴' : '▾'}
        </span>
      </div>

      {open && (
        <div className={styles.guidelineBody}>
          {guideline.wcagOverlap && (
            <WcagBadge text={guideline.wcagOverlap} />
          )}

          {guideline.image && (
            <figure className={styles.guidelineFigure}>
              <div className={styles.guidelineImageFrame}>
                <img
                  src={guideline.image.src}
                  alt={guideline.image.alt}
                  className={styles.guidelineImage}
                />
              </div>

              <figcaption className={styles.guidelineCaption}>
                Example image - this is provided to help illustrate the guideline.
              </figcaption>
            </figure>
          )}

          {guideline.body.split('\n\n').map((para, index) => (
            <p key={index} className={styles.guidelinePara}>
              {linkify(para)}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

/* -----------------------------
 * Main Page
 * ----------------------------- */

export default function Home() {
  const [checked, setChecked] = useState(new Set());

  const toggleCheck = (id) => {
    setChecked((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const { groupedGuidelines, progress } = useMemo(() => {
    const sorted = [...GUIDELINES].sort(
      (a, b) => getCodeNumber(a.code) - getCodeNumber(b.code)
    );

    const grouped = sorted.reduce((acc, g) => {
      if (!acc[g.category]) acc[g.category] = [];
      acc[g.category].push(g);
      return acc;
    }, {});

    const completed = checked.size;
    const total = GUIDELINES.length;

    return {
      groupedGuidelines: grouped,
      progress: {
        completed,
        total,
        pct: (completed / total) * 100,
      },
    };
  }, [checked]);

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
            on older women as a priority audience.
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
                style={{ width: `${progress.pct}%` }}
              />
            </div>

            <div className={styles.progressCount}>
              {progress.completed} / {progress.total}
            </div>
          </div>

          {Object.entries(groupedGuidelines).map(([category, items]) => (
            <section key={category} className={styles.categorySection}>
              <h2 className={styles.categoryHeader}>{category}</h2>

              {items.map((guideline) => (
                <GuidelineCard
                  key={guideline.id}
                  guideline={guideline}
                  checked={checked.has(guideline.id)}
                  onToggle={() => toggleCheck(guideline.id)}
                />
              ))}
            </section>
          ))}
        </main>
    </Layout>
  );
}