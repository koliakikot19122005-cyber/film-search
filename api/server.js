const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  console.log(req);
  res.send('Film search api server V1');
});
app.get('/api/films', (req, res) => {
  const { categories } = req.query;
  // const categories = req.query.categories;
  console.log(categories);
  res.send(`ok`);
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});