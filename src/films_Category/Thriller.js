import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";

function Thriller() {
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

    const thrillerMovies = [
        {
            id: 1,
            title: "Name Movie",
            img: "https://occ-0-642-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABb8eg6rorWEBVeuZ_djz-b9eGypsBsJ8lazddaK916hnATAOuqE-d8_GI8DuAcNn2Anv8Hr_bmVDeFUPjvvv6d28o-xjZUz4Is8.webp?r=609",
        },

        {
            id: 2,
            title: "Name Movie",
            img: "https://occ-0-642-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRAUv63Jcu_e3TD_NrXtug8jdhBtqosyLuRYFXpHiqOTlqU2F58FA3TWoptphmXJMmJbvH5yk8GBnb9F0I673hywUeNMnqtJzws.webp?r=071",
        },

        {
            id: 3,
            title: "Name Movie",
            img: "https://occ-0-642-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABe5WfcFDrYP7e_LkM2Y6bLi6C_cFFsu5zd6q_prs3sJ0GpHwBTBhDqpjhMKvO8XsME8q3xkqji8X4rMiNx7qypfP0cMX-i73i6kPHPHYesVpeGuUhsATMK1rNiyzk4R5DBlA.jpg?r=99b",
        },

        {
            id: 4,
            title: "Name Movie",
            img: "https://occ-0-642-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdxPnHjjtY7BYb-M2SCR1CKI61EJ1dO1gbxlWohJlSbaecMOX2CQWxwY7MPYqb-XoIdhnlUAMT_keLBYTQvX7Y6oH8uYgwkpDh0.webp?r=c99",
        },

        {
            id: 5,
            title: "Name Movie",
            img: "https://occ-0-642-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdSL4faNLTJj5dRUor8cJrH--wXzX9WHoYgJAwyD3WnTNyHfeTlD2Ouh4CsK7SEdkKEimmjnKKgPXsrukY0nPtggY2hEXLmpqKU.webp?r=5c7",
        },

        {
            id: 6,
            title: "Name Movie",
            img: "https://occ-0-642-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU0lCaByRf6dbOZSqJ6mX55cmP0UZ6ynxZW3ctTvECs4hEVk-7VdVfIFfzVJ0macVIhwPc7Mn5MIGQ_auzKmApWjWxNpC04tkVs.webp?r=08f",
        },

        {
            id: 7,
            title: "Name Movie",
            img: "https://occ-0-642-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdTn9nvvVcyuYNbyJwyGzb2jgqYUYeN5UaVBrlhbPj7Qpm5W2LEZVKYTaNCU0M8FHbooztL9TRS0b4ITrdG0jVsL0Thvc5aGidjFn8dJuwb8efcx_VKw3rJPjNiuW74KnSCf.jpg?r=f27",
        },

        {
            id: 8,
            title: "Name Movie",
            img: "https://occ-0-642-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABReJd4HaEbEfZ9qM-mNJtIC932NhZbu-g-e_yvDE5tohNeKmFbO72NDjQdL8LxpLp7JVa9ybiTQHFtxkDx_cegm3ekRTZZ3gV98.webp?r=bc7",
        },

        {
            id: 9,
            title: "Name Movie",
            img: "https://occ-0-642-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWvN-JNUAMKRanKpHZIVoZODXihlKYwcfwqkT2uPVoK7EwEaxpyxGPyJex3CyyW2kz10moZi_iZWd5x6JSMppE6Mqa8rBKGkCfIdlQbluV2Be9La2haixzqP91UEBEkr5bEa.jpg?r=b8d",
        },

        {
            id: 10,
            title: "Name Movie",
            img: "https://occ-0-642-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVsNdw0QmgMsz3tUGT62hGV4sI0ZfUJunNBRZO2btgf1Litlu40oisn4697st-NgxmvsICqWMNsXnH7fUwhkj-fr61zmpEpobsjO3dK3yx_XopWiGmJY1uUtFd-0tuipEUyY.jpg?r=1e9",
        },

        {
            id: 11,
            title: "Name Movie",
            img: "https://occ-0-642-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbSJx1dkV_YlBoQ79NoTdBRGdhMJoogNqZoQSDi2WOsFOy7lBulu5Or9L9Bu6H3RTidDKAvQPRBlE0BVhDkCcafRYOrYvrCK5dqWsZ3ttTUlqpGCP5GvhU9F1E0D2eCqK06_.jpg?r=09a",
        },

        {
            id: 12,
            title: "Name Movie",
            img: "https://occ-0-642-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZ6WZbu30P9HZCCu-Dh6VUbM5OAxxr3sWI2ZyNoNln9IovnhLyv4pbXqtLZWItIeNaxwC8EWXcnS4qFIxo9Ofu-Cpv3TBSq-jL8lJl4MSHAmJNRmA0aSHljeF5qpI5ibbBaN.jpg?r=3db",
        },

        {
            id: 13,
            title: "Name Movie",
            img: "https://occ-0-642-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQoItJR9QvISZmJgYZEko-T4SPjDeNHGpAZjqLyYZiW6dtA4E2l7-a3nz57hti99dgUwXZFKlD8kk6cDcrOlo_gFJb6avppFofnOo_PdjCvwKkMud04gIfl_Gvzho_1SHXeN.jpg?r=f81",
        },

        {
            id: 14,
            title: "Name Movie",
            img: "https://occ-0-642-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABe6W6cmhYkyxoDHJg2EqQxuB8r1Pwa5tBA1z4tnqQOQUoR8D_ASnX38HnH35m4I3a0CEyz6e9Uh0T-MTPR4E9AAZ_DDOIzrmdHc.webp?r=6ed",
        },

        {
            id: 15,
            title: "Name Movie",
            img: "https://occ-0-642-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWDC2OzdZb8-XPRmWE4pWxRXxzvX64EeI7D90ZGBN8-jw0IsgcKBC133fhbnKf2Ah1XN3uRsvm9UAWPhoxMo5Nm_9ZFYmJgZEV4TbxDuNGxl9_oZb6fxgFdO0jSJK9-0NhtY.jpg?r=bf4",
        },
    ];

    return (
        <div className="Thriller">
            <h5 className="title-category">Filmes de Suspense</h5>
            <Slider {...settings}>
                {thrillerMovies.map(item => (
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

export default Thriller;
