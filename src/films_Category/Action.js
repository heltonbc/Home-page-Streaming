import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";

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
            img: "https://occ-0-642-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABezRKlPF_UI9K69Z9iJpVSiVTUFZOR9BAHxXrt5RWYCAqIuAbqLaArW9u6gRngZWROZjqv6ehygFjWk7VHnFal5gHF4IxnxhjQA.webp?r=07c",
        },

        {
            id: 2,
            title: "Nome do Filme",
            img: "https://occ-0-642-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSgQttICkab2NnodHQvIu2ylmvCvidF8Srnd4pEoE23mMfUvqDRWBxDlPqktkDKWkHI_VmSVSUd6guZBz3K0KbYyrs_VNjCnqQM.webp?r=ab3",
        },

        {
            id: 3,
            title: "Nome do Filme",
            img: "https://occ-0-642-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWTrHQzmHdQ8NE0jxtm9AwD50kwm3JBuVBFLD7y79HPzq_8hWXbpNbRg7N3fI1fMb4sZq89-m7Y7U5K8AaXBaUcUC4P3qOBo2OBHGbmRqYzYFBpFceB3JM0idT_iuWUMlRxF.jpg?r=b8f",
        },

        {
            id: 4,
            title: "Nome do Filme",
            img: "https://occ-0-642-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABY9XLUN4_TkzWvz5pK6kQVPP8-3qeGb9CkFinh8DNu53vUrQ9jpy9hi-VL_g7LvcQBRAolvrATcvw_kTTRQkH7Xs3UdVk5YzfwiFUppzlCwqxXRtjhE_Bg473oUCIKH5SNzN.jpg?r=05d",
        },

        {
            id: 5,
            title: "Nome do Filme",
            img: "https://occ-0-642-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeyI0TXUh_cpP9H-4zFYPZRwCj3qd_zhpoUjKeIR_mqpybGeeZTTl8M-_JPobg1Z83P42O05HWpDpJ1J96thR6lU7DrfIWZQamZfL6z3jkR5wadn5-ejldXHSF032o2EJbMK.jpg?r=fb7",
        },

        {
            id: 6,
            title: "Nome do Filme",
            img: "https://occ-0-642-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdpoqVQtuzt_5jNB6EmE440rmCpf3-E-xsY-SGxvZG63yWb8Ki-yKewOaz5brJTM4rWwM6dLa9aHExYWajeHbxlEdmU64LCpEcE.webp?r=b71",
        },

        {
            id: 7,
            title: "Nome do Filme",
            img: "https://occ-0-642-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYIXTol4U_zZD-m2KEgVy4A_JH-dCVcjdgQVxNH0xsif8U0pWLtDXTZQp6kT1DDrRoMEfSIC1BQHIXjqn35LdsizrVpwXjNoNe4.webp?r=a29",
        },

        {
            id: 8,
            title: "Nome do Filme",
            img: "https://occ-0-642-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABf1auG8TcxAcfwBlBX8VpKzBs1XqoGeTk4PzpcDwifmQvKxFviV_AEdwwlEAoeoA18Y-8k81GdrieO2q-88ROb9YjWIYTHKf3Pt7dUaXIkvtyDtK226cwHPp3Z8-BUp7mCrK-1vNpm-4mX-m4kg18vG8IrdQHeQtcjA.webp?r=c11",
        },

        {
            id: 9,
            title: "Nome do Filme",
            img: "https://occ-0-642-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUMBefQHlO7lffBljuebAQIh4_Qpo7TCDAOAJCALqsjPrgTXlVHt-JlsiNnubonEua5LwIIy6ycKqvWxtW93RCHUNVzIrD-k9aI.webp?r=57d",
        },

        {
            id: 10,
            title: "Nome do Filme",
            img: "https://occ-0-642-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABd4ejtiaEzzmxuOqWrFL-K3GNvb6igFXd_fIwq4OLfkCbx8vo1QAlkCLqOFrGf3YbnPF0CKqfQ4-kPCdwLYwEKXm1tqwQEEXBDy9s9Jf-fNz99Gn4oQaNRHFIx6PlPslniHl.jpg?r=274",
        },
    ];

    return (
        <div className="Action">
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
