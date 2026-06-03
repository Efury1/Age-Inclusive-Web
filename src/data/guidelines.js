// import eImg from '../static/img/e';

export const GUIDELINES = [
  {
    id: 'g1',
    image: {
        src: '/img/e.jpg',
        alt: 'Example of visible navigation with an Explore dropdown'
    },
    category: 'Navigation and interaction',
    code: 'AIWS-01 · Navigation visibility',
    title: 'Avoid hiding actions inside abstract icons or hamburger menus',
    body: `Many older users prefer visible navigation and recognition over exploration-based interfaces. Hidden navigation increases cognitive load and reduces confidence.

Desktop interfaces should avoid hamburger menus and instead display top-level navigation clearly. On mobile, if there are 4 or fewer links, show them directly. If there are more than 4, consider alternative structures such as in-page navigation or clearly supported expanded menus.

For the image above, we have "Explore ▼" as a dropdown in the desktop nav. This is fine because the entire navbar isn't collapsed behind a hamburger icon. The distinction is that the whole nav isn't hidden behind an icon, with zero information scent. It is visible with a disclosed submenu, so top-level options are always scannable. 


References:
- Nielsen Norman Group - Hamburger Menus: https://www.nngroup.com/articles/hamburger-menus/`,
  },
  {
    id: 'g2',
    category: 'Cognitive load and usability',
    code: 'AIWS-02 · Time & pacing',
    title: 'Avoid time pressure and allow users to work at their own pace',
    body: `Older adults may take longer to read, verify, and build confidence before submitting information. Systems should avoid forced time limits wherever possible.

Provide save-and-return-later functionality and allow users to extend sessions. Where applicable, allow adjustment of interaction speed or experience pacing.

References:

- Czaja, S. J., et al. (2006). Factors predicting the use of technology. Psychology and Aging, 21(2) https://pmc.ncbi.nlm.nih.gov/articles/PMC1524856/`,
  },
  {
    id: 'g3',
    category: 'Navigation and interaction',
    code: 'AIWS-03 · Device flexibility',
    title: 'Do not make mobile app use mandatory',
    body: `Not all users are comfortable with or have access to smartphones. Many older users prefer tablets or desktop devices.

All critical services should be fully accessible via a web browser on desktop, without requiring a smartphone or mandatory app installation. Users should be able to complete key tasks online using standard web access.

Login should support multiple options such as email and password, one-time codes via email or SMS, security keys, or printed backup codes. Assisted or paper-based identity verification should be available where needed. Clear recovery options are essential, including email recovery, backup codes, or support-assisted processes. Services should avoid app-only authentication and ensure full usability for users without smartphones, especially older adults.

References:
- Pew Research Center (Mobile Fact Sheet): https://www.pewresearch.org/internet/fact-sheet/mobile/`,
  },
  {
    id: 'g4',
    category: 'Support and assistance',
    code: 'AIWS-04 · Support visibility',
    title: 'Keep support options visible throughout high-risk flows',
    body: `Older users are more likely to seek reassurance or human assistance during complex tasks. If help is not visible, they are more likely to abandon the process.

Provide persistent "Need help" links in forms and checkout flows. Include clear escalation paths from chatbots to human support. Where AI chat is used as a first point of contact, the route to a human agent must be clearly labelled and require no more than one step.

References:
- Age UK — Digital Inclusion Evidence Review (2016):`,
  },
  {
    id: 'g5',
    category: 'Cognitive load and usability',
    code: 'AIWS-05 · Memory load',
    title: 'Avoid requiring memorisation across steps or screens',
    body: `Interfaces that rely on short-term recall increase errors and frustration. This is particularly pronounced in older adults, where working memory capacity is more likely to be reduced.

Keep previously entered information visible where possible, use progress indicators, and avoid requiring users to remember codes or instructions across screens. Do not clear form fields after an error.

References:
- Fisk, A. D., Rogers, W. A., Charness, N., Czaja, S. J., & Sharit, J. (2009). Designing for Older Adults. CRC Press: https://www.taylorfrancis.com/books/mono/10.1201/9781420080681/designing-older-adults-arthur-fisk-wendy-rogers-neil-charness-joseph-sharit-sara-czaja-sara-czaja
- W3C — Cognitive Accessibility Guidance (COGA): https://www.w3.org/TR/coga-usable/`,
  },
  {
    id: 'g6',
    category: 'Confidence, trust and anxiety',
    code: 'AIWS-06 · Error reassurance',
    title: 'Write error messages that reassure rather than alarm',
    wcagOverlap: 'Partial WCAG overlap: WCAG 3.3.1 (Error Identification) and 3.3.3 (Error Suggestion) require errors to be identified and described, but do not address tone, reassurance, or the emotional impact of error language.',
    body: `Older adults with lower digital confidence are more likely to interpret error messages as permanent failures or as indicators they have done something seriously wrong. Alarming or vague error language increases abandonment.

Error messages should explain what happened in plain language, confirm that no damage has been done where applicable, and tell the user exactly what to do next. Avoid capitalised labels like "ERROR" or "FAILED" as standalone headings. Where an action is reversible, say so explicitly.

Example: Instead of "Submission failed", use "We couldn't send your form — your information has been saved. Please check your internet connection and try again."

References:
- Fisk, A. D., Rogers, W. A., Charness, N., Czaja, S. J., & Sharit, J. (2009). Designing for Older Adults. CRC Press: https://www.taylorfrancis.com/books/mono/10.1201/9781420080681/designing-older-adults-arthur-fisk-wendy-rogers-neil-charness-joseph-sharit-sara-czaja-sara-czaja
- Nielsen Norman Group — Writing Helpful Error Messages: https://www.nngroup.com/articles/error-message-guidelines/`,
  },
  {
    id: 'g8',
    category: 'Content and communication',
    code: 'AIWS-08 · Plain language',
    title: 'Write transactional content at a reading level accessible to all adults',
    wcagOverlap: 'Partial WCAG overlap: WCAG 3.1.5 (Reading Level) recommends supplemental content for text requiring more than lower secondary education level, but this is Level AAA and is very rarely implemented. WCAG does not address assumed digital literacy in instructional language.',
    body: `Many older adults, particularly those who left education earlier or who did not grow up with digital services, struggle with technical language, acronyms, and instructions that assume digital familiarity. Inaccessible language is one of the most commonly cited barriers to digital inclusion.

Use short sentences and active voice in all transactional content. Spell out acronyms on first use. Avoid instructions that rely on assumed knowledge of interface conventions ("tap the hamburger menu", "swipe to dismiss"). Target a reading age of 9–11 years for public-facing services, in line with GOV.UK content standards.

References:
- Key Challenges and Barriers to Digital Literacy for Older Adults: https://pmc.ncbi.nlm.nih.gov/articles/PMC12991319/`
  },
  {
    id: 'g10',
    category: 'Cognitive load and usability',
    code: 'AIWS-10 · Interruption management',
    title: 'Do not move, animate, or interrupt content without user initiation',
    wcagOverlap: 'Partial WCAG overlap: WCAG 2.2.2 (Pause, Stop, Hide) requires controls for moving content lasting more than 5 seconds, but does not address notification duration, form interruptions, or simultaneous cognitive demands.',
    body: `Auto-advancing carousels, autoplaying video, and time-limited notifications place simultaneous demands on attention and processing speed. Older adults are more likely to experience difficulty processing competing stimuli, and interruptions during form completion increase error rates significantly.

Carousels and slideshows must not advance automatically, or must provide a clearly visible pause control. Video and audio must not autoplay. Notifications and toast messages must remain visible for at least 10 seconds and must be dismissible. Avoid triggering new content or dialogs while a user is actively completing a form or multi-step task.

References:
- Nielsen Norman Group — Auto-Forwarding Carousels: https://www.nngroup.com/articles/auto-forwarding/
- Czaja, S. J., & Lee, C. C. (2007). The impact of aging on access to technology: https://www.researchgate.net/publication/220606716_The_impact_of_aging_on_access_to_technology`,
  },
  {
    id: 'g11',
    category: 'Support and assistance',
    code: 'AIWS-11 · Contextual help',
    title: 'Provide help at the point of need, not only in a separate FAQ',
    body: `Older adults are less likely to seek help proactively and more likely to abandon a task if they encounter confusion without immediate guidance. A help section that requires navigation away from the current task is not sufficient for users with lower digital confidence or working memory challenges.

Provide inline hint text, tooltips, or expandable guidance at decision points within forms and multi-step flows. Where a term or field may be unfamiliar, explain it in context. Ensure that any guidance provided during a task can be accessed again without losing progress.

References:
- Czaja, S. J., et al. (2006). Factors predicting the use of technology. Psychology and Aging, 21(2).`
  },
  {
    id: 'g13',
    category: 'Formats and deliverables',
    code: 'AIWS-13 · Offline & print fallback',
    title: 'Ensure critical information is available outside the digital interface',
    body: `Digital-only service delivery excludes older adults who lack reliable internet access, lack confidence to complete tasks online, or who need a physical record for reassurance or reference. This is particularly acute for health, financial, and government services.

Confirmation numbers, appointment details, and transaction records should be printable or downloadable as a PDF without requiring an account or further navigation. For critical services, a telephone or in-person alternative must exist and be clearly signposted alongside the digital journey.

References:
- TODO`,
  },
  {
    id: 'g14',
    category: 'Formats and deliverables',
    code: 'AIWS-14 · PDF delivery',
    title: 'Do not use PDF as the primary format for transactional or time-sensitive information',
    body: `PDFs are one of the most common accessibility barriers for older adults online. Many PDFs produced by public services are untagged scanned images meaning text cannot be resized, and content cannot reflow on smaller screens.

Where a PDF must be provided, it must also:
Use a minimum body font size of 14pt
Use left-aligned text rather than justified

An HTML equivalent must always be offered alongside any PDF download. PDFs must never be the only way to access a form, confirmation, or service.

References:
- W3C — PDF Techniques for WCAG 2.0: https://www.w3.org/TR/WCAG20-TECHS/pdf
- WebAIM — PDF Accessibility: https://webaim.org/techniques/acrobat/
- Hou, G., et al. (2022). How to design font size for older adults: A systematic literature review. Frontiers in Psychology. https://doi.org/10.3389/fpsyg.2022.931646
- Section508.gov — Fonts and Typography: https://www.section508.gov/develop/fonts-typography/`,
  },
  {
    id: 'g15',
    category: 'Responsible design',
    code: 'AIWS-15 · Dark patterns',
    title: 'Do not use manipulative interface patterns that exploit lower digital literacy',
    body: `Dark patterns are interface designs that deliberately mislead or pressure users into actions they would not otherwise choose. Older adults with lower digital confidence are disproportionately harmed — they are less likely to recognise manipulative designs and more likely to comply out of uncertainty or anxiety.

The following patterns must not be used: pre-ticked boxes, hidden fees, confirm-shaming, false urgency, or asymmetric cancellation flows.

References:
- Nielsen Norman Group — Deceptive Patterns: https://www.nngroup.com/articles/deceptive-patterns/
- Luguri, J. & Strahilevitz, L. J. (2021). Shining a Light on Dark Patterns.`,
  },
  {
    id: 'g16',
    category: 'Privacy and safety',
    code: 'AIWS-16 · Consent design',
    title: 'Make consent interfaces clear, equal, and free from manipulative design',
    body: `Cookie consent and data-sharing interfaces are consistently designed to make acceptance easier than refusal. For older adults with lower digital literacy, confusing language and unequal button prominence reduce meaningful consent.

Consent interfaces must present equal options, avoid pre-ticked boxes, and allow easy withdrawal.

References:
- "Okay, whatever": An Evaluation of Cookie Consent Interfaces — ACM CHI 2022: https://dl.acm.org/doi/10.1145/3491102.3501985`
  },
  {
    id: 'g17',
    category: 'Confidence, trust and anxiety',
    code: 'AIWS-17 · Technology anxiety',
    title: 'Use language and visual design that does not imply the user has made a serious mistake',
    body: `Technology anxiety and low self-efficacy are major barriers to digital inclusion for older adults. Interfaces that imply fault, danger, or failure increase abandonment.

Avoid overly alarming language, excessive red indicators, and unnecessary urgency.

References:
- Czaja, S. J., et al. (2006). Factors predicting the use of technology. Psychology and Aging, 21(2).`,
  },
];