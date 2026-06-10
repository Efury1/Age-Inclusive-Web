// src/pages/index.js
import React, { useState, useMemo } from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import { GUIDELINES } from '../data/guidelines';


import DevNoticeBanner from '../components/Banner';

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
        <a key={i} href={part} target="_blank" rel="noreferrer noopener">
          {part}
          <span className={styles.srOnly}> (opens in new tab)</span>
        </a>
      );
    }
    return part;
  });
}

function WcagBadge({ text }) {
  return (
    <div className={styles.wcagBadge} role="note">
      <span className={styles.wcagBadgeIcon} aria-hidden="true">⚠</span>
      <span>{text}</span>
    </div>
  );
}

function GuidelineCard({ guideline, checked, onToggle }) {
  const [open, setOpen] = useState(false);

  const triggerId = `trigger-${guideline.id}`;
  const headingId = `heading-${guideline.id}`;
  const bodyId = `body-${guideline.id}`;

  const handleCheckboxClick = (e) => {
    e.stopPropagation();
    onToggle();
  };

  const handleCheckboxKeyDown = (e) => {
    if (e.key === ' ' || e.key === 'Enter') {
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
      <div className={styles.guidelineHeader}>

        <div
          className={`${styles.guidelineCheckbox} ${
            checked ? styles.guidelineCheckboxChecked : ''
          }`}
          role="checkbox"
          aria-checked={checked}
          aria-label={`Mark "${guideline.title}" as complete`}
          tabIndex={0}
          onClick={handleCheckboxClick}
          onKeyDown={handleCheckboxKeyDown}
        />

        <button
          type="button"
          id={triggerId}
          className={`${styles.guidelineTrigger} ${styles.focusable}`}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={bodyId}
        >
          <div className={styles.guidelineTitleGroup}>
            <span className={styles.guidelineId} id={headingId}>
              {guideline.code}
            </span>

            <div className={styles.guidelineTitle}>
              {guideline.title}
            </div>

            {guideline.wcagOverlap && (
              <span
                className={styles.wcagPill}
                aria-label="Has WCAG overlap"
              >
                <span aria-hidden="true">⚠ </span>
                WCAG overlap
              </span>
            )}
          </div>

          <span className={styles.guidelineExpand} aria-hidden="true">
            {open ? '– Hide' : '+ Show'}
          </span>
        </button>
      </div>

      {open && (
        <div
          id={bodyId}
          className={styles.guidelineBody}
          role="region"
          aria-labelledby={headingId}
        >
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
                Example image – provided to help illustrate the guideline.
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
  const [checked, setChecked] = useState(() => {
    try {
      const stored = localStorage.getItem('aiws-checked');
      return stored ? new Set(JSON.parse(stored)) : new Set();
    } catch {
      return new Set();
    }
  });

  const toggleCheck = (id) => {
    setChecked((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);

      try {
        localStorage.setItem('aiws-checked', JSON.stringify([...next]));
      } catch {}

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
        pct: total > 0 ? Math.round((completed / total) * 100) : 0,
      },
    };
  }, [checked]);

  return (
    <Layout
      title="Age-Inclusive Web Standard"
      description="A practical framework for designing inclusive digital services for older adults."
    >
      {/* ✅ Banner directly under navbar */}
      <DevNoticeBanner />

      {/* Skip link */}
      <a href="#main-content" className={styles.skipLink}>
        Skip to main content
      </a>

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

      <main id="main-content" className={styles.main}>
        <div className={styles.progressCard}>
          <div className={styles.progressLabel} id="progress-label">
            Guidelines complete
          </div>

          <div
            className={styles.progressBarBg}
            role="progressbar"
            aria-labelledby="progress-label"
            aria-valuenow={progress.completed}
            aria-valuemin={0}
            aria-valuemax={progress.total}
            aria-valuetext={`${progress.completed} of ${progress.total} guidelines complete`}
          >
            <div
              className={styles.progressBarFill}
              style={{ width: `${progress.pct}%` }}
            />
          </div>

          <div className={styles.progressCount} aria-hidden="true">
            {progress.completed} / {progress.total}
          </div>
        </div>

        {Object.entries(groupedGuidelines).map(([category, items]) => {
          const categoryId = `category-${category
            .replace(/\s+/g, '-')
            .replace(/[^a-z0-9-]/gi, '')
            .toLowerCase()}`;

          return (
            <section
              key={category}
              className={styles.categorySection}
              aria-labelledby={categoryId}
            >
              <h2 className={styles.categoryHeader} id={categoryId}>
                {category}
              </h2>

              {items.map((guideline) => (
                <GuidelineCard
                  key={guideline.id}
                  guideline={guideline}
                  checked={checked.has(guideline.id)}
                  onToggle={() => toggleCheck(guideline.id)}
                />
              ))}
            </section>
          );
        })}
      </main>
    </Layout>
  );
}