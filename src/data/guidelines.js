export const GUIDELINES = [
  {
    id: 'g1',
    image: {
      src: '/img/e.jpg',
      alt: 'Example of visible navigation with an Explore dropdown',
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
    id: 'g3',
    category: 'Navigation and interaction',
    code: 'AIWS-02 · Device flexibility',
    title: 'Do not make mobile app use mandatory',
    body: `Not all users are comfortable with or have access to smartphones. Many older users prefer tablets or desktop devices.

All critical services should be fully accessible via a web browser on desktop, without requiring a smartphone or mandatory app installation. Users should be able to complete key tasks online using standard web access.

Login should support multiple options such as email and password, one-time codes via email or SMS, security keys, or printed backup codes. Assisted or paper-based identity verification should be available where needed. Clear recovery options are essential, including email recovery, backup codes, or support-assisted processes. Services should avoid app-only authentication and ensure full usability for users without smartphones, especially older adults.

References:
- Pew Research Center (Mobile Fact Sheet): https://www.pewresearch.org/internet/fact-sheet/mobile/`,
  },
  {
    id: 'g2',
    category: 'Cognitive load and usability',
    code: 'AIWS-03 · Time & pacing',
    title: 'Avoid time pressure and allow users to work at their own pace',
    image: {
      src: '/img/sessionActive.jpg',
      alt: 'Example of visible navigation with an Explore dropdown',
    },
    body: `Older adults may take longer to read, verify, and build confidence before submitting information. Systems should avoid forced time limits wherever possible.

Provide save-and-return-later functionality and allow users to extend sessions. Where applicable, allow adjustment of interaction speed or experience pacing.

References:
- Czaja, S. J., et al. (2006). Factors predicting the use of technology. Psychology and Aging, 21(2) https://pmc.ncbi.nlm.nih.gov/articles/PMC1524856/`,
  },
  {
    id: 'g5',
    category: 'Cognitive load and usability',
    code: 'AIWS-04 · Memory load',
    title: 'Avoid requiring memorisation across steps or screens',
    body: `Interfaces that rely heavily on short-term memory can increase user errors, confusion, and frustration. This effect is more pronounced among older adults, where working memory capacity may be reduced.

To reduce cognitive load, previously entered information should remain visible wherever possible. Progress indicators should be used to help users understand where they are in a process, and users should not be required to remember codes, instructions, or details across different screens.

Form fields must not be cleared after an error unless the user explicitly chooses to reset them. Preserving user input helps prevent data loss and reduces repeated effort.

Field design should include clear, persistent labels rather than relying on placeholder text alone. Placeholder text disappears when users begin typing, which can create confusion or make it harder to verify what information is expected. Instead, labels should remain visible at all times, supported by helpful hints, descriptions, and examples where appropriate.

References:
- Fisk, A. D., Rogers, W. A., Charness, N., Czaja, S. J., & Sharit, J. (2009). Designing for Older Adults. CRC Press: https://www.taylorfrancis.com/books/mono/10.1201/9781420080681/designing-older-adults-arthur-fisk-wendy-rogers-neil-charness-joseph-sharit-sara-czaja-sara-czaja

- S. Kamalmax (2020): https://www.techguilds.com/blog/accessible-web-forms-for-older-adults/`,
  },
  {
    id: 'g10',
    category: 'Cognitive load and usability',
    code: 'AIWS-05 · Interruption management',
    title: 'Do not move, animate, or interrupt content without user initiation',
    wcagOverlap:
      'Partial WCAG overlap: WCAG 2.2.2 (Pause, Stop, Hide) requires controls for moving content lasting more than 5 seconds, but does not address notification duration, form interruptions, or simultaneous cognitive demands.',
    body: `Auto-advancing carousels, autoplaying video, and time-limited notifications place simultaneous demands on attention and processing speed. Older adults are more likely to experience difficulty processing competing stimuli, and interruptions during form completion increase error rates significantly.

Carousels and slideshows must not advance automatically, or must provide a clearly visible pause control. Video and audio must not autoplay. Notifications and toast messages must remain visible for at least 10 seconds and must be dismissible. Avoid triggering new content or dialogs while a user is actively completing a form or multi-step task.

References:
- Nielsen Norman Group — Auto-Forwarding Carousels: https://www.nngroup.com/articles/auto-forwarding/

- Czaja, S. J., & Lee, C. C. (2007). The impact of aging on access to technology: https://www.researchgate.net/publication/220606716_The_impact_of_aging_on_access_to_technology

- Older Adults' Experiences of Interacting with Online Forms - A .Money, L .Lines, S Fernando, How to design font size for older adults, G. Hou, U. Anicetus, J. He (2022): https://www.researchgate.net/publication/265753295_Older_Adults'_Experiences_of_Interacting_with_Online_Forms`,
  },
  {
    id: 'g4',
    category: 'Support and assistance',
    code: 'AIWS-06 · Support visibility',
    title: 'Keep support options visible throughout high-risk flows',
     image: {
      src: '/img/phoneAlternative.jpg',
      alt: 'Example of visible navigation with an Explore dropdown',
    },
    body: `Older users are more likely to require direct access to human support during complex tasks. Lack of a clearly visible escalation path to a human agent increases the likelihood of abandonment.

Provide persistent “Need help” links in forms and checkout flows. These must include immediate escalation to a human agent. Where AI chat is used as the initial support layer, it must include a clearly labelled, one-step escalation to a human representative at all times.

References:
- Age UK - Digital Inclusion Evidence Review (2016):`,
  },
  {
    id: 'g11',
    category: 'Support and assistance',
    code: 'AIWS-07 · Contextual help',
    title: 'Provide help at the point of need, not only in a separate FAQ',
    image: {
      src: '/img/stepByStepHelp.jpg',
      alt: 'Step by Step helper',
    },
    body: `Older adults are less likely to seek help proactively and more likely to abandon a task if they encounter confusion without immediate guidance. A help section that requires navigation away from the current task is not sufficient for users with lower digital confidence or working memory challenges.

Provide inline hint text, tooltips, or expandable guidance at decision points within forms and multi-step flows. Where a term or field may be unfamiliar, explain it in context. Ensure that any guidance provided during a task can be accessed again without losing progress.

References:
- Czaja, S. J., et al. (2006). Factors predicting the use of technology. Psychology and Aging, 21(2).`,
  },
  {
    id: 'g6',
    category: 'Confidence, trust and anxiety',
    code: 'AIWS-08 · Error reassurance',
    title: 'Write error messages that reassure rather than alarm',
    image: {
      src: '/img/emailEntry.jpg',
      alt: 'Example of visible navigation with an Explore dropdown',
    },
    wcagOverlap:
      'Partial WCAG overlap: WCAG 3.3.1 (Error Identification) and 3.3.3 (Error Suggestion) require errors to be identified and described, but do not address tone, reassurance, or the emotional impact of error language.',
    body: `Older adults with lower digital confidence may interpret error messages as signs of failure or loss of progress. Without clear reassurance, this can lead to abandonment even when the issue is minor or easily fixed.

Error messages must focus on helping users recover, not just describing the problem. They should explain what went wrong in plain language, confirm what is still safe or unchanged (for example, that no data has been lost), and provide a clear next step.

Where possible, make it explicit when the issue is temporary or reversible. Avoid language that suggests blame or finality.

Do not use capitalised or standalone labels such as “ERROR” or “FAILED” as headings, as these can increase anxiety without improving understanding.

Example: Instead of “Submission failed”, use “We couldn’t send your form right now. Your information is still saved. Please check your internet connection and try again.”

References:
- Fisk, A. D., Rogers, W. A., Charness, N., Czaja, S. J., & Sharit, J. (2009). Designing for Older Adults. CRC Press: https://www.taylorfrancis.com/books/mono/10.1201/9781420080681/designing-older-adults-arthur-fisk-wendy-rogers-neil-charness-joseph-sharit-sara-czaja-sara-czaja

- Nielsen Norman Group — Writing Helpful Error Messages: https://www.nngroup.com/articles/error-message-guidelines/`,
  },
  {
    id: 'g17',
    category: 'Confidence, trust and anxiety',
    code: 'AIWS-09 · Neutral tone and visual feedback',
    title:
      'Use language and visual design that does not imply the user has made a serious mistake',
    body: `Design everyday interfaces so users do not feel blamed or at fault during normal use

Technology anxiety and low self-efficacy are common barriers to digital inclusion for older adults. Even outside of error states, interfaces that suggest users are doing something wrong can reduce confidence and increase abandonment.

This guideline applies to general interface language, navigation, and system feedback during normal use (for example: loading states, confirmations, and navigation prompts).

Use neutral, supportive language that describes what the system is doing without implying user error or blame. Visual design should also remain calm and avoid unnecessary emphasis that suggests urgency or danger.

Avoid excessive use of red, warning symbols, or urgent phrasing in non-error situations. These should only be used when there is a genuine safety, security, or data risk that requires immediate attention.

References:
- Czaja, S. J., et al. (2006). Factors predicting the use of technology. Psychology and Aging, 21(2).`,
  },
  {
    id: 'g8',
    category: 'Content and communication',
    code: 'AIWS-10 · Plain language',
    title:
      'Write transactional content at a reading level accessible to all adults',
    
    wcagOverlap:
      'Partial WCAG overlap: WCAG 3.1.5 (Reading Level) recommends supplemental content for text requiring more than lower secondary education level, but this is Level AAA and is very rarely implemented. WCAG does not address assumed digital literacy in instructional language.',
    body: `Many older adults, particularly those who left education earlier or who did not grow up with digital services, struggle with technical language, acronyms, and instructions that assume digital familiarity. Inaccessible language is one of the most commonly cited barriers to digital inclusion.

Use short sentences and active voice in all transactional content. Spell out acronyms on first use. Avoid instructions that rely on assumed knowledge of interface conventions ("tap the hamburger menu", "swipe to dismiss"). Target a reading age of 9–11 years for public-facing services, in line with GOV.UK content standards.

References:
- Key Challenges and Barriers to Digital Literacy for Older Adults: https://pmc.ncbi.nlm.nih.gov/articles/PMC12991319/`,
  },
  {
    id: 'g13',
    category: 'Formats and deliverables',
    code: 'AIWS-11 · Offline & print fallback',
    image: {
      src: '/img/DownloadPDF.jpg',
      alt: 'Example of visible navigation with an Explore dropdown',
    },
    title: 'Ensure critical information is available outside the digital interface',

    body: `Digital-only service delivery excludes older adults who lack reliable internet access, lack confidence to complete tasks online, or who need a physical record for reassurance or reference. This is particularly acute for health, financial, and government services.

Confirmation numbers, appointment details, and transaction records should be printable or downloadable as a PDF without requiring an account or further navigation. For critical services, a telephone or in-person alternative must exist and be clearly signposted alongside the digital journey.

References:
- Age UK Offline and Overlooked report `,
  },
  {
    id: 'g14',
    category: 'Formats and deliverables',
    code: 'AIWS-12 · PDF delivery',
    title:
      'Do not use PDF as the primary format for transactional or time-sensitive information',
    body: `PDFs are a common accessibility barrier, particularly for older adults and users with lower digital confidence. Unlike standard web content, PDFs often require additional software or plug-ins to open, download, or navigate, which can create unnecessary friction for users who are already struggling with basic digital tasks. Research in digital inclusion has shown that additional steps in a task flow significantly increase abandonment rates, especially among older users and those with limited digital literacy.
References:
`,
  },
  {
    id: 'g15',
    category: 'Responsible design',
    code: 'AIWS-13 · Dark patterns',
    title:
      'Do not use manipulative interface patterns that exploit lower digital literacy',
    body: `Dark patterns are interface designs that deliberately mislead or pressure users into actions they would not otherwise choose. Older adults with lower digital confidence are disproportionately harmed — they are less likely to recognise manipulative designs and more likely to comply out of uncertainty or anxiety.

The following patterns must not be used: pre-ticked boxes, hidden fees, confirm-shaming, false urgency, or asymmetric cancellation flows.

References:
- Nielsen Norman Group - Deceptive Patterns: https://www.nngroup.com/articles/deceptive-patterns/

- Luguri, J. & Strahilevitz, L. J. (2021). Shining a Light on Dark Patterns.`,
  },
];