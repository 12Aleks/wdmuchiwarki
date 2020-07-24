<template>
    <section id="main" class="y2">
        <carusel :sliders="y2Slider"></carusel>
        <caracteristic :offset="position"
                       :data="y2Characteristic"></caracteristic>
        <newsletter-button></newsletter-button>
        <section class="descriptions presentation">
            <b-container>
                <b-row>
                    <b-col class="img_box" cols="12" sm="12" md="6" lg="6">
                        <b-img fluid :src="require(`@/assets/images/products/y2/elements/y_2.png`)"
                               alt="multiTank S"></b-img>
                    </b-col>
                    <b-col cols="12" sm="12" md="6" lg="6">
                        <p class="descriptionMulti mb-0">
                            Złącze Y2 służy do wprowadzania światłowodu lub mikrorurki w kanalizację HDPE 32 i 40 w
                            której znajduje się już światłowód lub mikrorurka. Współpracuje z Głowicą Typhoon 32/40.
                        </p>
                        <p class="descriptionMulti mb-0">
                            Standardowo możliwość dodmuchiwania jeśli w rurze znajduje się 1 lub 2 kable do 16 m. Na
                            zamówienie możliwe wykonanie akcesoriów pozwalających na instalację światłowodu w rurę HDPE
                            z większością ilością istniejących kabli.
                        </p>
                    </b-col>
                    <carac-desc :data="y2ProductsCharacteristic"></carac-desc>
                </b-row>
            </b-container>
        </section>
        <section class="parameters">
            <b-container>
                <b-row>
                    <b-col cols='12'>
                        <h3>{{$t('y2.table.title')}}</h3>
                    </b-col>
                    <b-col cols="12">

                        <b-table-simple hover small table-variant="light" responsive="sm">
                            <colgroup>
                                <col>
                                <col>
                            </colgroup>
                            <colgroup>
                                <col>
                                <col>
                                <col>
                            </colgroup>
                            <colgroup>
                                <col>
                                <col>
                            </colgroup>
                            <colgroup>
                                <col>
                                <col>
                            </colgroup>
                            <colgroup>
                                <col>
                                <col>
                            </colgroup>
                            <b-tbody>
                                <b-tr>
                                    <b-td>{{$t('y2.table.header.firstLineFirst')}}</b-td>
                                    <b-td>mm</b-td>
                                    <b-td>5-22</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>{{$t('y2.table.header.secondLineFirst')}}</b-td>
                                    <b-td>-</b-td>
                                    <b-td>HDPE 32</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-th colspan="3" class="text-left">{{$t('y2.table.cable.title')}}</b-th>
                                </b-tr>
                                <b-tr>
                                    <b-td>{{$t('y2.table.cable.firstLineFirst')}}</b-td>
                                    <b-td>szt.</b-td>
                                    <b-td>2</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>{{$t('y2.table.cable.secondLineFirst')}}</b-td>
                                    <b-td>mm</b-td>
                                    <b-td>16</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-th colspan="3" class="text-left">{{$t('y2.table.air.title')}}
                                    </b-th>
                                </b-tr>
                                <b-tr>
                                    <b-td>{{$t('y2.table.air.firstLineFirst')}}</b-td>
                                    <b-td>bar</b-td>
                                    <b-td>15</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>{{$t('y2.table.air.secondLineFirst')}}</b-td>
                                    <b-td>cal</b-td>
                                    <b-td>1 x ¾”</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>{{$t('y2.table.air.thirdLineFirst')}}</b-td>
                                    <b-td>-</b-td>
                                    <b-td>{{$t('y2.table.air.thirdLineThird')}}</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-th colspan="3" class="text-left">{{$t('y2.table.other.title')}}</b-th>
                                </b-tr>
                                <b-tr>
                                    <b-td>{{$t('y2.table.other.firstLineFirst')}}</b-td>
                                    <b-td>cm</b-td>
                                    <b-td>23 x 13 x 12</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>{{$t('y2.table.other.secondLineFirst')}}</b-td>
                                    <b-td>kg</b-td>
                                    <b-td>5,0</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-th colspan="3" class="text-left">{{$t('y2.table.box.title')}}</b-th>
                                </b-tr>
                                <b-tr>
                                    <b-td>{{$t('y2.table.box.firstLineFirst')}}</b-td>
                                    <b-td>cm</b-td>
                                    <b-td>46 x 35 x 17</b-td>
                                </b-tr>
                                <b-tr class="last">
                                    <b-td>{{$t('y2.table.box.secondLineFirst')}}</b-td>
                                    <b-td>kg</b-td>
                                    <b-td>9,0??</b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>
                    </b-col>
                </b-row>
            </b-container>

        </section>
        <other-products :otherProducts="otherProducts"></other-products>
        <contact></contact>
    </section>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "Y2",
        data() {
            return {
                position: true,
                otherProducts: 'heading.otherProducts'
            }
        },
        computed: {
            ...mapGetters([
                'y2Slider',
                'y2Characteristic',
                'y2ProductsCharacteristic'
            ])
        }
    }
</script>

<style scoped>

</style>
