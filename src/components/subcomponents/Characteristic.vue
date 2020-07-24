<template>
    <section class="characteristic">
        <b-container>
            <b-row class="d-flex flex-wrap">
                <b-col v-if='offset' cols="0" sm="0" md="0" lg="3"></b-col>
                <b-col cols="12" sm="6" md="6" lg="3"
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
        }
        .characteristic_description{
            p {
                font: 500 24px/32px Lato;
                color: $color-gray;
                margin-bottom: 5px;
                @media(max-width: 1199.98px) {
                    font: 500 20px/28px Lato;
                }
                @media(max-width: 991.98px) {
                    font: 500 18px/24px Lato;
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
