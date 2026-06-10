import React, { useState, useEffect, useRef } from "react";
import Layout from "@theme/Layout";
import styles from "../css/contact.modules.css";

const STORAGE_KEY = "contact_draft";
const FIELDS = ["name", "email", "message"];
const EMPTY_FORM = { name: "", email: "", message: "" };

// Validation
function validate(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = "Please add your name so we know how to address our reply.";
  }

  if (!values.email.trim()) {
    errors.email = "Please add your email address so we can reply to you.";
  } else if (/\s/.test(values.email)) {
    errors.email = "Your email address has a space in it. Remove any spaces and try again - nothing else has changed.";
  } else if (!values.email.includes("@")) {
    errors.email = "Your email address needs an @ symbol. For example: name@example.com - your other answers are still saved.";
  } else if (values.email.startsWith("@")) {
    errors.email = "There needs to be something before the @ symbol. For example: name@example.com - your other answers are still saved.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Your email address needs a domain after the @, such as gmail.com or outlook.com. For example: name@example.com — your other answers are still saved.";
  }

  if (!values.message.trim()) {
    errors.message = "Please add a message. You can write as little or as much as you like.";
  }

  return errors;
}

// Progress helpers
function countFilled(form) {
  return FIELDS.filter((k) => form[k].trim()).length;
}

function progressLabel(filled) {
  if (filled === FIELDS.length) return "All fields filled. This message is now ready to send";
  return `Step ${filled + 1} of ${FIELDS.length}`;
}

