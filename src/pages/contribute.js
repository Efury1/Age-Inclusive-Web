import React from 'react';
import Layout from '@theme/Layout';
import defaultTheme from '../theme/colors';
import styles from './index.module.css';

import { Accordion, AccordionItem } from '../components/Accordion';

export default function Contribute() {
  return (
    <Layout
      title="How to Contribute"
      description="Contribution guidelines for the Age-Inclusive Web Standard project."
    >
      <main className={styles.main} style={{ color: defaultTheme.text }}>

        {/* HERO */}
        <div className={styles.heroContainer}>
          <h1 className={styles.heroTitle}>How to Contribute</h1>

          <p
            className={styles.heroSubtitle}
            style={{ color: defaultTheme.muted }}
          >
            This project welcomes contributions from developers, councils, and researchers.
            Select a role below to see how you can get involved.
          </p>
        </div>

        {/* PROJECT REPO */}
        <section className={styles.guidelineCard}>
          <h2>Project repository</h2>

          <p>The source code is hosted on GitHub:</p>

          <a
            href="https://github.com/Efury1/Age-Inclusive-Web"
            target="_blank"
            rel="noreferrer"
            style={{ color: defaultTheme.accent }}
          >
            https://github.com/Efury1/Age-Inclusive-Web
          </a>
        </section>

        {/* ACCORDION SYSTEM */}

        <Accordion allowMultiple={false}>

          {/* DEVELOPERS */}
          <AccordionItem
            id="developers"
            title="Contributing as a developer"
            summary="Help build, improve, and maintain the codebase. No prior contribution experience needed."
          >
            <p>Developers help build, improve, and maintain the codebase.</p>

            <h3>Getting started</h3>
            <ol>
              <li>Fork the repository</li>
              <li>Clone your fork locally</li>
              <li>Create a feature branch</li>
              <li>Install dependencies with <code>npm install</code></li>
              <li>Run locally with <code>npm start</code></li>
              <li>Make your changes</li>
              <li>Write a clear commit message</li>
              <li>Submit a pull request</li>
            </ol>

            <h3>Principles to follow</h3>
            <ul>
              <li>Use clear, plain language in interfaces and documentation</li>
              <li>Keep changes consistent with existing structure</li>
              <li>Avoid dark patterns or manipulative UX</li>
              <li>Treat accessibility as a requirement, not optional</li>
              <li>Reference research-based claims</li>
            </ul>

            <h3>Commit guidelines</h3>
            <ul>
              <li><code>Add category grouping to guidelines</code></li>
              <li><code>Fix checkbox keyboard interaction</code></li>
              <li><code>Improve mobile spacing in guideline cards</code></li>
            </ul>

            <p>
              Avoid vague messages like <code>fix stuff</code> or <code>updates</code>.
            </p>

            <h3>Reporting issues</h3>
            <ul>
              <li>Clear description of the problem</li>
              <li>Steps to reproduce</li>
              <li>Expected vs actual behaviour</li>
              <li>Screenshots where helpful</li>
            </ul>

            <h3>Useful resources</h3>
            <ul>
              <li><a href="https://docusaurus.io/docs/creating-pages" target="_blank" rel="noreferrer">Docusaurus: Creating pages</a></li>
              <li><a href="https://docusaurus.io/docs/markdown-features" target="_blank" rel="noreferrer">Docusaurus: Markdown features</a></li>
              <li><a href="https://opensource.guide/how-to-contribute/" target="_blank" rel="noreferrer">Open Source Guide</a></li>
              <li><a href="https://www.conventionalcommits.org/" target="_blank" rel="noreferrer">Conventional Commits</a></li>
            </ul>
          </AccordionItem>

          {/* COUNCILS */}
          <AccordionItem
            id="councils"
            title="Contributing as a council"
            summary="Share real-world experience, help with testing, and tell us what barriers people face. No coding required."
          >
            <p>
              Councils play a vital role in making sure this project reflects real-world experience.
            </p>

            <h3>Testing</h3>
            <p>
              Help us test whether guidance works in practice and flag unclear areas.
            </p>

            <h3>Evidence and research</h3>
            <p>
              Share research or evidence about older adults and digital access.
            </p>

            <h3>WCAG knowledge</h3>
            <p>
              Share barriers people face, even if they don’t map neatly to WCAG criteria.
            </p>

            <p>
              Contact ejfury@protonmail.com
            </p>
          </AccordionItem>

          {/* RESEARCHERS */}
          <AccordionItem
            id="researchers"
            title="Contributing as a researcher"
            summary="Share knowledge, provide oversight, and help connect evidence to practice."
          >
            <p>
              Research helps ensure guidance is grounded in evidence.
            </p>

            <p>Researchers can contribute by:</p>

            <ul>
              <li><strong>Sharing knowledge</strong> relevant to accessibility and age-inclusive design</li>
              <li><strong>Providing oversight</strong> of claims and recommendations</li>
              <li><strong>Amplifying findings</strong> and connecting research to practice</li>
            </ul>

            <p>
              Contact ejfury@protonmail.com
            </p>
          </AccordionItem>

        </Accordion>

        {/* CODE OF CONDUCT */}
        <section className={styles.guidelineCard}>
          <h2>Code of conduct</h2>

          <p>
            All contributors are expected to communicate respectfully and constructively.
          </p>

          <p>
            Harassment, dismissive behaviour, or ignoring accessibility concerns is not acceptable.
          </p>
        </section>

      </main>
    </Layout>
  );
}