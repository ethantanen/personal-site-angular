//Install express server
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

const { sendEmail } = require("./email");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve only the static files form the dist directory
app.use(express.static(__dirname + "/dist/personal-website"));

app.post("/email", async (req, res) => {
  const { email, name, msg } = req.body;
  const didSend = await sendEmail({ email, name, msg });

  if (didSend) {
    res.status(200).send();
  } else {
    res.status(400).json({ msg: "unable to send email" });
  }
});

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/personal-website/index.html"));
});

app.listen(process.env.PORT || 8080);
