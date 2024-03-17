<template>
    <div>
        <video ref="videoPlayer" class="video-js" :style="{width: videoWidth, height: videoHeight}"></video>
    </div>
</template>

<script>
import videojs from 'video.js';

export default {
    name: 'VideoPlayer',
    props: {
        options: {
            type: Object,
            default(){
                return {};
            }
        },
        videoWidth: {
            type: [String, Number],
            default: '853px'
        },
        videoHeight: {
            type: [String, Number],
            default: '480px'
        }
    },
    data() {
        return {
            player: null
        };
    },
    mounted() {
        this.player = videojs(this.$refs.videoPlayer, this.options, function onPlayerReady() {
            console.log('onPlayerReady', this);
        });
    },
    beforeDestroy() {
        if (this.player) {
            this.player.dispose();
        }
    }
}
</script>

<style>
</style>