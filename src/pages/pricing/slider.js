import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Packages from '../../components/Packages/Packages'
import {servicesData} from '../../constant/packageData'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const SimpleSlider = () => {

   const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 1750, min: 800 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1500, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  
    
    return(
    <Carousel  responsive={responsive} infinite>
        {servicesData.map((product) => <Packages key={product.id} id={product.id} {...product}/>)}
    </Carousel>      
)
}