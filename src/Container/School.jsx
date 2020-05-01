import React, { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router";
import Students from "../Components/Students/Students";
import Teachers from "../Components/Teachers/Teachers";
import Classes from "../Components/Classes/Classes";
import NotFound from "../Components/NotFound";
import Main from "../Components/Body/Main";
import MyClass from "../Components/Classes/MyClass";
import MyStudent from "../Components/Students/MyStudent";
import MyTeacher from "../Components/Teachers/MyTeacher";

const School = () => {
    return (
        <Fragment>
            <Switch>
                <Route exact path='/teachers/:id' component={MyTeacher} />
                <Route exact path='/teachers' component={Teachers} />
                <Route exact path='/students/:id' component={MyStudent} />
                <Route exact path='/students' component={Students} />
                <Route exact path='/class/:id' component={MyClass} />
                <Route exact path='/classes' component={Classes} />
                <Route exact path='/not-found' component={NotFound} />
                <Route exact path='/' component={Main} />
                <Redirect to='/not-found' />
            </Switch>
        </Fragment>
    );
};

export default School;
