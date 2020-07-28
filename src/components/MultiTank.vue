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
                        <p class="descriptionMulti">{{$t('multiTank.presentations.MultitankS.descriptionFirst')}}</p>
                        <p class="descriptionMulti">{{$t('multiTank.presentations.MultitankS.descriptionSecond')}}</p>
                        <p class="descriptionMulti">{{$t('multiTank.presentations.MultitankS.descriptionThird')}}</p>
                        <p class="descriptionMulti">{{$t('multiTank.presentations.MultitankS.descriptionFourth')}}</p>
                        <p class="descriptionMulti">{{$t('multiTank.presentations.MultitankS.descriptionFifth')}}</p>
                        <p class="footnote">{{$t('multiTank.presentations.MultitankS.note')}}</p>
                    </b-col>
                    <b-col class="img_box mt-5 mt-sm-5 mt-md-5 mt-lg-0" cols="12" sm="12" md="12" lg="5" order="3" order-sm="3" order-md="3" order-lg="4">
                        <b-img :src="require(`@/assets/images/products/multitank/elements/multiTank_m.png`)"
                               alt="multiTank S" class="pl-2 pr-2 pl-sm-4 pr-sm-4 pl-md-4 pr-md-4 pr-lg-0 pl-lg-0"></b-img>
                    </b-col>
                    <b-col class='multi_R' cols="12" sm="12" md="12" lg="7"  order="4" order-sm="4" order-md="4" order-lg="3" >
                        <h3>MultiTank R</h3>
                        <p class="descriptionMulti mb-0">{{$t('multiTank.presentations.MultitankM.descriptionFirst')}}</p>
                        <ul class="descriptionMulti">
                            <li>- {{$t('multiTank.presentations.MultitankM.paragraphFirst')}},</li>
                            <li>- {{$t('multiTank.presentations.MultitankM.paragraphSecond')}},</li>
                            <li v-if="$t('multiTank.presentations.MultitankM.paragraphThird')">- {{$t('multiTank.presentations.MultitankM.paragraphThird')}},</li>
                            <li>- {{$t('multiTank.presentations.MultitankM.paragraphFourth')}},</li>
                            <li>- {{$t('multiTank.presentations.MultitankM.paragraphFifth')}},</li>
                            <li>- {{$t('multiTank.presentations.MultitankM.paragraphSixth')}},</li>
                            <li>- {{$t('multiTank.presentations.MultitankM.paragraphSeventh')}}</li>
                        </ul>
                        <p class="descriptionMulti">
                            {{$t('multiTank.presentations.MultitankM.descriptionSecond')}}
                        </p>
                        <p class="descriptionMulti">
                            {{$t('multiTank.presentations.MultitankM.descriptionThird')}}
                        </p>
                        <p class="footnote">
                            {{$t('multiTank.presentations.MultitankM.note')}}
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
