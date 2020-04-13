import React, { useState, Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import {
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from "reactstrap";

const MobileHeader = () => {
    const [dropdownOpen, setOpen] = useState();
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    });

    const toggle = () => setOpen(!dropdownOpen);
    return (
        <Fragment>
            <Link to='/' className='header-brand'>
                <span className='navbar-brand'>به مدرسه خوش آمدید.</span>
            </Link>
            <ButtonDropdown
                isOpen={dropdownOpen}
                toggle={toggle}
                className={width <= 290 ? "btn-block m-auto" : null}
                size='sm'
                direction='right'
            >
                <DropdownToggle color='none'>
                    <span className='navbar-toggler-icon'></span>
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>
                        <Link
                            to='/teachers'
                            className='nav-link'
                            style={{ color: "black" }}
                        >
                            معلمان
                        </Link>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                        <Link
                            to='/classes'
                            className='nav-link'
                            style={{ color: "black" }}
                        >
                            کلاس ها
                        </Link>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                        <Link
                            to='/students'
                            className='nav-link'
                            style={{ color: "black" }}
                        >
                            دانش آموزان{" "}
                            <span className='sr-only'>(current)</span>
                        </Link>
                    </DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>
        </Fragment>
    );
};

export default MobileHeader;
