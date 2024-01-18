import React from 'react'

const Todolist = ({taskList,handleDelete,handleEdit,handleState}) => {
  return (
    <div className="transition-all duration-300 delay-75 ease-in-ot mt-4 flex flex-col gap-2 w-full max-w-[800px]">
          {taskList?.map((task, idx) => (
            <div key={idx} className='w-full flex items-center gap-2  py-4 px-3 bg-sky-300 rounded'>
              <div className='text-xl w-[300px]'>{task.title}</div>
              <div className='text-base w-[150px]'>{task.date}</div>
              <div className='text-base w-[60px]'>{task.priority ? "P":"N"}</div>
              <div>
                <input type = "checkbox" onChange={() => handleState(idx)}/>
              </div>
              <button className='text-blue-600 font-bold w-20  hover:text-blue-800 transition-colors duration-300 ease-linear'onClick={() => handleEdit(task,idx)}>Edit</button>
              <button className='text-red-600 font-bold w-20 hover:text-red-800 transition-colors duration-300 ease-linear' onClick={() => handleDelete(idx)}>Delete</button>
            </div>

          ))}
        </div>
  )
}

export default Todolist;
