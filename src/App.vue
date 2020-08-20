<template>
    <div id="app" :class="$t('lang')">
        <section id="navigation" :class="{'scroll-nav': navigation, smallScreen : smallScreen}" v-scroll="handleScroll">
            <b-container>
                <b-row>
                    <b-col cols="12" class="mt-0 mt-sm-0 mt-md-1 mt-lg-1 mb-0 mb-sm-0 mb-md-1 mb-lg-1">
                        <b-navbar toggleable="lg">

                            <router-link :to="{ name: 'Home', params: { lang: $i18n.locale }}" title="Strona główna"
                                         rel="home" class="navbar-brand">
                                <div class="d-flex align-items-center">
                                    <div class="logo-wrapper img-fluid d-inline-block align-top">
                                        <img :src="require(`@/assets/images/siteHeader/logo.png`)" alt="logo"
                                             class="logo-symbol">
                                        <img :src="require(`@/assets/images/siteHeader/logotyp.png`)"
                                             alt="logotyp"
                                             class="name-symbol">
                                        <img :src="require(`@/assets/images/siteHeader/uzupelnienie.png`)"
                                             alt="logotyp" class="subname-symbol">
                                    </div>
                                    <div class="d-flex flex-column justify-content-center site-name-slogan">
                                        <span id="site_name"><b-img
                                                :src="require(`@/assets/images/siteHeader/${$t('heading.siteTitle')}`)"
                                                alt="site name"></b-img></span>
                                    </div>
                                </div>
                            </router-link>

                            <div class="rightMenu">
                                <div class="language d-flex justify-content-end pr-0 pr-sm-0 pr-md-0 pr-lg-2">
                                    <ul>
                                        <li class="d-inline ml-3" v-for="locale in locales" :key="locale"
                                            :class="{activeLanguage: $i18n.locale === locale }"
                                            @click="switchLocale(locale)">
                                            {{locale}}
                                        </li>
                                    </ul>
                                </div>

                                <b-navbar-toggle target="nav-collapse" dark></b-navbar-toggle>

                                <b-collapse id="nav-collapse" is-nav>
                                    <scrollactive class="ml-auto pr-2"
                                                  active-class="active"
                                                  :offset="80"
                                                  :duration="800"
                                                  bezier-easing-value=".5,0,.35,1">
                                        <a v-for="(elem, index) in mainMenu" :key='index'
                                           :href="`#` + `${elem.url}`"
                                           class="scrollactive-item">
                                            {{ $t(elem.title)}}
                                        </a>
                                    </scrollactive>
                                </b-collapse>
                            </div>
                        </b-navbar>
                    </b-col>
                </b-row>
            </b-container>
        </section>
        <router-view/>
        <div>
            <scrollactive
                    :offset="100"
                    :duration="1000"
                    bezier-easing-value=".5,0,.35,1">
                <a class="goTop scrollactive-item"
                   :href="`${active? '#app' : ''}`"
                   :class="{top : active, bottom: !active }"
                >
                    <span class="icon"></span>
                </a>
            </scrollactive>
        </div>
        <footer>
            <b-container>
                <b-row>
                    <b-col cols="12">
                        <div class="navbar justify-content-center">
                            <a v-for='(elem, index) in footerMenu'
                                         :key='index'
                                         :href="`${$t(elem.url)}`"
                                         class="nav-link"
                                         target="_blank">
                                {{elem.title}}
                            </a>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </footer>

    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                show: true,
                navigation: false,
                activeLanguage: false,
                windowTop: 0,
                topElement: 0,
                locales: process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(','),
                scrollPosition: null,
                smallScreen: false,
                active: false,
                mainMenu: [
                    {
                        title: 'heading.presentation',
                        url: 'presentation',
                    },
                    {
                        title: 'heading.products',
                        url: 'products-band',
                    },
                    {
                        title: 'heading.contact',
                        url: 'contact',
                    }
                ],
                footerMenu: [
                    {title: 'TERMA SPÓŁKA', url: 'footerMenu.group'},
                    {title: 'MASZYNY BUDOWLANE', url: 'footerMenu.max'},
                    {title: 'USŁUGI PRZEMYSŁOWE', url: 'footerMenu.service'},
                    {title: 'GALWANIZERNIA', url: 'footerMenu.galvanic'},
                    {title: 'PRODUKTY MEDYCZNE', url: 'footerMenu.med'},
                    {title: 'WYPRZEDAŻ GRZEJNIKÓW', url: 'footerMenu.outlet'},
                ]
            }
        },
        methods: {
            handleScroll() {
                if (window.scrollY > 50) {
                    this.smallScreen = true;
                    this.navigation = true;
                } else {
                    this.navigation = false;
                    this.smallScreen = false
                }

                if (document.body.scrollHeight - 500 <= window.innerHeight + window.scrollY) {
                    this.active = true
                }else{
                    this.active = false
                }
            },
            switchLocale(locale) {
                if (this.$i18n.locale !== locale) {
                    this.$i18n.locale = locale;
                    const to = this.$router.resolve({params: {locale}})
                    this.$router.push(to.location)
                }
            },
        }
    }
