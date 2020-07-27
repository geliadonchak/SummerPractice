import React, {Component} from 'react';
import Layout from './hoc/Layout/Layout';
import Quiz from './containers/Quiz/Quiz';
import {Route, Switch, Redirect, withRouter} from 'react-router-dom';
import QuizCreator from './containers/QuizCreator/QuizCreator';
import QuizList from './containers/QuizList/QuizList';
import Auth from './containers/Auth/Auth';
import {connect} from 'react-redux';
import Logout from './components/Logout/Logout';

class App extends Component {
    componentDidMount() {
        this.props.authLogin();
    }

    render() {
        let routes = (
            <Switch>
                <Route path="/auth" component={Auth}/>
                <Route path="/quiz/:id" component={Quiz}/>
                <Route path="/" component={QuizList}/>
                <Redirect to="/"/>
            </Switch>
        );

        if (this.props.isAuthenticated) {
            routes = (
                <Switch>
                    <Route path="/quiz-creator" component={QuizCreator}/>
                    <Route path="/quiz/:id" component={Quiz}/>
                    <Route path="/" component={QuizList}/>
                    <Route path="/logout" component={Logout}/>
                    <Redirect to="/"/>
                </Switch>
            );
        }

        return (
            <Layout>
                {routes}
            </Layout>
        );
    };
}

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.auth.token
    };
}

function mapDispatchToProps(dispatch) {
    return {
        authLogin: () => dispatch(authLogin())
    };
}

export default withRouter(connect(mapStateToProps)(App));
