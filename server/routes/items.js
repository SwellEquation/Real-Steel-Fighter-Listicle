import { Router } from 'express';
import { getItemBySlug } from '../controllers/items.js';
import { renderItem } from '../views/item.js';

const router = Router();

router.get('/:slug', async (req, res, next) => {
  const item = await getItemBySlug(req.params.slug);
  if (!item) return next();
  res.send(renderItem(item));
});

export default router;
