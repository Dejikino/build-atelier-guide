// Preserve the current section when switching languages. Every paired page shares IDs.
const languageLink = document.getElementById('language');
if (languageLink) {
  const base = languageLink.getAttribute('href');
  const update = () => { languageLink.href = base + location.hash; };
  addEventListener('hashchange', update);
  update();
}
