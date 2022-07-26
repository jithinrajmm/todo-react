import React ,{ useState,useEffect,useRef } from 'react'

function ToDoForm(props) {
    const [input, setInput] = useState(props.edit? props.edit.text: null)

    const inputfocus = useRef(null);

    useEffect(() => {
        inputfocus.current.focus()
    },[])

    // handle the input changes and set the value to the input
    const handleChange = (event) => {
        setInput(event.target.value)
        
    }

    // hadle the form submit
    const handlesubmit = (event) => {
        event.preventDefault();
        // here i am passing a argument as the object to the parent (toDolist) props
        // the function writtern inside of the parent function and 
        props.onsubmit(
            { id: Math.floor(Math.random() * 10000), text: input,isCompleted:false }
            // input value from the state that stored to the text
        )

        setInput('');
    }
  return (
      <form onSubmit={handlesubmit} className='todo-form'>
          {props.edit ? (
              <>
                  <input
                      placeholder='Update your item'
                      value={input}
                      onChange={handleChange}
                      name='text'
                      ref={inputfocus}
                      className='todo-input edit'
                  />
                  <button onClick={handlesubmit} className='todo-button edit'>
                      Update
                  </button>
              </>
          ) : (
          <><input ref={inputfocus} className='todo-input' type='text' onChange={handleChange} placeholder='ENTER THE DO' value={input} ></input>
          <button className='todo-button'> ADD TO DO</button></>)}

      </form>
      
  )
}

export default ToDoForm