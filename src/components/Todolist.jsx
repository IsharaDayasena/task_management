import React from 'react'

const Todolist = ({taskList,handleDelete,handleEdit,handleState}) => {
  return (
    <div className="mt-4 flex flex-col gap-2">
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
  )
}

export default Todolist;
