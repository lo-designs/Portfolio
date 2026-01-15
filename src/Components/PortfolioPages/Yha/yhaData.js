import yhaHero from "../../Images/Yha/hero.jpg";
import yhaMap from "../../Images/Yha/map.jpg";
import yhaGif from "../../Images/Yha/ym-bg.gif";
import yhaPrototype from "../../Images/Yha/mockups-figma.jpg";
import yhaResearch from "../../Images/Yha/resources.jpg";

const yhaData = {
  heroImage: yhaHero,
  title: "Health Resource App",
  projectType: "Self-defined project // UX UI",
  subtitle: "Researching and protoyping a health & wellness resource app.",
  overview: [
    "While at Prime, my team had the privilege of working with Yha Inc., a company building portable brain sensing tools to support the recovery of people struggling with Opioid Use Disorder [OUD]. Our task was to help determine the best way to integrate a portable electroencephalogram [EEG] into a standard therapy/clinical setting, as well as create a prototype for NeuromarkR™, an application that displays EEG measurements."
  ],
  tabs: [
    {
      label: "Initial Research",
      image: yhaMap,
      titleNumber: "Secondary Research // Informational Interviews",
      descriptionTitle: "01 Existing health & wellness resources for youth",
      paragraphs: [
        "In researching existing resources, I found that while there are a lot of them, many of are text heavy and hard to scan for important information; making it difficult to find help, especially if you don't know exactlywhat you need. I used YSN (Youth Services Network) as interviews with licensed social workers revealed it to be an effective (but outdated) resource."
      ]
    },
    {
      label: "Determining Features",
      image: yhaResearch,
      imageCaption: "[ Experience map: made in Sketch ]",
      titleNumber: "Proto-persona // Experience mapping // User flow",
      descriptionTitle: "02 Determining how to address health & wellness needs.",
      paragraphs: [
        "The interviews, research, and analysis of YSN helped me determine features for the app: easy to access contact info, scannable information, direct call and email links. Additionally, I wanted to implement a way to narrow down resources to find those that best fit the needs of the person using the app. I created a proto-persona, an experience map, auser flow, and wireframes using Sketch and Adobe XD."
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
