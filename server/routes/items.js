import { Router } from 'express';
import items from '../data/items.js';
import { renderItem } from '../views/item.js';

const router = Router();

router.get('/:slug', (req, res, next) => {
  const item = items.find((i) => i.slug === req.params.slug);
  if (!item) return next();
  res.send(renderItem(item));
});

export default router;
