const mediaStatus = document.querySelector('.media-status');
const mediaCards = document.querySelectorAll('.media-card[data-provider][data-embed-url]');

function announce(message) {
  if (mediaStatus) mediaStatus.textContent = message;
}

function makeFrame(url, title, className = '') {
  const frame = document.createElement('iframe');
  frame.src = url;
  frame.title = title;
  frame.className = className;
  frame.loading = 'lazy';
  frame.referrerPolicy = 'strict-origin-when-cross-origin';
  frame.allowFullscreen = true;
  frame.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
  return frame;
}

function loadXPost(shell, url, card) {
  const quote = document.createElement('blockquote');
  quote.className = 'twitter-tweet';
  const link = document.createElement('a');
  link.href = url;
  link.textContent = 'Beitrag auf X öffnen';
  quote.appendChild(link);
  shell.appendChild(quote);

  const finish = () => {
    if (window.twttr?.widgets) {
      window.twttr.widgets.load(shell).then(() => {
        card.classList.remove('is-loading');
        card.classList.add('is-loaded');
        card.removeAttribute('aria-busy');
        announce('Der Social-Media-Beitrag wurde geladen.');
      }).catch(() => showError(card, 'Der Beitrag konnte nicht eingebettet werden. Nutze bitte den Direktlink.'));
    }
  };

  const existing = document.querySelector('script[data-x-widgets]');
  if (existing) {
    if (window.twttr?.widgets) finish();
    else existing.addEventListener('load', finish, { once: true });
    return;
  }

  const script = document.createElement('script');
  script.src = 'https://platform.twitter.com/widgets.js';
  script.async = true;
  script.dataset.xWidgets = 'true';
  script.addEventListener('load', finish, { once: true });
  script.addEventListener('error', () => showError(card, 'X hat die Einbettung blockiert. Der Direktlink bleibt verfügbar.'), { once: true });
  document.head.appendChild(script);
}

function showError(card, message) {
  card.classList.remove('is-loading');
  card.classList.add('is-error');
  card.removeAttribute('aria-busy');
  const shell = card.querySelector('.embed-shell');
  if (shell) shell.innerHTML = `<p class="embed-error">${message}</p>`;
  announce(message);
}

mediaCards.forEach(card => {
  const button = card.querySelector('.load-embed');
  const preview = card.querySelector('.media-preview');
  if (!button || !preview) return;

  button.addEventListener('click', () => {
    if (card.classList.contains('is-loading') || card.classList.contains('is-loaded')) return;

    const provider = card.dataset.provider;
    const url = card.dataset.embedUrl;
    const title = card.querySelector('h3')?.textContent || 'Externer Medieninhalt';
    const shell = document.createElement('div');
    shell.className = `embed-shell embed-${provider}`;
    shell.setAttribute('role', 'group');
    shell.setAttribute('aria-label', title);
    preview.replaceWith(shell);
    card.classList.add('is-loading');
    card.setAttribute('aria-busy', 'true');
    button.disabled = true;
    button.textContent = 'Wird geladen …';
    announce(`${title} wird geladen.`);

    if (provider === 'youtube') {
      const frame = makeFrame(url, title);
      frame.addEventListener('load', () => {
        card.classList.remove('is-loading');
        card.classList.add('is-loaded');
        card.removeAttribute('aria-busy');
        announce(`${title} wurde geladen.`);
      }, { once: true });
      frame.addEventListener('error', () => showError(card, 'Das Video konnte nicht geladen werden. Nutze bitte den Direktlink.'), { once: true });
      shell.appendChild(frame);
    } else if (provider === 'x') {
      loadXPost(shell, url, card);
    } else if (provider === 'article') {
      const frame = makeFrame(url, title, 'article-frame');
      frame.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-popups');
      frame.addEventListener('load', () => {
        card.classList.remove('is-loading');
        card.classList.add('is-loaded');
        card.removeAttribute('aria-busy');
        announce(`${title} wurde geladen. Falls die Seite leer bleibt, nutze den Direktlink.`);
      }, { once: true });
      frame.addEventListener('error', () => showError(card, 'Der Beitrag erlaubt keine Einbettung. Nutze bitte den Direktlink.'), { once: true });
      shell.appendChild(frame);
    } else {
      showError(card, 'Dieser Inhaltstyp wird nicht unterstützt.');
    }
  });
});
