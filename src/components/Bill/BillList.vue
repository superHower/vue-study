<style scoped>
.list-box {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 30px;
  width: 500px;
}

.list-box  a {
  text-decoration: none;
}
.my-form {
  display: flex;
  margin: 20px 0;
}
.my-form input {
  flex: 1;
  margin-right: 20px;
}

.table {
  border-radius: 10px;
  border: black solid 3px;
}
.table > :not(:first-child) {
  border-top: none;
}

.table tfoot {
  font-weight: bold;
}
@media screen and (max-width: 1000px) {
  .list-box {
    flex-wrap: wrap;
  }

  .list-box {
    width: 100%;
  }
}
</style>

<template>
  <div class="list-box">

    <!-- 添加资产 -->
    <form class="my-form">
      <input v-model.trim="name" type="text" class="form-control" placeholder="消费名称" />
      <input v-model.number="price" type="text" class="form-control" placeholder="消费价格" />
      <button @click="add" type="button" class="btn btn-primary">添加账单</button>
    </form>

    <table class="table table-hover">
      <thead>
      <tr>
        <th>编号</th>
        <th>消费名称</th>
        <th>消费价格</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in list" :key="item.id">
        <td>{{ index+1 }}</td>
        <td>{{ item.name }}</td>
        <td :class="{red: item.price > 500}">{{ item.price.toFixed(2) }}</td>
        <td><a @click="del(item.id)" href="javascript:;">删除</a></td>
      </tr>
      </tbody>
      <tfoot>
      <tr>
        <td colspan="4">消费总计： {{ totalPrice.toFixed(2) }}</td>
      </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>

import axios from 'axios';
import * as echarts from 'echarts'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
// import bootstrap from '../../../bootstrap.min.js';
export default {
  name: 'BillList',
  data() {
    return {
      list:[],
      name: '',
      price: ''
    }

  },
  computed: {
    totalPrice() {
      return this.list.reduce((sum, item) => sum+item.price, 0)
    }
  },

// 发送数据
  created () {
    this.getList() // 重新渲染列表
  },
// 操作dom, 插入图表
  mounted () {
    this.myChart = echarts.init(document.querySelector('#main'))
    this.myChart.setOption({
      // 大标题
      title: {
        text: '消费账单列表',
        left: 'center'
      },
      // 提示框
      tooltip: {
        trigger: 'item'
      },
      // 图例
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      // 数据项
      series: [
        {
          name: '消费账单',
          type: 'pie',
          radius: '50%',
          data: [
            // { value: 1048, name: 'Search Engine' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]

    })
  },


  methods: {
    // 向服务器get 获取消费品列表
    async getList () {
      const res = await axios.get('https://applet-base-api-t.itheima.net/bill',{
        params: {
          creator: '小黑'
        }
      })
      console.log(res)
      this.list = res.data.data
      this.myChart.setOption({
        // 数据项
        series: [
          {
            data: this.list.map(item => ({value: item.price, name: item.name}))
          }
        ]
      })
    },

    // 向服务器post 添加消费品
    async add() {
      if(!this.name) {
        alert('请输入消费名称')
        return
      }
      if(typeof this.price !== 'number') {
        alert('请输入正确的消费价格')
        return
      }
      await axios.post('https://applet-base-api-t.itheima.net/bill', {
        creator: "小黑",
        name: this.name,
        price: this.price
      })
      this.getList()// 重新渲染列表
      this.name = ''
      this.price = ''
    },

    // 向服务器delete 删除记录
    async del(id) {
      await axios.delete(`https://applet-base-api-t.itheima.net/bill/${id}`)
      this.getList()// 重新渲染列表
    }
  }
}

</script>


