<template>
    <section id="main">
        <Video/>
        <div class="white-band">
            <div class="tab"
                 :class="{showTab: showTab, hideTab: hideTab}"
                 :style="{ backgroundImage: `url(${backgroundUrl})` }"
                 @click="hoverTab">
            </div>


            <div class="white-box"
                 :class="{ show : showSlider, hide: hideSlider}">
                <div class="cross" @click="hoverSlider">
                    <span>&#128936;</span>
                </div>
                <div id="carouselExampleControlsOne" class="h-100">
                    <b-carousel
                            id="carousel-1"
                            v-model="slide"
                            :interval="0"
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
                <b-row>
                    <b-col cols="12">
                        <div id="carouselControlsTwo" class="h-100">
                            <b-carousel
                                    id="carousel-1"
                                    v-model="slide"
                                    :interval="0"
                                    style="color: #3D3C3C;"
                                    indicators
                                    class="h-100 d-flex flex-wrap"
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
        <div class="gray-band"
             id="presentation">
            <b-container class="container">
                <b-row class="d-flex flex-wrap">
                    <b-col cols="12" sm="12" md="12" lg="6">
                        <div class="pr-0 pl-0 pr-sm-4 pl-sm-4 pr-md-0 pl-md-0 pr-lg-5 pl-lg-0 ">
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
                            <div class="img-wrapper d-flex flex-column align-items-center justify-content-column"
                                 v-for="(element, index) in presentation"
                                 :key="element.firstLine"
                            >
                                <div class="img_icon_box">
                                    <b-img class='thunderbolt'
                                           :class="element.firstClass"
                                           :src="require(`@/assets/images/${element.img}`)"
                                           :alt="element.alt"
                                           @mouseover="mouseoverShadow(index)"
                                           @mouseleave="mouseleaveShadow(index)"
                                    ></b-img>
                                    <b-img class='redShadow'
                                           :id="element.id"
                                           :class="{offset: element.offset}"
                                           :src="require(`@/assets/images/redShadow/${element.shadow}`)"
                                           :alt="element.altShadow">
                                    </b-img>
                                </div>
                                <div style="height: 100px; "
                                     class=" d-flex flex-column align-items-center justify-content-column">
                                    <span class="text-center pt-3">{{ $t(element.firstLine) }}</span>
                                    <span class="text-center">{{ $t(element.secondLine) }}</span>
                                </div>
                            </div>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </div>
        <div class="yt-band">
            <b-container>
                <b-row class="d-flex flex-wrap">
                    <b-col cols="12">
                        <div class="embed-responsive embed-responsive-16by9 resp-container">
                            <iframe class="embed-responsive-item resp-iframe pr-3 pl-3 pl-sm-0 pr-sm-0 pl-md-0 pl-lg-0 pr-md-0 pr-lg-0"
                                    :src="`${$t('presentation.youtu')}`" frameborder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen>
                            </iframe>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </div>
        <keep-alive>
            <other-products :otherProducts="otherProducts"/>
        </keep-alive>
        <div class="contact" id="contact">
            <b-container>
                <b-row class="d-flex flex-wrap">
                    <b-col cols="12">
                        <h3 class="title pb-5 pr-4 pl-4 pr-sm-4 pl-sm-4 pr-md-0 pl-md-0 pr-lg-5 pl-lg-0">
                            {{$t('heading.contact')}}</h3>
                    </b-col>
                    <b-col cols="12" sm="12" md="12" lg="6">
                        <div class="worker d-flex flex-wrap mb-4 mb-sm-5 mb-md-5 mb-lg-0 pr-4 pl-4 pr-sm-4 pl-sm-4 pr-md-0 pl-md-0 pr-lg-0 pl-lg-0">
                            <div class="imgWorker">
                                <b-img :src="require(`@/assets/images/worker/madfi.jpg`)" alt="worker"></b-img>
                            </div>
                            <div class="contactWorker">
                                <h6 class="mb-1">Filip Madzio</h6>
                                <p class="description">{{ $t('contact.workers.positionFirst') }} <br/>
                                    {{ $t('contact.workers.positionSecond') }} </p>
                                <p class="description mb-1" style="text-decoration: none"><span>M:</span><a
                                        href="mailto:filip.madzio@termagroup.pl"> filip.madzio@termagroup.pl</a></p>
                                <p class="description mb-1" style="text-decoration: none"><span>T:</span><a
                                        href="tel:+48-669-097-469"> + 48 669 097 469</a></p>
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
                                <div class="error" v-if="!$v.mail.required">
                                    {{$t('contact.form.formEmailInformationFirst')}}
                                </div>
                                <div class="error" v-if="!$v.mail.email">
                                    {{$t('contact.form.formEmailInformationSecond')}}
                                </div>
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
                                <div class="error" v-if="!$v.phone.required">
                                    {{$t('contact.form.formPhoneInformationFirst')}}
                                </div>
                                <div class="error" v-if="!$v.phone.minLength">
                                    {{$t('contact.form.formPhoneInformationSecond')}}
                                </div>
                            </b-form-group>
                            <b-form-group>
                                <b-form-textarea
                                        id="textarea"
                                        v-model="text"
                                        name="user_message"
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
                            <p class="success" v-if="submitStatus === 'OK'">
                                {{$t('contact.form.formSendingInformationFirst')}}</p>
                            <p class="error" v-if="submitStatus === 'ERROR'">
                                {{$t('contact.form.formSendingInformationSecond')}}</p>
                            <p class="error" v-if="submitStatus === 'PENDING'">
                                {{$t('contact.form.formSendingInformationThird')}}</p>
                        </b-form>

                    </b-col>
                </b-row>
            </b-container>
        </div>
    </section>
