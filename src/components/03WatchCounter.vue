<template>
    <div>
        <h1>Watch Counter</h1>
        <h2>{{ counter }}</h2>
        <h2>{{ counter2 }}</h2>
        <p>{{ message }}</p>
        <button @click="increment">Incrementrar</button>
        <button @click="decrement">Decrementrar</button>
    </div>
</template>

<script>
import {ref,watch} from 'vue'
export default{
    name: "WatchCounter",
    setup(){
        const counter = ref(0)
        const counter2 = ref(0)
        const message = ref("")
        const increment = () =>{
            counter.value++
        }
        const decrement = () => {
            counter.value--
        }
        watch([counter,counter2], (currentvalue,oldvalue) => {
            console.log('valor Actual', currentvalue)
            console.log('valor Pasado', oldvalue)
            if(counter.value === 5){
                message.value ="El contador es 5"
                counter2.value = 10
            }else{
                message.value = ""
                counter2.value = 0
            }

            if(counter2.value == 10){
                console.log('El counter 2 ha cambiado')
            }
        })

        return {counter,counter2,increment,decrement,message}
    }
}

</script>