import { reactive, toRefs } from "vue";

export default function(){
    const data = reactive({
        tasks:[],
        task: null
    })
    const addTask = ( () => {
        if(data.task.length >= 1){
            data.tasks.push(data.task)
        }
        data.task = null
    })
    const deleteTask = ( (index) => {
        data.tasks.splice(index, 1)
    }) 

    return { ...toRefs(data), addTask, deleteTask}
    
}
