const index = (req, res) => {
  res.send("Elenco post")
}

const show = (req, res) => {
  const id = req.params.id
  res.send(`Dettaglio post ${id}`)
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
  const id = req.params.id
  res.send(`Elimino post ${id}`)
}

module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy

}