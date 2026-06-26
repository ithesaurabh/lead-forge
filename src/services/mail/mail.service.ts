import nodemailer from "nodemailer";
import smtpConfig from "../../config/smtp.js";
import utils from "./mail.util.js";

const transporter = nodemailer.createTransport({
  host: smtpConfig.SMTP_HOST,
  port: parseInt(smtpConfig.SMTP_PORT),
  secure: false,
});

type MailOptions = {
  to: string;
  toAdmin: boolean;
  subject: string;
  html?: string;
  text?: string;
  template: string;
  variables: Record<string, string>;
};

export const sendMail = async (options: MailOptions) => {
  const template = utils.loadTemplate(options.template);

  const html = utils.replaceTemplateVars(template, options.variables);

  return transporter.sendMail({
    from: smtpConfig.SMTP_FROM_EMAIL,
    to: options.to,
    subject: options.subject,
    html,
  });
}
