import {useState} from 'react';
import {useContext} from 'react';
import TasksContext from '../context/task'

function TaskCreate({task, taskformUpdate, onUpdate}) {
    const {editTaskById, createTask} = useContext(TasksContext);

    const [title, setTitle] = useState(task ? task.title : '');
    const [taskDesc, settaskDesc] = useState(task ? task.taskDesc : '');

    const handleChange = (event) => {
        setTitle(event.target.value);
    }
    const handleTaskChange = (event) => {
        settaskDesc(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if(taskformUpdate){
            onUpdate(task.id, title, taskDesc)
            //editTaskById(task.id,title,taskDesc)
        }
        else{
            createTask(title,taskDesc);
        }
        setTitle('');
        settaskDesc('');
    }
    return ( 
        <div>
            {taskformUpdate ? (<div className="task-update">
            <h3> Lütfen Görevi Düzenleyiniz! </h3>
            <form className="taskForm" >
                <label className="taskLabel"> Başlığı düzenleyiniz </label>
                <input value={title} onChange= {handleChange}className="taskInput"/>
                <label className="taskLabel">  Açıklamayı düzenleyiniz. </label>
                <textarea value={taskDesc} onChange= {handleTaskChange} className="taskInput" rows = {5} />
                <button onClick={handleSubmit} className="createButton update-button">Düzenle</button>
            </form>
        </div>) : (<div className="taskCreate">
            <h3> Lütfen Görev Ekleyiniz </h3>
            <form className="taskForm" >
                <label className="taskLabel"> Görev ismi </label>
                <input value={title} onChange= {handleChange}className="taskInput"/>
                <label className="taskLabel"> Görev açıklaması </label>
                <textarea value={taskDesc} onChange= {handleTaskChange} className="taskInput" rows = {5} />
                <button onClick={handleSubmit} className="createButton">Oluştur</button>
            </form>
        </div>)}
        </div>
        
     );
}

export default TaskCreate;