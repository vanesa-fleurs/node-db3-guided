const db = require('../data/db-config')

module.exports = {
  // getAll,
  // getById,
  getPosts,
  update,
};

function getPosts(userId) {
  return db('posts as p')
    .join('users as u', 'u.id', 'p.user_id')
    .select('p.id', 'u.username', 'p.contents')
    .where({ 'u.id': userId });
}

// function update(changes, id) {
//   return db('users')
//     .where({ id })
//     .update(changes)
//     .then(count => {
//       return getById(id)
//     })
// }
