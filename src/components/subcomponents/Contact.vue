<template>
    <section class="contact">
        <b-container>
            <b-row>
                <b-col cols="12" sm="12" md="12" lg="12">
                    <h3 class="text-center">Skontaktuj się z nami, złóż zapytanie.</h3>
                    <router-link  class="btn mx-auto d-block"
                                         :to="{ name:'Home', params: {lang: $i18n.locale}, hash: '#contact'}"
                    >
                      {{$t('heading.contact')}}
                    </router-link>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
    export default {
        name: "Contact"
    }
</script>

<style scoped>
    .contact {
        padding: 140px 15px;
    }
    a {
        margin-top: 80px;
        padding: 10px;
        background: #E72327;
        border-radius: 1px;
        width: 265px;
        height: 54px;
        font: 100 22px/29px Lato;
        color: #fff;
        text-transform: uppercase;
    }
    a:hover {
        transition: all .8s;
        background: #707070;
        color: #fff;
    }
</style>
