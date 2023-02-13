import { team1, team2 , team3 } from "./images";


export const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1024 },
    items: 2,
    slidesToSlide: 1,
  },
  desktop: {
    breakpoint: { max: 1200, min: 800 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};


export const TeamMembers = [
    {
      id: "person-1",
      image: team1,
      name: "Doctor Name",
      title: "Cardiology Specialist",
      disription: "Dolor lorem eos dolor duo eirmod sea. Dolor sit magna rebum clita rebum dolor",
      twitter: "https://twitter.com/",
      facebook: "https://www.facebook.com/",
      linkedin: "https://www.linkedin.com/",
    },
    {
        id: "person-2",
        image: team2,
        name: "Doctor Name",
        title: "Cardiology Specialist",
        disription: "Dolor lorem eos dolor duo eirmod sea. Dolor sit magna rebum clita rebum dolor",
        twitter: "https://twitter.com/",
        facebook: "https://www.facebook.com/",
        linkedin: "https://www.linkedin.com/",
    },
    {
        id: "person-3",
        image: team3,
        name: "Doctor Name",
        title: "Cardiology Specialist",
        disription: "Dolor lorem eos dolor duo eirmod sea. Dolor sit magna rebum clita rebum dolor",
        twitter: "https://twitter.com/",
        facebook: "https://www.facebook.com/",
        linkedin: "https://www.linkedin.com/",
    },
  ];
  
