"use client"
import React, {useEffect,useState} from 'react'
const TaskManager = () => {
    const [tasks,setTasks] = useState([]);
    const [selectedTask,setSelectedTask] = useState(null);
    const [newTask, setNewTask] = useState('');
    const [editTask,setEditTask] = useState('');

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks'));
        if (storedTasks) {
            setTasks(storedTasks);
        }
    },[]);

    useEffect(() => {
        localStorage.setItem('tasks',JSON.stringify(tasks));
    },[tasks]);

    const addTask = () => {
        if(newTask.trim() !== ""){
            const task = {name:newTask,completedSessions:0};
            setTasks([...tasks,task]);
            setNewTask('');
        }
    }

    const deleteTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    }

    const updateTask = () =>{
        

    }
  return (
    
    <div>TaskManager</div>
  )
}

export default TaskManager