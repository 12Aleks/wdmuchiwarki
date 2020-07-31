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
                                            @click="switchLocale(locale)">
                                            {{locale}}
                                        </li>
                                    </ul>
                                </div>
                                <b-navbar-toggle class='mr-2' target="nav-collapse" dark></b-navbar-toggle>

                                <b-collapse id="nav-collapse" is-nav>
                                    <!-- Right aligned nav items -->
                                    <b-navbar-nav class="ml-auto">
                                        <b-nav-item v-for="(elem, index) in mainMenu" :key='index'
                                                    @click="scrollToElement({behavior: 'smooth'}, `${elem.url}`)"
                                                    :class="{active:active === elem.url}">
                                            {{ $t(elem.title)}}
                                        </b-nav-item>
                                    </b-navbar-nav>
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
                active: null,
                windowTop: 0,
                topElement: 0,
                locales: process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(','),
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
            toggleNavbar() {
                this.show = !this.show;
            },
            handleScroll: function () {
                if (window.scrollY > 100) {
                    this.fnav = true;
                    this.navigation = true;
                } else {
                    this.fnav = false;
                    this.navigation = false;
                }
            },
            scrollToElement(options, element) {
                this.active = element;
                const el = this.$el.getElementsByClassName(element)[0];
                if (el) {
                    el.scrollIntoView(options);
                }
            },
            switchLocale(locale) {
                // this.active = null;
                if (this.$i18n.locale !== locale) {
                    this.$i18n.locale = locale;
                    const to = this.$router.resolve({params: {locale}})
                    this.$router.push(to.location)
                }
            },
        }
    }
</script>
<style scoped>
    li {
        text-decoration: none;
        text-transform: uppercase;
        cursor: pointer;
    }
</style>


