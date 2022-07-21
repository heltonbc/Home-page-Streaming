import React from "react";
import NavComponents from "./components/NavComponents";

import InHigh from "./films_Category/InHigh";
import Action from "./films_Category/Action";
import Comedy from "./films_Category/Comedy";
import Horror from "./films_Category/Horror";
import Romance from "./films_Category/Romance";
import Thriller from "./films_Category/Thriller";

import Footer from "./components/Footer";
import "./App.css";

const App = () => {
    return (
        <>
            <NavComponents />
            <div className="second-section">
                <InHigh />
                <Action />
                <Comedy />
                <Horror />
                <Romance />
                <Thriller />
            </div>
            <Footer />
        </>
    );
};

export default App;
