import './App.css'
import { Navbar } from './components/Navbar.jsx'
import { TodoList } from './components/TodoList.jsx'

function App() {

  return (
    <div className="App">
      <Navbar />
      <main>
        <h2>What's needs to be done?</h2>
        <hr></hr>
        <TodoList />  
      </main>
    </div>
  )
}

export default App
