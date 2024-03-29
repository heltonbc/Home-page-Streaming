import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import capa1 from "../assets/capa1.jpeg";
import blackMirror from "../assets/BlackMirror.JPG";
import peakBlinders from "../assets/PeakBlinders.jpg";
import aListaNegra from "../assets/aListaNegra.JPG";
import dark from "../assets/Dark.jpg";
import gotham from "../assets/Gotham.JPG";
import ilhaDoMedo from "../assets/IlhaDoMedo.JPG";
import laCasadePapel from "../assets/LaCasadePapel.jpg";
import strangerThings from "../assets/strangerThings.jpg";
import suits from "../assets/Suits.JPG";
import vikings from "../assets/Vikings.JPG";

import "../App.css";
import { Card, Col, Button } from "react-bootstrap";

function InHigh() {
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

    const inhighMovies = [
        {
            id: 1,
            title: "blackMirror",
            img: blackMirror,
        },

        {
            id: 2,
            title: "peakBlinders",
            img: peakBlinders,
        },

        {
            id: 3,
            title: "aListaNegra",
            img: aListaNegra,
        },

        {
            id: 4,
            title: "dark",
            img: dark,
        },

        {
            id: 5,
            title: "gotham",
            img: gotham,
        },

        {
            id: 6,
            title: "ilhaDoMedo",
            img: ilhaDoMedo,
        },

        {
            id: 7,
            title: "laCasadePapel",
            img: laCasadePapel,
        },

        {
            id: 8,
            title: "strangerThings",
            img: strangerThings,
        },

        {
            id: 9,
            title: "suits",
            img: suits,
        },

        {
            id: 10,
            title: "vikings",
            img: vikings,
        },

        {
            id: 11,
            title: "title",
            img: "https://occ-0-642-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABck6zqaWi_ou0fJnJDu8UHVcCw7GMAriCiM1TufhlRlE4VZqpC7goJ1iCUAfU86tJ9nfKw33eLmnJaeIwfj-XMqlH9AI8Amw3bs.webp?r=e7f",
        },

        {
            id: 12,
            title: "title",
            img: "https://occ-0-642-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaXw0jBqIc74UG4a_APHJ5cUhyNAs5rY-HuVVPx7lf2TN5KxmcqFUxIDlngnEHVqjktN-xL5T5PhwcQgOvM25qvNASwe9B0BQ_Q.webp?r=d55",
        },

        {
            id: 13,
            title: "title",
            img: "https://occ-0-642-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYKRHppk6L6cbK6oEFcn2iafk1IFQvAmiZKiTv648Ib6T3skkRO2TSfkkhS1W_0NccgDIEVhGfNgqCFfeULNn4u9XjsGzX5au00.webp?r=115",
        },

        {
            id: 14,
            title: "title",
            img: "https://occ-0-642-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRKQQVZRn9KEolHSlZWHRWc9dtDHBTacD9SNHJqSjIM0raVWD35lZG-NvG2MzvHKb7S6aZOvX0KCsbu2goAXmTmaxQNo_GznlbQ.webp?r=cb1",
        },

        {
            id: 15,
            title: "title",
            img: "https://occ-0-642-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbMEFO4acTksfN-gHwrQlPLnYKysD20fOf5ISf2dQjlb59c3zrRRzZwoLZQaYxc6h1y9tdzyU66ouW5a5J2avSPQghQwpXfDSz0.webp?r=697",
        },
    ];

    return (
        <div className="InHigh">
            <Card className="bg-dark text-white w-100">
                <Card.Img src={capa1} alt="Capa" />
                <Card.ImgOverlay className="row">
                    <Col xs={6} lg={4} className="col align-self-end">
                        <Card.Title>O PROJETO ADAM</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit
                            veniam sit nemo, explicabo at placeat dolor.
                        </Card.Text>
                        <Button className="m-2" variant="light">
                            Assistir
                        </Button>
                        <Button className="btn-more">Mais Informações</Button>
                    </Col>
                </Card.ImgOverlay>
            </Card>
            <h4 className="title-category">Em Alta</h4>
            <Slider {...settings}>
                {inhighMovies.map(item => (
                    <div className="card">
                        <div className="card-top">
                            <img src={item.img} alt={item.title} />
                        </div>
                        <div className="card-bottom"></div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default InHigh;
