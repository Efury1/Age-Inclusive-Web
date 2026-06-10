import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Pilot() {
  return (
    <Layout
      title="Pilot"
      description="Next steps for validating the Age-Inclusive Web Standard in real-world public sector environments."
    >
      <main className={styles.main}>
        <div className={styles.heroContainer}>
          <h1 className={styles.heroTitle}>Pilot programme</h1>

          <p className={styles.heroSubtitle}>
            We have developed an initial version of the Age-Inclusive Web Standard (AIWS) through research. The next step is to explore how this can be
            tested in real world public sector settings with users.
          </p>
        </div>

        <section className={styles.guidelineCard}>
          <h2>Where we are now</h2>

          <p>
            The current framework has been developed through desk research, analysis of known usability
            barriers, and synthesis of accessibility best practices, along with input and ideas from
            practitioners working in digital inclusion and public services.
          </p>

          <p>
            This has helped us shape an initial structure for AIWS, including key principles and example
            patterns for improving government service journeys.
          </p>

          <p>
            At this stage, however, the framework is still largely based on research and assumptions about
            user behaviour rather than direct testing with real users in live environments.
          </p>
        </section>

        <section className={styles.guidelineCard}>
          <h2>What we still need to do</h2>

          <p>
            The next step is to move from design and research into real-world testing with users, to better
            understand how the framework performs in practice.
          </p>

          <p>
            We want to check whether the assumptions we have made actually hold up when older adults and
            digitally excluded users complete real or realistic government service tasks.
          </p>
        </section>

        <section className={styles.guidelineCard}>
          <h2>How we think testing could work</h2>

          <p>
            Our current thinking is to work with councils and partner organisations to run usability
            sessions using simplified service journeys based on AIWS principles.
          </p>

          <p>
            Participants would be grouped into different cohorts, representing a range of digital confidence
            and accessibility needs, and asked to complete typical public service tasks while being observed.
          </p>

          <p>
            At the moment, this is still an early approach. Through further conversations with organisations
            and practitioners, we expect to refine and improve how this testing is carried out so it is
            practical, ethical, and useful in real settings.
          </p>
        </section>

        <section className={styles.guidelineCard}>
          <h2>How we would evaluate it</h2>

          <p>
            We are considering three simple measures to understand how well AIWS performs:
          </p>

          <ul>
            <li>
              <strong>Effectiveness:</strong> Can users complete the task, such as booking a service or
              submitting a form, without getting stuck?
            </li>
            <li>
              <strong>Efficiency:</strong> How long the task takes and how many errors or corrections are
              needed along the way.
            </li>
            <li>
              <strong>Anxiety & Confidence:</strong> Whether users feel comfortable and in control, or show
              signs of confusion, hesitation, or frustration.
            </li>
          </ul>
        </section>

        <section className={styles.guidelineCard}>
          <h2>Early testing ideas</h2>

          <p>
            We have also discussed a few possible ways to make testing more realistic, although these would
            need careful refinement with partners:
          </p>

          <ul>
            <li>
              <strong>Interruption scenario:</strong> Asking users to briefly pause mid-task to simulate a
              real-world distraction, then observing how easily they can return and continue.
            </li>
            <li>
              <strong>Error scenario:</strong> Intentionally triggering a simple form error (such as a
              missing field) to see how clearly the system helps users understand and recover from it.
            </li>
          </ul>

          <p>
            These ideas are not fixed methods yet, but starting points for discussion on how to test the
            framework in realistic conditions.
          </p>
        </section>

        <section className={styles.guidelineCard}>
          <h2>Why this matters</h2>

          <p>
            While the framework is grounded in established accessibility knowledge, it still needs to be
            tested with real users to understand where it works well and where it needs improvement.
          </p>

          <p>
            The goal is to ensure AIWS is not only well-designed in theory, but also genuinely helpful in
            real public service situations.
          </p>
        </section>

        <section className={styles.guidelineCard}>
          <h2>Next steps</h2>

          <p>
            We are currently looking to speak with councils, public sector teams, and organisations working
            in digital inclusion and accessibility to explore the best way to carry out this testing.
          </p>

          <p>
            Through these conversations, we expect the approach to evolve and become more practical, grounded,
            and aligned with real-world constraints.
          </p>

        </section>
      </main>
    </Layout>
  );
}