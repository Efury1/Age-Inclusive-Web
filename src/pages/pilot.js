import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Pilot() {
  return (
    <Layout
      title="Pilot"
      description="Pilot programme for introducing the Age-Inclusive Web Standard into public sector services."
    >
      <main className={styles.main}>
        <div className={styles.heroContainer}>
          <h1 className={styles.heroTitle}>Pilot programme</h1>

          <p className={styles.heroSubtitle}>
            We are currently working to introduce the Age-Inclusive Web Standard (AIWS) into
            public sector and government digital services.
          </p>
        </div>

        <section className={styles.guidelineCard}>
          <h2>What this pilot is</h2>

          <p>
            This is an early-stage effort to understand how age-inclusive design principles can be
            applied in real government services and delivery environments.
          </p>

          <p>
            The aim is not to create additional compliance burden. The aim is to reduce user failure,
            confusion, and avoidable drop-off in essential services.
          </p>
        </section>

        <section className={styles.guidelineCard}>
          <h2>Where we are currently limited</h2>

          <p>
            We have developed this framework through desk research, existing accessibility literature,
            and analysis of known usability barriers affecting older adults.
          </p>

          <p>
            However, we have not yet been able to conduct structured, hands-on user research with
            older adults or lived-experience groups across government service journeys.
          </p>

          <p>
            This means there may be gaps between what the framework describes and what users
            experience in real-world contexts.
          </p>
        </section>

        <section className={styles.guidelineCard}>
          <h2>What we are asking for</h2>

          <p>
            We are actively looking for support from non-profit organisations, advocacy groups,
            and practitioners who work directly with older adults or digitally excluded users.
          </p>

          <p>
            In particular, we are looking for help in identifying:
          </p>

          <ul>
            <li>Where the framework may be missing real-world scenarios</li>
            <li>Where older users experience barriers that are not currently captured</li>
            <li>Where government services behave differently from expected assumptions</li>
            <li>Where additional guidance or correction is needed</li>
          </ul>
        </section>

        <section className={styles.guidelineCard}>
          <h2>How you can help</h2>

          <p>
            If you work in accessibility, public sector design, digital inclusion, or support services,
            your input is valuable to improving this framework.
          </p>

          <p>
            You can help by reviewing the guidelines and sharing:
          </p>

          <ul>
            <li>Missing cases from real service delivery</li>
            <li>Examples where users struggle that are not covered here</li>
            <li>Feedback from lived experience or frontline support teams</li>
            <li>Suggestions for improving clarity or applicability</li>
          </ul>
        </section>

        <section className={styles.guidelineCard}>
          <h2>Why this matters</h2>

          <p>
            Many digital government services assume a level of confidence and familiarity that does not
            reflect all users, particularly older adults or those with limited digital access.
          </p>

          <p>
            This pilot exists to reduce that gap by grounding design guidance in real-world behaviour
            and service outcomes rather than assumptions.
          </p>
        </section>

        <section className={styles.guidelineCard}>
          <h2>Get involved</h2>

          <p>
            If you would like to contribute feedback or help validate this work, please reach out through
            your organisation or through the project repository.
          </p>

          <p>
            https://github.com/Efury1/Age-Inclusive-Web
          </p>
        </section>
      </main>
    </Layout>
  );
}