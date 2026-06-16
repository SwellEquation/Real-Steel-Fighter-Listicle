import './dotenv.js';
import { pool } from './database.js';
import items from '../data/items.js';

async function reset() {
  await pool.query(`DROP TABLE IF EXISTS items`);

  await pool.query(`
    CREATE TABLE items (
      id       SERIAL PRIMARY KEY,
      slug     VARCHAR(100)  NOT NULL UNIQUE,
      title    VARCHAR(255)  NOT NULL,
      description TEXT       NOT NULL,
      image    VARCHAR(255)  NOT NULL,
      country  VARCHAR(100)  NOT NULL,
      nicknames VARCHAR(255) NOT NULL,
      bottype  VARCHAR(255)  NOT NULL,
      status   VARCHAR(100)  NOT NULL
    )
  `);

  for (const item of items) {
    await pool.query(
      `INSERT INTO items (id, slug, title, description, image, country, nicknames, bottype, status)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
      [item.id, item.slug, item.title, item.description, item.image, item.country, item.nicknames, item.bottype, item.status]
    );
  }

  console.log('Database reset and seeded successfully.');
  await pool.end();
}

reset().catch((err) => {
  console.error('Error resetting database:', err);
  process.exit(1);
});
