<template>
    <div>
        <h2>Contador Sencillo</h2>
        <h2>{{ counter }}</h2>
        <h3>{{ counterComputed }}</h3>
        <button @click="increment">Incrementrar</button>
        <button @click="decrement">Decrementrar</button>
    </div>
</template>

<script>
import {computed, ref} from 'vue'

export default({
    name: 'SimpleCounter',
    setup() {
        const counter = ref(0)
        const increment = () =>{
            counter.value++
        }
        const decrement = () => {
            counter.value--
        }
        const counterComputed = computed(   ()  =>{
            return `El valor de counter es: ${counter.value}`
        })

        return{
            counter,
            increment,
            decrement,
            counterComputed
        }        
    },
})
</script>
