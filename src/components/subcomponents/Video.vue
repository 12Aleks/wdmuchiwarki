<template>
    <div class="video-container">
        <video class="video-fluid z-depth-1" loop autoplay muted playsinline>
            <source :src="videoHeader" type="video/webm"/>
        </video>
        <div class="back"></div>
    </div>
</template>

<script>
    import videoHome from '@/assets/video/video.mp4'
    export default {
        name: "Video",
        data(){
            return{
                videoHeader: videoHome
            }
        }
    }
</script>

<style scoped>

</style>
