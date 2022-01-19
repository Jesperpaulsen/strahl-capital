import axios from "axios";

const doRequest = async (email?: any) => {
  const url = "https://api.mailersend.com/v1/email";
  const token = process.env.MAILERSEND_TOKEN;
  if (!token) throw new Error("No MailerSend key provided");
  const res = await axios.post(url, JSON.stringify(email), {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return res.data;
};

const sendMessage = async (req, res) => {
  const { email: emailAdress, name, message } = req.body;
  const email = {
    from: {
      email: "jesper@jesper.no",
      name: `Strahl Capital | ${emailAdress}`,
    },
    to: [
      {
        email: "luisp@eunet.no",
      },
    ],
    subject: `Message to Strahl Capital From ${name}`,
    text: `The following was sent from ${name}, email: ${emailAdress}.\n---------------------------\n${message}`,
  };

  try {
    await doRequest(email);
    return res.status(200).send();
  } catch (e) {
    console.error(e);
    return res.status(500).send();
  }
};

export default sendMessage;
