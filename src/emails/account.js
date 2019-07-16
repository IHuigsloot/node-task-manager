const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'i.huigsloot@ziggo.nl',
        subject: 'Thanks for joining us!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelMail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'i.huigsloot@ziggo.nl',
        subject: 'Goodbye',
        text: `Your account has been deleted, ${name}. We hoped you liked our service and hope to see you again..`
    })
}



module.exports = {
    sendWelcomeEmail,
    sendCancelMail
}