import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, updateTodo, deleteTodo } from '../store/reducers/todoReducer'
import { MdCreate, MdDelete, MdClose, MdCheck } from 'react-icons/md'
import { useState } from 'react'
import "../css/TodoList.css"

export const TodoList = () => {

  const todos = useSelector(state => state.todo)
  const dispatch = useDispatch()
  const [newText, setNewText] = useState('');
  const [isEdited, setEdited] = useState();
  const [editedText, setEditedText] = useState('');
  const [activeTab, setActiveTab] = useState("All");

  const resetEdited = () => {
    setEditedText(''); setEdited(null);
  }

  return (
    <>
      <div className='todo-filter'>
        <button onClick={() => setActiveTab("All")}>View All</button>
        <span>/</span>
        <button onClick={() => setActiveTab("Active")}>Active</button>
        <span>/</span>
        <button onClick={() => setActiveTab("Complete")}>Completed</button>
      </div>

      <ul className='todo-list'>
        <li className='todo'>
          <input
            style={{margin: "0"}}
            onChange={(e) => setNewText(e.target.value)} value={newText}
            placeholder='New Todo...'
          />
          <button onClick={() => {
              dispatch(addTodo({ id: todos[0] ? todos[0].id + 1 : 0, text: newText, complete: false }));
              setNewText('');
            }}>
            Add
          </button>
        </li>

        {todos.filter(t => ((activeTab === "All") || (activeTab === "Active" && !t.complete) || activeTab === "Complete" && t.complete)).map(todo => {
          return (
            <>
              {todo.id !== isEdited ?
                (
                  <li className={`todo ${todo.complete && 'active'}`}>
                    <button className='round' onClick={() => {dispatch(updateTodo({id: todo.id, text: todo.text, complete: !todo.complete}));}}>
                      <MdCheck color={todo.complete ? "green" : "black"} />
                    </button>
                    <span>{todo.text}</span>
                    <button className='round' onClick={() => { setEditedText(todo.text); setEdited(todo.id); }}><MdCreate /></button>
                    <button className='round' onClick={() => dispatch(deleteTodo(todo.id))}><MdDelete /></button>
                  </li>
                ) :
                (
                  <li className='todo'>
                    <input value={editedText} onChange={(e) => setEditedText(e.target.value)} />
                    <button className='round' onClick={() => { resetEdited() }}>
                      <MdClose />
                    </button>
                    <button className='round' onClick={() => {
                      dispatch(updateTodo({id: todo.id, text: editedText, complete: todo.complete}));
                      resetEdited();}}>
                      <MdCheck />
                    </button>
                  </li>
                )
              }
            </>
          )
        })}

      </ul>
    </>
  )
}
