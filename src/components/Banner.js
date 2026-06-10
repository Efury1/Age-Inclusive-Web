import React from "react";

export default function DevNoticeBanner() {
  return (
    <div style={styles.banner} role="status" aria-live="polite">
      <p style={styles.text}>
        <strong>Notice:</strong> This website is currently under active development. 
        Features and content are being continuously improved. 
        The “Contact Us” page is not yet fully functional, but we are actively working to complete it.
      </p>
    </div>
  );
}

const styles = {
  banner: {
    width: "100%",
    backgroundColor: "#fff3cd",
    color: "#664d03",
    padding: "12px 16px",
    borderBottom: "1px solid #ffe69c",
    fontSize: "14px",
    lineHeight: "1.4",
  },
  text: {
    margin: 0,
  },
};