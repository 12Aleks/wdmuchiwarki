<template>
    <b-row>
        <b-col cols="12" md="6" lg="4"
               v-for="(product, index) in products"
               :key="index"
               :class="product.styles"
               class="product-box"
               @mouseover="mouseover(index)"
               @mouseleave="mouseleave(index)">
            <router-link :to="{ name: `${product.name}`, params: { lang: $i18n.locale }}">
                <div class="product-box d-flex flex-column align-items-center justify-content-end pr-0 pl-0 pr-sm-4 pl-sm-4 pr-md-0 pl-md-0 pr-lg-0 pl-lg-0">
                    <b-img :class='{imgHoverOne: product.active}'
                           class="one"
                           :src="require(`@/assets/images/products/${product.backgroundOne}`)"
                           :alt="product.altOne"></b-img>
                    <b-img :class='{imgHoverTwo: product.active}'
                           class="two"
                           :src="require(`@/assets/images/products/${product.backgroundTwo}`)"
                           :alt="product.altTwo"></b-img>
                    <b-img :class='{imgHover: product.active}'
                           class='img_product'
                           :src="require(`@/assets/images/products/${product.photo}`)"
                           fluid
                           :alt="`${$t(product.title)}`"></b-img>
                    <p class="text-center pt-3 mb-0 descriptions">{{$t(product.title)}}</p>
                </div>
            </router-link>
        </b-col>
    </b-row>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "OtherProducts",
        methods: {
            mouseover(index) {
                this.$store.dispatch('down', index)
            },
            mouseleave(index) {
                this.$store.dispatch('up', index)
            }
        },
        computed: {
            ...mapGetters([
                'products'
            ])
        },
    }
</script>

<style scoped>

</style>
