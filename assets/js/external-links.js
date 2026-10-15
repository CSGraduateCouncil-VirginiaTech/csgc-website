(function () {
  var siteUrl = document.currentScript.dataset.siteUrl;
  var internalHosts = new Set([window.location.hostname]);
  if (siteUrl) internalHosts.add(new URL(siteUrl, window.location.href).hostname);

  document.querySelectorAll('a[href]').forEach(function (link) {
    var url;
    try {
      url = new URL(link.getAttribute('href'), window.location.href);
    } catch (error) {
      return;
    }
    if ((url.protocol === 'http:' || url.protocol === 'https:') && !internalHosts.has(url.hostname)) {
      link.target = '_blank';
      link.relList.add('noopener', 'noreferrer');
    }
  });
})();
