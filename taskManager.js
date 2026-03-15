// create a function to handle the tasks - add ,edit, delete,list,status
function createTaskManager(){
    let tasks =[];
    return{
        addTask(name,status="ToDo",deadline){
            const newTask = {
                id: Date.now(),
                name: name,
                status: status,
                deadline: deadline


            };
            tasks.push(newTask); // added new task to my private array tasks
            return newTask;
        },
        addTasks(...items){

                items.forEach(item => addTask(item));
        },

                    
        listTasks() {
            return [...tasks];
        },
        removeTask(id){// create a new array without the removed task
            tasks = tasks.filter(task => task.id !== id);
         
        },  
        saveTasks(callback){
            console.log("Saving to 'server'...");
            setTimeout(() => {
                callback(tasks); 
            }, 1000);
       
        }          

    };


};
