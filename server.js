const express = require('express');
const articleRouter = require('./routes/articles');
const app = express();

app.set('view engine', 'ejs');

app.use('/articles', articleRouter);

app.get('/', (req, res) => {
  const articles = [{
    title: "Test Articles",
    createdAt: new Date(),
    description: "Test Descriptions"
  },
  {
    title: "국민은행 뽑아주세요 ㅜㅜ",
    createdAt: new Date(),
    description: "내가 잘할게"
  },
]
  res.render('index', {articles: articles});
});
app.listen(5000);
