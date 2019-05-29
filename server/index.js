
const express = require('express');
const cors = require('cors');

const app = express();

//Middleware
app.use(cors());

const posts = require('./routes/api/post')
app.use('/api/posts', posts)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`SERVER STARTED ON PORT ${port}`));