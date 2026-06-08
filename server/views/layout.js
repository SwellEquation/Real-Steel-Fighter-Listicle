export function wrapLayout(title, body) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title} — Listicle</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css"
    />
    <link rel="stylesheet" href="/style.css" />
  </head>
  <body>
    <header class="container">
      <nav>
        <ul>
          <li><strong><a href="/" class="contrast">🎮 Listicle</a></strong></li>
        </ul>
      </nav>
    </header>
    <main class="container">
      ${body}
    </main>
    <footer class="container">
      <small>Classic Video Games &mdash; Listicle Project</small>
    </footer>
  </body>
</html>`;
}
