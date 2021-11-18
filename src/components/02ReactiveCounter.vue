<template>
    <div>
        <h1>Reactive Counter</h1>
        <h2>{{ counter }}</h2>
        <h3>{{ counterComputed }} </h3>
        <button @click="incrementar">Incrementar</button>
        <button @click="decrementar">Decrementar</button>
    </div>
</template>

<script>
import {reactive,computed,toRefs} from 'vue'

export default{
    name: 'ReactiveCounter',
    setup(){
        const data = reactive({
            counter: 0,
            counterComputed: computed(()=>{
                return `El valor del counter es: ${data.counter}`
            })
        })
        const incrementar = () =>{
            data.counter++
        }
        const decrementar = () =>{
            data.counter--
        }

        return { ...toRefs(data),incrementar,decrementar }
    }
}
</script>

<style>
button{
    margin: 0px 5px;
}
</style>