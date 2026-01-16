import soonaHero from "../../Images/Soona/hero.jpg";
import soonaGif from "../../Images/Soona/soona.gif";
import soonaMap from "../../Images/Soona/journey.png";
import soonaKano from "../../Images/Soona/kano.png";
import soonaProgressBar from "../../Images/Soona/progress-bar.png";
import mobileHero from "../../Images/Soona/hover.jpg";

const soonaData = {
  heroImage: soonaHero,
  mobileHeroImage: mobileHero,
  title: "Soona",
  projectType: "UX UI // 24-Hour Content Studio",
  subtitle: "Web app rapid prototyping & evaluation.",
  overview: [
    "Soona is a studio that produces professional photos and videos of products within 24 hours. Soona was started with the shared vision of making quality, custom content accessible to brands of all sizes."
  ],
  tabs: [
    {
      label: "Research & Discovery",
      image: soonaMap,
      imageCaption: "[ Experience map: made in Sketch ]",
      titleNumber: "Secondary Research // Comparative Audit // Journey Mapping",
      descriptionTitle: "01| 24 hour content studio services",
      paragraphs: [
        "The goals were to [1] make the booking & building a shoot process easy to follow, and [2] generate follow-through in ordering finalized photos and videos.  We met with Hayley [Soona co-founder] to get an overview of services Soona provides and did a comparative audit of the site and some of their competitors. I then did a step-by-step analysis of the site to create an experience map and some of their competitors. I then did a step-by-step analysis of the site to create an experience map."
      ]
    },
    {
      label: "Rapid Prototyping & Kano Analysis",
      image: soonaKano,
      imageCaption: "[ Kano analysis mapping]",
      titleNumber: "Rapid Prototyping // Development Scope // Kano Analysis",
      descriptionTitle: "02 | Deveopment scope",
      paragraphs: [
        "Wireframes were placed in InVision for Soona's developer to estimate how much time was needed for each feature. Wireframes were then narrowed down to 10 (out of ≈100) through voting. Soona customers and staff completed a survey with the 10 features to determine which bestfit their needs. Those were then analyzed based on the Kano model: performance, must-have, attraction and indifference."
      ]
    },
    
    {
      label: "Feature Proposal",
      image: soonaProgressBar,
      imageCaption: "[ Progress bar concept ]",
      titleNumber: "Feature Proposal // Annotated Wireframes",
      descriptionTitle: "03 | Feature priorization & annotated presentation",
      paragraphs: [
        "I created annotated wireframes of the four features that ranked highest in the Kano analysis for the feature proposal. These features were also required to fit within the developer’s time budget of 40 hours."
      ]
    },
    {
      label: "Summary",
      image: soonaGif,
      titleNumber: "Summary",
      descriptionTitle: "Creating an easy booking experience",
      paragraphs: [
        "Simple features were suggested to make the booking & building a shoot process easy to follow. These features included: a progress bar, quick view options, awork-in-progress pop-up message, and a style guide."
      ]
    }
  ]
};

export default soonaData;
