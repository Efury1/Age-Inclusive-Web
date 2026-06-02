import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Resources() {
  return (
    <Layout
      title="Resources"
      description="Practical guidance for developers and designers on communicating and advocating for age-inclusive design in public sector teams."
    >
      <main className={styles.main}>
        <div className={styles.heroContainer}>
          <h1 className={styles.heroTitle}>Resources</h1>

          <p className={styles.heroSubtitle}>
            Practical guidance for developers and designers on how to communicate usability issues,
            advocate for improvements, and influence decisions in public sector environments.
          </p>
        </div>

        <section className={styles.guidelineCard}>
          <h2>How developers and designers should communicate issues</h2>

          <p>
            When raising issues in a team, focus on describing what users are unable to complete.
            Avoid describing the problem as a design flaw. Focus on observable user failure.
          </p>

          <p>
            A useful structure is what the user is trying to do, where the task breaks, and what
            outcome this causes in the real service.
          </p>

          <p>
            Example: users attempting to submit an application are unable to continue after the
            identity check step because the next action is unclear. This leads to repeated errors
            and abandonment of the process.
          </p>
        </section>

        <section className={styles.guidelineCard}>
          <h2>How to advocate for improvements inside delivery teams</h2>

          <p>
            Developers and designers are most effective when they connect interface issues to service outcomes.
            This includes completion rates, support burden, and user drop off.
          </p>

          <p>
            Instead of stating that something is inaccessible, describe how it causes avoidable failure in a user journey.
          </p>

          <p>
            Useful evidence includes analytics showing drop off points, repeated support queries,
            usability testing observations, and user feedback showing confusion or hesitation.
          </p>
        </section>

        <section className={styles.guidelineCard}>
          <h2>How to escalate issues in government and public sector teams</h2>

          <p>
            Escalation should focus on service impact rather than technical detail.
            Senior teams respond more consistently to evidence of user failure and operational cost.
          </p>

          <p>
            Clearly describe the service journey, where users fail, and what impact this has on completion.
            Include whether the issue causes delays, abandonment, or increased support contact.
          </p>
        </section>

        <section className={styles.guidelineCard}>
          <h2>How to communicate upwards to leadership</h2>

          <p>
            When speaking to product leads or senior stakeholders, avoid technical framing.
            Focus on outcomes such as task completion, cost reduction, and risk.
          </p>

          <p>
            Leaders respond to evidence that a design decision is creating preventable service failure.
          </p>
        </section>

        <section className={styles.guidelineCard}>
          <h2>Using supporting research in practice</h2>

          <p>
            The following sources inform the principles used in this framework and are useful when
            supporting arguments with evidence.
          </p>

          <p>
            <a href="https://www.gov.uk/service-manual" target="_blank" rel="noreferrer">
              https://www.gov.uk/service-manual
            </a>
          </p>

          <p>
            <a href="https://www.nngroup.com/articles/" target="_blank" rel="noreferrer">
              https://www.nngroup.com/articles/
            </a>
          </p>

          <p>
            <a href="https://www.w3.org/TR/coga-usable/" target="_blank" rel="noreferrer">
              https://www.w3.org/TR/coga-usable/
            </a>
          </p>

          <p>
            <a href="https://www.ageuk.org.uk/information-advice/work-learning/technology-internet/" target="_blank" rel="noreferrer">
              https://www.ageuk.org.uk/information-advice/work-learning/technology-internet/
            </a>
          </p>

          <p>
            <a href="https://www.ofcom.org.uk/research-and-data/media-literacy-research" target="_blank" rel="noreferrer">
              https://www.ofcom.org.uk/research-and-data/media-literacy-research
            </a>
          </p>
        </section>

        <section className={styles.guidelineCard}>
          <h2>Core principle for developers and designers</h2>

          <p>
            If a user cannot complete a task easily, the issue is not just usability.
            It is a breakdown in service delivery.
          </p>

          <p>
            The role of design and development is to remove unnecessary friction and ensure users
            can complete tasks without confusion, memory load, or external help.
          </p>
        </section>
      </main>
    </Layout>
  );
}