import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";

function Romance() {
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

    const romanceMovies = [
        {
            id: 1,
            title: "Nome do Filme",
            img: "https://occ-0-642-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABe0BLm8PZ2JqL9ZtfMwgl0suRIk4azlWk0edHFPu28bIo7r0dHZhROJEhdLQQJfxPRwJZ6WMkAyIBr5_T9r3hQ8Wb-5DDAZnbyHg1VvlLPGdl9nGBs0SEWAZTNE5Dd2Mkx5QgrBEIF930N2QiBLAHl_OZSTQjloYWeTh6XRlwPCPre-D1iic-E1RWAuMQYg.jpg?r=a5e",
        },

        {
            id: 2,
            title: "Nome do Filme",
            img: "https://occ-0-642-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRKQQVZRn9KEolHSlZWHRWc9dtDHBTacD9SNHJqSjIM0raVWD35lZG-NvG2MzvHKb7S6aZOvX0KCsbu2goAXmTmaxQNo_GznlbQ.webp?r=cb1",
        },

        {
            id: 3,
            title: "Nome do Filme",
            img: "https://occ-0-642-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdQM7hlbOe5RnFqWRc7cYRgST1bol8kRyP6KLwR-keMC59dHUTc6wCNtdlTf9Eup-b163lfrbPLiITRKWoxPD3ZrihOGg6gJ_jw.webp?r=4ff",
        },

        {
            id: 4,
            title: "Nome do Filme",
            img: "https://occ-0-642-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaXw0jBqIc74UG4a_APHJ5cUhyNAs5rY-HuVVPx7lf2TN5KxmcqFUxIDlngnEHVqjktN-xL5T5PhwcQgOvM25qvNASwe9B0BQ_Q.webp?r=d55",
        },

        {
            id: 5,
            title: "Nome do Filme",
            img: "https://occ-0-642-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTUwfsxzlA3CxxnoW4TjXxwA-OJtqtY3bzFgjWSgG0uvWxzZgiGWcXi0A7uWdHKbWh3vQIs0avKE1Q4DZ-yXeXiUNiWwGi-bbFc.webp?r=d6c",
        },

        {
            id: 6,
            title: "Nome do Filme",
            img: "https://occ-0-642-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdeRvlO4KSS-HboCFanhiAaE3Oyf1zxN8lSHa_Nr6NYpZaV9tI4pfgdOmgfjIhuReotDTYjpz0frf5t9RKgx2CUCoz3bVN9q84Q.webp?r=7cb",
        },

        {
            id: 7,
            title: "Nome do Filme",
            img: "https://occ-0-642-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZ3sXOdkw5GJDaBMq3N9zeVMaktOzZE8W3cLqUIZoujKGQEb7U-H1Xjo7ev28q5QdtEnz1NqTGsPwqB3J_rUQRbJuh4oxS8LkHiEyMi7eg_4ykwqDgFPoRootYkYxXK5Pc81.jpg?r=344",
        },

        {
            id: 8,
            title: "Nome do Filme",
            img: "https://occ-0-642-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYjLl-bid-uI26qC16FX79D4wyos3xDPNrzQQGIc_fIFlFLiTXF9Ju-xFp6SViT5xfQrRHVEbPd66A7ol1IkaEkoqodNBOI6wG3eVD3VsjPEu2LGWLjP6OzDGUNFvxx958aF.jpg?r=6b3",
        },

        {
            id: 9,
            title: "Nome do Filme",
            img: "https://occ-0-642-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYktAcQuOoW6rNFyGP8EmTE8hgrPM1QR3m5OFoNPqY-G0Wzh61MuH9cQbpEQyuWPIt4Zvj-upb_PJvKLHYHBh7jKcCP6clMIuFg.webp?r=d87",
        },

        {
            id: 10,
            title: "Nome do Filme",
            img: "https://occ-0-642-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABT-2_LJGJJzkSYxjpn2y55dKIXcK4IVnX_TAkC2bXqKo3gC7VTV98OM0QWIEqQf0QPA2v5OMt8N_mbsBac8wh2gNx4RQuOZo84w.webp?r=af9",
        },

        {
            id: 11,
            title: "Nome do Filme",
            img: "https://occ-0-642-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbTvPZqGtwx0wnGkdA-etmOj-8qmGKmVu1IuIHHOKqMwPUZ-c0WvMTHiXIgQWOyuDBzqbFQ77U402ccJZ1ANUISyM2RSxASyRtSzzlk9VTeD6I4Vq-X3i5AuCD1qE3_qBr2Sm5uzpjyfxeEOsBSYOHzn4arS4JOHWDaNWvsao9nBqV1DMRuo6hgXuaBTaO4.jpg?r=0f8",
        },

        {
            id: 12,
            title: "Nome do Filme",
            img: "https://occ-0-642-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYGHmOnhy_-1XGuNiyeOSuGzTpxoian8YI-Ldg5AKNRBKfNwGNzE9nbAF07mzYQggKY3X02EoS_GVH4KbSwlKVxQJdkW2clCO5BMeGjIl4t-hSjumv_eaT5j7Ufmf-82QIte.jpg?r=0e6",
        },

        {
            id: 13,
            title: "Nome do Filme",
            img: "https://occ-0-642-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABV_BjpLF5-zEl1OSGjHPocKE3Oeo-478TzriBMeqIu4yG838BNFwS7DMq1QLNk7TMOm6ZpZNRK2F4HL5NSkf3mt4VXfmwqbgeRqz7txsIyn8a-P54oE4Yu9SFeid0tcR_s6X.jpg?r=84a",
        },

        {
            id: 14,
            title: "Nome do Filme",
            img: "https://occ-0-642-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdxBJd5IA0wmAcNaZ8dn8fuU0zH0VXOzAPjeZxCfdZNC4yZpkxQmTJ86uuB2MawXBvrk3tpLqsR7A637zwuuMnDgtBmuBfsogAo.webp?r=221",
        },

        {
            id: 15,
            title: "Nome do Filme",
            img: "https://occ-0-642-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcJ-Qq6adLXV-J4W9ixnui_8mEI4i-tzXnipMwPE6CcRuKkPTHLXU-KfjpeEYLOYjzI5GQx_XO6tN0NgztJo2PxA8iNXrS2rflFnPBuw4IZRBzd4dAXeX6CtdQvkS8bkyMmb.jpg?r=dfa",
        },
    ];

    return (
        <div className="Romance">
            <h5 className="title-category">Filmes de Romance</h5>
            <Slider {...settings}>
                {romanceMovies.map(item => (
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

export default Romance;
