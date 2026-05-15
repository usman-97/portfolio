import React, { useState } from "react";
import CustomButton from "../CustomButton";
import CustomInputField from "./CustomInputField";
import CustomTextArea from "./CustomTextArea";
import emailjs from "@emailjs/browser";
import {
  EMAIL_SERVICE_ID,
  EMAIL_TEMPLATE_ID,
  EMAIL_PUBLIC_KEY,
} from "../../config/config.js";
import { useSystemContext } from "../../contexts/SystemContext.jsx";

const ContactForm = ({ setError }) => {
  const { changeStatus, showToast } = useSystemContext();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name === "") {
      showToast("git error: author is required", "error");
    } else if (email === "") {
      showToast("git error: email is required", "error");
    } else if (message === "") {
      showToast("git error: commit message is required", "error");
    } else {
      const currentDateTime = new Date().toLocaleString("en-gb", {
        weekday: "short",
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });

      const templateParams = {
        name: name,
        email: email,
        dateTime: currentDateTime,
        message: message,
      };

      try {
        changeStatus("committing...", true);
        await emailjs.send(
          EMAIL_SERVICE_ID,
          EMAIL_TEMPLATE_ID,
          templateParams,
          EMAIL_PUBLIC_KEY,
        );
        setName("");
        setEmail("");
        setMessage("");
        setTimeout(() => {
          changeStatus("ready");
          showToast("remote: message received successfully", "success");
        }, 3000);
      } catch (e) {
        changeStatus("error");
        showToast("error: connection to relay server timed out", "error");
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col space-y-5 w-full max-w-2xl"
    >
      <CustomInputField
        label="Author"
        inputId="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <CustomInputField
        label="Email"
        inputId="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <CustomTextArea
        label="Commit Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <div className="self-end">
        <CustomButton
          buttonType="submit"
          backgroundColour="bg-forest"
          colour="text-obsidian"
          label="Commit"
          border="border border-forest"
          customStyles="uppercase"
          customLabelStyles="text-xs !font-bold"
        />
      </div>
    </form>
  );
};

export default ContactForm;
