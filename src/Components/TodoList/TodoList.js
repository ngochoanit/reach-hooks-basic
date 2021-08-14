import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TODOS } from '../../utilities/constant'
import './TodoList.scss'

TodoList.propTypes = {

};

function TodoList(props) {
    const todosInitial = TODOS
    const [todos, setTodos] = useState(() => { return todosInitial })
    const [title, setTitle] = useState('')
    const removeItem = (item) => () => {
        const index = todos.findIndex(todo => todo.id === item.id)
        const newTodos = [...todos]
        newTodos.splice(index, 1)
        setTodos(newTodos)
    }
    const handleInputChange = (e) => {

        if (e.target.value !== title) {
            setTitle(e.target.value)
        }

    }
    const addNewItem = (e) => {

        if (e.key === 'Enter' && title) {
            const newItem = {
                id: (Math.random() + 1).toString(36).substring(7),
                title: e.target.value,
            }
            console.log(newItem)
            const newTodos = [...todos, newItem]
            setTodos(newTodos)
            setTitle('')
            e.target.blur()
        }
    }
    return (
        <div className="todo">
            <ul className="todoList">
                <input
                    type="text"
                    className="todoList-inputText"
                    placeholder="new item"
                    value={title}
                    onChange={handleInputChange}
                    onKeyUp={addNewItem}
                ></input>
                {
                    todos.map((item, index) =>
                        <li className="todoList-item"
                            key={index}
                            onClick={removeItem(item)}

                        >{item.title}
                        </li>
                    )
                }
            </ul>
        </div >
    );
}

export default TodoList;