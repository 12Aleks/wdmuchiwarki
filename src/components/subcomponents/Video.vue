<template>
    <div class="video-container">
        <video class="video-fluid z-depth-1" loop autoplay muted playsinline poster="@/assets/images/poster.jpg">
            <source src="@/assets/video/compress_video.mp4" type="video/mp4">
            <source src="@/assets/video/compress_video.webm" type="video/webm">
            <p>Sorry, there's a problem playing this video. Please try using a different browser.</p>
        </video>
        <div class="back"></div>
    </div>
</template>

<script>
    export default {
        name: "Video",
    }
</script>

