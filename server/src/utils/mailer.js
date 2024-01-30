import { TransactionalEmailsApi, SendSmtpEmail } from "@getbrevo/brevo"

class MAILCLIENT {

    sendSmtpEmail = null
    apiInstance = null

    constructor(sender) {

        this.sendSmtpEmail = new SendSmtpEmail()
        this.sendSmtpEmail.sender = sender
        
        this.apiInstance = new TransactionalEmailsApi()
        this.apiInstance.authentications['apiKey'].apiKey = process.env.BREVO_API_KEY
    }
    
    async send(htmlContent, to, subject) {
        
        this.sendSmtpEmail.htmlContent = htmlContent
        this.sendSmtpEmail.subject = subject
        this.sendSmtpEmail.to = to

        await this.apiInstance.sendTransacEmail(this.sendSmtpEmail)
    }
}

export default MAILCLIENT