import './App.css';
import Overview from './components/Overview';
import { useState } from 'react';
import uniqid from "uniqid";

function App() {

  const [task, setTask] = useState({
    text: '',
    order: 1,
    id: uniqid()
  });
  const [tasks, setTasks] = useState([]);

  // order remains regardless of how much input changes
  // order changes its value only when form is submitted or an item deleted
  const inputChangeHandler = (e) =>{
    setTask((prevTask) => ({
      ...prevTask, 
      text: e.target.value
    }));
  } 

  const submitHandler = (e) => {
    e.preventDefault();
    // Avoid setTask right before setTasks whose value depends on Task !!!
    setTasks((prevTasks) => [...prevTasks, task]);
    setTask((prevTask) => ({
      text: '',
      order: prevTask.order + 1,
      id: uniqid()
    }))
  }

  const deleteHandler = (e) => {
    const id = e.target.parentNode.id;
    let deletedAt;
    // Remove target item
    let reducedList = tasks
      .filter((task, index) => {  
        if(task.id == id){
          deletedAt = index;
          return false;
        }
        return true;
      })
      .map((item, index) => {
        if(index >= deletedAt) return {...item, order: item.order -1};
        else return item;
      })
    
    // Update tasks
    setTasks([...reducedList]);

    // clear text field, decrease order after item deleted
    setTask({
      text: '',
      order: task.order - 1,
      id: uniqid()
    })
  }

  return (
      <>
          <form onSubmit={submitHandler}>
              <input type="text" id="taskInput" value={task.text} onChange={inputChangeHandler} placeholder="Create a task"></input>
              <button type="submit">Submit</button>
          </form>
          <Overview tasks={tasks} handleDelete={deleteHandler}/>
      </>
  )
}

export default App;
