import { createContext, useContext, useEffect, useState } from "react";

const Store = createContext()

export const useSelector = () => useContext(Store)
function StroreContext({ children }) {
    const [todos, setTodos] = useState([])
    const [theme, setTheme] = useState('business')

    function changeTheme(){
        if(theme === 'business'){
            setTheme('light')
        }
        else{
            setTheme('business')
        }
    }

    useEffect(()=>{
        document.documentElement.setAttribute('data-theme', theme)
    },[theme])

    function addTodo(title) {
        const newTodo = {
            id: Date.now(),
            title: title,
            completed: false,
        }

        setTodos([...todos, newTodo])
    }

    function toggleTodo(id){
        const todo = todos.map(item => {
            if(item.id === id ){
                item.completed = !item.completed
            }
        })
    }

    function removeTodo(id){
        const newTodos = todos.filter(item => item.id !== id)
        setTodos(newTodos)
    }

    return (
        <Store.Provider value={{ todos, addTodo, toggleTodo, removeTodo, changeTheme }}>
            {children}
        </Store.Provider>
    )
}
export default StroreContext