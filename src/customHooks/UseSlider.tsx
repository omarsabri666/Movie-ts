import { ReactNode } from "react";
import Slider from "react-slick";
type sliderProbs = {
  slides:number;
  children:ReactNode
}
function UseSlider({slides,children}:sliderProbs) {
         const settings = {
           dots: true,
           infinite: true,
           speed: 500,
           slidesToShow: slides,
           slidesToScroll: slides,
           autoplay: true,
           arrows: true,
           responsive: [
             {
               breakpoint: 1024, // screens between 1024px and 768px
               settings: {
                 slidesToShow: 3,
                 slidesToScroll: 3,
               },
             },
             {
               breakpoint: 768, // screens between 768px and 480px
               settings: {
                 slidesToShow: 2,
                 slidesToScroll: 2,
               },
             },
             {
               breakpoint: 480, // screens below 480px
               settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1,
               },
             },
           ],
         };
    return <Slider {...settings}>{children}</Slider>;
}

export default UseSlider
