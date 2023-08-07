<script>

import XtxHeaderNav from "@/components/Xtx/XtxHeaderNav.vue";
import XtxTopic from "@/components/Xtx/XtxTopic.vue";
import XtxNewGoods from "@/components/Xtx/XtxNewGoods.vue";
import XtxFooter from "@/components/Xtx/XtxFooter.vue";
import XtxShortCut from "@/components/Xtx/XtxShortCut.vue";
import XtxHotBrand from "@/components/Xtx/XtxHotBrand.vue";
import XtxBanner from "@/components/Xtx/XtxBanner.vue";

export default {
  name: 'XtxComponents',
  components: {
    XtxHeaderNav,
    XtxTopic,
    XtxNewGoods,
    XtxFooter,
    XtxBanner,
    XtxHotBrand,
    XtxShortCut
  }
}
</script>

<template>
  <div class="Xtx">
    <!--    快捷链接-->
    <XtxShortCut></XtxShortCut>
    <!--    顶部导航-->
    <XtxHeaderNav></XtxHeaderNav>
    <!--    轮播区域-->
    <XtxBanner></XtxBanner>
    <!--    新鲜好物-->
    <XtxNewGoods></XtxNewGoods>
    <!--    热门品牌-->
    <XtxHotBrand></XtxHotBrand>
    <!--    最新专题-->
    <XtxTopic></XtxTopic>
    <!--    版权底部-->
    <XtxFooter></XtxFooter>
  </div>

</template>

<style scoped>
.Xtx {
  margin: 0;
  padding: 0;
}
</style>