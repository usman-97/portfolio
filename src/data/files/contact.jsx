import { ContactBody } from "../../constants/TerminalProcessBody";
import { IoSend } from "react-icons/io5";

export const contactContent = {
  content: `/* Status: Open for collaborations */
.engineer-contact {
    email: "usmanshabir65@hotmail.com",
    linkedIn: "usman-shabir-kousar",
    gitHub: "usman-97"
}`,
  contactLinks: {
    linkedIn: "https://www.linkedin.com/in/usman-shabir-kousar/",
    gitHub: "https://github.com/usman-97",
  },
};

export const terminalContactContent = {
  logs: [
    {
      text: "contact --init-form --force",
      type: "COMMAND",
    },
    {
      tag: "[SUCCESS]",
      text: "200 OK: Mail-Server found.",
      type: "PROCESS",
    },
    {
      tag: "[IO]",
      text: "Awaiting user input stream...",
      status: "[STDIN]",
      type: "PROCESS",
    },
    { component: ContactBody, type: "BODY" },
    {
      tag: "[SUCCESS]",
      text: "Your message has been sent to Usman's inbox.",
      component: IoSend,
      type: "PROCESS",
    },
    {
      type: "COMMAND",
      active: true,
    },
  ],
};
