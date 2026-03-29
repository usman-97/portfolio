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
      text: "contact --fetch --all",
      type: "COMMAND",
    },
    {
      tag: "[INFO]",
      text: "Initializing SMTP_REACH_PROTOCOL...",
      type: "PROCESS",
    },
    {
      tag: "[PROCESS]",
      text: "Searching for route to @usman-port...",
      type: "PROCESS",
    },
    {
      tag: "[SUCCESS]",
      text: "200 OK: Mail-Server found.",
      type: "PROCESS",
    },
    { content: "", type: "BODY" },
    {
      tag: "[STATUS]",
      text: "Listening for incoming pings on port 8080...",
      type: "PROCESS",
    },
    {
      tag: "[READY]",
      text: "System idle. Click a link to execute.",
      type: "PROCESS",
    },
    {
      type: "COMMAND",
      active: true,
    },
  ],
};
