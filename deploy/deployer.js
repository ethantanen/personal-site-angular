/**
	1) listen for "deploy" tag from github webhook
	2) pull dist directory
	3) restart nginx
*/

const express = require("express");
const bodyParser = require("body-parser");
const shell = require("shelljs");
const cors = require("cors");

const DEPLOY_BRANCH = "master";

const app = express();

app.use(bodyParser.json());
app.post("/", async (req, res) => {
  const {
    action,
    pull_request: {
      base: { ref: baseBranchName },
      merged,
    },
  } = req.body;

  if (merged && baseBranchName === DEPLOY_BRANCH) {
    console.log("DEPLOY ME!!!!");
  }
  res.status(200).end();
});

app.listen(8080);
