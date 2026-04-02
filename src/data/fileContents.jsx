import { contactContent, terminalContactContent } from "./files/contact";
import { homeContent, terminalHomeContent } from "./files/home";
import simpleWeatherApp from "../assets/images/projects/simple-weather-app.png";

export const fileContents = {
  "Home.jsx": {
    name: "Home.jsx",
    language: "javascript",
    content: homeContent,
    terminalContent: terminalHomeContent,
  },
  "contact.css": {
    name: "contact.jsx",
    language: "css",
    content: contactContent,
    terminalContent: terminalContactContent,
  },
  projects: {
    P1000: {
      name: "Simple Weather App",
      language: "markdown",
      image: simpleWeatherApp,
      demoLink: "https://simple-weather-app-ashy-six.vercel.app/",
      sourceLink: "https://github.com/usman-97/simple-weather-app",
      techStack: [
        { area: "Frontend", tech: ["React", "HTML", "CSS", "TailwindCSS"] },
        { area: "Backend", tech: ["Java", "SpringBoot"] },
        { area: "Database", tech: ["mysql"] },
        { area: "deployment", tech: ["Vercel", "Render"] },
      ],
      description: `As the name suggests it's a simple weather web app which allows users to search and view weather information by city or place name. It's a Full-Stack application featuring React-based frontend and a SpringBoot backend. The SpringBoot RESTful API acts as a middleware between WeatherAPI and React frontend. In addition a JWT (JSON Web Token) authentication is implemented to secure communication between client and server.`,
      features: [
        {
          point: "Location Search",
          detail:
            "A dynamic input field that allows users to find weather data for any city globally.",
        },
        {
          point: "Real-Time Statistics",
          detail:
            'Displaying essential variables like temperature, "feels like" conditions, humidity, and wind speed',
        },
        {
          point: "Visual Context",
          detail:
            'Using icons (sun, clouds, rain) and dynamic backgrounds that change based on the weather or time of day to provide instant "mood" feedback.',
        },
        {
          point: "Responsive Layout",
          detail:
            "Ensuring the data is just as readable on a small mobile screen as it is on a desktop monitor",
        },
      ],
      challenge: `Donec finibus vitae purus a vestibulum. Integer et euismod metus.
              Suspendisse scelerisque feugiat est. Orci varius natoque penatibus
              et magnis dis parturient montes, nascetur ridiculus mus. Nullam id
              lectus leo. Mauris tristique metus tortor, eget rutrum ante
              rhoncus vel. Sed fringilla arcu velit, ut sagittis neque efficitur
              et. Duis a ultricies augue, ac suscipit quam. Donec id odio eget
              odio tincidunt bibendum. Quisque scelerisque magna at felis
              blandit, in lacinia dui auctor.`,
      solution: `Donec finibus vitae purus a vestibulum. Integer et euismod metus.
              Suspendisse scelerisque feugiat est. Orci varius natoque penatibus
              et magnis dis parturient montes, nascetur ridiculus mus. Nullam id
              lectus leo. Mauris tristique metus tortor, eget rutrum ante
              rhoncus vel. Sed fringilla arcu velit, ut sagittis neque efficitur
              et. Duis a ultricies augue, ac suscipit quam. Donec id odio eget
              odio tincidunt bibendum. Quisque scelerisque magna at felis
              blandit, in lacinia dui auctor.`,
    },
    hideTerminal: true,
    colourPool: [
      {
        name: "emerald",
        bg: "bg-emerald-500/10",
        text: "text-emerald-400",
        border: "border-emerald-500/30",
        pulse: "bg-emerald-500 shadow-[0_0_8px_#10b981]",
      },
      {
        name: "blue",
        bg: "bg-blue-500/10",
        text: "text-blue-400",
        border: "border-blue-500/30",
        pulse: "bg-blue-500 shadow-[0_0_8px_#3b82f6]",
      },
      {
        name: "purple",
        bg: "bg-purple-500/10",
        text: "text-purple-400",
        border: "border-purple-500/30",
        pulse: "bg-purple-500 shadow-[0_0_8px_#a855f7]",
      },
      {
        name: "amber",
        bg: "bg-amber-500/10",
        text: "text-amber-400",
        border: "border-amber-500/30",
        pulse: "bg-amber-500 shadow-[0_0_8px_#f59e0b]",
      },
      {
        name: "rose",
        bg: "bg-rose-500/10",
        text: "text-rose-400",
        border: "border-rose-500/30",
        pulse: "bg-rose-500 shadow-[0_0_8px_#f43f5e]",
      },
      {
        name: "cyan",
        bg: "bg-cyan-500/10",
        text: "text-cyan-400",
        border: "border-cyan-500/30",
        pulse: "bg-cyan-500 shadow-[0_0_8px_#06b6d4]",
      },
      {
        name: "indigo",
        bg: "bg-indigo-500/10",
        text: "text-indigo-400",
        border: "border-indigo-500/30",
        pulse: "bg-indigo-500 shadow-[0_0_8px_#6366f1]",
      },
      {
        name: "orange",
        bg: "bg-orange-500/10",
        text: "text-orange-400",
        border: "border-orange-500/30",
        pulse: "bg-orange-500 shadow-[0_0_8px_#f97316]",
      },
    ],
  },
};
