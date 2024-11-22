import nodemailer from "nodemailer";

export const createAccountEmail = async ({
  name,
  email,
}: {
  name: string;
  email: string;
}) => {
  // Create a SMTP transporter object
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "MessengerNext@gmail.com",
      // Email: MessengerNext@gmail.com
      // Password: NextMessenger123
      pass: "nlaxakmvrlhzzaln",
    },
  });
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: "MessengerNext@gmail.com",
    to: email,
    subject: "Next Messenger Account Created",
    text: `Welcome ${name}!`,
    html: `<p><b>Hello</b> ${name}! Welcome to Next Messenger! We're so glad to have you!</p>`,
  });

  console.log("### Email sent to: ", email, " ###");
};
