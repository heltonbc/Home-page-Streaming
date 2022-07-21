import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";

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

    const horrorMovies = [
        {
            id: 1,
            title: "Nome do Filme",
            img: "https://occ-0-642-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABa5yNLSNTKOK_GaJJqTxcHBFoU0h1xkWX2mlMVi1_3HEEfofBp3rWn_VEwtij9QcPbi9pY3SlgZg0icVRc-TRcToapMgiEz4SBs.webp?r=698",
        },

        {
            id: 2,
            title: "Nome do Filme",
            img: "https://occ-0-642-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcc8vXfWE_HM_7XAqj7nTDXzrnxUKXe9WPkyKvaBSi_CYkX60Ip2RRkwn3xiWZChpqICuCugTD4tQ5QRhQleqRkOuz-aw0FDckc.webp?r=a8a",
        },

        {
            id: 3,
            title: "Nome do Filme",
            img: "https://occ-0-642-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfJgDsup2Q20GlJDxCkUMRfgVIDmdLgvFsVm0CIIOHVFinASmFJ29FuQn2bcUz-8uY2pp_tqT9uIJnOwgyr4_yuk1KaBL62zYbo.webp?r=bbf",
        },

        {
            id: 4,
            title: "Nome do Filme",
            img: "https://occ-0-642-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaZhHMDlit1evH4xjMkensxGq6AUsrYUnp6SXOACaFTQgqZOCHqLPorMdtr2ZkLBk0y6LjDP6qLqHX4S0ElQU5KVD2anvN3sKg4.webp?r=f3a",
        },

        {
            id: 5,
            title: "Nome do Filme",
            img: "https://occ-0-642-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVcsl2H4uYONCEkLHQEBFXHtGq5AkeI51rck9PMLIErgwKX1D3nv_R4gzGWfQVvBPFJ-nlAU4HbgUaFqHTjRFcU2_DgPKYt72VM6URDZ3z1pMwdJu6wkKx8R5kgJaugaezVj.jpg?r=3f7",
        },

        {
            id: 6,
            title: "Nome do Filme",
            img: "https://occ-0-642-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdpdhxeyHTwRPAEYvPI4JuZS-s13eDYdLhGffbNglSF-IKzS95ZEaERfLvGsnlW1jpM5ghfYzWvcrk0Vs8NL7QIsbYHb0DD5qQeXHI_iA7seSCGFGdQBOtKEiBj1M6mdm32f.jpg?r=72f",
        },

        {
            id: 7,
            title: "Nome do Filme",
            img: "https://occ-0-642-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWB4qdsUw7TmLEubvk0ympfVp7CSYOnA5QvOiZ_BMXLkOjD95m4FTYFQquHW4mfZh4XjHB5s5dJ9QwnhtuE39wIoDZ-bJFOKV_4.webp?r=644",
        },

        {
            id: 8,
            title: "Nome do Filme",
            img: "https://occ-0-642-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbIQI3XT7dZSe_fBsrtcFGuVvrBnClHH6PoHe6ZpMH31lzdX1wT43r4jwO9wsidV3IePOAazCFc0fNBFKEqZLSpKW2P-JZCVRwe_zVYgUUVjYk31BKoQX59_SoQ2fZE6V26Q.jpg?r=b74",
        },

        {
            id: 9,
            title: "Nome do Filme",
            img: "https://occ-0-642-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcy8NWlBfH8XO3LZoF2rNrZnYRk8MEyDyaqvcQqsU8AoZSdvRbawnAnuQIVxI_Tcbiv82ugXdOCCa8G8_f1kAPhc8Emf1bBL6EM.webp?r=37c",
        },

        {
            id: 10,
            title: "Nome do Filme",
            img: "https://occ-0-642-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUvcsI_ccRUvy2OsSApmdFzGOZwIb35tAAjuXvuT-FWvdVkIazagE8rct5-v4QzjuRBAvIC6EV-4FVFaDbH_gapIMOJ4JIDFuFo.webp?r=efb",
        },
    ];

    return (
        <div className="Horror">
            <h5 className="title-category">Filmes de Terror</h5>
            <Slider {...settings}>
                {horrorMovies.map(item => (
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

export default Horror;
