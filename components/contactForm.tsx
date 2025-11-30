import React, { useEffect, useState } from "react";
import Input from "./input/input";

const ContactForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setError("");
    setSuccess("");
  }, [email, name, message]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email.length < 4 || name.length < 4 || message.length < 4) {
      setError("Please fill out all fields");
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("/api/send-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, name, message }),
      });

      if (!res.ok) {
        setError(
          "Something went wrong when sending the request. Please send an email to Luis instead: luisp@eunet.no"
        );
      } else {
        setSuccess(
          "Thanks for reaching out. We will get in touch as soon as possible."
        );
      }
    } catch (e) {
      setError(
        "Something went wrong when sending the request. Please send an email to Luis instead: luisp@eunet.no"
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (success) {
    return (
      <div className="w-full max-w-md mx-auto">
        <div className="bg-primary-50 border border-primary-200 rounded-2xl p-6 text-center">
          <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-6 h-6 text-primary-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <p className="text-primary-800 font-medium">{success}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={sendMessage} className="space-y-5">
        <Input
          label="Name"
          placeholder="Your name"
          onChange={(value) => setName(value)}
        />
        <Input
          label="Email"
          placeholder="your@email.com"
          onChange={(value) => setEmail(value)}
        />
        <Input
          label="Message"
          placeholder="How can we help you?"
          onChange={(value) => setMessage(value)}
          textArea
        />

        <button
          type="submit"
          disabled={isLoading}
          className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Sending...
            </span>
          ) : (
            "Send Message"
          )}
        </button>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4">
            <p className="text-sm text-red-600 text-center">{error}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
