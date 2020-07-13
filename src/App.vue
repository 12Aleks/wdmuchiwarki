<template>
    <div id="app">
        <section id="navigation" :class="{'scroll-nav': navigation}" v-scroll="handleScroll">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 mt-0 mt-sm-0 mt-md-2 mt-lg-2 mb-0 mb-sm-0 mb-md-2 mb-lg-2">
                        <nav id='navbar-main' class="navbar navbar-expand-lg" :class="{'f-nave': fnav}">

                            <!-- Brand -->
                            <router-link to="/pl" title="Strona główna" rel="home" class="navbar-brand w-50">
                                <div class="d-flex align-items-center">
                                    <div class="logo-wrapper img-fluid d-inline-block align-top">
                                        <b-img :src="require(`@/assets/images/siteHeader/logo.png`)" alt="logo"
                                               class="logo-symbol"></b-img>
                                        <b-img :src="require(`@/assets/images/siteHeader/logotyp.png`)" alt="logotyp"
                                               class="name-symbol"></b-img>
                                        <b-img :src="require(`@/assets/images/siteHeader/uzupelnienie.png`)"
                                               alt="logotyp" class="subname-symbol"></b-img>
                                    </div>
                                    <div class="d-flex flex-column justify-content-center site-name-slogan">
                                        <span id="site_name"><b-img
                                                :src="require(`@/assets/images/siteHeader/brand.png`)"
                                                alt="site name"></b-img></span>
                                    </div>
                                </div>
                            </router-link>

                            <div class="rightMenu w-50">
                                <!-- Toggler/collapsibe Button -->
                                <b-navbar-toggle target="nav-collapse">
                                    <div id="nav-icon">
                                        <div></div>
                                    </div>
                                </b-navbar-toggle>
                                <div class="language d-flex justify-content-end">
                                    <ul class="pr-2">
                                        <li class="d-inline ml-3" v-for="(lang, index) in languages" :key="index"
                                        ><router-link :to="`${lang.url}`">{{lang.title}}</router-link>
                                        </li>
                                    </ul>
                                </div>
                                <!-- Navbar links -->
                                <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                                    <ul class="navbar-nav mt-3 float-right">
                                        <li class="nav-item float-right" v-for="(elem, index) in mainMenu" :key='index'>
                                            <router-link class="nav-item nav-link" :class="`${elem.classActive}`"
                                                         :to="`${elem.url}`">{{elem.title}}<span
                                                    class="sr-only">(current)</span></router-link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>

                </div>
            </div>
        </section>
        <router-view></router-view>
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                        <div class="navbar justify-content-center">
                            <router-link v-for='(elem, index) in footerMenu' :key='index' :to="`${elem.url}`" class="nav-link"
                               target="_blank">{{elem.title}}</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: 'App',
        data() {
            return {
                fnav: false,
                navigation: false,
            }
        },
        methods: {
            handleScroll: function () {
                if (window.scrollY > 100) {
                    this.fnav = true;
                    this.navigation = true;
                } else {
                    this.fnav = false;
                    this.navigation = false;
                }
            }
        },
        computed: {
            ...mapGetters({
                languages: 'languages',
                mainMenu: 'mainMenu',
                footerMenu: 'footerMenu'
            })
        }



    }
</script>


