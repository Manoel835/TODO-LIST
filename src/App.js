import './App.css';
import React, {useState} from 'react';
import {TiDelete} from 'react-icons/ti'

const App = () => {
  const ESCAPE_KEY = 27;
  const ENTER_KEY = 13;

const initialTodos= [
  { id:1, title: "Estudar React", checked: false},
  { id:2, title: "Estudar inglês", checked: true},
  { id:3, title: "Tocar guitarra", checked: false},
];

  const [todos, ] = useState(initialTodos);
  const [value, setValue] = useState("");

  const submit = () => {
    console.log("submit", value);
    erase();
  }

  const onChange = (event) =>{
    setValue(event.target.value);
  }

  const erase = () => {
    setValue("");
  }

  const onKeyDown = (event) =>{
    if(event.which === ENTER_KEY){
      submit();
    } else if(event.which === ESCAPE_KEY){
      erase()
    }
  }
  return (
    <section id='app' className='container'>
      <header>
        <h1 className='title'>Todo</h1>
      </header>
      <section className='main'>
        <input
        className='new-todo'
        placeholder='o que precisa ser feito ?'
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        />
        <ul className='todo-list'>
          {
            todos.map((todo) =>(
              <li key={todo.id.toString()}>
                <span className='todo'>{todo.title}</span>
                <button className='remove'>
                  <TiDelete size={28}/>
                </button>
              </li>
            ))
          }
        </ul>
      </section>
    </section>
  );
}

export default App;
