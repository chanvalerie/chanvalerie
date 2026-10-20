(function() {
  const article = document.querySelector('.copy-protected');
  if (!article) return;

  function preventDefaultIfAllowed(event) {
    const target = event.target;
    if (target && /^(INPUT|TEXTAREA|SELECT|BUTTON|A|LABEL)$/i.test(target.tagName)) {
      return;
    }

    event.preventDefault();
  }

  ['contextmenu', 'selectstart', 'dragstart', 'mousedown', 'mousemove', 'touchstart', 'touchmove'].forEach(function(type) {
    document.addEventListener(type, preventDefaultIfAllowed, { passive: false });
  });

  document.addEventListener('copy', function(event) {
    if (event.target && event.target.closest && event.target.closest('.copy-protected')) {
      event.preventDefault();
    }
  }, { passive: false });

  document.addEventListener('cut', function(event) {
    if (event.target && event.target.closest && event.target.closest('.copy-protected')) {
      event.preventDefault();
    }
  }, { passive: false });

  document.addEventListener('paste', function(event) {
    if (event.target && event.target.closest && event.target.closest('.copy-protected')) {
      event.preventDefault();
    }
  }, { passive: false });

  document.addEventListener('keydown', function(event) {
    const key = event.key.toLowerCase();
    const blockedKeys = ['c', 'x', 's', 'p', 'a', 'u', 'v'];

    if ((event.ctrlKey || event.metaKey) && blockedKeys.includes(key)) {
      event.preventDefault();
    }

    if ((event.ctrlKey || event.metaKey) && event.shiftKey && key === 'i') {
      event.preventDefault();
    }
  });
})();
