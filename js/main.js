/**
 * MultiCloud Application Bootstrapper
 * Initializes Theme, Router, Store Subscribers, and Global Events.
 */

import { initTheme } from './theme.js';
import { handleRoute } from './router.js';
import { store } from './state.js';

// Initialize Theme first
initTheme();

// Route listener
window.addEventListener('hashchange', handleRoute);

// Subscribe store updates
store.subscribe(() => {
  // Re-render current page if state changed
  handleRoute();
});

// Initial boot
document.addEventListener('DOMContentLoaded', () => {
  handleRoute();
});

// If DOM is already ready
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  handleRoute();
}

