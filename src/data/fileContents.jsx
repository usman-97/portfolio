import { contactContent, terminalContactContent } from "./files/contact";
import { homeContent, terminalHomeContent } from "./files/home";

export const fileContents = {
  "Home.jsx": {
    name: "Home.jsx",
    language: "javascript",
    content: homeContent,
    terminalContent: terminalHomeContent,
  },
  "contact.css": {
    name: "Contact.jsx",
    language: "css",
    content: contactContent,
    terminalContent: terminalContactContent,
  },
};
