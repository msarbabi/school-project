import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Badge } from "reactstrap";

const DesktopHeader = ({ pathname }) => {
    const students = useSelector((state) => state.students);
    const teachers = useSelector((state) => state.teachers);
    const classes = useSelector((state) => state.classes);

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
                            دانش آموزان{" "}
                            <Badge color='warning' pill>
                                {students.length}
                            </Badge>
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
                            معلمان{" "}
                            <Badge color='warning' pill>
                                {teachers.length}
                            </Badge>
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
                            کلاس ها{" "}
                            <Badge color='warning' pill>
                                {classes.length}
                            </Badge>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default DesktopHeader;
