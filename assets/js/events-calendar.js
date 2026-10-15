document.querySelectorAll('[data-events-calendar]').forEach(function (calendar) {
  var input = calendar.querySelector('input');
  var copyButton = calendar.querySelector('[data-copy-calendar]');
  var status = calendar.querySelector('[role="status"]');
  input.addEventListener('click', function () { input.select(); });
  copyButton.addEventListener('click', async function () {
    try {
      if (!navigator.clipboard || !window.isSecureContext) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(input.value);
      status.textContent = 'Link copied! Choose your calendar below and paste it there.';
      copyButton.textContent = 'Copied!';
    } catch (error) {
      input.focus();
      input.select();
      status.textContent = 'Link selected. Copy it with Ctrl+C, Command+C, or your device’s Copy option.';
      copyButton.textContent = 'Copy link';
    }
  });

  var tablist = calendar.querySelector('[role="tablist"]');
  var tabs = Array.from(tablist.querySelectorAll('[role="tab"]'));
  function activate(index, focus) {
    tabs.forEach(function (tab, i) {
      tab.setAttribute('aria-selected', String(i === index));
      tab.tabIndex = i === index ? 0 : -1;
      calendar.querySelector('#' + tab.getAttribute('aria-controls')).hidden = i !== index;
    });
    if (focus) tabs[index].focus();
  }
  tabs.forEach(function (tab, index) {
    tab.addEventListener('click', function () { activate(index, false); });
    tab.addEventListener('keydown', function (event) {
      var next;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next !== undefined) {
        event.preventDefault();
        activate(next, true);
      }
    });
  });
  activate(0, false);
  tablist.hidden = false;
});
