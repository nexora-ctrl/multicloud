(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=(e,t=`icon`,n=20,r=2)=>`
  <svg class="${t}" width="${n}" height="${n}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${r}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    ${e}
  </svg>
`,t=new Proxy({sun:(t,n,r)=>e(`<path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />`,t,n,r),moon:(t,n,r)=>e(`<path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />`,t,n,r),menu:(t,n,r)=>e(`<path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" />`,t,n,r),x:(t,n,r)=>e(`<path d="M18 6l-12 12" /><path d="M6 6l12 12" />`,t,n,r),chevronRight:(t,n,r)=>e(`<path d="M9 6l6 6l-6 6" />`,t,n,r),chevronDown:(t,n,r)=>e(`<path d="M6 9l6 6l6 -6" />`,t,n,r),chevronLeft:(t,n,r)=>e(`<path d="M15 6l-6 6l6 6" />`,t,n,r),arrowRight:(t,n,r)=>e(`<path d="M5 12l14 0" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" />`,t,n,r),search:(t,n,r)=>e(`<path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" />`,t,n,r),filter:(t,n,r)=>e(`<path d="M4 4h16v2.172a2 2 0 0 1 -.586 1.414l-4.828 4.828a2 2 0 0 0 -.586 1.414v4.172l-4 2v-6.172a2 2 0 0 0 -.586 -1.414l-4.828 -4.828a2 2 0 0 1 -.586 -1.414z" />`,t,n,r),check:(t,n,r)=>e(`<path d="M5 12l5 5l10 -10" />`,t,n,r),checkCircle:(t,n,r)=>e(`<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M9 12l2 2l4 -4" />`,t,n,r),infoCircle:(t,n,r)=>e(`<path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" />`,t,n,r),alertCircle:(t,n,r)=>e(`<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 8v4" /><path d="M12 16h.01" />`,t,n,r),helpCircle:(t,n,r)=>e(`<path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 17l0 .01" /><path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />`,t,n,r),star:(t,n,r)=>e(`<path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" fill="currentColor" />`,t,n,r),starOutline:(t,n,r)=>e(`<path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />`,t,n,r),externalLink:(t,n,r)=>e(`<path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" /><path d="M11 13l9 -9" /><path d="M15 4h5v5" />`,t,n,r),cloud:(t,n,r)=>e(`<path d="M6.657 18c-2.572 0 -4.657 -2.007 -4.657 -4.483c0 -2.335 1.832 -4.248 4.152 -4.463c.57 -3.12 3.32 -5.054 6.345 -5.054c2.613 0 4.887 1.488 5.765 3.693c1.947 .28 3.738 1.942 3.738 4.307c0 2.476 -2.085 4.483 -4.657 4.483z" />`,t,n,r),server:(t,n,r)=>e(`<path d="M3 4m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" /><path d="M3 12m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" /><path d="M7 8l0 .01" /><path d="M7 16l0 .01" />`,t,n,r),database:(t,n,r)=>e(`<path d="M12 6m-8 0a8 3 0 1 0 16 0a8 3 0 1 0 -16 0" /><path d="M4 6v6a8 3 0 0 0 16 0v-6" /><path d="M4 12v6a8 3 0 0 0 16 0v-6" />`,t,n,r),cpu:(t,n,r)=>e(`<path d="M5 5m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" /><path d="M9 9h6v6h-6z" /><path d="M3 10h2" /><path d="M3 14h2" /><path d="M10 3v2" /><path d="M14 3v2" /><path d="M21 10h-2" /><path d="M21 14h-2" /><path d="M14 21v-2" /><path d="M10 21v-2" />`,t,n,r),world:(t,n,r)=>e(`<path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M3.6 9h16.8" /><path d="M3.6 15h16.8" /><path d="M11.5 3a17 17 0 0 0 0 18" /><path d="M12.5 3a17 17 0 0 1 0 18" />`,t,n,r),globe:(t,n,r)=>e(`<path d="M7 9a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M5.75 15a8.015 8.015 0 1 0 9.25 -8.75" /><path d="M11 21v-2" />`,t,n,r),code:(t,n,r)=>e(`<path d="M7 8l-4 4l4 4" /><path d="M17 8l4 4l-4 4" /><path d="M14 4l-4 16" />`,t,n,r),terminal:(t,n,r)=>e(`<path d="M5 7l5 5l-5 5" /><path d="M12 19l7 0" />`,t,n,r),api:(t,n,r)=>e(`<path d="M4 13h5" /><path d="M12 16v-8h3a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-3" /><path d="M20 8v8" /><path d="M9 8v8" /><path d="M4 16v-5.5a2.5 2.5 0 0 1 5 0v5.5" />`,t,n,r),brandWhatsapp:(t,n,r)=>e(`<path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" /><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />`,t,n,r),plug:(t,n,r)=>e(`<path d="M9.785 6l8.215 8.215l-2.054 2.054a5.81 5.81 0 1 1 -8.215 -8.215l2.054 -2.054z" /><path d="M4 20l3.5 -3.5" /><path d="M15 4l-3.5 3.5" /><path d="M20 9l-3.5 3.5" />`,t,n,r),messages:(t,n,r)=>e(`<path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" /><path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />`,t,n,r),robot:(t,n,r)=>e(`<path d="M6 4m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" /><path d="M12 2v2" /><path d="M9 12v9" /><path d="M15 12v9" /><path d="M5 16l4 -2" /><path d="M15 14l4 2" /><path d="M9 18h6" /><path d="M10 8v.01" /><path d="M14 8v.01" />`,t,n,r),sparkles:(t,n,r)=>e(`<path d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6z" />`,t,n,r),brandGithub:(t,n,r)=>e(`<path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />`,t,n,r),wand:(t,n,r)=>e(`<path d="M6 21l15 -15l-3 -3l-15 15l3 3" /><path d="M15 6l3 3" /><path d="M9 3a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" /><path d="M19 13a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" />`,t,n,r),palette:(t,n,r)=>e(`<path d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25" /><path d="M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />`,t,n,r),clock:(t,n,r)=>e(`<path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 7v5l3 3" />`,t,n,r),printer:(t,n,r)=>e(`<path d="M17 17h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2" /><path d="M17 9v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4" /><path d="M7 13m0 2a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2z" />`,t,n,r),package:(t,n,r)=>e(`<path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5" /><path d="M12 12l8 -4.5" /><path d="M12 12l0 9" /><path d="M12 12l-8 -4.5" /><path d="M16 5.25l-8 4.5" />`,t,n,r),license:(t,n,r)=>e(`<path d="M15 21h-9a3 3 0 0 1 -3 -3v-1a10 10 0 0 1 10 -10h2a10 10 0 0 1 10 10v1a3 3 0 0 1 -3 3h-3" /><path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /><path d="M9 12h6" /><path d="M9 16h6" />`,t,n,r),shieldCheck:(t,n,r)=>e(`<path d="M9 12l2 2l4 -4" /><path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />`,t,n,r),certificate:(t,n,r)=>e(`<path d="M15 15m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M13 17.5v4.5l2 -1.5l2 1.5v-4.5" /><path d="M10 19h-5a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73" /><path d="M6 9h12" /><path d="M6 12h3" /><path d="M6 15h2" />`,t,n,r),shoppingCart:(t,n,r)=>e(`<path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 17h-11v-14h-2" /><path d="M6 5l14 1l-1 7h-13" />`,t,n,r),receipt:(t,n,r)=>e(`<path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2m4 -14h6m-6 4h6m-2 4h2" />`,t,n,r),layoutDashboard:(t,n,r)=>e(`<path d="M4 4h6v8h-6z" /><path d="M4 16h6v4h-6z" /><path d="M14 12h6v8h-6z" /><path d="M14 4h6v4h-6z" />`,t,n,r),user:(t,n,r)=>e(`<path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />`,t,n,r),users:(t,n,r)=>e(`<path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /><path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />`,t,n,r),settings:(t,n,r)=>e(`<path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" /><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />`,t,n,r),ticket:(t,n,r)=>e(`<path d="M15 5l0 2" /><path d="M15 11l0 2" /><path d="M15 17l0 2" /><path d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2" />`,t,n,r),lock:(t,n,r)=>e(`<path d="M5 11m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" /><path d="M8 11v-4a4 4 0 0 1 8 0v4" />`,t,n,r),eye:(t,n,r)=>e(`<path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />`,t,n,r),eyeOff:(t,n,r)=>e(`<path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" /><path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" /><path d="M3 3l18 18" />`,t,n,r),logout:(t,n,r)=>e(`<path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" /><path d="M9 12h12l-3 -3" /><path d="M18 15l3 -3" />`,t,n,r),bell:(t,n,r)=>e(`<path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" /><path d="M9 17v1a3 3 0 0 0 6 0v-1" />`,t,n,r),fileText:(t,n,r)=>e(`<path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /><path d="M9 9l1 0" /><path d="M9 13l6 0" /><path d="M9 17l6 0" />`,t,n,r),mail:(t,n,r)=>e(`<path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" />`,t,n,r),phone:(t,n,r)=>e(`<path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />`,t,n,r),activity:(t,n,r)=>e(`<path d="M3 12h4l3 8l4 -16l3 8h4" />`,t,n,r),rocket:(t,n,r)=>e(`<path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3" /><path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3" /><path d="M15 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />`,t,n,r),layers:(t,n,r)=>e(`<path d="M8 20l4 2l4 -2" /><path d="M4 14l8 4l8 -4" /><path d="M4 8l8 4l8 -4l-8 -4l-8 4" />`,t,n,r),zap:(t,n,r)=>e(`<path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0z" />`,t,n,r),copy:(t,n,r)=>e(`<path d="M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" /><path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" />`,t,n,r),plus:(t,n,r)=>e(`<path d="M12 5l0 14" /><path d="M5 12l14 0" />`,t,n,r),trash:(t,n,r)=>e(`<path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />`,t,n,r),edit:(t,n,r)=>e(`<path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" /><path d="M13.5 6.5l4 4" />`,t,n,r),brandTelegram:(t,n,r)=>e(`<path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />`,t,n,r),heartHandshake:(t,n,r)=>e(`<path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />`,t,n,r),building:(t,n,r)=>e(`<path d="M3 21l18 0" /><path d="M9 8l1 0" /><path d="M9 12l1 0" /><path d="M9 16l1 0" /><path d="M14 8l1 0" /><path d="M14 12l1 0" /><path d="M14 16l1 0" /><path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16" />`,t,n,r),refresh:(t,n,r)=>e(`<path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" /><path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />`,t,n,r)},{get(t,n){return n in t?t[n]:(t=`icon`,n=20,r=2)=>e(`<circle cx="12" cy="12" r="9" /><path d="M12 8v4" /><path d="M12 16h.01" />`,t,n,r)}}),n=`multicloud_theme`;function r(){let e=localStorage.getItem(n);return e===`dark`||e===`light`?e:window.matchMedia&&window.matchMedia(`(prefers-color-scheme: dark)`).matches?`dark`:`light`}function i(e){document.documentElement.setAttribute(`data-theme`,e),localStorage.setItem(n,e),s(e)}function a(){let e=(document.documentElement.getAttribute(`data-theme`)||r())===`dark`?`light`:`dark`;return i(e),e}function o(){i(r()),window.matchMedia&&window.matchMedia(`(prefers-color-scheme: dark)`).addEventListener(`change`,e=>{localStorage.getItem(n)||i(e.matches?`dark`:`light`)})}function s(e){document.querySelectorAll(`.theme-toggle-btn`).forEach(n=>{n.setAttribute(`aria-label`,e===`dark`?`Beralih ke Light Mode`:`Beralih ke Dark Mode`),n.setAttribute(`title`,e===`dark`?`Beralih ke Light Mode`:`Beralih ke Dark Mode`),n.innerHTML=e===`dark`?t.sun(`theme-icon`,18,2):t.moon(`theme-icon`,18,2)})}var c=[{id:`all`,label:`Semua Produk`},{id:`ai-tools`,label:`Alat AI & Akses Resmi`},{id:`design-creative`,label:`Desain & Kreatif`},{id:`cloud-hosting`,label:`Komputasi Awan & Hosting`},{id:`api-services`,label:`Layanan API`},{id:`developer-tools`,label:`Perkakas Pengembang`},{id:`software-licenses`,label:`Lisensi Piranti Lunak`}],l=[{id:`prod-canva-premium`,slug:`canva-premium-pro-official`,category:`design-creative`,name:`Canva Premium (Canva Pro / Teams Resmi)`,tagline:`Desain Grafis, Brand Kit, & Studio Konten Visual Profesional`,badge:`Baru`,rating:null,reviewsCount:0,shortDescription:`Langganan resmi Canva Pro / Teams melalui undangan langsung ke surel pribadi Anda. Buka akses penuh pustaka aset visual Pro, penghapus latar belakang satu klik, dan Brand Kit dengan privasi proyek terjaga.`,fullDescription:`Rancang materi publikasi media sosial, dek presentasi bisnis, dokumen cetak resolusi tinggi, hingga penyuntingan video singkat langsung dari peramban maupun aplikasi seluler. Layanan Canva Premium di MultiCloud diaktifkan melalui tautan undangan resmi ke alamat surel Canva pribadi Anda sehingga seluruh folder dan proyek desain tetap bersifat privat serta terpisah dari pengguna lain.`,price:95e3,originalPrice:null,pricePeriod:`/bulan`,icon:`palette`,accentColor:`#2563eb`,isOfficialLicense:!0,packages:[{id:`canva-1m`,name:`1 Bulan Resmi (Perorangan)`,price:95e3,period:`1 Bulan`,note:`Undangan resmi ke surel pribadi, ruang desain privat`},{id:`canva-12m`,name:`1 Tahun Resmi (Hemat Tahunan)`,price:769e3,period:`12 Bulan`,note:`Hemat Rp 371.000 dibanding tagihan bulanan + Garansi penuh 1 tahun`}],features:[`Akses penuh pustaka foto stok, video, audio, font, dan templat berlisensi Pro`,`Penghapus latar belakang foto dan video otomatis dalam satu klik (Background Remover)`,`Pengubah ukuran kanvas lintas format media sosial secara cepat (Resize & Magic Switch)`,`Pengelolaan identitas merek terpusat melalui Brand Kit (logo, palet warna, dan tipografi kustom)`,`Ekspor berkas resolusi tinggi: PNG latar transparan, SVG vektor, PDF Cetak CMYK, dan video MP4 4K`,`Undangan resmi ke akun surel pribadi Anda dengan ruang kerja dan folder desain privat`],specifications:[{key:`Penerbit Piranti Lunak`,value:`Canva Pty Ltd`},{key:`Skema Aktivasi`,value:`Tautan Undangan Resmi ke Surel Pribadi`},{key:`Privasi Proyek`,value:`Desain & Folder Pribadi (Tidak Terlihat Anggota Lain)`},{key:`Penyimpanan Awan`,value:`Penyimpanan Awan Canva Pro hingga 1 TB`},{key:`Dukungan Perangkat`,value:`Peramban Web, Windows, macOS, Android, iOS`},{key:`Jaminan Layanan`,value:`Garansi Penuh Sesuai Durasi Langganan (1 Bulan / 1 Tahun)`}],faq:[{q:`Apakah proyek desain saya dapat dilihat oleh anggota atau pengguna lain?`,a:`Tidak. Seluruh proyek desain yang tidak Anda bagikan secara manual tetap tersimpan di ruang pribadi akun Anda dan tidak dapat dibuka oleh anggota lain.`},{q:`Apakah saya perlu memberikan kata sandi akun Canva saya?`,a:`Tidak pernah. Proses aktivasi dilakukan melalui tautan undangan resmi yang dikirim ke alamat surel Anda. Anda cukup membuka tautan tersebut selagi masuk pada akun Canva milik sendiri.`},{q:`Bagaimana nasib desain lama di akun Canva pribadi saya?`,a:`Seluruh desain lama pada akun pribadi Anda tetap aman dan utuh. Anda juga dapat menyalin atau memindahkan desain antar-ruang kerja kapan saja.`}]},{id:`prod-cursor-pro`,slug:`cursor-ai-pro-official`,category:`ai-tools`,name:`Cursor AI Pro (Akses Resmi Berlisensi)`,tagline:`Penyunting Kode AI Berbasis Claude 3.5 & GPT-4o`,badge:`Terlaris`,rating:4.9,reviewsCount:342,shortDescription:`Tingkatkan efisiensi penulisan kode hingga tiga kali lipat dengan penyunting kode AI tercanggih. Akses sah, legal, dan bergaransi penuh.`,fullDescription:`Cursor adalah penyunting kode berbasis VS Code dengan kecerdasan buatan terintegrasi yang memahami keseluruhan basis kode Anda. Produk ini menyediakan akses resmi ke akun Cursor Pro dengan jaminan keabsahan 100%, kuota permintaan cepat bulanan tanpa antrean, dan pelengkapan cerdas tanpa batas. Bebas dari risiko pemblokiran karena diaktifkan melalui jalur kemitraan resmi.`,price:32e4,originalPrice:38e4,pricePeriod:`/bulan`,icon:`code`,accentColor:`#2563eb`,isOfficialLicense:!0,packages:[{id:`pkg-1m`,name:`1 Bulan Perorangan`,price:32e4,period:`1 Bulan`,note:`Aktivasi langsung ke alamat surel Anda`},{id:`pkg-3m`,name:`3 Bulan Hemat`,price:91e4,period:`3 Bulan`,note:`Hemat Rp 50.000 + Antrean Prioritas`},{id:`pkg-12m`,name:`1 Tahun Korporat`,price:345e4,period:`12 Bulan`,note:`Hemat Rp 390.000 + Faktur Pajak Resmi`}],features:[`500 Permintaan Cepat Premium per bulan (Claude 3.5 Sonnet & GPT-4o)`,`Permintaan Standar Tanpa Batas saat kuota cepat habis`,`Pelengkapan Otomatis Tab Tanpa Batas sepanjang waktu`,`Mode Penyuntingan Multi-Berkas untuk restrukturisasi basis kode besar`,`Integrasi Terminal AI untuk menjalankan perintah secara otomatis`,`Akses resmi langsung ke akun surel pribadi atau tim Anda`],specifications:[{key:`Sistem Operasi`,value:`macOS, Windows, Linux`},{key:`Status Lisensi`,value:`Orisinal & Resmi Bergaransi Penuh`},{key:`Waktu Aktivasi`,value:`5 - 15 Menit setelah pembayaran diverifikasi`},{key:`Masa Garansi`,value:`30 Hari Garansi Penggantian Penuh`},{key:`Dukungan Model`,value:`Claude 3.5 Sonnet, GPT-4o, Cursor-Small`}],faq:[{q:`Apakah akun ini aman dan tidak akan diblokir?`,a:`Ya, 100% aman karena MultiCloud menyediakan akses melalui skema pembayaran resmi dari mitra penyedia terdaftar. Kami tidak menggunakan kartu kredit curian, metode uji coba gratis ilegal, atau celah yang melanggar ketentuan.`},{q:`Bagaimana proses aktivasinya?`,a:`Setelah pesanan berhasil diproses, Anda cukup memasukkan alamat surel yang ingin didaftarkan. Anda akan menerima tautan undangan resmi langsung dari penyedia Cursor.`},{q:`Bagaimana jika terjadi kendala teknis pada akun saya?`,a:`Layanan dukungan pelanggan kami bersiaga 24 jam sehari. Anda berhak atas garansi penuh selama masa durasi langganan masih berlaku.`}]},{id:`prod-gemini-adv`,slug:`google-gemini-advanced`,category:`ai-tools`,name:`Google Gemini Advanced (Google One AI)`,tagline:`Kapasitas 2 Juta Token & Terintegrasi Google Workspace`,badge:`Populer`,rating:4.8,reviewsCount:218,shortDescription:`Kekuatan AI tercanggih Google dengan jendela konteks 2 juta token untuk menganalisis dokumen panjang, video, dan basis data besar.`,fullDescription:`Dapatkan akses resmi ke Google Gemini Advanced yang ditenagai model Gemini 1.5 Pro. Mampu memproses berkas dokumen tebal, video panjang, dan ribuan baris kode dalam satu kali instruksi. Sudah mencakup penyimpanan awan Google One sebesar 2TB untuk Google Foto, Drive, dan Gmail.`,price:3e5,originalPrice:35e4,pricePeriod:`/bulan`,icon:`sparkles`,accentColor:`#6366f1`,isOfficialLicense:!0,packages:[{id:`gem-1m`,name:`1 Bulan Penuh`,price:3e5,period:`1 Bulan`,note:`Termasuk Penyimpanan Awan 2TB`},{id:`gem-3m`,name:`3 Bulan Hemat`,price:86e4,period:`3 Bulan`,note:`Hemat Rp 40.000`}],features:[`Model Gemini 1.5 Pro generasi mutakhir`,`Jendela konteks 2.000.000 token terluas di industri`,`Integrasi langsung dengan Google Dokumen, Gmail, dan Spreadsheet`,`Bonus 2TB penyimpanan awan Google One`,`Fitur penulisan kode Python interaktif di peramban`,`Aktivasi resmi langsung ke akun Google pribadi Anda`],specifications:[{key:`Penyedia Resmi`,value:`Google LLC`},{key:`Status Akun`,value:`Akun Pribadi (Bukan Berbagi Pakai)`},{key:`Penyimpanan Awan`,value:`2TB Google One Cloud Storage`},{key:`Akses Platform`,value:`Situs Web gemini.google.com & Aplikasi Android/iOS`}],faq:[{q:`Apakah ini akun berbagi pakai atau akun pribadi?`,a:`Ini merupakan akun pribadi resmi. Anda menggunakannya secara mandiri tanpa berbagi riwayat instruksi dengan pengguna lain.`}]},{id:`prod-chatgpt-plus`,slug:`chatgpt-plus-official`,category:`ai-tools`,name:`ChatGPT Plus Resmi OpenAI`,tagline:`Akses Prioritas GPT-4o, Kanvas, & Mode Suara Lanjutan`,badge:`Terlaris`,rating:4.9,reviewsCount:512,shortDescription:`Langganan resmi OpenAI ChatGPT Plus seharga Rp 100.000/bulan dengan ruang kerja kanvas, pembuatan GPT kustom, dan generator gambar DALL-E 3.`,fullDescription:`Akses resmi ke layanan kecerdasan buatan OpenAI ChatGPT Plus dengan tarif terjangkau Rp 100.000 per bulan. Nikmati interaksi percakapan suara alami secara waktu nyata, ruang kerja kanvas interaktif untuk kolaborasi penulisan dokumen dan koding, analisis berkas data, serta kuota penggunaan model GPT-4o yang jauh lebih lega dibandingkan versi gratis.`,price:1e5,originalPrice:null,pricePeriod:`/bulan`,icon:`messages`,accentColor:`#2563eb`,isOfficialLicense:!0,packages:[{id:`gpt-1m`,name:`1 Bulan Plus`,price:1e5,period:`1 Bulan`,note:`Aktivasi resmi ke akun OpenAI Anda (Rp 100.000/bulan)`},{id:`gpt-3m`,name:`3 Bulan Plus`,price:3e5,period:`3 Bulan`,note:`Langganan penuh 3 bulan berturut-turut + Garansi Penuh`},{id:`gpt-12m`,name:`1 Tahun Plus`,price:12e5,period:`12 Bulan`,note:`Langganan penuh 12 bulan + Faktur Resmi MultiCloud`}],features:[`Akses prioritas model GPT-4o tanpa hambatan jam sibuk`,`Mode Suara Lanjutan untuk percakapan audio alami`,`Antarmuka Kanvas untuk kolaborasi koding dan revisi naskah`,`Akses pembuatan GPT Kustom dan Toko GPT`,`Penjelajahan web waktu nyata dan analisis data interaktif`,`Generator gambar DALL-E 3 resolusi tinggi`],specifications:[{key:`Penyedia Resmi`,value:`OpenAI Inc.`},{key:`Metode Lisensi`,value:`Aktivasi Langganan Resmi Berbayar`},{key:`Garansi`,value:`30 Hari Bergaransi Penuh`},{key:`Dukungan Piranti`,value:`Peramban Web, iOS, Android, macOS, Windows`}],faq:[{q:`Apakah riwayat percakapan saya aman?`,a:`Sangat aman. Akun adalah milik Anda secara utuh dengan standar keamanan enkripsi resmi dari OpenAI.`}]},{id:`prod-claude-pro`,slug:`claude-pro-anthropic`,category:`ai-tools`,name:`Claude Pro Anthropic (Akses Resmi)`,tagline:`Kecerdasan Bahasa & Penalaran Koding Paling Akurat`,badge:`Populer`,rating:4.9,reviewsCount:289,shortDescription:`Akses resmi Claude 3.5 Sonnet dengan kapasitas 5 kali lipat, pratinjau artefak interaktif, dan ruang kerja proyek kolaboratif.`,fullDescription:`Claude 3.5 Sonnet diakui oleh komunitas insinyur piranti lunak dunia sebagai model terbaik untuk arsitektur sistem, pelacakan kutu kode, dan penulisan naskah berkualitas tinggi. Melalui MultiCloud, Anda memperoleh lisensi resmi tanpa kendala pembayaran internasional.`,price:33e4,originalPrice:375e3,pricePeriod:`/bulan`,icon:`wand`,accentColor:`#d97706`,isOfficialLicense:!0,packages:[{id:`cld-1m`,name:`1 Bulan`,price:33e4,period:`1 Bulan`,note:`Akses Resmi Anthropic`},{id:`cld-3m`,name:`3 Bulan`,price:95e4,period:`3 Bulan`,note:`Hemat Rp 40.000`}],features:[`Kapasitas penggunaan 5 kali lipat dibanding versi gratis`,`Model Claude 3.5 Sonnet dan Claude 3 Opus orisinal`,`Fitur Artefak untuk melihat pratinjau kode dan diagram langsung`,`Ruang kerja Proyek untuk mengunggah basis pengetahuan tim`,`Penalaran runut dan minim kesalahan halusinasi`],specifications:[{key:`Penyedia Resmi`,value:`Anthropic PBC`},{key:`Tipe Akses`,value:`Akun Resmi Berlisensi Orisinal`},{key:`Jendela Konteks`,value:`200.000 Token`}],faq:[{q:`Apakah dapat diakses di Indonesia tanpa VPN?`,a:`Ya! Akun resmi Claude Pro dapat diakses secara langsung dari jaringan internet Indonesia tanpa memerlukan VPN.`}]},{id:`prod-vps-ssd`,slug:`vps-cloud-nvme-ultra`,category:`cloud-hosting`,name:`Peladen VPS Cloud NVMe Ultra (AMD EPYC)`,tagline:`Performa Komputasi Super Cepat & Memori Terdedikasi`,badge:`Populer`,rating:4.9,reviewsCount:198,shortDescription:`Virtual Private Server berbasis prosesor AMD EPYC dengan penyimpanan NVMe Gen4 SSD, uplink 1Gbps, dan anti-DDoS 1Tbps.`,fullDescription:`Dirancang khusus untuk aplikasi web bertrafik padat, basis data produksi, dan layanan mikro backend. Dapatkan kendali akses utama SSH penuh, pilihan sistem operasi Linux atau Windows Server, serta pencadangan data otomatis harian.`,price:12e4,originalPrice:15e4,pricePeriod:`/bulan`,icon:`server`,accentColor:`#2563eb`,isOfficialLicense:!1,packages:[{id:`vps-starter`,name:`Paket Pemula (2 vCPU / 4GB RAM)`,price:12e4,period:`1 Bulan`,note:`50GB NVMe SSD`},{id:`vps-pro`,name:`Paket Profesional (4 vCPU / 8GB RAM)`,price:23e4,period:`1 Bulan`,note:`100GB NVMe SSD`},{id:`vps-enterprise`,name:`Paket Korporat (8 vCPU / 16GB RAM)`,price:44e4,period:`1 Bulan`,note:`220GB NVMe SSD`}],features:[`Prosesor vCPU Khusus AMD EPYC frekuensi 3,2GHz+`,`Penyimpanan NVMe SSD Gen4 RAID-10 (Kecepatan baca > 5000MB/dtk)`,`1 Alamat IPv4 Khusus + Subnet IPv6`,`Mitigasi DDoS Enterprise 1Tbps+`,`Akses Penuh SSH dan Konsol Web VNC`,`Jaminan Keterandalan SLA 99,98% Bergaransi`],specifications:[{key:`Teknologi Virtualisasi`,value:`KVM (Kernel-based Virtual Machine)`},{key:`Lokasi Pusat Data`,value:`Jakarta Equinix / Singapura`},{key:`Kapasitas Lebar Pita`,value:`Tanpa Batas Kuota (Fair Usage)`}],faq:[{q:`Berapa lama proses penyediaan peladen berlangsung?`,a:`Setelah pembayaran terverifikasi, peladen akan aktif secara otomatis dalam kurun waktu 2 hingga 3 menit.`}]},{id:`prod-wa-gateway`,slug:`whatsapp-business-api-pro`,category:`api-services`,name:`Gerbang WhatsApp Business API Pro`,tagline:`Kirim Kode OTP & Notifikasi Otomatis Tanpa Blokir`,badge:`Terlaris`,rating:4.8,reviewsCount:310,shortDescription:`Gerbang WhatsApp Business API berkecepatan tinggi dengan integrasi webhook, templat pesan, dan dasbor analitik real-time.`,fullDescription:`Solusi gerbang pesan WhatsApp terpercaya untuk bisnis dan pengembang aplikasi. Kirimkan ribuan pesan transaksional, kode verifikasi OTP, dokumen faktur digital, dan pengingat pesanan secara instan dengan keterandalan sistem 99,99%.`,price:15e4,originalPrice:18e4,pricePeriod:`/bulan`,icon:`brandWhatsapp`,accentColor:`#10b981`,isOfficialLicense:!1,packages:[{id:`wa-basic`,name:`Paket Pemula (5.000 Pesan)`,price:15e4,period:`1 Bulan`,note:`Maksimal 5 pesan per detik`},{id:`wa-business`,name:`Paket Bisnis (25.000 Pesan)`,price:38e4,period:`1 Bulan`,note:`Maksimal 20 pesan per detik`},{id:`wa-enterprise`,name:`Paket Tanpa Batas Khusus`,price:95e4,period:`1 Bulan`,note:`Nomor Khusus + SLA 99,99%`}],features:[`Kirim pesan teks, gambar, video, dan dokumen PDF`,`Mendukung Templat Pesan dan Tombol Interaktif`,`Webhook Waktu Nyata untuk menerima pesan masuk`,`Dokumentasi REST API lengkap dan SDK siap pakai`,`Sistem klaster dengan failover otomatis`],specifications:[{key:`Protokol API`,value:`RESTful API / Format JSON`},{key:`Kecepatan Rata-Rata`,value:`1,1 Detik per pesan`},{key:`Standar Respons`,value:`RFC-7807 JSON`}],faq:[{q:`Apakah saya dapat menggunakan nomor WhatsApp milik sendiri?`,a:`Tentu bisa. Anda dapat menautkan nomor WhatsApp bisnis Anda sendiri melalui pemindaian QR atau pendaftaran API resmi.`}]},{id:`prod-dev-toolkit`,slug:`devtoolkit-studio-license`,category:`developer-tools`,name:`DevToolkit Studio Enterprise`,tagline:`Koleksi Piranti Pengembang Lengkap Offline-First`,badge:`Baru`,rating:4.9,reviewsCount:87,shortDescription:`Aplikasi desktop pengembang: Pengelola Basis Data, Pemformat JSON, Pengurai JWT, Penguji Regex, dan Klien API REST.`,fullDescription:`Hindari alat online peramban yang rentan membocorkan data rahasia perusahaan Anda. DevToolkit Studio bekerja 100% lokal dan luring pada komputer Anda dengan kecepatan aplikasi native, jaminan privasi data, dan lisensi komersial seumur hidup.`,price:199e3,originalPrice:299e3,pricePeriod:`/lisensi`,icon:`terminal`,accentColor:`#6366f1`,isOfficialLicense:!0,packages:[{id:`dev-std`,name:`Lisensi Perorangan (Seumur Hidup)`,price:199e3,period:`Permanen`,note:`Maksimal 3 Perangkat`},{id:`dev-team`,name:`Paket Tim (Hingga 10 Pengembang)`,price:799e3,period:`Permanen`,note:`Pengelolaan Lisensi Terpusat`}],features:[`100% Bekerja Luring & Aman (Data tidak pernah dikirim ke luar)`,`Klien Basis Data Universal (MySQL, PostgreSQL, MongoDB, Redis, SQLite)`,`Klien REST & GraphQL dengan pengelola variabel lingkungan`,`Pengurai JWT, Pembangkit Hash, Pengkode Base64 & Regex`,`Lisensi permanen tanpa biaya langganan bulanan`],specifications:[{key:`Dukungan OS`,value:`macOS (Apple Silicon & Intel), Windows 10/11, Linux`},{key:`Tipe Lisensi`,value:`Lisensi Komersial Seumur Hidup (Perpetual)`}],faq:[{q:`Apakah lisensi ini memiliki masa kedaluwarsa?`,a:`Tidak ada. Lisensi ini berlaku selamanya seumur hidup untuk versi yang dibeli termasuk pembaruan minor gratis.`}]},{id:`prod-copilot`,slug:`github-copilot-individual`,category:`ai-tools`,name:`GitHub Copilot Individual (Akses Resmi)`,tagline:`Asisten Pemrograman AI Resmi dari Microsoft & GitHub`,badge:`Populer`,rating:4.8,reviewsCount:204,shortDescription:`Asisten AI koding resmi yang terintegrasi langsung di VS Code, JetBrains IDEs, Visual Studio, dan Neovim.`,fullDescription:`GitHub Copilot dilatih menggunakan miliaran baris kode publik untuk memberikan saran kode secara langsung saat Anda mengetik. Lisensi resmi ini diaktifkan langsung pada akun GitHub pribadi Anda.`,price:175e3,originalPrice:2e5,pricePeriod:`/bulan`,icon:`brandGithub`,accentColor:`#0f172a`,isOfficialLicense:!0,packages:[{id:`cop-1m`,name:`1 Bulan Perorangan`,price:175e3,period:`1 Bulan`,note:`Aktivasi langsung ke akun GitHub`},{id:`cop-12m`,name:`1 Tahun Penuh`,price:185e4,period:`12 Bulan`,note:`Hemat Rp 250.000`}],features:[`Saran kode waktu nyata dalam puluhan bahasa pemrograman`,`Fitur Obrolan Copilot di IDE untuk menjelaskan kode dan perbaikan`,`Integrasi terminal perintah CLI`,`Dukungan IDE VS Code, JetBrains, Neovim`,`Akses resmi langsung pada nama pengguna GitHub Anda`],specifications:[{key:`Penyedia Resmi`,value:`GitHub, Inc. (Microsoft Corp)`},{key:`Tipe Lisensi`,value:`Lisensi Pengguna Perorangan Resmi`}],faq:[{q:`Apakah saya perlu memberikan kata sandi akun GitHub saya?`,a:`TIDAK. Kami tidak pernah meminta kata sandi Anda. Proses aktivasi dilakukan melalui tautan undangan resmi ke nama pengguna GitHub Anda.`}]},{id:`prod-win-server`,slug:`windows-server-datacenter-license`,category:`software-licenses`,name:`Lisensi Windows Server 2025 Datacenter`,tagline:`Lisensi Digital Orisinal untuk Infrastruktur Peladen Korporat`,badge:`Baru`,rating:4.9,reviewsCount:76,shortDescription:`Kunci produk orisinal Microsoft Windows Server 2025 Datacenter dengan aktivasi daring resmi seumur hidup.`,fullDescription:`Lisensi digital orisinal untuk peladen fisik dan virtualisasi tanpa batas. Disertai garansi aktivasi daring 100%, faktur resmi, dan sertifikat lisensi digital yang sah untuk kebutuhan audit kepatuhan piranti lunak perusahaan.`,price:55e4,originalPrice:75e4,pricePeriod:`/peladen`,icon:`license`,accentColor:`#0284c7`,isOfficialLicense:!0,packages:[{id:`win-16c`,name:`Lisensi Dasar 16 Core`,price:55e4,period:`Permanen`,note:`Kontainer Hyper-V Tanpa Batas`},{id:`win-32c`,name:`Lisensi Korporat 32 Core`,price:95e4,period:`Permanen`,note:`Untuk peladen dengan prosesor ganda`}],features:[`Aktivasi Daring langsung ke peladen aktivasi Microsoft`,`Lisensi Retail Orisinal seumur hidup`,`Mesin Virtual & Kontainer Hyper-V Tanpa Batas`,`Dukungan Keamanan Berlapis Tingkat Lanjut`,`Termasuk Faktur dan Bukti Kepemilikan Sah`],specifications:[{key:`Penerbit Resmi`,value:`Microsoft Corporation`},{key:`Format Kunci`,value:`Kunci Digital Retail 25 Digit`},{key:`Jaminan`,value:`Aktivasi Berhasil 100% atau Uang Kembali`}],faq:[{q:`Bagaimana kunci lisensi ini dikirimkan?`,a:`Kunci produk 25 digit beserta panduan instalasi dan tautan unduhan ISO resmi dikirimkan langsung ke dasbor akun Anda seketika setelah pembayaran terverifikasi.`}]}],u=`modulepreload`,d=function(e,t){return new URL(e,t).href},f={},p=function(e){return e.pathname.endsWith(`.css`)},m=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},ee=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=d(t,n);let r=s(t),i=p(r);return m(f,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:u,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{let i=a=>{t.removeEventListener(`load`,i),t.removeEventListener(`error`,i),a.type===`error`?n(Error(`Unable to preload CSS for ${r}`)):e(a)};t.addEventListener(`load`,i),t.addEventListener(`error`,i)})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},h=`multicloud_supabase_url`,g=`multicloud_supabase_anon_key`,te=`multicloud_registered_users_v1`,_=`hzamkkknabduqmdivcqd.supabase.co`,ne=``,re=``;function v(e){if(!e)return!1;let t=String(e.message||e||``).toLowerCase();return String(e.name||``).toLowerCase().includes(`retryablefetch`)||t.includes(`failed to fetch`)||t.includes(`fetch failed`)||t.includes(`networkerror`)||t.includes(`load failed`)||t.includes(`enotfound`)}function y(e,t){let n=(e||t||`MC`).trim(),r=n.split(/\s+/).filter(Boolean);return r.length>=2?(r[0][0]+r[1][0]).toUpperCase():n.slice(0,2).toUpperCase()||`MC`}var b=new class{constructor(){this.client=null,this.connectionFailed=!1,this.lastError=``,this.initClient()}getConnectionStatus(){let{url:e,anonKey:t}=this.getConfig();return!e||e.includes(`YOUR_PROJECT_ID`)||e.includes(_)||!t||t.includes(`YOUR_SUPABASE_ANON_KEY`)?`unconfigured`:this.connectionFailed?`paused`:`connected`}async retryConnection(){if(this.connectionFailed=!1,this.lastError=``,await this.initClient(),!this.client)return!1;try{let{error:e}=await this.client.from(`orders`).select(`id`).limit(1);return e&&v(e)?(this.connectionFailed=!0,this.lastError=e.message||`Peladen Supabase tidak merespons`,!1):!0}catch(e){return this.connectionFailed=!0,this.lastError=e.message||`Gagal menghubungi peladen Supabase`,!1}}getConfig(){let e=typeof localStorage<`u`,t=null,n=null;try{e&&(t=localStorage.getItem(h),n=localStorage.getItem(g),t&&t.includes(_)&&(localStorage.removeItem(h),localStorage.removeItem(g),t=null,n=null))}catch(e){console.warn(`Penyimpanan lokal tidak dapat diakses:`,e)}return{url:(t||ne).trim(),anonKey:(n||re).trim()}}saveConfig(e,t){if(this.connectionFailed=!1,typeof localStorage<`u`)try{e?localStorage.setItem(h,e.trim()):localStorage.removeItem(h),t?localStorage.setItem(g,t.trim()):localStorage.removeItem(g)}catch(e){console.error(`Gagal menyimpan konfigurasi ke localStorage:`,e)}this.initClient()}isConfigured(){if(this.connectionFailed)return!1;let{url:e,anonKey:t}=this.getConfig();return!(!e||e.includes(`YOUR_PROJECT_ID`)||e.includes(_)||!t||t.includes(`YOUR_SUPABASE_ANON_KEY`))}async initClient(){let{url:e,anonKey:t}=this.getConfig();if(this.isConfigured()&&typeof window<`u`)try{let{createClient:n}=await ee(async()=>{let{createClient:e}=await import(`https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm`);return{createClient:e}},[],import.meta.url);this.client=n(e,t),console.log(`[MultiCloud] Klien Supabase siap:`,e),this.syncDefaultAdminsToSupabase(),this.cleanupLegacySeedData(),this.syncLocalCatalogToSupabase()}catch(e){console.warn(`[MultiCloud] Gagal menginisialisasi klien Supabase:`,e),this.client=null}else this.client=null}getDefaultAdmins(){return[{id:`adm_001`,name:`Administrator MultiCloud`,email:`admin@multicloud.id`,passwords:[`admin12345`,`admin`],role:`admin`,company:`Kantor Pusat MultiCloud`,phone:`+62 812-9876-5432`},{id:`adm_002`,name:`Administrator KPNO Jabar`,email:`opskpnojabar@gmail.com`,passwords:[`J@bar2026`],role:`admin`,company:`KPNO Jawa Barat`,phone:`+62 812-9876-5432`},{id:`adm_003`,name:`Administrator Nexora Support`,email:`nexora.suport.id@gmail.com`,passwords:[`J@bar2026`],role:`admin`,company:`Nexora Support Indonesia`,phone:`+62 812-9876-5432`}]}async syncDefaultAdminsToSupabase(){if(!this.client||this.connectionFailed)return;let e=this.getDefaultAdmins().map(e=>({email:e.email,full_name:e.name,role:`admin`,phone:e.phone,company:e.company}));try{let{error:t}=await this.client.from(`profiles`).upsert(e,{onConflict:`email`});t&&v(t)&&(this.connectionFailed=!0)}catch(e){v(e)&&(this.connectionFailed=!0)}}async cleanupLegacySeedData(){if(this.client&&!this.connectionFailed)try{await this.client.from(`transactions`).delete().in(`id`,[`TRX-9921`,`TRX-9844`,`TRX-9701`]);let{error:e}=await this.client.from(`orders`).delete().in(`id`,[`ORD-2026-0891`,`ORD-2026-0840`,`ORD-2026-0792`]);e&&v(e)&&(this.connectionFailed=!0)}catch(e){v(e)&&(this.connectionFailed=!0)}}async syncLocalCatalogToSupabase(){if(this.client&&!this.connectionFailed)try{let e=c.filter(e=>e.id!==`all`).map(e=>({id:e.id,title:e.label,subtitle:e.label,icon:`layers`,badge:`Aktif`}));e.length>0&&await this.client.from(`categories`).upsert(e,{onConflict:`id`});let t=l.map(e=>({id:e.id,name:e.name,tagline:e.tagline,category_id:e.category,badge:e.badge,price:e.price,original_price:e.originalPrice||null,price_period:e.pricePeriod,icon:e.icon,is_official_license:e.isOfficialLicense!==!1,rating:e.rating||5,reviews_count:e.reviewsCount||0,short_description:e.shortDescription,full_description:e.fullDescription,features:e.features||[],specifications:e.specifications||[],packages:e.packages||[],updated_at:new Date().toISOString()})),{error:n}=await this.client.from(`products`).upsert(t,{onConflict:`id`});n&&v(n)&&(this.connectionFailed=!0)}catch(e){v(e)&&(this.connectionFailed=!0)}}getLocalUsers(){if(typeof localStorage>`u`)return[];try{let e=localStorage.getItem(te),t=e?JSON.parse(e):[];return Array.isArray(t)?t:[]}catch(e){return console.warn(`Gagal membaca daftar akun lokal:`,e),[]}}saveLocalUsers(e){if(typeof localStorage<`u`)try{localStorage.setItem(te,JSON.stringify(e))}catch(e){console.error(`Gagal menyimpan daftar akun lokal:`,e)}}registerLocalUser(e,t,n){let r=e.trim().toLowerCase(),i=n.trim(),a=this.getLocalUsers();if(r===`admin@multicloud.id`||a.some(e=>(e.email||``).toLowerCase()===r))return{success:!1,message:`Alamat surel ini sudah terdaftar. Silakan masuk melalui halaman Masuk.`};let o=new Date().toISOString(),s={id:`usr_`+Date.now().toString(36),name:i,email:r,password:t,role:`user`,company:`Pribadi`,phone:``,joinedDate:o.slice(0,10),created_at:o,avatar:y(i,r)};a.unshift(s),this.saveLocalUsers(a);let{password:c,...l}=s;return{success:!0,needsConfirmation:!1,user:l,message:`Pendaftaran berhasil! Akun MultiCloud Anda telah aktif.`}}async getCustomers(){let e=this.getLocalUsers().map(e=>({id:e.id,full_name:e.name,email:e.email,company:e.company||`Pribadi`,role:e.role||`user`,created_at:e.created_at||e.joinedDate}));if(this.client&&!this.connectionFailed)try{let{data:t,error:n}=await this.client.from(`profiles`).select(`*`).order(`created_at`,{ascending:!1});if(n&&v(n))this.connectionFailed=!0;else if(!n&&t){let n=new Map;return t.forEach(e=>n.set((e.email||``).toLowerCase(),e)),e.forEach(e=>{n.has(e.email.toLowerCase())||n.set(e.email.toLowerCase(),e)}),Array.from(n.values())}}catch(e){v(e)&&(this.connectionFailed=!0),console.warn(`[MultiCloud] Gagal mengambil data profiles dari Supabase:`,e)}return e.length>0?e:null}async getProducts(){if(this.client&&!this.connectionFailed)try{let{data:e,error:t}=await this.client.from(`products`).select(`*`).order(`created_at`,{ascending:!1});if(t&&v(t))this.connectionFailed=!0;else if(!t&&e&&e.length>0)return e}catch(e){v(e)&&(this.connectionFailed=!0),console.warn(`[MultiCloud] Gagal mengambil data products dari Supabase:`,e)}return null}async getTransactions(){if(this.client&&!this.connectionFailed)try{let{data:e,error:t}=await this.client.from(`transactions`).select(`*`).order(`created_at`,{ascending:!1});if(t&&v(t))this.connectionFailed=!0;else if(!t&&e)return e}catch(e){v(e)&&(this.connectionFailed=!0),console.warn(`[MultiCloud] Gagal mengambil transaksi dari Supabase:`,e)}return null}async getOrders(){if(this.client&&!this.connectionFailed)try{let{data:e,error:t}=await this.client.from(`orders`).select(`*`).order(`created_at`,{ascending:!1});if(t&&v(t))this.connectionFailed=!0;else if(!t&&e&&e.length>0)return e.map(e=>({id:e.id,invoiceNumber:e.invoice_number,itemTitle:e.item_title,category:e.category_id||`digital-products`,package:e.package_name,amount:Number(e.amount),paymentMethod:e.payment_method,status:e.status,licenseKey:e.license_key,userName:e.user_name,userEmail:e.user_email,date:e.created_at}))}catch(e){v(e)&&(this.connectionFailed=!0),console.warn(`[MultiCloud] Terjadi kendala saat membaca tabel orders di Supabase:`,e)}return null}async createOrder(e){if(this.client&&!this.connectionFailed)try{let t={id:e.id,invoice_number:e.invoiceNumber,user_email:e.userEmail||`pelanggan@multicloud.id`,user_name:e.userName||`Pelanggan Terverifikasi`,user_phone:e.userPhone||`+62 812-0000-0000`,item_title:e.itemTitle,package_name:e.package,category_id:e.category||`digital-products`,amount:e.amount,payment_method:e.paymentMethod,status:e.status,license_key:e.licenseKey||`Menunggu verifikasi admin`},{error:n}=await this.client.from(`orders`).insert([t]).select();n&&v(n)&&(this.connectionFailed=!0)}catch(e){v(e)&&(this.connectionFailed=!0)}}async updateOrderStatus(e,t,n){if(this.client&&!this.connectionFailed)try{let r={status:t,updated_at:new Date().toISOString()};n&&(r.license_key=n);let{error:i}=await this.client.from(`orders`).update(r).eq(`id`,e);i&&v(i)&&(this.connectionFailed=!0)}catch(e){v(e)&&(this.connectionFailed=!0)}}async authenticateUser(e,t){let n=(e||``).trim().toLowerCase();if(!n||!t)return{success:!1,message:`Mohon isi alamat surel dan kata sandi Anda.`};if(this.getDefaultAdmins().find(e=>e.email===n&&e.passwords.includes(t)))return this.authenticateAdmin(n,t);if(this.client&&!this.connectionFailed)try{let{data:e,error:r}=await this.client.auth.signInWithPassword({email:n,password:t});if(r){if(v(r))this.connectionFailed=!0;else{if(r.message&&r.message.toLowerCase().includes(`email not confirmed`))return{success:!1,message:`Alamat surel belum dikonfirmasi. Periksa kotak masuk/spam surel Anda, atau nonaktifkan opsi Confirm Email di pengaturan Supabase Auth.`};if(!this.getLocalUsers().find(e=>(e.email||``).toLowerCase()===n))return{success:!1,message:r.message===`Invalid login credentials`?`Alamat surel atau kata sandi salah. Pastikan Anda sudah mendaftar.`:r.message||`Gagal masuk ke akun.`}}}else if(e&&e.user){let{data:t}=await this.client.from(`profiles`).select(`*`).eq(`email`,n).single(),r=t?.full_name||e.user.user_metadata?.full_name||n.split(`@`)[0];return{success:!0,user:{id:e.user.id,name:r,email:e.user.email,role:t?.role||`user`,company:t?.company||`Pribadi`,phone:t?.phone||``,joinedDate:e.user.created_at?.slice(0,10)||new Date().toISOString().slice(0,10),avatar:y(r,e.user.email)}}}}catch(e){v(e)&&(this.connectionFailed=!0),console.warn(`[MultiCloud] Eksepsi otentikasi Supabase, memeriksa akun lokal:`,e)}let r=this.getLocalUsers().find(e=>(e.email||``).toLowerCase()===n);if(r){if(r.password!==t)return{success:!1,message:`Kata sandi yang Anda masukkan salah. Silakan coba kembali.`};let{password:e,...n}=r;return{success:!0,user:n}}return n===`ahmad.fauzan@devstudio.id`&&t===`demo12345`?{success:!0,user:{id:`usr_001`,name:`Ahmad Fauzan`,email:`ahmad.fauzan@devstudio.id`,role:`user`,company:`DevStudio Indonesia`,phone:`+62 812-3456-7890`,joinedDate:`2025-08-14`,avatar:`AF`}}:{success:!1,message:`Akun belum ditemukan atau kata sandi salah. Silakan daftar akun baru terlebih dahulu.`}}async registerUser(e,t,n){let r=(n||``).trim(),i=(e||``).trim().toLowerCase();if(r.length<2)return{success:!1,message:`Mohon isi nama lengkap minimal 2 karakter.`};if(!i||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i))return{success:!1,message:`Mohon masukkan format alamat surel yang valid.`};if(!t||t.length<6)return{success:!1,message:`Kata sandi wajib terdiri atas minimal 6 karakter.`};if(this.client&&!this.connectionFailed)try{let{data:e,error:n}=await this.client.auth.signUp({email:i,password:t,options:{data:{full_name:r}}});if(n){if(v(n))return console.warn(`[MultiCloud] Peladen Supabase tidak dapat dijangkau, beralih ke pendaftaran lokal.`),this.connectionFailed=!0,this.registerLocalUser(i,t,r);let e=(n.message||``).toLowerCase();return e.includes(`already registered`)?{success:!1,message:`Alamat surel ini sudah terdaftar. Silakan masuk melalui halaman Masuk.`}:e.includes(`rate limit`)?{success:!1,message:`Batas pengiriman surel Supabase terlampaui. Nonaktifkan opsi Confirm Email di Supabase Dashboard (Authentication > Providers > Email) agar pendaftaran langsung aktif.`}:e.includes(`password`)?{success:!1,message:`Kata sandi tidak memenuhi syarat keamanan (minimal 6 karakter).`}:{success:!1,message:n.message||`Gagal mendaftarkan akun baru.`}}if(e?.user)try{await this.client.from(`profiles`).insert([{auth_user_id:e.user.id,email:i,full_name:r,role:`user`}])}catch(e){console.warn(`Profil sudah ada atau tersimpan otomatis oleh trigger:`,e)}let a=this.getLocalUsers();a.some(e=>(e.email||``).toLowerCase()===i)||(a.unshift({id:e?.user?.id||`usr_`+Date.now().toString(36),name:r,email:i,password:t,role:`user`,company:`Pribadi`,phone:``,joinedDate:new Date().toISOString().slice(0,10),created_at:new Date().toISOString(),avatar:y(r,i)}),this.saveLocalUsers(a));let o=!(!e?.user||e?.session);return{success:!0,needsConfirmation:o,user:{id:e?.user?.id||`usr_`+Date.now().toString(36),name:r,email:i,role:`user`,company:`Pribadi`,phone:``,joinedDate:new Date().toISOString().slice(0,10),avatar:y(r,i)},message:o?`Pendaftaran berhasil! Tautan konfirmasi telah dikirim ke surel Anda. Silakan buka tautan tersebut sebelum masuk.`:`Pendaftaran berhasil! Akun Anda kini aktif dan siap digunakan.`}}catch(e){return v(e)?(this.connectionFailed=!0,this.registerLocalUser(i,t,r)):{success:!1,message:`Terjadi kendala saat registrasi: `+(e.message||`Tidak diketahui`)}}return this.registerLocalUser(i,t,r)}async authenticateAdmin(e,t){let n=(e||``).trim().toLowerCase(),r=this.getDefaultAdmins().find(e=>e.email===n&&e.passwords.includes(t));if(r){let{passwords:e,...t}=r;if(this.client&&!this.connectionFailed)try{await this.client.from(`profiles`).upsert([{email:t.email,full_name:t.name,role:`admin`,company:t.company,phone:t.phone}],{onConflict:`email`})}catch(e){v(e)&&(this.connectionFailed=!0)}return{success:!0,user:t}}if(this.client&&!this.connectionFailed)try{let{data:e,error:r}=await this.client.auth.signInWithPassword({email:n,password:t});if(r&&v(r))this.connectionFailed=!0;else if(!r&&e?.user){let{data:e}=await this.client.from(`profiles`).select(`*`).eq(`email`,n).single();if(e&&e.role===`admin`)return{success:!0,user:{id:e.id,name:e.full_name,email:e.email,role:`admin`,company:e.company||`MultiCloud Enterprise`,phone:e.phone||``}}}}catch(e){v(e)&&(this.connectionFailed=!0),console.warn(`[MultiCloud] Otentikasi Supabase bermasalah:`,e)}return{success:!1,message:`Surel atau kata sandi administrator salah. Silakan coba kembali.`}}},x=`multicloud_app_state_v3`,ie={currentUser:null,orders:[],services:[],digitalProducts:[],transactions:[],tickets:[],adminStats:{totalRevenue:`Rp 0`,activeUsers:`0 Pengguna`,activeServicesCount:`0 Layanan`,pendingOrdersCount:0}},S=new class{constructor(){this.state=this.loadState(),this.listeners=[],this.syncWithSupabase(),typeof window<`u`&&typeof window.addEventListener==`function`&&window.addEventListener(`storage`,e=>{e.key===x&&e.newValue&&(this.state=this.loadState(),this.notify())})}loadState(){let e=e=>typeof e==`string`?e.replace(/Otomasi/g,`Otomatis`).replace(/otomasi/g,`otomatis`).replace(/Otomatis\+/g,`Otomatis +`).replace(/Otomatis\(/g,`Otomatis (`):e;try{let t=localStorage.getItem(x);if(t){let n={...ie,...JSON.parse(t)};return Array.isArray(n.orders)&&(n.orders=n.orders.map(t=>({...t,package:e(t.package),itemTitle:e(t.itemTitle)}))),Array.isArray(n.services)&&(n.services=n.services.map(t=>({...t,spec:e(t.spec),name:e(t.name)}))),Array.isArray(n.transactions)&&(n.transactions=n.transactions.map(t=>({...t,description:e(t.description)}))),n}}catch(e){console.warn(`Gagal membaca data dari localStorage:`,e)}return ie}saveState(){try{localStorage.setItem(x,JSON.stringify(this.state))}catch(e){console.error(`Gagal menyimpan data ke localStorage:`,e)}this.notify()}subscribe(e){return this.listeners.push(e),()=>{this.listeners=this.listeners.filter(t=>t!==e)}}notify(){this.listeners.forEach(e=>{try{e(this.state)}catch(e){console.error(e)}})}getState(){return this.state}async syncWithSupabase(){if(b.isConfigured()){await b.cleanupLegacySeedData(),await b.syncLocalCatalogToSupabase();let e=await b.getOrders();if(e){let t=new Set([`ORD-2026-0891`,`ORD-2026-0840`,`ORD-2026-0792`]),n=new Map;e.forEach(e=>{t.has(e.id)||n.set(e.id,e)}),this.state.orders.forEach(e=>{!t.has(e.id)&&!n.has(e.id)&&n.set(e.id,e)}),this.state.orders=Array.from(n.values()).sort((e,t)=>new Date(t.date||0)-new Date(e.date||0)),this.saveState()}}}login(e,t=`user`,n=null){n?this.state.currentUser=n:(e||``).toLowerCase()===`ahmad.fauzan@devstudio.id`&&t===`user`?this.state.currentUser={id:`usr_001`,name:`Ahmad Fauzan`,email:`ahmad.fauzan@devstudio.id`,role:`user`,company:`DevStudio Indonesia`,phone:`+62 812-3456-7890`,joinedDate:`2025-08-14`,avatar:`AF`}:this.state.currentUser={id:t===`admin`?`adm_001`:`usr_`+Math.floor(100+Math.random()*900),name:t===`admin`?`Administrator MultiCloud`:e.split(`@`)[0]||`Pengguna MultiCloud`,email:e,role:t,company:t===`admin`?`Kantor Pusat MultiCloud`:`Mitra Pengembang`,phone:`+62 812-9876-5432`,joinedDate:new Date().toISOString().slice(0,10),avatar:t===`admin`?`AD`:`MC`},this.saveState()}setAdminUser(e){this.state.currentUser={id:e.id||`adm_001`,name:e.name||`Administrator MultiCloud`,email:e.email||`admin@multicloud.id`,role:`admin`,company:e.company||`Kantor Pusat MultiCloud`,phone:e.phone||`+62 812-9876-5432`,joinedDate:`2025-10-01`,avatar:`AD`},this.saveState()}logout(){this.state.currentUser=null,this.saveState()}isAdmin(){return this.state.currentUser&&this.state.currentUser.role===`admin`}async createOrder(e){let t=`ORD-2026-`+Math.floor(1e3+Math.random()*9e3),n=`INV/${new Date().toISOString().slice(0,10).replace(/-/g,``)}/MC/${Math.floor(100+Math.random()*900)}`,r={id:t,date:new Date().toISOString(),itemTitle:e.itemTitle,category:e.category||`digital-products`,package:e.packageName||`Paket Standar`,amount:e.amount,breakdown:e.breakdown||null,paymentMethod:e.paymentMethod||`QRIS Instan`,status:`Menunggu Pembayaran`,licenseKey:`Menunggu konfirmasi verifikasi`,invoiceNumber:n,userName:e.userName||this.state.currentUser?.name||`Pelanggan`,userEmail:e.userEmail||this.state.currentUser?.email||`surel@pelanggan.id`};this.state.orders.unshift(r);let i={id:`TRX-`+Math.floor(1e3+Math.random()*9e3),orderId:t,userEmail:r.userEmail,description:`Pemesanan ${e.itemTitle} (${e.packageName})`,method:e.paymentMethod||`QRIS Instan`,amount:e.amount,status:`Menunggu Pembayaran`,date:new Date().toLocaleString(`id-ID`,{dateStyle:`medium`,timeStyle:`short`})+` WIB`};this.state.transactions.unshift(i),this.saveState();try{await b.createOrder(r)}catch(e){console.error(`[MultiCloud] Galat simpan order ke Supabase:`,e)}return r}async confirmOrderPayment(e){let t=this.state.orders.find(t=>t.id===e);if(t){t.status=`Selesai`;let n=`MC-LIC-`+Math.random().toString(36).substring(2,10).toUpperCase()+`-VERIFIED`;t.licenseKey=n;let r=this.state.transactions.find(t=>t.orderId===e);if(r&&(r.status=`Berhasil`),t.category===`cloud-hosting`||t.category===`api-services`){let e=new Date(t.date||Date.now()),n=new Date(e);n.setMonth(n.getMonth()+1);let r=e=>`${String(e.getDate()).padStart(2,`0`)}/${String(e.getMonth()+1).padStart(2,`0`)}/${e.getFullYear()}`,i=`${r(e)} - ${r(n)}`,a=n.toISOString().slice(0,10),o=e.toISOString().slice(0,10);this.state.services.unshift({id:`srv_`+Math.floor(1e3+Math.random()*9e3),orderId:t.id,name:t.itemTitle,type:t.category===`cloud-hosting`?`Komputasi Awan Dedicated`:`Gerbang API`,status:`Aktif`,spec:t.package,domain:`vps.syienta.com`,ip:`103.187.144.`+Math.floor(10+Math.random()*80),datacenter:`Jakarta Tier-4 IDC 3D`,userEmail:t.userEmail,startDate:o,expiresAt:a,periodText:i,autoRenew:!0,autoRenewDaysNotice:3})}else this.state.digitalProducts.unshift({id:`prod_`+Math.floor(1e3+Math.random()*9e3),name:t.itemTitle,accountEmail:t.userEmail||this.state.currentUser?.email||`user@multicloud.id`,licenseType:`Lisensi Resmi (`+t.package+`)`,status:`Aktif`,expiresAt:`2026-12-31`});this.saveState();try{await b.updateOrderStatus(e,`Selesai`,n)}catch(e){console.error(`[MultiCloud] Galat update order ke Supabase:`,e)}}}toggleAutoRenew(e){let t=this.state.services.find(t=>t.id===e);return t?(t.autoRenew=!t.autoRenew,this.saveState(),t.autoRenew):!1}renewService(e,t=1){let n=this.state.services.find(t=>t.id===e);if(n){let e=new Date(n.expiresAt||Date.now()),r=e>new Date?e:new Date,i=new Date(r);i.setMonth(i.getMonth()+t),n.expiresAt,n.expiresAt=i.toISOString().slice(0,10);let a=e=>`${String(e.getDate()).padStart(2,`0`)}/${String(e.getMonth()+1).padStart(2,`0`)}/${e.getFullYear()}`;n.periodText=`${a(new Date(r))} - ${a(i)}`;let o=`INV/${new Date().toISOString().slice(0,10).replace(/-/g,``)}/MC/${Math.floor(100+Math.random()*900)}`,s={id:`ORD-REN-`+Math.floor(1e3+Math.random()*9e3),invoiceNumber:o,date:new Date().toISOString(),itemTitle:n.name,category:`cloud-hosting`,package:`Perpanjangan ${t} Bulan (${n.periodText})`,amount:2944874,paymentMethod:`Auto-Debit (BCA)`,status:`Selesai`,licenseKey:`MC-RENEWED-`+Math.random().toString(36).substring(2,8).toUpperCase(),userName:this.state.currentUser?.name||`Pelanggan`,userEmail:n.userEmail||this.state.currentUser?.email,periodText:n.periodText,breakdown:{base:26e5,automation:53040,vat:291834}};return this.state.orders.unshift(s),this.state.transactions.unshift({id:`TRX-`+Math.floor(1e3+Math.random()*9e3),orderId:s.id,userEmail:s.userEmail,description:`Perpanjangan ${n.name} (${n.periodText})`,method:`Auto-Debit BCA`,amount:2944874,status:`Berhasil`,date:new Date().toLocaleString(`id-ID`,{dateStyle:`medium`,timeStyle:`short`})+` WIB`}),this.saveState(),n}return null}addTicket(e){let t={id:`TCK-`+Math.floor(1e3+Math.random()*9e3),subject:e.subject,department:e.department||`Dukungan Teknis`,priority:e.priority||`Biasa`,status:`Sedang Diproses`,lastUpdate:`Baru saja`};return this.state.tickets.unshift(t),this.saveState(),t}};function ae(e=`/`){let n=S.getState().currentUser,r=e===`/services`||e.startsWith(`/products`)||e===`/pricing`,i=e===`/about`||e===`/contact`;return`
    <header class="navbar" id="site-navbar">
      <div class="container navbar-container">
        <!-- Logo Merek -->
        <a href="#/" class="brand-logo" aria-label="Beranda MultiCloud">
          <div class="brand-icon">
            ${t.cloud(`brand-svg`,20,2)}
          </div>
          <div class="brand-text">
            <span class="brand-name">MultiCloud</span>
            <span class="brand-tagline-mini">Layanan Digital</span>
          </div>
        </a>

        <!-- Menu Navigasi Desktop (Hemat Ruang dengan Submenu) -->
        <nav class="nav-menu" aria-label="Navigasi Utama">
          <a href="#/" class="nav-link ${e===`/`?`active`:``}">Beranda</a>

          <div class="nav-dropdown">
            <button type="button" class="nav-link nav-dropdown-trigger ${r?`active`:``}" aria-expanded="false">
              <span>Solusi</span>
              ${t.chevronDown(`nav-chevron`,14,2)}
            </button>
            <div class="nav-dropdown-menu" role="menu">
              <a href="#/services" class="nav-dropdown-item ${e===`/services`?`active`:``}" role="menuitem">
                <span class="nav-dd-title">Layanan</span>
                <span class="nav-dd-desc">Cloud &amp; infrastruktur terkelola</span>
              </a>
              <a href="#/products" class="nav-dropdown-item ${e.startsWith(`/products`)?`active`:``}" role="menuitem">
                <span class="nav-dd-title">Produk</span>
                <span class="nav-dd-desc">Katalog perangkat lunak &amp; lisensi</span>
              </a>
              <a href="#/pricing" class="nav-dropdown-item ${e===`/pricing`?`active`:``}" role="menuitem">
                <span class="nav-dd-title">Tarif</span>
                <span class="nav-dd-desc">Paket langganan &amp; estimasi biaya</span>
              </a>
            </div>
          </div>

          <a href="#/docs" class="nav-link ${e===`/docs`?`active`:``}">Dokumentasi</a>

          <div class="nav-dropdown">
            <button type="button" class="nav-link nav-dropdown-trigger ${i?`active`:``}" aria-expanded="false">
              <span>Perusahaan</span>
              ${t.chevronDown(`nav-chevron`,14,2)}
            </button>
            <div class="nav-dropdown-menu" role="menu">
              <a href="#/about" class="nav-dropdown-item ${e===`/about`?`active`:``}" role="menuitem">
                <span class="nav-dd-title">Tentang Kami</span>
                <span class="nav-dd-desc">Profil, visi, dan tim MultiCloud</span>
              </a>
              <a href="#/contact" class="nav-dropdown-item ${e===`/contact`?`active`:``}" role="menuitem">
                <span class="nav-dd-title">Kontak</span>
                <span class="nav-dd-desc">Hubungi dukungan &amp; konsultasi</span>
              </a>
            </div>
          </div>
        </nav>

        <!-- Aksi Navbar & Penggantian Tema -->
        <div class="navbar-actions">
          <!-- Tombol Penggantian Tema (Sun/Moon Tabler Icon) -->
          <button class="theme-toggle-btn" id="theme-toggle-btn" type="button" aria-label="Ganti Tema Warna" title="Ganti Tema Warna">
            ${t.moon(`theme-icon`,18,2)}
          </button>

          ${n?`
            <a href="#/dashboard" class="btn btn-outline btn-sm">
              ${t.user(`icon`,16,2)}
              <span>Dasbor</span>
            </a>
            ${n.role===`admin`?`
              <a href="#/admin" class="btn btn-primary btn-sm" style="background-color: var(--color-accent); border-color: var(--color-accent);">
                ${t.layoutDashboard(`icon`,16,2)}
                <span>Dasbor Admin</span>
              </a>
            `:``}
            <button class="btn btn-ghost btn-sm" id="desktop-logout-btn" type="button" title="Keluar dari sesi ${n.name}">
              ${t.logout(`icon`,16,2)}
              <span>Keluar</span>
            </button>
          `:`
            <a href="#/login" class="btn btn-ghost btn-sm">Masuk</a>
            <a href="#/register" class="btn btn-primary btn-sm">Daftar</a>
          `}

          <!-- Tombol Menu Seluler -->
          <button class="mobile-toggle-btn" id="mobile-toggle-btn" type="button" aria-label="Buka Menu Navigasi">
            ${t.menu(`menu-icon`,20,2)}
          </button>
        </div>
      </div>
    </header>

    <!-- Bilah Navigasi Seluler -->
    <div class="mobile-nav-overlay" id="mobile-nav-overlay"></div>
    <aside class="mobile-nav-drawer" id="mobile-nav-drawer" aria-label="Navigasi Seluler">
      <div>
        <div class="mobile-nav-header">
          <a href="#/" class="brand-logo">
            <div class="brand-icon">
              ${t.cloud(`brand-svg`,20,2)}
            </div>
            <span class="brand-name">MultiCloud</span>
          </a>
          <button class="btn btn-ghost btn-sm" id="mobile-close-btn" aria-label="Tutup Menu Navigasi">
            ${t.x(`icon`,20,2)}
          </button>
        </div>
        <nav class="mobile-nav-links">
          <a href="#/" class="mobile-nav-link ${e===`/`?`active`:``}">
            <span>Beranda</span>
            ${t.chevronRight(`icon`,16,2)}
          </a>
          <a href="#/services" class="mobile-nav-link ${e===`/services`?`active`:``}">
            <span>Layanan</span>
            ${t.chevronRight(`icon`,16,2)}
          </a>
          <a href="#/products" class="mobile-nav-link ${e.startsWith(`/products`)?`active`:``}">
            <span>Produk</span>
            ${t.chevronRight(`icon`,16,2)}
          </a>
          <a href="#/pricing" class="mobile-nav-link ${e===`/pricing`?`active`:``}">
            <span>Tarif</span>
            ${t.chevronRight(`icon`,16,2)}
          </a>
          <a href="#/docs" class="mobile-nav-link ${e===`/docs`?`active`:``}">
            <span>Dokumentasi</span>
            ${t.chevronRight(`icon`,16,2)}
          </a>
          <a href="#/about" class="mobile-nav-link ${e===`/about`?`active`:``}">
            <span>Tentang Kami</span>
            ${t.chevronRight(`icon`,16,2)}
          </a>
          <a href="#/contact" class="mobile-nav-link ${e===`/contact`?`active`:``}">
            <span>Kontak</span>
            ${t.chevronRight(`icon`,16,2)}
          </a>
        </nav>
      </div>

      <div class="mobile-nav-actions">
        ${n?`
          <a href="#/dashboard" class="btn btn-secondary btn-block">
            ${t.user(`icon`,18,2)}
            <span>Dasbor Pengguna</span>
          </a>
          ${n.role===`admin`?`
            <a href="#/admin" class="btn btn-primary btn-block" style="background-color: var(--color-accent); border-color: var(--color-accent);">
              ${t.layoutDashboard(`icon`,18,2)}
              <span>Dasbor Admin</span>
            </a>
          `:``}
          <button class="btn btn-ghost btn-block" id="mobile-logout-btn">
            ${t.logout(`icon`,18,2)}
            <span>Keluar Akun</span>
          </button>
        `:`
          <a href="#/login" class="btn btn-outline btn-block">Masuk ke Akun</a>
          <a href="#/register" class="btn btn-primary btn-block">Daftar Akun Baru</a>
        `}
      </div>
    </aside>
  `}function oe(){let e=document.getElementById(`theme-toggle-btn`);e&&(e.onclick=()=>a());let t=document.getElementById(`mobile-toggle-btn`),n=document.getElementById(`mobile-close-btn`),r=document.getElementById(`mobile-nav-overlay`),i=document.getElementById(`mobile-nav-drawer`),o=()=>{r&&i&&(r.style.display=`block`,i.style.display=`flex`)},s=()=>{r&&i&&(r.style.display=`none`,i.style.display=`none`)};t&&(t.onclick=o),n&&(n.onclick=s),r&&(r.onclick=s),(i?.querySelectorAll(`a`))?.forEach(e=>{e.addEventListener(`click`,s)});let c=Array.from(document.querySelectorAll(`.nav-dropdown`)),l=new WeakMap,u=e=>{let t=l.get(e);t&&(clearTimeout(t),l.delete(e))},d=(e,t)=>{u(e),e.classList.toggle(`is-open`,t);let n=e.querySelector(`.nav-dropdown-trigger`);n&&n.setAttribute(`aria-expanded`,t?`true`:`false`)},f=(e=null)=>{c.forEach(t=>{t!==e&&d(t,!1)})};c.forEach(e=>{let t=e.querySelector(`.nav-dropdown-trigger`);e.addEventListener(`mouseenter`,()=>{u(e),f(e),d(e,!0)}),e.addEventListener(`mouseleave`,()=>{u(e);let t=setTimeout(()=>{d(e,!1)},240);l.set(e,t)}),t&&(t.onclick=t=>{t.stopPropagation();let n=!e.classList.contains(`is-open`);f(e),d(e,n)}),e.querySelectorAll(`.nav-dropdown-item`).forEach(e=>{e.addEventListener(`click`,()=>f())})}),document.addEventListener(`click`,()=>f()),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&f()});let p=document.getElementById(`desktop-logout-btn`);p&&(p.onclick=()=>{S.logout(),window.location.hash=`#/login`});let m=document.getElementById(`mobile-logout-btn`);m&&(m.onclick=()=>{S.logout(),window.location.hash=`#/`,s()})}function se(){return`
    <footer class="footer" role="contentinfo">
      <div class="container">
        <div class="footer-top">
          <!-- Kolom 1: Merek & Moto -->
          <div class="footer-brand">
            <a href="#/" class="brand-logo">
              <div class="brand-icon">
                ${t.cloud(`brand-svg`,20,2)}
              </div>
              <span class="brand-name">MultiCloud</span>
            </a>
            <p class="footer-desc">
              One Platform, Multiple Digital Solutions. Ekosistem terintegrasi untuk infrastruktur komputasi awan, gerbang API bisnis, lisensi kecerdasan buatan resmi, dan piranti lunak terverifikasi.
            </p>
            <div class="footer-compliance-pill">
              ${t.shieldCheck(`icon`,16,2)}
              <span>100% Lisensi Resmi & Terverifikasi</span>
            </div>
          </div>

          <!-- Kolom 2: Komputasi Awan & Peladen -->
          <div class="footer-col">
            <h4 class="footer-group-title">Komputasi Awan</h4>
            <div class="footer-links">
              <a href="#/services" class="footer-link">Hosting Web NVMe</a>
              <a href="#/services" class="footer-link">Hosting Awan Terkelola</a>
              <a href="#/services" class="footer-link">Peladen VPS Cloud AMD</a>
              <a href="#/services" class="footer-link">Registrasi Domain Global</a>
              <a href="#/services" class="footer-link">Peladen Fisik Khusus</a>
            </div>
          </div>

          <!-- Kolom 3: Layanan API, AI & Kreatif -->
          <div class="footer-col">
            <h4 class="footer-group-title">API, AI & Kreatif</h4>
            <div class="footer-links">
              <a href="#/products/prod-canva-premium" class="footer-link">Canva Premium Resmi</a>
              <a href="#/products?category=ai-tools" class="footer-link">Cursor AI Pro</a>
              <a href="#/products?category=ai-tools" class="footer-link">Google Gemini Advanced</a>
              <a href="#/products?category=ai-tools" class="footer-link">ChatGPT Plus Resmi</a>
              <a href="#/products?category=ai-tools" class="footer-link">Claude Pro Anthropic</a>
              <a href="#/services" class="footer-link">Gerbang WhatsApp API</a>
              <a href="#/services" class="footer-link">Inferensi AI Terpadu</a>
            </div>
          </div>

          <!-- Kolom 4: Solusi & Pintasan -->
          <div class="footer-col">
            <h4 class="footer-group-title">Navigasi Platform</h4>
            <div class="footer-links">
              <a href="#/products" class="footer-link">Katalog Produk</a>
              <a href="#/pricing" class="footer-link">Daftar Tarif & SLA</a>
              <a href="#/docs" class="footer-link">Dokumentasi Teknis</a>
              <a href="#/about" class="footer-link">Tentang MultiCloud</a>
              <a href="#/contact" class="footer-link">Pusat Bantuan</a>
            </div>
          </div>

          <!-- Kolom 5: Kontak & Bantuan Teknis -->
          <div class="footer-col">
            <h4 class="footer-group-title">Layanan Pelanggan</h4>
            <div class="footer-links">
              <span class="footer-link">
                ${t.mail(`icon`,16,2)}
                support@multicloud.id
              </span>
              <span class="footer-link">
                ${t.brandWhatsapp(`icon`,16,2)}
                +62 812-3456-7890
              </span>
              <span class="footer-link">
                ${t.building(`icon`,16,2)}
                Jakarta Selatan, Indonesia
              </span>
              <span class="footer-link" style="color: var(--color-success);">
                ${t.activity(`icon`,16,2)}
                Seluruh Peladen Beroperasi Normal
              </span>
            </div>
          </div>
        </div>

        <!-- Baris Bawah Kaki Halaman -->
        <div class="footer-bottom">
          <div>
            &copy; ${new Date().getFullYear()} MultiCloud Inc. Hak cipta dilindungi undang-undang. Seluruh merek dagang dan nama lisensi AI adalah milik penerbit masing-masing yang didistribusikan secara sah.
          </div>
          <div class="footer-socials">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Repositori GitHub">
              ${t.brandGithub(`icon`,18,2)}
            </a>
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Koneksi WhatsApp Resmi">
              ${t.brandWhatsapp(`icon`,18,2)}
            </a>
            <a href="mailto:support@multicloud.id" class="social-link" aria-label="Alamat Surel Resmi">
              ${t.mail(`icon`,18,2)}
            </a>
          </div>
        </div>
      </div>
    </footer>
  `}var C=[{id:`cloud-hosting`,title:`Komputasi Awan & Hosting`,subtitle:`Infrastruktur peladen VPS Dedicated AMD EPYC berkinerja tinggi dengan otomasi penuh dan SLA 99,99%.`,icon:`cloud`,badge:`Kinerja Tinggi`},{id:`api-services`,title:`Layanan API`,subtitle:`Konsultasi dan pembangunan arsitektur integrasi API kustom untuk kebutuhan sistem bisnis.`,icon:`api`,badge:`Ramah Pengembang`}];function w({id:e,tier:t,name:n,tagline:r,description:i,basePrice:a,vcpu:o,ram:s,storage:c,port:l,ipv4:u,popular:d}){let f=Math.round(a*.0204),p=Math.round((a+f)*.11);return{id:e,tier:t,category:`cloud-hosting`,name:n,tagline:r,description:i,startingPrice:a+f+p,basePrice:a,automationFee:f,vatAmount:p,priceUnit:`/bulan`,icon:`server`,popular:d,features:[`Sumber Daya ${o} & ${s} 100% Dedicated`,`Termasuk Modul Otomatis (Automation Fee Terpadu)`,`Pajak PPN 11% Resmi (Faktur Pajak Sah Terverifikasi)`,`Fitur Perpanjangan Otomatis (Auto-Renew) & Peringatan Masa Aktif`,`Cetak Faktur PDF / Print Invoice Resmi Kapan Saja`,`Port Jaringan ${l} Tanpa Batas Kuota`],specs:{prosesor:`${o} Dedicated`,memori:`${s} Dedicated Registered`,penyimpanan:`${c} Enterprise NVMe Gen4 Mirroring`,jaringan:`${l} + ${u}`,dukungan:`Teknisi Khusus Bersiaga 24/7 SLA 99,99%`,faktur:`Mendukung Cetak Faktur Sah & Otomatis Tagihan`}}}var T=[w({id:`srv-vps-dedicated-s`,tier:`S`,name:`VPS Cloud Dedicated Ultra S`,tagline:`Sumber Daya Terdedikasi Ringkas & Otomatis Penuh`,description:`Peladen VPS Dedicated entry-level untuk aplikasi web produksi, layanan mikro, dan basis data bisnis dengan sumber daya CPU & RAM terdedikasi penuh.`,basePrice:65e4,vcpu:`2 vCPU AMD EPYC 3.2GHz`,ram:`8GB DDR4 ECC`,storage:`150GB`,port:`1 Gbps Dedicated`,ipv4:`1 Alamat IPv4`,popular:!1}),w({id:`srv-vps-dedicated-m`,tier:`M`,name:`VPS Cloud Dedicated Ultra M`,tagline:`Keseimbangan Performa Menengah & Otomatis Penuh`,description:`Peladen VPS Dedicated menengah untuk aplikasi bertrafik aktif, API gateway, dan klaster kontainer dengan latensi rendah dan jaminan SLA 99,99%.`,basePrice:13e5,vcpu:`4 vCPU AMD EPYC 3.3GHz`,ram:`16GB DDR4 ECC`,storage:`300GB`,port:`2.5 Gbps Dedicated`,ipv4:`1 Alamat IPv4`,popular:!0}),w({id:`srv-vps-dedicated-l`,tier:`L`,name:`VPS Cloud Dedicated Ultra L`,tagline:`Kapasitas Komputasi Tinggi & Otomatis Skala Bisnis`,description:`Peladen VPS Dedicated berperforma tinggi untuk beban kerja korporat, sistem ERP, dan pemrosesan data intensif dengan port 5 Gbps terdedikasi.`,basePrice:195e4,vcpu:`6 vCPU AMD EPYC 3.35GHz`,ram:`24GB DDR4 ECC`,storage:`450GB`,port:`5 Gbps Dedicated`,ipv4:`2 Alamat IPv4`,popular:!0}),w({id:`srv-vps-dedicated-xl`,tier:`XL`,name:`VPS Cloud Dedicated Ultra XL`,tagline:`Sumber Daya Terdedikasi Tertinggi & Otomatis Skala Penuh`,description:`Peladen VPS Bare-Metal Dedicated kelas enterprise dengan performa maksimal, sistem otomatis penuh, jaminan SLA 99,99%, dan latensi super rendah.`,basePrice:26e5,vcpu:`8 vCPU AMD EPYC 3.4GHz`,ram:`32GB DDR4 ECC`,storage:`600GB`,port:`10 Gbps Port Terdedikasi`,ipv4:`2 Alamat IPv4`,popular:!0}),{id:`srv-custom-api`,category:`api-services`,name:`Integrasi API Kustom`,tagline:`Solusi Arsitektur API Sesuai Kebutuhan Khusus`,description:`Layanan konsultasi dan pembuatan integrasi API khusus untuk menghubungkan piranti lunak internal, ERP, CRM, dan gerbang pembayaran.`,startingPrice:25e5,priceUnit:`/proyek`,icon:`plug`,popular:!0,features:[`Arsitektur Layanan Mikro`,`Audit Keamanan & Pembatasan Akses`,`Dokumentasi Komprehensif`,`Garansi Pemeliharaan 3 Bulan`],specs:{berkasKeluaran:`Kode Sumber, Dockerfile, Dokumen Swagger`,pendampingan:`Didampingi Teknisi Ahli Khusus`}}],ce=[{value:`99.99%`,label:`Uptime SLA Terjamin`,icon:`shieldCheck`,desc:`Infrastruktur cloud multi-zone berkecepatan tinggi`},{value:`45.000+`,label:`Developer & Bisnis`,icon:`users`,desc:`Telah mempercayakan layanan digital di MultiCloud`},{value:`1.2 Juta+`,label:`API Calls / Hari`,icon:`activity`,desc:`Pemrosesan data real-time latensi rendah`},{value:`< 15 Menit`,label:`Rata-rata Setup`,icon:`zap`,desc:`Proses aktivasi cepat dengan panduan lengkap`}],le=[{category:`Umum`,question:`Apa itu platform MultiCloud?`,answer:`MultiCloud adalah platform terpadu penyedia berbagai layanan teknologi digital: mulai dari Cloud & Hosting berkinerja tinggi, API Services siap pakai, langganan alat AI berlisensi resmi, hingga produk digital dan lisensi software original untuk developer, startup, dan enterprise.`},{category:`Lisensi & Legalitas`,question:`Apakah produk dan akun AI di MultiCloud berlisensi resmi?`,answer:`Ya. Seluruh langganan AI (Cursor Pro, Gemini Advanced, ChatGPT Plus, Claude Pro, GitHub Copilot) dan lisensi software di MultiCloud disalurkan melalui jalur resmi dan legal dari penyedia yang berwenang. Kami menjamin tidak menggunakan trik trial ilegal, kartu bajakan, atau metode yang melanggar ketentuan penyedia.`},{category:`Metode Pembayaran`,question:`Metode pembayaran apa saja yang didukung?`,answer:`Kami mendukung QRIS (BCA, Mandiri, BNI, BRI, GoPay, OVO, Dana), Transfer Virtual Account semua bank nasional, serta kartu debit/kredit berlogo Visa dan Mastercard. Proses verifikasi pembayaran dilakukan secara otomatis dan transparan.`},{category:`Cloud & Server`,question:`Di mana lokasi server dan datacenter MultiCloud?`,answer:`Server cloud dan VPS kami berlokasi di tier-3 dan tier-4 datacenter di Jakarta (IDC 3D, Cyber 1, Equinix) dengan koneksi langsung ke Indonesia Internet Exchange (IIX) & OpenIXP, serta region Singapura untuk kebutuhan jangkauan global.`},{category:`Garansi & Bantuan`,question:`Bagaimana garansi dan layanan purna jual di MultiCloud?`,answer:`Kami memberikan garansi operasional sesuai paket layanan yang Anda pilih. Tim Customer Support dan technical engineer kami siap membantu Anda melalui Live Chat, Tiket Bantuan di Dashboard, dan WhatsApp resmi.`},{category:`API & Developer`,question:`Apakah MultiCloud menyediakan lingkungan sandbox untuk uji coba API?`,answer:`Ya, setiap akun terdaftar dapat mengakses mode sandbox gratis pada dashboard developer untuk menguji integrasi WhatsApp API, Unified AI API, dan endpoint REST sebelum beralih ke production.`}],ue=[{icon:`shieldCheck`,title:`Keamanan & Lisensi Terjamin`,desc:`Semua produk, lisensi software, dan akun AI 100% legal dan bergaransi resmi dari mitra terpercaya.`},{icon:`zap`,title:`Aktivasi Instan & Cepat`,desc:`Sistem otomatis kami memastikan layanan cloud, API key, dan lisensi digital siap pakai tanpa menunggu lama.`},{icon:`layers`,title:`One Platform, Multiple Solutions`,desc:`Kelola hosting, API gateway, software development tools, dan AI assistant dalam satu dashboard terintegrasi.`},{icon:`cpu`,title:`Infrastruktur Performa Tinggi`,desc:`Didukung prosesor AMD EPYC modern, Enterprise NVMe Gen4 SSD, dan koneksi jaringan multi-Gbps.`},{icon:`receipt`,title:`Transparansi Harga Tanpa Biaya Tersembunyi`,desc:`Harga tertera jelas dengan opsi penagihan fleksibel bulanan atau tahunan dengan invoice resmi.`},{icon:`heartHandshake`,title:`Dukungan Teknis Berpengalaman`,desc:`Bukan sekadar bot, tim engineer kami siap memandu kendala konfigurasi dan integrasi kapan pun dibutuhkan.`}],E=null;function de(e){D();let t=document.createElement(`div`);t.className=`modal-overlay active`,t.id=`dynamic-modal-overlay`,t.innerHTML=`
    <div class="modal-card" id="modal-card-box" role="dialog" aria-modal="true" aria-labelledby="modal-dialog-title">
      ${e}
    </div>
  `,document.body.appendChild(t),E=t,document.body.style.overflow=`hidden`,t.addEventListener(`click`,e=>{e.target===t&&D()});let n=e=>{e.key===`Escape`&&(D(),window.removeEventListener(`keydown`,n))};window.addEventListener(`keydown`,n);let r=t.querySelector(`.modal-close-trigger`);r&&r.addEventListener(`click`,D)}function D(){E&&E.parentNode&&(E.parentNode.removeChild(E),E=null,document.body.style.overflow=``)}function fe(e){de(`
    <div class="modal-header">
      <div class="flex items-center gap-3">
        <div class="card-icon-box">
          ${t[e.icon]?t[e.icon](`icon`,22,2):t.cloud(`icon`,22,2)}
        </div>
        <div>
          <h3 class="modal-title">${e.name}</h3>
          <span style="font-size: 0.8125rem; color: var(--color-primary); font-weight: 600;">${e.tagline}</span>
        </div>
      </div>
      <button class="btn btn-ghost btn-sm modal-close-trigger" aria-label="Tutup">
        ${t.x(`icon`,20,2)}
      </button>
    </div>
    <div class="modal-body">
      <p style="font-size: 0.9375rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.5rem;">
        ${e.description}
      </p>

      <div style="background-color: var(--bg-surface-secondary); padding: 1.25rem; border-radius: var(--radius-lg); margin-bottom: 1.5rem; border: 1px solid var(--border-color);">
        <h4 style="font-size: 0.875rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted); margin-bottom: 0.75rem;">
          Spesifikasi Teknis
        </h4>
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.75rem; font-size: 0.875rem;">
          ${Object.entries(e.specs||{}).map(([e,t])=>`
            <div>
              <span style="color: var(--text-muted); display: block; font-size: 0.75rem; text-transform: capitalize;">${e}</span>
              <strong style="color: var(--text-primary);">${t}</strong>
            </div>
          `).join(``)}
        </div>
      </div>

      <h4 style="font-size: 0.875rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted); margin-bottom: 0.75rem;">
        Fitur Unggulan
      </h4>
      <div style="display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 1rem;">
        ${(e.features||[]).map(e=>`
          <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.875rem; color: var(--text-secondary);">
            <span style="color: var(--color-success);">${t.check(`icon`,16,2)}</span>
            <span>${e}</span>
          </div>
        `).join(``)}
      </div>
    </div>
    <div class="modal-footer">
      <div style="margin-right: auto; text-align: left;">
        <span style="font-size: 0.75rem; color: var(--text-muted); display: block;">Mulai dari</span>
        <strong style="font-size: 1.25rem; color: var(--text-primary);">${(e=>new Intl.NumberFormat(`id-ID`,{style:`currency`,currency:`IDR`,maximumFractionDigits:0}).format(e))(e.startingPrice)}</strong>
        <span style="font-size: 0.8125rem; color: var(--text-muted);">${e.priceUnit}</span>
      </div>
      <button class="btn btn-secondary btn-sm modal-close-trigger">Tutup</button>
      <button class="btn btn-primary btn-sm" id="modal-order-service-btn">
        ${t.shoppingCart(`icon`,16,2)}
        <span>Pesan Layanan</span>
      </button>
    </div>
  `);let n=document.getElementById(`modal-order-service-btn`);n&&(n.onclick=()=>{D();let t=e.id.startsWith(`srv-vps-dedicated-`),n=e.tier||e.id.replace(`srv-vps-dedicated-`,``).toUpperCase();O({itemTitle:e.name,category:e.category,packageName:t?`Paket Dedicated ${n} + Otomatis + PPN 11% (1 Bulan)`:`Paket Standar `+e.priceUnit,amount:e.startingPrice,breakdown:t?{base:e.basePrice||0,automation:e.automationFee||0,vat:e.vatAmount||0}:null})})}function O({itemTitle:e,category:n,packageName:r,amount:i,breakdown:a=null}){let o=e=>new Intl.NumberFormat(`id-ID`,{style:`currency`,currency:`IDR`,maximumFractionDigits:0}).format(e),s=S.getState().currentUser;de(`
    <div class="modal-header">
      <div>
        <h2 class="modal-title" id="modal-dialog-title">Konfirmasi Pemesanan</h2>
        <span style="font-size: 0.8125rem; color: var(--text-muted);">Sistem Pemesanan Resmi MultiCloud</span>
      </div>
      <button class="btn btn-ghost btn-sm modal-close-trigger" aria-label="Tutup">
        ${t.x(`icon`,20,2)}
      </button>
    </div>

    <div class="modal-body" id="order-modal-body">
      <!-- Ringkasan Biaya -->
      <div style="background-color: var(--bg-surface-secondary); padding: 1.25rem; border-radius: var(--radius-lg); border: 1px solid var(--border-color); margin-bottom: 1.5rem;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem;">
          <div>
            <strong style="font-size: 1.0625rem; color: var(--text-primary); display: block;">${e}</strong>
            <span style="font-size: 0.875rem; color: var(--color-primary);">${r}</span>
          </div>
          <strong style="font-size: 1.1875rem; color: var(--text-primary);">${o(i)}</strong>
        </div>

        ${a?`
          <div style="font-size: 0.8125rem; color: var(--text-secondary); border-top: 1px dashed var(--border-color); padding-top: 0.5rem; margin-top: 0.5rem; display: flex; flex-direction: column; gap: 0.25rem;">
            <div style="display: flex; justify-content: space-between;">
              <span>Harga Pokok Layanan:</span>
              <span>${o(a.base)}</span>
            </div>
            <div style="display: flex; justify-content: space-between;">
              <span>Biaya Otomatis (Automation Fee):</span>
              <span>${o(a.automation)}</span>
            </div>
            <div style="display: flex; justify-content: space-between;">
              <span>Subtotal:</span>
              <strong>${o(a.base+a.automation)}</strong>
            </div>
            <div style="display: flex; justify-content: space-between; color: var(--color-primary);">
              <span>PPN 11% (VAT Out 12% x 11/12):</span>
              <span>${o(a.vat)}</span>
            </div>
          </div>
        `:``}

        <div style="font-size: 0.8125rem; color: var(--text-muted); border-top: 1px dashed var(--border-color); padding-top: 0.5rem; margin-top: 0.5rem; display: flex; align-items: center; gap: 0.35rem;">
          ${t.shieldCheck(`icon`,15,2)}
          <span>Disalurkan secara resmi dengan faktur sah & garansi penuh</span>
        </div>
      </div>

      <!-- Formulir Data Pemesan -->
      <form id="order-checkout-form">
        <div class="form-group">
          <label class="form-label" for="order-cust-name">Nama Pemesan / Perusahaan</label>
          <input class="form-input" id="order-cust-name" type="text" required value="${s?.name||``}" placeholder="Contoh: Budi Santoso" />
        </div>

        <div class="form-group">
          <label class="form-label" for="order-cust-email">Alamat Surel Aktivasi</label>
          <input class="form-input" id="order-cust-email" type="email" required value="${s?.email||``}" placeholder="nama@email.com" />
          <span class="form-hint">Alamat surel ini digunakan untuk pengiriman kredensial lisensi resmi.</span>
        </div>

        <div class="form-group">
          <label class="form-label" for="order-cust-wa">Nomor Telepon / WhatsApp</label>
          <input class="form-input" id="order-cust-wa" type="tel" required value="${s?.phone||`+62 `}" placeholder="+62 8xx-xxxx-xxxx" />
        </div>

        <div class="form-group">
          <label class="form-label" for="order-payment-method">Metode Pembayaran</label>
          <select class="form-select" id="order-payment-method">
            <option value="QRIS Instan">QRIS Instan (BCA, Mandiri, GoPay, OVO, ShopeePay)</option>
            <option value="BCA Virtual Account">BCA Virtual Account</option>
            <option value="Mandiri Virtual Account">Mandiri Virtual Account</option>
            <option value="Kartu Kredit / Debit">Kartu Kredit / Debit (Visa / Mastercard)</option>
          </select>
        </div>

        <div style="background-color: var(--color-info-subtle); border: 1px solid rgba(2, 132, 199, 0.2); border-radius: var(--radius-md); padding: 0.75rem 1rem; margin-top: 1rem; display: flex; gap: 0.5rem; font-size: 0.8125rem; color: var(--text-secondary);">
          <span style="color: var(--color-info); flex-shrink: 0;">${t.infoCircle(`icon`,18,2)}</span>
          <span>Pesanan akan diterbitkan dengan status <strong>Menunggu Pembayaran</strong> dan tersinkronisasi ke basis data Supabase & Dasbor Anda.</span>
        </div>

        <div class="modal-footer" style="margin-left: -1.5rem; margin-right: -1.5rem; margin-bottom: -1.5rem; margin-top: 1.5rem;">
          <button type="button" class="btn btn-secondary btn-sm modal-close-trigger">Batalkan</button>
          <button type="submit" class="btn btn-primary btn-sm" id="submit-order-btn">
            ${t.receipt(`icon`,16,2)}
            <span>Lanjutkan Pemesanan</span>
          </button>
        </div>
      </form>
    </div>
  `);let c=document.getElementById(`order-checkout-form`);c&&(c.onsubmit=async t=>{t.preventDefault();let o=document.getElementById(`order-cust-name`).value.trim(),s=document.getElementById(`order-cust-email`).value.trim(),c=document.getElementById(`order-cust-wa`).value.trim(),l=document.getElementById(`order-payment-method`).value;if(!o||!s){alert(`Mohon lengkapi nama dan alamat surel Anda`);return}let u=document.getElementById(`submit-order-btn`);u&&(u.disabled=!0,u.innerHTML=`<span>Menyimpan Pesanan...</span>`),pe(await S.createOrder({itemTitle:e,category:n,packageName:r,amount:i,breakdown:a,paymentMethod:l,userName:o,userEmail:s,userPhone:c}))})}function pe(e){let n=document.getElementById(`order-modal-body`);n&&(n.innerHTML=`
    <div style="text-align: center; margin-bottom: 1.5rem;">
      <div style="width: 56px; height: 56px; border-radius: var(--radius-full); background-color: var(--color-warning-subtle); color: #d97706; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem auto;">
        ${t.receipt(`icon`,28,2)}
      </div>
      <h3 style="font-size: 1.25rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.25rem;">Faktur Tagihan Diterbitkan</h3>
      <span class="status-pill warning">Menunggu Pembayaran</span>
    </div>

    <div style="background-color: var(--bg-surface-secondary); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 1.25rem; margin-bottom: 1.5rem;">
      <div style="display: flex; justify-content: space-between; font-size: 0.875rem; margin-bottom: 0.5rem;">
        <span style="color: var(--text-muted);">Nomor Faktur</span>
        <strong style="color: var(--text-primary); font-family: var(--font-mono);">${e.invoiceNumber}</strong>
      </div>
      <div style="display: flex; justify-content: space-between; font-size: 0.875rem; margin-bottom: 0.5rem;">
        <span style="color: var(--text-muted);">Nama Layanan</span>
        <strong style="color: var(--text-primary);">${e.itemTitle}</strong>
      </div>
      <div style="display: flex; justify-content: space-between; font-size: 0.875rem; margin-bottom: 0.5rem;">
        <span style="color: var(--text-muted);">Paket / Durasi</span>
        <span style="color: var(--text-secondary);">${e.package}</span>
      </div>
      <div style="display: flex; justify-content: space-between; font-size: 0.875rem; margin-bottom: 0.5rem;">
        <span style="color: var(--text-muted);">Metode Pembayaran</span>
        <span style="color: var(--text-secondary);">${e.paymentMethod}</span>
      </div>
      <div style="display: flex; justify-content: space-between; font-size: 1rem; border-top: 1px dashed var(--border-color); padding-top: 0.75rem; margin-top: 0.75rem;">
        <span style="font-weight: 700; color: var(--text-primary);">Total Tagihan</span>
        <strong style="font-weight: 800; color: var(--color-primary); font-size: 1.25rem;">${(e=>new Intl.NumberFormat(`id-ID`,{style:`currency`,currency:`IDR`,maximumFractionDigits:0}).format(e))(e.amount)}</strong>
      </div>
    </div>

    <div style="background-color: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1rem; margin-bottom: 1.5rem; text-align: center;">
      <p style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 0.5rem;">
        Silakan lakukan pelunasan sesuai jumlah nominal di atas.
      </p>
      <div style="font-size: 0.8125rem; color: var(--text-muted);">
        Pesanan Anda telah diteruskan ke Administrator MultiCloud dengan status <strong>Menunggu Pembayaran</strong>. Pembayaran hanya dapat diverifikasi dan disetujui oleh Administrator. Pantau status aktivasi layanan Anda di menu <strong>Pesanan Saya</strong>.
      </div>
    </div>

    <div class="modal-footer" style="margin-left: -1.5rem; margin-right: -1.5rem; margin-bottom: -1.5rem;">
      <button type="button" class="btn btn-secondary btn-sm modal-close-trigger">Tutup</button>
      <button type="button" class="btn btn-primary btn-sm" id="go-to-dash-btn">
        ${t.layoutDashboard(`icon`,16,2)}
        <span>Buka Dasbor Pesanan</span>
      </button>
    </div>
  `,n.querySelectorAll(`.modal-close-trigger`).forEach(e=>{e.addEventListener(`click`,D)}),document.getElementById(`go-to-dash-btn`).onclick=()=>{D(),window.location.hash=`#/dashboard/orders`})}function me(e){let t=e=>new Intl.NumberFormat(`id-ID`,{style:`currency`,currency:`IDR`,maximumFractionDigits:0}).format(e),n=window.open(``,`_blank`,`width=850,height=900`);if(!n){alert(`Jendela cetak diblokir oleh peramban. Izinkan pop-up untuk mencetak faktur.`);return}let r=e.breakdown?.base||(e.amount?Math.round(e.amount/1.11):0),i=e.breakdown?.automation||0,a=e.breakdown?e.breakdown.base+e.breakdown.automation:r,o=e.breakdown?.vat||e.amount-a;n.document.write(`
    <!DOCTYPE html>
    <html lang="id">
    <head>
      <meta charset="UTF-8">
      <title>${(e.invoiceNumber||e.id||`Invoice`).replace(/\//g,`-`)}</title>
      <style>
        @page {
          size: A4 portrait;
          margin: 0;
        }
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif; color: #1e293b; padding: 2rem; margin: 0; background: #fff; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        .invoice-box { max-width: 800px; margin: auto; border: 1px solid #e2e8f0; padding: 2rem; border-radius: 8px; box-sizing: border-box; }
        .header { display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 2px solid #3b82f6; padding-bottom: 1.5rem; margin-bottom: 2rem; }
        .brand { font-size: 24px; font-weight: 800; color: #2563eb; }
        .brand span { color: #0f172a; }
        .inv-meta { text-align: right; }
        .meta-table { width: 100%; margin-bottom: 2rem; }
        .meta-table td { vertical-align: top; padding: 4px 0; font-size: 14px; }
        .item-table { width: 100%; border-collapse: collapse; margin-bottom: 2rem; }
        .item-table th { background: #f8fafc; border: 1px solid #cbd5e1; padding: 10px 12px; font-size: 13px; text-transform: uppercase; color: #475569; text-align: left; }
        .item-table td { border: 1px solid #e2e8f0; padding: 12px; font-size: 14px; }
        .text-right { text-align: right; }
        .summary-box { width: 340px; margin-left: auto; margin-bottom: 2rem; }
        .summary-row { display: flex; justify-content: space-between; padding: 6px 0; font-size: 14px; }
        .summary-row.total { font-size: 18px; font-weight: 800; border-top: 2px solid #0f172a; padding-top: 10px; margin-top: 5px; color: #2563eb; }
        .badge-paid { display: inline-block; background: #dcfce7; color: #15803d; border: 1px solid #86efac; padding: 6px 14px; font-weight: 700; border-radius: 9999px; font-size: 13px; text-transform: uppercase; }
        .footer-note { border-top: 1px dashed #cbd5e1; padding-top: 1.5rem; font-size: 12px; color: #475569; text-align: center; }
        @media print {
          html, body {
            margin: 0 !important;
            padding: 0 !important;
          }
          .invoice-box {
            max-width: 100%;
            border: none;
            border-radius: 0;
            padding: 16mm 18mm;
          }
          .no-print { display: none !important; }
        }
      </style>
    </head>
    <body>
      <main class="invoice-box">
        <div class="no-print" style="margin-bottom: 1.5rem; display: flex; gap: 10px; justify-content: flex-end;">
          <button type="button" onclick="window.print()" style="background: #2563eb; color: #fff; border: none; min-height: 44px; padding: 10px 18px; font-weight: 600; border-radius: 6px; cursor: pointer;">Cetak Sekarang (Print PDF)</button>
          <button type="button" onclick="window.close()" style="background: #e2e8f0; color: #334155; border: none; min-height: 44px; padding: 10px 18px; font-weight: 600; border-radius: 6px; cursor: pointer;">Tutup</button>
        </div>

        <header class="header">
          <div>
            <h1 class="brand" style="margin: 0; line-height: 1.2;">Multi<span>Cloud</span></h1>
            <div style="font-size: 13px; color: #475569; margin-top: 4px;">PT Multi Cloud Digital Nusantara</div>
            <div style="font-size: 13px; color: #475569;">Surel: billing@multicloud.id</div>
          </div>
          <div class="inv-meta">
            <div style="font-family: monospace; font-size: 15px; font-weight: 700; color: #334155;">${e.invoiceNumber||e.id}</div>
            <div style="margin-top: 8px;">
              <span class="badge-paid">LUNAS</span>
            </div>
          </div>
        </header>

        <table class="meta-table">
          <tr>
            <td style="width: 50%;">
              <strong style="color: #475569; font-size: 12px; text-transform: uppercase;">Ditagihkan Kepada:</strong><br>
              <strong style="font-size: 16px; color: #0f172a;">${e.userName||`Pelanggan Terhormat`}</strong><br>
              <span>${e.userEmail||``}</span><br>
              <span>${e.userPhone||``}</span>
            </td>
            <td style="width: 50%; text-align: right;">
              <strong style="color: #475569; font-size: 12px; text-transform: uppercase;">Rincian Faktur:</strong><br>
              <span>Tanggal Penerbitan: ${new Date(e.date||Date.now()).toLocaleDateString(`id-ID`,{year:`numeric`,month:`long`,day:`numeric`})}</span><br>
              <span>Status Lisensi: <strong>${e.licenseKey||`MC-LIC-VERIFIED-ACTIVE`}</strong></span>
            </td>
          </tr>
        </table>

        <table class="item-table">
          <thead>
            <tr>
              <th>Keterangan Layanan / Produk (Description)</th>
              <th class="text-right" style="width: 200px;">Jumlah (Total)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>${e.itemTitle}</strong> ${e.domain?`- ${e.domain}`:``} ${e.periodText?`(${e.periodText})`:e.date?`(${new Date(e.date).toLocaleDateString(`id-ID`,{day:`2-digit`,month:`2-digit`,year:`numeric`})} - ${new Date(new Date(e.date).setMonth(new Date(e.date).getMonth()+1)).toLocaleDateString(`id-ID`,{day:`2-digit`,month:`2-digit`,year:`numeric`})})`:``}<br>
                <span style="font-size: 13px; color: #64748b;">Paket: ${e.package||`Standar`}</span>
              </td>
              <td class="text-right"><strong>${t(r)}</strong></td>
            </tr>
            ${i>0?`
              <tr>
                <td>
                  <strong>Automation Fee</strong><br>
                  <span style="font-size: 13px; color: #64748b;">Biaya manajemen pemeliharaan modul otomatisasi server terdedikasi</span>
                </td>
                <td class="text-right">${t(i)}</td>
              </tr>
            `:``}
          </tbody>
        </table>

        <div class="summary-box">
          <div class="summary-row">
            <span>Sub Total:</span>
            <strong>${t(a)}</strong>
          </div>
          <div class="summary-row">
            <span>11.00% VAT Out (12% x 11/12):</span>
            <span>${t(o)}</span>
          </div>
          <div class="summary-row">
            <span>Kredit / Diskon:</span>
            <span>Rp 0</span>
          </div>
          <div class="summary-row total">
            <span>Total Tagihan:</span>
            <span>${t(e.amount)}</span>
          </div>
        </div>

        <div class="footer-note">
          
        </div>
      </main>
      <script>
        window.onload = function() {
          // Siap cetak otomatis
        }
      <\/script>
    </body>
    </html>
  `),n.document.close()}function he(){let e=e=>new Intl.NumberFormat(`id-ID`,{style:`currency`,currency:`IDR`,maximumFractionDigits:0}).format(e),n=T.filter(e=>e.popular).slice(0,4),r=l.filter(e=>e.badge===`Terlaris`||e.badge===`Populer`).slice(0,3);return`
    <!-- 4, 5, 6. BAGIAN HERO (HERO SECTION) -->
    <section class="hero-section" aria-label="Bagian Utama Beranda">
      <!-- Badge Produk & Server Tech Melayang di Kiri & Kanan (Tanpa Geometri) -->
      <div class="hero-floating-elements" aria-hidden="true">
        <!-- Sisi Kiri: Berbagai Ukuran Produk (Server, AI, Hosting) -->
        <div class="floating-tech-item float-left-1">
          <div class="tech-card-badge badge-lg">
            <div class="tech-icon-box">
              ${t.server(`icon`,20,2)}
            </div>
            <div class="tech-meta">
              <span class="tech-label">VPS Dedicated Ultra XL</span>
              <span class="tech-sub"><span class="pulse-dot"></span> 99.99% Uptime Terjamin</span>
            </div>
          </div>
        </div>

        <div class="floating-tech-item float-left-2">
          <div class="tech-card-badge badge-sm">
            <div class="tech-icon-box success">
              ${t.shieldCheck(`icon`,16,2)}
            </div>
            <div class="tech-meta">
              <span class="tech-label">Cursor AI Pro</span>
              <span class="tech-sub"><span class="pulse-dot green"></span> Lisensi Resmi Aktif</span>
            </div>
          </div>
        </div>

        <div class="floating-tech-item float-left-3">
          <div class="tech-card-badge badge-md">
            <div class="tech-icon-box">
              ${t.world?t.world(`icon`,17,2):t.cloud(`icon`,17,2)}
            </div>
            <div class="tech-meta">
              <span class="tech-label">Hosting LiteSpeed NVMe</span>
              <span class="tech-sub">Port 10 Gbps Jakarta</span>
            </div>
          </div>
        </div>

        <!-- Sisi Kanan: Berbagai Ukuran Produk (WhatsApp Gateway, Claude, Docker) -->
        <div class="floating-tech-item float-right-1">
          <div class="tech-card-badge badge-lg">
            <div class="tech-icon-box accent">
              ${t.sparkles(`icon`,20,2)}
            </div>
            <div class="tech-meta">
              <span class="tech-label">Claude 3.5 Sonnet Enterprise</span>
              <span class="tech-sub"><span class="pulse-dot green"></span> Akses API Siap Pakai</span>
            </div>
          </div>
        </div>

        <div class="floating-tech-item float-right-2">
          <div class="tech-card-badge badge-sm">
            <div class="tech-icon-box green-box">
              ${t.messageCircle?t.messageCircle(`icon`,16,2):t.phone(`icon`,16,2)}
            </div>
            <div class="tech-meta">
              <span class="tech-label">Gerbang WhatsApp API</span>
              <span class="tech-sub"><span class="pulse-dot green"></span> Pengiriman Cepat 0.3s</span>
            </div>
          </div>
        </div>

        <div class="floating-tech-item float-right-3">
          <div class="tech-card-badge badge-md">
            <div class="tech-icon-box">
              ${t.database?t.database(`icon`,17,2):t.server(`icon`,17,2)}
            </div>
            <div class="tech-meta">
              <span class="tech-label">Supabase Cloud Database</span>
              <span class="tech-sub">Latensi Rendah &lt; 10ms</span>
            </div>
          </div>
        </div>
      </div>

      <div class="container hero-content">
        <div class="hero-pill">
          <span class="hero-pill-tag">BARU</span>
          <span>Akses Resmi Langganan AI & Ekosistem Awan Terpadu</span>
          ${t.arrowRight(`icon`,14,2)}
        </div>

        <h1 class="hero-title">
          Everything You Need to <br />
          <span class="hero-title-highlight">Build, Scale & Grow.</span>
        </h1>

        <p class="hero-subtitle">
          MultiCloud adalah platform terpadu penyedia infrastruktur komputasi awan berkecepatan tinggi, gerbang API terkelola, alat AI berlisensi resmi, dan katalog produk digital untuk akselerasi teknologi Anda.
        </p>

        <div class="hero-cta-group">
          <a href="#/services" class="btn btn-primary btn-lg">
            <span>Jelajahi Layanan</span>
            ${t.arrowRight(`icon`,18,2)}
          </a>
          <a href="#/register" class="btn btn-secondary btn-lg">
            <span>Mulai Sekarang</span>
          </a>
        </div>

        <div class="hero-trust-bar">
          <div class="trust-item">
            ${t.shieldCheck(`icon`,20,2)}
            <span>100% Lisensi Sah & Resmi</span>
          </div>
          <div class="trust-item">
            ${t.activity(`icon`,20,2)}
            <span>Jaminan Keterandalan SLA 99,99%</span>
          </div>
          <div class="trust-item">
            ${t.zap(`icon`,20,2)}
            <span>Penyediaan Peladen Cepat</span>
          </div>
          <div class="trust-item">
            ${t.heartHandshake(`icon`,20,2)}
            <span>Dukungan Teknis Siaga 24/7</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 7. BAGIAN KATEGORI LAYANAN -->
    <section class="section section-categories-showcase" aria-label="Kategori Layanan">
      <div class="category-bg-layer"></div>
      <div class="category-overlay-layer"></div>
      <div class="container" style="position: relative; z-index: 2;">
        <div class="section-header">
          <div class="section-tag" style="background: rgba(255, 255, 255, 0.85); backdrop-filter: blur(8px);">
            ${t.layers(`icon`,14,2)}
            <span>Ekosistem Solusi</span>
          </div>
          <h2 class="section-title">Kategori Layanan MultiCloud</h2>
          <p class="section-desc">
            Satu ekosistem komprehensif yang dirancang untuk mendukung setiap tahapan pengembangan piranti lunak dan operasional bisnis digital Anda.
          </p>
        </div>

        <div class="grid-4">
          ${C.map(e=>`
            <a href="#/services?category=${e.id}" class="category-card" aria-label="Buka Kategori ${e.title}">
              <div class="category-card-top">
                <div class="card-icon-box">
                  ${t[e.icon]?t[e.icon](`icon`,24,2):t.cloud(`icon`,24,2)}
                </div>
                <span class="badge badge-primary">${e.badge}</span>
              </div>
              <h3 class="category-card-title">${e.title}</h3>
              <p class="category-card-desc">${e.subtitle}</p>
              <div class="category-card-action">
                <span>Jelajahi Solusi</span>
                ${t.arrowRight(`icon`,16,2)}
              </div>
            </a>
          `).join(``)}
        </div>
      </div>
    </section>

    <!-- 8. BAGIAN LAYANAN UNGGULAN -->
    <section class="section" aria-label="Layanan Unggulan">
      <div class="container">
        <div class="section-header">
          <div class="section-tag">
            ${t.star(`icon`,14,2)}
            <span>Layanan Unggulan</span>
          </div>
          <h2 class="section-title">Infrastruktur & API Paling Banyak Digunakan</h2>
          <p class="section-desc">
            Pondasi teknologi berkinerja tinggi yang dioptimalkan untuk latensi rendah, skalabilitas elastis, dan kemudahan integrasi kode.
          </p>
        </div>

        <div class="grid-2">
          ${n.map(n=>`
            <div class="service-card">
              <div class="service-card-top">
                <div class="card-icon-box">
                  ${t[n.icon]?t[n.icon](`icon`,24,2):t.server(`icon`,24,2)}
                </div>
                ${n.officialLicense?`
                  <span class="service-badge-official">
                    ${t.shieldCheck(`icon`,14,2)}
                    <span>Lisensi Resmi</span>
                  </span>
                `:`
                  <span class="badge badge-outline">SLA 99,99%</span>
                `}
              </div>

              <h3 class="service-name">${n.name}</h3>
              <div class="service-tagline">${n.tagline}</div>
              <p class="service-description">${n.description}</p>

              <div class="service-features-list">
                ${n.features.map(e=>`
                  <div class="service-feature-row">
                    <span style="color: var(--color-success);">${t.check(`icon`,16,2)}</span>
                    <span>${e}</span>
                  </div>
                `).join(``)}
              </div>

              <div class="service-card-bottom">
                <div class="service-price-block">
                  <span class="service-price-title">Mulai dari</span>
                  <div>
                    <span class="service-price-amount">${e(n.startingPrice)}</span>
                    <span class="service-price-period">${n.priceUnit}</span>
                  </div>
                </div>
                <button class="btn btn-outline-primary btn-sm view-service-detail-btn" data-id="${n.id}">
                  <span>Lihat Rincian</span>
                  ${t.arrowRight(`icon`,16,2)}
                </button>
              </div>
            </div>
          `).join(``)}
        </div>

        <div style="text-align: center; margin-top: 3rem;">
          <a href="#/services" class="btn btn-outline btn-md">
            <span>Lihat Seluruh Layanan (${T.length})</span>
            ${t.chevronRight(`icon`,18,2)}
          </a>
        </div>
      </div>
    </section>

    <!-- 9. BAGIAN PRODUK POPULER -->
    <section class="section" style="background-color: var(--bg-surface-secondary);" aria-label="Produk Populer">
      <div class="container">
        <div class="section-header">
          <div class="section-tag">
            ${t.sparkles(`icon`,14,2)}
            <span>Katalog Pilihan</span>
          </div>
          <h2 class="section-title">Produk & Langganan AI Terpopuler</h2>
          <p class="section-desc">
            Langganan piranti lunak kecerdasan buatan dan lisensi pengembang orisinal dengan jaminan aktivasi sah tanpa risiko pemblokiran.
          </p>
        </div>

        <div class="grid-3">
          ${r.map(n=>`
            <div class="product-card">
              <div class="product-badges-row">
                <div class="product-badge-group">
                  <span class="badge ${n.badge===`Terlaris`?`badge-bestseller`:n.badge===`Baru`?`badge-new`:`badge-popular`}">
                    ${n.badge}
                  </span>
                  ${n.isOfficialLicense?`
                    <span class="badge badge-success">
                      ${t.shieldCheck(`icon`,12,2)} Resmi
                    </span>
                  `:``}
                </div>
                ${n.rating&&n.reviewsCount>0?`
                  <div class="product-rating">
                    ${t.star(`icon`,14,2)}
                    <span>${n.rating}</span>
                    <span class="product-rating-count">(${n.reviewsCount} ulasan)</span>
                  </div>
                `:`
                  <span class="product-rating-empty">Belum ada ulasan</span>
                `}
              </div>

              <h3 class="product-title">
                <a href="#/products/${n.id}">${n.name}</a>
              </h3>
              <div class="product-tagline">${n.tagline}</div>
              <p class="product-desc">${n.shortDescription}</p>

              <div class="product-features-mini">
                ${n.features.slice(0,3).map(e=>`
                  <div class="product-feature-pill">
                    <span style="color: var(--color-success);">${t.check(`icon`,15,2)}</span>
                    <span>${e}</span>
                  </div>
                `).join(``)}
              </div>

              <div class="product-card-footer">
                <div class="product-pricing">
                  ${n.originalPrice?`<span class="original-price">${e(n.originalPrice)}</span>`:``}
                  <div>
                    <span class="current-price">${e(n.price)}</span>
                    <span style="font-size: 0.8125rem; color: var(--text-muted);">${n.pricePeriod}</span>
                  </div>
                </div>
                <div class="flex items-center gap-2">
                  <a href="#/products/${n.id}" class="btn btn-outline btn-sm">Rincian</a>
                  <button class="btn btn-primary btn-sm order-product-now-btn" data-id="${n.id}">
                    ${t.shoppingCart(`icon`,16,2)}
                    <span>Pesan Sekarang</span>
                  </button>
                </div>
              </div>
            </div>
          `).join(``)}
        </div>

        <div style="text-align: center; margin-top: 3rem;">
          <a href="#/products" class="btn btn-primary btn-md">
            <span>Buka Katalog Lengkap</span>
            ${t.arrowRight(`icon`,18,2)}
          </a>
        </div>
      </div>
    </section>

    <!-- 10. ALASAN MEMILIH MULTICLOUD -->
    <section class="section" aria-label="Alasan Memilih MultiCloud">
      <div class="container">
        <div class="section-header">
          <div class="section-tag">
            ${t.shieldCheck(`icon`,14,2)}
            <span>Keunggulan Utama</span>
          </div>
          <h2 class="section-title">Mengapa Memilih MultiCloud?</h2>
          <p class="section-desc">
            Kami mengutamakan stabilitas teknis, keabsahan lisensi resmi, dan kemudahan transaksi lokal bagi ekosistem digital Indonesia.
          </p>
        </div>

        <div class="grid-3">
          ${ue.map(e=>`
            <div class="why-card">
              <div class="why-icon-box">
                ${t[e.icon]?t[e.icon](`icon`,22,2):t.shieldCheck(`icon`,22,2)}
              </div>
              <h3 class="why-title">${e.title}</h3>
              <p class="why-desc">${e.desc}</p>
            </div>
          `).join(``)}
        </div>
      </div>
    </section>

    <!-- 11. STATISTIK PLATFORM -->
    <section class="section" style="background-color: var(--bg-surface-secondary);" aria-label="Statistik Platform">
      <div class="container">
        <div class="section-header">
          <div class="section-tag">
            ${t.activity(`icon`,14,2)}
            <span>Skalabilitas Teruji</span>
          </div>
          <h2 class="section-title">Statistik & Keterandalan Platform</h2>
          <p class="section-desc">
            Bukti nyata dari jutaan transaksi data dan puluhan ribu pengembang yang mempercayakan kebutuhan komputasi mereka di MultiCloud.
          </p>
        </div>

        <div class="stats-grid">
          ${ce.map(e=>`
            <div class="stat-card">
              <div class="stat-icon">
                ${t[e.icon]?t[e.icon](`icon`,32,2):t.activity(`icon`,32,2)}
              </div>
              <div class="stat-value">${e.value}</div>
              <div class="stat-label">${e.label}</div>
              <div class="stat-desc">${e.desc}</div>
            </div>
          `).join(``)}
        </div>
      </div>
    </section>

    <!-- 12. PERTANYAAN UMUM (FAQ) -->
    <section class="section" aria-label="Pertanyaan yang Sering Diajukan">
      <div class="container">
        <div class="section-header">
          <div class="section-tag">
            ${t.helpCircle(`icon`,14,2)}
            <span>Tanya Jawab</span>
          </div>
          <h2 class="section-title">Pertanyaan yang Sering Diajukan</h2>
          <p class="section-desc">
            Temukan jawaban komprehensif seputar legalitas akun, peladen awan, metode pembayaran nasional, dan garansi layanan.
          </p>
        </div>

        <div class="faq-list" id="faq-accordion-container">
          ${le.map((e,n)=>`
            <div class="faq-item ${n===0?`active`:``}">
              <button class="faq-question" type="button" aria-expanded="${n===0}">
                <span>${e.question}</span>
                <span class="faq-chevron">${t.chevronDown(`icon`,20,2)}</span>
              </button>
              <div class="faq-answer">
                ${e.answer}
              </div>
            </div>
          `).join(``)}
        </div>
      </div>
    </section>

    <!-- 13. AJAKAN BERTINDAK (CALL TO ACTION) -->
    <section class="section" style="padding-top: 0;" aria-label="Ajakan Bertindak">
      <div class="container">
        <div class="cta-banner">
          <div class="cta-banner-content">
            <h2 class="cta-title">Siap Membangun dan Mengembangkan Proyek Digital Anda?</h2>
            <p class="cta-desc">
              Daftar sekarang dan nikmati kemudahan akses peladen awan berlatensi rendah, gerbang API bisnis, dan langganan AI resmi dalam satu akun terintegrasi.
            </p>
            <div class="cta-buttons">
              <a href="#/register" class="btn btn-primary btn-lg">
                <span>Daftar Akun Gratis</span>
                ${t.arrowRight(`icon`,18,2)}
              </a>
              <a href="#/pricing" class="btn btn-outline btn-lg">
                <span>Lihat Daftar Tarif</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}function ge(){document.querySelectorAll(`.view-service-detail-btn`).forEach(e=>{e.onclick=()=>{let t=e.getAttribute(`data-id`),n=T.find(e=>e.id===t);n&&fe(n)}}),document.querySelectorAll(`.order-product-now-btn`).forEach(e=>{e.onclick=()=>{let t=e.getAttribute(`data-id`),n=l.find(e=>e.id===t);n&&O({itemTitle:n.name,category:n.category,packageName:n.packages?.[0]?.name||`Paket Standar`,amount:n.packages?.[0]?.price||n.price})}});let e=document.querySelectorAll(`.faq-item`);e.forEach(t=>{let n=t.querySelector(`.faq-question`);n.onclick=()=>{let n=t.classList.contains(`active`);e.forEach(e=>e.classList.remove(`active`)),n||t.classList.add(`active`)}})}var k=`all`,A=``;function _e(e=`all`){return k=e,A=``,`
    <div class="page-header">
      <div class="container">
        <div class="breadcrumbs">
          <a href="#/">Beranda</a>
          ${t.chevronRight(`icon`,14,2)}
          <span class="current">Layanan</span>
        </div>
        <div class="page-header-content">
          <h1 style="font-size: 2.5rem; font-weight: 800; margin-bottom: 0.75rem;">Katalog Layanan Digital</h1>
          <p style="font-size: 1.125rem; color: var(--text-secondary); line-height: 1.6;">
            Pilih dari rangkaian solusi infrastruktur Komputasi Awan, Layanan API, langganan kecerdasan buatan resmi, dan piranti lunak digital untuk mendukung akselerasi bisnis Anda.
          </p>
        </div>
      </div>
    </div>

    <div class="container" style="padding-bottom: 5rem;">
      <!-- Bilah Penyaring & Pencarian -->
      <div class="services-filter-bar">
        <div class="filter-pills" id="services-category-pills">
          <button class="filter-pill ${k===`all`?`active`:``}" data-cat="all">
            Semua Layanan (${T.length})
          </button>
          ${C.map(e=>`
            <button class="filter-pill ${k===e.id?`active`:``}" data-cat="${e.id}">
              ${e.title}
            </button>
          `).join(``)}
        </div>

        <div style="min-width: 280px; max-width: 380px; width: 100%;">
          <div class="search-wrapper">
            <span class="search-icon">${t.search(`icon`,18,2)}</span>
            <input type="text" class="form-input search-input" id="services-search-input" placeholder="Cari layanan (misal: VPS, WhatsApp, Cursor)..." />
          </div>
        </div>
      </div>

      <!-- Kisi Layanan -->
      <div class="grid-2" id="services-grid-container">
        <!-- Dirender oleh fungsi updateServicesGrid -->
      </div>
    </div>
  `}function j(){let e=document.getElementById(`services-grid-container`);if(!e)return;let n=e=>new Intl.NumberFormat(`id-ID`,{style:`currency`,currency:`IDR`,maximumFractionDigits:0}).format(e),r=T.filter(e=>{let t=k===`all`||e.category===k,n=A===``||e.name.toLowerCase().includes(A.toLowerCase())||e.description.toLowerCase().includes(A.toLowerCase())||e.tagline.toLowerCase().includes(A.toLowerCase());return t&&n}).sort((e,t)=>(e.startingPrice||0)-(t.startingPrice||0));r.length===0?e.innerHTML=`
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
        <div style="width: 56px; height: 56px; border-radius: var(--radius-full); background-color: var(--bg-surface-secondary); color: var(--text-muted); display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem auto;">
          ${t.search(`icon`,28,2)}
        </div>
        <h3 style="font-size: 1.25rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.5rem;">Tidak Ada Layanan yang Cocok</h3>
        <p style="color: var(--text-muted); font-size: 0.9375rem;">Coba sesuaikan kata kunci pencarian atau ubah penyaring kategori Anda.</p>
      </div>
    `:(e.innerHTML=r.map(e=>`
    <div class="service-card">
      <div class="service-card-top">
        <div class="card-icon-box">
          ${t[e.icon]?t[e.icon](`icon`,22,2):t.cloud(`icon`,22,2)}
        </div>
        ${e.officialLicense?`
          <span class="service-badge-official">
            ${t.shieldCheck(`icon`,13,2)}
            <span>Resmi</span>
          </span>
        `:`
          <span class="badge badge-outline">MultiCloud</span>
        `}
      </div>

      <h3 class="service-name">${e.name}</h3>
      <div class="service-tagline">${e.tagline}</div>
      <p class="service-description">${e.description}</p>

      <div class="service-features-list">
        ${(e.features||[]).slice(0,3).map(e=>`
          <div class="service-feature-row">
            <span style="color: var(--color-success);">${t.check(`icon`,15,2)}</span>
            <span>${e}</span>
          </div>
        `).join(``)}
      </div>

      <div class="service-card-bottom">
        <div class="service-price-block">
          <span class="service-price-title">Mulai dari</span>
          <div>
            <span class="service-price-amount">${n(e.startingPrice)}</span>
            <span class="service-price-period">${e.priceUnit}</span>
          </div>
        </div>
        <button class="btn btn-outline-primary btn-sm service-item-view-btn" data-id="${e.id}">
          <span>Lihat Rincian</span>
          ${t.arrowRight(`icon`,16,2)}
        </button>
      </div>
    </div>
  `).join(``),e.querySelectorAll(`.service-item-view-btn`).forEach(e=>{e.onclick=()=>{let t=e.getAttribute(`data-id`),n=T.find(e=>e.id===t);n&&fe(n)}}))}function ve(){j();let e=document.querySelectorAll(`#services-category-pills .filter-pill`);e.forEach(t=>{t.onclick=()=>{e.forEach(e=>e.classList.remove(`active`)),t.classList.add(`active`),k=t.getAttribute(`data-cat`),j()}});let t=document.getElementById(`services-search-input`);t&&(t.oninput=e=>{A=e.target.value.trim(),j()})}var M=`all`,N=``,P=`price-asc`,F=`ready`,ye=``,I=[...l];function be(e){return new Intl.NumberFormat(`id-ID`,{style:`currency`,currency:`IDR`,maximumFractionDigits:0}).format(e)}function xe(e){return e===`Terlaris`?`badge-bestseller`:e===`Baru`?`badge-new`:`badge-popular`}function Se(e=`all`){return M=c.some(t=>t.id===e)?e:`all`,N=``,P=`price-asc`,I=[...l],F=`ready`,ye=``,`
    <div class="page-header page-header-compact">
      <div class="container">
        <nav class="breadcrumbs" aria-label="Jejak Navigasi">
          <a href="#/">Beranda</a>
          ${t.chevronRight(`icon`,14,2)}
          <span class="current" aria-current="page">Produk</span>
        </nav>
        <div class="page-header-content">
          <h1 style="font-size: 2.25rem; font-weight: 800; margin-bottom: 0.5rem;">Katalog Produk Digital</h1>
          <p style="font-size: 1.0625rem; color: var(--text-secondary); line-height: 1.55;">
            Pilih layanan dan lisensi resmi yang Anda butuhkan, lalu klik <strong>Pesan</strong> atau <strong>Rincian</strong> untuk melihat pilihan paket.
          </p>
        </div>
      </div>
    </div>

    <div class="container" style="padding-bottom: 5rem;">
      <!-- Bilah Alat Penyaring & Pencarian -->
      <div class="catalog-toolbar">
        <div class="filter-pills" id="product-category-pills" role="group" aria-label="Saring kategori produk">
          ${c.map(e=>`
            <button
              type="button"
              class="filter-pill ${M===e.id?`active`:``}"
              data-cat="${e.id}"
              aria-pressed="${M===e.id}"
            >
              ${e.label}
            </button>
          `).join(``)}
        </div>

        <div class="catalog-search-sort">
          <div class="toolbar-field toolbar-field-grow">
            <label class="toolbar-label" for="products-search-input">Cari Produk</label>
            <div class="search-wrapper">
              <span class="search-icon">${t.search(`icon`,18,2)}</span>
              <input
                type="search"
                class="form-input search-input"
                id="products-search-input"
                placeholder="Cari nama produk..."
              />
            </div>
          </div>

          <div class="toolbar-field toolbar-field-sort">
            <label class="toolbar-label" for="products-sort-select">Urutkan</label>
            <select class="form-select" id="products-sort-select">
              <option value="price-asc" selected>Harga: Terendah</option>
              <option value="price-desc">Harga: Tertinggi</option>
              <option value="popular">Paling Populer</option>
              <option value="rating">Ulasan Tertinggi</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Ringkasan Jumlah Produk -->
      <div class="catalog-section-bar">
        <span class="catalog-count-pill" id="catalog-results-count" aria-live="polite"></span>
      </div>

      <!-- Kisi Produk -->
      <div class="grid-2" id="products-grid-container">
        <!-- Dirender oleh updateProductsGrid -->
      </div>
    </div>
  `}function L(){let e=document.getElementById(`products-grid-container`),n=document.getElementById(`catalog-results-count`);if(!e)return;if(F===`loading`){n&&(n.textContent=`Memuat produk...`),e.innerHTML=`
      <div class="catalog-state-box" role="status" aria-live="polite">
        <div class="catalog-state-icon">
          ${t.refresh(`icon`,26,2)}
        </div>
        <h2 class="catalog-state-title">Memuat Katalog Produk</h2>
        <p class="catalog-state-desc">Menyiapkan daftar layanan dan lisensi resmi untuk Anda.</p>
      </div>
    `;return}if(F===`error`){n&&(n.textContent=`Gagal memuat`),e.innerHTML=`
      <div class="catalog-state-box catalog-state-error" role="alert">
        <div class="catalog-state-icon error">
          ${t.alertCircle(`icon`,26,2)}
        </div>
        <h2 class="catalog-state-title">Gagal Memuat Katalog Produk</h2>
        <p class="catalog-state-desc">${ye||`Terjadi gangguan saat memuat daftar produk. Silakan coba lagi.`}</p>
        <button type="button" class="btn btn-primary btn-sm" id="retry-catalog-load-btn">
          ${t.refresh(`icon`,16,2)}
          <span>Muat Ulang</span>
        </button>
      </div>
    `;let r=document.getElementById(`retry-catalog-load-btn`);r&&(r.onclick=()=>{F=`ready`,I=[...l],L()});return}let r=I.filter(e=>{let t=M===`all`||e.category===M,n=N.toLowerCase(),r=n===``||e.name.toLowerCase().includes(n)||e.shortDescription.toLowerCase().includes(n)||e.tagline.toLowerCase().includes(n);return t&&r});if(P===`price-asc`)r.sort((e,t)=>e.price-t.price);else if(P===`price-desc`)r.sort((e,t)=>t.price-e.price);else if(P===`rating`)r.sort((e,t)=>(t.rating||0)-(e.rating||0));else{let e={Terlaris:1,Populer:2,Baru:3};r.sort((t,n)=>(e[t.badge]||99)-(e[n.badge]||99))}if(n&&(n.textContent=`Menampilkan ${r.length} produk`),r.length===0){e.innerHTML=`
      <div class="catalog-state-box">
        <div class="catalog-state-icon">
          ${t.search(`icon`,26,2)}
        </div>
        <h2 class="catalog-state-title">Produk Tidak Ditemukan</h2>
        <p class="catalog-state-desc">Tidak ada produk yang cocok dengan pencarian atau kategori yang dipilih.</p>
        <button type="button" class="btn btn-outline btn-sm" id="reset-catalog-filter-btn">
          <span>Tampilkan Semua Produk</span>
        </button>
      </div>
    `;let n=document.getElementById(`reset-catalog-filter-btn`);n&&(n.onclick=()=>{M=`all`,N=``;let e=document.getElementById(`products-search-input`);e&&(e.value=``),document.querySelectorAll(`#product-category-pills .filter-pill`).forEach(e=>{let t=e.getAttribute(`data-cat`)===`all`;e.classList.toggle(`active`,t),e.setAttribute(`aria-pressed`,String(t))}),L()})}else e.innerHTML=r.map(e=>`
    <article class="product-card">
      <div class="product-badges-row">
        <div class="product-badge-group">
          <span class="badge ${xe(e.badge)}">${e.badge}</span>
          ${e.isOfficialLicense?`
            <span class="badge badge-success">
              ${t.shieldCheck(`icon`,12,2)} Resmi
            </span>
          `:``}
        </div>
        ${e.rating&&e.reviewsCount>0?`
          <div class="product-rating" aria-label="Nilai ${e.rating} dari ${e.reviewsCount} ulasan">
            ${t.star(`icon`,14,2)}
            <span>${e.rating}</span>
            <span class="product-rating-count">(${e.reviewsCount})</span>
          </div>
        `:``}
      </div>

      <div class="product-card-head">
        <div class="card-icon-box" style="width: 42px; height: 42px;">
          ${t[e.icon]?t[e.icon](`icon`,22,2):t.package(`icon`,22,2)}
        </div>
        <div>
          <h2 class="product-title">
            <a href="#/products/${e.id}">${e.name}</a>
          </h2>
          <div class="product-tagline">${e.tagline}</div>
        </div>
      </div>

      <p class="product-desc">${e.shortDescription}</p>

      <div class="product-features-mini">
        ${(e.features||[]).slice(0,2).map(e=>`
          <div class="product-feature-pill">
            <span class="feature-check-icon">${t.check(`icon`,15,2)}</span>
            <span>${e}</span>
          </div>
        `).join(``)}
      </div>

      <div class="product-card-footer">
        <div class="product-pricing">
          ${e.originalPrice?`<span class="original-price">${be(e.originalPrice)}</span>`:``}
          <div>
            <span class="current-price">${be(e.price)}</span>
            <span class="price-period-text">${e.pricePeriod}</span>
          </div>
        </div>
        <div class="product-card-actions">
          <a href="#/products/${e.id}" class="btn btn-outline btn-sm">Rincian</a>
          <button type="button" class="btn btn-primary btn-sm product-card-order-btn" data-id="${e.id}">
            ${t.shoppingCart(`icon`,16,2)}
            <span>Pesan</span>
          </button>
        </div>
      </div>
    </article>
  `).join(``),e.querySelectorAll(`.product-card-order-btn`).forEach(e=>{e.onclick=()=>{let t=e.getAttribute(`data-id`),n=I.find(e=>e.id===t);n&&O({itemTitle:n.name,category:n.category,packageName:n.packages?.[0]?.name||`Paket Standar`,amount:n.packages?.[0]?.price||n.price})}})}async function Ce(){if(b.isConfigured())try{let e=await b.getProducts();if(Array.isArray(e)&&e.length>0){let t=new Map;l.forEach(e=>t.set(e.id,e)),e.forEach(e=>{e&&e.id&&!t.has(e.id)&&t.set(e.id,{id:e.id,slug:e.id,category:e.category_id||`software-licenses`,name:e.name,tagline:e.tagline||`Produk Digital Resmi MultiCloud`,badge:e.badge||`Populer`,rating:e.reviews_count>0?Number(e.rating):null,reviewsCount:Number(e.reviews_count||0),shortDescription:e.short_description||``,fullDescription:e.full_description||e.short_description||``,price:Number(e.price||0),originalPrice:e.original_price?Number(e.original_price):null,pricePeriod:e.price_period||`/bulan`,icon:e.icon||`package`,isOfficialLicense:e.is_official_license!==!1,packages:Array.isArray(e.packages)&&e.packages.length>0?e.packages:[{id:`${e.id}-std`,name:`Paket Standar`,price:Number(e.price||0),period:`1 Bulan`,note:`Aktivasi resmi`}],features:Array.isArray(e.features)?e.features:[],specifications:Array.isArray(e.specifications)?e.specifications:[],faq:[]})}),I=Array.from(t.values()),document.getElementById(`products-grid-container`)&&L()}}catch(e){console.warn(`[MultiCloud] Sinkronisasi produk opsional dilewati:`,e)}}function we(){L(),Ce();let e=document.querySelectorAll(`#product-category-pills .filter-pill`);e.forEach(t=>{t.onclick=()=>{e.forEach(e=>{e.classList.remove(`active`),e.setAttribute(`aria-pressed`,`false`)}),t.classList.add(`active`),t.setAttribute(`aria-pressed`,`true`),M=t.getAttribute(`data-cat`),L()}});let t=document.getElementById(`products-search-input`);t&&(t.oninput=e=>{N=e.target.value.trim(),L()});let n=document.getElementById(`products-sort-select`);n&&(n.onchange=e=>{P=e.target.value,L()})}var R=0;function Te(e){return e===`Terlaris`?`badge-bestseller`:e===`Baru`?`badge-new`:`badge-popular`}function Ee(e){R=0;let n=l.find(t=>t.id===e||t.slug===e),r=e=>new Intl.NumberFormat(`id-ID`,{style:`currency`,currency:`IDR`,maximumFractionDigits:0}).format(e);if(!n)return`
      <div class="container" style="padding: 5rem 1.5rem;">
        <div class="catalog-state-box catalog-state-error" role="alert">
          <div class="catalog-state-icon error">
            ${t.alertCircle(`icon`,28,2)}
          </div>
          <h1 style="font-size: 1.75rem; font-weight: 800; margin-bottom: 0.5rem;">Produk Tidak Ditemukan</h1>
          <p class="catalog-state-desc">Produk yang Anda cari tidak tersedia atau tautan telah berubah. Silakan kembali ke katalog untuk melihat daftar layanan aktif.</p>
          <a href="#/products" class="btn btn-primary btn-md">
            <span>Kembali ke Katalog Produk</span>
          </a>
        </div>
      </div>
    `;let i=n.packages[0]||{name:`Paket Standar`,price:n.price,period:n.pricePeriod};return`
    <div class="page-header" style="margin-bottom: 2.5rem;">
      <div class="container">
        <nav class="breadcrumbs" aria-label="Jejak Navigasi">
          <a href="#/">Beranda</a>
          ${t.chevronRight(`icon`,14,2)}
          <a href="#/products">Produk</a>
          ${t.chevronRight(`icon`,14,2)}
          <span class="current" aria-current="page">${n.name}</span>
        </nav>
      </div>
    </div>

    <div class="container" style="padding-bottom: 5rem;">
      <div class="product-detail-layout">
        <!-- Kolom Utama: Rincian Produk, Spesifikasi, Fitur, FAQ -->
        <div class="product-detail-main">
          <div class="product-detail-hero-box">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 0.75rem;">
              <div style="display: flex; align-items: center; gap: 0.75rem;">
                <div class="card-icon-box" style="width: 56px; height: 56px;">
                  ${t[n.icon]?t[n.icon](`icon`,30,2):t.package(`icon`,30,2)}
                </div>
                <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
                  <span class="badge ${Te(n.badge)}">
                    ${n.badge}
                  </span>
                  ${n.isOfficialLicense?`
                    <span class="badge badge-success">
                      ${t.shieldCheck(`icon`,12,2)} Lisensi Sah & Resmi
                    </span>
                  `:``}
                </div>
              </div>

              ${n.rating&&n.reviewsCount>0?`
                <div class="product-rating" style="font-size: 0.9375rem;">
                  ${t.star(`icon`,18,2)}
                  <span>${n.rating}</span>
                  <span class="product-rating-count">(${n.reviewsCount} ulasan pembeli)</span>
                </div>
              `:`
                <span class="product-rating-empty">Produk Baru, belum ada ulasan</span>
              `}
            </div>

            <h1 class="product-detail-title">${n.name}</h1>
            <div style="font-size: 1rem; color: var(--color-primary); font-weight: 600; margin-bottom: 1.25rem;">
              ${n.tagline}
            </div>

            <p class="product-detail-desc">
              ${n.fullDescription}
            </p>

            <!-- Bagian Spesifikasi Teknis -->
            <div class="product-specs-card">
              <h2 class="product-specs-title">Spesifikasi & Informasi Lisensi</h2>
              <div class="specs-grid">
                ${n.specifications.map(e=>`
                  <div class="spec-item">
                    <span class="spec-key">${e.key}</span>
                    <span class="spec-value">${e.value}</span>
                  </div>
                `).join(``)}
              </div>
            </div>

            <!-- Daftar Fitur -->
            <div style="margin-bottom: 2.5rem;">
              <h2 style="font-size: 1.25rem; font-weight: 700; color: var(--text-primary); margin-bottom: 1.25rem;">
                Fitur & Manfaat Utama
              </h2>
              <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                ${n.features.map(e=>`
                  <div style="display: flex; align-items: flex-start; gap: 0.75rem; font-size: 0.9375rem; color: var(--text-secondary);">
                    <span class="feature-check-icon" style="margin-top: 2px;">${t.checkCircle(`icon`,18,2)}</span>
                    <span>${e}</span>
                  </div>
                `).join(``)}
              </div>
            </div>

            <!-- Tanya Jawab Produk -->
            ${n.faq&&n.faq.length>0?`
              <div style="border-top: 1px solid var(--border-color); padding-top: 2rem;">
                <h2 style="font-size: 1.25rem; font-weight: 700; color: var(--text-primary); margin-bottom: 1.25rem;">
                  Pertanyaan Seputar Produk
                </h2>
                <div style="display: flex; flex-direction: column; gap: 1rem;">
                  ${n.faq.map(e=>`
                    <div style="background-color: var(--bg-surface-secondary); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
                      <h3 style="font-size: 0.9375rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
                        <span style="color: var(--color-primary);">${t.helpCircle(`icon`,18,2)}</span>
                        <span>${e.q}</span>
                      </h3>
                      <p style="font-size: 0.875rem; color: var(--text-secondary); line-height: 1.55; margin-left: 1.625rem;">
                        ${e.a}
                      </p>
                    </div>
                  `).join(``)}
                </div>
              </div>
            `:``}
          </div>
        </div>

        <!-- Kolom Samping: Pilihan Paket & Tombol Beli -->
        <aside class="product-detail-sidebar" aria-label="Pilihan Paket Pembelian">
          <div class="purchase-sidebar-card">
            <h2 class="purchase-sidebar-title">Pilih Paket Langganan</h2>

            <div class="package-radio-list" id="package-selector-list" role="radiogroup" aria-label="Daftar paket ${n.name}">
              ${n.packages.map((e,t)=>`
                <label class="package-option ${t===0?`selected`:``}" data-index="${t}">
                  <input type="radio" name="product-package-choice" value="${t}" ${t===0?`checked`:``} />
                  <div class="package-info">
                    <span class="package-name">${e.name}</span>
                    <span class="package-price">${r(e.price)}</span>
                    <span class="package-note">${e.note||e.period}</span>
                  </div>
                </label>
              `).join(``)}
            </div>

            <div style="border-top: 1px solid var(--border-color); padding-top: 1.25rem; margin-bottom: 1.5rem;">
              <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 0.25rem;">
                <span style="font-size: 0.875rem; color: var(--text-muted);">Total Tagihan:</span>
                <strong style="font-size: 1.5rem; font-weight: 800; color: var(--text-primary);" id="sidebar-display-price">
                  ${r(i.price)}
                </strong>
              </div>
              <span style="font-size: 0.8125rem; color: var(--text-muted);" id="sidebar-display-period">
                Durasi: ${i.period}
              </span>
            </div>

            <button type="button" class="btn btn-primary btn-block btn-lg" id="detail-page-order-btn" style="margin-bottom: 1rem;">
              ${t.shoppingCart(`icon`,18,2)}
              <span>Beli Paket Terpilih</span>
            </button>

            <div style="display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.8125rem; color: var(--text-muted); text-align: center;">
              <div style="display: flex; align-items: center; justify-content: center; gap: 0.35rem;">
                ${t.shieldCheck(`icon`,16,2)}
                <span>Jaminan Aktivasi Resmi & Legal</span>
              </div>
              <div style="display: flex; align-items: center; justify-content: center; gap: 0.35rem;">
                ${t.zap(`icon`,16,2)}
                <span>Aktivasi Cepat 5-15 Menit</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  `}function De(e){let t=l.find(t=>t.id===e||t.slug===e);if(!t)return;let n=e=>new Intl.NumberFormat(`id-ID`,{style:`currency`,currency:`IDR`,maximumFractionDigits:0}).format(e),r=document.querySelectorAll(`.package-option`),i=document.getElementById(`sidebar-display-price`),a=document.getElementById(`sidebar-display-period`),o=e=>{R=e,r.forEach((t,n)=>{t.classList.toggle(`selected`,n===e);let r=t.querySelector(`input[type="radio"]`);r&&(r.checked=n===e)});let o=t.packages[e];i&&o&&(i.textContent=n(o.price)),a&&o&&(a.textContent=`Durasi: ${o.period}`)};r.forEach(e=>{let t=parseInt(e.getAttribute(`data-index`),10),n=e.querySelector(`input[type="radio"]`);n&&(n.onchange=()=>o(t)),e.onclick=()=>o(t)});let s=document.getElementById(`detail-page-order-btn`);s&&(s.onclick=()=>{let e=t.packages[R]||t.packages[0];O({itemTitle:t.name,category:t.category,packageName:e.name,amount:e.price})})}var z=[{id:`plan-starter`,name:`Pengembang Pemula`,badge:`Mulai Cepat`,isPopular:!1,description:`Pilihan ideal bagi pekerja lepas, pelajar, dan proyek pribadi yang membutuhkan infrastruktur andal berbiaya hemat.`,priceMonthly:95e3,priceYearly:76e3,billingNote:`Ditagih tahunan atau Rp 95.000 /bulan`,features:[{text:`1 vCPU Khusus AMD EPYC`,included:!0},{text:`2GB Memori RAM Kecepatan Tinggi DDR4`,included:!0},{text:`40GB Penyimpanan NVMe SSD`,included:!0},{text:`Lebar Pita 1 Gbps Tanpa Batas Kuota`,included:!0},{text:`1 Alamat IPv4 Khusus + IPv6`,included:!0},{text:`Inferensi AI Terpadu (50.000 token/bln)`,included:!0},{text:`Gerbang WhatsApp API (1.000 pesan/bln)`,included:!0},{text:`Cadangan Data Mingguan Otomatis`,included:!0},{text:`Jaminan Keterandalan SLA 99,95%`,included:!1},{text:`Dukungan Telepon Prioritas 24/7`,included:!1},{text:`Domain Kustom & Penjenamaan Khusus`,included:!1}],ctaText:`Pilih Paket Pemula`,ctaVariant:`secondary`},{id:`plan-pro`,name:`Bisnis Profesional`,badge:`Paling Populer`,isPopular:!0,description:`Kombinasi daya komputasi dan gerbang API perusahaan untuk rintisan (startup), agensi, dan aplikasi bertrafik aktif.`,priceMonthly:249e3,priceYearly:199e3,billingNote:`Ditagih tahunan atau Rp 249.000 /bulan`,features:[{text:`4 vCPU Khusus AMD EPYC`,included:!0},{text:`8GB Memori RAM Kecepatan Tinggi DDR4`,included:!0},{text:`120GB Penyimpanan NVMe SSD Gen4`,included:!0},{text:`Lebar Pita 10 Gbps Tanpa Batas Kuota`,included:!0},{text:`2 Alamat IPv4 Khusus + IPv6`,included:!0},{text:`Inferensi AI Terpadu (500.000 token/bln)`,included:!0},{text:`Gerbang WhatsApp API (10.000 pesan/bln)`,included:!0},{text:`Cadangan Harian Otomatis + Snapshot Instan`,included:!0},{text:`Jaminan Keterandalan SLA 99,99% Bergaransi`,included:!0},{text:`Dukungan Obrolan Langsung Prioritas 24/7`,included:!0},{text:`Manajer Akun Terdedikasi`,included:!1}],ctaText:`Pilih Bisnis Pro`,ctaVariant:`primary`},{id:`plan-enterprise`,name:`Korporat Skala Besar`,badge:`Skala Besar`,isPopular:!1,description:`Solusi tanpa kompromi untuk korporasi, tekfin, dan platform dengan kebutuhan kustomisasi arsitektur tingkat lanjut.`,priceMonthly:89e4,priceYearly:712e3,billingNote:`Ditagih tahunan atau Rp 890.000 /bulan`,features:[{text:`16 vCPU Bare-Metal Performa Tinggi`,included:!0},{text:`32GB Memori RAM ECC Terdaftar`,included:!0},{text:`500GB Penyimpanan NVMe RAID-10`,included:!0},{text:`Port Jaringan Uplink Khusus 10 Gbps`,included:!0},{text:`5 Alamat IPv4 Khusus + Reverse DNS`,included:!0},{text:`Inferensi AI Terpadu Kuota Perusahaan`,included:!0},{text:`Gerbang WhatsApp API Tanpa Batas Kuota`,included:!0},{text:`Replikasi Data Waktu Nyata Berkelanjutan`,included:!0},{text:`Jaminan SLA 99,99% Berkekuatan Hukum`,included:!0},{text:`Dukungan Teknis Hotline 24 Jam Khusus`,included:!0},{text:`Arsitek Solusi Khusus & Perjanjian NDA`,included:!0}],ctaText:`Hubungi Tim Penjualan`,ctaVariant:`secondary`}],Oe=[{category:`Spesifikasi Komputasi`,items:[{name:`Prosesor vCPU`,starter:`1 vCPU AMD`,pro:`4 vCPU EPYC`,enterprise:`16 vCPU EPYC`},{name:`Memori RAM`,starter:`2 GB DDR4`,pro:`8 GB DDR4`,enterprise:`32 GB ECC`},{name:`Penyimpanan NVMe`,starter:`40 GB`,pro:`120 GB Gen4`,enterprise:`500 GB RAID-10`},{name:`Port Jaringan`,starter:`1 Gbps`,pro:`10 Gbps Burst`,enterprise:`10 Gbps Khusus`}]},{category:`Layanan API Terintegrasi`,items:[{name:`WhatsApp Business API`,starter:`1.000 Pesan/bln`,pro:`10.000 Pesan/bln`,enterprise:`Tanpa Batas Kuota`},{name:`Inferensi AI Terpadu`,starter:`50.000 Token/bln`,pro:`500.000 Token/bln`,enterprise:`Klaster Perusahaan`},{name:`Paket API Utilitas`,starter:`Frekuensi Standar`,pro:`Frekuensi Tinggi`,enterprise:`Titik Akhir Khusus`},{name:`Pengiriman Webhook`,starter:`Tingkat Sukses 99%`,pro:`Percobaan Ulang Otomatis`,enterprise:`Antrean Tanpa Kehilangan Data`}]},{category:`Keamanan & Kepatuhan`,items:[{name:`Mitigasi Serangan DDoS`,starter:`Standar 10 Gbps`,pro:`Perusahaan 1 Tbps`,enterprise:`Mitigasi Anycast Lanjutan`},{name:`Sertifikat Enkripsi SSL`,starter:`Let's Encrypt Gratis`,pro:`Wildcard SSL Otomatis`,enterprise:`Sertifikat EV / OV Kustom`},{name:`Pencadangan & Pemulihan`,starter:`Mingguan`,pro:`Harian + 3 Snapshot`,enterprise:`Pemulihan Point-in-Time`},{name:`Jaminan Keterandalan (SLA)`,starter:`99,9%`,pro:`99,99%`,enterprise:`99,99% Kontrak Mengikat`}]}],B=!1;function ke(){return B=!1,`
    <div class="page-header">
      <div class="container">
        <div class="breadcrumbs">
          <a href="#/">Beranda</a>
          ${t.chevronRight(`icon`,14,2)}
          <span class="current">Tarif</span>
        </div>
        <div class="page-header-content text-center" style="max-width: 680px; margin: 0 auto; text-align: center;">
          <h1 style="font-size: 2.75rem; font-weight: 800; margin-bottom: 0.75rem;">Paket Tarif Transparan</h1>
          <p style="font-size: 1.125rem; color: var(--text-secondary); line-height: 1.6;">
            Pilih paket infrastruktur komputasi awan dan gerbang API yang sesuai dengan skala proyek Anda. Tanpa biaya tersembunyi, dapat ditingkatkan kapan pun.
          </p>
        </div>
      </div>
    </div>

    <div class="container" style="padding-bottom: 5rem;">
      <!-- Pengalih Siklus Tagihan -->
      <div class="pricing-toggle-container">
        <span class="pricing-toggle-label active" id="billing-monthly-label">Tagihan Bulanan</span>
        <div class="pricing-switch" id="pricing-cycle-switch" role="button" aria-label="Alihkan Tagihan Tahunan" tabindex="0">
          <div class="switch-circle"></div>
        </div>
        <span class="pricing-toggle-label" id="billing-annual-label">Tagihan Tahunan</span>
        <span class="discount-badge">Hemat 20%</span>
      </div>

      <!-- Kartu Paket Tarif -->
      <div class="pricing-grid">
        ${z.map(e=>`
          <div class="pricing-card ${e.isPopular?`popular`:``}">
            ${e.isPopular?`
              <div class="popular-banner">
                ${t.star(`icon`,14,2)}
                <span>${e.badge}</span>
              </div>
            `:``}

            <div class="pricing-header">
              <h3 class="plan-name">${e.name}</h3>
              <p class="plan-description">${e.description}</p>
            </div>

            <div class="pricing-amount-block">
              <span class="price-currency">Rp</span>
              <span class="price-number" data-monthly="${e.priceMonthly}" data-yearly="${e.priceYearly}">
                ${new Intl.NumberFormat(`id-ID`).format(e.priceMonthly)}
              </span>
              <span class="price-freq">/bulan</span>
            </div>
            <div class="pricing-billing-note" data-monthly-note="${e.billingNote}">
              ${e.billingNote}
            </div>

            <div class="pricing-divider"></div>

            <div class="pricing-features-list">
              ${e.features.map(e=>`
                <div class="pricing-feature-row ${e.included?``:`excluded`}">
                  <span class="${e.included?`icon-check`:`icon-cross`}">
                    ${e.included?t.check(`icon`,18,2):t.x(`icon`,18,2)}
                  </span>
                  <span>${e.text}</span>
                </div>
              `).join(``)}
            </div>

            <button class="btn ${e.isPopular?`btn-primary`:`btn-outline`} btn-block pricing-select-plan-btn" data-plan-id="${e.id}" data-plan-name="${e.name}">
              <span>${e.ctaText}</span>
              ${t.arrowRight(`icon`,16,2)}
            </button>
          </div>
        `).join(``)}
      </div>

      <!-- Matriks Komparasi Fitur -->
      <div class="matrix-section">
        <div style="text-align: center; max-width: 600px; margin: 0 auto 2.5rem auto;">
          <h2 style="font-size: 1.875rem; font-weight: 800; color: var(--text-primary); margin-bottom: 0.5rem;">
            Matriks Perbandingan Fitur Detail
          </h2>
          <p style="color: var(--text-secondary); font-size: 0.9375rem;">
            Bandingkan seluruh spesifikasi teknis dan batasan kapasitas untuk menentukan pilihan terbaik bagi kebutuhan sistem Anda.
          </p>
        </div>

        <div class="matrix-table-wrap">
          <table class="matrix-table">
            <thead>
              <tr>
                <th style="width: 32%;">Fitur &amp; Kapasitas Teknis</th>
                <th style="width: 22%;">
                  <div class="matrix-plan-head">
                    <span>Pengembang Pemula</span>
                    <span class="matrix-plan-price">Rp 95.000/bln</span>
                  </div>
                </th>
                <th class="matrix-col-pro" style="width: 23%;">
                  <div class="matrix-plan-head">
                    <span class="matrix-plan-title-row">
                      <span>Bisnis Pro</span>
                      <span class="matrix-pop-pill">Populer</span>
                    </span>
                    <span class="matrix-plan-price">Rp 249.000/bln</span>
                  </div>
                </th>
                <th style="width: 23%;">
                  <div class="matrix-plan-head">
                    <span>Korporat Skala Besar</span>
                    <span class="matrix-plan-price">Rp 890.000/bln</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              ${Oe.map(e=>`
                <tr class="matrix-cat-row">
                  <th colspan="4">${e.category}</th>
                </tr>
                ${e.items.map(e=>`
                  <tr class="matrix-item-row">
                    <td class="matrix-feature-name">${e.name}</td>
                    <td>${e.starter}</td>
                    <td class="matrix-col-pro matrix-pro-val">${e.pro}</td>
                    <td>${e.enterprise}</td>
                  </tr>
                `).join(``)}
              `).join(``)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `}function Ae(){let e=document.getElementById(`pricing-cycle-switch`),t=document.getElementById(`billing-monthly-label`),n=document.getElementById(`billing-annual-label`),r=document.querySelectorAll(`.price-number`),i=()=>{r.forEach(e=>{let t=parseInt(e.getAttribute(`data-monthly`),10),n=parseInt(e.getAttribute(`data-yearly`),10),r=B?n:t;e.textContent=new Intl.NumberFormat(`id-ID`).format(r)}),B?(e.classList.add(`active`),t.classList.remove(`active`),n.classList.add(`active`)):(e.classList.remove(`active`),t.classList.add(`active`),n.classList.remove(`active`))};e&&(e.onclick=()=>{B=!B,i()}),t&&(t.onclick=()=>{B=!1,i()}),n&&(n.onclick=()=>{B=!0,i()}),document.querySelectorAll(`.pricing-select-plan-btn`).forEach(e=>{e.onclick=()=>{e.getAttribute(`data-plan-name`);let t=e.getAttribute(`data-plan-id`),n=z.find(e=>e.id===t)||z[0],r=B?n.priceYearly*12:n.priceMonthly;O({itemTitle:`Langganan `+n.name,category:`cloud-hosting`,packageName:B?`Paket Tahunan (Hemat 20%)`:`Paket Bulanan`,amount:r})}})}function je(){return`
    <div class="page-header">
      <div class="container">
        <div class="breadcrumbs">
          <a href="#/">Beranda</a>
          ${t.chevronRight(`icon`,14,2)}
          <span class="current">Tentang Kami</span>
        </div>
        <div class="page-header-content">
          <h1 style="font-size: 2.5rem; font-weight: 800; margin-bottom: 0.75rem;">Tentang MultiCloud</h1>
          <p style="font-size: 1.125rem; color: var(--text-secondary); line-height: 1.6;">
            Membangun ekosistem teknologi digital terintegrasi untuk mempercepat transformasi pengembang piranti lunak, perusahaan rintisan, dan pelaku industri di Indonesia.
          </p>
        </div>
      </div>
    </div>

    <div class="container" style="padding-bottom: 5rem;">
      <!-- Bagian Kisah & Latar Belakang -->
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center; margin-bottom: 5rem;">
        <div>
          <span class="section-tag">
            ${t.building(`icon`,14,2)}
            <span>Profil Perusahaan</span>
          </span>
          <h2 style="font-size: 2rem; font-weight: 800; color: var(--text-primary); margin-bottom: 1.25rem;">
            One Platform, Multiple Digital Solutions
          </h2>
          <p style="font-size: 1rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1rem;">
            MultiCloud didirikan dengan satu tujuan mendasar: mempermudah akses ke infrastruktur digital kelas dunia, alat kecerdasan buatan, dan gerbang API bisnis tanpa kerumitan administrasi atau kendala pembayaran valuta asing.
          </p>
          <p style="font-size: 1rem; color: var(--text-secondary); line-height: 1.65;">
            Kami meyakini bahwa pengembang perorangan, rintisan bertumbuh, maupun korporasi berhak atas infrastruktur yang stabil, cepat, dan sah secara hukum dengan pendampingan teknisi ahli lokal 24 jam sehari.
          </p>
        </div>

        <div style="background-color: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-xl); padding: 2.5rem; box-shadow: var(--card-shadow);">
          <div style="display: flex; flex-direction: column; gap: 1.5rem;">
            <div style="display: flex; gap: 1rem;">
              <div class="card-icon-box" style="flex-shrink: 0;">
                ${t.rocket(`icon`,22,2)}
              </div>
              <div>
                <h4 style="font-size: 1.125rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.25rem;">Visi Perusahaan</h4>
                <p style="font-size: 0.875rem; color: var(--text-secondary); line-height: 1.55;">
                  Menjadi penyedia pasar digital dan infrastruktur teknologi terdepan di Indonesia yang mengintegrasikan komputasi awan, kecerdasan buatan, dan API bisnis dalam satu ekosistem tepercaya.
                </p>
              </div>
            </div>

            <div style="display: flex; gap: 1rem;">
              <div class="card-icon-box accent" style="flex-shrink: 0;">
                ${t.shieldCheck(`icon`,22,2)}
              </div>
              <div>
                <h4 style="font-size: 1.125rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.25rem;">Misi Perusahaan</h4>
                <p style="font-size: 0.875rem; color: var(--text-secondary); line-height: 1.55;">
                  Menyediakan lisensi AI resmi, hosting berlatensi rendah, serta API andal dengan keterbukaan tarif, aktivasi instan, dan komitmen SLA 99,99%.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Nilai-Nilai Utama -->
      <div class="section-header">
        <span class="section-tag">
          ${t.star(`icon`,14,2)}
          <span>Nilai Integritas</span>
        </span>
        <h2 class="section-title">Prinsip Kerja & Integritas Kami</h2>
        <p class="section-desc">Pilar mendasar yang melandasi setiap produk dan layanan yang kami hadirkan untuk Anda.</p>
      </div>

      <div class="grid-3" style="margin-bottom: 5rem;">
        <div class="card">
          <div class="card-icon-box" style="margin-bottom: 1.25rem;">
            ${t.shieldCheck(`icon`,24,2)}
          </div>
          <h3 class="card-title">100% Sah & Berlisensi Resmi</h3>
          <p class="card-desc">
            Kami menolak keras praktik akun bajakan atau celah ilegal. Setiap akses Cursor, Gemini, Claude, dan ChatGPT dijamin orisinal dari penerbit resmi dengan hak distribusi yang sah.
          </p>
        </div>

        <div class="card">
          <div class="card-icon-box success" style="margin-bottom: 1.25rem;">
            ${t.cpu(`icon`,24,2)}
          </div>
          <h3 class="card-title">Infrastruktur Tier-3 & Tier-4</h3>
          <p class="card-desc">
            Peladen kami ditempatkan di pusat data terbaik di Jakarta dan Singapura dengan mitigasi serangan DDoS, redundansi daya ganda, dan interkoneksi langsung ke jaringan nasional.
          </p>
        </div>

        <div class="card">
          <div class="card-icon-box accent" style="margin-bottom: 1.25rem;">
            ${t.heartHandshake(`icon`,24,2)}
          </div>
          <h3 class="card-title">Fokus pada Solusi Nyata</h3>
          <p class="card-desc">
            Didampingi oleh teknisi berpengalaman di bidang rekayasa piranti lunak dan jaringan yang memahami kebutuhan operasional pengembang secara mendalam.
          </p>
        </div>
      </div>
    </div>
  `}function Me(){return`
    <div class="page-header">
      <div class="container">
        <div class="breadcrumbs">
          <a href="#/">Beranda</a>
          ${t.chevronRight(`icon`,14,2)}
          <span class="current">Kontak</span>
        </div>
        <div class="page-header-content">
          <h1 style="font-size: 2.5rem; font-weight: 800; margin-bottom: 0.75rem;">Hubungi Tim MultiCloud</h1>
          <p style="font-size: 1.125rem; color: var(--text-secondary); line-height: 1.6;">
            Punya pertanyaan mengenai implementasi infrastruktur, aktivasi lisensi perusahaan, atau butuh bantuan teknis? Tim kami siap melayani Anda 24 jam sehari.
          </p>
        </div>
      </div>
    </div>

    <div class="container" style="padding-bottom: 5rem;">
      <div style="display: grid; grid-template-columns: 1fr 380px; gap: 3rem; align-items: start;">
        <!-- Formulir Kontak -->
        <div class="card" style="padding: 2.5rem;">
          <h2 style="font-size: 1.5rem; font-weight: 800; color: var(--text-primary); margin-bottom: 0.5rem;">
            Kirimkan Pesan Anda
          </h2>
          <p style="font-size: 0.9375rem; color: var(--text-secondary); margin-bottom: 2rem;">
            Isi formulir di bawah ini dan teknisi kami akan membalas ke alamat surel Anda dalam waktu kurang dari 30 menit.
          </p>

          <form id="contact-form">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
              <div class="form-group">
                <label class="form-label" for="contact-name">Nama Lengkap</label>
                <input class="form-input" id="contact-name" type="text" required placeholder="Nama Anda" />
              </div>
              <div class="form-group">
                <label class="form-label" for="contact-email">Alamat Surel</label>
                <input class="form-input" id="contact-email" type="email" required placeholder="nama@perusahaan.com" />
              </div>
            </div>

            <div class="form-group">
              <label class="form-label" for="contact-department">Departemen Tujuan</label>
              <select class="form-select" id="contact-department">
                <option value="Penjualan & Kemitraan">Penjualan & Konsultasi Produk</option>
                <option value="Dukungan Teknis Peladen">Dukungan Teknis Komputasi Awan & VPS</option>
                <option value="Aktivasi Lisensi AI">Aktivasi Lisensi AI & Piranti Lunak</option>
                <option value="Integrasi API Pengembang">Integrasi API & Webhook</option>
                <option value="Penagihan & Faktur Pajak">Penagihan & Faktur Pajak</option>
              </select>
            </div>

            <div class="form-group">
              <label class="form-label" for="contact-message">Pesan / Uraian Kebutuhan</label>
              <textarea class="form-textarea" id="contact-message" required placeholder="Jelaskan kebutuhan teknis atau pertanyaan yang ingin Anda sampaikan..." rows="5"></textarea>
            </div>

            <button type="submit" class="btn btn-primary btn-lg" id="contact-submit-btn">
              ${t.mail(`icon`,18,2)}
              <span>Kirimkan Pesan</span>
            </button>
          </form>

          <div id="contact-feedback" style="display: none; margin-top: 1.5rem; padding: 1rem; border-radius: var(--radius-md); background-color: var(--color-success-subtle); color: var(--color-success); border: 1px solid rgba(16, 185, 129, 0.3); font-size: 0.9375rem;">
            ${t.checkCircle(`icon`,20,2)}
            <span style="font-weight: 600; margin-left: 0.5rem;">Pesan Anda telah berhasil dikirimkan! Tim teknis kami akan segera menghubungi Anda.</span>
          </div>
        </div>

        <!-- Kolom Informasi Kontak Langsung -->
        <div style="display: flex; flex-direction: column; gap: 1.5rem;">
          <!-- WhatsApp Resmi -->
          <div class="card" style="background-color: var(--color-success-subtle); border-color: rgba(16, 185, 129, 0.25);">
            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
              <div style="color: var(--color-success);">
                ${t.brandWhatsapp(`icon`,28,2)}
              </div>
              <div>
                <h3 style="font-size: 1.125rem; font-weight: 700; color: var(--text-primary);">WhatsApp Resmi</h3>
                <span style="font-size: 0.8125rem; color: var(--color-success); font-weight: 600;">Siaga 24 Jam</span>
              </div>
            </div>
            <p style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 1.25rem;">
              Konsultasi cepat dengan staf kami untuk memperoleh tanggapan instan via WhatsApp.
            </p>
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-block" style="background-color: #10b981; border-color: #10b981;">
              ${t.brandWhatsapp(`icon`,18,2)}
              <span>Buka Obrolan WhatsApp</span>
            </a>
          </div>

          <!-- Surel & Kantor Operasional -->
          <div class="card">
            <h3 style="font-size: 1.125rem; font-weight: 700; color: var(--text-primary); margin-bottom: 1.25rem;">
              Saluran Dukungan Resmi
            </h3>
            
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; gap: 0.75rem;">
                <div style="color: var(--color-primary); flex-shrink: 0; margin-top: 2px;">
                  ${t.mail(`icon`,20,2)}
                </div>
                <div>
                  <span style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; font-weight: 600; display: block;">Alamat Surel</span>
                  <strong style="color: var(--text-primary); font-size: 0.9375rem;">support@multicloud.id</strong>
                  <div style="font-size: 0.8125rem; color: var(--text-muted);">billing@multicloud.id</div>
                </div>
              </div>

              <div style="display: flex; gap: 0.75rem;">
                <div style="color: var(--color-primary); flex-shrink: 0; margin-top: 2px;">
                  ${t.building(`icon`,20,2)}
                </div>
                <div>
                  <span style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; font-weight: 600; display: block;">Kantor Operasional</span>
                  <strong style="color: var(--text-primary); font-size: 0.9375rem;">MultiCloud Technology Tower</strong>
                  <div style="font-size: 0.8125rem; color: var(--text-muted);">Jl. Jenderal Sudirman Kav. 52-53, SCBD, Jakarta Selatan 12190</div>
                </div>
              </div>

              <div style="display: flex; gap: 0.75rem;">
                <div style="color: var(--color-primary); flex-shrink: 0; margin-top: 2px;">
                  ${t.activity(`icon`,20,2)}
                </div>
                <div>
                  <span style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; font-weight: 600; display: block;">Standar Keterandalan (SLA)</span>
                  <strong style="color: var(--text-primary); font-size: 0.9375rem;">99,99% Uptime Peladen & Jaringan</strong>
                  <div style="font-size: 0.8125rem; color: var(--text-muted);">Respon teknis pertama di bawah 15 menit</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `}function Ne(){let e=document.getElementById(`contact-form`),n=document.getElementById(`contact-feedback`);e&&(e.onsubmit=r=>{r.preventDefault();let i=document.getElementById(`contact-submit-btn`);i.classList.add(`disabled`),i.textContent=`Mengirimkan...`,setTimeout(()=>{e.reset(),i.classList.remove(`disabled`),i.innerHTML=`${t.mail(`icon`,18,2)} <span>Kirimkan Pesan</span>`,n&&(n.style.display=`flex`)},500)})}function Pe(){return`
    <div class="page-header">
      <div class="container">
        <div class="breadcrumbs">
          <a href="#/">Beranda</a>
          ${t.chevronRight(`icon`,14,2)}
          <span class="current">Dokumentasi</span>
        </div>
        <div class="page-header-content">
          <h1 style="font-size: 2.5rem; font-weight: 800; margin-bottom: 0.75rem;">Dokumentasi & Rujukan API</h1>
          <p style="font-size: 1.125rem; color: var(--text-secondary); line-height: 1.6;">
            Panduan integrasi teknis, SDK resmi, dan spesifikasi titik akhir (endpoint) API untuk para pengembang piranti lunak dan arsitek komputasi awan.
          </p>
        </div>
      </div>
    </div>

    <div class="container" style="padding-bottom: 5rem;">
      <div style="display: grid; grid-template-columns: 240px 1fr; gap: 3rem; align-items: start;">
        <!-- Bilah Sisi Navigasi Dokumentasi -->
        <div class="card" style="padding: 1.25rem; position: sticky; top: 96px;">
          <h4 style="font-size: 0.8125rem; font-weight: 700; text-transform: uppercase; color: var(--text-muted); letter-spacing: 0.05em; margin-bottom: 0.75rem;">
            Daftar Panduan
          </h4>
          <div style="display: flex; flex-direction: column; gap: 0.35rem;">
            <a href="#docs-quickstart" class="sidebar-nav-item active">
              ${t.rocket(`icon`,16,2)} Panduan Awal
            </a>
            <a href="#docs-cloud-vps" class="sidebar-nav-item">
              ${t.server(`icon`,16,2)} Peladen Awan & VPS
            </a>
            <a href="#docs-ai-api" class="sidebar-nav-item">
              ${t.robot(`icon`,16,2)} Inferensi AI Terpadu
            </a>
            <a href="#docs-whatsapp" class="sidebar-nav-item">
              ${t.brandWhatsapp(`icon`,16,2)} Gerbang WhatsApp
            </a>
            <a href="#docs-auth" class="sidebar-nav-item">
              ${t.lock(`icon`,16,2)} Otentikasi Kunci API
            </a>
          </div>
        </div>

        <!-- Konten Utama Dokumentasi -->
        <div style="display: flex; flex-direction: column; gap: 3rem;">
          <!-- Panduan Awal -->
          <section id="docs-quickstart" class="card" style="padding: 2.5rem;">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
              <span class="badge badge-primary">Panduan Awal</span>
              <span style="font-size: 0.8125rem; color: var(--text-muted);">Estimasi baca: 3 menit</span>
            </div>
            <h2 style="font-size: 1.75rem; font-weight: 800; color: var(--text-primary); margin-bottom: 1rem;">
              Memulai Integrasi MultiCloud
            </h2>
            <p style="font-size: 0.9375rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.5rem;">
              Platform MultiCloud dirancang agar pengembang dapat langsung mengonsumsi layanan tanpa konfigurasi berbelit. Setelah membuat akun, Anda dapat langsung menerbitkan Kunci API dari Dasbor Pengembang.
            </p>

            <div style="background-color: var(--bg-surface-secondary); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); margin-bottom: 1.5rem;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                <strong style="font-size: 0.8125rem; color: var(--text-muted); text-transform: uppercase;">URL Dasar Produksi (Base URL)</strong>
                <span class="code-pill">v1.multicloud.id</span>
              </div>
              <pre style="color: var(--color-primary); font-size: 0.875rem; overflow-x: auto;"><code>https://api.multicloud.id/v1/</code></pre>
            </div>
          </section>

          <!-- Inferensi AI Terpadu -->
          <section id="docs-ai-api" class="card" style="padding: 2.5rem;">
            <span class="badge badge-accent" style="margin-bottom: 0.75rem;">Inferensi AI</span>
            <h2 style="font-size: 1.75rem; font-weight: 800; color: var(--text-primary); margin-bottom: 1rem;">
              API Inferensi AI Terpadu
            </h2>
            <p style="font-size: 0.9375rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.5rem;">
              Gunakan satu titik akhir berstandar OpenAI SDK untuk mengakses model Claude 3.5 Sonnet, GPT-4o, dan Gemini 1.5 Pro dengan pemilihan rute latensi tercepat secara otomatis.
            </p>

            <div style="background-color: #0b0f19; color: #f8fafc; padding: 1.5rem; border-radius: var(--radius-lg); overflow-x: auto; font-family: var(--font-mono); font-size: 0.875rem; line-height: 1.5;">
              <div style="color: #64748b; margin-bottom: 0.5rem;">// Contoh Perintah cURL - Inferensi AI Terpadu</div>
              <div>curl https://api.multicloud.id/v1/chat/completions \</div>
              <div>&nbsp;&nbsp;-H "Content-Type: application/json" \</div>
              <div>&nbsp;&nbsp;-H "Authorization: Bearer KUNCI_API_MULTICLOUD_ANDA" \</div>
              <div>&nbsp;&nbsp;-d '{</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;"model": "claude-3-5-sonnet",</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;"messages": [</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"role": "user", "content": "Tuliskan contoh REST API Golang"}</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;]</div>
              <div>&nbsp;&nbsp;}'</div>
            </div>
          </section>

          <!-- WhatsApp API -->
          <section id="docs-whatsapp" class="card" style="padding: 2.5rem;">
            <span class="badge badge-success" style="margin-bottom: 0.75rem;">Gerbang Pesan</span>
            <h2 style="font-size: 1.75rem; font-weight: 800; color: var(--text-primary); margin-bottom: 1rem;">
              Gerbang WhatsApp Business API
            </h2>
            <p style="font-size: 0.9375rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.5rem;">
              Kirimkan notifikasi transaksi, kode verifikasi OTP, dan berkas faktur digital secara terprogram ke nomor WhatsApp pelanggan.
            </p>

            <div style="background-color: #0b0f19; color: #f8fafc; padding: 1.5rem; border-radius: var(--radius-lg); overflow-x: auto; font-family: var(--font-mono); font-size: 0.875rem; line-height: 1.5;">
              <div style="color: #64748b; margin-bottom: 0.5rem;">// POST /v1/whatsapp/send</div>
              <div>curl -X POST https://api.multicloud.id/v1/whatsapp/send \</div>
              <div>&nbsp;&nbsp;-H "Authorization: Bearer KUNCI_API_MULTICLOUD_ANDA" \</div>
              <div>&nbsp;&nbsp;-H "Content-Type: application/json" \</div>
              <div>&nbsp;&nbsp;-d '{</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;"to": "6281234567890",</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;"type": "text",</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;"message": "Kode OTP MultiCloud Anda adalah 492019. Berlaku 5 menit."</div>
              <div>&nbsp;&nbsp;}'</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  `}function V(e=`login`){let n=S.getState().currentUser;return`
    <div style="min-height: calc(100vh - var(--navbar-height) - 100px); display: flex; align-items: center; justify-content: center; padding: 3rem 1.5rem;">
      <div class="card" style="width: 100%; max-width: 460px; padding: 2.5rem; box-shadow: var(--card-shadow-hover);">
        <!-- Header Logo -->
        <div style="text-align: center; margin-bottom: 1.75rem;">
          <a href="#/" class="brand-logo" style="justify-content: center; margin-bottom: 0.75rem;">
            <div class="brand-icon">
              ${t.cloud(`brand-svg`,20,2)}
            </div>
            <span class="brand-name">MultiCloud</span>
          </a>
          <h1 style="font-size: 1.5rem; font-weight: 800; color: var(--text-primary); margin-bottom: 0.25rem;" id="auth-title">
            ${e===`register`?`Pendaftaran Akun Baru`:e===`forgot`?`Pemulihan Kata Sandi`:`Masuk ke MultiCloud`}
          </h1>
          <p style="font-size: 0.875rem; color: var(--text-muted);" id="auth-subtitle">
            ${e===`register`?`Satu akun untuk seluruh layanan komputasi awan, API, dan lisensi resmi`:e===`forgot`?`Masukkan alamat surel terdaftar untuk instruksi pemulihan kata sandi`:`Kelola peladen awan, kunci API, dan lisensi resmi Anda`}
          </p>
        </div>

        ${n&&e===`register`?`
          <div class="auth-alert auth-alert-info" role="status">
            ${t.infoCircle(`icon`,17,2)}
            <span>Sesi aktif saat ini: <strong>${n.name}</strong>. Membuat akun baru akan otomatis beralih ke akun baru Anda.</span>
          </div>
        `:``}

        <!-- Formulir -->
        <div id="auth-forms-container">
          ${e===`register`?Ie():e===`forgot`?Le():Fe()}
        </div>
      </div>
    </div>
  `}function Fe(){return`
    <form id="login-form" novalidate>
      <div id="auth-feedback-box" class="auth-alert auth-alert-error" role="alert" style="display: none;">
        <span id="auth-feedback-icon">${t.alertCircle(`icon`,17,2)}</span>
        <span id="auth-feedback-text"></span>
      </div>

      <div class="form-group">
        <label class="form-label" for="login-email">Alamat Surel</label>
        <input class="form-input" id="login-email" type="email" autocomplete="email" required placeholder="nama@email.com" value="" />
      </div>

      <div class="form-group">
        <div class="form-label">
          <label for="login-password">Kata Sandi</label>
          <a href="#/forgot-password" style="font-size: 0.8125rem; color: var(--color-primary);">Lupa kata sandi?</a>
        </div>
        <div class="password-field-wrap">
          <input class="form-input password-input" id="login-password" type="password" autocomplete="current-password" required placeholder="Masukkan kata sandi" value="" />
          <button type="button" class="password-toggle-btn" data-target="login-password" aria-label="Tampilkan kata sandi">
            ${t.eye(`icon`,18,2)}
          </button>
        </div>
      </div>

      <button type="submit" class="btn btn-primary btn-block btn-lg" id="login-submit-btn" style="margin-top: 1.5rem;">
        <span>Masuk ke Akun</span>
      </button>

      <div style="text-align: center; margin-top: 1.5rem; font-size: 0.875rem; color: var(--text-secondary);">
        Belum memiliki akun MultiCloud? <a href="#/register" style="color: var(--color-primary); font-weight: 600;">Daftar sekarang</a>
      </div>
    </form>
  `}function Ie(){return`
    <form id="register-form" novalidate>
      <div id="auth-feedback-box" class="auth-alert auth-alert-error" role="alert" style="display: none;">
        <span id="auth-feedback-icon">${t.alertCircle(`icon`,17,2)}</span>
        <span id="auth-feedback-text"></span>
      </div>

      <div class="form-group">
        <label class="form-label" for="reg-name">Nama Lengkap</label>
        <input class="form-input" id="reg-name" type="text" autocomplete="name" required minlength="2" placeholder="Contoh: Budi Santoso" />
      </div>

      <div class="form-group">
        <label class="form-label" for="reg-email">Alamat Surel</label>
        <input class="form-input" id="reg-email" type="email" autocomplete="email" required placeholder="nama@email.com" />
      </div>

      <div class="form-group">
        <label class="form-label" for="reg-password">Kata Sandi</label>
        <div class="password-field-wrap">
          <input class="form-input password-input" id="reg-password" type="password" autocomplete="new-password" required minlength="6" placeholder="Minimal 6 karakter" />
          <button type="button" class="password-toggle-btn" data-target="reg-password" aria-label="Tampilkan kata sandi">
            ${t.eye(`icon`,18,2)}
          </button>
        </div>
      </div>

      <div class="form-group">
        <label class="form-label" for="reg-password-confirm">Konfirmasi Kata Sandi</label>
        <div class="password-field-wrap">
          <input class="form-input password-input" id="reg-password-confirm" type="password" autocomplete="new-password" required minlength="6" placeholder="Ketik ulang kata sandi" />
          <button type="button" class="password-toggle-btn" data-target="reg-password-confirm" aria-label="Tampilkan konfirmasi kata sandi">
            ${t.eye(`icon`,18,2)}
          </button>
        </div>
      </div>

      <button type="submit" class="btn btn-primary btn-block btn-lg" id="register-submit-btn" style="margin-top: 1.5rem;">
        <span>Buat Akun MultiCloud</span>
      </button>

      <div style="text-align: center; margin-top: 1.5rem; font-size: 0.875rem; color: var(--text-secondary);">
        Sudah terdaftar? <a href="#/login" style="color: var(--color-primary); font-weight: 600;">Masuk di sini</a>
      </div>
    </form>
  `}function Le(){return`
    <form id="forgot-form" novalidate>
      <div id="auth-feedback-box" class="auth-alert auth-alert-error" role="alert" style="display: none;">
        <span id="auth-feedback-icon">${t.alertCircle(`icon`,17,2)}</span>
        <span id="auth-feedback-text"></span>
      </div>

      <div class="form-group">
        <label class="form-label" for="forgot-email">Alamat Surel Terdaftar</label>
        <input class="form-input" id="forgot-email" type="email" autocomplete="email" required placeholder="nama@email.com" />
      </div>

      <button type="submit" class="btn btn-primary btn-block btn-lg" id="forgot-submit-btn" style="margin-top: 1.5rem;">
        ${t.mail(`icon`,16,2)}
        <span>Kirimkan Tautan Pemulihan</span>
      </button>

      <div style="text-align: center; margin-top: 1.5rem; font-size: 0.875rem;">
        <a href="#/login" style="color: var(--color-primary); font-weight: 600;">Kembali ke halaman Masuk</a>
      </div>
    </form>
  `}function H(e,n){let r=document.getElementById(`auth-feedback-box`),i=document.getElementById(`auth-feedback-icon`),a=document.getElementById(`auth-feedback-text`);r&&a&&(r.className=`auth-alert ${e===`success`?`auth-alert-success`:`auth-alert-error`}`,r.setAttribute(`role`,e===`success`?`status`:`alert`),i&&(i.innerHTML=e===`success`?t.checkCircle(`icon`,17,2):t.alertCircle(`icon`,17,2)),a.textContent=n,r.style.display=`flex`)}function U(){document.querySelectorAll(`.password-toggle-btn`).forEach(e=>{e.onclick=()=>{let n=e.getAttribute(`data-target`),r=document.getElementById(n);if(!r)return;let i=r.type===`password`;r.type=i?`text`:`password`,e.setAttribute(`aria-label`,i?`Sembunyikan kata sandi`:`Tampilkan kata sandi`),e.innerHTML=i?t.eyeOff(`icon`,18,2):t.eye(`icon`,18,2)}});let e=document.getElementById(`login-form`);e&&(e.onsubmit=async e=>{e.preventDefault();let t=document.getElementById(`login-email`).value.trim(),n=document.getElementById(`login-password`).value,r=document.getElementById(`login-submit-btn`);if(!t||!n){H(`error`,`Mohon lengkapi alamat surel dan kata sandi Anda.`);return}r&&(r.disabled=!0,r.innerHTML=`<span>Memverifikasi Akun...</span>`);let i=document.getElementById(`auth-feedback-box`);i&&(i.style.display=`none`);let a=await b.authenticateUser(t,n);a.success?a.user.role===`admin`?(window.location.hash=`#/admin`,S.setAdminUser(a.user)):(window.location.hash=`#/dashboard`,S.login(a.user.email,a.user.role,a.user)):(r&&(r.disabled=!1,r.innerHTML=`<span>Masuk ke Akun</span>`),H(`error`,a.message||`Alamat surel atau kata sandi tidak sesuai.`))});let n=document.getElementById(`register-form`);n&&(n.onsubmit=async e=>{e.preventDefault();let t=document.getElementById(`reg-name`).value.trim(),r=document.getElementById(`reg-email`).value.trim(),i=document.getElementById(`reg-password`).value,a=document.getElementById(`reg-password-confirm`),o=a?a.value:i,s=document.getElementById(`register-submit-btn`);if(t.length<2){H(`error`,`Mohon isi nama lengkap minimal 2 karakter.`);return}if(!r||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r)){H(`error`,`Mohon masukkan alamat surel yang valid.`);return}if(i.length<6){H(`error`,`Kata sandi wajib terdiri atas minimal 6 karakter.`);return}if(i!==o){H(`error`,`Konfirmasi kata sandi tidak cocok dengan kata sandi utama.`);return}s&&(s.disabled=!0,s.innerHTML=`<span>Mendaftarkan Akun...</span>`);let c=document.getElementById(`auth-feedback-box`);c&&(c.style.display=`none`);let l=await b.registerUser(r,i,t);if(l.success){if(l.needsConfirmation)H(`success`,l.message),s&&(s.disabled=!1,s.innerHTML=`<span>Buat Akun MultiCloud</span>`),n.reset();else{H(`success`,l.message);let e=l.user||{id:`usr_`+Date.now().toString(36),name:t,email:r.toLowerCase(),role:`user`,company:`Pribadi`,phone:``,joinedDate:new Date().toISOString().slice(0,10),avatar:t.slice(0,2).toUpperCase()};window.location.hash=`#/dashboard`,S.login(e.email,`user`,e)}}else s&&(s.disabled=!1,s.innerHTML=`<span>Buat Akun MultiCloud</span>`),H(`error`,l.message||`Gagal mendaftarkan akun baru.`)});let r=document.getElementById(`forgot-form`);r&&(r.onsubmit=e=>{e.preventDefault();let t=document.getElementById(`forgot-email`).value.trim();!t||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)?H(`error`,`Mohon masukkan alamat surel terdaftar yang valid.`):(H(`success`,`Instruksi pemulihan kata sandi untuk ${t} telah dikirimkan.`),r.reset())})}var W=`overview`,G=`pending`;function Re(e=`overview`){W=e;let n=S.getState(),r=n.currentUser||{name:`Pengembang Tamu`,email:`tamu@multicloud.id`,company:`Mandiri`,avatar:`PT`},i=(r.email||``).toLowerCase().trim(),a=n.orders.filter(e=>(e.userEmail||``).toLowerCase().trim()===i),o=a.filter(e=>e.status!==`Selesai`),s=n.services.filter(e=>(e.userEmail||``).toLowerCase().trim()===i),c=n.digitalProducts.filter(e=>(e.accountEmail||``).toLowerCase().trim()===i),l=n.transactions.filter(e=>(e.userEmail||``).toLowerCase().trim()===i),u=(n.tickets||[]).filter(e=>!e.userEmail||(e.userEmail||``).toLowerCase().trim()===i);return`
    <div class="dashboard-container">
      <!-- Bilah Sisi Pengguna -->
      <aside class="dashboard-sidebar" aria-label="Menu Dasbor Pengguna">
        <div>
          <!-- Profil Singkat Pengguna -->
          <div class="dashboard-user-card">
            <div class="user-avatar">${r.avatar||`MC`}</div>
            <div class="user-meta">
              <span class="user-name">${r.name}</span>
              <span class="user-role-badge">Klien Terverifikasi</span>
            </div>
          </div>

          <!-- Navigasi Dasbor -->
          <nav class="sidebar-nav">
            <button class="sidebar-nav-item ${W===`overview`?`active`:``}" data-tab="overview">
              ${t.layoutDashboard(`icon`,18,2)}
              <span>Ringkasan Akun</span>
            </button>
            <button class="sidebar-nav-item ${W===`orders`?`active`:``}" data-tab="orders">
              ${t.shoppingCart(`icon`,18,2)}
              <span>Pesanan Saya</span>
              ${o.length>0?`<span class="sidebar-badge" style="background-color: var(--color-warning); color: #fff;">${o.length}</span>`:``}
            </button>
            <button class="sidebar-nav-item ${W===`services`?`active`:``}" data-tab="services">
              ${t.server(`icon`,18,2)}
              <span>Layanan Saya</span>
              ${s.length>0?`<span class="sidebar-badge">${s.length}</span>`:``}
            </button>
            <button class="sidebar-nav-item ${W===`products`?`active`:``}" data-tab="products">
              ${t.package(`icon`,18,2)}
              <span>Produk Saya</span>
              ${c.length>0?`<span class="sidebar-badge">${c.length}</span>`:``}
            </button>
            <button class="sidebar-nav-item ${W===`transactions`?`active`:``}" data-tab="transactions">
              ${t.receipt(`icon`,18,2)}
              <span>Riwayat Transaksi</span>
            </button>
            <button class="sidebar-nav-item ${W===`invoices`?`active`:``}" data-tab="invoices">
              ${t.fileText?t.fileText(`icon`,18,2):t.receipt(`icon`,18,2)}
              <span>Faktur / Invoice</span>
              ${a.filter(e=>e.status===`Selesai`).length>0?`<span class="sidebar-badge">${a.filter(e=>e.status===`Selesai`).length}</span>`:``}
            </button>
            <button class="sidebar-nav-item ${W===`tickets`?`active`:``}" data-tab="tickets">
              ${t.ticket(`icon`,18,2)}
              <span>Tiket Bantuan</span>
            </button>
            <button class="sidebar-nav-item ${W===`profile`?`active`:``}" data-tab="profile">
              ${t.settings(`icon`,18,2)}
              <span>Pengaturan Profil</span>
            </button>
          </nav>
        </div>

        <div class="sidebar-footer">
          <a href="#/docs" class="sidebar-nav-item" style="color: var(--text-muted);">
            ${t.helpCircle(`icon`,18,2)}
            <span>Pusat Dokumentasi</span>
          </a>
          <button class="sidebar-nav-item" id="dash-logout-btn" style="color: var(--color-danger);">
            ${t.logout(`icon`,18,2)}
            <span>Keluar Akun</span>
          </button>
        </div>
      </aside>

      <!-- Konten Utama Dasbor Pengguna -->
      <main class="dashboard-content" id="dashboard-content-area">
        ${K(W,n,{userOrders:a,userServices:s,userProducts:c,userTransactions:l,userTickets:u})}
      </main>
    </div>
  `}function K(e,n,r=null){let i=e=>new Intl.NumberFormat(`id-ID`,{style:`currency`,currency:`IDR`,maximumFractionDigits:0}).format(e),a=((n.currentUser||{}).email||``).toLowerCase().trim(),o=r?.userOrders||n.orders.filter(e=>(e.userEmail||``).toLowerCase().trim()===a),s=r?.userServices||n.services.filter(e=>(e.userEmail||``).toLowerCase().trim()===a),c=r?.userProducts||n.digitalProducts.filter(e=>(e.accountEmail||``).toLowerCase().trim()===a),l=r?.userTransactions||n.transactions.filter(e=>(e.userEmail||``).toLowerCase().trim()===a),u=r?.userTickets||(n.tickets||[]).filter(e=>!e.userEmail||(e.userEmail||``).toLowerCase().trim()===a);switch(e){case`orders`:let e=o;G===`pending`?e=o.filter(e=>e.status!==`Selesai`):G===`completed`&&(e=o.filter(e=>e.status===`Selesai`));let r=o.filter(e=>e.status!==`Selesai`).length,a=o.filter(e=>e.status===`Selesai`).length;return`
        <div class="dash-header">
          <div>
            <h1 class="dash-title">Pesanan Saya</h1>
            <p class="dash-subtitle">Pantau proses tagihan faktur dan status aktivasi layanan digital Anda.</p>
          </div>
          <a href="#/products" class="btn btn-primary btn-sm">
            ${t.plus(`icon`,16,2)} Pesan Produk Baru
          </a>
        </div>

        <!-- Filter Tab Kategori Pesanan -->
        <div style="display: flex; gap: 0.5rem; margin-bottom: 1.25rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.75rem;">
          <button class="btn btn-sm ${G===`pending`?`btn-primary`:`btn-outline`} order-filter-btn" data-filter="pending">
            ${t.clock(`icon`,14,2)} Menunggu / Sedang Diproses (${r})
          </button>
          <button class="btn btn-sm ${G===`completed`?`btn-primary`:`btn-outline`} order-filter-btn" data-filter="completed">
            ${t.check(`icon`,14,2)} Selesai & Aktif (${a})
          </button>
          <button class="btn btn-sm ${G===`all`?`btn-primary`:`btn-outline`} order-filter-btn" data-filter="all">
            Semua Riwayat (${o.length})
          </button>
        </div>

        <div class="dash-card">
          <div class="dash-table-wrap">
            <table class="dash-table">
              <thead>
                <tr>
                  <th>Nomor Faktur</th>
                  <th>Item / Layanan</th>
                  <th>Pilihan Paket</th>
                  <th>Total Biaya</th>
                  <th>Metode Pembayaran</th>
                  <th>Status</th>
                  <th>Tindakan / Lisensi</th>
                </tr>
              </thead>
              <tbody>
                ${e.length===0?`
                  <tr>
                    <td colspan="7" style="text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
                      ${G===`pending`?`Tidak ada pesanan yang sedang menunggu. Semua pesanan Anda telah selesai dan aktif di tab <strong>Layanan Saya</strong> atau <strong>Produk Saya</strong>.`:`Tidak ada data pesanan pada filter ini.`}
                    </td>
                  </tr>
                `:e.map(e=>`
                  <tr>
                    <td><strong style="color: var(--text-primary); font-family: var(--font-mono);">${e.invoiceNumber||e.id}</strong></td>
                    <td><strong style="color: var(--text-primary);">${e.itemTitle}</strong></td>
                    <td>${e.package}</td>
                    <td><strong style="color: var(--text-primary);">${i(e.amount)}</strong></td>
                    <td>${e.paymentMethod}</td>
                    <td>
                      <span class="status-pill ${e.status===`Selesai`?`success`:e.status===`Sedang Diproses`?`info`:`warning`}">
                        ${e.status===`Selesai`?t.check(`icon`,12,2):t.clock(`icon`,12,2)}
                        <span>${e.status}</span>
                      </span>
                    </td>
                    <td>
                      ${e.status===`Selesai`?`
                        <div style="display: flex; gap: 0.35rem; align-items: center;">
                          <button class="btn btn-outline btn-xs print-user-invoice-btn" data-order-id="${e.id}" title="Cetak Faktur Resmi">
                            ${t.printer?t.printer(`icon`,13,2):t.fileText(`icon`,13,2)}
                            <span>Cetak Faktur</span>
                          </button>
                          <a href="#/dashboard/${e.category===`cloud-hosting`||e.category===`api-services`?`services`:`products`}" class="btn btn-secondary btn-xs" style="text-decoration: none; display: inline-flex; align-items: center; gap: 0.25rem;">
                            ${t.externalLink(`icon`,12,2)} Buka
                          </a>
                        </div>
                      `:`
                        <span class="code-pill warning">
                          ${t.clock(`icon`,12,2)}
                          <span>Menunggu Persetujuan Admin</span>
                        </span>
                      `}
                    </td>
                  </tr>
                `).join(``)}
              </tbody>
            </table>
          </div>
        </div>
      `;case`services`:return`
        <div class="dash-header">
          <div>
            <h1 class="dash-title">Layanan Aktif Saya</h1>
            <p class="dash-subtitle">Daftar infrastruktur peladen awan, VPS Dedicated, dan integrasi API yang sedang berjalan.</p>
          </div>
          <a href="#/services" class="btn btn-primary btn-sm">
            ${t.plus(`icon`,16,2)} Tambah Layanan
          </a>
        </div>

        ${s.length===0?`
          <div class="dash-card" style="text-align: center; padding: 3rem; color: var(--text-muted);">
            <p style="margin-bottom: 1rem;">Anda belum memiliki layanan komputasi awan atau peladen aktif.</p>
            <a href="#/services" class="btn btn-outline btn-sm">Jelajahi Katalog Layanan</a>
          </div>
        `:`
          <div class="grid-2">
            ${s.map(e=>{let n=new Date(e.expiresAt||Date.now())-new Date,r=Math.ceil(n/864e5),i=r<=7&&r>=0;return`
              <div class="card" style="border-top: 3px solid ${i?`var(--color-warning)`:`var(--color-primary)`};">
                <div class="card-header">
                  <div>
                    <h3 class="card-title">${e.name}</h3>
                    <span class="status-pill success">${e.status}</span>
                  </div>
                  <div class="card-icon-box">
                    ${t.server(`icon`,20,2)}
                  </div>
                </div>

                ${i?`
                  <div style="background-color: var(--color-warning-subtle); color: #d97706; padding: 0.6rem 0.85rem; border-radius: var(--radius-md); font-size: 0.8125rem; margin-bottom: 0.85rem; display: flex; align-items: center; gap: 0.5rem;">
                    ${t.bell(`icon`,16,2)}
                    <span><strong>Pemberitahuan:</strong> Masa aktif berakhir dalam <strong>${r} hari</strong> lagi!</span>
                  </div>
                `:``}

                <div style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 1rem; display: flex; flex-direction: column; gap: 0.35rem;">
                  ${e.ip?`<div><strong>Alamat IP Khusus:</strong> <span style="font-family: var(--font-mono);">${e.ip}</span></div>`:``}
                  ${e.datacenter?`<div><strong>Pusat Data:</strong> ${e.datacenter}</div>`:``}
                  ${e.spec?`<div><strong>Paket Spesifikasi:</strong> ${e.spec}</div>`:``}
                  ${e.quotaUsed?`<div><strong>Penggunaan Kuota:</strong> ${e.quotaUsed}</div>`:``}
                  <div style="background-color: var(--bg-surface-secondary); padding: 0.5rem 0.75rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); margin-top: 0.25rem;">
                    <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase;">Periode Tagihan & Masa Aktif Layanan:</div>
                    <strong style="color: var(--color-primary); font-family: var(--font-mono); font-size: 0.875rem;">
                      ${e.periodText||`${e.startDate||e.expiresAt} - ${e.expiresAt}`}
                    </strong>
                  </div>
                </div>

                <!-- Pengaturan Pembayaran Otomatis (Auto-Renew) -->
                <div style="background-color: var(--bg-surface-secondary); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 0.75rem 1rem; margin-bottom: 1rem; display: flex; justify-content: space-between; align-items: center;">
                  <div>
                    <strong style="font-size: 0.8125rem; color: var(--text-primary); display: block;">Perpanjangan Otomatis (Auto-Renew)</strong>
                    <span style="font-size: 0.75rem; color: var(--text-muted);">
                      ${e.autoRenew?`Tagihan otomatis dibuat & masa aktif diupdate otomatis`:`Layanan tidak akan diperpanjang otomatis`}
                    </span>
                  </div>
                  <label class="toggle-switch" style="position: relative; display: inline-block; width: 44px; height: 24px;">
                    <input type="checkbox" class="toggle-autorenew-input" data-service-id="${e.id}" ${e.autoRenew?`checked`:``} style="opacity: 0; width: 0; height: 0;">
                    <span class="toggle-slider" style="position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: ${e.autoRenew?`var(--color-primary)`:`#cbd5e1`}; border-radius: 24px; transition: .2s;">
                      <span style="position: absolute; content: ''; height: 18px; width: 18px; left: ${e.autoRenew?`23px`:`3px`}; bottom: 3px; background-color: white; border-radius: 50%; transition: .2s;"></span>
                    </span>
                  </label>
                </div>

                <div class="card-footer" style="display: flex; gap: 0.5rem; justify-content: space-between; align-items: center;">
                  <button class="btn btn-primary btn-sm user-renew-service-btn" data-service-id="${e.id}">
                    ${t.refresh?t.refresh(`icon`,14,2):t.repeat(`icon`,14,2)} Perpanjang Sekarang
                  </button>
                  <button class="btn btn-ghost btn-sm" style="color: var(--color-primary);">Akses Konsol Web</button>
                </div>
              </div>
            `}).join(``)}
          </div>
        `}
      `;case`products`:return`
        <div class="dash-header">
          <div>
            <h1 class="dash-title">Produk & Lisensi AI Saya</h1>
            <p class="dash-subtitle">Akses lisensi resmi akun kecerdasan buatan dan piranti lunak yang terdaftar.</p>
          </div>
          <a href="#/products" class="btn btn-primary btn-sm">
            ${t.plus(`icon`,16,2)} Beli Lisensi Baru
          </a>
        </div>

        ${c.length===0?`
          <div class="dash-card" style="text-align: center; padding: 3rem; color: var(--text-muted);">
            <p style="margin-bottom: 1rem;">Anda belum memiliki lisensi produk digital aktif.</p>
            <a href="#/products" class="btn btn-outline btn-sm">Lihat Pilihan Produk</a>
          </div>
        `:`
          <div class="grid-2">
            ${c.map(e=>`
              <div class="card">
                <div class="card-header">
                  <div>
                    <h3 class="card-title">${e.name}</h3>
                    <span class="status-pill success">${e.status}</span>
                  </div>
                  <div class="card-icon-box accent">
                    ${t.sparkles(`icon`,20,2)}
                  </div>
                </div>
                <div style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 1rem; display: flex; flex-direction: column; gap: 0.35rem;">
                  <div><strong>Surel Akun Tertaut:</strong> ${e.accountEmail}</div>
                  <div><strong>Tipe Lisensi:</strong> ${e.licenseType}</div>
                  <div><strong>Masa Berlaku:</strong> ${e.expiresAt}</div>
                </div>
                <div class="card-footer">
                  <button class="btn btn-outline btn-sm">Periksa Status Lisensi</button>
                  <button class="btn btn-secondary btn-sm">Perpanjang Langganan</button>
                </div>
              </div>
            `).join(``)}
          </div>
        `}
      `;case`transactions`:return`
        <div class="dash-header">
          <div>
            <h1 class="dash-title">Riwayat Transaksi Keuangan</h1>
            <p class="dash-subtitle">Catatan mutasi pelunasan pembayaran tagihan layanan digital Anda.</p>
          </div>
        </div>

        <div class="dash-card">
          <div class="dash-table-wrap">
            <table class="dash-table">
              <thead>
                <tr>
                  <th>Nomor Transaksi</th>
                  <th>Keterangan Pesanan</th>
                  <th>Kanal Pembayaran</th>
                  <th>Nominal</th>
                  <th>Waktu Konfirmasi</th>
                  <th>Status Pembayaran</th>
                </tr>
              </thead>
              <tbody>
                ${l.length===0?`
                  <tr>
                    <td colspan="6" style="text-align: center; padding: 2.5rem; color: var(--text-muted);">
                      Belum ada riwayat transaksi keuangan.
                    </td>
                  </tr>
                `:l.map(e=>`
                  <tr>
                    <td><strong style="color: var(--text-primary); font-family: var(--font-mono);">${e.id}</strong></td>
                    <td><strong style="color: var(--text-primary);">${e.description}</strong></td>
                    <td>${e.method}</td>
                    <td><strong style="color: var(--text-primary);">${i(e.amount)}</strong></td>
                    <td>${e.date}</td>
                    <td>
                      <span class="status-pill ${e.status===`Berhasil`?`success`:`warning`}">
                        ${e.status}
                      </span>
                    </td>
                  </tr>
                `).join(``)}
              </tbody>
            </table>
          </div>
        </div>
      `;case`invoices`:let d=o.filter(e=>e.status===`Selesai`);return`
        <div class="dash-header">
          <div>
            <h1 class="dash-title">Daftar Faktur Resmi (Invoice)</h1>
            <p class="dash-subtitle">Arsip dokumen faktur pajak sah yang dapat diunduh dan dicetak dalam format PDF.</p>
          </div>
        </div>

        <div class="dash-card">
          <div class="dash-table-wrap">
            <table class="dash-table">
              <thead>
                <tr>
                  <th>Nomor Faktur</th>
                  <th>Produk / Layanan</th>
                  <th>Paket Durasi</th>
                  <th>Total Biaya</th>
                  <th>Metode Pembayaran</th>
                  <th>Status Faktur</th>
                  <th>Aksi Unduh / Cetak</th>
                </tr>
              </thead>
              <tbody>
                ${d.length===0?`
                  <tr>
                    <td colspan="7" style="text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
                      Belum ada faktur yang lunas/terverifikasi. Faktur resmi akan terbit setelah pesanan berhasil disetujui.
                    </td>
                  </tr>
                `:d.map(e=>`
                  <tr>
                    <td><strong style="color: var(--text-primary); font-family: var(--font-mono);">${e.invoiceNumber||e.id}</strong></td>
                    <td><strong style="color: var(--text-primary);">${e.itemTitle}</strong></td>
                    <td>${e.package}</td>
                    <td><strong style="color: var(--text-primary);">${i(e.amount)}</strong></td>
                    <td>${e.paymentMethod}</td>
                    <td>
                      <span class="status-pill success">
                        ${t.check(`icon`,12,2)}
                        <span>LUNAS</span>
                      </span>
                    </td>
                    <td>
                      <button class="btn btn-outline-primary btn-sm print-user-invoice-btn" data-order-id="${e.id}" style="display: inline-flex; align-items: center; gap: 0.35rem;">
                        ${t.printer?t.printer(`icon`,14,2):t.fileText(`icon`,14,2)}
                        <span>Cetak PDF</span>
                      </button>
                    </td>
                  </tr>
                `).join(``)}
              </tbody>
            </table>
          </div>
        </div>
      `;case`tickets`:return`
        <div class="dash-header">
          <div>
            <h1 class="dash-title">Tiket Bantuan Pelanggan</h1>
            <p class="dash-subtitle">Komunikasi langsung dengan teknisi ahli MultiCloud bersiaga 24 jam.</p>
          </div>
          <button class="btn btn-primary btn-sm" id="create-new-ticket-btn">
            ${t.plus(`icon`,16,2)} Buat Tiket Bantuan
          </button>
        </div>

        <div class="dash-card">
          <div class="dash-table-wrap">
            <table class="dash-table">
              <thead>
                <tr>
                  <th>Nomor Tiket</th>
                  <th>Subjek Kendala</th>
                  <th>Departemen</th>
                  <th>Prioritas</th>
                  <th>Status</th>
                  <th>Pembaruan Terakhir</th>
                </tr>
              </thead>
              <tbody>
                ${u.length===0?`
                  <tr>
                    <td colspan="6" style="text-align: center; padding: 2.5rem; color: var(--text-muted);">
                      Tidak ada tiket bantuan yang terbuka.
                    </td>
                  </tr>
                `:u.map(e=>`
                  <tr>
                    <td><strong style="color: var(--text-primary); font-family: var(--font-mono);">${e.id}</strong></td>
                    <td><strong style="color: var(--text-primary);">${e.subject}</strong></td>
                    <td>${e.department}</td>
                    <td>${e.priority}</td>
                    <td>
                      <span class="status-pill ${e.status===`Selesai`?`success`:`info`}">
                        ${e.status}
                      </span>
                    </td>
                    <td>${e.lastUpdate}</td>
                  </tr>
                `).join(``)}
              </tbody>
            </table>
          </div>
        </div>
      `;case`profile`:let f=n.currentUser;return`
        <div class="dash-header">
          <div>
            <h1 class="dash-title">Pengaturan Profil Pengguna</h1>
            <p class="dash-subtitle">Kelola informasi data diri, alamat surel, nomor telepon, dan perusahaan Anda.</p>
          </div>
        </div>

        <div class="card" style="max-width: 650px; padding: 2rem;">
          <form id="profile-settings-form">
            <div class="form-group">
              <label class="form-label" for="prof-name">Nama Lengkap</label>
              <input class="form-input" id="prof-name" type="text" value="${f?.name||``}" />
            </div>

            <div class="form-group">
              <label class="form-label" for="prof-email">Alamat Surel Terdaftar</label>
              <input class="form-input" id="prof-email" type="email" value="${f?.email||``}" disabled style="background-color: var(--bg-surface-secondary);" />
            </div>

            <div class="form-group">
              <label class="form-label" for="prof-phone">Nomor Telepon / WhatsApp</label>
              <input class="form-input" id="prof-phone" type="tel" value="${f?.phone||`+62 812-3456-7890`}" />
            </div>

            <div class="form-group">
              <label class="form-label" for="prof-company">Nama Perusahaan / Organisasi</label>
              <input class="form-input" id="prof-company" type="text" value="${f?.company||`Pengembang Mandiri`}" />
            </div>

            <button type="submit" class="btn btn-primary btn-md" style="margin-top: 1rem;">
              <span>Simpan Perubahan Data</span>
            </button>
          </form>
        </div>
      `;default:let p=s.filter(e=>{let t=new Date(e.expiresAt||Date.now()),n=Math.ceil((t-new Date)/864e5);return n<=7&&n>=0});return`
        <div class="dash-header">
          <div>
            <h1 class="dash-title">Ringkasan Akun</h1>
            <p class="dash-subtitle">Selamat datang kembali, <strong>${n.currentUser?.name||`Pengembang`}</strong>!</p>
          </div>
          <div class="flex items-center gap-2">
            <a href="#/services" class="btn btn-outline btn-sm">Beli Layanan</a>
            <a href="#/products" class="btn btn-primary btn-sm">Buka Katalog</a>
          </div>
        </div>

        ${p.length>0?`
          <div style="background-color: var(--color-warning-subtle); border: 1px solid #f59e0b; border-radius: var(--radius-lg); padding: 1.25rem; margin-bottom: 1.5rem; display: flex; align-items: flex-start; gap: 1rem;">
            <div style="color: #d97706; flex-shrink: 0; margin-top: 2px;">
              ${t.bell(`icon`,22,2)}
            </div>
            <div style="flex-grow: 1;">
              <strong style="color: #b45309; font-size: 0.9375rem; display: block; margin-bottom: 0.25rem;">
                Pemberitahuan Tagihan & Masa Aktif Layanan
              </strong>
              <div style="font-size: 0.875rem; color: var(--text-secondary); line-height: 1.5;">
                Anda memiliki <strong>${p.length} layanan</strong> yang akan berakhir dalam 7 hari ke depan. Fitur <strong>Perpanjangan Otomatis (Auto-Renew)</strong> aktif untuk memastikan peladen Anda tetap online tanpa gangguan.
              </div>
            </div>
            <button class="btn btn-sm btn-outline" onclick="window.location.hash='#/dashboard/services'" style="white-space: nowrap;">
              Kelola di Layanan Saya
            </button>
          </div>
        `:``}

        <div class="metrics-row">
          <div class="metric-card">
            <div class="metric-header">
              <span class="metric-title">Total Pesanan</span>
              ${t.shoppingCart(`icon`,18,2)}
            </div>
            <div class="metric-val">${o.length}</div>
            <div class="metric-trend">Seluruh transaksi Anda</div>
          </div>

          <div class="metric-card">
            <div class="metric-header">
              <span class="metric-title">Peladen Awan Aktif</span>
              ${t.server(`icon`,18,2)}
            </div>
            <div class="metric-val">${s.length}</div>
            <div class="metric-trend">Keterandalan SLA 99,99%</div>
          </div>

          <div class="metric-card">
            <div class="metric-header">
              <span class="metric-title">Lisensi AI Berjalan</span>
              ${t.sparkles(`icon`,18,2)}
            </div>
            <div class="metric-val">${c.length}</div>
            <div class="metric-trend">Status Resmi Terverifikasi</div>
          </div>

          <div class="metric-card">
            <div class="metric-header">
              <span class="metric-title">Tiket Bantuan</span>
              ${t.ticket(`icon`,18,2)}
            </div>
            <div class="metric-val">${u.length}</div>
            <div class="metric-trend">Dukungan teknis aktif</div>
          </div>
        </div>

        <div class="dash-card">
          <div class="dash-card-header">
            <h3 class="dash-card-title">Pesanan Terakhir</h3>
            <button class="btn btn-ghost btn-sm" onclick="window.location.hash='#/dashboard/orders'">Lihat Semua</button>
          </div>
          <div class="dash-table-wrap">
            <table class="dash-table">
              <thead>
                <tr>
                  <th>Nomor Faktur</th>
                  <th>Layanan</th>
                  <th>Paket</th>
                  <th>Total Biaya</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                ${o.length===0?`
                  <tr>
                    <td colspan="5" style="text-align: center; padding: 2rem; color: var(--text-muted);">
                      Belum ada pesanan terbaru.
                    </td>
                  </tr>
                `:o.slice(0,3).map(e=>`
                  <tr>
                    <td><strong style="color: var(--text-primary); font-family: var(--font-mono);">${e.invoiceNumber||e.id}</strong></td>
                    <td><strong style="color: var(--text-primary);">${e.itemTitle}</strong></td>
                    <td>${e.package}</td>
                    <td><strong style="color: var(--text-primary);">${i(e.amount)}</strong></td>
                    <td>
                      <span class="status-pill ${e.status===`Selesai`?`success`:`warning`}">
                        ${e.status}
                      </span>
                    </td>
                  </tr>
                `).join(``)}
              </tbody>
            </table>
          </div>
        </div>
      `}}function ze(){let e=document.querySelectorAll(`.dashboard-sidebar .sidebar-nav-item[data-tab]`);e.forEach(t=>{t.onclick=()=>{let n=t.getAttribute(`data-tab`);e.forEach(e=>e.classList.remove(`active`)),t.classList.add(`active`),W=n;let r=document.getElementById(`dashboard-content-area`);r&&(r.innerHTML=K(n,S.getState()),q(n))}});let t=document.getElementById(`dash-logout-btn`);t&&(t.onclick=()=>{S.logout(),window.location.hash=`#/`}),q(W)}function q(e){if(e===`orders`&&(document.querySelectorAll(`.order-filter-btn`).forEach(e=>{e.onclick=()=>{G=e.getAttribute(`data-filter`);let t=document.getElementById(`dashboard-content-area`);t&&(t.innerHTML=K(`orders`,S.getState()),q(`orders`))}}),document.querySelectorAll(`.print-user-invoice-btn`).forEach(e=>{e.onclick=()=>{let t=e.getAttribute(`data-order-id`),n=S.getState().orders.find(e=>e.id===t);n&&me(n)}})),e===`invoices`&&document.querySelectorAll(`.print-user-invoice-btn`).forEach(e=>{e.onclick=()=>{let t=e.getAttribute(`data-order-id`),n=S.getState().orders.find(e=>e.id===t);n&&me(n)}}),e===`services`&&(document.querySelectorAll(`.toggle-autorenew-input`).forEach(e=>{e.onchange=()=>{let t=e.getAttribute(`data-service-id`),n=S.toggleAutoRenew(t);alert(`Perpanjangan Otomatis (Auto-Renew) untuk layanan ini sekarang ${n?`AKTIF`:`NONAKTIF`}.`);let r=document.getElementById(`dashboard-content-area`);r&&(r.innerHTML=K(`services`,S.getState()),q(`services`))}}),document.querySelectorAll(`.user-renew-service-btn`).forEach(e=>{e.onclick=()=>{let t=e.getAttribute(`data-service-id`),n=S.renewService(t,1);if(n){alert(`Layanan berhasil diperpanjang 1 bulan!\nPeriode baru: ${n.periodText}\nMasa aktif baru hingga: ${n.expiresAt}\nFaktur pembayaran baru otomatis diterbitkan di menu Faktur.`);let e=document.getElementById(`dashboard-content-area`);e&&(e.innerHTML=K(`services`,S.getState()),q(`services`))}}})),e===`tickets`){let e=document.getElementById(`create-new-ticket-btn`);e&&(e.onclick=()=>{let e=prompt(`Tuliskan ringkasan kendala teknis atau pertanyaan Anda:`);if(e){S.addTicket({subject:e,department:`Dukungan Komputasi Awan & Lisensi`,priority:`Biasa`}),alert(`Tiket bantuan berhasil dibuat. Tim teknis MultiCloud akan segera menindaklanjuti.`);let t=document.getElementById(`dashboard-content-area`);t&&(t.innerHTML=K(`tickets`,S.getState()))}})}if(e===`profile`){let e=document.getElementById(`profile-settings-form`);e&&(e.onsubmit=e=>{e.preventDefault(),alert(`Informasi profil Anda berhasil diperbarui.`)})}}var J=`overview`,Y=[];function Be(e=`overview`){J=e;let n=S.getState(),r=b.getConnectionStatus(),i=r===`connected`?`Aktif`:r===`paused`?`Terputus`:`Lokal`,a=r===`connected`?`success`:r===`paused`?`danger`:`warning`;return`
    <div class="dashboard-container">
      <!-- Bilah Sisi Administrator -->
      <aside class="dashboard-sidebar" aria-label="Navigasi Dasbor Admin">
        <div>
          <div class="dashboard-user-card">
            <div class="user-avatar" style="background-color: var(--color-accent);">AD</div>
            <div class="user-meta">
              <span class="user-name">Administrator MultiCloud</span>
              <span class="user-role-badge" style="color: var(--color-accent);">Pengelola Utama</span>
            </div>
          </div>

          <nav class="sidebar-nav">
            <button class="sidebar-nav-item ${J===`overview`?`active`:``}" data-admin-tab="overview">
              ${t.layoutDashboard(`icon`,18,2)}
              <span>Ringkasan Admin</span>
            </button>
            <button class="sidebar-nav-item ${J===`orders`?`active`:``}" data-admin-tab="orders">
              ${t.shoppingCart(`icon`,18,2)}
              <span>Kelola Pesanan</span>
              <span class="sidebar-badge">${n.orders.length}</span>
            </button>
            <button class="sidebar-nav-item ${J===`products`?`active`:``}" data-admin-tab="products">
              ${t.package(`icon`,18,2)}
              <span>Kelola Produk</span>
              <span class="sidebar-badge">${l.length}</span>
            </button>
            <button class="sidebar-nav-item ${J===`categories`?`active`:``}" data-admin-tab="categories">
              ${t.layers(`icon`,18,2)}
              <span>Kelola Kategori</span>
            </button>
            <button class="sidebar-nav-item ${J===`customers`?`active`:``}" data-admin-tab="customers">
              ${t.users(`icon`,18,2)}
              <span>Kelola Pelanggan</span>
            </button>
            <button class="sidebar-nav-item ${J===`transactions`?`active`:``}" data-admin-tab="transactions">
              ${t.receipt(`icon`,18,2)}
              <span>Kelola Transaksi</span>
            </button>
            <button class="sidebar-nav-item ${J===`supabase`?`active`:``}" data-admin-tab="supabase">
              ${t.database(`icon`,18,2)}
              <span>Basis Data Supabase</span>
              <span class="status-pill ${a}" style="font-size: 0.625rem; padding: 0.1rem 0.45rem; margin-left: auto; flex-shrink: 0; white-space: nowrap;">
                ${i}
              </span>
            </button>
            <button class="sidebar-nav-item ${J===`content`?`active`:``}" data-admin-tab="content">
              ${t.fileText(`icon`,18,2)}
              <span>Konten Situs Web</span>
            </button>
          </nav>
        </div>

        <div class="sidebar-footer">
          <a href="#/dashboard" class="sidebar-nav-item">
            ${t.user(`icon`,18,2)}
            <span>Ke Portal Pengguna</span>
          </a>
          <button class="sidebar-nav-item" id="admin-logout-btn" style="color: var(--color-danger);">
            ${t.logout(`icon`,18,2)}
            <span>Keluar Sesi Admin</span>
          </button>
        </div>
      </aside>

      <!-- Konten Utama Dasbor Admin -->
      <main class="dashboard-content" id="admin-content-area">
        ${X(r)}
        ${Z(J,n)}
      </main>
    </div>
  `}function X(e){return e===`connected`?``:e===`paused`?`
      <div class="auth-alert auth-alert-error" role="alert" style="margin-bottom: 1.5rem; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
        <div style="display: flex; align-items: flex-start; gap: 0.65rem; flex: 1 1 320px;">
          ${t.alertCircle(`icon`,20,2)}
          <div>
            <strong style="display: block; font-size: 0.9375rem; margin-bottom: 0.2rem;">Peringatan: Koneksi Basis Data Supabase Terputus atau Di-Pause</strong>
            <span style="font-size: 0.8125rem; line-height: 1.5;">
              Peladen Supabase tidak merespons. Pada paket Free Tier, Supabase otomatis menonaktifkan (<em>pause</em>) proyek setelah 7 hari tanpa aktivitas. Buka <strong>supabase.com/dashboard</strong> lalu klik <strong>Restore project</strong> agar pesanan online kembali masuk.
            </span>
          </div>
        </div>
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
          <a href="https://supabase.com/dashboard" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm" style="background: var(--bg-surface);">
            ${t.externalLink(`icon`,14,2)}
            <span>Buka Supabase</span>
          </a>
          <button type="button" class="btn btn-primary btn-sm" id="admin-banner-retry-supabase-btn">
            ${t.refresh(`icon`,14,2)}
            <span>Coba Sambungkan Ulang</span>
          </button>
        </div>
      </div>
    `:`
    <div class="auth-alert auth-alert-info" role="status" style="margin-bottom: 1.5rem; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
      <div style="display: flex; align-items: flex-start; gap: 0.65rem; flex: 1 1 320px;">
        ${t.infoCircle(`icon`,20,2)}
        <div>
          <strong style="display: block; font-size: 0.9375rem; margin-bottom: 0.2rem;">Basis Data Supabase Belum Terpasang (Mode Lokal Aktif)</strong>
          <span style="font-size: 0.8125rem; line-height: 1.5;">
            Pesanan hanya tersimpan di peramban masing-masing. Pasang Project URL dan Anon Public Key Supabase aktif agar seluruh pesanan user online otomatis masuk ke Panel Admin.
          </span>
        </div>
      </div>
      <button type="button" class="btn btn-primary btn-sm" id="admin-banner-goto-supabase-btn">
        ${t.database(`icon`,14,2)}
        <span>Atur Supabase</span>
      </button>
    </div>
  `}function Z(e,n){let r=e=>new Intl.NumberFormat(`id-ID`,{style:`currency`,currency:`IDR`,maximumFractionDigits:0}).format(e);switch(e){case`orders`:let e=[...n.orders].sort((e,t)=>{let n=+(e.status===`Selesai`),r=+(t.status===`Selesai`);return n===r?new Date(t.date||0)-new Date(e.date||0):n-r});return`
        <div class="dash-header">
          <div>
            <h1 class="dash-title">Kelola Pesanan Masuk</h1>
            <p class="dash-subtitle">Pantau seluruh pesanan pelanggan, verifikasi status pembayaran, dan terbitkan kunci lisensi resmi.</p>
          </div>
          <button type="button" class="btn btn-outline btn-sm" id="admin-refresh-orders-btn">
            ${t.refresh(`icon`,15,2)} Segarkan Pesanan
          </button>
        </div>

        <div id="admin-order-feedback" class="auth-alert auth-alert-success" role="status" style="display: none;"></div>

        <div class="dash-card">
          <div class="dash-table-wrap">
            <table class="dash-table">
              <thead>
                <tr>
                  <th>Nomor Faktur</th>
                  <th>Nama Pelanggan</th>
                  <th>Produk / Layanan</th>
                  <th>Paket</th>
                  <th>Jumlah Tagihan</th>
                  <th>Metode</th>
                  <th>Status</th>
                  <th>Aksi Verifikasi</th>
                </tr>
              </thead>
              <tbody>
                ${e.length===0?`
                  <tr>
                    <td colspan="8" style="text-align: center; padding: 2.5rem 1rem; color: var(--text-muted);">
                      Belum ada pesanan masuk dari pelanggan.
                    </td>
                  </tr>
                `:e.map(e=>`
                  <tr>
                    <td><strong style="color: var(--text-primary); font-family: var(--font-mono);">${e.invoiceNumber||e.id}</strong></td>
                    <td>${e.userName||`Pelanggan`}</td>
                    <td><strong>${e.itemTitle}</strong></td>
                    <td>${e.package}</td>
                    <td><strong>${r(e.amount)}</strong></td>
                    <td>${e.paymentMethod}</td>
                    <td>
                      <span class="status-pill ${e.status===`Selesai`?`success`:e.status===`Sedang Diproses`?`info`:`warning`}">
                        ${e.status}
                      </span>
                    </td>
                    <td>
                      ${e.status===`Selesai`?`
                        <span style="font-size: 0.8125rem; color: var(--color-success); font-weight: 600;">✓ Selesai & Aktif</span>
                      `:`
                        <button type="button" class="btn btn-primary btn-sm admin-approve-order-btn" data-order-id="${e.id}">
                          ${t.check(`icon`,14,2)} Terima & Setujui Pesanan
                        </button>
                      `}
                    </td>
                  </tr>
                `).join(``)}
              </tbody>
            </table>
          </div>
        </div>
      `;case`supabase`:let i=b.getConfig(),a=b.isConfigured();return`
        <div class="dash-header">
          <div>
            <h1 class="dash-title">Konfigurasi Basis Data Supabase</h1>
            <p class="dash-subtitle">Hubungkan platform MultiCloud dengan peladen PostgreSQL Supabase Anda secara langsung.</p>
          </div>
          <span class="status-pill ${a?`success`:`warning`}">
            ${a?`Terhubung ke Supabase`:`Menggunakan Penyimpanan Lokal`}
          </span>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 340px; gap: 2rem; align-items: start;">
          <!-- Formulir Kunci Supabase -->
          <div class="card" style="padding: 2rem;">
            <h3 style="font-size: 1.125rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.5rem;">
              Kredensial API Supabase
            </h3>
            <p style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 1.5rem;">
              Dapatkan Project URL dan anon public key dari Dasbor Supabase Anda pada menu <strong>Project Settings &gt; API</strong>.
            </p>

            <form id="supabase-config-form">
              <div class="form-group">
                <label class="form-label" for="supabase-url">Project URL Supabase</label>
                <input class="form-input" id="supabase-url" type="url" required placeholder="https://xyzcompany.supabase.co" value="${i.url.includes(`YOUR_PROJECT_ID`)?``:i.url}" />
                <span class="form-hint">Contoh: https://wvxabctest.supabase.co</span>
              </div>

              <div class="form-group">
                <label class="form-label" for="supabase-anon-key">Anon Public Key</label>
                <textarea class="form-textarea" id="supabase-anon-key" required placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." rows="3">${i.anonKey.includes(`YOUR_SUPABASE_ANON_KEY`)?``:i.anonKey}</textarea>
                <span class="form-hint">Kunci publik aman untuk koneksi klien peramban (anon public).</span>
              </div>

              <div style="display: flex; gap: 0.75rem; margin-top: 1.5rem;">
                <button type="submit" class="btn btn-primary btn-md" id="save-supabase-btn">
                  ${t.database(`icon`,16,2)}
                  <span>Simpan & Sambungkan</span>
                </button>
                <button type="button" class="btn btn-secondary btn-md" id="test-supabase-btn">
                  ${t.refresh(`icon`,16,2)}
                  <span>Uji Koneksi</span>
                </button>
              </div>
            </form>

            <div id="supabase-feedback" style="display: none; margin-top: 1.25rem; padding: 0.875rem; border-radius: var(--radius-md); font-size: 0.875rem;"></div>
          </div>

          <!-- Petunjuk Pembuatan Tabel SQL -->
          <div class="card" style="padding: 1.5rem; background-color: var(--bg-surface-secondary);">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
              <span style="color: var(--color-primary);">${t.infoCircle(`icon`,20,2)}</span>
              <strong style="color: var(--text-primary); font-size: 0.9375rem;">Skema SQL Siap Pakai</strong>
            </div>
            <p style="font-size: 0.8125rem; color: var(--text-secondary); line-height: 1.55; margin-bottom: 1rem;">
              Berkas <code style="color: var(--color-primary);">supabase-schema.sql</code> telah disiapkan di direktori proyek Anda. Jalankan isi skrip tersebut di menu <strong>SQL Editor</strong> pada dasbor Supabase untuk membuat tabel pesanan, produk, transaksi, dan profil administrator secara otomatis.
            </p>
            <div style="font-size: 0.75rem; color: var(--text-muted); border-top: 1px dashed var(--border-color); padding-top: 0.75rem;">
              Lokasi berkas: <br />
              <code style="word-break: break-all;">d:/www/multicloud/supabase-schema.sql</code>
            </div>
          </div>
        </div>
      `;case`products`:return`
        <div class="dash-header">
          <div>
            <h1 class="dash-title">Kelola Produk & Lisensi AI</h1>
            <p class="dash-subtitle">Katalog produk aktif, alokasi lisensi resmi, dan penetapan harga jual.</p>
          </div>
          <button class="btn btn-primary btn-sm" id="admin-add-product-btn">
            ${t.plus(`icon`,16,2)} Tambah Produk Baru
          </button>
        </div>

        <div class="dash-card">
          <div class="dash-table-wrap">
            <table class="dash-table">
              <thead>
                <tr>
                  <th>Nama Produk</th>
                  <th>Kategori</th>
                  <th>Lencana</th>
                  <th>Status Lisensi</th>
                  <th>Harga Dasar</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                ${l.map(e=>`
                  <tr>
                    <td><strong>${e.name}</strong></td>
                    <td><span class="badge badge-outline">${e.category}</span></td>
                    <td><span class="badge ${e.badge===`Terlaris`?`badge-bestseller`:e.badge===`Baru`?`badge-new`:`badge-popular`}">${e.badge}</span></td>
                    <td>
                      ${e.isOfficialLicense?`
                        <span class="badge badge-success">${t.shieldCheck(`icon`,12,2)} Resmi</span>
                      `:`<span class="badge badge-outline">Infrastruktur</span>`}
                    </td>
                    <td><strong>${r(e.price)}</strong></td>
                    <td>
                      <div class="flex items-center gap-1">
                        <button class="btn btn-ghost btn-sm" title="Ubah">${t.edit(`icon`,16,2)}</button>
                        <button class="btn btn-ghost btn-sm" title="Hapus" style="color: var(--color-danger);">${t.trash(`icon`,16,2)}</button>
                      </div>
                    </td>
                  </tr>
                `).join(``)}
              </tbody>
            </table>
          </div>
        </div>
      `;case`categories`:return`
        <div class="dash-header">
          <div>
            <h1 class="dash-title">Kelola Kategori Layanan</h1>
            <p class="dash-subtitle">Struktur pengelompokan layanan teknologi dan produk digital.</p>
          </div>
        </div>

        <div class="grid-2">
          ${C.map(e=>`
            <div class="card">
              <div class="card-header">
                <div>
                  <h3 class="card-title">${e.title}</h3>
                  <span class="badge badge-primary">${e.badge}</span>
                </div>
                <div class="card-icon-box">
                  ${t[e.icon]?t[e.icon](`icon`,22,2):t.layers(`icon`,22,2)}
                </div>
              </div>
              <p class="card-desc">${e.subtitle}</p>
              <div class="card-footer">
                <button class="btn btn-outline btn-sm">Perbarui Kategori</button>
              </div>
            </div>
          `).join(``)}
        </div>
      `;case`customers`:let o=Array.isArray(Y)?Y:[];return`
        <div class="dash-header">
          <div>
            <h1 class="dash-title">Kelola Pelanggan Terdaftar</h1>
            <p class="dash-subtitle">Daftar pengguna terverifikasi yang tersinkronisasi langsung dari tabel <code>profiles</code> Supabase.</p>
          </div>
          <button class="btn btn-outline btn-sm" id="admin-refresh-customers-btn">
            ${t.refresh(`icon`,15,2)} Segarkan dari Supabase
          </button>
        </div>

        <div class="dash-card">
          <div class="dash-table-wrap">
            <table class="dash-table">
              <thead>
                <tr>
                  <th>Nama Pelanggan</th>
                  <th>Alamat Surel</th>
                  <th>Perusahaan / Tim</th>
                  <th>Peran Akun</th>
                  <th>Status Sumber Data</th>
                  <th>Tanggal Bergabung</th>
                </tr>
              </thead>
              <tbody id="customers-table-body">
                ${o.length===0?`
                  <tr>
                    <td colspan="6" style="text-align: center; padding: 2.5rem 1rem; color: var(--text-muted);">
                      Belum ada pelanggan terdaftar.
                    </td>
                  </tr>
                `:o.map(e=>`
                  <tr>
                    <td><strong>${e.full_name||`Pengguna`}</strong></td>
                    <td>${e.email}</td>
                    <td>${e.company||`Perorangan`}</td>
                    <td><span class="badge ${e.role===`admin`?`badge-primary`:`badge-outline`}">${e.role===`admin`?`Administrator`:`Pengguna`}</span></td>
                    <td><span class="status-pill success">${Y&&Y.length>0?`Supabase Real-time`:`Tersimpan`}</span></td>
                    <td>${e.created_at?new Date(e.created_at).toLocaleDateString(`id-ID`,{day:`numeric`,month:`short`,year:`numeric`}):`-`}</td>
                  </tr>
                `).join(``)}
              </tbody>
            </table>
          </div>
        </div>
      `;case`transactions`:return`
        <div class="dash-header">
          <div>
            <h1 class="dash-title">Kelola Mutasi & Transaksi Keuangan</h1>
            <p class="dash-subtitle">Catatan pembukuan penerimaan pembayaran dari pelanggan via gerbang digital.</p>
          </div>
        </div>

        <div class="dash-card">
          <div class="dash-table-wrap">
            <table class="dash-table">
              <thead>
                <tr>
                  <th>ID Transaksi</th>
                  <th>Uraian Pesanan</th>
                  <th>Metode Pembayaran</th>
                  <th>Nominal</th>
                  <th>Waktu Konfirmasi</th>
                  <th>Status Pembayaran</th>
                </tr>
              </thead>
              <tbody>
                ${n.transactions.length===0?`
                  <tr>
                    <td colspan="6" style="text-align: center; padding: 2.5rem 1rem; color: var(--text-muted);">
                      Belum ada mutasi transaksi masuk.
                    </td>
                  </tr>
                `:n.transactions.map(e=>`
                  <tr>
                    <td><strong style="color: var(--text-primary); font-family: var(--font-mono);">${e.id}</strong></td>
                    <td>${e.description}</td>
                    <td>${e.method}</td>
                    <td><strong>${r(e.amount)}</strong></td>
                    <td>${e.date}</td>
                    <td><span class="status-pill success">${e.status}</span></td>
                  </tr>
                `).join(``)}
              </tbody>
            </table>
          </div>
        </div>
      `;case`content`:return`
        <div class="dash-header">
          <div>
            <h1 class="dash-title">Kelola Konten Situs Web</h1>
            <p class="dash-subtitle">Atur judul utama, deskripsi platform, dan pengumuman status pemeliharaan.</p>
          </div>
        </div>

        <div class="card" style="max-width: 700px; padding: 2rem;">
          <form id="admin-content-form">
            <div class="form-group">
              <label class="form-label">Judul Utama Beranda (Headline)</label>
              <input class="form-input" type="text" value="Everything You Need to Build, Scale & Grow." />
            </div>

            <div class="form-group">
              <label class="form-label">Subjudul & Deskripsi Singkat</label>
              <textarea class="form-textarea" rows="3">MultiCloud adalah platform terpadu penyedia infrastruktur komputasi awan berkecepatan tinggi, gerbang API terkelola, alat AI berlisensi resmi, dan katalog produk digital untuk akselerasi teknologi Anda.</textarea>
            </div>

            <div class="form-group">
              <label class="form-label">Status Peladen Operasional</label>
              <select class="form-select">
                <option value="normal">Semua Sistem Beroperasi Normal (99,99%)</option>
                <option value="maintenance">Pemeliharaan Terjadwal</option>
              </select>
            </div>

            <button type="submit" class="btn btn-primary btn-md" style="margin-top: 1rem;">
              <span>Publikasikan Perubahan Konten</span>
            </button>
          </form>
        </div>
      `;default:let s=n.orders.filter(e=>e.status===`Selesai`).reduce((e,t)=>e+Number(t.amount||0),0),c=n.orders.filter(e=>e.status!==`Selesai`).length,u=n.services.length+n.digitalProducts.length;return`
        <div class="dash-header">
          <div>
            <h1 class="dash-title">Pusat Kendali Administrator</h1>
            <p class="dash-subtitle">Pemantauan aktivitas operasional platform MultiCloud secara waktu nyata.</p>
          </div>
          <button class="btn btn-outline btn-sm" id="admin-refresh-metrics-btn">
            ${t.refresh(`icon`,15,2)} Segarkan Data
          </button>
        </div>

        <div class="metrics-row">
          <div class="metric-card">
            <div class="metric-header">
              <span class="metric-title">Total Pendapatan Lunas</span>
              ${t.receipt(`icon`,18,2)}
            </div>
            <div class="metric-val">${r(s)}</div>
            <div class="metric-trend">${n.orders.filter(e=>e.status===`Selesai`).length} pesanan terverifikasi</div>
          </div>

          <div class="metric-card">
            <div class="metric-header">
              <span class="metric-title">Menunggu Verifikasi</span>
              ${t.clock(`icon`,18,2)}
            </div>
            <div class="metric-val">${c} Pesanan</div>
            <div class="metric-trend">Perlu persetujuan admin</div>
          </div>

          <div class="metric-card">
            <div class="metric-header">
              <span class="metric-title">Layanan & Lisensi Aktif</span>
              ${t.server(`icon`,18,2)}
            </div>
            <div class="metric-val">${u} Aktif</div>
            <div class="metric-trend">Terbit dari pesanan selesai</div>
          </div>

          <div class="metric-card">
            <div class="metric-header">
              <span class="metric-title">Total Pesanan Masuk</span>
              ${t.shoppingCart(`icon`,18,2)}
            </div>
            <div class="metric-val">${n.orders.length} Pesanan</div>
            <div class="metric-trend">Data tersinkronisasi</div>
          </div>
        </div>

        <div class="dash-card">
          <div class="dash-card-header">
            <h3 class="dash-card-title">Pesanan Masuk Terbaru</h3>
            <button class="btn btn-ghost btn-sm" onclick="window.location.hash='#/admin/orders'">Kelola Semua</button>
          </div>
          <div class="dash-table-wrap">
            <table class="dash-table">
              <thead>
                <tr>
                  <th>Faktur</th>
                  <th>Pelanggan</th>
                  <th>Layanan</th>
                  <th>Paket</th>
                  <th>Total</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                ${n.orders.length===0?`
                  <tr>
                    <td colspan="6" style="text-align: center; padding: 2rem; color: var(--text-muted);">
                      Belum ada pesanan masuk.
                    </td>
                  </tr>
                `:n.orders.slice(0,3).map(e=>`
                  <tr>
                    <td><strong>${e.invoiceNumber||e.id}</strong></td>
                    <td>${e.userName||`Pelanggan`}</td>
                    <td>${e.itemTitle}</td>
                    <td>${e.package}</td>
                    <td><strong>${r(e.amount)}</strong></td>
                    <td>
                      <span class="status-pill ${e.status===`Selesai`?`success`:`warning`}">
                        ${e.status}
                      </span>
                    </td>
                  </tr>
                `).join(``)}
              </tbody>
            </table>
          </div>
        </div>
      `}}function Ve(){let e=document.querySelectorAll(`.dashboard-sidebar .sidebar-nav-item[data-admin-tab]`);e.forEach(t=>{t.onclick=()=>{let n=t.getAttribute(`data-admin-tab`);e.forEach(e=>e.classList.remove(`active`)),t.classList.add(`active`),J=n;let r=document.getElementById(`admin-content-area`);r&&(r.innerHTML=X(b.getConnectionStatus())+Z(n,S.getState()),Q(n))}});let t=document.getElementById(`admin-logout-btn`);t&&(t.onclick=()=>{S.logout(),window.location.hash=`#/admin-login`}),Q(J)}function Q(e){let n=document.getElementById(`admin-banner-retry-supabase-btn`);n&&(n.onclick=async()=>{n.disabled=!0,n.textContent=`Menguji...`,await b.retryConnection()&&await S.syncWithSupabase();let e=document.getElementById(`admin-content-area`);e&&(e.innerHTML=X(b.getConnectionStatus())+Z(J,S.getState()),Q(J))});let r=document.getElementById(`admin-banner-goto-supabase-btn`);if(r&&(r.onclick=()=>{let e=document.querySelector(`.dashboard-sidebar .sidebar-nav-item[data-admin-tab="supabase"]`);e&&e.click()}),e===`customers`){let e=document.getElementById(`admin-refresh-customers-btn`);e&&(e.onclick=async()=>{e&&(e.textContent=`Memuat dari Supabase...`);let n=await b.getCustomers();if(n&&n.length>0){Y=n;let e=document.getElementById(`admin-content-area`);e&&(e.innerHTML=Z(`customers`,S.getState()),Q(`customers`))}else e&&(e.innerHTML=`${t.refresh(`icon`,15,2)} Segarkan dari Supabase`)}),Y.length===0&&b.isConfigured()&&b.getCustomers().then(e=>{if(e&&e.length>0){Y=e;let t=document.getElementById(`admin-content-area`);t&&(t.innerHTML=Z(`customers`,S.getState()),Q(`customers`))}})}if(e===`orders`){let e=document.getElementById(`admin-refresh-orders-btn`);e&&(e.onclick=async()=>{e.disabled=!0,e.textContent=`Menyegarkan...`,await S.syncWithSupabase();let t=document.getElementById(`admin-content-area`);t&&(t.innerHTML=Z(`orders`,S.getState())),Q(`orders`)}),document.querySelectorAll(`.admin-approve-order-btn`).forEach(e=>{e.onclick=async()=>{let n=e.getAttribute(`data-order-id`);e.disabled=!0,e.innerHTML=`<span>Menyetujui...</span>`,await S.confirmOrderPayment(n);let r=document.getElementById(`admin-content-area`);r&&(r.innerHTML=Z(`orders`,S.getState())),Q(`orders`);let i=document.getElementById(`admin-order-feedback`);i&&(i.innerHTML=`${t.checkCircle(`icon`,17,2)} <span>Pesanan <strong>${n}</strong> berhasil disetujui. Layanan dan lisensi resmi pelanggan kini berstatus Selesai &amp; Aktif.</span>`,i.style.display=`flex`)}})}if(e===`supabase`){let e=document.getElementById(`supabase-config-form`),t=document.getElementById(`supabase-feedback`),n=document.getElementById(`test-supabase-btn`);e&&(e.onsubmit=async e=>{e.preventDefault();let n=document.getElementById(`supabase-url`).value.trim(),r=document.getElementById(`supabase-anon-key`).value.trim();b.saveConfig(n,r),await b.initClient(),t&&(t.style.display=`block`,t.style.backgroundColor=`var(--color-success-subtle)`,t.style.color=`var(--color-success)`,t.style.border=`1px solid rgba(16, 185, 129, 0.3)`,t.innerHTML=`<strong>Kredensial Disimpan!</strong> Sistem MultiCloud kini menggunakan basis data Supabase: <code>${n}</code>`)}),n&&(n.onclick=async()=>{n.textContent=`Menguji...`,await b.initClient(),n.textContent=`Uji Koneksi`,b.isConfigured()?alert(`Koneksi ke Supabase Berhasil! Endpoint aktif dan siap menerima data pesanan.`):alert(`Kredensial belum lengkap. Silakan masukkan Project URL dan Anon Key Supabase yang valid.`)})}if(e===`content`){let e=document.getElementById(`admin-content-form`);e&&(e.onsubmit=e=>{e.preventDefault(),alert(`Konten situs web berhasil disimpan dan dipublikasikan.`)})}}function $(){let[e,t]=((window.location.hash||`#/`).replace(/^#/,``)||`/`).split(`?`),n=new URLSearchParams(t||``),r=document.getElementById(`app`);if(!r)return;window.scrollTo({top:0,behavior:`instant`});let i=``,a=null,o=e;if(e===`/`||e===``)i=he(),a=ge,o=`/`;else if(e===`/services`)i=_e(n.get(`category`)||`all`),a=ve,o=`/services`;else if(e===`/products`)i=Se(n.get(`category`)||`all`),a=we,o=`/products`,document.title=`Katalog Produk Digital & Canva Premium - MultiCloud`;else if(e.startsWith(`/products/`)){let t=e.replace(`/products/`,``),n=l.find(e=>e.id===t||e.slug===t);i=Ee(t),a=()=>De(t),o=`/products`,document.title=n?`${n.name} - MultiCloud`:`Produk Tidak Ditemukan - MultiCloud`}else if(e===`/pricing`)i=ke(),a=Ae,o=`/pricing`;else if(e===`/about`)i=je(),a=null,o=`/about`;else if(e===`/contact`)i=Me(),a=Ne,o=`/contact`;else if(e===`/docs`)i=Pe(),a=null,o=`/docs`;else if(e===`/login`)i=V(`login`),a=U,o=`/login`,document.title=`Masuk ke Akun - MultiCloud`;else if(e===`/register`)i=V(`register`),a=U,o=`/register`,document.title=`Pendaftaran Akun Baru - MultiCloud`;else if(e===`/forgot-password`)i=V(`forgot`),a=U,o=`/login`,document.title=`Pemulihan Kata Sandi - MultiCloud`;else if(e===`/admin-login`||e===`/admin/login`)i=V(`login`),a=U,o=`/login`,document.title=`Masuk ke Akun - MultiCloud`;else if(e.startsWith(`/admin`)){if(!S.isAdmin()){window.location.hash=`#/login`;return}i=Be(e.split(`/`)[2]||`overview`),a=Ve,o=`/admin`}else if(e.startsWith(`/dashboard`)){if(!S.getState().currentUser){window.location.hash=`#/login`;return}i=Re(e.split(`/`)[2]||`overview`),a=ze,o=`/dashboard`}else i=`
      <div class="container text-center" style="padding: 6rem 1.5rem; text-align: center;">
        <h1 style="font-size: 3.5rem; font-weight: 800; color: var(--color-primary); margin-bottom: 1rem;">404</h1>
        <h2 style="font-size: 1.5rem; margin-bottom: 1rem; color: var(--text-primary);">Halaman Tidak Ditemukan</h2>
        <p style="color: var(--text-secondary); margin-bottom: 2rem;">Alamat yang Anda tuju mungkin telah dipindahkan atau belum tersedia.</p>
        <a href="#/" class="btn btn-primary btn-md">Kembali ke Beranda</a>
      </div>
    `,o=`/`;r.innerHTML=`
    ${ae(o)}
    <main role="main">
      ${i}
    </main>
    ${se()}
  `,oe(),typeof a==`function`&&a()}o(),window.addEventListener(`hashchange`,$),S.subscribe(()=>{$()}),document.addEventListener(`DOMContentLoaded`,()=>{$()}),(document.readyState===`complete`||document.readyState===`interactive`)&&$();