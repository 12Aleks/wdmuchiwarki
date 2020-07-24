<template>
    <div class="products-band" id="producty">
        <b-container>
            <b-row class="d-flex flex-wrap">
                <b-col cols='12'>
                    <h3 class="title pb-4 pr-4 pl-4 pr-sm-4 pl-sm-4 pr-md-0 pl-md-0 pr-lg-5 pl-lg-0">
                        {{$t(otherProducts) }}</h3>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="12" md="6" lg="4"
                       v-for="(product, index) in products"
                       :key="index"
                       :class="product.styles"
                       class="product-box"
                       @mouseover="mouseover(index)"
                       @mouseleave="mouseleave(index)">
                    <router-link :to="{ name: `${product.name}`, params: { lang: $i18n.locale }}">
                        <div class="product-box d-flex flex-column align-items-center justify-content-end pr-0 pl-0 pr-sm-4 pl-sm-4 pr-md-0 pl-md-0 pr-lg-0 pl-lg-0">
                            <b-img :class='{imgHoverOne: product.active}'
                                   class="one"
                                   :src="require(`@/assets/images/products/${product.backgroundOne}`)"
                                   :alt="product.altOne"></b-img>
                            <b-img :class='{imgHoverTwo: product.active}'
                                   class="two"
                                   :src="require(`@/assets/images/products/${product.backgroundTwo}`)"
                                   :alt="product.altTwo"></b-img>
                            <b-img :class='{imgHover: product.active}'
                                   class='img_product'
                                   :src="require(`@/assets/images/products/${product.photo}`)"
                                   fluid
                                   :alt="`${$t(product.title)}`"></b-img>
                            <p class="text-center pt-3 mb-0 descriptions">{{$t(product.title)}}</p>
                        </div>
                    </router-link>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "OtherProducts",
        props: ['otherProducts'],
        methods: {
            mouseover(index) {
                this.$store.dispatch('down', index)
            },
            mouseleave(index) {
                this.$store.dispatch('up', index)
            }
        },
        computed: {
            ...mapGetters([
                'products'
            ])
        },
    }
</script>

<style lang="scss" scoped>
    .products-band {
        padding: 133px 0;
        background: #FFFFFF 0 0 no-repeat padding-box;
        @media (max-width: 1199.98px) {
            padding: 70px 0;
        }

        .product-box {
            height: 350px;
            position: relative;
            @media (max-width: 412.98px) {
                height: 280px;
            }

            .img_product_podajnik {
                margin-right: 20px;
            }

            .one {
                position: absolute;
                z-index: 0;
                top: 50%;
                left: 50%;
                margin-right: -50%;
                transform: translate(-50%, -50%);
                @media (max-width: 412.98px) {
                    display: none;
                }
            }

            .two {
                position: absolute;
                z-index: 1;
                top: 50%;
                left: 50%;
                margin-right: -50%;
                transform: translate(-50%, -50%);
                @media (max-width: 412.98px) {
                    display: none;
                }
            }

            img.img_product {
                position: relative;
                z-index: 4;
                @media (max-width: 991.98px) {
                    margin: 0;
                    padding: 0;
                    max-width: 270px;
                    height: 180px;
                }
            }
        }
    }

    .imgHover {
        -moz-animation: imgHov 1s;
        -o-animation: imgHov 1s;
        -webkit-animation: imgHov 1s;
        animation: imgHov 1s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
    }

    .imgHoverOne {
        -moz-animation: imgOne 1s;
        -o-animation: imgOne 1s;
        -webkit-animation: imgOne 1s;
        animation: imgOne 1s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
    }

    .imgHoverTwo {
        -moz-animation: imgTwo 1s;
        -o-animation: imgTwo 1s;
        -webkit-animation: imgTwo 1s;
        animation: imgTwo 1s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
    }

    @keyframes imgHov {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(.98);
        }
        100% {
            transform: scale(1);
        }
    }

    @keyframes imgOne {
        0% {
            top: 50%;
            left: 50%;
        }
        50% {
            top: 51%;
            left: 49%;
        }
        100% {
            top: 50%;
            left: 50%;
        }
    }

    @keyframes imgTwo {
        0% {
            top: 50%;
            left: 50%;
        }
        50% {
            top: 49%;
            left: 51%;
        }
        100% {
            top: 50%;
            left: 50%;
        }
    }
</style>
