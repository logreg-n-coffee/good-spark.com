"use client";

export function ContactButton() {
  const openEmail = () => {
    const local = ["con", "tact"].join("");
    const domain = ["rui", "hu", ".me"].join("");
    window.location.href = `mailto:${local}@${domain}?subject=Good%20Spark%20Support`;
  };

  return <button className="button primary" onClick={openEmail}>Send us an email <span>↗</span></button>;
}
