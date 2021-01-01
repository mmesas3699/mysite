<template>
  <div class="container-fluid m-0 p-0">
    <header>
      <nav class="nav">
        <a href="/news" class="nav-link text-white h5">news <span class="pl-2">&#128240;</span></a>
      </nav>
    </header>
    <div class="d-flex flex-wrap pl-4 pr-4" style="max-width: 100%;">
        <NewsArticles v-for="page in pages" 
                      :key="page.page_url"
                      :page="page.page"
                      :page_url="page.page_url"
                      :articles="page.articles"/>
    </div>
    <HmFooter/>
  </div>
</template>

<script>
import HmFooter from '@/components/home/HmFooter'
import NewsArticles from '@/components/news/NewsArticles'

import axios from 'axios';

export default {
  name: 'Home',
  data: function () {
    return {
      pages: []
    }
  },
  created () {
    this.fecthData()
  },
  methods: {
    fecthData () {
      axios
        .get('http://0.0.0.0:8000/api/v1/news/', {
          headers: {
            "Access-Control-Allow-Origin": "*",
          }
        })
        .then(response => (this.pages = response.data.news))
        // .then(response => console.log(response.data))
        .catch(error => console.log(error))
    }
  },
  components: {
    HmFooter,
    NewsArticles,
  },
}
</script>
<style>
header {
  background-color: black;
  padding: 0px 0px 0px 30px;
}
</style>