<template>
    <section class="characteristic">
        <b-container>
            <b-row>
                <b-col v-if='offset' cols="0" sm="0" md="0" lg="3"></b-col>
                <b-col cols="12" sm="6" md="6" lg="3"
                       v-for="characteristic in data"
                       :key="characteristic.title">
                    <div class="mx-auto" :style="{width: widthElement + 'px'}">
                        <b-img :src="require(`@/assets/images/products/parameters/${characteristic.img}`)"></b-img>
                        <p>{{characteristic.title}}</p>
                        <p>{{characteristic.description}}</p>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
    export default {
        name: "Characteristic",
        props: ['offset', 'widthElement' , 'data']
    }
</script>

<style scoped>
</style>
