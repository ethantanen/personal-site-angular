const AWS = require("aws-sdk");

AWS.config.update({ region: "us-east-1" });

const ses = new AWS.SES();

const getEmailParams = ({ email, name, msg }) => ({
  Destination: {
    ToAddresses: ["ethantanen.website@gmail.com"],
  },
  Message: {
    Body: {
      Html: {
        Charset: "UTF-8",
        Data: JSON.stringify({ email, name, msg }, null, 2),
      },
    },
    Subject: {
      Charset: "UTF-8",
      Data: "Email from your website!",
    },
  },

  Source: "ethantanen.website@gmail.com",
});

const sendEmail = async ({ name, email, msg }) => {
  const params = getEmailParams({ name, email, msg });
  try {
    await ses.sendEmail(params).promise();
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

module.exports = { sendEmail };
