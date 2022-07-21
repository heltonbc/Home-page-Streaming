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

function Action() {
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

    const actionMovies = [
        {
            id: 1,
            title: "Nome do Filme",
            img: blackMirror,
        },

        {
            id: 2,
            title: "Nome do Filme",
            img: peakBlinders,
        },

        {
            id: 3,
            title: "Nome do Filme",
            img: aListaNegra,
        },

        {
            id: 4,
            title: "Nome do Filme",
            img: dark,
        },

        {
            id: 5,
            title: "Nome do Filme",
            img: gotham,
        },

        {
            id: 6,
            title: "Nome do Filme",
            img: ilhaDoMedo,
        },

        {
            id: 7,
            title: "Nome do Filme",
            img: laCasadePapel,
        },

        {
            id: 8,
            title: "Nome do Filme",
            img: strangerThings,
        },

        {
            id: 9,
            title: "Nome do Filme",
            img: suits,
        },

        {
            id: 10,
            title: "Nome do Filme",
            img: vikings,
        },
    ];

    return (
        <div className="Action">
            <Card className="bg-dark text-white w-100">
                <Card.Img src={capa1} alt="Capa" />

                <Card.ImgOverlay className="row">
                    <Col xs={6} lg={4} className="col align-self-end">
                        <Card.Title>O PROJETO ADAM</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit
                            veniam sit nemo, explicabo at placeat.
                        </Card.Text>
                        <Button className="m-2" variant="light">
                            Assistir
                        </Button>
                        <Button className="btn-more">Mais Informações</Button>
                    </Col>
                </Card.ImgOverlay>
            </Card>
            <h5 className="title-category">Filmes de Ação</h5>
            <Slider {...settings}>
                {actionMovies.map(item => (
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

export default Action;
