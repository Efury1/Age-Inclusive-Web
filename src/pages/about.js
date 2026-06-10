import React from 'react';
import Layout from '@theme/Layout';

export default function Hello() {
  return (
    <Layout title="Age Inclusive Web" description="Socitm workshop research overview">
      <div
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          padding: '2rem',
          lineHeight: 1.6,
          fontSize: '18px',
        }}>

        <h1>Age Inclusive Web Research</h1>

        {/* Intro image */}
        <img
          src="/img/age-group.jpg"
          alt="Age group overview"
          style={{ width: '100%', borderRadius: '8px', marginBottom: '1.5rem' }}
        />

        <p>
          This project originated as a Socitm workshop, incorporating both collaborative research and independent investigation, with a geographic focus on Norfolk, UK. The research engaged approximately 40 respondents across the 55–64 and 65+ age groups, with a particular focus on women as a key participant group.
        </p>

        {/* Age 55+ context image */}
        <img
          src="/img/age-55-plus.jpg"
          alt="Age 55 plus participants"
          style={{ width: '100%', borderRadius: '8px', margin: '1.5rem 0' }}
        />

        <p>
          Findings indicated that the most significant difficulties were experienced in accessing healthcare services and government services. Key barriers identified included the cost of digital devices, limited digital skills, privacy concerns, and low confidence in using online systems. Participants expressed a clear preference for support mechanisms such as one-to-one assistance, online tutorials, and small group sessions.
        </p>

        {/* Digital challenges image */}
        <img
          src="/img/digital-challenges.jpg"
          alt="Digital challenges faced by users"
          style={{ width: '100%', borderRadius: '8px', margin: '1.5rem 0' }}
        />

        <p>
          The emphasis on women was intentional, reflecting both the demographic composition of older age groups and the fact that women, on average, live longer than men. This makes digital inclusion within this group particularly significant for long-term access to essential services, including healthcare, financial, and government systems.
        </p>

        <p>
          The project also reviewed previous initiatives, many of which demonstrated strong outcomes through tailored, individualised support. However, a number of these programmes have since been discontinued due to reductions in funding.
        </p>

        {/* Digital services image */}
        <img
          src="/img/digital-services.jpg"
          alt="Digital services access"
          style={{ width: '100%', borderRadius: '8px', margin: '1.5rem 0' }}
        />

        <p>
          In response, this work seeks to propose a practical and implementable framework that can be adopted immediately. While recognising that it cannot directly influence organisational budgets or strategic decision-making, it aims to provide a structured approach for designers and developers to advocate for improved accessibility and inclusion within public services.
        </p>

        <p>
          The approach acknowledges that no single solution will be perfect. However, drawing on the demonstrated success of standards such as WCAG, it is proposed that evidence-based documentation can serve as a mechanism to support continuous improvement in public service delivery.
        </p>

        <p>
          Ultimately, this work is grounded in the recognition that an ageing population is a shared societal reality. Its objective is to contribute to the development of services that are more accessible and usable in later life, while also benefiting current and future users as they age.
        </p>

      </div>
    </Layout>
  );
}