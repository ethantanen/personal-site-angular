/**
	1) listen for "deploy" tag from github webhook
	2) pull dist directory
	3) restart nginx
*/

const express = require('express');
const bodyParser = require('body-parser')
const shell = require('shelljs');
const cors = require('cors');

const app = express();

app.use(bodyParser.json())
app.post('/', async (req, res) => {
  // const f = shell.exec('git checkout origin/develop -- dist')
  console.log(JSON.stringify(req.body, null, 2))
  res.status(200).end()


})

app.listen(8080);
