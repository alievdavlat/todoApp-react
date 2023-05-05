import { createContext , useState } from "react";

export const Context = createContext()


const ContextProvider = ({children}) => {
  const [todos , setTodos] = useState([])
  const [hidden, setHidden] = useState(true)


  return(
    <Context.Provider value={[todos, setTodos, hidden, setHidden]}>
      {children}
    </Context.Provider>
  )
}

export default ContextProvider