import { createTestAccount, createTransport, getTestMessageUrl } from "nodemailer";

const createMailerTransporter = async () => {

    const testAccount = await createTestAccount();

    const transporter = createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
            user: testAccount.user,
            pass: testAccount.pass
        }
    });

    return transporter;
};

export { createMailerTransporter, getTestMessageUrl };