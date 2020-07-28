<template>
    <b-col class='characteristic_desc' cols="12" sm="12" md="12" lg="12">
        <div class="characteristic-box mx-auto d-flex align-items-center">
            <div v-for="characteristicProd in  data"
                 :key="characteristicProd.title" class="d-flex mx-auto align-items-center">
                <div class="inner_box">
                    <b-img fluid class="d-block mx-auto"
                           :src="require(`@/assets/images/products/characteristic/${characteristicProd.img}`)"></b-img>
                    <div class="characteristicProd_description d-flex flex-column justify-content-center align-items-center">
                        <p class="text-center">{{characteristicProd.title}}</p>
                    </div>
                </div>
            </div>
        </div>
    </b-col>
</template>

<script>
    export default {
        name: "CaracteristicDescription",
        props: ['data']
    }
</script>

<style lang="scss" scoped>
    .characteristic_desc {
        margin-top: 160px;
        @media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1) {
            margin-top: 140px;
        }
        @media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi) {
            margin-top: 140px;
        }
        @media(max-width: 1199.98px) {
            margin-top: 100px;
        }
        @media(max-width: 575.98px) {
            margin-top: 60px;
        }
        .characteristic-box {
            max-width: 537px;
            div {
                width: 270px;
                @media(max-width: 575.98px) {
                    width: 100px;
                }
                .inner_box {
                    width: 150px;
                    @media(max-width: 575.98px) {
                        width: 97px;
                    }
                    @media(max-width: 412.98px) {
                        width: 85px;
                    }
                }
                img {
                    max-height: 130px;
                    width: auto;
                    @media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1) {
                        max-height: 110px;
                    }
                    @media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi) {
                        max-height: 110px;
                    }
                    @media(max-width: 1199.98px) {
                        max-height: 100px;
                    }
                    @media(max-width: 575.98px) {
                        max-height: 60px;
                    }
                }
                .characteristicProd_description{
                    height: 85px;
                    width: 100%;
                    @media(max-width: 1199.98px) {
                        height: 82px;
                    }
                    @media(max-width: 575.98px) {
                        height: 70px;
                        width: 97px;
                        margin-right: auto;
                        margin-left: auto;
                        display: block;
                    }
                    @media(max-width: 412.98px) {
                        width: 85px;
                    }
                    p {
                        margin-top: 20px;
                        font: 500 21px/25px Lato;
                        @media(max-width: 1199.98px) {
                            font: 500 20px/25px Lato;
                        }
                        @media(max-width: 575.98px) {
                            margin-top: 15px;
                            font: 500 16px/20px Lato;
                        }
                        @media(max-width: 412.98px) {
                            font: 500 14px/20px Lato;
                        }
                    }
                }
            }
        }
    }
</style>
