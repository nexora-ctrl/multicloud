/**
 * Tabler Icons SVG Helper
 * Uniform stroke-width, 24x24 viewBox, scalable and customizable.
 * Strictly using Tabler Icons SVG without external font dependencies.
 */

const baseSvg = (inner, className = 'icon', size = 20, stroke = 2) => `
  <svg class="${className}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    ${inner}
  </svg>
`;

const iconsDict = {
  // Theme
  sun: (cls, size, stroke) => baseSvg('<path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />', cls, size, stroke),
  moon: (cls, size, stroke) => baseSvg('<path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />', cls, size, stroke),
  
  // Navigation & UI
  menu: (cls, size, stroke) => baseSvg('<path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" />', cls, size, stroke),
  x: (cls, size, stroke) => baseSvg('<path d="M18 6l-12 12" /><path d="M6 6l12 12" />', cls, size, stroke),
  chevronRight: (cls, size, stroke) => baseSvg('<path d="M9 6l6 6l-6 6" />', cls, size, stroke),
  chevronDown: (cls, size, stroke) => baseSvg('<path d="M6 9l6 6l6 -6" />', cls, size, stroke),
  chevronLeft: (cls, size, stroke) => baseSvg('<path d="M15 6l-6 6l6 6" />', cls, size, stroke),
  arrowRight: (cls, size, stroke) => baseSvg('<path d="M5 12l14 0" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" />', cls, size, stroke),
  search: (cls, size, stroke) => baseSvg('<path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" />', cls, size, stroke),
  filter: (cls, size, stroke) => baseSvg('<path d="M4 4h16v2.172a2 2 0 0 1 -.586 1.414l-4.828 4.828a2 2 0 0 0 -.586 1.414v4.172l-4 2v-6.172a2 2 0 0 0 -.586 -1.414l-4.828 -4.828a2 2 0 0 1 -.586 -1.414z" />', cls, size, stroke),
  check: (cls, size, stroke) => baseSvg('<path d="M5 12l5 5l10 -10" />', cls, size, stroke),
  checkCircle: (cls, size, stroke) => baseSvg('<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M9 12l2 2l4 -4" />', cls, size, stroke),
  infoCircle: (cls, size, stroke) => baseSvg('<path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" />', cls, size, stroke),
  alertCircle: (cls, size, stroke) => baseSvg('<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 8v4" /><path d="M12 16h.01" />', cls, size, stroke),
  helpCircle: (cls, size, stroke) => baseSvg('<path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 17l0 .01" /><path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />', cls, size, stroke),
  star: (cls, size, stroke) => baseSvg('<path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" fill="currentColor" />', cls, size, stroke),
  starOutline: (cls, size, stroke) => baseSvg('<path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />', cls, size, stroke),
  externalLink: (cls, size, stroke) => baseSvg('<path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" /><path d="M11 13l9 -9" /><path d="M15 4h5v5" />', cls, size, stroke),

  // Cloud & Infra
  cloud: (cls, size, stroke) => baseSvg('<path d="M6.657 18c-2.572 0 -4.657 -2.007 -4.657 -4.483c0 -2.335 1.832 -4.248 4.152 -4.463c.57 -3.12 3.32 -5.054 6.345 -5.054c2.613 0 4.887 1.488 5.765 3.693c1.947 .28 3.738 1.942 3.738 4.307c0 2.476 -2.085 4.483 -4.657 4.483z" />', cls, size, stroke),
  server: (cls, size, stroke) => baseSvg('<path d="M3 4m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" /><path d="M3 12m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" /><path d="M7 8l0 .01" /><path d="M7 16l0 .01" />', cls, size, stroke),
  database: (cls, size, stroke) => baseSvg('<path d="M12 6m-8 0a8 3 0 1 0 16 0a8 3 0 1 0 -16 0" /><path d="M4 6v6a8 3 0 0 0 16 0v-6" /><path d="M4 12v6a8 3 0 0 0 16 0v-6" />', cls, size, stroke),
  cpu: (cls, size, stroke) => baseSvg('<path d="M5 5m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" /><path d="M9 9h6v6h-6z" /><path d="M3 10h2" /><path d="M3 14h2" /><path d="M10 3v2" /><path d="M14 3v2" /><path d="M21 10h-2" /><path d="M21 14h-2" /><path d="M14 21v-2" /><path d="M10 21v-2" />', cls, size, stroke),
  world: (cls, size, stroke) => baseSvg('<path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M3.6 9h16.8" /><path d="M3.6 15h16.8" /><path d="M11.5 3a17 17 0 0 0 0 18" /><path d="M12.5 3a17 17 0 0 1 0 18" />', cls, size, stroke),
  globe: (cls, size, stroke) => baseSvg('<path d="M7 9a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M5.75 15a8.015 8.015 0 1 0 9.25 -8.75" /><path d="M11 21v-2" />', cls, size, stroke),

  // API & Code
  code: (cls, size, stroke) => baseSvg('<path d="M7 8l-4 4l4 4" /><path d="M17 8l4 4l-4 4" /><path d="M14 4l-4 16" />', cls, size, stroke),
  terminal: (cls, size, stroke) => baseSvg('<path d="M5 7l5 5l-5 5" /><path d="M12 19l7 0" />', cls, size, stroke),
  api: (cls, size, stroke) => baseSvg('<path d="M4 13h5" /><path d="M12 16v-8h3a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-3" /><path d="M20 8v8" /><path d="M9 8v8" /><path d="M4 16v-5.5a2.5 2.5 0 0 1 5 0v5.5" />', cls, size, stroke),
  brandWhatsapp: (cls, size, stroke) => baseSvg('<path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" /><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />', cls, size, stroke),
  plug: (cls, size, stroke) => baseSvg('<path d="M9.785 6l8.215 8.215l-2.054 2.054a5.81 5.81 0 1 1 -8.215 -8.215l2.054 -2.054z" /><path d="M4 20l3.5 -3.5" /><path d="M15 4l-3.5 3.5" /><path d="M20 9l-3.5 3.5" />', cls, size, stroke),

  // AI & Automation
  messages: (cls, size, stroke) => baseSvg('<path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" /><path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />', cls, size, stroke),
  robot: (cls, size, stroke) => baseSvg('<path d="M6 4m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" /><path d="M12 2v2" /><path d="M9 12v9" /><path d="M15 12v9" /><path d="M5 16l4 -2" /><path d="M15 14l4 2" /><path d="M9 18h6" /><path d="M10 8v.01" /><path d="M14 8v.01" />', cls, size, stroke),
  sparkles: (cls, size, stroke) => baseSvg('<path d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6z" />', cls, size, stroke),
  brandGithub: (cls, size, stroke) => baseSvg('<path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />', cls, size, stroke),
  wand: (cls, size, stroke) => baseSvg('<path d="M6 21l15 -15l-3 -3l-15 15l3 3" /><path d="M15 6l3 3" /><path d="M9 3a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" /><path d="M19 13a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" />', cls, size, stroke),

  // Digital Products, Creative & Licenses
  palette: (cls, size, stroke) => baseSvg('<path d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25" /><path d="M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />', cls, size, stroke),
  clock: (cls, size, stroke) => baseSvg('<path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 7v5l3 3" />', cls, size, stroke),
  printer: (cls, size, stroke) => baseSvg('<path d="M17 17h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2" /><path d="M17 9v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4" /><path d="M7 13m0 2a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2z" />', cls, size, stroke),
  package: (cls, size, stroke) => baseSvg('<path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5" /><path d="M12 12l8 -4.5" /><path d="M12 12l0 9" /><path d="M12 12l-8 -4.5" /><path d="M16 5.25l-8 4.5" />', cls, size, stroke),
  license: (cls, size, stroke) => baseSvg('<path d="M15 21h-9a3 3 0 0 1 -3 -3v-1a10 10 0 0 1 10 -10h2a10 10 0 0 1 10 10v1a3 3 0 0 1 -3 3h-3" /><path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /><path d="M9 12h6" /><path d="M9 16h6" />', cls, size, stroke),
  shieldCheck: (cls, size, stroke) => baseSvg('<path d="M9 12l2 2l4 -4" /><path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />', cls, size, stroke),
  certificate: (cls, size, stroke) => baseSvg('<path d="M15 15m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M13 17.5v4.5l2 -1.5l2 1.5v-4.5" /><path d="M10 19h-5a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73" /><path d="M6 9h12" /><path d="M6 12h3" /><path d="M6 15h2" />', cls, size, stroke),

  // Commercial & Dashboard
  shoppingCart: (cls, size, stroke) => baseSvg('<path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 17h-11v-14h-2" /><path d="M6 5l14 1l-1 7h-13" />', cls, size, stroke),
  receipt: (cls, size, stroke) => baseSvg('<path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2m4 -14h6m-6 4h6m-2 4h2" />', cls, size, stroke),
  layoutDashboard: (cls, size, stroke) => baseSvg('<path d="M4 4h6v8h-6z" /><path d="M4 16h6v4h-6z" /><path d="M14 12h6v8h-6z" /><path d="M14 4h6v4h-6z" />', cls, size, stroke),
  user: (cls, size, stroke) => baseSvg('<path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />', cls, size, stroke),
  users: (cls, size, stroke) => baseSvg('<path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /><path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />', cls, size, stroke),
  settings: (cls, size, stroke) => baseSvg('<path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" /><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />', cls, size, stroke),
  ticket: (cls, size, stroke) => baseSvg('<path d="M15 5l0 2" /><path d="M15 11l0 2" /><path d="M15 17l0 2" /><path d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2" />', cls, size, stroke),
  lock: (cls, size, stroke) => baseSvg('<path d="M5 11m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" /><path d="M8 11v-4a4 4 0 0 1 8 0v4" />', cls, size, stroke),
  eye: (cls, size, stroke) => baseSvg('<path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />', cls, size, stroke),
  eyeOff: (cls, size, stroke) => baseSvg('<path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" /><path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" /><path d="M3 3l18 18" />', cls, size, stroke),
  logout: (cls, size, stroke) => baseSvg('<path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" /><path d="M9 12h12l-3 -3" /><path d="M18 15l3 -3" />', cls, size, stroke),
  bell: (cls, size, stroke) => baseSvg('<path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" /><path d="M9 17v1a3 3 0 0 0 6 0v-1" />', cls, size, stroke),
  fileText: (cls, size, stroke) => baseSvg('<path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /><path d="M9 9l1 0" /><path d="M9 13l6 0" /><path d="M9 17l6 0" />', cls, size, stroke),
  mail: (cls, size, stroke) => baseSvg('<path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" />', cls, size, stroke),
  phone: (cls, size, stroke) => baseSvg('<path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />', cls, size, stroke),
  activity: (cls, size, stroke) => baseSvg('<path d="M3 12h4l3 8l4 -16l3 8h4" />', cls, size, stroke),
  rocket: (cls, size, stroke) => baseSvg('<path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3" /><path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3" /><path d="M15 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />', cls, size, stroke),
  layers: (cls, size, stroke) => baseSvg('<path d="M8 20l4 2l4 -2" /><path d="M4 14l8 4l8 -4" /><path d="M4 8l8 4l8 -4l-8 -4l-8 4" />', cls, size, stroke),
  zap: (cls, size, stroke) => baseSvg('<path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0z" />', cls, size, stroke),
  copy: (cls, size, stroke) => baseSvg('<path d="M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" /><path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" />', cls, size, stroke),
  plus: (cls, size, stroke) => baseSvg('<path d="M12 5l0 14" /><path d="M5 12l14 0" />', cls, size, stroke),
  trash: (cls, size, stroke) => baseSvg('<path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />', cls, size, stroke),
  edit: (cls, size, stroke) => baseSvg('<path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" /><path d="M13.5 6.5l4 4" />', cls, size, stroke),
  brandTelegram: (cls, size, stroke) => baseSvg('<path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />', cls, size, stroke),
  
  // Handshake & Support
  heartHandshake: (cls, size, stroke) => baseSvg('<path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />', cls, size, stroke),
  building: (cls, size, stroke) => baseSvg('<path d="M3 21l18 0" /><path d="M9 8l1 0" /><path d="M9 12l1 0" /><path d="M9 16l1 0" /><path d="M14 8l1 0" /><path d="M14 12l1 0" /><path d="M14 16l1 0" /><path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16" />', cls, size, stroke),
  refresh: (cls, size, stroke) => baseSvg('<path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" /><path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />', cls, size, stroke)
};

// Safe Proxy to avoid "is not a function" if any icon is missing
export const icons = new Proxy(iconsDict, {
  get(target, prop) {
    if (prop in target) {
      return target[prop];
    }
    // Safe fallback to avoid crashing render loops
    return (cls = 'icon', size = 20, stroke = 2) => baseSvg('<circle cx="12" cy="12" r="9" /><path d="M12 8v4" /><path d="M12 16h.01" />', cls, size, stroke);
  }
});
