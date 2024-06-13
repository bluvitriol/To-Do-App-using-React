"use client"
import React, { useState } from 'react';

function Page() {
    const [title, setTitle] = useState("");
    const [mainTask, setMainTask] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentTaskIndex, setCurrentTaskIndex] = useState(null);

    const submitHandler = (e) => {
        e.preventDefault();
        if (isEditing) {
            let updatedTasks = [...mainTask];
            updatedTasks[currentTaskIndex].title = title;
            setMainTask(updatedTasks);
            setIsEditing(false);
            setCurrentTaskIndex(null);
        } else {
            setMainTask([...mainTask, { title, done: false }]);
        }
        setTitle("");
    };

    const deleteHandler = (i) => {
        let copyTask = [...mainTask];
        copyTask.splice(i, 1);
        setMainTask(copyTask);
    };

    const markAsDoneHandler = (i) => {
        let updatedTasks = [...mainTask];
        updatedTasks[i].done = !updatedTasks[i].done;
        setMainTask(updatedTasks);
    };

    const editHandler = (i) => {
        setTitle(mainTask[i].title);
        setIsEditing(true);
        setCurrentTaskIndex(i);
    };

    let renderTask = <h2>No Task Available</h2>;
    if (mainTask.length > 0) {
        renderTask = mainTask.map((t, i) => {
            return (
                <li key={i}>
                    <div className='items-center mb-5 flex justify-around gap-3'>
                        <h5 className={`text-bold ${t.done ? 'line-through' : ''}`}>{t.title}</h5>
                        <div className='flex justify-around gap-2'>
                            <button 
                                onClick={() => markAsDoneHandler(i)} 
                                className={`p-2 rounded ${t.done ? 'bg-blue-400' : 'bg-green-400'} text-white text-bold`}
                            >
                                {t.done ? 'Undo' : 'Mark as Done'}
                            </button>
                            <button 
                                onClick={() => editHandler(i)} 
                                className="bg-zinc-400 text-white text-bold p-2 rounded"
                            >
                                Edit
                            </button>
                            <button 
                                onClick={() => deleteHandler(i)} 
                                className="bg-red-400 text-white text-bold p-2 rounded"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </li>
            );
        });
    }

    return (
        <>
            <h1 className="bg-black text-white p-5 text-5xl font-bold text-center">To-Do List</h1>
            <form onSubmit={submitHandler} className="text-center">
                <input 
                    className="border-zinc-600 border-2 rounded m-5 p-2" 
                    type="text" 
                    placeholder='Enter task here'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} 
                />
                <button className="bg-black text-white p-2 rounded">{isEditing ? 'Update Task' : 'Add Task'}</button>
            </form>

            <hr />
            <div className='p-8'>
                <ul>{renderTask}</ul>
            </div>
        </>
    );
}

export default Page;

// import React, { useState } from 'react'

// function page() {
//     const [title, settitle] = useState("");    
//     // const[first,setfirst]=useState(second)
//     const [mainTask, setMainTask] = useState([]);
//     const submitHandler = (e) => {
//         e.preventDefault();    
//         setMainTask([...mainTask, { title }]);
//         settitle("");

//     };

//     const deleteHandler=(i)=>{
//         let copytask=[...mainTask]    
//         copytask.splice(i,1)
//         setMainTask(copytask)
//     }

//     let renderTask = <h2>No Task Available</h2>;
//     if(mainTask.length>0){
//     renderTask = mainTask.map((t,i) => {
//         return (
//             <li key={i}>    
//                 <div className='items-center mb-5 flex justify-around gap-3'>
//                     <h5 className='text-bold'>{t.title}</h5>
//                     <div className='flex justify-around gap-2'>
//                     <button className="bg-green-400 text-white text-bold p-2 rounded">Mark as Done</button>
//                     <button className="bg-zinc-400 text-white text-bold p-2 rounded">Edit</button>
//                     <button onClick={()=>{
//                         deleteHandler(i)    
//                     }
//                     } className="bg-red-400 text-white text-bold p-2 rounded">Delete</button>
//                     </div>
//                 </div>
//             </li>
//         );
//     });}
//     return (
//         <>    
//             <h1 className="bg-black text-white p-5 text-5xl font-bold text-center">To-Do List</h1>
//             <form onSubmit={submitHandler} className="text-center">
//                 <input className="border-zinc-600 border-2 rounded m-5 p-2" type="text" placeholder='Enter task here'
//                     value={title}
//                     onChange={(e) => {
//                         settitle(e.target.value)    
//                     }} />

//                 <button className="bg-black text-white p-2 rounded">Add Task</button>
//             </form>

//             <hr />
//             <div className='p-8'>
//                 <ul>{renderTask}</ul>
//             </div>





//         </>
//     )
// }

// export default page

