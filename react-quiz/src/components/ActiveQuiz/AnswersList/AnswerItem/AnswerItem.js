import React from 'react';
import classes from './AnswerItem.css';

const AnswerItem = props => {
    return (
        <li className={classes.AnswerItem}>
            {props.answer.text}
        </li>
    );
}

export default AnswerItem;