(() => {
  "use strict";
  const email = (window.DOMAIN_CONFIG?.contactEmail || "").trim();
  // Keep an honest placeholder until a usable contact address is configured.
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
  const link = document.getElementById("contact-link");
  link.href = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent("Acquisition inquiry — arcsettlement.com")}`;
  link.hidden = false;
  document.getElementById("contact-placeholder").textContent = email;
  document.getElementById("contact-note").textContent = "Please include your offer and preferred contact details. The button opens your email app; this website does not collect submissions.";
})();
