import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
});

export async function sendOTP(to, code) {
  await transporter.sendMail({
    from: `"Support" <${process.env.MAIL_USER}>`,
    to,
    subject: 'Réinitialisation du mot de passe - Code OTP',
    html: `<p>Voici votre code de vérification : <strong>${code}</strong><br>Ce code expire dans 5 minutes.</p>`
  });
}
