<template>
    <section id="main">
        <div class="video-container">
            <player-video></player-video>
            <div class="back"></div>
        </div>
        <div class="white-band">
            <div class="tab"
                 :class="{showTab: showTab, hideTab: hideTab}"
                 :style="{ background: `url(${imageUrl}) no-repeat center` }"
            ></div>
            <div class="white-box p-5"
                 :class="{ show : showSlider, hide: hideSlider}">
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
                            :interval="5000"
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
                                    :interval="5000"
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
        <div class="gray-band presentation">
            <b-container class="container">
                <b-row class="d-flex flex-wrap">
                    <b-col cols="12" sm="12" md="12" lg="6">
                        <div class="pr-4 pl-4 pr-sm-4 pl-sm-4 pr-md-0 pl-md-0 pr-lg-5 pl-lg-0 ">
                            <h3 class="title">{{ $t( 'heading.presentation') }}</h3>
                            <p class="descriptions">
                                {{ $t( 'presentation.descriptionFirst') }}
                            </p>
                            <p class="descriptions">
                                {{ $t( 'presentation.descriptionSecond') }}
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
                                <span class="text-center pt-3">{{ $t( 'presentation.electricFeederFirst') }}</span>
                                <span class="text-center">{{ $t( 'presentation.electricFeederSecond') }}</span>
                            </div>
                            <div class="img-wrapper d-flex flex-column align-items-center justify-content-column">
                                <div class="img_icon_box">
                                    <b-img class='rotateAnim' :src="require(`@/assets/images/Group.svg`)"
                                           alt="rotate"></b-img>
                                </div>
                                <span class="text-center pt-3">{{ $t( 'presentation.versatilityApplicationsFirst') }}</span>
                                <span class="text-center">{{ $t( 'presentation.versatilityApplicationsSecond') }}</span>
                            </div>
                            <div class="img-wrapper d-flex flex-column align-items-center justify-content-column">
                                <div class="img_icon_box">
                                    <b-img class='pdf' :src="require(`@/assets/images/pdf.svg`)" alt="pdf"></b-img>
                                </div>
                                <span class="text-center pt-3">{{ $t( 'presentation.fiberReportFirst') }}</span>
                                <span class="text-center">{{ $t( 'presentation.fiberReportSecond') }}</span>
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
                                    :src="`${$t('presentation.youtu')}`" frameborder="0"
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
                </b-row>
                <other-products></other-products>
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
                        <b-form class="pr-4 pl-4 pr-sm-4 pl-sm-4 pr-md-0 pl-md-0 pr-lg-5 pl-lg-0"
                                @submit.prevent="sendEmail">
                            <b-form-group :class="{ 'form-error': $v.mail.$error }">
                                <b-form-input
                                        id="input-1"
                                        v-model="mail"
                                        type="email"
                                        name="user_email"
                                        @change="$v.mail.$touch()"
                                        :placeholder="$t('contact.form.placeholderEmail')"
                                ></b-form-input>
                                <div class="error" v-if="!$v.mail.required">Email jest obowiązkowy</div>
                                <div class="error" v-if="!$v.mail.email">Podaj prawidłowy adres email</div>
                            </b-form-group>
                            <b-form-group :class="{ 'form-error': $v.phone.$error }">
                                <b-form-input
                                        id="input-2"
                                        v-model.number="phone"
                                        name="user_phone"
                                        type="tel"
                                        @change="$v.phone.$touch()"
                                        :placeholder="$t('contact.form.placeholderPhone')">
                                </b-form-input>
                                <div class="error" v-if="!$v.phone.required">Telefon jest obowiązkowy</div>
                                <div class="error" v-if="!$v.phone.minLength">Podaj prawidłowy telefon</div>
                            </b-form-group>
                            <b-form-group>
                                <b-form-textarea
                                        id="textarea"
                                        v-model="text"
                                        name="user_massage"
                                        rows="6"
                                        max-rows="6"
                                        :placeholder="$t('contact.form.placeholderText')"
                                ></b-form-textarea>
                            </b-form-group>
                            <b-button
                                    type="submit"
                                    class="btn text-uppercase"
                                    :disabled="submitStatus === 'PENDING'">
                                {{$t('contact.form.button')}}
                            </b-button>
                            <p class="error" v-if="submitStatus === 'OK'">Thanks for your submission!</p>
                            <p class="error" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
                            <p class="error" v-if="submitStatus === 'PENDING'">Sending...</p>
                        </b-form>

                    </b-col>
                </b-row>
            </b-container>
        </div>
    </section>
</template>

<script>
    import PlayerVideo from "./subcomponents/PlayerVideo";
    import emailjs from 'emailjs-com';
    import {required, minLength, email} from 'vuelidate/lib/validators'
    import {mapGetters} from 'vuex'

    export default {
        name: 'Home',
        data() {
            return {
                imageUrl: './assets/images/Group_22.png',
                slide: 0,
                sliding: null,
                showSlider: false,
                hideSlider: false,
                showTab: false,
                hideTab: false,
                active: false,
                mail: '',
                phone: '',
                text: '',
                submitStatus: null
            }
        },
        validations: {
            mail: {
                required,
                email
            },
            phone: {
                required,
                minLength: minLength(9)
            }
        },
        methods: {
            sendEmail(e) {
                this.$v.$touch()
                if (this.$v.$invalid) {
                    this.submitStatus = 'ERROR'
                } else {
                    emailjs.sendForm('sendgrid', 'template_hBdlDlOK', e.target, 'user_BWzukvV4b0GSFkWTNi81Y')
                        .then((result) => {
                            console.log('SUCCESS!', result.status, result.text);
                        }, (error) => {
                            console.log('FAILED...', error);
                        });
                    this.submitStatus = 'PENDING'
                    setTimeout(() => {
                        this.submitStatus = 'OK'
                        this.mail = ''
                        this.phone = ''
                        this.text = ''
                        this.$v.$reset()
                    }, 500)
                }
            },
            hoverSlider() {
                this.showSlider = true
                this.hideSlider = false
            

                this.showTab = true
                this.hideTab = false
            }
        },
        computed: {
            ...mapGetters([
                'multiSlider',
                'productsTitle',
                'form',
                'workers'
            ])
        },
        components: {PlayerVideo}
    }
</script>


