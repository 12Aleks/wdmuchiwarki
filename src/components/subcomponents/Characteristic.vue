<template>
    <section class="characteristic">
        <b-container>
            <b-row class="d-flex flex-wrap">
                <b-col v-if='offset' cols="0" sm="0" md="3" lg="3"></b-col>
                <b-col cols="6" sm="6" md="3" lg="3"
                       v-for="characteristic in data"
                       :key="characteristic.title">
                    <div class="mx-auto">
                        <b-img :src="require(`@/assets/images/products/parameters/${characteristic.img}`)"></b-img>
                        <div class="characteristic_description">
                            <p>{{$t(characteristic.title)}}</p>
                            <p>{{characteristic.description}}</p>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
    export default {
        name: "Characteristic",
        props: ['offset', 'data']
    }
</script>

<style scoped lang="scss">
    section.characteristic {
        background: $background-gray-color;
        padding: 155px 15px;
        @media(max-width: 1199.98px) {
            padding: 120px 15px;
        }
        @media(max-width: 575.98px) {
            padding: 70px 0;
        }

        img {
            width: 120px;
            height: auto;
            margin-bottom: 48px;
            @media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1) {
                width: 110px;
                margin-bottom: 40px;
            }
            @media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi) {
                width: 110px;
                margin-bottom: 40px;
            }
            @media(max-width: 1199.98px) {
                width: 100px;
                margin-bottom: 38px;
            }
            @media(max-width: 991.98px) {
                margin-bottom: 20px;
                margin-right: auto;
                margin-left: auto;
                display: block;
            }
            @media(max-width: 575.98px) {
                width: 70px;
                margin-bottom: 38px;
            }
        }
        .characteristic_description{
            p {
                font: 500 1.5rem/2rem Lato;
                color: $color-gray;
                margin-bottom: 5px;
                @media screen and (min-device-width: 992px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1) {
                    font: 500 1.25rem/1.75rem Lato;
                }
                @media screen and (min-device-width: 992px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi) {
                    font: 500 1.25rem/1.75rem Lato;
                }
                @media(max-width: 991.98px) {
                    font: 500 1.125rem/1.5rem Lato;
                    text-align: center;
                }
            }
        }
    }

    #main.multi {
        .mx-auto {
            max-width: 188px;
            width: 100%;
            @media(max-width: 1199.98px) {
                max-width: 160px;
            }
            @media(max-width: 991.98px) {
                margin-top: 20px;
            }
        }
    }

    #main.micro, #main.y2, #main.typhoon_32, #main.typhoon_50 {
        .mx-auto {
            max-width: 120px;
            width: 100%;
        }
    }
</style>
