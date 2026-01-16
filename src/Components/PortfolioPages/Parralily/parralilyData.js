import hero from "../../Images/Parralily/hero.jpg";
import wireframes from "../../Images/Parralily/wireframes.png";
import mobileHero from "../../Images/Parralily/hover.jpg";

const parralilyData = {
  heroImage: hero,
  mobileHeroImage: mobileHero,
  title: "ParraLily",
  projectType: "Web Design // Food Truck",
  subtitle: "Website design & development for Minneapolis food truck",
  overview: [
    <>
      I had the opportunity to help set up, design, and build a{" "}
      <b>
        <a
          href="https://parralily.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bold-link"
        >
          website for ParraLily
        </a>
      </b>
      , a food truck in Minneapolis. In addition to the site design, I have
      helped maintain and update content, as well as created menus for their
      brunch events, catering, and boxed lunches (which are available on the
      website).
    </>,
  ],
  tabs: [
    {
      label: "Design Process",
      image: wireframes,
      imageCaption: "[ Wireframes and design board ]",
      titleNumber: "Wireframing // Design Board",
      descriptionTitle: "Mobile-first approach building on the existing design",
      paragraphs: [
        "I started with the mobile design and made wireframes using Adobe XD and a design board in Photoshop. A mobile first approach was important due to people being out and about on their phones when looking for food truck options. Design choices - colors and fonts - were based around both the pre-existing ParraLily logo as well as the color/look of the truck.",
      ],
    },
  ],
};

export default parralilyData;
