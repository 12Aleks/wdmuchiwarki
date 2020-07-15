<template>
    <section id="main" class="typhoon_50">
        <carusel :sliders="typhoon50Slider"></carusel>
        <caracteristic :offset="position" :widthElement="widthElement" :data="typhoon50Characteristic"></caracteristic>
        <section class="newsletter">
            <b-container>
                <b-row>
                    <b-col cols="12" sm="12" md="12" lg="12">
                        <router-link class="btn mx-auto d-block"
                                     :to="{ name:'Home', params: {lang: $i18n.locale}}"
                        > Pobierz ulotkę
                        </router-link>
                    </b-col>
                </b-row>
            </b-container>
        </section>
        <section class="descriptions presentation">
            <b-container>
                <b-row>
                    <b-col class="img_box" cols="12" sm="12" md="6" lg="6">
                        <b-img fluid :src="require(`@/assets/images/products/typhoon_50/elements/typhoon_50.png`)"
                               alt="multiTank S"></b-img>
                    </b-col>
                    <b-col cols="12" sm="12" md="6" lg="6">
                        <p class="descriptionMulti mb-0">
                            Zestaw Typhoon 50/63 został zaprojektowany z myślą o wdmuchiwaniu mikrorurek pojedynczo oraz
                            w pakietach* w rury HDPE 50 i 63. Możliwe jest również wdmuchiwanie światłowodów 5-22 mm
                            oraz instalacja w rury HDPE 32 i 40 po zastosowaniu redukcji za przyłączem powietrza.**
                            Zestaw jest rozdzielony na głowicę oraz przyłącze powietrza co skutkuje:
                        </p>
                        <ul class="descriptionMulti">
                            <li>- niewielkimi
                                rozmiarami detali i możliwością ergonomicznego montażu,</li>
                            <li>- możliwością podłączenia przyłącza powietrza bezpośrednio do rury w wykopie,</li>
                            <li>- doprowadzeniem powietrza z dwóch stron pod kątem
                                45° co zmniejsza spadek ciśnienia o ok. 0,5 bara w stosunku do pojedynczego przyłącza pod
                                kątem 90°.
                            </li>
                        </ul>
                        <p class="footnote mb-0">
                            *Więcej informacji dot. wdmuchiwania pakietów mikrorurek dostępne w karcie katalogowej.
                        </p>
                        <p class="footnote">
                        **Zestaw akcesoriów na zamówienie.
                        </p>
                    </b-col>
                    <carac-desc :data="typhoon50ProductsCharacteristic"></carac-desc>
                </b-row>
            </b-container>
        </section>
        <section class="parameters">
            <b-container>
                <b-row>
                    <b-col cols='12'>
                        <h3>{{$t('typhoon50.table.title')}}</h3>
                    </b-col>
                    <b-col cols="12">
                        <b-table-simple hover small table-variant="light">
                            <colgroup>
                                <col>
                                <col>
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
                                    <b-td>{{$t('typhoon50.table.header.firstLineFirst')}}</b-td>
                                    <b-td>mm</b-td>
                                    <b-td>5-22</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>{{$t('typhoon50.table.header.secondLineFirst')}}</b-td>
                                    <b-td>mm</b-td>
                                    <b-td>
                                        2 x 12<br/>
                                        3 x 12<br/>
                                        5 x 10<br/>
                                        7 x 10<br/>
                                        8 x 10
                                    </b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>{{$t('typhoon50.table.header.thirdLineFirst')}}</b-td>
                                    <b-td>mm</b-td>
                                    <b-td>50, 63</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>{{$t('typhoon50.table.header.fourthLineFirst')}}</b-td>
                                    <b-td>-</b-td>
                                    <b-td>HDPE 50</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-th colspan="3" class="text-left">{{$t('typhoon50.table.air.title')}}</b-th>
                                </b-tr>
                                <b-tr>
                                    <b-td>{{$t('typhoon50.table.air.firstLineFirst')}}</b-td>
                                    <b-td>bar</b-td>
                                    <b-td>15</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>{{$t('typhoon50.table.air.secondLineFirst')}}</b-td>
                                    <b-td>cal</b-td>
                                    <b-td>2 x 1”</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>{{$t('typhoon50.table.air.thirdLineFirst')}}</b-td>
                                    <b-td>-</b-td>
                                    <b-td>{{$t('typhoon50.table.air.thirdLineThird')}}</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-th colspan="3" class="text-left">{{$t('typhoon50.table.blowing.title')}}
                                    </b-th>
                                </b-tr>
                                <b-tr>
                                    <b-td>{{$t('typhoon50.table.blowing.firstLineFirst')}}</b-td>
                                    <b-td>cm</b-td>
                                    <b-td>14 x 10 x 9</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>{{$t('typhoon50.table.blowing.secondLineFirst')}}</b-td>
                                    <b-td>kg</b-td>
                                    <b-td>1,1</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-th colspan="3" class="text-left">{{$t('typhoon50.table.connect.title')}}</b-th>
                                </b-tr>
                                <b-tr>
                                    <b-td>{{$t('typhoon50.table.connect.firstLineFirst')}}</b-td>
                                    <b-td>cm</b-td>
                                    <b-td>18 x 12 x 19</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>{{$t('typhoon50.table.connect.secondLineFirst')}}</b-td>
                                    <b-td>kg</b-td>
                                    <b-td>3,8</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-th colspan="3" class="text-left">{{$t('typhoon50.table.box.title')}}</b-th>
                                </b-tr>
                                <b-tr>
                                    <b-td>{{$t('typhoon50.table.box.firstLineFirst')}}</b-td>
                                    <b-td>cm</b-td>
                                    <b-td>46 x 35 x 17</b-td>
                                </b-tr>
                                <b-tr class="last">
                                    <b-td>{{$t('typhoon50.table.box.secondLineFirst')}}</b-td>
                                    <b-td>kg</b-td>
                                    <b-td>10,0</b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>
                    </b-col>
                </b-row>
            </b-container>

        </section>
        <section class="products-band" id="producty">
            <b-container>
                <b-row class="d-flex flex-wrap">
                    <b-col cols='12'>
                        <h3 class="title pb-4 pr-4 pl-4 pr-sm-4 pl-sm-4 pr-md-0 pl-md-0 pr-lg-5 pl-lg-0">
                            {{$t('heading.products') }}</h3>
                    </b-col>
                </b-row>
                <other-products></other-products>
            </b-container>
        </section>
        <contact></contact>
    </section>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "Typhoon50",
        data() {
            return {
                position: true,
                widthElement: 120
            }
        },
        computed: {
            ...mapGetters([
                'typhoon50Slider',
                'typhoon50Characteristic',
                'typhoon50ProductsCharacteristic'
            ])
        }
    }
</script>

<style scoped>

</style>
