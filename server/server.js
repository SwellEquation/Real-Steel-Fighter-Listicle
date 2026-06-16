import express from 'express';
import './config/dotenv.js';
import itemsRouter from './routes/items.js';
import { getAllItems } from './controllers/items.js';
import { renderIndex } from './views/index.js';
import { render404 } from './views/404.js';

const app = express();

app.use(express.static('./public'));

app.get('/', async (req, res) => {
  const items = await getAllItems();
  res.send(renderIndex(items));
});

app.use('/fighters', itemsRouter);

app.use((req, res) => {
  res.status(404).send(render404());
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
