import React, { useContext } from 'react'
import './CreateTodo.css'
import CreateTodoItem from '../../components/CreateTodos-item/CreateTodoItem'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'

function CreateTodo() {
  const [todos, setTodos,hidden, setHidden] = useContext(Context)
  return (
    <div className='createTodo '>
      <h1>Task Todos ✏️</h1>
      <div className='createTodo-content'>
        { 
        todos.length > 0 ?  

          <div className='createTodo-content__wrapper'>
            {
              todos.map(item => <CreateTodoItem item={item} key={item.id} /> )
            }
          </div>
          : 
          <h2>  No Task 😞</h2>
        }

      </div>
      <button className='crateTodo-btn'><Link to={'/create'}>Create new Todo <span>+</span></Link></button>
    </div>
  )
}

export default CreateTodo
