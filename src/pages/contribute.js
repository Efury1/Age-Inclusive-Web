import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Contribute() {
  return (
    <Layout
      title="How to Contribute"
      description="Contribution guidelines for the Age-Inclusive Web Standard project."
    >
      <main className={styles.main}>
        <div className={styles.heroContainer}>
          <h1 className={styles.heroTitle}>How to Contribute</h1>

          <p className={styles.heroSubtitle}>
            This project is open source and welcomes contributions from designers,
            developers, researchers, and accessibility practitioners.
          </p>
        </div>

        <section className={styles.guidelineCard}>
          <h2>Project repository</h2>

          <p>
            The source code is hosted on GitHub:
          </p>

          <p>
            <a
              href="https://github.com/Efury1/Age-Inclusive-Web"
              target="_blank"
              rel="noreferrer"
            >
              https://github.com/Efury1/Age-Inclusive-Web
            </a>
          </p>
        </section>

        <section className={styles.guidelineCard}>
          <h2>How to contribute</h2>

          <ol>
            <li>Fork the repository</li>
            <li>Clone your fork locally</li>
            <li>Create a feature branch</li>
            <li>Install dependencies using <code>npm install</code></li>
            <li>Run locally with <code>npm start</code></li>
            <li>Make your changes</li>
            <li>Write clear commit messages</li>
            <li>Submit a pull request</li>
          </ol>
        </section>

        <section className={styles.guidelineCard}>
          <h2>Contribution guidelines</h2>

          <p>
            Contributions should align with the goals of inclusive, age-aware design.
            Please follow these principles:
          </p>

          <ul>
            <li>Use clear, plain language</li>
            <li>Maintain consistency with existing structure</li>
            <li>Avoid dark patterns or manipulative UX practices</li>
            <li>Ensure accessibility is considered in all changes</li>
            <li>Provide references for any research-based claims</li>
          </ul>
        </section>

        <section className={styles.guidelineCard}>
          <h2>Reporting issues</h2>

          <p>
            If you find a bug or have a suggestion, open an issue on GitHub.
          </p>

          <p>Include:</p>

          <ul>
            <li>Clear description of the issue</li>
            <li>Steps to reproduce (if applicable)</li>
            <li>Expected vs actual behaviour</li>
            <li>Screenshots where helpful</li>
          </ul>
        </section>

        <section className={styles.guidelineCard}>
          <h2>Commit guidelines</h2>

          <ul>
            <li>Use descriptive commit messages</li>
            <li>Keep commits focused and small</li>
            <li>Avoid vague messages like “fix stuff”</li>
          </ul>

          <p>Examples:</p>
          <ul>
            <li><code>Add category grouping to guidelines</code></li>
            <li><code>Fix checkbox keyboard interaction</code></li>
            <li><code>Improve mobile spacing in guideline cards</code></li>
          </ul>
        </section>

        <section className={styles.guidelineCard}>
          <h2>Documentation and best practices</h2>

          <p>
            If you're new to contributing, these resources are recommended:
          </p>

          <ul>
            <li>
              <a href="https://docusaurus.io/docs/creating-pages" target="_blank" rel="noreferrer">
                Docusaurus: Creating pages
              </a>
            </li>
            <li>
              <a href="https://docusaurus.io/docs/markdown-features" target="_blank" rel="noreferrer">
                Docusaurus: Markdown features
              </a>
            </li>
            <li>
              <a href="https://opensource.guide/how-to-contribute/" target="_blank" rel="noreferrer">
                GitHub Open Source Guide: How to contribute
              </a>
            </li>
            <li>
              <a href="https://www.conventionalcommits.org/" target="_blank" rel="noreferrer">
                Conventional Commits specification
              </a>
            </li>
          </ul>
        </section>

        <section className={styles.guidelineCard}>
          <h2>Code of conduct</h2>

          <p>
            This project is focused on inclusive and respectful design for older adults.
            All contributors are expected to communicate professionally and constructively.
          </p>

          <p>
            Unacceptable behaviour includes disrespectful language, harassment,
            or dismissal of accessibility concerns.
          </p>
        </section>
      </main>
    </Layout>
  );
}