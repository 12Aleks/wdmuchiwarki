<template>
    <div id="app">
        <section id="navigation" :class="{'scroll-nav': navigation}" v-scroll="handleScroll">
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
                                <div class="language d-flex justify-content-end pr-2">
                                    <ul>
                                        <li class="d-inline ml-3" v-for="locale in locales" :key="locale"
                                            :class="{activeLanguage: $i18n.locale === locale }"
                                            @click="switchLocale(locale)">
                                            {{locale}}
                                        </li>
                                    </ul>
                                </div>
                                <b-navbar-toggle class='mr-2' target="nav-collapse" dark></b-navbar-toggle>

                                <b-collapse id="nav-collapse" is-nav>
                                    <scrollactive class="ml-auto pr-2"
                                                  active-class="active"
                                                  :offset="100"
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
        <footer>
            <b-container>
                <b-row>
                    <b-col cols="12">
                        <div class="navbar justify-content-center">
                            <router-link v-for='(elem, index) in footerMenu' :key='index' :to="`${elem.url}`"
                                         class="nav-link"
                                         target="_blank">{{elem.title}}
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
            handleScroll: function () {
                if (window.scrollY > 100) {
                    this.navigation = true;
                } else {
                    this.navigation = false;
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
    li {
        text-decoration: none;
        text-transform: uppercase;
        cursor: pointer;
    }
    li.activeLanguage{
        color: $color-red;
    }
</style>


