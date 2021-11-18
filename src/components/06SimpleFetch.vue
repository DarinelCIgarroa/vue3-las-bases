<template>
    <div>
        <h1>Simple Fetch</h1>
        <ul>
            <li v-for="personaje in personajes" :key="personaje.id">{{ personaje.name }}</li>
        </ul>
    </div>
</template>

<script>
import {ref, onMounted} from 'vue'

export default {
    name: "SimpleFetch",
    setup(){
        const personajes = ref(null)

        onMounted( async () => {
            const response = await fetch("https://rickandmortyapi.com/api/character");
            const data = await response.json();
            personajes.value = data.results
        })

        return {personajes}
    }
}
</script>