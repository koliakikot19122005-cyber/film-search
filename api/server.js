const cors= require('cors')
const express = require('express');
const app = express();
const port = 3001;

const corsOptions  =  { 
  origin : 'http://localhost:5173' , 
  optionsSuccessStatus : 200  // некоторые устаревшие браузеры (IE11, различные SmartTV) выдают ошибку на коде 204 
}
app.use(cors(corsOptions))
app.use(express.json());

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
app.post('/api/film',(req,res)=>{
  console.log(req.body)
  res.send(`ok`)
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});