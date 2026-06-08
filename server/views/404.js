import { wrapLayout } from './layout.js';

export function render404() {
  const body = `
    <article class="not-found">
      <h1>404</h1>
      <p>The page you're looking for doesn't exist.</p>
      <a href="/" role="button">Go Home</a>
    </article>`;

  return wrapLayout('Page Not Found', body);
}
