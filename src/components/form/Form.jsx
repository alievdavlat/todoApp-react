import React, { useContext, useEffect, useState } from 'react'
import './Form.css'
import { Link, Navigate } from 'react-router-dom'
import { Context } from '../../context/Context'


const hours =  new Date().getHours()  < 10 ? '0' + new Date().getHours() : new Date().getHours()
const minutes = new Date().getMinutes()  < 10 ? '0' +  new Date().getMinutes() :  new Date().getMinutes()  
const fulDate = new Date().toDateString()  



function Form() {
  const [todos , setTodos, hidden,setHidden] = useContext(Context)
  const [value ,setValue] = useState({title: '', date:'', id:null})

  const changeValue = (e) => {
    setValue(p => ({...p,title: e.target.value,date:`${fulDate} , ${hours} : ${minutes}`, id: Date.now()}))
  }

  const submitHandle = (e) => {
    e.preventDefault()
    setTodos(prev => [...prev, value ])
    setValue({title:'', date:'', id:null})
   
  }

  return (
    <form className='create-form' onSubmit={submitHandle}>
      <h1 className='create-form__title'>Create New Task</h1>
      <div className='create-from__input-wrapper'>
        <input type="text"  className='create-from__input' placeholder='Enter Todo...' value={value.title} onChange={changeValue}  required autoFocus />
        <button className='create-form__btn'>Create</button>
        <button className='create-form__btn cancel' type='button'><Link to={'/'}>Cancel</Link></button>
      </div>
    </form>
  )
}

export default Form
