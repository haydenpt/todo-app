import { useState } from "react"

const AddTask = ({ addTask }) => {
    const [text, setText] = useState('')
    const [time, setTime] = useState('')
    const [date, setDate] = useState('')
    const [starred, setStar] = useState(false)

    const onSubmit = (event) => {
        event.preventDefault()

        if(!text) {
            alert('Please add a task name')
            return
        }
        if(!time) {
            alert('Please add a time')
            return
        }
        if(!date) {
            alert('Please add a date')
            return
        }

        addTask({ text, time, date, starred }) 

        setText('')
        setTime('')
        setDate('')
        setStar(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task Name</label>
                <input type='text' 
                        placeholder='Enter task name' 
                        value={text} 
                        onChange={(event) => setText(event.target.value)}></input>
            </div>
            <div className='form-control'>
                <label>Time</label>
                <input type='time' 
                        value={time} 
                        onChange={(event) => setTime(event.target.value)}></input>
            </div>
            <div className='form-control'>
                <label>Date</label>
                <input type='date' 
                        value={date} 
                        onChange={(event) => setDate(event.target.value)}></input>
            </div>
            <div className='form-control-check'>
                <label>Mark as Important</label>
                <input type='checkbox' 
                        checked={starred}
                        value={starred} 
                        onChange={(event) => setStar(event.currentTarget.checked)}></input>
            </div>
            <br />
            <input type='submit' value='Add Task' className='btn btn-block'/>
        </form>
    )
}

export default AddTask
