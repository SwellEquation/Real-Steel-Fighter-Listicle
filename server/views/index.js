import { wrapLayout } from './layout.js';

export function renderIndex(items) {
  const cards = items
    .map(
      (item) => `
      <article class="card">
        <img src="${item.image}" alt="${item.title}" />
        <div class="card-body">
          <h2>${item.title}</h2>
          <p class="card-meta"><small>${item.country}</small></p>
          <a href="/fighters/${item.slug}" role="button">Info</a>
        </div>
      </article>`
    )
    .join('');

  const body = `
    <section class="home-layout">
      <hgroup class="intro-block">
        <h1 class="main-title">Real Steel Fighters</h1>
        <p class="main-desc">A list of some of Real Steels greatest robot boxers!</p>
      </hgroup>
      <section class="card-panel">
        <div class="card-grid">
          ${cards}
        </div>
      </section>
    </section>`;

  return wrapLayout('WRB Fighters', body);
}
