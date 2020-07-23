import React, {Component} from 'react';
import classes from './Auth.css';
import Button from '../../components/Ui/Button/Button';

export default class Auth extends Component {
    handleLogin = () => {

    }

    handleRegister = () => {

    }

    handleSubmit = event => {
        event.preventDefault();
    }

    render() {
        return (
            <div className={classes.Auth}>
                <div>
                    <h1>Авторизация</h1>

                    <form onSubmit={this.handleSubmit} className={classes.AuthForm}>
                        <input type="text"/>
                        <input type="text"/>

                        <Button type="success"
                                onClick={this.handleLogin}
                        >
                            Войти
                        </Button>

                        <Button type="primary"
                                onClick={this.handleRegister}
                        >
                            Зарегистрироваться
                        </Button>
                    </form>
                </div>
            </div>
        );
    }
}

