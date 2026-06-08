import express from 'express';
import itemsRouter from './routes/items.js';
import items from './data/items.js';
import { renderIndex } from './views/index.js';
import { render404 } from './views/404.js';

const app = express();

app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.send(renderIndex(items));
});

app.use('/games', itemsRouter);

app.use((req, res) => {
  res.status(404).send(render404());
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
