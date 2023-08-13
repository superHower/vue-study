<template>
  <div class="article-detail-page">
    <nav class="nav"><span @click="$router.push('/layout')" class="back">&lt;</span> {{article.subjectName}}</nav>
    <header class="header">
      <h1>{{article.stem}}</h1>
      <p>{{article.createdAt}} | {{article.views}} 浏览量 | {{article.likeCount}} 点赞</p>
      <p>
        <img :src="article.creatorAvatar" alt=""/>
        <span>{{article.creatorName}}</span>
      </p>
    </header>
    <main class="body">
      {{article.content}}
    </main>
  </div>
</template>

<script>
import axios from "axios";
// 请求地址: https://mock.boxuegu.com/mock/3083/articles/:id
// 请求方式: get
export default {
  name: "ArticleDetailPage",
  data() {
    return {
      id:0,
      article: {}
    }
  },

  async created() {
    // console.log(this.$route.params.id)
    this.id = this.$route.params.id
    const res = await axios.get(`https://mock.boxuegu.com/mock/3083/articles/${this.id}`)
    this.article = res.data.result

  }
}
</script>

<style lang="less" scoped>
.article-detail-page {
  width: 80%;
  margin: 0 auto;
  display: block;
}

.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.back {
  font-size: 20px;
  position: relative;
  left: -150px;
}

.header {
  display: block;

  align-items: center;
  justify-content: space-between;
  padding: 20px;

}

.header h1 {
  font-size: 24px;
}

.header p {
  margin: 10px 0;
  color: #999;
}

.header img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
}


</style>