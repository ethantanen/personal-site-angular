const express = require("express");
const bodyParser = require("body-parser");
const shell = require("shelljs");
const cors = require("cors");
const { execSync } = require('child_process');

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
    console.log(`Deploying changes from ${baseBranchName}...`);
    const stdout = execSync('sh deploy.sh');
    console.log(stdout.toString('utf8'))
    console.log('Finished Deploying!\n')
  }
  res.status(200).end();
});

app.listen(8081, () => console.log('listening on 8081'));
