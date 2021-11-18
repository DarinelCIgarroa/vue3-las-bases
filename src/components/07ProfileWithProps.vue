<template>
    <div>
        <h1>Profile with Props</h1>
        <h2>Nombre: {{ name }} Edad: {{ age }}</h2>
    </div>
</template>

<script>


export default({
    name: "ProfileWithProps",
    props:{
        name: String,
        age: Number
    },
    setup(props) {
        console.log(props.name)
        console.log(props.age)
    },
})
</script>
