import nodemailer from "nodemailer";

export default function contact(req: { body: any }, res: any) {
    const mailConfig = {
      host: "smtp-relay.sendinblue.com",
      port: 587, 
      auth: {
        user: process.env.NEXT_PUBLIC_SENDINBLUE_USER,
        pass: process.env.NEXT_PUBLIC_SENDINBLUE_KEY,
      },
    };
  let transporter = nodemailer.createTransport(mailConfig);
  const mailData = {
    from: req.body.email,
    to: "rockakshatrock@gmail.com",
    subject: req.body.subject + " - " + req.body.name,
    text: req.body.message,
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
