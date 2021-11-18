<template>
    <div>
        <h1>04 simple couter composition Api</h1>
        <h2>{{ counter }}</h2>
        <h3>{{ counterComputed }}</h3>
        <button @click="increment">Incrementrar</button>
        <button @click="decrement">Decrementrar</button>
    </div>
</template>

<script>
import useCounter from '@/composables/useCounter'
export default {
    name: "SimpleCounterCompositionApi",
    setup(){
        const { counter,counterComputed, increment,decrement } = useCounter()
        return { counter,counterComputed, increment,decrement } 
    }
}
</script>

