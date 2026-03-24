import { contactContent, terminalContactContent } from "./files/contact";
import { homeContent, terminalHomeContent } from "./files/home";
import { terminalLogs } from "./files/terminal";

export const fileContents = {
    'Home.jsx': {
        name: 'Home.jsx',
        language: 'javascript',
        content: homeContent,
        terminalContent: terminalHomeContent
    },
    'Contact.css': {
        name: 'Contact.jsx',
        language: 'css',
        content: contactContent,
        terminalContent: terminalContactContent
    },
    'terminalLogs': terminalLogs
}