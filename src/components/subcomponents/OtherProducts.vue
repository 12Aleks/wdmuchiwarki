<template>
    <div class="products-band" id="products-band">
        <b-container>
            <b-row class="d-flex flex-wrap">
                <b-col cols='12'>
                    <h3 class="title pb-4 pr-4 pl-4 pr-sm-4 pl-sm-4 pr-md-0 pl-md-0 pr-lg-5 pl-lg-0">
                        {{$t(otherProducts) }}</h3>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="12" md="6"
                       v-for="(product , index) in userPositions"
                       :key="index"
                       :class="position === 'Home'? `${product.styles}`: 'col-lg-3 subpage'"
                       class="product-box"
                       @mouseover="mouseover(index)"
                       @mouseleave="mouseleave(index)">
                    <router-link :to="{ name: `${product.name}`, params: { lang: $i18n.locale }}">
                        <div class="product-box d-flex flex-column align-items-center justify-content-end pr-0 pl-0 pr-sm-4 pl-sm-4 pr-md-0 pl-md-0 pr-lg-0 pl-lg-0">
                            <b-img :class='{imgHoverOne: product.active}'
                                   class="one"
                                   :src="require(`@/assets/images/products/other_products/${product.backgroundOne}`)"
                                   :alt="product.altOne"></b-img>
                            <b-img :class='{imgHoverTwo: product.active}'
                                   class="two"
                                   :src="require(`@/assets/images/products/other_products/${product.backgroundTwo}`)"
                                   :alt="product.altTwo"></b-img>
                            <b-img :class='{imgHover: product.active, imgOver: !product.active }'
                                   class='img_product'
                                   :src="require(`@/assets/images/products/other_products/${product.photo}`)"
                                   fluid
                                   :alt="`${$t(product.title)}`"></b-img>
                            <p class="text-center pt-3 mb-0 descriptions"
                               :class="{activeDescription :product.active}"
                            >{{$t(product.title)}}</p>
                        </div>
                    </router-link>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>

    export default {
        name: "OtherProducts",
        props: ['otherProducts'],
        data() {
            return {
                position: this.$route.name,
                products: [
                    {
                        name: 'MultiTank',
                        title: 'products.feeder',
                        photo: '3M7A2089n.png',
                        backgroundOne: 'product_a.png',
                        altOne: 'circle one',
                        backgroundTwo: 'product_b.png',
                        altTwo: 'circle two',
                        styles: 'col-lg-4',
                        active: false,
                    },
                    {
                        name: 'MicroTyphoon',
                        title: 'products.microTyphoon',
                        photo: 'IMG_0033.png',
                        backgroundOne: 'product_a.png',
                        altOne: 'circle one',
                        backgroundTwo: 'product_b.png',
                        altTwo: 'circle two',
                        styles: 'col-lg-4',
                        active: false
                    },
                    {
                        name: 'Typhoon32',
                        title: 'products.typhoon32',
                        photo: 'typhoon_32_40.png',
                        backgroundOne: 'product_a.png',
                        altOne: 'circle one',
                        backgroundTwo: 'product_b.png',
                        altTwo: 'circle two',
                        styles: 'col-lg-4',
                        active: false
                    },
                    {
                        name: 'Typhoon50',
                        title: 'products.typhoon50',
                        photo: 'typhon_50_63.png',
                        backgroundOne: 'product_a.png',
                        altOne: 'circle one',
                        backgroundTwo: 'product_b.png',
                        altTwo: 'circle two',
                        styles: 'offset-md-0 offset-lg-2 col-lg-4',
                        active: false
                    },
                    {
                        name: 'Y2',
                        title: 'products.connector',
                        photo: '3M7A2122n.png',
                        backgroundOne: 'product_a.png',
                        altOne: 'circle one',
                        backgroundTwo: 'product_b.png',
                        altTwo: 'circle two',
                        styles: 'offset-sm-0 offset-md-3 offset-lg-0 col-lg-4',
                        active: false
                    },
                ]
            }
        },
        computed: {
            userPositions() {
                return this.products.filter((prod) => {
                    if (this.position !== 'Home') {
                        return prod.name !== this.position;
                    } else return true
                });
            }
        },
        methods: {
            mouseover(index) {
                this.userPositions[index].active = true;
            },
            mouseleave(index) {
                this.userPositions[index].active = false;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .products-band {
        padding: 133px 0;
        background: #FFFFFF;
        @media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1) {
            padding: 114px 0;
        }
        @media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi) {
            padding: 114px 0;
        }
        @media (max-width: 1199.98px) {
            padding: 70px 0;
        }

        .product-box {
            height: 350px;
            position: relative;
            @media (max-width: 412.98px) {
                height: 280px;
            }

            .descriptions.activeDescription {
                    color: $color-red;
                    transition: all .8s;
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
                transform: scale(1);
                @media (max-width: 991.98px) {
                    margin: 0;
                    padding: 0;
                    max-width: 270px;
                    height: 180px;
                }
            }
        }

        .product-box.subpage {

            @media(min-width: 992px) {
                height: 330px;
            }

            .product-box {
                @media(min-width: 1200px) {
                    height: 330px;
                }
                @media(min-width: 992px) and (max-width: 1199.98px) {
                    height: 300px;
                }
            }

            img.one, img.two {
                max-width: calc(100% - 15px);
            }

            img.img_product {
                transform: scale(1);
                @media(min-width: 1200px) {
                    max-width: 250px;
                    height: 160px;
                }
                @media(min-width: 992px) and (max-width: 1199.98px) {
                    max-width: 240px;
                    height: 140px;
                }
            }

            p.descriptions {
                @media(min-width: 992px) {
                    font: 500 1.2rem/2rem Lato;
                }
            }
        }
    }

    .imgHover {
        @include animation(1s, imgHov);
    }
    .imgOver{
        @include animation(600ms, imgOver);
    }

    .imgHoverOne {
        @include animation(1s, imgOne);
    }

    .imgHoverTwo {
        @include animation(1s, imgTwo);
    }

    @keyframes imgHov {
        0% {
            transform: scale(1);
        }
        100% {
            transform: scale(1.015);
        }
    }
    @keyframes imgOver {
        0% {
            transform: scale(1.015);
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
