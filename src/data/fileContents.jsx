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
      description: `As the name suggests it's a simple weather web app which allows users to search and view weather information by city or place name. It's a Full-Stack application featuring React-based frontend and a SpringBoot backend. The SpringBoot RESTful API acts as a middleware between WeatherAPI and React frontend. In addition a JWT (JSON Web Token) authentication is implemented to secure communication between client and server.`,
      features: [
        {
          feature: "Location Search",
          detail:
            "A dynamic input field that allows users to find weather data for any city globally.",
        },
        {
          feature: "Real-Time Statistics",
          detail:
            'Displaying essential variables like temperature, "feels like" conditions, humidity, and wind speed',
        },
        {
          feature: "Visual Context",
          detail:
            'Using icons (sun, clouds, rain) and dynamic backgrounds that change based on the weather or time of day to provide instant "mood" feedback.',
        },
        {
          feature: "Responsive Layout",
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
  },
};
