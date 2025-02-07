"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")

  const [mainTask, setMainTask] = useState([])

const submitHandler = (e)=> {
  e.preventDefault();
  setMainTask([...mainTask, {title,desc}]);
  settitle("");
  setdesc("");
  console.log(mainTask);
  
}

const deleteHandler = (i) => {
let copyTask = [...mainTask]
copyTask.splice(i,1);
setMainTask(copyTask);

}
let renderTask = <h2>No Task Available </h2>

if (mainTask.length > 0) {
  renderTask = mainTask.map((t,i) => {
    return (
      <li Key={i} className='flex items-center justify-between mb-3'>
    <div className='flex items-center justify-between mb-5 w-2/3'>
      <h5 className='text-2xl font-semibold'>
        {t.title}
      </h5>
      <h6 className='text-xl font-semibold'>{t.desc}</h6>
    </div>
    <button
    onClick={()=>{
      deleteHandler(i)

    }
    }
     className='bg-red-400 text-white px-4 py-3 font-bold rounded m-5'>Delete</button>
    </li>
    );
  }); 
}

  return (
    <>
    <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>Ranu's todo list</h1>
    <form onSubmit={submitHandler}>
      <input type='text' className='text-2xl border-zinc-800 border-2 m-8 px-4 py-2' placeholder='Enter title here...'
      value={title}
      onChange={(e) => {
        settitle(e.target.value);
        
      }}
      />
      <input type='text' className='text-2xl border-zinc-800 border-2 m-8 px-4 py-2' placeholder='Enter discription here...'
      value={desc}
      onChange={(e) => {
        setdesc(e.target.value)
      }}
      />
      <button className='bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5'>Add Task</button>
      
    </form>
    <hr/>

    <div className='p-8 bg-slate-300 m-5'>
      <ul>{renderTask}</ul>
    </div>
    </>
    
  );
};

export default page
