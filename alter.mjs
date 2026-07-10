import mysql from 'mysql2/promise';

async function alterTable() {
  const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'malang_raya'
  });

  try {
    await db.query(`ALTER TABLE blog_malang ADD COLUMN foto_alt VARCHAR(255) NULL`);
    console.log("foto_alt added successfully");
  } catch (err) {
    if (err.code === 'ER_DUP_FIELDNAME') {
      console.log("foto_alt already exists");
    } else {
      console.error(err);
    }
  }
  process.exit();
}
alterTable();
