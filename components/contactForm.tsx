import Head from "next/head";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Container from "../components/container/container";
import Input from "../components/input/input";

const ContactForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    setError("");
    setSuccess("");
  }, [email, name, message]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (email.length < 4 || name.length < 4 || message.length < 4) {
      setError("Please fill out all fields");
      return;
    }
    try {
      const res = await fetch("/api/send-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, name, message }),
      });
      console.log(res);
      if (!res.ok) {
        setError(
          "Something went wrong when sending the request. Please send us an email instead."
        );
      } else {
        setSuccess(
          "Thanks for reaching out. We will get in touch as soon as possible."
        );
      }
    } catch (e) {
      setError(
        "Something went wrong when sending the request. Please send us an email instead."
      );
    }
  };

  return (
    <>
      <div>
        <Container>
          <div className="flex justify-center">
            {success ? (
              <div className="text-sm text-green-600 text-center">
                {success}
              </div>
            ) : (
              <form className="max-w-lg w-96">
                <div className="flex-row items-center">
                  <div className="pt-4">
                    <Input
                      label="Name"
                      placeholder="Enter your name"
                      onChange={(value) => setName(value)}
                    />
                  </div>
                  <div className="pt-4">
                    <Input
                      label="Email"
                      placeholder="Enter email"
                      onChange={(value) => setEmail(value)}
                    />
                  </div>
                  <div className="pt-4">
                    <Input
                      label="Message"
                      placeholder="Enter your message"
                      onChange={(value) => setMessage(value)}
                      textArea
                    />
                  </div>
                  <div className="flex justify-center">
                    <button
                      className="rounded bg-green-300 px-4 py-2 hover:shadow-md"
                      onClick={sendMessage}
                    >
                      Send
                    </button>
                  </div>
                  {error && (
                    <div className="text-sm text-red-600 text-center">
                      {error}
                    </div>
                  )}
                </div>
              </form>
            )}
          </div>
        </Container>
      </div>
    </>
  );
};

export default ContactForm;
