import phHero from "../../Images/PettesHounds/ph-hero.jpg";
import phHomeOg from "../../Images/PettesHounds/home-original.jpg";
import phHomeNew from "../../Images/PettesHounds/home-new.jpg";
// import phServicesOg from "../../Images/PettesHounds/services-original.jpg";
// import phServicesNew from "../../Images/PettesHounds/services-new.jpg";
import phLogo from "../../Images/PettesHounds/ph-logo.gif";

const phData = {
  heroImage: phHero,
  title: "Pettes Hounds",
  projectType: "Pet Care Services // Web Design",
  subtitle: "Dog walking & pet care services in Minneapolis.",
  overview: [
    "I had the opportunity to work with the awesome founder of Pette's Hounds to redesign a website for the dog walking and pet care services they provide.",
    "Recently, the owner made the shift from pet care services to vinyl pressing ",
    "[Outta Wax]",
    ", which I also had the fortune of designing and creating.",
    "The Pette's Hounds site is no longer live, but you can see before + afters of the redesign below:"
  ],
  tabs: [
    {
      label: "Design Process",
      image: phHomeOg,
      titleNumber: "Secondary Research // Practitioner Interviews",
      descriptionTitle: "01 Patient + practitioner sessions.",
      paragraphs: [
        "We conducted secondary research to learn about the current landscape for addiction healthcare. To get an idea of what sessions are generally like in clinical and therapy settings, we spoke with 9 practitioners in various healthcare roles."
      ]
    },
    {
      label: "Before & After",
      image: phHomeNew,
      imageCaption: "[ Experience map: made in Sketch ]",
      titleNumber: "Usability Testing // Experience Mapping",
      descriptionTitle: "02 Portable EEG implementation in therapy.",
      paragraphs: [
        "The information from interviews with healthcare professionals helped us gain a better idea of how a portable EEG could be implemented in a standard therapy session. This allowed us to create an experience map to visualize the process."
      ]
    },
    {
      label: "Summary",
      image: phLogo,
      imageCaption: "[ GIF made in Photoshop ]",
      titleNumber: "Summary",
      descriptionTitle: "Aiding in addiction treatment.",
      paragraphs: [
        "Currently, addiction healthcare practitioners rely on qualitative data (e.g. self-reports) to inform treatment of OUD. The solution Neurotype proposes would allow practitioners to objectively detect triggers for relapse, such as craving or distress at the point of care: providing quantitative data in addition to qualitative. This solution provides practitioners with quantititave data to aid in the treatment of individuals with OUD."
      ]
    }
  ]
};

export default phData;
