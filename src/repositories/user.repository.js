const db = require('../config/postgres');

async function findByEmail(email) {
  const result = await db.query(
    'SELECT * FROM users WHERE email = $1',
    [email]
  );
  return result.rows[0];
}

async function findByMobile(mobile) {
  const result = await db.query(
    'SELECT * FROM users WHERE mobile = $1',
    [mobile]
  );
  return result.rows[0];
}

async function createUser({ email, mobile, passwordHash }) {
  const result = await db.query(
    `INSERT INTO users (firstname, lastname, email, mobile, password_hash)
     VALUES ($1, $2, $3)
     RETURNING id, email, mobile, is_verified`,
    [email, mobile, passwordHash]
  );
  return result.rows[0];
}

async function markuserverifiedbyEmail(email) {
    await db.query(
      'UPDATE users SET is_verified = TRUE WHERE email = $1',   [email])
};

async function markuserverifiedbyMobile(mobile) {
    await db.query(
      'UPDATE users SET is_verified = TRUE WHERE mobile = $1',   [mobile])
}

module.exports = {
  findByEmail,
  findByMobile,
  createUser,
  markuserverifiedbyEmail,
  markuserverifiedbyMobile
};
