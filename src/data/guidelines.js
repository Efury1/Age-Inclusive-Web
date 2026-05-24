export const GUIDELINES = [
  {
    id: 'g1',
    code: 'AIWS-01 · Navigation visibility',
    title: 'Avoid hiding actions inside abstract icons or hamburger menus',
    body: `Many older users prefer visible navigation and recognition over exploration-based interfaces. Hidden navigation increases cognitive load and reduces confidence.

Desktop interfaces should avoid hamburger menus and instead display top-level navigation clearly. On mobile, if there are 4 or fewer links, show them directly. If there are more than 4, consider alternative structures such as in-page navigation or clearly supported expanded menus.

References:
- Nielsen Norman Group — Hamburger Menus: https://www.nngroup.com/articles/hamburger-menus/`,
  },
  {
    id: 'g2',
    code: 'AIWS-02 · Time & pacing',
    title: 'Avoid time pressure and allow users to work at their own pace',
    body: `Older adults may take longer to read, verify, and build confidence before submitting information. Systems should avoid forced time limits wherever possible.

Provide save-and-return-later functionality and allow users to extend sessions. Where applicable, allow adjustment of interaction speed or experience pacing.

References:
- NatWest — Accessibility features and inclusive design: https://www.natwest.com/accessibility.html
- Czaja, S. J., et al. (2006). Factors predicting the use of technology. Psychology and Aging, 21(2).`,
  },
  {
    id: 'g3',
    code: 'AIWS-03 · Device flexibility',
    title: 'Do not make mobile app use mandatory',
    body: `Not all users are comfortable with or have access to smartphones. Many older users prefer tablets or desktop devices.

All critical services should be fully accessible via the web. Provide alternatives to smartphone authentication and avoid app-only flows.

References:
- Pew Research Center — Older Adults and Technology Use (2022): https://www.pewresearch.org/internet/2022/01/13/share-of-u-s-adults-using-social-media/
- Ofcom — Adults' Media Use and Attitudes report (2023): https://www.ofcom.org.uk/research-and-data/media-literacy-research/adults/adults-media-use-and-attitudes`,
  },
  {
    id: 'g4',
    code: 'AIWS-04 · Support visibility',
    title: 'Keep support options visible throughout high-risk flows',
    body: `Older users are more likely to seek reassurance or human assistance during complex tasks. If help is not visible, they are more likely to abandon the process.

Provide persistent "Need help" links in forms and checkout flows. Include clear escalation paths from chatbots to human support. Where AI chat is used as a first point of contact, the route to a human agent must be clearly labelled and require no more than one step.

References:
- AbilityNet — Digital accessibility for older people: https://abilitynet.org.uk/factsheets/digital-accessibility-older-people
- Age UK — Digital Inclusion Evidence Review (2021): https://www.ageuk.org.uk/globalassets/age-uk/documents/reports-and-publications/reports-and-briefings/active-communities/rb_jan21_digital_inclusion_evidence_review.pdf`,
  },
  {
    id: 'g5',
    code: 'AIWS-05 · Memory load',
    title: 'Avoid requiring memorisation across steps or screens',
    body: `Interfaces that rely on short-term recall increase errors and frustration. This is particularly pronounced in older adults, where working memory capacity is more likely to be reduced.

Keep previously entered information visible where possible, use progress indicators, and avoid requiring users to remember codes or instructions across screens. Do not clear form fields after an error.

References:
- Fisk, A. D., Rogers, W. A., Charness, N., Czaja, S. J., & Sharit, J. (2009). Designing for Older Adults. CRC Press.
- W3C — Cognitive Accessibility Guidance (COGA): https://www.w3.org/TR/coga-usable/`,
  },
  {
    id: 'g6',
    code: 'AIWS-06 · Error reassurance',
    title: 'Write error messages that reassure rather than alarm',
    wcagOverlap: 'Partial WCAG overlap: WCAG 3.3.1 (Error Identification) and 3.3.3 (Error Suggestion) require errors to be identified and described, but do not address tone, reassurance, or the emotional impact of error language.',
    body: `Older adults with lower digital confidence are more likely to interpret error messages as permanent failures or as indicators they have done something seriously wrong. Alarming or vague error language increases abandonment.

Error messages should explain what happened in plain language, confirm that no damage has been done where applicable, and tell the user exactly what to do next. Avoid capitalised labels like "ERROR" or "FAILED" as standalone headings. Where an action is reversible, say so explicitly.

Example: Instead of "Submission failed", use "We couldn't send your form — your information has been saved. Please check your internet connection and try again."

References:
- Fisk, A. D., Rogers, W. A., Charness, N., Czaja, S. J., & Sharit, J. (2009). Designing for Older Adults. CRC Press.
- Nielsen Norman Group — Writing Helpful Error Messages: https://www.nngroup.com/articles/error-message-guidelines/`,
  },
  {
    id: 'g7',
    code: 'AIWS-07 · Trust signals',
    title: 'Avoid interface patterns that resemble phishing or feel illegitimate',
    body: `Older adults are disproportionately targeted by online scams and have often been advised to be suspicious of unexpected digital interactions. Interface patterns common in legitimate services — unexpected redirects, mid-flow credential requests, unfamiliar modal dialogs — can trigger justified distrust and cause users to abandon safe services.

Maintain consistent branding across all touchpoints (web, email, SMS). Avoid requesting passwords or sensitive information in contexts that differ from the user's established expectations. Clearly identify the organisation at every step of a flow, particularly in authentication and payment journeys.

References:
- Age UK — Fraud and Scams report (2022): https://www.ageuk.org.uk/information-advice/money-legal/scams-fraud/
- UK Finance — Fraud the Facts (2023): https://www.ukfinance.org.uk/policy-and-guidance/reports-and-publications/fraud-facts-2023
- Vishwanath, A. (2015). Examining the distinct antecedents of e-mail habits and its influence on the outcomes of a phishing attack. Journal of Computer-Mediated Communication, 20(5).`,
  },
  {
    id: 'g8',
    code: 'AIWS-08 · Plain language',
    title: 'Write transactional content at a reading level accessible to all adults',
    wcagOverlap: 'Partial WCAG overlap: WCAG 3.1.5 (Reading Level) recommends supplemental content for text requiring more than lower secondary education level, but this is Level AAA and is very rarely implemented. WCAG does not address assumed digital literacy in instructional language.',
    body: `Many older adults, particularly those who left education earlier or who did not grow up with digital services, struggle with technical language, acronyms, and instructions that assume digital familiarity. Inaccessible language is one of the most commonly cited barriers to digital inclusion.

Use short sentences and active voice in all transactional content. Spell out acronyms on first use. Avoid instructions that rely on assumed knowledge of interface conventions ("tap the hamburger menu", "swipe to dismiss"). Target a reading age of 9–11 years for public-facing services, in line with GOV.UK content standards.

References:
- GOV.UK Content Design guidance: https://www.gov.uk/guidance/content-design/writing-for-gov-uk
- Good Things Foundation — Digital Nation report (2023): https://www.goodthingsfoundation.org/insights/digital-nation-2023/
- Ofcom — Adults' Media Use and Attitudes report (2023): https://www.ofcom.org.uk/research-and-data/media-literacy-research/adults/adults-media-use-and-attitudes`,
  },
  {
    id: 'g9',
    code: 'AIWS-09 · Touch target sizing',
    title: 'Use touch targets of at least 44×44px with sufficient spacing between them',
    wcagOverlap: 'Partial WCAG overlap: WCAG 2.5.8 (Minimum Target Size, Level AA in WCAG 2.2) sets a minimum of 24×24px. The 44×44px recommendation here follows Apple Human Interface Guidelines and Google Material Design, and is supported by usability research with older adults as a more appropriate threshold.',
    body: `Reduced fine motor control and hand tremor are common among older adults and increase the likelihood of mis-tapping small or closely spaced interactive elements. The consequences — accidental purchases, unintended navigation, form submission errors — are disproportionately distressing for users with lower digital confidence.

Interactive elements should be at least 44×44 CSS pixels. Spacing between adjacent targets should be at least 8px. Avoid drag-and-drop as a primary interaction without providing a non-drag alternative.

References:
- Apple Human Interface Guidelines — Layout: https://developer.apple.com/design/human-interface-guidelines/layout
- Google Material Design — Accessibility: https://m3.material.io/foundations/accessible-design/accessibility-basics
- Coyne, K. P., & Nielsen, J. (2002). Web Usability for Senior Citizens. Nielsen Norman Group.`,
  },
  {
    id: 'g10',
    code: 'AIWS-10 · Interruption management',
    title: 'Do not move, animate, or interrupt content without user initiation',
    wcagOverlap: 'Partial WCAG overlap: WCAG 2.2.2 (Pause, Stop, Hide) requires controls for moving content lasting more than 5 seconds, but does not address notification duration, form interruptions, or simultaneous cognitive demands.',
    body: `Auto-advancing carousels, autoplaying video, and time-limited notifications place simultaneous demands on attention and processing speed. Older adults are more likely to experience difficulty processing competing stimuli, and interruptions during form completion increase error rates significantly.

Carousels and slideshows must not advance automatically, or must provide a clearly visible pause control. Video and audio must not autoplay. Notifications and toast messages must remain visible for at least 10 seconds and must be dismissible. Avoid triggering new content or dialogs while a user is actively completing a form or multi-step task.

References:
- Nielsen Norman Group — Auto-Forwarding Carousels: https://www.nngroup.com/articles/auto-forwarding/
- Czaja, S. J., & Lee, C. C. (2007). The impact of aging on access to technology. Universal Access in the Information Society, 5(4).
- W3C — Cognitive Accessibility Guidance (COGA): https://www.w3.org/TR/coga-usable/`,
  },
  {
    id: 'g11',
    code: 'AIWS-11 · Contextual help',
    title: 'Provide help at the point of need, not only in a separate FAQ',
    body: `Older adults are less likely to seek help proactively and more likely to abandon a task if they encounter confusion without immediate guidance. A help section that requires navigation away from the current task is not sufficient for users with lower digital confidence or working memory challenges.

Provide inline hint text, tooltips, or expandable guidance at decision points within forms and multi-step flows. Where a term or field may be unfamiliar, explain it in context. Ensure that any guidance provided during a task can be accessed again without losing progress.

References:
- Czaja, S. J., et al. (2006). Factors predicting the use of technology. Psychology and Aging, 21(2).
- Nielsen Norman Group — Embedded Help vs. External Help: https://www.nngroup.com/articles/embedded-help/
- AbilityNet — Digital accessibility for older people: https://abilitynet.org.uk/factsheets/digital-accessibility-older-people`,
  },
  {
    id: 'g12',
    code: 'AIWS-12 · Shared device privacy',
    title: 'Design session and account management for shared device use',
    body: `Many older adults, particularly those in care settings or living with family, share devices with others. Default session behaviour — staying logged in, storing autofill data, showing recent activity — can expose sensitive personal or financial information to other household members.

Services handling personal, financial, or health data should default to session expiry after inactivity rather than persistent login. Autofill of sensitive fields (passwords, payment details) should not be pre-populated without explicit user action. Account activity should not be surfaced on shared home screens or in browser history without a clear opt-in.

References:
- Age UK — Digital Inclusion Evidence Review (2021): https://www.ageuk.org.uk/globalassets/age-uk/documents/reports-and-publications/reports-and-briefings/active-communities/rb_jan21_digital_inclusion_evidence_review.pdf
- ICO — Privacy by Design guidance: https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/accountability-and-governance/guide-to-accountability-and-governance/accountability-and-governance/data-protection-by-design-and-default/
- Vines, J., et al. (2015). Age-old problems? Designing with older adults. CHI Conference on Human Factors in Computing Systems.`,
  },
  {
    id: 'g13',
    code: 'AIWS-13 · Offline & print fallback',
    title: 'Ensure critical information is available outside the digital interface',
    body: `Digital-only service delivery excludes older adults who lack reliable internet access, lack confidence to complete tasks online, or who need a physical record for reassurance or reference. This is particularly acute for health, financial, and government services.

Confirmation numbers, appointment details, and transaction records should be printable or downloadable as a PDF without requiring an account or further navigation. For critical services, a telephone or in-person alternative must exist and be clearly signposted alongside the digital journey.

References:
- Lloyds Bank — UK Consumer Digital Index (2023): https://www.lloydsbankinggroup.com/insights/consumer-digital-index.html
- Good Things Foundation — Barriers to Digital Inclusion (2022): https://www.goodthingsfoundation.org
- ONS — Internet users, UK (2023): https://www.ons.gov.uk/businessindustryandtrade/itandinternetindustry/bulletins/internetusers/2023`,
  },
  {
    id: 'g14',
    code: 'AIWS-14 · PDF delivery',
    title: 'Do not use PDF as the primary format for transactional or time-sensitive information',
    body: `PDFs are one of the most common accessibility barriers for older adults online. Many PDFs produced by public services are untagged scanned images, meaning assistive technologies cannot read them, text cannot be resized, and content cannot reflow on smaller screens.

Where a PDF must be provided, it must: be a tagged PDF (not a scanned image), use a minimum body font size of 14pt, use left-aligned text rather than justified, and support reflow and zoom without horizontal scrolling. An HTML equivalent of the same content must always be offered alongside any PDF download. PDFs must never be the only way to access a form, confirmation, or service.

References:
- W3C — PDF Techniques for WCAG 2.0: https://www.w3.org/TR/WCAG20-TECHS/pdf
- WebAIM — PDF Accessibility: https://webaim.org/techniques/acrobat/
- Hou, G., et al. (2022). How to design font size for older adults: A systematic literature review. Frontiers in Psychology. https://doi.org/10.3389/fpsyg.2022.931646
- Section508.gov — Fonts and Typography: https://www.section508.gov/develop/fonts-typography/`,
  },
  {
    id: 'g15',
    code: 'AIWS-15 · Dark patterns',
    title: 'Do not use manipulative interface patterns that exploit lower digital literacy',
    body: `Dark patterns are interface designs that deliberately mislead or pressure users into actions they would not otherwise choose. Older adults with lower digital confidence are disproportionately harmed — they are less likely to recognise manipulative designs and more likely to comply out of uncertainty or anxiety.

The following patterns must not be used in services targeting or likely to be used by older adults: pre-ticked boxes for subscriptions, add-ons, or data sharing; auto-renewing trials without explicit advance notice; cancellation flows that require significantly more steps than sign-up; confirm-shaming (e.g. "No thanks, I don't want to save money"); false urgency such as countdown timers on non-expiring offers; and hidden fees revealed only at the final checkout step.

References:
- Nielsen Norman Group — Deceptive Patterns: https://www.nngroup.com/articles/deceptive-patterns/
- UK Competition and Markets Authority — Online Choice Architecture (2022): https://www.gov.uk/government/publications/online-choice-architecture-how-digital-design-can-harm-competition-and-consumers
- Luguri, J. & Strahilevitz, L. J. (2021). Shining a Light on Dark Patterns. Journal of Legal Analysis, 13(1).
- FTC — Report on Dark Patterns (2022): https://www.ftc.gov/reports/dark-patterns`,
  },
  {
    id: 'g16',
    code: 'AIWS-16 · Consent design',
    title: 'Make consent interfaces clear, equal, and free from manipulative design',
    body: `Cookie consent and data-sharing interfaces are consistently designed to make acceptance easier than refusal. For older adults with lower digital literacy, confusing language, unequal button prominence, and pre-ticked boxes mean meaningful consent is rarely given. Research has found that 88% of cookie consent interfaces exhibited dark pattern heuristics.

Consent interfaces must: present accept and reject options with equal visual weight; not use pre-ticked checkboxes for non-essential data collection; use plain language free from jargon, double negatives, or emotionally manipulative framing; and allow users to withdraw consent as easily as they gave it. Cookie walls that deny access unless consent is given are not permitted.

References:
- "Okay, whatever": An Evaluation of Cookie Consent Interfaces — ACM CHI 2022: https://dl.acm.org/doi/10.1145/3491102.3501985
- European Data Protection Board — Guidelines on Dark Patterns in Social Media (2022): https://edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-032022-dark-patterns-social-media-platform_en
- ICO — Guidance on Privacy in the Design of Online Services: https://ico.org.uk/for-organisations/guide-to-data-protection/`,
  },
  {
    id: 'g17',
    code: 'AIWS-17 · Technology anxiety',
    title: 'Use language and visual design that does not imply the user has made a serious mistake',
    body: `Research consistently identifies low self-efficacy and technology anxiety as primary barriers to digital inclusion for older adults. Interface language and visual design that implies severity, fault, or danger — even unintentionally — triggers anxiety and increases abandonment, particularly among users with lower digital confidence.

Avoid the words "invalid", "illegal", "forbidden", "denied", and "failed" in user-facing messages. Do not use red for neutral informational states such as required field indicators. Avoid exclamation marks in warning states unless the situation is genuinely urgent. Where a user's action has been blocked or failed, always explain why in plain language and offer a clear next step. Never imply the user has caused damage or compromised security unless they genuinely have.

References:
- Czaja, S. J., et al. (2006). Factors predicting the use of technology. Psychology and Aging, 21(2).
- Accessible Web Design for Older Adults: Challenges and Solutions (2025): https://digibug.ugr.es/bitstream/handle/10481/106560/TACCESS-2025-05-25-preprint.pdf
- Digital Exclusion in Older Adults: A Scoping Review. ScienceDirect (2024): https://www.sciencedirect.com/science/article/abs/pii/S0020748925000914`,
  },
  {
    id: 'g18',
    code: 'AIWS-18 · Colour and ageing vision',
    title: 'Go beyond WCAG contrast ratios to account for age-related vision changes',
    wcagOverlap: 'Partial WCAG overlap: WCAG 1.4.3 (Contrast, Level AA) and 1.4.6 (Enhanced Contrast, Level AAA) set minimum contrast ratios, but do not address colour combinations that remain difficult for older eyes even when ratios are technically met, or the specific effect of lens yellowing on blue-tone perception.',
    body: `WCAG contrast ratios provide a baseline but do not fully address the realities of ageing vision. The lens of the eye yellows with age, reducing sensitivity to blue and violet tones — meaning blue-on-black and blue-on-dark-grey combinations that pass WCAG 1.4.3 can still be very difficult to read. Red-green combinations remain problematic regardless of contrast ratio due to the prevalence of red-green colour deficiency in older populations.

Avoid using blue as the primary text colour on dark backgrounds. Do not rely on colour alone to convey meaning (already required by WCAG 1.4.1, but frequently violated in practice). Test designs with users aged 60 and over, not only with contrast-checking tools. Prefer high-contrast black-on-white or dark-on-light combinations for body text. Minimum recommended body font size for web is 16px; for PDFs and printed materials, 14pt.

References:
- Vispero — Preventing Ageism in Design: Digital Accessibility for Older Adults: https://vispero.com/resources/preventing-ageism-in-design-digital-accessibility-for-older-adults/
- Hou, G., et al. (2022). How to design font size for older adults. Frontiers in Psychology: https://doi.org/10.3389/fpsyg.2022.931646
- Is modern web design ageist? Medium / Design Bootcamp (2024): https://medium.com/design-bootcamp/is-modern-web-design-ageist-550e8346812f`,
  },
  {
    id: 'g19',
    code: 'AIWS-19 · Multilingual content',
    title: 'Do not assume English as the only language of older adult users',
    body: `Older adults in the UK include significant communities for whom English is not a first language. Research has identified that no existing WCAG-based success criteria for older users address multilingual or bilingual websites, leaving a clear gap for services targeting diverse communities.

Services used by linguistically diverse older adult populations should: offer key transactional content in the most common community languages for their area; avoid machine-translated content for critical journeys such as health, legal, or financial services without human review; ensure language-switching controls are clearly visible and persistent across all pages; and not assume that a user's preferred language matches their browser locale.

References:
- Improving WCAG for Elderly Web Accessibility — ResearchGate (2024): https://www.researchgate.net/publication/216742704_Improving_WCAG_for_elderly_Web_accessibility
- Good Things Foundation — Digital Nation report (2023): https://www.goodthingsfoundation.org/insights/digital-nation-2023/
- ONS — Population of England and Wales by ethnic group (2021 Census): https://www.ons.gov.uk/peoplepopulationandcommunity/culturalidentity/ethnicity`,
  },
];