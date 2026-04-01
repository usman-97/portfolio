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
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec molestie risus. Nunc sed nisl aliquam, volutpat est in, pretium tellus. Aenean ac blandit lorem. Aenean tincidunt elementum odio in porta. Donec et fringilla purus, vitae cursus tortor. Vestibulum convallis ligula tellus, in ullamcorper sapien ullamcorper eget. Duis vestibulum eleifend enim non blandit. Nunc dignissim aliquam tempus. In ac urna hendrerit, ornare mi quis, feugiat risus. Nulla porttitor lacus non augue lobortis bibendum at rutrum diam. Interdum et malesuada fames ac ante ipsum primis in faucibus.`,
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
