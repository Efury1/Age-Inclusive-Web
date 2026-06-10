
# Contributing to Age-Inclusive-Web

Thank you for contributing to Age-Inclusive-Web. This project focuses on building a web experience that is accessible, readable, and usable for people of all ages and digital skill levels.

We welcome improvements, bug fixes, accessibility enhancements, and feature suggestions.

---

## Table of Contents

- [Getting Started](#getting-started)
- [Contribution Workflow](#contribution-workflow)
- [Branching Strategy](#branching-strategy)
- [Pull Requests](#pull-requests)
- [Helpful Resources](#helpful-resources)
- [Design & Styling Rules](#design--styling-rules)
- [Code of Conduct](#code-of-conduct)

---

## Getting Started

### Installation

```bash
yarn
````

### Local Development

```bash
yarn start
```

This starts a local development server. Most changes will update live in the browser.

### Build

```bash
yarn build
```

This generates static files in the `build` directory.

### Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

---

## Contribution Workflow

All contributions should follow this process:

1. **Create an Issue First**

   * Describe the problem, improvement, or feature clearly
   * Include screenshots or examples if helpful
   * Explain expected behavior

2. **Wait for Discussion / Approval**

   * Ensure the issue is valid and aligned with project goals

3. **Create a Feature Branch**

   * Branch from `main`
   * Use descriptive naming:

     * `feature/...`
     * `fix/...`
     * `chore/...`

4. **Implement Changes**

   * Keep changes focused and minimal
   * Follow accessibility and design rules
   * Write clear, readable commit messages

5. **Open a Pull Request**

   * Link the related issue
   * Provide a clear summary of changes
   * Include testing notes if relevant

6. **Review Process**

   * PR must pass review before merging into `main`
   * Feedback should be addressed before approval

---

## Branching Strategy

* `main` → stable production branch
* `feature/*` → new functionality
* `fix/*` → bug fixes
* `chore/*` → maintenance tasks

Keep branches small and short-lived where possible.

---

## Pull Requests

A good pull request should:

* Clearly reference an issue
* Keep changes scoped to a single purpose
* Include screenshots for UI changes
* Not include unrelated refactoring
* Pass all checks and tests (if applicable)

---

## Helpful Resources

These resources support building accessible and inclusive web experiences:

* WCAG accessibility guidelines
* Plain language writing principles
* Semantic HTML best practices
* Responsive design fundamentals
* Keyboard navigation patterns
* Screen reader compatibility guidance
* Docusaurus documentation and plugin guides

---

## Design & Styling Rules

All contributions must follow these principles:

* Use clear, simple, and direct language
* Prioritise readability over decorative styling
* Maintain strong colour contrast for text and UI elements
* Do not rely on colour alone to convey meaning
* Ensure consistent spacing and layout structure
* Support full keyboard navigation
* Maintain screen reader compatibility (ARIA where appropriate)
* Use familiar UI patterns and avoid unexpected interactions
* Keep forms simple, clearly labelled, and forgiving of user error
* Ensure responsive design across mobile, tablet, and desktop

These principles are intended to support broad accessibility and usability expectations used in public-facing digital services.

---

## Code of Conduct

* Be respectful and constructive in all interactions
* Assume positive intent
* Focus feedback on ideas and code, not individuals
* No harassment, discrimination, or abusive language will be tolerated

---

Thank you for helping improve Age-Inclusive-Web.

```

