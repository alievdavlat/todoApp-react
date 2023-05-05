import React, { useContext, useState } from 'react'
import './CreateTodos-item.css'
import { Context } from '../../context/Context'
import FormEdit from '../formEdit/FormEdit'


function CreateTodoItem({item}) {
const [todos , setTodos ,hidden,setHidden] = useContext(Context)

  const handleDelet = (id) => {
    setTodos(p => p.filter(item => item.id !== id))
  }

  const handleEdit = (obj) => {
    setTodos(p => p.map(item => item.id ===  obj.id ? obj : item))
  }


  return (
    <div>      
{ 
hidden ? 
  <div className='createTodo-item'>
    <h4>
        {item.title}
    </h4>
    <span>
      {item.date}
    </span>
    <button onClick={ () => handleDelet(item.id)}>
      🪓  chopish
    </button>
    <button onClick={ () => handleEdit(item) }>
      ✏️  edit
    </button>
  </div>
  :
  <FormEdit {...item}/>
}  

  </div>
  )
}

export default CreateTodoItem
