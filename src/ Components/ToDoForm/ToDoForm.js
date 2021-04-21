import { useState } from 'react';

import s from './todofrom.module.css';

const ToDoForm = ({ addTodo }) => {

    const [value, setValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
    };


    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className={s.input}
                value={value}
                onChange={e => setValue(e.target.value)}
            /><button onClick={handleSubmit} className={s.button}>add todo</button>
        </form>
    );
};

export default ToDoForm;