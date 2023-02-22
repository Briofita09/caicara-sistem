import nodemailer from "nodemailer";
import "dotenv/config";

const user = process.env.NODEMAILER_EMAIL;
const pass = process.env.NODEMAILER_PASS;

export default async function sendNewUserMail(newUser) {
  try {
    let transporter = nodemailer.createTransport({
      host: process.env.NODEMAILER_HOST,
      port: Number(process.env.NODEMAILER_PORT),
      auth: { user, pass },
    });

    return await transporter.sendMail({
      from: user,
      to: newUser.email,
      subject: "Cadastro no sistema Caiçara",
      text: `Olá ${newUser.name} seu cadastro foi concluído com sucesso no sistema. \nSeu login é: \n \nEmail:  ${newUser.email} \nSenha: ${newUser.password}`,
    });
  } catch (err) {
    console.log(err);
  }
}
