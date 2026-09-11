/* =========================================================
   SENTIERO GLOBAL — shared site behaviour.
   Vanilla JS only, no dependencies. Loaded on every page.
   ========================================================= */
(function(){
  "use strict";

  /* ---------- Mobile menu open/close ---------- */
  var mobileMenu = document.getElementById('mobileMenu');
  var menuButton = document.querySelector('.hamburger');
  function openMenu(){
    if(!mobileMenu) return;
    mobileMenu.classList.add('open');
    mobileMenu.setAttribute('aria-hidden','false');
    if(menuButton) menuButton.setAttribute('aria-expanded','true');
    document.body.classList.add('menu-open');
  }
  function closeMenu(){
    if(!mobileMenu) return;
    mobileMenu.classList.remove('open');
    mobileMenu.setAttribute('aria-hidden','true');
    if(menuButton) menuButton.setAttribute('aria-expanded','false');
    document.body.classList.remove('menu-open');
  }
  window.sgOpenMenu = openMenu;
  window.sgCloseMenu = closeMenu;
  if(menuButton) menuButton.addEventListener('click', openMenu);
  document.addEventListener('keydown', function(e){ if(e.key === 'Escape') closeMenu(); });
  document.querySelectorAll('.mobile-menu a').forEach(function(link){
    link.addEventListener('click', closeMenu);
  });
  var mmClose = document.querySelector('.mobile-menu .mm-close');
  if(mmClose) mmClose.addEventListener('click', closeMenu);

  /* ---------- Mobile accordion sections (Education / Travel / Visa dropdowns) ---------- */
  document.querySelectorAll('.mm-section').forEach(function(section){
    var caret = section.querySelector('.mm-caret');
    if(!caret) return;
    caret.addEventListener('click', function(){
      var isOpen = section.classList.contains('open');
      document.querySelectorAll('.mm-section').forEach(function(s){ s.classList.remove('open'); });
      if(!isOpen) section.classList.add('open');
    });
  });

  /* ---------- Desktop dropdowns: keyboard + touch support ----------
     Hover already works via CSS. This adds click/tap toggling so the
     menu also works for keyboard users and touch screens without a
     hover state. */
  document.querySelectorAll('.nav-item.has-dropdown > a').forEach(function(trigger){
    trigger.addEventListener('click', function(e){
      var parent = trigger.parentElement;
      var isTouchOrKeyboard = matchMedia('(hover: none)').matches;
      if(isTouchOrKeyboard){
        e.preventDefault();
        var wasOpen = parent.classList.contains('dropdown-open');
        document.querySelectorAll('.nav-item.dropdown-open').forEach(function(n){ n.classList.remove('dropdown-open'); });
        if(!wasOpen) parent.classList.add('dropdown-open');
      }
    });
  });
  document.addEventListener('click', function(e){
    if(!e.target.closest('.nav-item')){
      document.querySelectorAll('.nav-item.dropdown-open').forEach(function(n){ n.classList.remove('dropdown-open'); });
    }
  });

  /* ---------- Header scroll state ---------- */
  var nav = document.getElementById('nav');
  function updateNav(){ if(nav) nav.classList.toggle('scrolled', window.scrollY > 20); }
  updateNav();
  window.addEventListener('scroll', updateNav, {passive:true});

  /* ---------- Reveal on scroll ---------- */
  var revealEls = document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){ entry.target.classList.add('in'); io.unobserve(entry.target); }
      });
    }, {threshold:0.08});
    revealEls.forEach(function(el){ io.observe(el); });
  } else {
    revealEls.forEach(function(el){ el.classList.add('in'); });
  }

  /* ---------- FAQ accordion ---------- */
  document.querySelectorAll('.faq-item').forEach(function(item){
    var question = item.querySelector('.faq-q');
    if(!question) return;
    question.setAttribute('role','button');
    question.setAttribute('tabindex','0');
    function toggle(){
      var isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(function(i){ i.classList.remove('open'); });
      if(!isOpen) item.classList.add('open');
    }
    question.addEventListener('click', toggle);
    question.addEventListener('keydown', function(e){
      if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); toggle(); }
    });
  });

  /* ---------- Image fallback ----------
     Add data-fallback-label="Country — City" (and optionally
     data-fallback-sub="Image coming soon") to any <img>. If the file
     is missing, it's swapped for a tasteful placeholder instead of a
     broken-image icon. */
  document.querySelectorAll('img[data-fallback-label]').forEach(function(img){
    function showFallback(){
      var label = img.getAttribute('data-fallback-label') || '';
      var sub = img.getAttribute('data-fallback-sub') || 'Image coming soon';
      var wrap = document.createElement('div');
      wrap.className = 'img-fallback';
      wrap.innerHTML =
        '<svg class="fb-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>' +
        '<span class="fb-title">' + label + '</span>' +
        '<span class="fb-sub">' + sub + '</span>';
      if(img.parentElement){ img.parentElement.replaceChild(wrap, img); }
    }
    if(img.complete && img.naturalWidth === 0){ showFallback(); }
    img.addEventListener('error', showFallback);
  });

  /* ---------- Founders gallery: slow auto-scroll, pause on hover/touch ---------- */
  var gallery = document.querySelector('.founders-gallery');
  if(gallery){
    var track = gallery.querySelector('.founders-gallery-track');
    var paused = false;
    ['mouseenter','touchstart','focusin'].forEach(function(evt){
      gallery.addEventListener(evt, function(){ paused = true; }, {passive:true});
    });
    ['mouseleave','touchend','focusout'].forEach(function(evt){
      gallery.addEventListener(evt, function(){ paused = false; }, {passive:true});
    });
    var reduceMotion = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    if(track && !reduceMotion){
      var pos = 0;
      function step(){
        if(!paused){
          pos += 0.35;
          var max = track.scrollWidth - gallery.clientWidth;
          if(max > 0){
            if(pos > max) pos = 0;
            gallery.scrollLeft = pos;
          }
        } else {
          pos = gallery.scrollLeft;
        }
        requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }
  }
})();
