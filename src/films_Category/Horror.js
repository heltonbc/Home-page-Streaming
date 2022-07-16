import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../App.css";
import datafilms from "../components/data";

function Horror() {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="Horror">
            <h4 className="title-category">Filmes de Terror</h4>
            <Slider {...settings}>
                {datafilms.map(item => (
                    <div className="card">
                        <div className="card-top">
                            <img src={item.img} alt={item.exemple} />
                        </div>
                        <div className="card-bottom"></div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Horror;
