import React from "react";
import { Link } from "react-router-dom";

const DesktopHeader = ({ pathname }) => {
    return (
        <div className='container'>
            <Link to='/'>
                <span className='navbar-brand'>به مدرسه خوش آمدید.</span>
            </Link>

            <div className=''>
                <ul className='navbar-nav'>
                    {" "}
                    <li
                        className={
                            pathname === "/students"
                                ? "nav-item active"
                                : "nav-item"
                        }
                    >
                        <Link to='/students' className='nav-link'>
                            دانش آموزان
                        </Link>
                    </li>
                    <li
                        className={
                            pathname === "/teachers"
                                ? "nav-item active"
                                : "nav-item"
                        }
                    >
                        <Link to='/teachers' className='nav-link'>
                            معلمان
                        </Link>
                    </li>
                    <li
                        className={
                            pathname === "/classes"
                                ? "nav-item active"
                                : "nav-item"
                        }
                    >
                        <Link to='/classes' className='nav-link'>
                            کلاس ها
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default DesktopHeader;
