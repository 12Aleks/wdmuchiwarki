<template>
    <section id="main" class="micro">
        <carusel :sliders="microSlider"></carusel>
        <caracteristic :offset="position" :widthElement="widthElement" :data="microCharacteristic" ></caracteristic>
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
                        <b-img fluid :src="require(`@/assets/images/products/micro/elements/micro.png`)"
                               alt="multiTank S"></b-img>
                    </b-col>
                    <b-col cols="12" sm="12" md="6" lg="6">
                        <p class="descriptionMulti">
                            Głowica MicroTyphoon przeznaczona jest do pracy ze światłowodami 3-10 mm wdmuchiwanymi w
                            mikrorurki 6-16 mm.
                        </p>
                        <p class="descriptionMulti">
                            Niewielkie rozmiary, prosty montaż i duża ilość akcesoriów umożliwiają
                            pracę w każdych warunkach. Urządzenie wyposażone jest w 3 wielkości tulejek prowadzących,
                            które przylegają bardzo blisko pasów napędowych dzięki czemu znacząco zmniejszono możliwość
                            złamania światłowodu.
                        </p>
                        <p class="descriptionMulti">
                            Głowica MicroTyphoon może pracować jako samodzielne urządzenie, bez
                            użycia podajnika MultiTank. Instalacja światłowodu odbywa się wtedy ręcznie. Funkcjonalność
                            ta jest również niezbędna przy procesie przepętlania.
                        </p>
                    </b-col>
                    <carac-desc :data="microProductsCharacteristic"></carac-desc>
                </b-row>
            </b-container>
        </section>
        <section class="parameters">
            <b-container>
                <b-row>
                    <b-col cols='12'>
                        <h3>Parametry</h3>
                    </b-col>
                    <b-col cols="12">

                        <b-table-simple hover small  table-variant="light">
                            <colgroup><col><col></colgroup>
                            <colgroup><col><col><col></colgroup>
                            <colgroup><col><col></colgroup>
                            <b-tbody>
                                <b-tr>
                                    <b-th colspan="3" class="text-left">Średnice</b-th>
                                </b-tr>
                                <b-tr >
                                    <b-td>Światłowód</b-td>
                                    <b-td>mm</b-td>
                                    <b-td>3-10</b-td>
                                </b-tr>
                                <b-tr >
                                    <b-td>Mikrorurka</b-td>
                                    <b-td>mm</b-td>
                                    <b-td>6-16</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-th colspan="3" class="text-left">Powietrze
                                    </b-th>
                                </b-tr>
                                <b-tr>
                                    <b-td>Maksymalne ciśnienie</b-td>
                                    <b-td>bar</b-td>
                                    <b-td>25</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>Rozmiar przyłącza powietrza CAMLOCK</b-td>
                                    <b-td>cal</b-td>
                                    <b-td>1 x ½”</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>Pomiar ciśnienia</b-td>
                                    <b-td>-</b-td>
                                    <b-td>Złącze minimes
                                    </b-td>
                                </b-tr>
                                <b-tr>
                                    <b-th colspan="3" class="text-left">Głowica</b-th>
                                </b-tr>
                                <b-tr>
                                    <b-td>Wymiary (S x G x W)</b-td>
                                    <b-td>cm</b-td>
                                    <b-td>12 x 9 x 11</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>Masa</b-td>
                                    <b-td>kg</b-td>
                                    <b-td>1,0</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-th colspan="3" class="text-left">Walizka</b-th>
                                </b-tr>
                                <b-tr>
                                    <b-td>Wymiary (S x G x W)</b-td>
                                    <b-td>cm</b-td>
                                    <b-td>46 x 35 x 17</b-td>
                                </b-tr>
                                <b-tr class="last" >
                                    <b-td>Masa w skrzyni</b-td>
                                    <b-td>kg</b-td>
                                    <b-td>5,5</b-td>
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
        name: "MicroTyphoon",
        data(){
          return{
              position: true,
              widthElement: 120
          }
        },
        computed: {
            ...mapGetters([
                'microSlider',
                'microCharacteristic',
                'microProductsCharacteristic'
            ])
        }
    }
</script>

