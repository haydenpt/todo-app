import { FaTimes, FaStar } from 'react-icons/fa'


const Task = ({ task, deleteTask, starTask }) => {

    return (
        <div className='task' >
            <h3>
                
                {task.text} 
                <FaTimes 
                    style={{ color:'red', cursor:'pointer'}}
                    onClick={() => deleteTask(task.id)}
                />
            </h3>
            <p>{`${task.date} at ${task.time}`}</p>
            
            {(task.starred===true) ? <FaStar  style={{ color:'steelblue'}}/> : <></>}
            
        </div>
    )
}

export default Task
