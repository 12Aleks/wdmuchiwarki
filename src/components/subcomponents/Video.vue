<template>
    <div class="video-container">
        <video class="video-fluid z-depth-1" loop autoplay muted playsinline>
            <source src="@/assets/video/compress_video.mp4" type="video/mp4">
            <source src="@/assets/video/compress_video.webm" type="video/webm">
            <p>Sorry, there's a problem playing this video. Please try using a different browser.</p>
        </video>
    </div>
</template>

<script>
    /*eslint-disable*/

    export default {
        name: "Video",
        data: () => ({
        }),
    }
</script>

<style scoped lang="scss">
    .video-fluid {
        width: 100%;
        height: auto;
        z-index: -1;
    }

    .video-container {
        width: 100%;
        height: 100%;
        position: relative;
        @media (max-width: 1199.98px) {
            padding-top: 124px;
        }
        @media (max-width: 991.98px) {
            padding-top: 112px;
        }
        @media (max-width: 767.98px) {
            padding-top: 104px;
        }

        &:before {
            content: '';
            display: block;
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            z-index: 1;
            padding: 2.25em 1.6875em;
            background-image: -webkit-repeating-radial-gradient(center center, rgba(0, 0, 0, .2), rgba(0, 0, 0, .2) 1px, transparent 1px, transparent 100%);
            background-image: -moz-repeating-radial-gradient(center center, rgba(0, 0, 0, .2), rgba(0, 0, 0, .2) 1px, transparent 1px, transparent 100%);
            background-image: -ms-repeating-radial-gradient(center center, rgba(0, 0, 0, .2), rgba(0, 0, 0, .2) 1px, transparent 1px, transparent 100%);
            background-image: repeating-radial-gradient(center center, rgba(0, 0, 0, .2), rgba(0, 0, 0, .2) 1px, transparent 1px, transparent 100%);
            -webkit-background-size: 3px 3px;
            -moz-background-size: 3px 3px;
            background-size: 3px 3px;
        }
    }
</style>

