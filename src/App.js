import { Route, Routes } from 'react-router-dom';
import './App.css'
import { Form } from './components';
import CreateTodo from './pages/creaeteTodo/CreateTodo';
import { useContext, useState } from 'react';
import { Context } from './context/Context';






function App() {
  const [todos, setTodos, hidden, setHidden] = useContext(Context)
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' exact element={<CreateTodo  />}/>
        <Route path='/create' element={<Form  />} />
      </Routes>
    </div>
  );
}

export default App;
