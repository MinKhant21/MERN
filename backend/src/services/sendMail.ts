const nodemailer =require('nodemailer');


const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "kaungminkhant6889@gmail.com",
    pass: "bqydajoifbcozwbg",
  },
});
export const sendMail = ({to,name,message}:any) => {
     nodemailer.createTransport({
          host: "sandbox.smtp.mailtrap.io",
          port: 2525,
          auth: {
            user: "73b11d27b4ad6a",
            pass: "93c2dbfbfc4878"
          }
        });
        try {
          // const { to, name, message } = req.body;
        const mailOptions = {
          from: "kaungminkhant6889@gmail.com",
          to: to,
          subject: "Test Email",
          html: `<h1>Hello ${name}</h1><p>${message}</p>`,
        };
        console.log(mailOptions)
      
        transporter.sendMail(mailOptions, (error: any, info: any) => {
          if (error) {
            console.error(error);
            return error;
          } else {
            console.log("Email sent:", info.response);
            return "Email sent successfully";
          }
        });
        } catch (error) {
          console.error("Error parsing JSON:", error);
          // res.status(400).send("Invalid JSON payload");
        }
}