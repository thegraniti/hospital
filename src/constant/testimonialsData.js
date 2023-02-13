import { teastimonial3, testimonial1, testimonial2 } from "./images";
import Comment from "../components/Comment/Comment";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export const TestimonialsComment = [
    {
      id: "comment-1",
      image: testimonial1,
      name: "Patient Name",
      title: "Profession",
      disription: "Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat. Erat dolor rebum sit ipsum.",
    },
    {
        id: "comment-2",
        image: testimonial2,
        name: "Patient Name",
        title: "Profession",
        disription: "Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat. Erat dolor rebum sit ipsum.",
     
    },
    {
        id: "comment-3",
        image: teastimonial3,
        name: "Patient Name",
        title: "Profession",
        disription: "Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat. Erat dolor rebum sit ipsum.",
     
    },
  ];
  
  export const TestimonialsSlider = () => {
  
      const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1, 
          responsive: [
              {
                breakpoint: 900,
                settings: {
                  slidesToShow: 1,
                },
              },
              {
                breakpoint: 1150,
                settings: {
                  slidesToShow: 1,
                },
              },
              {
                breakpoint: 1300,
                settings: {
                  slidesToShow: 1,
                },
              },
              ],
      }
      
      return(
      <Slider {...settings}>
          {TestimonialsComment.map((testimonial) => <Comment id={testimonial.id} key={testimonial.id} {...testimonial}/>)}
      </Slider>      
  )
  }