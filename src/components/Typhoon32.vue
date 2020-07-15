<template>
    <section id="main" class="typhoon_32">
        <carusel :sliders="typhoonSlider"></carusel>
        <caracteristic :offset="position" :widthElement="widthElement" :data="typhoonCharacteristic"></caracteristic>
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
                        <b-img fluid :src="require(`@/assets/images/products/typhoon_32/elements/typhoon_32.png`)"
                               alt="multiTank S"></b-img>
                    </b-col>
                    <b-col cols="12" sm="12" md="6" lg="6">
                        <p class="descriptionMulti mb-0">
                            Zestaw Typhoon 32/40 przeznaczony jest do pracy z pojedynczymi światłowodami lub
                            mikrorurkami o średnicach 5-22 mm wdmuchiwanymi w rury HDPE 32 oraz 40. Możliwe jest również
                            wdmuchiwanie pakietów mikrorurek*. Zestaw jest rozdzielony na głowicę oraz przyłącze
                            powietrza co skutkuje:
                        </p>
                        <ul class="descriptionMulti">
                            <li>- niewielkimi rozmiarami detali i możliwością ergonomicznego montażu,</li>
                            <li>- możliwością podłączenia przyłącza powietrza bezpośrednio do rury w wykopie czy kolejnej
                                studni (wypadek gdy pracujemy w mieście i nie mamy dużo miejsca na rozstawienie się z całym
                                sprzętem w jednym miejscu),</li>
                            <li>- doprowadzeniem powietrza z dwóch stron pod kątem 45° co
                                zmniejsza spadek ciśnienia o ok. 0,5 bara w stosunku do pojedynczego przyłącza pod kątem
                                90°.</li>
                        </ul>
                        <p class="descriptionMulti">
                            Głowica Typhoon 32/40 wraz z Przyłączem Powietrza mogą pracować jako samodzielne
                            urządzenie, bez użycia podajnika MultiTank. Instalacja światłowodu odbywa się wtedy ręcznie.
                            Funkcjonalność ta jest również niezbędna przy procesie przepętlania.
                        </p>
                    </b-col>
                    <carac-desc :data="typhoonProductsCharacteristic"></carac-desc>
                </b-row>
            </b-container>
        </section>
        <section class="parameters">
            <b-container>
                <b-row>
                    <b-col cols='12'>
                        <h3>{{$t('typhoon32.table.title')}}</h3>
                    </b-col>
                    <b-col cols="12">

                        <b-table-simple hover small table-variant="light">
                            <colgroup>
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
                                <col>
                            </colgroup>
                            <colgroup>
                                <col>
                                <col>
                                <col>
                            </colgroup>
                            <b-tbody>
                                <b-tr>
                                    <b-td>{{$t('typhoon32.table.header.firstLineFirst')}}</b-td>
                                    <b-td>mm</b-td>
                                    <b-td>5-22</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>{{$t('typhoon32.table.header.secondLineFirst')}}</b-td>
                                    <b-td>mm</b-td>
                                    <b-td>
                                        2 x 12 / HDPE 32 <br />
                                        3 x 10 / HDPE 32  <br />
                                        5 x 10 / HDPE 40  <br />
                                    </b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>{{$t('typhoon32.table.header.thirdLineFirst')}}</b-td>
                                    <b-td>mm</b-td>
                                    <b-td>32, 40</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>{{$t('typhoon32.table.header.fourthLineFirst')}}</b-td>
                                    <b-td>-</b-td>
                                    <b-td>HDPE 32</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-th colspan="3" class="text-left">{{$t('typhoon32.table.air.title')}}</b-th>
                                </b-tr>
                                <b-tr>
                                    <b-td>{{$t('typhoon32.table.air.firstLineFirst')}}</b-td>
                                    <b-td>bar</b-td>
                                    <b-td>20</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>{{$t('typhoon32.table.air.secondLineFirst')}}</b-td>
                                    <b-td>cal</b-td>
                                    <b-td>2 x ¾”</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>{{$t('typhoon32.table.air.thirdLineFirst')}}</b-td>
                                    <b-td>-</b-td>
                                    <b-td>{{$t('typhoon32.table.air.thirdLineThird')}}</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-th colspan="3" class="text-left">{{$t('typhoon32.table.blowing.title')}}</b-th>
                                </b-tr>
                                <b-tr>
                                    <b-td>{{$t('typhoon32.table.blowing.firstLineFirst')}}</b-td>
                                    <b-td>cm</b-td>
                                    <b-td>11 x 9 x 7</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>{{$t('typhoon32.table.blowing.secondLineFirst')}}</b-td>
                                    <b-td>kg</b-td>
                                    <b-td>0,9</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-th colspan="3" class="text-left">{{$t('typhoon32.table.connect.title')}}</b-th>
                                </b-tr>
                                <b-tr>
                                    <b-td>{{$t('typhoon32.table.connect.firstLineFirst')}}</b-td>
                                    <b-td>cm</b-td>
                                    <b-td>14 x 9 x 16</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>{{$t('typhoon32.table.connect.secondLineFirst')}}</b-td>
                                    <b-td>kg</b-td>
                                    <b-td>2,6</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-th colspan="3" class="text-left">{{$t('typhoon32.table.box.title')}}</b-th>
                                </b-tr>
                                <b-tr>
                                    <b-td>{{$t('typhoon32.table.box.firstLineFirst')}}</b-td>
                                    <b-td>cm</b-td>
                                    <b-td>46 x 35 x 17</b-td>
                                </b-tr>
                                <b-tr class="last">
                                    <b-td>{{$t('typhoon32.table.box.secondLineFirst')}}</b-td>
                                    <b-td>kg</b-td>
                                    <b-td>7,8</b-td>
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
        name: "Typhoon32",
        data() {
            return {
                position: true,
                widthElement: 120
            }
        },
        computed: {
            ...mapGetters([
                'typhoonCharacteristic',
                'typhoonSlider',
                'typhoonProductsCharacteristic'
            ])
        }
    }
</script>

<style scoped>

</style>
