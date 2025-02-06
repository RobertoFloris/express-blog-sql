const express = require('express');

const checkTime = require('./middlewares/checkTime');
const errorsHandler = require('./middlewares/errorsHandler');
const notFound = require('./middlewares/notFound');
const sanitizeData = require('./middlewares/sanitizeData');

const postsRouter = require('./routes/post')

const app = express();

const port = 3000;

app.use(express.static('public'));

app.use(express.json());

app.use(sanitizeData);
app.use(checkTime);

app.get('/', (req, res) => {
  res.send("Server dei post")
})

app.use('/posts', postsRouter)

app.use(errorsHandler);
app.use(notFound);

app.listen(port, () => {
  console.log(`Sono in ascolto alla porta ${port}`);
})