<template>
    <b-container>
        <b-row>
            <b-col cols="12">
                <b-carousel
                        id="carousel-multi"
                        style="text-shadow: 0 0 2px #000"
                        indicators
                        img-width="1024"
                        img-height="480"
                >
                    <b-carousel-slide
                            v-for="slide in sliders"
                            :key="slide.title"
                            :caption="`${$t(slide.title)}`"
                            :img-src="require(`@/assets/images/products/${slide.img}`)"
                    ></b-carousel-slide>
                </b-carousel>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    export default {
        name: "Carusel",
        props: ['sliders']
    }
</script>

