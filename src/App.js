import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [tasks,setTasks] = useState({
    title: "",
    date: "",
    status: "",
    priority: "",
  });

  console.log(tasks);
  const handleOnChange = (e) =>{
    setTasks({...tasks, [e.trget.name]: e.target.value});
    
  };

  return (
    <div className="App">
      <div className='h-screen w-auto bg-red-300'>
        <div className='flex items-center justify-between'>
          <div className='flex flex-col'>
            <label>Task</label>
          <input name="title"
           onChange={(e)=> handleOnChange(e)} //onBlur use klama type krna eka console eke ewelem wdinne na eken ayn unama wdinw 
           value={tasks.title}
           placeholder='task'/>

          </div>
        

        </div>

      </div>
    

    </div>
  );
}

export default App;
