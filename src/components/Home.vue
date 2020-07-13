<template>
    <section id="main">
        <div class="video-container">
            <player-video></player-video>
            <div class="back"></div>
        </div>
        <div class="white-band">
            <div class="tab"></div>
            <div class="white-box p-5">
                <div class="cross">
                    <template>
                        <div>
                            <b-icon icon="x" font-scale="2" @click="hoverSlider"></b-icon>
                        </div>
                    </template>
                </div>
                <div id="carouselExampleControlsOne" class="h-100">
                    <b-carousel
                            id="carousel-1"
                            v-model="slide"
                            :interval="4000"
                            style="color: #3D3C3C;"
                            indicators
                            class="h-100"
                    >
                        <b-carousel-slide v-for="ban in multiSlider" :key="ban.title">
                            <h4 class="mb-4">{{ $t(ban.title) }}</h4>
                            <p>{{$t(ban.slFirst)}}</p>
                            <p>{{$t(ban.slSecond)}}</p>
                        </b-carousel-slide>
                    </b-carousel>
                </div>
            </div>
            <b-container class="large-box">
                <b-row class="row">
                    <b-col cols="12">
                        <div id="carouselControlsTwo" class="h-100">
                            <b-carousel
                                    id="carousel-1"
                                    v-model="slide"
                                    :interval="4000"
                                    style="color: #3D3C3C;"
                                    indicators
                                    class="h-100"
                            >
                                <b-carousel-slide v-for="ban in multiSlider" :key="ban.title">
                                    <h4 class="mb-4">{{ $t(ban.title) }}</h4>
                                    <p>{{$t(ban.slFirst)}}</p>
                                    <p>{{$t(ban.slSecond)}}</p>
                                </b-carousel-slide>
                            </b-carousel>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </div>
        <div class="gray-band" id="prezentacja">
            <b-container class="container">
                <b-row class="d-flex flex-wrap">
                    <b-col cols="12" sm="12" md="12" lg="6">
                        <div class="pr-4 pl-4 pr-sm-4 pl-sm-4 pr-md-0 pl-md-0 pr-lg-5 pl-lg-0 ">
                            <h3 class="title">{{ $t( 'heading.presentation') }}</h3>
                            <p class="descriptions">
                                Wdmuchiwarka Terma MultiTyphoon pozwala na instalację światłowodów o średnicy 3-20 mm w
                                mikrorurki 6-16 lub rury HDPE 32-63. W pełni elektryczny podajnik, wymienne głowice i
                                wszechstronność użytkowania wyróżniają produkt na rynku.
                            </p>
                            <p class="descriptions">
                                Wdmuchiwanie światłowodów odbywa się z niezależną kontrolą prędkości i siły podawania.
                                Wszystkie parametry zapisywane są w rejestratorze danych, który poprzez aplikację webową
                                umożliwia generowanie raportu wdmuchiwania.
                            </p>
                        </div>
                    </b-col>
                    <b-col cols="12" sm="12" md="12" lg="6" class="mt-4 mt-sm-4 mt-md-4 mt-lg-0">
                        <div class="h-100 box-img-wrapper d-flex justify-content-around align-items-center ">
                            <div class="img-wrapper d-flex flex-column align-items-center justify-content-column">
                                <div class="img_icon_box">
                                    <b-img class='thunderbolt' :src="require(`@/assets/images/thunderbolt.svg`)"
                                           alt="thunderbolt"></b-img>
                                </div>
                                <span class="text-center pt-3">elektryczny</span>
                                <span class="text-center">podajnik</span>
                            </div>
                            <div class="img-wrapper d-flex flex-column align-items-center justify-content-column">
                                <div class="img_icon_box">
                                    <b-img class='rotateAnim' :src="require(`@/assets/images/Group.svg`)"
                                           alt="rotate"></b-img>
                                </div>
                                <span class="text-center pt-3">uniwersalność</span>
                                <span class="text-center"> zastosowań</span>
                            </div>
                            <div class="img-wrapper d-flex flex-column align-items-center justify-content-column">
                                <div class="img_icon_box">
                                    <b-img class='pdf' :src="require(`@/assets/images/pdf.svg`)" alt="pdf"></b-img>
                                </div>
                                <span class="text-center pt-3">rejestracja</span>
                                <span class="text-center">danych</span>
                            </div>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </div>
        <div class="slider-band">
            <b-container>
                <b-row class="d-flex flex-wrap">
                    <b-col cols="12">
                        <div class="embed-responsive embed-responsive-16by9 resp-container">
                            <iframe class="embed-responsive-item resp-iframe pr-3 pl-3 pl-sm-0 pr-sm-0 pl-md-0 pl-lg-0 pr-md-0 pr-lg-0"
                                    src="https://www.youtube.com/embed/PehWBVo2vn8" frameborder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen></iframe>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </div>
        <div class="products-band" id="producty">
            <b-container>
                <b-row class="d-flex flex-wrap">
                    <b-col cols='12'>
                        <h3 class="title pb-4 pr-4 pl-4 pr-sm-4 pl-sm-4 pr-md-0 pl-md-0 pr-lg-5 pl-lg-0">
                            {{$t('heading.products') }}</h3>
                    </b-col>
                    <b-col cols="12" md="6" lg="4"
                           v-for="(product, index) in products"
                           :key="index"
                           class="product-box"
                           :class="product.styles"
                           @mouseover="mouseover(index)"
                           @mouseleave="mouseleave(index)">
                        <router-link :to="{ name: 'MultiTank', params: { lang: $i18n.locale }}">
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
                                       :alt="product.alt"></b-img>
                                <p class="text-center pt-3 mb-0 descriptions">{{product.title}}</p>
                            </div>
                        </router-link>
                    </b-col>
                </b-row>
            </b-container>

        </div>
        <div class="contact" id="contact">
            <b-container>
                <b-row class="d-flex flex-wrap">
                    <b-col cols="12">
                        <h3 class="title pb-5 pr-4 pl-4 pr-sm-4 pl-sm-4 pr-md-0 pl-md-0 pr-lg-5 pl-lg-0">
                            {{$t('heading.contact')}}</h3>
                    </b-col>
                    <b-col cols="12" sm="12" md="12" lg="6">
                        <div v-for='(worker, index) in workers' :key="index"
                             class="worker d-flex flex-wrap mb-4 mb-sm-5 mb-md-5 mb-lg-0 pr-4 pl-4 pr-sm-4 pl-sm-4 pr-md-0 pl-md-0 pr-lg-5 pl-lg-0">
                            <div class="imgWorker">
                                <b-img :src="require(`@/assets/images/worker/${worker.image}`)" alt=""></b-img>
                            </div>
                            <div class="contactWorker">
                                <h6 class="mb-1">{{worker.name}}</h6>
                                <p class="description">{{ $t(worker.position) }}</p>
                                <p class="description mb-1" style="text-decoration: none"><span>M:</span><a
                                        href="mailto:filip.madzio@termagroup.pl">{{worker.email}}</a></p>
                                <p class="description mb-1" style="text-decoration: none"><span>T:</span><a
                                        href="tel:+48-669-097-469">{{worker.phone}}</a></p>
                            </div>
                        </div>
                    </b-col>
                    <b-col cols="12" sm="12" md="12" lg="6">
                        <h6 class="pb-3 pr-4 pl-4 pr-sm-4 pl-sm-4 pr-md-0 pl-md-0 pr-lg-5 pl-lg-0">
                            {{$t('contact.form.title')}}</h6>
                        <b-form class="pr-4 pl-4 pr-sm-4 pl-sm-4 pr-md-0 pl-md-0 pr-lg-5 pl-lg-0" @submit="onSubmit">
                            <b-form-group>
                                <b-form-input
                                        id="input-1"
                                        v-model="form.email"
                                        type="email"
                                        required
                                        :placeholder="$t('contact.form.placeholderEmail')"
                                ></b-form-input>
                            </b-form-group>
                            <b-form-group>
                                <b-form-input
                                        id="input-2"
                                        v-model.number="form.phone"
                                        required
                                        :placeholder="$t('contact.form.placeholderPhone')"
                                ></b-form-input>
                            </b-form-group>
                            <b-form-group>
                                <b-form-textarea
                                        id="textarea"
                                        v-model="form.text"
                                        rows="6"
                                        max-rows="6"
                                        :placeholder="$t('contact.form.placeholderText')"
                                        required></b-form-textarea>
                            </b-form-group>
                            <b-button type="submit" class="btn text-uppercase">{{$t('contact.form.button')}}</b-button>
                        </b-form>
                    </b-col>
                </b-row>
            </b-container>
        </div>
    </section>
</template>

<script>
    import PlayerVideo from "./subcomponents/PlayerVideo";
    import {mapGetters} from 'vuex'

    export default {
        name: 'Home',
        data() {
            return {
                slide: 0,
                sliding: null,
                active: false,
            }
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault()
                alert(JSON.stringify(this.form))
            },
            mouseover(index) {
                this.$store.dispatch('down', index)
            },
            mouseleave(index) {
                this.$store.dispatch('up', index)
            },
            hoverSlider() {

            }
        },
        computed: {
            ...mapGetters([
                'multiSlider',
                'productsTitle',
                'products',
                'form',
                'workers'
            ])
        },
        components: {
            PlayerVideo
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
