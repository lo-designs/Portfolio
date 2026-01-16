import phHero from "../../Images/PettesHounds/ph-hero.jpg";
import phHomeOg from "../../Images/PettesHounds/home-original.jpg";
import phHomeNew from "../../Images/PettesHounds/home-new.jpg";
import phLogo from "../../Images/PettesHounds/ph-logo.gif";
import phServiceOg from "../../Images/PettesHounds/services-og.png";
import phServiceNew from "../../Images/PettesHounds/services-new.jpg";
import mobileHero from "../../Images/PettesHounds/hover.jpg";

const phData = {
  heroImage: phHero,
  mobileHeroImage: mobileHero,
  title: "Pettes Hounds",
  projectType: "Web Design // Pet Care Services",
  subtitle: "Website design & development for Minneapolis pet care services",
  overview: [
    "I had the opportunity to work with Pette's Hounds to redesign a website for the dog walking and pet care services they provided.",
    " Around the pandemic, the founder made the shift from pet care services to vinyl pressing ",
    <a
      href="https://lauragunther.design/outtawax/"
      target="_blank"
      rel="noopener noreferrer"
      className="bold-link"
    >
      Outta Wax
    </a>,

    ". Although the site is no longer live, youcan see before + afters of the redesign in the case study below.",
  ],
  tabs: [
    {
      label: "Design Process",
      image: phHomeOg,
      imageCaption: "[ Wireframes and design board ]",
      titleNumber: "Wireframing // Design Board",
      descriptionTitle: "Updating the look and feel",
      paragraphs: [
        "The Pette's Hounds site had all of the content and information in place, the goal was just to update the design and improve the user experience. And add pictures - because who doesn't want more pictures of pets?",
      ],
    },
    {
      label: "Redesign",
      image: phHomeNew,
      imageCaption: "[ Redesigned home page ]",
      titleNumber: "Redesign // Home Page",
      descriptionTitle: "Easier navigation and easy to read information",
      paragraphs: [
        "The Pette's Hounds home page was redesigned to improve navigation and readability, making it easier for users to find the information they need.",
      ],
    },
     {
      label: "Services Before",
      image: phServiceOg,
      imageCaption: "[ Original services page ]",
      titleNumber: "Original design // Services Page",
      descriptionTitle: "", 
      paragraphs: [
        "All service offerings on the orginal site weren't easily discernible, making it difficult to find specific information quickly.",
      ],
    },
         {
      label: "Services After",
      image: phServiceNew,
      imageCaption: "[ Redesigned services page ]",
      titleNumber: "Redesign // Services Page",
      descriptionTitle: "Optimized layout for provided services",
      paragraphs: [
        "The redesigned services page improved the layout to clearly showcase the different pet care services offered, making it easier for users to understand and choose the right service for their needs.",
      ],
    },
  ],
};

export default phData;
