<template>
    <div><h1>{{ message }}</h1></div>
    <label for="message">Mensaje:</label> <br>
    <input :id="message" type="text" v-model="message">
</template>

<script>
import {ref} from 'vue'
export default {
    name:'HelloWorld',
    setup(){
        const message = ref("Helloworld")
        return {message}
    }
}
</script>