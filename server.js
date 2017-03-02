const express = require('express');
const router = express.Router();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const jsonParser = bodyParser.json();
const app = express();
// log the http layer
app.use(morgan('common'));

const blogPostsRouter = require('./blogPostsRouter');

// create blogpost example
BlogPosts.create('Example', 'This is an example post.', 'adabotcon', '11/21');
BlogPosts.create('Example 2', 'This is an example post v2.', 'adabotcon', '11/22');

// get posts

app.use('/blog-posts', blogPostsRouter)

app.listen(process.env.PORT || 8080, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});