</template>

<script>
    import Video from './subcomponents/Video'
    import backgroundUrl from '@/assets/images/arrow.png'
    import {BForm, BFormGroup, BFormTextarea, BFormInput} from 'bootstrap-vue'
    import {required, minLength, email} from 'vuelidate/lib/validators'
    import emailjs from 'emailjs-com';

    export default {
        name: 'Home',
        data() {
            return {
                slide: 0,
                sliding: null,
                showSlider: false,
                hideSlider: false,
                showTab: false,
                hideTab: false,
                mail: '',
                phone: '',
                text: '',
                submitStatus: null,
                otherProducts: 'heading.products',
                backgroundUrl,
                multiSlider: [
                    {
                        title: 'slider.first.titleSlider',
                        slFirst: 'slider.first.descriptionFirst',
                        slSecond: 'slider.first.descriptionSecond',
                    },
                    {
                        title: 'slider.second.titleSlider',
                        slFirst: 'slider.second.descriptionFirst',
                        slSecond: 'slider.second.descriptionSecond',
                    }
                ],
                presentation: [
                    {
                        img: 'thunderbolt.png',
                        alt: 'thunderbolt',
                        shadow: 'path.png',
                        altShadow: 'path',
                        firstLine: 'presentation.electricFeederFirst',
                        secondLine: 'presentation.electricFeederSecond',
                        firstClass: 'thunderbolt',
                        id: 'first',
                        offset: false
                    },
                    {
                        img: 'Group.png',
                        alt: 'Group',
                        shadow: 'universality.png',
                        altShadow: 'universality',
                        firstLine: 'presentation.versatilityApplicationsFirst',
                        secondLine: 'presentation.versatilityApplicationsSecond',
                        firstClass: 'rotateAnim',
                        id: 'second',
                        offset: false
                    },
                    {
                        img: 'pdf.png',
                        alt: 'pdf',
                        shadow: 'registration.png',
                        altShadow: 'registration',
                        firstLine: 'presentation.fiberReportFirst',
                        secondLine: 'presentation.fiberReportSecond',
                        firstClass: 'pdf',
                        id: 'third',
                        offset: false
                    }
                ]
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
        components: {
            Video,
            'b-form': BForm,
            'b-form-group': BFormGroup,
            'b-form-textarea': BFormTextarea,
            'b-form-input': BFormInput
        },
        methods: {
            sendEmail(e) {
                this.$v.$touch();
                if (this.$v.$invalid) {
                    this.submitStatus = 'ERROR'
                } else {
                    emailjs.sendForm('sendgrid', 'template_hBdlDlOK', e.target, 'user_BWzukvV4b0GSFkWTNi81Y')
                        .then((result) => {
                            console.log('SUCCESS!', result.status, result.text);
                        }, (error) => {
                            console.log('FAILED...', error);
                        });
                    this.submitStatus = 'PENDING';
                    setTimeout(() => {
                        this.submitStatus = 'OK';
                        this.mail = '';
                        this.phone = '';
                        this.text = '';
                        this.$v.$reset()
                    }, 500)
                }
            },
            mouseoverShadow(index) {
                this.presentation[index].offset = true
            },
            mouseleaveShadow(index) {
                this.presentation[index].offset = false
            },
            hoverSlider() {
                this.showSlider = !this.showSlider;
                this.hideSlider = false;
                setTimeout(() => {
                    this.showTab = !this.showTab;
                    this.hideTab = false;
                }, 2000)
            },
            hoverTab() {
                this.showTab = !this.showTab;
                this.hideTab = !this.hideTab;
                setTimeout(() => {
                    this.showSlider = !this.showSlider;
                    this.hideSlider = !this.hideSlider;
                }, 900)
            }
        }
    }
</script>

<style scoped lang="scss">
    source {
        position: relative;
        z-index: 0;
    }

    .white-band {
        position: relative;
        width: 100%;
        height: 1px;
        @media (max-width: 1199.98px) {
            height: auto;
            padding: 70px 0;
        }
        @media (max-width: 575.98px) {
            padding: 40px 0;
        }

        .white-box {
            display: block;
            background-color: rgba(255, 255, 255, 0.9);
            border: 1px solid rgba(250, 250, 250, 1);
            width: 561px;
            height: 496px;
            max-height: 496px;
            position: absolute;
            top: -365px;
            right: calc(18.5% - 30px);
            z-index: 10;
            transition: 1s;
            @include box-shadow(0 3px 6px $color-shadow);
            padding: 3rem;
            @media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1) {
                width: 545px;
                height: 490px;
                padding: 2rem 2.5rem 2.5rem;
            }
            @media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi) {
                width: 545px;
                height: 490px;
                padding: 2rem 2.5rem 2.5rem;
            }
            @media (max-width: 1199.98px) {
                display: none;
            }

            .cross {
                width: 33px;
                height: 33px;
                font-size: 33px;
                color: #E72327;

                position: absolute;
                top: 0;
                right: 5px;
                cursor: pointer;
            }

            &:hover {
                background-color: rgba(255, 255, 255, 1);
                transition: 2s;
            }
        }

        .tab {
            display: inherit;
            position: absolute;
            z-index: 1;
            right: calc(18.5% - 30px);
            background-repeat: no-repeat;
            background-color: red !important;
            top: 1px;
            width: 34px;
            height: 36px;
            cursor: pointer;
            @media (max-width: 1199.98px) {
                display: none;
            }
        }


        .showTab {
            @include animation(.8s, tabs);
        }

        .hideTab {
            @include animation(.8s, tabReset);
        }

        .show {
            @include animation( 2s, movingForward);
        }

        .hide {
            @include animation( 2s, movingBackwards);
        }

        @keyframes tabs {
            0% {
                top: 1px;
                right: calc(18.5% - 30px);
            }
            80% {
                top: -33px;
                right: calc(18.5% - 30px);
            }
            100% {
                top: -33px;
                right: 0;
            }
        }

        @keyframes tabReset {
            0% {
                top: -33px;
                right: 0;
            }
            20% {
                top: -33px;
                right: calc(18.5% - 30px);
            }
            100% {
                top: 1px;
                right: calc(18.5% - 30px);
            }
        }
        @keyframes movingBackwards {
            0% {
                top: 1px;
                z-index: 0;
                background-color: rgba(255, 255, 255, 0.9);
                -moz-transform: scale(.98);
                -webkit-transform: scale(.98);
                -o-transform: scale(.98);
                transform: scale(.98);
                @include box-shadow(inset 0 2px 6px -4px #00000029);
            }
            35% {
                top: -500px;
                z-index: 0;
                background-color: rgba(255, 255, 255, 0.9);
                -moz-transform: scale(.99);
                -webkit-transform: scale(.99);
                -o-transform: scale(.99);
                transform: scale(.99);
                @include box-shadow(inset 0 2px 6px -4px #00000029);
            }
            40% {
                top: -500px;
                z-index: 10;
                background-color: rgba(255, 255, 255, 0.9);
                -moz-transform: scale(.99);
                -webkit-transform: scale(.99);
                -o-transform: scale(.99);
                transform: scale(.99);
                @include box-shadow(0 3px 6px #00000029);
            }
            50% {
                top: -500px;
                z-index: 10;
                transform: none;
                background-color: rgba(255, 255, 255, 0.9);
                @include box-shadow(0 3px 6px #00000029);
            }
            100% {
                top: -365px;
                z-index: 10;
                transform: none;
                background-color: rgba(255, 255, 255, 0.9);
                @include box-shadow(0 3px 6px #00000029);
            }
        }

        @keyframes movingForward {
            0% {
                top: -365px;
                z-index: 10;
                transform: none;
                background-color: rgba(255, 255, 255, 0.9);
                @include box-shadow(0 3px 6px #00000029);
            }
            50% {
                top: -500px;
                z-index: 10;
                transform: none;
                background-color: rgba(255, 255, 255, 0.9);
                @include box-shadow(0 3px 6px #00000029);
            }
            60% {
                top: -500px;
                z-index: 10;
                background-color: rgba(255, 255, 255, 0.9);
                -moz-transform: scale(.99);
                -webkit-transform: scale(.99);
                -o-transform: scale(.99);
                transform: scale(.99);
                @include box-shadow(0 3px 6px #00000029);
            }
            65% {
                top: -500px;
                z-index: 0;
                background-color: rgba(255, 255, 255, 0.9);
                -moz-transform: scale(.99);
                -webkit-transform: scale(.99);
                -o-transform: scale(.99);
                transform: scale(.99);
                @include box-shadow(inset 0 2px 6px -4px #00000029);
            }
            100% {
                top: 1px;
                z-index: 0;
                background-color: rgba(255, 255, 255, 0.9);
                -moz-transform: scale(.98);
                -webkit-transform: scale(.98);
                -o-transform: scale(.98);
                transform: scale(.98);
                @include box-shadow(inset 0 2px 6px -4px #00000029);
            }
        }
    }

    .pl, .de, .en {
        .white-band {
            .large-box {
                display: none;
                @media (max-width: 1199.98px) {
                    display: inherit;
                }
            }
        }
    }

    .pl, .de {
        .white-band {
            .large-box {
                @media (max-width: 1199.98px) {
                    .carousel-inner {
                        height: 265px;
                    }
                }
                @media (max-width: 991.98px) {
                    .carousel-inner {
                        height: 290px;
                    }
                }
                @media (max-width: 767.98px) {
                    .carousel-inner {
                        height: 358px;
                    }
                }
                @media(max-width: 575.98px) {
                    p {
                        font: 500 16px/21px Lato;
                    }
                }
                @media (max-width: 500.98px) {
                    .carousel-inner {
                        height: 355px;
                    }
                }
                @media (max-width: 455.98px) {
                    .carousel-inner {
                        height: 420px;
                    }
                }
                @media (max-width: 398.98px) {
                    .carousel-inner {
                        height: 465px;
                    }
                }
                @media (max-width: 370.98px) {
                    .carousel-inner {
                        height: 500px;
                    }
                }
                @media (max-width: 330.98px) {
                    .carousel-inner {
                        height: 540px;
                    }
                }
            }
        }
    }

    .en {
        .white-band {
            .large-box {
                @media (max-width: 1199.98px) {
                    .carousel-inner {
                        height: 265px;
                    }
                }
                @media (max-width: 991.98px) {
                    .carousel-inner {
                        height: 312px;
                    }
                }
                @media (max-width: 767.98px) {
                    .carousel-inner {
                        height: 335px;
                    }
                }
                @media(max-width: 575.98px) {
                    p {
                        font: 500 16px/21px Lato;
                    }
                }
                @media (max-width: 475.98px) {
                    .carousel-inner {
                        height: 375px;
                    }
                }
                @media (max-width: 447.98px) {
                    .carousel-inner {
                        height: 430px;
                    }
                }
                @media (max-width: 394.98px) {
                    .carousel-inner {
                        height: 500px;
                    }
                }
                @media (max-width: 350.98px) {
                    .carousel-inner {
                        height: 525px;
                    }
                }
            }
        }
    }

    .de {
        .white-band {
            .large-box {
                @media (max-width: 1199.98px) {
                    .carousel-inner {
                        height: 290px;
                    }
                }
                @media (max-width: 991.98px) {
                    .carousel-inner {
                        height: 290px;
                    }
                }
                @media (max-width: 767.98px) {
                    .carousel-inner {
                        height: 358px;
                    }
                }
                @media(max-width: 575.98px) {
                    p {
                        font: 500 16px/21px Lato;
                    }
                }
                @media (max-width: 500.98px) {
                    .carousel-inner {
                        height: 355px;
                    }
                }
                @media (max-width: 455.98px) {
                    .carousel-inner {
                        height: 420px;
                    }
                }
                @media (max-width: 398.98px) {
                    .carousel-inner {
                        height: 465px;
                    }
                }
                @media (max-width: 370.98px) {
                    .carousel-inner {
                        height: 500px;
                    }
                }
                @media (max-width: 330.98px) {
                    .carousel-inner {
                        height: 540px;
                    }
                }
            }
        }
    }

    .gray-band {
        position: relative;
        z-index: 9;
        background-color: $background-gray-color;
        padding: 158px 0 202px;
        @media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1) {
            padding: 150px 0;
        }
        @media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi) {
            padding: 150px 0;
        }
        @media (max-width: 1199.98px) {
            padding: 60px 0 175px;
        }
        @media (max-width: 991.98px) {
            padding: 60px 0 137px;
        }

        .box-img-wrapper {
            .img-wrapper {
                position: relative;
                @media(max-width: 991.98px) {
                    padding-top: 20px;
                }

                span {
                    font: 500 1.375rem/2rem Lato;
                    @media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1) {
                        font: 500 1.2rem/1.5rem Lato;
                    }
                    @media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi) {
                        font: 500 1.2rem/1.5rem Lato;
                    }
                    @media(max-width: 1199.98px) {
                        font: 500 1rem/1.5rem Lato;
                    }
                    @media(max-width: 412.98px) {
                        font: 500 0.875rem/1.5rem Lato;
                    }
                }
            }
        }

        .img_icon_box {
            position: relative;
            z-index: 3;
            height: 92px;
            @media (max-width: 1199.98px) {
                height: 70px;
            }
            @media (max-width: 412.98px) {
                height: 45px;
            }

            img.thunderbolt, img.rotateAnim, img.pdf {
                height: inherit;
                position: relative;
                z-index: 2;
                @media (max-width: 1199.98px) {
                    width: auto;
                }
                @media (max-width: 412.98px) {
                    height: 45px;
                }
            }

        }

        img.redShadow {
            height: 87px;
            top: 42%;
            width: auto;
            position: absolute;
            z-index: 0;
            margin-right: -50%;
            transform: translate(-50%, -50%);
            transition: left .6s;
            @media (max-width: 1199.98px) {
                height: 70px;
            }
            @media (max-width: 412.98px) {
                height: 45px;
            }
        }

        img.redShadow#first {
            left: 65%;
        }

        img.redShadow#second, img.redShadow#third {
            left: 60%;
        }

        img.redShadow#first.offset, img.redShadow#second.offset, img.redShadow#third.offset {
            transition: left .6s;
            left: 40%;
        }

        .img-wrapper {
            &:nth-child(1):hover .img_icon_box:before {
                animation-name: blink;
                animation-duration: 2s;
                animation-iteration-count: infinite;
                animation-timing-function: linear;
                opacity: .7;
                color: $color-red;

                @media (max-width: 1199.98px) {
                    font-size: 37px;
                }
                @media(max-width: 576.98px) {
                    font-size: 26px;
                }
            }

            &:nth-last-child(1):hover .img_icon_box:before {
                animation-name: blink;
                animation-duration: 2s;
                animation-iteration-count: infinite;
                animation-timing-function: linear;
                opacity: .7;
                color: $color-red;
                @media (max-width: 1199.98px) {
                    font-size: 27px;
                    top: 48%;
                    left: 69%;
                }
                @media(max-width: 576.98px) {
                    font-size: 20px;
                    top: 42%;
                    left: 68%;
                }
            }

            .img_icon_box {
                position: relative;
                z-index: 2;
            }
        }

        .rotateAnim {
            transition-property: transform;
            transition-duration: 1s;
        }
    }

    .yt-band {
        background: $background-gray-color;
        position: relative;
        height: 600px;
        @media (max-width: 1199.98px) {
            height: 490px
        }
        @media(max-width: 991.98px) {
            height: 369px;
        }
        @media (max-width: 767.98px) {
            height: 263px;
        }
        @media (max-width: 575.98px) {
            height: 198px;
        }

        .resp-container {
            position: absolute;
            z-index: 11;
            top: 148px;
            max-width: 930px;
            left: 50%;
            margin-right: -50%;
            transform: translate(-50%, -50%);
            @media(max-width: 991.98px) {
                top: 95px;
            }
            @media (max-width: 767.98px) {
                top: 41px;
            }
            @media(max-width: 575.98px) {
                top: 8px;
            }
        }

        .resp-iframe {
            width: 100%;
            height: 100%;
        }
    }

    .contact {
        padding: 60px 0;
        background: $background-gray-color;

        button[type='submit'] {
            border-radius: 0;
            width: 265px;
            height: 56px;
            float: right;
            background-color: $color-red;
            font: 300 16px/19px Lato;
            opacity: 1;
            color: #FFFFFF;
            @media(max-width: 575.98px) {
              float: inherit;
              margin: 0 auto;
              display: block;
            }
            @media(max-width: 350px) {
                width: 216px;
            }
        }

        button[type='submit'][disabled] {
            color: red;
            opacity: 0.5;
        }

        .worker {
            .imgWorker {
                width: 75px;
                height: 95px;
                float: left;
                margin-right: 20px;
            }

            .contactWorker {
                p.description {
                    font: 400 20px/32px Lato;
                    @media(max-width: 1199.98px) {
                        font: 500 16px/24px Lato;
                    }

                    span {
                        color: $color-red;
                        font: 400 20px/32px Lato;
                        @media(max-width: 1199.98px) {
                            font: 500 16px/24px Lato;
                        }
                    }
                }
            }
        }
    }
    .form-error input {
        border-color: $color-red;
    }

    .form-group .error {
        display: none;
    }

    .form-group.form-error .error {
        display: block;
        color: $color-red;
    }

    p.error {
        color: $color-red;
    }

    p.success {
        color: green;
    }
</style>



