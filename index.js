const express = require('express');
const app = express();

app.get('/', (_, res) => res.status(200).end('Hello World!'));
app.get('/:name', (req, res) => res.status(200).end('Hello '+req.params.name+'!'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Application listening at:', PORT);
});
