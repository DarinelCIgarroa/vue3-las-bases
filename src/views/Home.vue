<template>
  <div class="home">
    <emits-event />
    <hr />
    <profile-with-props name="Darinel Cigarroa" age="24" />
    <hr />
    <simple-fetch />
    <hr />
    <todo-list />
    <hr />
    <simple-counter-composition-api />
    <hr />
    <watch-counter />
    <hr />
    <reactive-counter />
    <hr />
    <simple-counter />
    <hr />
    <hello-world />
  </div>
</template>

<script>
import HelloWorld from "@/components/00HelloWorld.vue";
import SimpleCounter from "@/components/01SimpleCounter.vue";
import ReactiveCounter from "@/components/02ReactiveCounter.vue";
import WatchCounter from "@/components/03WatchCounter.vue";
import SimpleCounterCompositionApi from "@/components/04SimpleCounterCompositionApi.vue";
import TodoList from "@/components/05TodoList.vue";
import SimpleFetch from "@/components/06SimpleFetch.vue";
import ProfileWithProps from "@/components/07ProfileWithProps.vue";
import EmitsEvent from "@/components/08EmitsEvent.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    SimpleCounter,
    ReactiveCounter,
    WatchCounter,
    SimpleCounterCompositionApi,
    TodoList,
    SimpleFetch,
    ProfileWithProps,
    EmitsEvent,
  },
};
</script>
<style>
button {
  margin: 0px 5px;
}
</style>