// TooltipHelp
function TooltipHelp({ id, children, fieldRef }) {
  const [open, setOpen] = useState(false);
  const [panelWidth, setPanelWidth] = useState(null);
  const btnRef = useRef(null);

  function handleOpen() {
    if (!open && fieldRef?.current) {
      const input = fieldRef.current.querySelector("input, textarea");
      if (input) setPanelWidth(input.getBoundingClientRect().width);
    }
    setOpen((prev) => !prev);
  }

  useEffect(() => {
    if (!open) return;
    function onKey(e) {
      if (e.key === "Escape") {
        setOpen(false);
        btnRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        ref={btnRef}
        type="button"
        className={styles.tooltipBtn}
        aria-label="More information"
        aria-expanded={open}
        aria-controls={id}
        onClick={handleOpen}
      >
        ?
      </button>

      {open && (
        <div
          id={id}
          className={styles.tooltipPanel}
          role="tooltip"
          style={panelWidth ? { width: panelWidth } : undefined}
        >
          {children}
        </div>
      )}
    </>
  );
}

// FieldError
// Uses a circle i icon instead of ⚠ — informational rather than alarming.
// role="alert" ensures screen readers announce the message immediately.
function FieldError({ id, message }) {
  if (!message) return null;

  return (
    <p id={id} className={styles.fieldError} role="alert">
      <span className={styles.errorIcon} aria-hidden="true">ⓘ</span>
      {message}
    </p>
  );
}

// ProgressBar
function ProgressBar({ form }) {
  const filled = countFilled(form);
  const pct = Math.round((filled / FIELDS.length) * 100);

  return (
    <div className={styles.progressWrap} aria-hidden="true">
      <p className={styles.progressMeta}>
        <span>{progressLabel(filled)}</span>
        <span>{pct}% complete</span>
      </p>
      <div className={styles.progressTrack}>
        <div className={styles.progressFill} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

// SuccessCard
function SuccessCard({ onReset }) {
  const headingRef = useRef(null);

  useEffect(() => {
    headingRef.current?.focus();
  }, []);

  return (
    <div className={styles.successCard}>
      <span className={styles.successIcon} aria-hidden="true">✓</span>
      <h2 ref={headingRef} tabIndex={-1}>Message sent!</h2>
      <p>We'll reply to your email within 2 working days.</p>
      <button type="button" className={styles.resetBtn} onClick={onReset}>
        Send another message
      </button>
    </div>
  );
}

// Main component
export default function Contact() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [statusMsg, setStatusMsg] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [draftSaved, setDraftSaved] = useState(false);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (saved && FIELDS.some((k) => saved[k]?.trim())) {
        setForm(saved);
        setDraftSaved(true);
      }
    } catch (_) {}
  }, []);

  useEffect(() => {
    if (submitted) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(form));
      if (FIELDS.some((k) => form[k].trim())) setDraftSaved(true);
    } catch (_) {}
  }, [form, submitted]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const nextErrors = validate(form);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatusMsg(
        "Almost there. One or more fields need a small correction before we can send your message. Your answers are safe and have not been lost."
      );
      const firstKey = FIELDS.find((k) => nextErrors[k]);
      document.getElementById(firstKey)?.focus();
      return;
    }

    try {
      const res = await fetch(process.env.DOCUSAURUS_FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Network error");

      try { localStorage.removeItem(STORAGE_KEY); } catch (_) {}
      setSubmitted(true);
      setStatusMsg("");
      setDraftSaved(false);
    } catch (_) {
      setStatusMsg(
        "Something went wrong sending your message. Please try again, or email us directly at ejfury@protonmail.com, your answers are still here."
      );
    }
  }

  function handleReset() {
    setForm(EMPTY_FORM);
    setErrors({});
    setStatusMsg("");
    setSubmitted(false);
    setDraftSaved(false);
  }

  return (
    <Layout
      title="Contact"
      description="Contact the Age-Inclusive Web Standard project team."
    >
      <main className={styles.main}>
        <header className={styles.hero}>
          <h1>Contact us</h1>
          <p>Questions, feedback, or accessibility suggestions are welcome.</p>
        </header>

        {submitted ? (
          <SuccessCard onReset={handleReset} />
        ) : (
          <>
            <ProgressBar form={form} />

            {draftSaved && (
              <p className={styles.draftNotice}>
                Draft saved: your input will be here even if you leave the page.
              </p>
            )}

            <div
              role="status"
              aria-live="polite"
              className={`${styles.statusMsg}${statusMsg ? ` ${styles.statusError}` : ""}`}
            >
              {statusMsg}
            </div>

            <form onSubmit={handleSubmit} noValidate className={styles.form}>

              {/* NAME */}
              <div ref={nameRef} className={styles.field}>
                <label htmlFor="name">
                  Your name{" "}
                  <span className={styles.req} aria-hidden="true">*</span>
                  <TooltipHelp id="name-help" fieldRef={nameRef}>
                    Use the name you'd like us to use when we reply. A
                    preferred name is fine, no need to use your legal name.
                  </TooltipHelp>
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="e.g. Alex Smith"
                  value={form.name}
                  onChange={handleChange}
                  aria-required="true"
                  aria-invalid={!!errors.name}
                  aria-describedby="name-error"
                />

                <FieldError id="name-error" message={errors.name} />
              </div>

              {/* EMAIL */}
              <div ref={emailRef} className={styles.field}>
                <label htmlFor="email">
                  Email address{" "}
                  <span className={styles.req} aria-hidden="true">*</span>
                  <TooltipHelp id="email-help" fieldRef={emailRef}>
                    A valid email looks like <strong>name@example.com</strong>{" "}
                    — no spaces or missing parts. We'll only use this to reply
                    to you.
                  </TooltipHelp>
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  aria-required="true"
                  aria-invalid={!!errors.email}
                  aria-describedby="email-error"
                />

                <FieldError id="email-error" message={errors.email} />
              </div>

              {/* MESSAGE */}
              <div ref={messageRef} className={styles.field}>
                <label htmlFor="message">
                  Your message{" "}
                  <span className={styles.req} aria-hidden="true">*</span>
                  <TooltipHelp id="message-help" fieldRef={messageRef}>
                    Feel free to include what you would like help with, if
                    there's anything we can add to our checklists, or anything
                    we can improve about the website.
                  </TooltipHelp>
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us what's on your mind…"
                  aria-required="true"
                  aria-invalid={!!errors.message}
                  aria-describedby="message-error"
                />

                <FieldError id="message-error" message={errors.message} />
              </div>

              <button type="submit" className={styles.button}>
                Send message
              </button>
            </form>
          </>
        )}
      </main>
    </Layout>
  );
}