<template>
    <video-player :options="playerOptions" />
</template>

<script>
import VideoPlayer from '../components/VideoPlayer.vue';
import 'video.js/dist/video-js.css'

export default {
    name: 'Video',
    components: {
        VideoPlayer
    },
    data() {
        return {
            playerOptions: {
                autoplay: true,
                controls: true,
                sources: [{
                    src: '../../dev-file/1/sub.mp4',
                    type: 'video/mp4'
                }]
            }
        };
    }
}
</script>

<style>
.main {
    margin: 20px;
    text-align: center;
    width: 100px;
}
</style>