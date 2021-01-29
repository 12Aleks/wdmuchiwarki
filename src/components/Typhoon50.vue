<template>
    <section id="main" class="typhoon_50">
        <carusel :sliders="typhoon50Slider" />
        <caracteristic :offset="position"
                       :data="typhoon50Characteristic" />
        <keep-alive>
            <newsletter-button />
        </keep-alive>
        <section class="descriptions presentation"  id="presentation">
            <b-container>
                <b-row>
                    <b-col class="img_box" cols="12" sm="12" md="6" lg="6">
                        <b-img fluid :src="require(`@/assets/images/products/typhoon_50/elements/typhoon_50.png`)"
                               alt="multiTank S"></b-img>
                    </b-col>
                    <b-col cols="12" sm="12" md="6" lg="6">
                        <p class="descriptionMulti mb-0">
                            {{$t('typhoon50.presentations.descriptionFirst')}}
                            {{$t('typhoon50.presentations.descriptionSecond')}}
                            {{$t('typhoon50.presentations.descriptionThird')}}
                        </p>
                        <ul class="descriptionMulti">
                            <li>-  {{$t('typhoon50.presentations.paragraphFirst')}},</li>
                            <li>- {{$t('typhoon50.presentations.paragraphSecond')}},</li>
                            <li>- {{$t('typhoon50.presentations.paragraphThird')}},
                            </li>
                        </ul>
                        <p class="footnote mb-0">
                            {{$t('typhoon50.presentations.noteFirst')}}
                        </p>
                        <p class="footnote">
                            {{$t('typhoon50.presentations.noteSecond')}}
                        </p>
                    </b-col>
                    <carac-desc :data="typhoon50ProductsCharacteristic" />
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
                        <b-table-simple hover small table-variant="light" responsive="sm">
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
                                    <b-td>5—20</b-td>
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
                                    <b-td>—</b-td>
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
                                    <b-td>—</b-td>
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
                                    <b-td>1{{$t('marks')}}1</b-td>
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
                                    <b-td>3{{$t('marks')}}8</b-td>
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
                                    <b-td>10{{$t('marks')}}0</b-td>
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
        name: "Typhoon50",
        data() {
            return {
                position: true,
                otherProducts: 'heading.otherProducts',
                typhoon50Slider: [
                    {
                        img: 'typhoon_50/slider/typhoon_50.jpg',
                        title: 'typhoon50.slider.firstSlide'
                    },
                    {
                        img: 'typhoon_50/slider/typhoon_50.jpg',
                        title: 'typhoon50.slider.secondSlide'
                    }
                ],
                typhoon50Characteristic: [
                    { img: 'swiatlowody.svg', title: 'characteristic.fiber-optic', description: '5—20 mm'},
                    { img: 'hdpe.svg', title: 'HDPE', description: '50, 63 mm'},
                ],
                typhoon50ProductsCharacteristic:[
                    { img: 'pressure.png', title: 'max. 15'},
                    { img: 'weight.png', title: '1.1 + 3.8'},
                    { img: 'size.png', title: '14 × 10 × 9 18 × 12 × 19'}
                ],
            }
        }
    }
</script>

