export function wrapLayout(title, body) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
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
          <li><a href="/"><img src="/realsteel.png" alt="Listicle" style="height:80px;" /></a></li>
        </ul>
      </nav>
    </header>
    <main class="container">
      ${body}
    </main>
  </body>
</html>`;
}
