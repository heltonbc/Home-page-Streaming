import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";

function Comedy() {
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

    const comedyMovies = [
        {
            id: 1,
            title: "Nome do Filme",
            img: "https://occ-0-642-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSRqHSmWJ2c6l_MM4r42vFoLiNX1AWTJl_LXsoSwbEe1M1Wj6LnFQSQT80GxpcndT6VqyNKFA0qVBhhvCMy9ArcHEe6kU6OSiqs.webp?r=204",
        },

        {
            id: 2,
            title: "Nome do Filme",
            img: "https://occ-0-642-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7kEf4wAKSV6A4R1iKUEm_j1er10xm2V9yiZc1v-6FVAIC6LfoCOcddHLU5uC3-CTW4zUhKjOk9DBZHKDC2bhoB_bS_I2oiOqmExbpBEiTopgrGLCzUKVwpJvDiEHJ6Uq9h.jpg?r=6c0",
        },

        {
            id: 3,
            title: "Nome do Filme",
            img: "https://occ-0-642-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXHI7Ba1omDlYb42UwOFX0Vp9babggH1vJMvnJJCTjxAaeWCuS_iXTxIHQRCrX2tMpBpjm1Knucm4qocTbnJWIc5Z77nrVeKcLE.webp?r=329",
        },

        {
            id: 4,
            title: "Nome do Filme",
            img: "https://occ-0-642-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfGpRNRa8gc8K_fZrNyqkdEx-xJgHwiVsDHbE2zcladhEkT3bxHXDuhDu6wstk4m1YhPax6TAoPipQxM2m0M7cRGsgaxH2vr3zU.webp?r=dfc",
        },

        {
            id: 5,
            title: "Nome do Filme",
            img: "https://occ-0-642-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcWCucFODcFwcxezcgTgi3OkeSC_uzU8VoGK_fNOwdv3AtMpxIcO67aKQnn5Od1Xo_3GrUwnELhZFZpLxfk32QCFSaXovDh8dR4.webp?r=882",
        },

        {
            id: 6,
            title: "Nome do Filme",
            img: "https://occ-0-642-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU6ZykIeqTM-9WXa_PSFpGP_wJWmBaZSmXOtnK6fZJtdRLnfrJAzEHqiHG9nNJN_jmayGrtyh10POfN3tsigOMVB9dFDuy-QSUE.webp?r=a71",
        },

        {
            id: 7,
            title: "Nome do Filme",
            img: "https://occ-0-642-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfeRRdj1mmbDYiKe8YMf9JtVtmczI2cSPQdmmR1ImGHaT7obol1qdlsGv9OPT1uLtm895ZhnALNH9r_uBOVPE3tA3rJOJJLbsTZ8Yq35dazYev6Gm7OOdLFQfjQj1YQk20yA.jpg?r=eb9",
        },

        {
            id: 8,
            title: "Nome do Filme",
            img: "https://occ-0-642-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYdKZEjn5WdDpyAYLxIz_VMAVoYErpypZeXdU15OcHEfo7zn0BWOcWbbf5jMqoSR7Zl722M4q34WfW_k3GLv3-Q8fL0x2usGD0Q.webp?r=1ec",
        },

        {
            id: 9,
            title: "Nome do Filme",
            img: "https://occ-0-642-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYdKZEjn5WdDpyAYLxIz_VMAVoYErpypZeXdU15OcHEfo7zn0BWOcWbbf5jMqoSR7Zl722M4q34WfW_k3GLv3-Q8fL0x2usGD0Q.webp?r=1ec",
        },

        {
            id: 10,
            title: "Nome do Filme",
            img: "https://occ-0-642-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUpjL8NCcsZ4nnCv4GXorENz9YLaqkoJk9JRoY6UYsV7Hfeu3yFNif6HEodaXZ6nggiyWc1tRWhssZvZgQA8xol0Sn871354hFk.webp?r=cf3",
        },
    ];

    return (
        <div className="Comedy">
            <h5 className="title-category">Filmes de Comédia</h5>
            <Slider {...settings}>
                {comedyMovies.map(item => (
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

export default Comedy;
