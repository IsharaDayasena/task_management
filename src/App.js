
import './App.css';
import { useState } from 'react';
import Todolist from './components/Todolist';
import AddListForm from './components/AddListForm';

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
    if(tasks.title !== "" && tasks.date !== "" ){
    setTasklist([...taskList, tasks]);
    setTasks({
      title: "",
      date: "",
      status: false,
      priority: false,
    });}
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
    if (index === idx){
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


      <AddListForm
          tasks={tasks}
          handleAdd={handleAdd}
          handleOnChange={handleOnChange}
          />
     
        <Todolist
          taskList={taskList}
          handleDelete = {handleDelete}
          handleEdit={handleEdit}
          handleState={handleState}
        
        />
  

      </div>
    

    </div>
  );
}

export default App;
