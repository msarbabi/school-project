import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";

const Header = ({ history }) => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);
    });

    return (
        <nav className='header navbar navbar-expand-lg navbar-light'>
            {width <= 1000 ? (
                <MobileHeader />
            ) : (
                <DesktopHeader pathname={history.location.pathname} />
            )}
        </nav>
    );
};

export default withRouter(Header);
