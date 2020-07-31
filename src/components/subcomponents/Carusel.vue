<template>
    <b-container>
        <b-row>
            <b-col cols="12" class="pl-2 pr-2 pl-sm-3 pr-sm-3 pl-md-3 pr-md-3 pl-lg-4 pr-lg-4 pl-xl-5 pr-xl-5">
                <b-carousel
                        id="carousel-multi"
                        style="text-shadow: 0 0 2px #000"
                        indicators
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



