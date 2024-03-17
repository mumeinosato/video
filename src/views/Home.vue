<template>
  <div class="main">
    <h2>一覧</h2><br>
    <div class="thumbnails">
      <div v-for="thumbnail in thumbnails" :key="thumbnail.folder" class="thumbnail">
        <a>
          <img :src="thumbnail.thumbnailUrl" :alt="thumbnail.folder" width="342">
        </a>
        <p class="title">{{ thumbnail.folder }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { getApiUrl } from '../assets/script/api_url';

export default {
  data() {
    return {
      thumbnails: []
    };
  },
  mounted() {
    this.fetchThumbnails();
  },
  methods: {
    async fetchThumbnails() {
      try {
        const aptUrl = getApiUrl();
        const response = await axios.get(`http://${aptUrl}/thumbnails`);
        this.thumbnails = response.data;
      } catch (error) {
        console.error('サムネイルの取得に失敗しました', error);
      }
    }
  }
};
</script>

<style>

.thumbnails {
  display: flex;
  flex-wrap: wrap;
}

.thumbnail {
  margin-right: 20px;
}

.main{
  margin: 20px;
  text-align: center;
}

.title {
  font-size: 12px;
  text-align: left;
}
</style>
