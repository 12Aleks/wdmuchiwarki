<template>
    <b-col class='characteristic_desc' cols="12" sm="12" md="12" lg="12">
        <div class="characteristic-box mx-auto d-flex align-items-center">
            <div v-for="characteristicProd in  data"
                 :key="characteristicProd.title">
                <div style="width: 150px">
                    <b-img fluid class="d-block mx-auto"
                           :src="require(`@/assets/images/products/characteristic/${characteristicProd.img}`)"></b-img>
                    <p class="text-center">{{characteristicProd.title}}</p>
                </div>
            </div>
        </div>
    </b-col>
</template>

<script>
    export default {
        name: "CaracteristicDescription",
        props: ['data']
    }
</script>

<style scoped>

</style>
