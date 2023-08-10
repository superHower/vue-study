<template>
  <div class="table-case">

    <MyTable :data="goods"> <!--    向MyTable组件传数据goods-->

      <template #head>           <!--  head插槽位置  -->
        <th>编号</th>
        <th>名称</th>
        <th>图片</th>
        <th width="100px">标签</th>
      </template>

      <template #body="{ item, index }">   <!--  body插槽位置, 接收子组件发送的数据， 两个对象  -->
        <td> {{ index + 1 }} </td>
        <td> {{ item.name }} </td>
        <td> <img :src="item.picture"/> </td>
        <td>
          <MyTag v-model="item.tag"></MyTag> <!--   向MyTag组件传递数据item.tag   -->
        </td>
      </template>

    </MyTable>

    <table class="my-table">
      <thead>
      <tr>
        <th>编号</th>
        <th>名称</th>
        <th>图片</th>
        <th width="100px">标签</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in goods" :key="item.id">
        <td>{{ index+1 }}</td>
        <td>{{ item.name}}</td>
        <td>
          <img :src="item.picture"  alt=""/>
        </td>
        <td>
          <div class="my-tag">
            <div class="text">
              {{ item.tag }}
            </div>
          </div>
        </td>
      </tr>

      </tbody>
    </table>
  </div>
</template>

<script>
import MyTag from "@/components/Slot/MyTag.vue";
import MyTable from "@/components/Slot/MyTable.vue";
export default {
  name: 'TableCase',
  components: {
    MyTag,
    MyTable
  },
  data() {
    return {
      goods: [
        {
          id: 101,
          picture:
              'https://yanxuan-item.nosdn.127.net/f8c37ffa41ab1eb84bff499e1f6acfc7.jpg',
          name: '梨皮朱泥三绝清代小品壶经典款紫砂壶',
          tag: '茶具',
        },
        {
          id: 102,
          picture:
              'https://yanxuan-item.nosdn.127.net/221317c85274a188174352474b859d7b.jpg',
          name: '全防水HABU旋钮牛皮户外徒步鞋山宁泰抗菌',
          tag: '男鞋',
        },
        {
          id: 103,
          picture:
              'https://yanxuan-item.nosdn.127.net/cd4b840751ef4f7505c85004f0bebcb5.png',
          name: '毛茸茸小熊出没，儿童羊羔绒背心73-90cm',
          tag: '儿童服饰',
        },
        {
          id: 104,
          picture:
              'https://yanxuan-item.nosdn.127.net/56eb25a38d7a630e76a608a9360eec6b.jpg',
          name: '基础百搭，儿童套头针织毛衣1-9岁',
          tag: '儿童服饰',
        },
      ],
    }
  },
}
</script>

<style lang="less" scoped>
.table-case {
  width: 1000px;
  margin: 350px auto;
  img {
    width: 100px;
    height: 100px;
    object-fit: contain;
    vertical-align: middle;

  }

  .my-table {
    width: 100%;
    border-spacing: 0;
    img {
      width: 100px;
      height: 100px;
      object-fit: contain;
      vertical-align: middle;
    }
    th {
      background: #f5f5f5;
      border-bottom: 2px solid #069;
    }
    td {
      border-bottom: 1px dashed #ccc;
    }
    td,
    th {
      text-align: center;
      padding: 10px;
      transition: all 0.5s;
      &.red {
        color: red;
      }
    }
    .none {
      height: 100px;
      line-height: 100px;
      color: #999;
    }
  }
  .my-tag {
    cursor: pointer;
    .input {
      appearance: none;
      outline: none;
      border: 1px solid #ccc;
      width: 100px;
      height: 40px;
      box-sizing: border-box;
      padding: 10px;
      color: #666;
      &::placeholder {
        color: #666;
      }
    }
  }
}
</style>