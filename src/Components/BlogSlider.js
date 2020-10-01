import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PresuntoFumado from "./Assets/presunto_fumado_alameda.JPG";
import MoscavideFuture from "./Assets/moscavide_future.jpg";
import GoalDigger from "./Assets/goaldigger.jpg";
import GoalDiggerM from "./Assets/goaldigger_moscavide.JPG";


class BlogSlider extends React.Component {
    render() {
        const settings = {
            dots: true,
            arrows: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <Slider className="blog-slider" {...settings}>
                <div>
                    <img className="blog-img" src={PresuntoFumado} alt="presunto-fumado" />
                </div>
                <div>
                    <img className="blog-img" src={MoscavideFuture} alt="moscavide-future" />
                </div>
                <div>
                    <img className="blog-img" src={GoalDigger} alt="goaldigger" />
                </div>
                <div>
                    <img className="blog-img" src={GoalDiggerM} alt="goaldigger-m" />
                </div>
            </Slider>
        );
    }
}

export default BlogSlider;
