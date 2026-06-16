import { pool } from '../config/database.js';

export async function getAllItems() {
  const { rows } = await pool.query('SELECT * FROM items ORDER BY id');
  return rows;
}

export async function getItemBySlug(slug) {
  const { rows } = await pool.query('SELECT * FROM items WHERE slug = $1', [slug]);
  return rows[0];
}
