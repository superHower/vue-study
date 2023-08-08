<script setup>

import BillList from "@/components/Bill/BillList.vue";
import BillEcharts from "@/components/Bill/BillEcharts.vue";
</script>

<template>
<div class="Bill">
  <BillList></BillList>
  <BillEcharts></BillEcharts>
</div>
</template>

<style scoped>
.Bill {
  margin: 0;
  padding: 0;
}

</style>