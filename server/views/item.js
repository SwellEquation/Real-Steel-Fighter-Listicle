import { wrapLayout } from './layout.js';

export function renderItem(item) {
  const body = `
    <a href="/" class="secondary">&larr; Back to list</a>
    <article class="detail-card">
      <img src="${item.image}" alt="${item.title}" class="detail-img" />
      <div class="detail-body">
        <hgroup>
          <h1>${item.title}</h1>
          <p>${item.description}</p>
        </hgroup>
        <dl>
          <dt>Country</dt>
          <dd>${item.country}</dd>
          <dt>Nicknames</dt>
          <dd>${item.nicknames}</dd>
          <dt>Bot Type</dt>
          <dd>${item.bottype}</dd>
          <dt>Status</dt>
          <dd>${item.status}</dd>
        </dl>
      </div>
    </article>`;

  return wrapLayout(item.title, body);
}
