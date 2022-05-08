import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../adapters/mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "f4f470b01d51ee",
      pass: "7c2d784592a410"
    }
  });


export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    to: 'Renato Lima <renato_f_lima6@hotmail.com>',
    subject,
    html: body,


});
    };
    
}