import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [tasks,setTasks] = useState({
    title: "",
    date: "",
    status: "",
    priority: false,
  });

  const[taskList,setTasklist] = useState([])

  // console.log(tasks);
  // const handleOnChange = (e) =>{
  //   if(e.target.name === "priority")
  //   {setTasks({tasks, [e.target.name]: e.target.checked});}
  //   else{
  //     setTasks({tasks, [e.target.name]: e.target.value});
  //   }
  // };

  const handleOnChange = (e) => {
    if (e.target.name === "priority") {
      setTasks((prevTasks) => ({
        ...prevTasks,
        [e.target.name]: e.target.checked,
      }));
    } else {
      setTasks((prevTasks) => ({
        ...prevTasks,
        [e.target.name]: e.target.value,
      }));
    }
  };
  

  // const handleAdd = () =>{
  //   // const sampleList = [...taskList];
  //   // sampleList.push(tasks);
  //   // setTasklist(sampleList);
  //   setTasklist([taskList,tasks]);

  // }
  const handleAdd = () => {
    setTasklist([...taskList, tasks]);
    setTasks({
      title: "",
      date: "",
      status: false,
      priority: false,
    });
  };

  const handleDelete = (id) => {
    const newList = taskList.filter((task,idx) => idx !== id);
    setTasklist(newList);
  }

//   const handleEdit = (task,id) => {
//     const newTask = taskList.filter((task,idx) => idx !== id)
//     setTasks(newTask[0]);
// }
const handleEdit = (task, id) => {
  const updatedList = taskList.map((t, idx) => (idx === id ? task : t));
  setTasklist(updatedList);
  setTasks(task); // Set the current task for editing
  handleDelete(id);
};
 const handleState = (idx) =>
 {
  const newList = taskList.map((item, index) => {
    if (index == idx){
      return{
        ...item,
        status: !item.status,
      };
    }
    return item;

    
  });
  setTasklist(newList);
 }
  


  return (
    <div className="App px-4">
      <div className='h-screen w-auto bg-blue-100 px-6'>
        <div className='flex items-center gap-16'>
            <div className='flex flex-col'>
              <label>Task</label>
                <input 
                  name="title"
                  type='text'
                  onChange={(e)=> handleOnChange(e)} //onBlur use klama type krna eka console eke ewelem wdinne na eken ayn unama wdinw 
                  value={tasks.title}
                  placeholder='task'/>
              </div>
              <div className='flex flex-col'>
              <label>Date</label>
                <input 
                  name="date"
                  type='date'
                  onChange={(e)=> handleOnChange(e)} //onBlur use klama type krna eka console eke ewelem wdinne na eken ayn unama wdinw 
                  value={tasks.date}
                  placeholder='12/12/2024'/>
              </div>
              <div className='flex flex-col'>
              <label>Priority</label>
                <input 
                  name="priority"
                  type='checkbox'
                  onChange={(e)=> handleOnChange(e)} //onBlur use klama type krna eka console eke ewelem wdinne na eken ayn unama wdinw 
                  checked={tasks.priority}
                  />
              </div>
             

              <button className='bg-blue-400 px-4 py-2 min-w-[6rem] rounded'
                onClick={()=> handleAdd()}
              >Add</button>

        </div>
        <div className="mt-4">
          {taskList.map((task, idx) => (
            <div key={idx} className='w-full flex items-center gap-2  py-4 px-3 bg-sky-300 rounded'>
              <div className='text-xl w-[300px]'>{task.title}</div>
              <div className='text-base w-[150px]'>{task.date}</div>
              <div className='text-base w-[60px]'>{task.priority ? "P":"N"}</div>
              <div>
                <input type = "checkbox" onChange={() => handleState(idx)}/>
              </div>
              <button className='text-blue-600 font-bold'onClick={() => handleEdit(task,idx)}>Edit</button>
              <button className='text-red-600 font-bold' onClick={() => handleDelete(idx)}>Delete</button>
            </div>

          ))}
        </div>

      </div>
    

    </div>
  );
}

export default App;
