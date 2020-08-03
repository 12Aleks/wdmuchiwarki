<template>
    <section class="newsletter">
        <b-container>
            <b-row>
                <b-col cols="12" sm="12" md="12" lg="12">
                    <a  class="btn mx-auto d-block"
                        :href="`/newsletters/${$t('downloads')}`" download
                    > {{$t('button')}}
                    </a>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
    export default {
        name: "NewsletterButton"
    }
</script>

<style scoped lang="scss">
    section.newsletter {
        position: relative;
        height: 1px;
        a {
            background: $color-red;
            border-radius: 1px;
            max-width: 310px;
            width: 100%;
            height: 56px;
            position: absolute;
            padding: 12px;
            top: -58px;
            left: 50%;
            margin-right: -50%;
            transform: translate(-50%, 50%);
            font: 100 18px/29px Lato;
            color: #fff;
            text-transform: uppercase;
            @media(max-width: 1199.98px){
                font: 100 20px/28px Lato;
            }
            @media(max-width: 991.98px){
                max-width: 260px;
                font: 500 18px/26px Lato;
            }
            &:hover {
                transition: all .8s;
                background: #707070;
                color: #fff;
            }
        }
    }
</style>

