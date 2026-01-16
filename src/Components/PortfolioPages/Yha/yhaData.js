import yhaHero from "../../Images/Yha/hero.jpg";
import yhaMap from "../../Images/Yha/map.jpg";
import yhaPrototype from "../../Images/Yha/mockups-figma.jpg";
import yhaGif from "../../Images/Yha/ym-bg.gif";

const yhaData = {
  heroImage: yhaHero,
  title: "Health Resource App",
  projectType: "UX UI // Health & Wellness Capstone Project",
  subtitle: "Researching and protoyping a health & wellness resource app.",
  overview: [
    "After an internship at The Bridge for Youth, a nonprofit in Minneapolis that provides shelter and necessities for displaced youth, I wanted to design a mobile app for youth in crisis to find and connect with support specific to their needs."
  ],
  tabs: [
    {
      label: "Initial Research",
      titleNumber: "Secondary Research // Informational Interviews",
      descriptionTitle: "01 Existing health & wellness resources for youth",
      paragraphs: [
        "The challenge was to learn about the resources for youth that currently exist to find areas of opportunity, and from there determine a way to make these resources easy to find and access. In my research, I found that many resources were outdated or you had to dig to find important information; making them overall difficult or inaccessible. Interviews with licensed social workers revealed that YSN (Youth Services Network) was an effective (but outdated) resourcem so I decided to use that as a starting point."
      ]
    },
    {
      label: "Determining Features",
      image: yhaMap,
      imageCaption: "[ Experience map: made in Sketch ]",
      titleNumber: "Proto-persona // Experience mapping // User flow",
      descriptionTitle: "02 Determining how to address health & wellness needs.",
      paragraphs: [
        "The interviews, research, and analysis of YSN helped me determine features for the app: easy to access contact info, scannable information, direct call and email links. Additionally, I wanted to implement a way to narrow down resources to find those that best fit the needs of the person using the app. I created a proto-persona, an experience map, a user flow, and wireframes using Sketch and Adobe XD."
      ]
    },
       {
      label: "Prototyping",
      image: yhaPrototype,
      imageCaption: "[ Experience map: made in Sketch ]",
      titleNumber: "Prototype // Feature Presentation",
      descriptionTitle: "03 Accessible resources & customization.",
      paragraphs: [
        "In addition to easy access hotlines and contact info, the option to create an account to customize needs and preferences would allow users to save important information and access it easily when needed."
      ]
    },
    {
      label: "Summary",
      image: yhaGif,
      imageCaption: "[ GIF made in Photoshop ]",
      titleNumber: "Summary",
      descriptionTitle: "Building on existing resources.",
      paragraphs: [
      "My overall goal was to design an app for youth seeking help and support connect with resources specific to their needs. I gained some valuable insights in my research and it is something that I would love to build upon in the future."
      ]
    }
  ]
};

export default yhaData;
