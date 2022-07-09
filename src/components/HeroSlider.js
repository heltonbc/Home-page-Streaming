import React from "react";
import "./HeroSlider.css";
import { Carousel } from "react-bootstrap";

const HeroSlider = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100 img-carousel"
                        src="https://occ-0-642-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfmG19tnzK_6rMDfonL9MFkZeDeTFm94JXvHGt3N6oPig4XWe-ap9WBv8x0HUe4HW0YDRS0lXLdVU1z5gkHQChsLqJXjV46tg6cQBSCqhPFYVzp1UI-LvZ745tMXUdPyar51nj35D7lB9KyNgYSe6raeDbxmcmnDTXxzLmVx-pqLFM8GIDKLfAKb4ABLW-D9IVO-0vQ94pw4ENdoKGn4eK9aXe3gHJt8.jpg?r=61f"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Stranger Things</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100 img-carousel"
                        src="https://occ-0-642-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUQSAFuzjwn5jN7LJ7VSKT3KjZn9iayh0KVciBK0TeyW3HUn1jpODKcIbiGVPK1LYmXPqdSQ4vfNXnzha6vZMMF2-sptgWq-z-Dfd3ZeDaj-rzmgTcMP7prrjvJoRsa40xxL.jpg?r=e90"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>DARK</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-carousel"
                        src="https://occ-0-642-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUhxHamQhBxj6iuA_-Q-_gQ8VxleBYV-jOiMfXp0RaEJHYCHYIrf8C6CuE16FR4bZaMI6rpjkM8YBu8eQ5RLhnLxAMqFcGnU10keevsmbODlTxLCQdHzCunXwwcXnWKb2nV5.jpg?r=9a9"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Peaky Blinders</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-carousel"
                        src="https://occ-0-642-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABa_k_JX8vTi1sikMK4py1FpU3bAxc8qq-A5Wkdy0eA5aEBRIDS-e_qTfojfTnhp-A2ajsKhT__R4VTFqEQyAxsWgKJRY65ZWzHs.webp?r=567"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Suits</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-carousel"
                        src="https://occ-0-642-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYIXh7zIX8YdlwNa1BUv07pzhL4QPGeF-B6N1pe46NgHluAaBhI3iZt83tOnJ52v-XeBTnI-R7RvpfXmtJKu630Cjg7RNruAgHwlfVarv42YQfkCGE4gEAafU-YVvi1oTtnT.jpg?r=8f2"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>La Casa de Papel Coreia</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-carousel"
                        src="https://occ-0-642-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeyI0TXUh_cpP9H-4zFYPZRwCj3qd_zhpoUjKeIR_mqpybGeeZTTl8M-_JPobg1Z83P42O05HWpDpJ1J96thR6lU7DrfIWZQamZfL6z3jkR5wadn5-ejldXHSF032o2EJbMK.jpg?r=fb7"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Black Mirror</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-carousel"
                        src="https://occ-0-642-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUcPjC7oBMkSBB_umdCSrd1urBE8erit0bnDA4lQToSH8TEg1jIPTPdLjud1G98D_AnloUtxTW6YEFITq-YtPX2fLIpisiOcT5s.webp?r=422"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Vikings</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-carousel"
                        src="https://occ-0-642-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABf5jFhzoeOY-KtZq2US-AoaNF2fD67m7q6KuZA5CtRaYsioBeiPOsp8VOgMb6mC5QcQAtgCdLAR6s0i7d39_j_eIOJbFKG2f1uQ.webp?r=2a6"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Gotham</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-carousel"
                        src="https://occ-0-642-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeBCWafmzw61hPLVAFxtvrDPSXJ7jNzIbG2LO_F0ki4wuioqXbUz3CKsclzhfHaRbXaJhtSW6VXVVGPgnq_ITwf8D162ncCWaGA.webp?r=49d"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Ilha do Medo</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-carousel"
                        src="https://occ-0-642-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUMBefQHlO7lffBljuebAQIh4_Qpo7TCDAOAJCALqsjPrgTXlVHt-JlsiNnubonEua5LwIIy6ycKqvWxtW93RCHUNVzIrD-k9aI.webp?r=57d"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>A Lista Negra</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default HeroSlider;
