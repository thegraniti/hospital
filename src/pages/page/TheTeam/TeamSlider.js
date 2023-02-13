import Team from '../../../components/Person/Team'
import {TeamMembers} from "../../../constant/theteamData"
import { Carousel } from 'react-responsive-carousel'

export const TeamSlider = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 2
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };
    
    return(
    <Carousel responsive={responsive} >
        {TeamMembers.map((teams) => <Team id={teams.id} {...teams}/>)}
    </Carousel>      
)
}