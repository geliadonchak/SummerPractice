import React, {Component} from 'react';
import classes from './QuizCreator.css';
import Button from '../../components/Ui/Button/Button';

export default class QuizCreator extends Component {
    handleSubmit = event => {
        event.preventDefault();
    }

    handleAddQuestion = () => {

    }

    handleCreateQuiz = () => {

    }

    render() {
        return (
            <div className={classes.QuizCreator}>
                <div>
                    <h1>Создание теста</h1>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text"/>
                        <hr />
                        <input type="text"/>
                        <input type="text"/>
                        <input type="text"/>
                        <input type="text"/>

                        <select></select>

                        <Button
                            type="primary"
                            onClick={this.handleAddQuestion}
                        >
                            Добавить вопрос
                        </Button>
                        <Button
                            type="success"
                            onClick={this.handleCreateQuiz}
                        >
                            Создать тест
                        </Button>
                    </form>
                </div>
            </div>
        );
    }
}