<template>
    <div id="app">
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
                                                :src="require(`@/assets/images/siteHeader/brand.png`)"
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
                            <router-link v-for='(elem, index) in footerMenu'
                                         :key='index'
                                         :to="`${elem.url}`"
                                         class="nav-link"
                                         target="_blank">
                                {{elem.title}}
                            </router-link>
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
                    {title: 'TERMA SPÓŁKA', url: 'http://www.termagroup.pl/'},
                    {title: 'MASZYNY BUDOWLANE', url: 'http://www.termamax.pl/ru/glowna'},
                    {title: 'USŁUGI PRZEMYSŁOWE', url: 'http://www.termaservices.pl/'},
                    {title: 'GALWANIZERNIA', url: 'http://www.termagalvanic.pl/'},
                    {title: 'PRODUKTY MEDYCZNE', url: 'https://www.termamed.pl/'},
                    {title: 'WYPRZEDAŻ GRZEJNIKÓW', url: 'http://www.termaoutlet.pl/'},
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
