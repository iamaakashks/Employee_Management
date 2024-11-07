import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import Completed from "./Completed";
import Failed from "./Failed";

const TaskList = ({data}) => {
  return (
    <div className="tasklist px-24 py-8 overflow-x-auto mt-8 w-full h-1/2 flex gap-8 flex-nowrap">
          {
            data.tasks.map((item, index)=>{
              if(item.newTask){
                return <NewTask key={index} />
              }
              if(item.failed){
                return <Failed key={index} />
              }
              if(item.active){
                return <AcceptTask key={index} />
              }
              if(item.completed){
                return <Completed key={index} />
              }
            })
          }
    </div>
  )
};

export default TaskList;