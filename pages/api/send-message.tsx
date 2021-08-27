import nodemailer from 'nodemailer'

console.log(process.env.GMAIL_EMAIL,process.env.GMAIL_PASSWORD,)

const transporter = nodemailer.createTransport({
  port: 465,
  host: "smtp.gmail.com",
  auth: {
    user: process.env.GMAIL_EMAIL,
    pass: process.env.GMAIL_PASSWORD,
  },
  secure: true,
})

const sendMessage = async (req, res) => {
  const { email, name, message } = req.body

  const mailData = {
    from: process.env.GMAIL_EMAIL,
    to: 'luisp@eunet.no',
    subject: `Message to Strahl Capital From ${name}`,
    text: message + " | Sent from: " + email,
    html: `<div>${message}</div><p>Sent from:
    ${email}</p>`
  }
  try {
    await sendEmail(mailData)
    return res.status(200).send()
  } catch (e) {
    console.error(e)
    return res.status(500).send()
  }
}

const sendEmail = async(mailData) => {
  return new Promise((resolve, reject) => {
    return transporter.sendMail(mailData, (err, info) => {
      if(err)
        return reject(err)
      else
        return resolve(info)
    })
  })
}

export default sendMessage