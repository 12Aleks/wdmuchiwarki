<template>
    <section class="contact">
        <b-container>
            <b-row>
                <b-col cols="12" sm="12" md="12" lg="12">
                    <h3 class="text-center">{{$t('contact-footer-text')}}</h3>
                    <router-link class="btn mx-auto d-block"
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

<style lang="scss" scoped>
    .contact {
        padding: 140px 15px;
        @media(max-width: 575.98px) {
            padding: 70px 0;
        }

        a {
            margin-top: 80px;
            padding: 12px;
            background: #E72327;
            border-radius: 1px;
            width: 260px;
            height: 54px;
            font: 100 22px/29px Lato;
            color: #fff;
            text-transform: uppercase;

            &:hover {
                transition: all .8s;
                background: #707070;
                color: #fff;
            }

            @media(max-width: 1199.98px) {
                font: 100 20px/28px Lato;
            }
            @media(max-width: 991.98px) {
                font: 500 18px/26px Lato;
            }
        }
    }

</style>
