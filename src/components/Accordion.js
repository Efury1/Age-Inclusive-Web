import React, { useState, createContext, useContext } from 'react';

/* -----------------------------
   Accordion Context
------------------------------ */
const AccordionContext = createContext(null);

function useAccordion() {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('Accordion components must be used within an Accordion');
  }
  return context;
}

/* -----------------------------
   Accordion Root
------------------------------ */
export function Accordion({ children, allowMultiple = false }) {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (id) => {
    setOpenItems((previous) => {
      const isOpen = previous.includes(id);

      if (allowMultiple) {
        return isOpen
          ? previous.filter((item) => item !== id)
          : [...previous, id];
      }

      return isOpen ? [] : [id];
    });
  };

  const value = {
    openItems,
    toggleItem,
  };

  return (
    <AccordionContext.Provider value={value}>
      <div>{children}</div>
    </AccordionContext.Provider>
  );
}

/* -----------------------------
   Accordion Item
------------------------------ */
export function AccordionItem({
  id,
  title,
  summary,
  children,
  styles = {},
  theme = {},
}) {
  const { openItems, toggleItem } = useAccordion();
  const isOpen = openItems.includes(id);

  const colors = {
    text: theme.text,
    muted: theme.muted,
    surface: theme.surface,
    border: theme.border,
    accent: theme.accent,
  };

  return (
    <section
      style={{
        background: colors.surface,
        border: `1px solid ${colors.border}`,
        borderRadius: '10px',
        overflow: 'hidden',
        marginBottom: '1rem',
        ...styles.card,
      }}
    >
      <button
        onClick={() => toggleItem(id)}
        aria-expanded={isOpen}
        aria-controls={`${id}-content`}
        id={`${id}-header`}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          padding: '1.25rem 1.5rem',
          border: 'none',
          background: colors.surface,
          cursor: 'pointer',
          borderBottom: isOpen
            ? `3px solid ${colors.accent}`
            : `1px solid ${colors.border}`,
          textAlign: 'left',
          ...styles.button,
        }}
      >
        <span style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
          <span style={{ fontSize: '1.1rem', fontWeight: 700, color: colors.text }}>
            {title}
          </span>

          {summary && (
            <span style={{ fontSize: '0.85rem', color: colors.muted }}>
              {summary}
            </span>
          )}
        </span>

        <span
          aria-hidden="true"
          style={{
            fontSize: '1.5rem',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease',
            color: colors.accent,
          }}
        >
          ⌄
        </span>
      </button>

      <div
        id={`${id}-content`}
        role="region"
        aria-labelledby={`${id}-header`}
        hidden={!isOpen}
        style={{
          padding: '1.25rem 1.5rem',
          color: colors.text,
          ...styles.content,
        }}
      >
        {children}
      </div>
    </section>
  );
}