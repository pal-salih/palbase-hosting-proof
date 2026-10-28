// A single-page app: every path is drawn here, the server answers each with index.html.
const pages = {
  '/': () => `<h1>Home</h1><p>Built for ${import.meta.env.VITE_ENVIRONMENT ?? 'nowhere'}.</p>`,
  '/about/team': () => '<h1>Team</h1><p>Drawn by the app, not a file.</p>',
};
function draw() {
  const page = pages[location.pathname] ?? (() => `<h1>App route</h1><p>${location.pathname}</p>`);
  document.getElementById('app').innerHTML = page();
}
document.addEventListener('click', (e) => {
  const a = e.target.closest('a[data-link]');
  if (!a) return;
  e.preventDefault();
  history.pushState(null, '', a.getAttribute('href'));
  draw();
});
addEventListener('popstate', draw);
draw();
