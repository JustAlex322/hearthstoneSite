import Slider from "react-slick";

const SimpleSlider : React.FC = ({children}) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      {children}
    </Slider>
  );
}

export default SimpleSlider