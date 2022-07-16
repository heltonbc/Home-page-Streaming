import React from "react";
import NavComponents from "./components/NavComponents";

import OnHigh from "./films_Category/OnHigh";
import Action from "./films_Category/Action";
import Comedy from "./films_Category/Comedy";
import Horror from "./films_Category/Horror";
import Romance from "./films_Category/Romance";
import Thriller from "./films_Category/Thriller";

import Footer from "./components/Footer";

const App = () => {
    return (
        <>
            <NavComponents />
            <OnHigh />
            <Action />
            <Comedy />
            <Horror />
            <Romance />
            <Thriller />
            <Footer />
        </>
    );
};

export default App;
