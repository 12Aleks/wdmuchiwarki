<template>
    <section id="main" :class="$t('lang')">
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
                            :interval="10000"
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
                                    :interval="10000"
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
        <div class="gray-band presentation"
             :ref="presentation">
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
        <div class="slider-band">
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
                                        href="mailto:filip.madzio@termagroup.pl">filip.madzio@termagroup.pl</a></p>
                                <p class="description mb-1" style="text-decoration: none"><span>T:</span><a
                                        href="tel:+48-669-097-469">+ 48 669 097 469</a></p>
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
                active: false,
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
                this.$store.dispatch('newPosition', index)
            },
            mouseleaveShadow(index) {
                this.$store.dispatch('oldPosition', index)
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



