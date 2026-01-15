import neuroHero from "../../Images/Neurotype/neuro-hero.jpg";
import neuroGif from "../../Images/Neurotype/neuro.gif";
import neuroLogo from "../../Images/Neurotype/logo-concept.png";
import neuroMap from "../../Images/Neurotype/neuro-map.png";
import neuroData from "../../Images/Neurotype/neuro-data.png";
import neuroDash from "../../Images/Neurotype/neuro-dash.png";

const neurotypeData = {
  heroImage: neuroHero,
  title: "Neurotype",
  projectType: "Medical Startup // UX UI",
  subtitle: "App prototype for a medical startup aiming to help treat addiction.",
  overview: [
    "While at Prime, my team had the privilege of working with Neurotype Inc., a company building portable brain sensing tools to support the recovery of people struggling with Opioid Use Disorder [OUD]. Our task was to help determine the best way to integrate a portable electroencephalogram [EEG] into a standard therapy/clinical setting, as well as create a prototype for NeuromarkR™, an application that displays EEG measurements."
  ],
  tabs: [
    {
      label: "Practitioner Sessions",
      image: neuroLogo,
      titleNumber: "Secondary Research // Practitioner Interviews",
      descriptionTitle: "01 Patient + practitioner sessions.",
      paragraphs: [
        "We conducted secondary research to learn about the current landscape for addiction healthcare. To get an idea of what sessions are generally like in clinical and therapy settings, we spoke with 9 practitioners in various healthcare roles."
      ]
    },
    {
      label: "Experience Mapping",
      image: neuroMap,
      imageCaption: "[ Experience map: made in Sketch ]",
      titleNumber: "Usability Testing // Experience Mapping",
      descriptionTitle: "02 Portable EEG implementation in therapy.",
      paragraphs: [
        "The information from interviews with healthcare professionals helped us gain a better idea of how a portable EEG could be implemented in a standard therapy session. This allowed us to create an experience map to visualize the process."
      ]
    },
      {
      label: "Data Visualization",
      image: neuroMap,
      imageCaption: "[ Experience map: made in Sketch ]",
      titleNumber: "Data Visualization // Prototyping",
      descriptionTitle: "03 Interpretable data UI design.",
      paragraphs: [
        "We spoke with an expert in data visualization to learn best practices for presenting complicated medical data. The goal was to design a UI that displays data from an EEG in a way that is easy to interpret - the app takes measurements in patient brain reactivity when looking at substance-related images (from the EEG), which are then compared side-by-side with patient self-reported cravings."
      ]
    },
    {
      label: "Summary",
      image: neuroGif,
      imageCaption: "[ GIF made in Photoshop ]",
      titleNumber: "Summary",
      descriptionTitle: "Aiding in addiction treatment.",
      paragraphs: [
        "Currently, addiction healthcare practitioners rely on qualitative data (e.g. self-reports) to inform treatment of OUD. The solution Neurotype proposes would allow practitioners to objectively detect triggers for relapse, such as craving or distress at the point of care: providing quantitative data in addition to qualitative. This solution provides practitioners with quantititave data to aid in the treatment of individuals with OUD."
      ]
    }
  ]
};

export default neurotypeData;
