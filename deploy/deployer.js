/**
	1) listen for "deploy" tag from github webhook
	2) pull dist directory  
	3) restart nginx 
*/

const express = require('express');
const shell = require('shelljs');
const cors = require('cors');

const app = express();

app.get('/deploy', async (req, res) => {
const f =	shell.exec('git checkout origin -- dist')
console.log(JSON.stringify(f, null, 2))
res.status(200).end()


})

app.listen(8080);
