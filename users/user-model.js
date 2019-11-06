const db = require('../data/db-config')

module.exports = {
  // getAll,
  // getById,
  getPosts
};

function getPosts(userId) {
  return db('posts as p')
    .join('users as u', 'u.id', 'p.user_id')
    .select('p.id', 'u.username', 'p.contents')
    .where({ 'u.id': userId });
}
