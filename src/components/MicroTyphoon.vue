<template>
    <section id="main" class="micro">
        <carusel :sliders="microSlider"></carusel>
        <caracteristic :offset="position"
                       :data="microCharacteristic" ></caracteristic>
        <newsletter-button></newsletter-button>
        <section class="descriptions presentation">
            <b-container>
                <b-row>
                    <b-col class="img_box" cols="12" sm="12" md="12" lg="6">
                        <b-img fluid :src="require(`@/assets/images/products/micro/elements/micro.png`)"
                               alt="multiTank S"></b-img>
                    </b-col>
                    <b-col cols="12" sm="12" md="12" lg="6">
                        <p class="descriptionMulti">{{$t('micro.presentations.descriptionFirst')}}</p>
                        <p class="descriptionMulti">{{$t('micro.presentations.descriptionSecond')}}</p>
                        <p class="descriptionMulti">{{$t('micro.presentations.descriptionThird')}}</p>
                    </b-col>
                    <carac-desc :data="microProductsCharacteristic"></carac-desc>
                </b-row>
            </b-container>
        </section>
        <section class="parameters">
            <b-container>
                <b-row>
                    <b-col cols='12'>
                        <h3>{{$t('micro.table.title')}}</h3>
                    </b-col>
                    <b-col cols="12">

                        <b-table-simple hover small  table-variant="light" responsive="sm">
                            <colgroup><col><col></colgroup>
                            <colgroup><col><col><col></colgroup>
                            <colgroup><col><col></colgroup>
                            <b-tbody>
                                <b-tr>
                                    <b-th colspan="3" class="text-left">{{$t('micro.table.diameters.title')}}</b-th>
                                </b-tr>
                                <b-tr >
                                    <b-td>{{$t('micro.table.diameters.firstLineFirst')}}</b-td>
                                    <b-td>mm</b-td>
                                    <b-td>3-10</b-td>
                                </b-tr>
                                <b-tr >
                                    <b-td>{{$t('micro.table.diameters.secondLineFirst')}}</b-td>
                                    <b-td>mm</b-td>
                                    <b-td>6-16</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-th colspan="3" class="text-left">{{$t('micro.table.air.title')}}
                                    </b-th>
                                </b-tr>
                                <b-tr>
                                    <b-td>{{$t('micro.table.air.firstLineFirst')}}</b-td>
                                    <b-td>bar</b-td>
                                    <b-td>25</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>{{$t('micro.table.air.secondLineFirst')}}</b-td>
                                    <b-td>cal</b-td>
                                    <b-td>1 x ½”</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>{{$t('micro.table.air.thirdLineFirst')}}</b-td>
                                    <b-td>-</b-td>
                                    <b-td>{{$t('micro.table.air.thirdLineThird')}}
                                    </b-td>
                                </b-tr>
                                <b-tr>
                                    <b-th colspan="3" class="text-left">{{$t('micro.table.blowing.title')}}</b-th>
                                </b-tr>
                                <b-tr>
                                    <b-td>{{$t('micro.table.blowing.firstLineFirst')}}</b-td>
                                    <b-td>cm</b-td>
                                    <b-td>12 x 9 x 11</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>{{$t('micro.table.blowing.secondLineFirst')}}</b-td>
                                    <b-td>kg</b-td>
                                    <b-td>1,0</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-th colspan="3" class="text-left">{{$t('micro.table.box.title')}}</b-th>
                                </b-tr>
                                <b-tr>
                                    <b-td>{{$t('micro.table.box.firstLineFirst')}}</b-td>
                                    <b-td>cm</b-td>
                                    <b-td>46 x 35 x 17</b-td>
                                </b-tr>
                                <b-tr class="last" >
                                    <b-td>{{$t('micro.table.box.secondLineFirst')}}</b-td>
                                    <b-td>kg</b-td>
                                    <b-td>5,5</b-td>
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
        name: "MicroTyphoon",
        data(){
          return{
              position: true,
              otherProducts: 'heading.otherProducts'
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

