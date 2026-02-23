// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Copy link functionality with status message
const copyBtn = document.getElementById('copyLinkBtn');
const statusEl = document.getElementById('copyStatus');

copyBtn.addEventListener('click', async () => {
  const url = 'https://securityinflorida.com';
  try {
    await navigator.clipboard.writeText(url);
    statusEl.textContent = 'Link copied to clipboard.';
  } catch {
    statusEl.textContent = 'Unable to copy. You can manually copy: ' + url;
  }
});

// Theme toggle
const toggleBtn = document.getElementById('themeToggle');

const setTheme = (mode) => {
  const isLight = mode === 'light';
  document.body.classList.toggle('light', isLight);
  toggleBtn.setAttribute('aria-pressed', String(isLight));
  toggleBtn.textContent = isLight ? 'Light mode' : 'Dark mode';
  localStorage.setItem('theme', mode);
};

// Initialize theme from system or storage
const saved = localStorage.getItem('theme');
if (saved) {
  setTheme(saved);
} else {
  const prefersLight = window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: light)').matches;
  setTheme(prefersLight ? 'light' : 'dark');
}

toggleBtn.addEventListener('click', () => {
  const next = document.body.classList.contains('light') ? 'dark' : 'light';
  setTheme(next);
});
