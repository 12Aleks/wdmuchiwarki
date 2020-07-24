<template>
    <section id="main" class="multi">
        <carusel :sliders="MultiSlider"></carusel>
        <caracteristic :offset="position"
                       :data="multiCharacteristic">
        </caracteristic>
        <newsletter-button></newsletter-button>
        <section class="descriptions presentation">
            <b-container>
                <b-row>
                    <b-col class="img_box mt-3 mt-sm-3 mt-md-3 mt-lg-0" cols="12" sm="12" md="12" lg="5" order="1" order-sm="1" order-md="1" order-lg="2">
                        <b-img :src="require(`@/assets/images/products/multitank/elements/multiTank_s.png`)"
                               alt="multiTank S" class="pl-2 pr-2 pl-sm-4 pr-sm-4 pl-md-4 pr-md-4 pr-lg-0 pl-lg-0"></b-img>
                    </b-col>
                    <b-col class='multi_L' cols="12" sm="12" md="12" lg="7" order="2" order-sm="2" order-md="2" order-lg="1">
                        <h3>MultiTank S</h3>
                        <p class="descriptionMulti"> Podajnik MultiTank jest urządzeniem w pełni elektrycznym. W
                            porównaniu do podajników z
                            napędem pneumatycznym pozwala to na zmniejszenie zapotrzebowania na powietrze o ok. 0,5 m3,
                            dzięki czemu możliwe jest wykorzystanie mniejszego i tańszego kompresora.</p>
                        <p class="descriptionMulti">
                            Dodatkowym atutem
                            jest brak konieczności podłączania kompresora przy instalacji kabli na krótkich odcinkach,
                            gdzie nie jest wymagane wykorzystanie sprężonego powietrza co pozwala w znacznym stopniu
                            zniwelować hałas w gęstych zabudowaniach miejskich.
                        </p>
                        <p class="descriptionMulti">
                            Uniwersalność zastosowań Podajnika
                            MultiTank z wymiennymi głowicami pozwala na instalację światłowodów o średnicach 3-22 mm jak
                            i pakietów mikrorurek* nawet do 8 x 10 mm. Maszyna przystosowana jest do pracy w
                            najcięższych warunkach pogodowych – możliwa jest praca w deszczu czy przy minusowej
                            temperaturze.
                        </p>
                        <p class="descriptionMulti">
                            Niezależne sterowanie prędkością i siłą podawania światłowodu odbywa się za
                            pomocą potencjometrów. Operatorowi za pomocą wyświetlaczy przedstawiane są główne parametry:
                            długość wdmuchniętego światłowodu i aktualna wartość oporów. Nie ma konieczności wymiany
                            pasów przy wdmuchiwaniu światłowodów o różnych średnicach. Docisk jest regulowany za pomocą
                            sprężyn, co uniemożliwia zgniecenie światłowodu lub jego poślizg na pasach.
                        </p>
                        <p class="footnote">
                            *Więcej informacji dot. wdmuchiwania pakietów mikrorurek dostępne w karcie katalogowej.
                        </p>
                    </b-col>
                    <b-col class="img_box mt-5 mt-sm-5 mt-md-5 mt-lg-0" cols="12" sm="12" md="12" lg="5" order="3" order-sm="3" order-md="3" order-lg="4">
                        <b-img :src="require(`@/assets/images/products/multitank/elements/multiTank_m.png`)"
                               alt="multiTank S" class="pl-2 pr-2 pl-sm-4 pr-sm-4 pl-md-4 pr-md-4 pr-lg-0 pl-lg-0"></b-img>
                    </b-col>
                    <b-col class='multi_R' cols="12" sm="12" md="12" lg="7"  order="4" order-sm="4" order-md="4" order-lg="3" >
                        <h3>MultiTank R</h3>
                        <p class="descriptionMulti mb-0">
                            Wersja wyposażona w rejestrator danych pozwala na kontrolę jakości ułożenia światłowodu.
                            Raport zawiera wszystkie niezbędne informacje, wprowadzane automatycznie dotyczące podawania
                            światłowodu takie jak:
                        </p>
                        <ul class="descriptionMulti">
                            <li>- rzeczywiste opory,</li>
                            <li>- prędkość podawania,</li>
                            <li>- długość wdmuchniętego kabla,</li>
                            <li>- data oraz godzina,</li>
                            <li>- temperatura otoczenia,</li>
                            <li>- lokalizacja GPS,</li>
                            <li>- maksymalna siła podawania nastawiona przez operatora*</li>
                        </ul>
                        <p class="descriptionMulti">
                            Raporty z wdmuchiwań generowane są w postaci plików
                            PDF przez aplikację webową, do której dostęp udzielany jest przy zakupie maszyny. Użytkownik
                            ma możliwość uzupełnienia tabeli z resztą informacji dotyczących danego projektu (parametry
                            kabla, rurociągu, kompresora itd.).
                        </p>
                        <p class="descriptionMulti">
                            Dane z wykonanych prac przechowywane są na serwerze bez
                            dostępu osób trzecich. Za pośrednictwem aplikacji użytkownik ma możliwość do nich wrócić
                            kiedy tylko zajdzie taka potrzeba.
                        </p>
                        <p class="footnote">
                            *opcjonalnie
                        </p>
                    </b-col>
                </b-row>
                <b-row>
                    <carac-desc :data="multiProductsCharacteristic"></carac-desc>
                </b-row>
            </b-container>
        </section>
        <section class="parameters">
            <b-container>
                <b-row>
                    <b-col cols='12'>
                        <h3>{{$t('multiTank.table.title')}}</h3>
                    </b-col>
                    <b-col cols="12">
                        <div>
                            <b-table-simple hover small  table-variant="light" responsive="sm">
                                <colgroup><col><col></colgroup>
                                <colgroup><col><col><col></colgroup>
                                <colgroup><col><col></colgroup>
                                <b-tbody>
                                    <b-tr>
                                        <b-th colspan="3" class="text-left">{{$t('multiTank.table.power.title')}}</b-th>
                                    </b-tr>
                                    <b-tr class="border">
                                        <b-td>{{$t('multiTank.table.power.firstLineFirst')}}</b-td>
                                        <b-td>V</b-td>
                                        <b-td>230</b-td>
                                    </b-tr>
                                    <b-tr class="border">
                                        <b-td>{{$t('multiTank.table.power.secondLineFirst')}}</b-td>
                                        <b-td>W</b-td>
                                        <b-td>1600</b-td>
                                    </b-tr>
                                    <b-tr class="border">
                                        <b-td>{{$t('multiTank.table.power.thirdLineFirst')}}</b-td>
                                        <b-td>-</b-td>
                                        <b-td>{{$t('multiTank.table.power.thirdLineThird')}}</b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-th colspan="3" class="text-left">{{$t('multiTank.table.fiber.title')}}
                                        </b-th>
                                    </b-tr>
                                    <b-tr>
                                        <b-td>{{$t('multiTank.table.fiber.firstLineFirst')}}</b-td>
                                        <b-td>N</b-td>
                                        <b-td>140-850 (400-1300**)</b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-td>{{$t('multiTank.table.fiber.secondLineFirst')}}</b-td>
                                        <b-td>m/min</b-td>
                                        <b-td>16-60</b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-td>{{$t('multiTank.table.fiber.thirdLineFirst')}}</b-td>
                                        <b-td>mm</b-td>
                                        <b-td>
                                            3-22 <br/>
                                            SNR max. 8 x 10
                                        </b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-td>{{$t('multiTank.table.fiber.fourthLineFirst')}}</b-td>
                                        <b-td>-</b-td>
                                        <b-td v-html="$t('multiTank.table.fiber.fourthLineThird')" >
                                        </b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-th colspan="3" class="text-left">{{$t('multiTank.table.other.title')}}</b-th>
                                    </b-tr>
                                    <b-tr>
                                        <b-td>{{$t('multiTank.table.other.firstLineFirst')}}</b-td>
                                        <b-td>cm</b-td>
                                        <b-td>59 x 35 x 31</b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-td>{{$t('multiTank.table.other.secondLineFirst')}}</b-td>
                                        <b-td>kg</b-td>
                                        <b-td>35??</b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-th colspan="3" class="text-left">{{$t('multiTank.table.box.title')}}</b-th>
                                    </b-tr>
                                    <b-tr>
                                        <b-td>{{$t('multiTank.table.box.firstLineFirst')}}</b-td>
                                        <b-td>cm</b-td>
                                        <b-td>83 x 47 x 41</b-td>
                                    </b-tr>
                                    <b-tr class="last" >
                                        <b-td>{{$t('multiTank.table.box.secondLineFirst')}}</b-td>
                                        <b-td>kg</b-td>
                                        <b-td>45??</b-td>
                                    </b-tr>
                                </b-tbody>
                            </b-table-simple>
                        </div>
                        <p>**{{$t('multiTank.table.description')}}</p>
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
        name: "MultiTank",
        data(){
            return{
                position: false,
                otherProducts: 'heading.otherProducts'
            }
        },
        computed: {
            ...mapGetters([
                'MultiSlider',
                'multiCharacteristic',
                'multiProductsCharacteristic'
            ])
        }
    }
</script>

<style scoped>

</style>
