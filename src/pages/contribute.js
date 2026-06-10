import React from 'react';
import Layout from '@theme/Layout';
import defaultTheme from '../theme/colors';
import styles from './index.module.css';

import { Accordion, AccordionItem } from '../components/Accordion';

export default function Contribute() {
  return (
    <Layout
      title="How to Contribute"
      description="Contribution guidelines for the Age Inclusive Web Standard project."
    >
      <main className={styles.main} style={{ color: defaultTheme.text }}>

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

        <section className={styles.guidelineCard}>
          <h2>Project repository</h2>

          <p>The source code is hosted on GitHub.</p>

          <a
            href="#"
            style={{ color: defaultTheme.accent }}
          >
          
          </a>
        </section>

        <Accordion allowMultiple={false}>

          <AccordionItem
            id="developers"
            title="Contributing as a developer"
            summary="Help build improve and maintain the codebase. No prior contribution experience needed."
          >
            <p>
              Developers help build improve and maintain the codebase. This project is still evolving
              and the current structure is not perfect. It has been put together quickly and we are now
              moving toward a more deliberate component based structure so things are easier to scale and maintain.
            </p>

            <p>
              The goal is to gradually move repeated interface patterns into reusable components and keep
              logic separated from presentation so future changes are easier to manage.
            </p>

            <h3>How to run the project</h3>
            <ul>
              <li>Install dependencies using yarn install</li>
              <li>Start the development server using yarn start</li>
              <li>Build changes in a feature branch</li>
            </ul>

            <h3>How developers contribute</h3>
            <ul>
              <li>Build new features and improve existing ones</li>
              <li>Fix reported issues</li>
              <li>Improve accessibility for keyboard and screen reader users</li>
              <li>Refactor rushed areas of the code into cleaner components</li>
              <li>Improve consistency across the interface</li>
              <li>Help reduce duplicated logic by creating shared components</li>
            </ul>

            <h3>Suggested organisation approach</h3>
            <ul>
              <li>Keep components in a shared components folder</li>
              <li>Group related features into feature folders instead of scattering files</li>
              <li>Separate layout elements from content components</li>
              <li>Keep styling close to components when possible for clarity</li>
              <li>Move repeated patterns into reusable building blocks</li>
            </ul>

            <h3>Working approach used in many open projects</h3>
            <ul>
              <li>Start from a small issue rather than large changes</li>
              <li>Open a discussion before major structural changes</li>
              <li>Keep pull requests focused on one improvement at a time</li>
              <li>Write clear commit messages that explain intent</li>
            </ul>

            <h3>Commit guidance</h3>
            <ul>
              <li><code>Add category grouping to guidelines</code></li>
              <li><code>Fix keyboard navigation in accordion</code></li>
              <li><code>Improve spacing in guideline cards</code></li>
            </ul>

            <p>
              Avoid vague commits like fix stuff or updates. Clear intent helps long term maintainability.
            </p>

            <h3>Reporting issues</h3>
            <ul>
              <li>Clear description of the problem</li>
              <li>Steps to reproduce</li>
              <li>Expected behaviour compared to actual behaviour</li>
              <li>Browser and device details</li>
              <li>Screenshots if helpful</li>
            </ul>
          </AccordionItem>

          <AccordionItem
            id="councils"
            title="Contributing as a council"
            summary="Share real world experience and help with testing. No coding required."
          >
            <p>
              Council contributors help ensure the project reflects real world needs rather than only
              technical assumptions.
            </p>

            <h3>Testing and feedback</h3>
            <ul>
              <li>Review features and share usability feedback</li>
              <li>Identify confusing navigation or unclear wording</li>
              <li>Highlight accessibility barriers experienced in real use</li>
              <li>Provide feedback from non technical users where possible</li>
            </ul>

            <h3>Accessibility insight</h3>
            <ul>
              <li>Report issues that affect older users or low experience users</li>
              <li>Identify where interfaces feel overloaded or unclear</li>
              <li>Suggest improvements based on lived experience</li>
            </ul>

            <h3>Research input</h3>
            <ul>
              <li>Share relevant studies or reports</li>
              <li>Help validate whether guidance matches real evidence</li>
              <li>Flag outdated assumptions in design recommendations</li>
            </ul>

            <p>
              Contact ejfury at protonmail.com for council participation or feedback submissions.
            </p>
          </AccordionItem>

          <AccordionItem
            id="researchers"
            title="Contributing as a researcher"
            summary="Share knowledge and help connect evidence to practice."
          >
            <p>
              Research contributions help ensure guidance is grounded in evidence and not assumption.
            </p>

            <h3>What researchers can contribute</h3>
            <ul>
              <li>Share peer reviewed studies related to accessibility and ageing</li>
              <li>Summarise research in a way that is usable for design decisions</li>
              <li>Help validate claims made in guidelines</li>
            </ul>

            <h3>Review role</h3>
            <ul>
              <li>Check accuracy of recommendations</li>
              <li>Identify unsupported statements</li>
              <li>Suggest stronger or more recent sources</li>
            </ul>

            <h3>Connecting research and practice</h3>
            <ul>
              <li>Translate academic findings into practical design guidance</li>
              <li>Highlight gaps between research and real world implementation</li>
              <li>Support clearer communication of complex findings</li>
            </ul>

            <p>
              Contact ejfury at protonmail.com for research collaboration or review contributions.
            </p>
          </AccordionItem>

        </Accordion>

        <section className={styles.guidelineCard}>
          <h2>Code of conduct</h2>

          <p>
            All contributors are expected to communicate respectfully and constructively.
          </p>

          <p>
            Harassment dismissive behaviour or ignoring accessibility concerns is not acceptable.
          </p>
        </section>

      </main>
    </Layout>
  );
}