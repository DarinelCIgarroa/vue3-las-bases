import {ref,computed} from 'vue'

export default function(){
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
    return {
        counter,
        increment,
        decrement,
        counterComputed
    } 
}