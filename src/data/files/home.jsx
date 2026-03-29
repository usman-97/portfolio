import { HomeBody } from "../../constants/TerminalProcessBody";

export const homeContent = `const dev = {
  name: "ANIMATE_NAME",
  role: "Software Engineer",
  status: "Open for Opportunities",
  location: "Manchester, UK",
}

// Hello! Click a project in the sidebar to explore my work.`;

export const terminalHomeContent = {
  logs: [
    {
      text: "run Home.jsx",
      type: "COMMAND",
    },
    {
      tag: "[PROCESS]",
      text: "Fetching {path} from remote origin...",
      status: "[SUCCESS]",
      type: "PROCESS",
    },
    { component: HomeBody, type: "BODY" },
    {
      tag: "[SYNC]",
      text: "Local state synchronized with Emerald-Cloud-Database.",
      type: "PROCESS",
    },
    {
      tag: "[LINK]",
      text: "Connection: Established. Listening for user interrupts...",
      type: "PROCESS",
    },
    {
      active: true,
      type: "COMMAND",
    },
  ],
};
