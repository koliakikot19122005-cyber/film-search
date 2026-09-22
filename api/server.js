const Film=require('./models/film.js')
const cors = require('cors')
const express = require('express');
const app = express();
const port = 3001;

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/film-search');



const corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200  // некоторые устаревшие браузеры (IE11, различные SmartTV) выдают ошибку на коде 204 
}
app.use(cors(corsOptions))
app.use(express.json());

app.get('/', (req, res) => {
  console.log(req);
  res.send('Film search api server V1');
});

app.get('/api/films', async(req, res) => {
  const { categories } = req.query;
  // const categories = req.query.categories;
  const films=await Film.find()
  console.log(categories);
  res.send({films,ok:true});
});

app.post('/api/film', (req, res) => {
  try {
    console.log(req.body)
    const film = new Film(req.body)
    film.save().then(() => res.send(`ok`));
  } catch (error) {
    res.send('error')
  }
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});