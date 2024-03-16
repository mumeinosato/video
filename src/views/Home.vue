<template>
  <div class="thumbnail-list">
    <h2>Thumbnail List</h2>
    <div class="thumbnails">
      <div v-for="thumbnail in thumbnails" :key="thumbnail.folder" class="thumbnail">
        <img :src="thumbnail.thumbnailUrl" :alt="thumbnail.folder">
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

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
        const response = await axios.get('http://localhost:3000/thumbnails');
        this.thumbnails = response.data;
      } catch (error) {
        console.error('サムネイルの取得に失敗しました', error);
      }
    }
  }
};
</script>

<style>
.thumbnail-list {
  text-align: center;
}

.thumbnails {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.thumbnail {
  margin: 10px;
}
</style>
