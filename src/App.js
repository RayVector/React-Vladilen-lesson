import React, {useEffect} from 'react';
import Context from "./context";
import TodoList from "./components/Todo/TodoList";
import Loader from "./components/Loader";
import Modal from "./components/Modals/Modal";

const AddTodo = React.lazy(() => {
  return new Promise((resolve => {
    setTimeout(() => {
      resolve(import('./components/Todo/AddTodo'))
    }, 3000)
  }))
});

function App() {

  const [todoList, setTodoList] = React.useState([]);
  const [loading, setLoading] = React.useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(response => response.json())
    .then(todoList => {
      setTimeout(() => {
        setTodoList(todoList)
        setLoading(false)
      }, 2000)
    })
  }, [])

  function toggleTodo(id) {
    setTodoList(todoList.map(todo => {
      if (todo.id === id) todo.completed = !todo.completed
      return todo
    }))
  }

  function removeTodo(id) {
    setTodoList(todoList.filter(todo => todo.id !== id))
  }

  function addTodo(title) {
    setTodoList(todoList.concat([{
      title,
      id: Date.now(),
      completed: false
    }]))
  }

  return (
    <Context.Provider value={{removeTodo}}>
      <div className='wrapper'>
        <h1>Todo:</h1>

        <Modal/>

        <React.Suspense fallback={<p>Loading...</p>}>
          <AddTodo onCreate={addTodo}/>
        </React.Suspense>

        {loading && <Loader/>}

        {todoList.length ?
          (<TodoList todoList={todoList} onToggle={toggleTodo}/>)
          :
          (loading ? null : (<p>List is empty</p>))
        }
      </div>
    </Context.Provider>
  )
}

export default App;
