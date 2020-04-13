import React from "react";
import { BrowserRouter } from "react-router-dom";
import School from "./School";
import Header from "../Components/Header/Header";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <School />
        </BrowserRouter>
    );
}

export default App;
