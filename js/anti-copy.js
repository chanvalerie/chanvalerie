(function() {
  const article = document.querySelector('.copy-protected');
  if (!article) return;

  function preventDefaultIfAllowed(event) {
    const target = event.target;
    if (target && /^(INPUT|TEXTAREA|SELECT|BUTTON)$/.test(target.tagName)) {
      return;
    }

    event.preventDefault();
  }

  document.addEventListener('contextmenu', preventDefaultIfAllowed);
  document.addEventListener('selectstart', preventDefaultIfAllowed);
  document.addEventListener('dragstart', preventDefaultIfAllowed);

  document.addEventListener('keydown', function(event) {
    const key = event.key.toLowerCase();
    const blockedKeys = ['c', 'x', 's', 'p', 'a', 'u', 'v'];

    if ((event.ctrlKey || event.metaKey) && blockedKeys.includes(key)) {
      event.preventDefault();
    }
  });
})();
