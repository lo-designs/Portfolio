import hero from "../../Images/Parralily/hero.jpg";
import wireframes from "../../Images/Parralily/wireframes.png";

const parralilyData = {
  heroImage: hero,
  title: "ParraLily",
  projectType: "Web Design // Food Truck",
  subtitle: "Website design & development for Minneapolis food truck",
  overview: [
    <>I had the opportunity to help set up, design, and build a <b><a href="https://parralily.com" target="_blank" rel="noopener noreferrer" className="bold-link">website for ParraLily</a></b>, a new food truck in Minneapolis. In addition to the site design, I have helped maintain and update content, as well as created menus for their brunch events, catering, and boxed lunches (which are available on the website).</> 
  ],
  tabs: [
    {
      label: "Design Process",
      image: wireframes,
      titleNumber: "Wireframing // Design Board",
      descriptionTitle: "Mobile-first approach building on the existing design",
      paragraphs: [
        "I started with the mobile design and made wireframes using Adobe XD and a design board in Photoshop. A mobile first approach was important due to people being out and about on their phones when looking for food truck options. Design choices - colors and fonts - were based around both the pre-existing ParraLily logo as well as the color/look of the truck. I've also designed menus for their brunch events, catering, and the boxed lunches they offer."
      ]
    }
  ]
};

export default parralilyData;
