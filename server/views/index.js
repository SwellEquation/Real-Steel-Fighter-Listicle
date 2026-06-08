import { wrapLayout } from './layout.js';

export function renderIndex(items) {
  const cards = items
    .map(
      (item) => `
      <article class="game-card">
        <img src="${item.image}" alt="${item.title}" />
        <div class="card-body">
          <h2>${item.title}</h2>
          <p class="card-meta"><small>${item.genre} &bull; ${item.year}</small></p>
          <p>${item.description}</p>
          <a href="/games/${item.slug}" role="button">Info</a>
        </div>
      </article>`
    )
    .join('');

  const body = `
    <hgroup>
      <h1>Classic Video Games</h1>
      <p>A curated list of the greatest video games ever made.</p>
    </hgroup>
    <div class="card-grid">
      ${cards}
    </div>`;

  return wrapLayout('Classic Video Games', body);
}
