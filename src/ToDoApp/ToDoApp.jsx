import React from "react";


function ToDoApp(props) {
  return (
    <div className="todoapp">
      <h1>Things to do</h1>
      <form >
        <input type="text" name="text" id="new-todo-input" className="input"/>
        <button type="submit" className="btn btn-primary">add</button>
      </form>
      <div className="filters">
        <button type="button" className="btn toggle-btn">active</button>
      </div>
      <h2>tasks remaining</h2>
      <ul>
        <li>
          <div>
            <input id="todo-0" type="checkbox" defaultChecked={true}/>
            <label htmlFor="todo-0">
              Eat
            </label>
          </div>
        </li>
      </ul>
    </div>
  )
}