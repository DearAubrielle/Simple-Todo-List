import { useState } from 'react'

interface Todo {
  id: number
  text: string
  completed: boolean
}
const initialTodos: Todo[] = [
  { id: 1, text: 'Learn TypeScript', completed: false },
  { id: 2, text: 'Build a Todo App', completed: false },
]

export default function Task() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos)
  
  function handleNewTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const inputValue = formData.get('newTodo') as string;
    
    if (!inputValue.trim()) return; // Don't add empty todos
    
    const newTask: Todo = { 
      id: Date.now(), // Better ID generation
      text: inputValue.trim(), 
      completed: false 
    };
    setTodos([...todos, newTask]);
    form.reset(); // Clear form after submission
  }
  return (

    <div style={{padding: 0, border: '1px solid black'}}>
      <div style={{margin: 0, padding: 0}}>
        <h1 style={{margin: 0, padding: 0, marginBlockStart: 0}}>Todo List</h1>
      </div>
      <div style={{margin: '1rem', color: 'red', border: '1px solid black', padding: '0'}}>
        <h1 style={{margin: 0}}>Another Todo List</h1>
        <form onSubmit={handleNewTask}>
        <input name="newTodo" placeholder="Enter Your New Task" />
        <button type="submit">New Todo</button>
        </form>
        
  {todos.map(todo => (
    <div key={todo.id}>
      <input 
        type="checkbox" 
        id={`todo-${todo.id}`} 
        name={`todo-${todo.id}`} 
        checked={todo.completed} 
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
          setTodos(todos.map(t => 
            t.id === todo.id ? { ...t, completed: e.target.checked } : t
          ))
        } 
      />
      <label 
        htmlFor={`todo-${todo.id}`} 
        style={{ 
          textDecoration: todo.completed ? 'line-through' : 'none', 
          color: todo.completed ? 'gray' : 'black' 
        }}
      >
        {todo.text}
      </label>
    </div>
  ))}
  </div>
  </div>
    
  )
}