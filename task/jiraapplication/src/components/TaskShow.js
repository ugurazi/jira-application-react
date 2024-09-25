import {useState} from 'react';
import TaskCreate from './TaskCreate';
import {useEffect , useContext} from 'react';
import TasksContext from '../context/task'

function TaskShow({task}) {
    const {deleteTaskById,editTaskByID} = useContext(TasksContext);

    const [showEdit, setshowEdit] = useState(false)
    const handleDeleteClick = () => {
        deleteTaskById(task.id)
    };
    const handleEditClick = () => {
        setshowEdit(!showEdit);
    };
    const handleSubmit = (id,updatedTitle,updatedTaskDesc) => {
        setshowEdit(false);
        editTaskByID(id,updatedTitle,updatedTaskDesc)
    }
    return ( 
        <div className="tasksList">
            {showEdit ? (<TaskCreate task= {task} taskformUpdate={true} onUpdate={handleSubmit}/>) : (<div>
                <h3 className="task-title">Göreviniz</h3>
                <p>{task.title}</p>
                <h3 className="task-title" >Yapılacaklar</h3>
                <p>{task.taskDesc}</p>
                <div>
                    <button className="deleteBt" onClick={handleDeleteClick}>Sil</button>
                    <button className="updateBt" onClick={handleEditClick}>Güncelle</button>
                </div>
            </div>
            )}
            
           
        </div>
     );
}

export default TaskShow;