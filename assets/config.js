// Link zum App Store – nur hier ändern.
// Leer lassen, solange die App noch nicht im App Store ist: Die Website zeigt dann „Bald im App Store“.
window.STEPISLE = {
  appStoreUrl: "https://apps.apple.com/de/app/stepisle/id6825102984",
};

// Setzt den Link ein. Ohne Link bleibt der Platzhalter aus dem HTML stehen.
document.addEventListener("DOMContentLoaded", () => {
  const urls = { appStore: window.STEPISLE.appStoreUrl };
  document.querySelectorAll("[data-link]").forEach((el) => {
    const url = urls[el.dataset.link];
    if (!url) return;
    const link = document.createElement("a");
    link.href = url;
    link.className = el.className.replace("is-pending", "").trim();
    link.innerHTML = el.innerHTML;
    if (el.dataset.label) link.setAttribute("aria-label", el.dataset.label);
    link.querySelectorAll("[data-pending]").forEach((hint) => hint.remove());
    el.replaceWith(link);
  });
});
