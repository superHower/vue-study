<template>
  <div class="App">
<!--    小兔鲜    -->
    <XtxComponents></XtxComponents>
<!--    小黑记事本头   -->
    <TodoComponents></TodoComponents>
    <BillComponents></BillComponents>
  </div>
</template>

<script>
import XtxComponents from "@/components/XtxComponents.vue";
import TodoComponents from "@/components/TodoComponents.vue";
import BillComponents from "@/components/BillComponents.vue";

export default {
  name: 'App',
  components: {
    BillComponents,
    XtxComponents,
    TodoComponents
  }
}
</script>

<style>
.App {
  padding: 0;
  margin: 0;
}

</style>





