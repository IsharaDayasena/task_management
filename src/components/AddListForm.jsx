import React from 'react'

const AddListForm = ({tasks,handleAdd,handleOnChange}) => {
  return (
    <div>
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
      
    </div>
  )
}

export default AddListForm
