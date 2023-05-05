import React, { useState,useContext } from "react";
import "./FormEdit.css";
import { Link } from "react-router-dom";
import { Context } from '../../context/Context'


const hours =  new Date().getHours()  < 10 ? '0' + new Date().getHours() : new Date().getHours()
const minutes = new Date().getMinutes()  < 10 ? '0' +  new Date().getMinutes() :  new Date().getMinutes()  
const fulDate = new Date().toDateString()  



function FormEdit({ title, date, id }) {
  const [editValue, setEditValue] = useState({ title, date, id });
  const [todos , setTodos ,hidden,setHidden] = useContext(Context)

  
  const changeValue = (e) => {
    setEditValue(p => ({...p,title: e.target.value,date:`${fulDate} , ${hours} : ${minutes}`, id: Date.now()}))
  };

  
  
  
  const handleSubmit = (e) => {
    e.preventDefault()
      // handleEdit(editValue)
      setHidden(true)
  }



  return (
    <form className="create-form" onSubmit={handleSubmit}>
      <h1 className="create-form__title">Create New Task</h1>
      <div className="create-from__input-wrapper">
        <input
          type="text"
          className="create-from__input"
          placeholder="Enter Todo..."
          value={editValue.title}
          onChange={changeValue}
         
        />
        <button className="create-form__btn">Create</button>
        <button className="create-form__btn cancel" type="button">
          <Link to={"/"}>Cancel</Link>
        </button>
      </div>
    </form>
  );

}

export default FormEdit;
