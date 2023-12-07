const nodemailer = require("nodemailer");
require("dotenv").config();

const Verifiedmail = async (email, text) => {
  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      post: 465,
      secure: false,
      auth: {
        user: "satyampandit021@gmail.com",
        pass: "hytl odqt duji wwjg",
        // elil yxzt dlyg ocbk
      },
    });
    // send email
    let info = await transporter.sendMail({
      from: process.env.User,
      to: email,
      subject: "Account Verification",
      text: ` New Message : name:${text.name} email:${text.email} phone:${text.phone} message:${text.message} `,
    });
    console.log("message sent successfully!");
  } catch (error) {
    console.log("Not sent mail!");
    console.log(error);
  }
};
module.exports = { Verifiedmail };
