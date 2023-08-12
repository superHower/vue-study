<template>
  <div class="App">
<!--    小兔鲜    -->
    <XtxComponents></XtxComponents>
<!--    小黑记事本   -->
    <TodoComponents></TodoComponents>
<!--    loading-->
    <BillComponents></BillComponents>
<!--    Slot-->
    <SlotComponents></SlotComponents>
<!--    Music-->
    <MusicComponents></MusicComponents>
<!--    interview-->
    <InterviewComponents></InterviewComponents>
  </div>
</template>

<script>
import XtxComponents from "@/components/XtxComponents.vue";
import TodoComponents from "@/components/TodoComponents.vue";
import BillComponents from "@/components/BillComponents.vue";
import SlotComponents from "@/components/SlotComponents.vue";
import MusicComponents from "@/components/MusicComponents.vue";
import InterviewComponents from "@/components/interviewComponents.vue";


export default {
  name: 'App',
  components: {
    XtxComponents,
    TodoComponents,
    BillComponents,
    SlotComponents,
    MusicComponents,
    InterviewComponents,
  }
}
</script>

<style>
.App {
  padding: 0;
  margin: 0;
}

</style>





