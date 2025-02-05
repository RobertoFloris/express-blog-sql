const connection = require('../data/db')

const index = (req, res) => {
  const sql = 'SELECT * FROM posts'
  connection.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Query errata" })
    }
    res.json(results)
  })
}

const show = (req, res) => {
  const id = req.params.id;
  const sql =
    ` 
  SELECT posts.*, tags.id AS tags_id, tags.label AS tags_label
  FROM posts
  JOIN post_tag ON post_tag.post_id = posts.id
  JOIN tags ON post_tag.tag_id = tags.id
  WHERE posts.id = ?
  `;

  connection.query(sql, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Query errata" })
    }

    if (results.length === 0) {
      return res.status(404).json({ error: 'Post non trovato' });
    }

    const post = {
      id: results[0].id,
      title: results[0].title,
      image: results[0].image,
      tags: []
    }

    results.forEach(item => {
      post.tags.push({
        id: item.tags_id,
        name: item.tags_label
      })
    })

    res.json(post)

  })

}

const store = (req, res) => {
  res.send("Post aggiunto")
}

const update = (req, res) => {
  const id = req.params.id
  res.send(`Modifico post ${id}`)
}

const modify = (req, res) => {
  const id = req.params.id
  res.send(`Modifico post ${id}`)
}

const destroy = (req, res) => {
  const id = req.params.id;
  const sql = 'DELETE FROM posts WHERE id = ?';
  connection.query(sql, [id], (err) => {
    if (err) {
      return res.status(500).json({ error: "Query errata" })
    }
    res.sendStatus(204);
  })
}

module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy

}