import React,{useState} from 'react'
import ToDoForm from './ToDoForm';
import Todo from './Todo';


function ToDoList() {
    const [toDos, setTodos] = useState([])


    
    const addToDo = (todo) => {
        // console.log(todo.id)
        // console.log(todo.text)
        //we will get the data submited on the form using this call back function
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return
        }
        // saving the new todo and also fetching the existing list and adding to toDos
        const newTodo = [todo, ...toDos]
        setTodos(newTodo)
        // console.log(...toDos)
        //ivide toDos print aakunnath empty aan atthayath pinneed reredering nadakaathe kodaan ith empy aakunnath
        //console.log(toDos,'todo Blue value')     
    }

         const completedTodo = (id) => {
         let updatedTodos = toDos.map(todo => {
             if (todo.id === id) {
                 todo.isCompleted = !todo.isCompleted
             }
            
             return todo
         })
        setTodos(updatedTodos)
    }

    const deleteToDo = (id) => {
        const removedTheToDo = [...toDos].filter(todo => todo.id !== id)
        setTodos(removedTheToDo)
    };

    const updateTodo = (id, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return
        }
        setTodos(prev => prev.map((todo => (todo.id === id ? newValue : todo))));
    }

 

   
  return (
      <div>

          <ToDoForm onsubmit={addToDo} />
          <Todo todos={toDos} completeTodo={completedTodo} delteToDo={deleteToDo} updateTodo={updateTodo}/>
          
      </div>
      
  )
}

export default ToDoList;