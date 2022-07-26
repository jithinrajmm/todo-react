import React,{useState} from 'react';
import ToDoForm from './ToDoForm';
import { AiFillCloseSquare } from 'react-icons/ai';

import {TiEdit } from 'react-icons/ti'


function Todo(props) {
    const [edit, setEdit] = useState({ id: null, text: '', isCompleted: null })

    const completedTodo = (id) => {
        props.completeTodo(id)
    }

    const deleteTodo = (id) => {
        props.delteToDo(id)
    }

    // const updateTodo = (id, newValue) => {
    //     props.updateTodo(id,newValue)
    // }

    const submitUpdate = (value) => {
        props.updateTodo(edit.id, value);
        setEdit({
            id: null,
            text: '',
            isCompleted:null,
        })
    }

    if (edit.id) {
        return <ToDoForm edit={edit} onsubmit={submitUpdate}/>
    }



    
    return props.todos.map((todo, index) => (
        <div key={index} className={todo.isCompleted ? 'todo-row complete' : 'todo-row'}>

            <div key={todo.id}  onClick={()=> completedTodo(todo.id) }>
                {todo.text} 
            </div>
            <div className='icons'>
                {/* this is for the delete */}
                <AiFillCloseSquare
                    onClick={() => deleteTodo(todo.id)}
                    className='delete-icon'/>
                
                {/* this is for edit the todo */}
                <TiEdit
                    onClick={() => setEdit({ id: todo.id, text: todo.text ,isCompleted: todo.isCompleted})}
                    className = 'edit-icon'
                />
            </div>
      </div>
  ))
}

export default Todo;