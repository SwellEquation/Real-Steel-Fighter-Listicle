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
          <dt>Genre</dt>
          <dd>${item.genre}</dd>
          <dt>Developer</dt>
          <dd>${item.developer}</dd>
          <dt>Year</dt>
          <dd>${item.year}</dd>
          <dt>Rating</dt>
          <dd>${item.rating}</dd>
        </dl>
      </div>
    </article>`;

  return wrapLayout(item.title, body);
}
