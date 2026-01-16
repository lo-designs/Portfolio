import phHero from "../../Images/PettesHounds/ph-hero.jpg";
import phHomeOg from "../../Images/PettesHounds/home-original.jpg";
import phHomeNew from "../../Images/PettesHounds/home-new.jpg";
import phLogo from "../../Images/PettesHounds/ph-logo.gif";
import phServiceOg from "../../Images/PettesHounds/services-og.png";
import phServiceNew from "../../Images/PettesHounds/services-new.jpg";

const phData = {
  heroImage: phHero,
  title: "Pette's Hounds",
  projectType: "Web Design // Pet Care Services",
  subtitle: "Dog walking & pet care services in Minneapolis",
  overview: [
    "I had the opportunity to work with the awesome founder of Pette's Hounds to redesign a website for the dog walking and pet care services they provide.",
    "Recently, the owner made the shift from pet care services to vinyl pressing ",
    <a href="https://outtawax.com" target="_blank" rel="noopener noreferrer" className="bold-link">Outta Wax</a>,
    ", which I also had the fortune of designing and creating.",
    " The Pette's Hounds site is no longer live, but you can see before + afters of the redesign below:"
  ],
  tabs: [
    {
      label: "Design Process",
      image: phHomeOg,
       imageCaption: "[ Original version of the homepage ]",
      titleNumber: "Redesign // Homepage (Before)",
      descriptionTitle: "Updating the site for better usability",
      paragraphs: [
        ""
      ]
    },
    {
      label: "Home Redesign",
      image: phHomeNew,
      imageCaption: "[ New homepage design ]",
      titleNumber: "Redesign // Homepage (After)",
      descriptionTitle: "Homepage redesign",
      paragraphs: [
        ""
      ]
    },
     {
      label: "Services Before",
      image: phServiceOg,
      imageCaption: "[ Original services page design ]",
      titleNumber: "Redesign // Services (Before)",
      descriptionTitle: "",
      paragraphs: [
        ""
      ]
    },
       {
      label: "Services After",
      image: phServiceNew,
      imageCaption: "[ New services page design ]",
      titleNumber: "Redesign // Services (After)",
      descriptionTitle: "",
      paragraphs: [
        ""
      ]
    },
    {
      label: "Summary",
      image: phLogo,
      imageCaption: "[ GIF that I made in Photoshop ]",
      titleNumber: "",
      descriptionTitle: "Summary",
      paragraphs: [
        ""
      ]
    }
  ]
};

export default phData;