</script>


<style scoped lang="scss">
    #navigation.scroll-nav {
        background-color: rgba(255, 255, 255, 1) !important;
        height: 87px;
        transition: height .2s, background-color 1s;
        @media(max-width: 991.98px) {
            height: auto;
        }
        .navbar {
            .navbar-brand {
                max-height: 47px;
                .logo-wrapper{
                    height: 40px;
                    transition: all .2s;
                    @media(max-width: 991.98px) {
                        height: 35px;
                    }
                    .img {
                        display: inherit !important;
                    }

                    .logo-symbol {
                        max-height: 2.5rem;
                        height: 100%;
                        display: inline-block;
                    }

                    .name-symbol {
                        display: inline-block;
                        margin: auto 0 auto 15px;
                    }

                    .subname-symbol {
                        display: none !important;
                    }
                }
            }
            .rightMenu {
                @media(max-width: 991.98px) {
                    height: auto;
                    .language {
                        display: none !important;
                    }
                }
            }
        }
    }

    #navigation {
        background-color: rgba(255, 255, 255, 0.7);
        @include box-shadow(0 0 3px 0 rgba(235,235,235,1));
        width: 100%;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 100;
        height: 124px;
        transition: height .2s, background-color 1s;
        @media(max-width: 991.98px) {
            height: auto;
        }
        .navbar {
            @media (max-width: 575.98px) {
                padding-right: 0;
                padding-left: 0;
            }
            .navbar-brand, .rightMenu {
                width: 50%;
            }
            .navbar-brand {
                font-size: inherit;
                @media(max-width: 412.98px) {
                    width: 41%;
                }
                .logo-wrapper {
                    height: 90px;
                    padding-right: 42px;
                    border-right: 1px solid rgb(112, 112, 112);
                    float: none;
                    transition: all .2s;
                    @media(max-width: 991.98px) {
                        height: auto;
                    }
                    @media(max-width: 991.98px) {
                        padding-right: 29px;
                    }
                    @media(max-width: 767.98px) {
                        padding-right: 20px;
                    }
                    @media(max-width: 575.98px) {
                        padding-right: 15px;
                    }
                    @media(max-width: 525.98px) {
                        padding-right: 0;
                        border-right: 0;
                    }
                    img {
                        display: block;
                        position: relative;
                        margin: 0 auto;
                    }
                    .logo-symbol {
                        width: auto;
                        max-height: 3rem;
                    }

                    img.logo-symbol {
                        width: auto;
                        max-height: 2.5rem;
                        @media(max-width: 991.98px) {
                            width: 2.1875rem;
                        }
                    }

                    img.name-symbol, img.subname-symbol {
                        margin-top: 0.8rem;
                        margin-bottom: 0.2rem;
                    }

                    img.name-symbol {
                        max-width: 105px;
                        @media(max-width: 991.98px) {
                            width: 75px;
                        }
                        @media (max-width: 575.98px) {
                            margin-top: 0.6rem;
                            margin-bottom: 0.4rem;
                        }
                    }

                    img.subname-symbol {
                        @media(max-width: 991.98px) {
                            width: 50px;
                            margin-top: 0.8rem;
                            margin-bottom: 0.2rem;
                        }
                        @media (max-width: 575.98px) {
                            margin-top: 0.5rem;
                            margin-bottom: 0;
                        }
                    }
                }
            }

            #site_name {
                padding-left: 32px;
                max-width: 276px;
                height: auto;
                @media(max-width: 991.98px) {
                    max-width: 200px;
                    padding-left: 25px;
                }
                @media (max-width: 767.98px) {
                    padding-left: 20px;
                }
                @media (max-width: 575.98px) {
                    max-width: 124px;
                    padding-left: 18px;
                }
                @media(max-width: 525.98px) {
                    display: none;
                }
                img {
                    width: 100%;
                }
            }

            .rightMenu {
                @media(max-width: 412.98px) {
                    width: 59%;
                }
                .language {
                    display: inherit;

                    ul {
                        li {
                            font: 400 1rem/1rem Lato;
                            text-decoration: none;
                            text-transform: uppercase;
                            cursor: pointer;
                        }

                        li.activeLanguage {
                            color: $color-red;
                        }
                    }
                }

                .navbar-collapse {
                    nav.scrollactive-nav {
                        a.active {
                            color: $color-red !important;
                        }

                        a {
                            color: rgb(112, 112, 112);
                            font: 100 1.125rem Lato, Sans-Serif;
                            text-decoration: none;
                            text-transform: uppercase;
                            @media(max-width: 991.98px) {
                                font: 100 1rem Lato, Sans-Serif;
                            }
                            @media(min-width: 992px) {
                                &:not(:nth-last-child(1)) {
                                    padding-right: 10px;
                                }
                            }
                            @media(max-width: 991.98px) {
                                @include flexbox;
                                @include flex-direction(column);
                                @include align-items(flex-end);
                                @include justify-content(center);
                                margin-top: 10px;
                            }
                        }
                    }
                }
            }

            @media(max-width: 991.98px) {
                align-items: inherit;
                .navbar-brand {
                    margin-right: 0;
                    max-height: 86px;
                    @include flexbox;
                    @include flex-direction(column);
                    @include justify-content(center);
                }
                .rightMenu {
                    @include flexbox;
                    @include flex-direction(column);
                    @include align-items(flex-end);
                    @include justify-content(flex-start);
                    .navbar-nav {
                        margin-top: 15px;
                    }
                }
            }
        }

        .navbar-toggler {
            padding: 0;
            border-color: rgba(0, 0, 0, 0.2);
            &:focus, &:active {
                border-color: rgba(0, 0, 0, 0.2);
                outline: 1px solid rgb(245, 243, 244);
                border-radius: .25rem;
            }
        }
    }


    .de #navigation,.en #navigation{
        .navbar{
            .navbar-brand{
                .logo-wrapper{
                    @media(max-width: 767.98px) {
                        padding-right: 0;
                        border-right: 0;
                    }
                }
            }
            #site_name {
                max-width: 100%;
                @media(max-width: 991.98px) {
                    padding-left: 25px;
                }
                @media (max-width: 767.98px) {
                    display: none;
                }
                img {
                    width: 100%;
                }
            }
        }
    }


    .goTop {
        border-radius: 50px;
        position: fixed;
        width: 45px;
        height: 45px;
        display: block;
        bottom: 150px;
        right: 15px;
        border: none;
        z-index: 10;
        padding: 4px;
        .icon {
            position: absolute;
            top: 41%;
            left: 24%;
            border-right: 2px solid  white;
            border-bottom: 2px solid  white;
            margin: 0 0 3px 4px;
            width: 16px;
            height: 16px;
            transform:  rotate(225deg);
            -webkit-transform: rotate(225deg);
            -moz-transform: rotate(225deg);
            -o-transform:  rotate(225deg);
            -ms-transform: rotate(225deg);
        }
    }
    .bottom{
        opacity: 0;
        transition: opacity .8s;
    }
    .top{
        background-color: $color-red;
        transition: opacity .8s;
        opacity: 1;
    }
    footer {
        .navbar {
            a {
                display: block;
                color: $font-color;
                padding: 10px 8px;
                text-decoration: none;
                text-align: center;
                font: 500 1rem/1.5rem Lato;
            }

            &:nth-child(1) {
                padding: 10px 8px 10px 0;
            }
        }
    }
</style>
