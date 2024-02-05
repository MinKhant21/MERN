const nodemailer =require('nodemailer');
module.exports = () => {
     nodemailer.createTransport({
          host: "sandbox.smtp.mailtrap.io",
          port: 2525,
          auth: {
            user: "73b11d27b4ad6a",
            pass: "93c2dbfbfc4878"
          }
        });
}