import React from 'react';
import Layout from '@theme/Layout';

export default function About() {
  return (
    <Layout title="About" description="About the Age Inclusive Web Standard">
      <div
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          padding: '2rem',
          lineHeight: 1.6,
          fontSize: '18px',
        }}>

        <h1>About this project</h1>

        <p>
          The Age Inclusive Web Standard was built to give public sector teams a practical,
          evidence-based tool for designing digital services that work for older adults
          and stay accessible as people age.
        </p>

        <p>
          It started as a <a href="https://www.socitm.net/">Socitm</a> workshop. It became
          something we felt was worth sharing.
        </p>

        <hr />

        <h2>Who we are</h2>

        <p>
          We are <strong>Team Elevate</strong> a group individuals working
          across local government in England.
        </p>

        <ul>
          <li><a href="https://www.linkedin.com/in/bethany-lloyd/">Bethany Lloyd</a> - <a href="https://www.linkedin.com/company/london-borough-of-barnet/">London Borough of Barnet</a></li>
          <li><a href="https://www.linkedin.com/in/emma-toublic-728506122/">Emma Toublic</a> - <a href="https://www.linkedin.com/company/essex-county-council/">Essex County Council</a></li>
          <li><a href="https://www.linkedin.com/in/eliza-fury-3004b3110/">Eliza Fury</a> - <a href="https://www.linkedin.com/company/norfolkcc/">Norfolk County Council</a></li>
          <li>Holly Plumb - <a href="https://www.linkedin.com/company/norfolkcc/">Norfolk County Council</a></li>
          <li>Hoda Younis - <a href="https://www.linkedin.com/company/london-borough-of-hounslow/">London Borough of Hounslow</a> </li>
        </ul>

        <p>
          We came to this from different councils and different roles. What we shared was a
          frustration with how often older users are treated as an edge case rather than a
          core audience.
        </p>

        <hr />

        <h2>Why we built this</h2>

        <p>
          Public sector digital services are increasingly the only route to essential support.
          But older adults who need these services most for accessing healthcare,
          housing, and financial help - are also the most likely to be left behind by how
          those services are designed.
        </p>

        <p>
          The research is not new. The barriers are well documented. What has been harder to
          find is a structured, immediately usable framework that practitioners can pick up
          without needing a dedicated accessibility team or a large budget.
        </p>

        <p>That is what this standard attempts to be.</p>

        <hr />

        <h2>What it is not</h2>

        <p>
          This is not a replacement for{' '}
          <a href="https://www.w3.org/WAI/standards-guidelines/wcag/">WCAG</a>. It builds on it.
        </p>

        <p>
          It is also not a finished product. It is a starting point. This was designed to be used,
          tested, and improved by the teams working closest to these problems.
        </p>

        <hr />

        <p>
          <em>
            This project was developed as part of a Socitm workshop. Views are our own and
            do not represent our respective councils.
          </em>
        </p>

      </div>
    </Layout>
  );
}