<template>
    <section id="main" class="typhoon_32">
        <carusel :sliders="typhoonSlider"/>
        <caracteristic :offset="position" :data="typhoonCharacteristic"/>
        <keep-alive>
            <newsletter-button/>
        </keep-alive>
        <section class="descriptions presentation"  id="presentation">
            <b-container>
                <b-row>
                    <b-col class="img_box" cols="12" sm="12" md="12" lg="6">
                        <b-img fluid :src="require(`@/assets/images/products/typhoon_32/elements/typhoon_32.png`)"
                               alt="multiTank S"></b-img>
                    </b-col>
                    <b-col cols="12" sm="12" md="12" lg="6">
                        <p class="descriptionMulti mb-0">
                            {{$t('typhoon32.presentations.descriptionFirst')}}
                        </p>
                        <ul class="descriptionMulti">
                            <li>- {{$t('typhoon32.presentations.paragraphFirst')}},</li>
                            <li>- {{$t('typhoon32.presentations.paragraphSecond')}},</li>
                            <li>- {{$t('typhoon32.presentations.paragraphThird')}}</li>
                        </ul>
                        <p class="descriptionMulti">
                            {{$t('typhoon32.presentations.descriptionSecond')}}
                        </p>
                        <p class="footnote">
                            {{$t('typhoon32.presentations.note')}}
                        </p>
                    </b-col>
                    <carac-desc :data="typhoonProductsCharacteristic"/>
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

                        <b-table-simple hover small table-variant="light" responsive="sm">
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
                                    <b-td>5—20</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>{{$t('typhoon32.table.header.secondLineFirst')}}</b-td>
                                    <b-td>mm</b-td>
                                    <b-td>
                                        2 x 12 <br/>
                                        3 x 10 <br/>
                                    </b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>{{$t('typhoon32.table.header.thirdLineFirst')}}</b-td>
                                    <b-td>mm</b-td>
                                    <b-td>32, 40</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>{{$t('typhoon32.table.header.fourthLineFirst')}}</b-td>
                                    <b-td>—</b-td>
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
                                    <b-td>—</b-td>
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
                                    <b-td>0{{$t('marks')}}9</b-td>
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
                                    <b-td>2{{$t('marks')}}6</b-td>
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
                                    <b-td>7{{$t('marks')}}8</b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>
                    </b-col>
                </b-row>
            </b-container>

        </section>
        <keep-alive>
            <other-products :otherProducts="otherProducts"/>
        </keep-alive>
        <keep-alive>
            <contact/>
        </keep-alive>
    </section>
</template>

<script>
    export default {
        name: "Typhoon32",
        data() {
            return {
                position: true,
                otherProducts: 'heading.otherProducts',
                typhoonSlider: [
                    {
                        img: 'typhoon_32/slider/typhoon_32.jpg',
                        title: 'typhoon32.slider.firstSlide'
                    },
                    {
                        img: 'typhoon_32/slider/typhoon_32.jpg',
                        title: 'typhoon32.slider.secondSlide'
                    }
                ],
                typhoonCharacteristic: [
                    { img: 'swiatlowody.svg', title: 'characteristic.fiber-optic', description: '5—20 mm'},
                    { img: 'hdpe.svg', title: 'HDPE', description: '32, 40 mm'},
                ],
                typhoonProductsCharacteristic:[
                    { img: 'pressure.png', title: 'max. 15'},
                    { img: 'weight.png', title: '0.9 + 2.6'},
                    { img: 'size.png', title: '11 × 9 × 7 14 × 9 × 16'}
                ],
            }
        }
    }
</script>
