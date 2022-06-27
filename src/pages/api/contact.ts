import nodemailer from "nodemailer";

export default function contact(req: { body: any }, res: any) {
  // console.log(req.body)
  var mailConfig;
  if (process.env.NODE_ENV !== "development") {
    mailConfig = {
      // @ts-ignore
      pool: true,
      host: "smtp-mail.outlook.com", // hostname
      secureConnection: false, // TLS requires secureConnection to be false
      port: 587, // port for secure SMTP
      tls: {
        ciphers: "SSLv3",
      },
      auth: {
        user: "akshatgaur69@outlook.com",
        pass: "Iamakshat@01",
      },
    };
  } else {
    mailConfig = {
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: "deven.shanahan64@ethereal.email",
        pass: "UA8WgBVZMeCzDvAyGG",
      },
    };
  }
  let transporter = nodemailer.createTransport(mailConfig);
  const mailData = {
    from: mailConfig.auth.user,
    to: mailConfig.auth.user,
    subject: "New Message from " + req.body.name,
    html: `<p>Name: ${req.body.name}</p> <p>Email: ${req.body.email}</p> <p>Message: ${req.body.message}</p>`,
  };
  transporter.sendMail(mailData, (err, info) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error sending email");
    } else {
      console.log(info);
      res.status(200).send("Email sent");
    }
  });
}
