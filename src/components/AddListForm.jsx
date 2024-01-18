import React from 'react'

const AddListForm = ({tasks,handleAdd,handleOnChange}) => {
    const formElement = [
        {
            label: "Task",
            name: "title",
            value:tasks.title,
            placeholder:"task",
            type: "text",
        },
        {
            label: "Date",
            name: "date",
            value:tasks.date,
            placeholder:"12/12/2024",
            type:"date",
        },
        {
            label: "Priority",
            name: "priority",
            value:tasks.priority,
            placeholder:"task",
            type: "checkbox",
        },
    ];
  return (
    <div>
        <div className='flex items-center gap-16  w-full max-w-[800px]'>
          
           {formElement.map((formItem, id) => (<div className='flex flex-col'>
            <label>{formItem.label}</label>
              <input 
                name={formItem.name}
                type={formItem.type}
                onChange={(e)=> handleOnChange(e)} //onBlur use klama type krna eka console eke ewelem wdinne na eken ayn unama wdinw 
                value={formItem.value}
                placeholder={tasks.placeholder}/>
            </div>))}


            {/* <div className='flex flex-col'>
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
            </div> */}
            <button className='bg-blue-400 hover:bg-green-400 transition-colors duration-300 ease-linear px-4 py-2 min-w-[6rem] rounded'
              onClick={()=> handleAdd()}
            >Add</button>
      
      </div>
      
    </div>
  )
}

export default AddListForm
