/**
 * MultiCloud Theme Manager
 * Supports Light & Dark modes via CSS variables on html[data-theme]
 * Persists in localStorage and falls back to system prefers-color-scheme.
 */

import { icons } from './icons.js';

const STORAGE_KEY = 'multicloud_theme';

export function getPreferredTheme() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'dark' || saved === 'light') {
    return saved;
  }
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
}

export function setTheme(theme) {
  const root = document.documentElement;
  root.setAttribute('data-theme', theme);
  localStorage.setItem(STORAGE_KEY, theme);
  updateThemeToggleButtons(theme);
}

export function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || getPreferredTheme();
  const next = current === 'dark' ? 'light' : 'dark';
  setTheme(next);
  return next;
}

export function initTheme() {
  const theme = getPreferredTheme();
  setTheme(theme);

  // Listen to system changes if user hasn't explicitly overridden in this session
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem(STORAGE_KEY)) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    });
  }
}

function updateThemeToggleButtons(theme) {
  const buttons = document.querySelectorAll('.theme-toggle-btn');
  buttons.forEach((btn) => {
    btn.setAttribute('aria-label', theme === 'dark' ? 'Beralih ke Light Mode' : 'Beralih ke Dark Mode');
    btn.setAttribute('title', theme === 'dark' ? 'Beralih ke Light Mode' : 'Beralih ke Dark Mode');
    btn.innerHTML = theme === 'dark' 
      ? icons.sun('theme-icon', 18, 2)
      : icons.moon('theme-icon', 18, 2);
  });
}

