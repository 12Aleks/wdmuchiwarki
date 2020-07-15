export default {
    state: {
        multiSlider: [
            {
                img: 'multitank/slider/multiTank.png',
                title: 'multiTank.slider.firstSlide'
            },
            {
                img: 'multitank/slider/multiTank.png',
                title: 'multiTank.slider.secondSlide'
            }
        ],
        multiCharacteristic: [
            { img: 'swiatlowody.svg', title: 'światłowody', description: '3-22 mm'},
            { img: 'pakiety_snr.svg', title: 'pakiety', description: '8×10 mm'},
            { img: 'mikrorurki.svg', title: 'mikrorurki', description: '6-16 mm'},
            { img: 'hdpe.svg', title: 'HDPE', description: '32, 40, 50, 63 mm'}
        ],
        multiProductsCharacteristic:[
            { img: 'thunderbolt.png', title: '230V/1600W'},
            { img: 'weight.png', title: '35,0'},
            { img: 'size.png', title: '59×35×31'}
        ],
        microSlider: [
            {
                img: 'micro/slider/micro.png',
                title: 'micro.slider.firstSlide'
            },
            {
                img: 'micro/slider/micro.png',
                title: 'micro.slider.secondSlide'
            }
        ],
        microCharacteristic: [
            { img: 'swiatlowody.svg', title: 'światłowody', description: '3-10 mm'},
            { img: 'mikrorurki.svg', title: 'mikrorurki', description: '3-10 mm'},
        ],
        microProductsCharacteristic:[
            { img: 'pressure.png', title: 'max. 25'},
            { img: 'weight.png', title: '1,0'},
            { img: 'size.png', title: '12×9×11'}
        ],
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
            { img: 'swiatlowody.svg', title: 'światłowody', description: '5-22 mm'},
            { img: 'hdpe.svg', title: 'HDPE', description: '32, 40 mm'},
        ],
        typhoonProductsCharacteristic:[
            { img: 'pressure.png', title: 'max. 15'},
            { img: 'weight.png', title: '0,9+2,6'},
            { img: 'size.png', title: '11×9×7 14×9×16'}
        ],
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
            { img: 'swiatlowody.svg', title: 'światłowody', description: '5-22 mm'},
            { img: 'hdpe.svg', title: 'HDPE', description: '50, 63 mm'},
        ],
        typhoon50ProductsCharacteristic:[
            { img: 'pressure.png', title: 'max. 15'},
            { img: 'weight.png', title: '1,1+3,8'},
            { img: 'size.png', title: '14×10×9 18×12×19'}
        ],
        y2Slider: [
            {
                img: 'y2/slider/y2.jpg',
                title: 'y2.slider.firstSlide'
            },
            {
                img: 'y2/slider/y2.jpg',
                title: 'y2.slider.secondSlide'
            }
        ],
        y2Characteristic: [
            { img: 'swiatlowody.svg', title: 'światłowody', description: '5-22 mm'},
            { img: 'hdpe.svg', title: 'HDPE', description: '32, 40 mm'},
        ],
        y2ProductsCharacteristic:[
            { img: 'pressure.png', title: 'max. 15'},
            { img: 'weight.png', title: '5,0'},
            { img: 'size.png', title: '23×13×12'}
        ],
    },
    getters: {
        MultiSlider(state) {
            return state.multiSlider
        },
        multiCharacteristic(state){
            return state.multiCharacteristic
        },
        multiProductsCharacteristic(state){
            return state.multiProductsCharacteristic
        },
        microSlider(state){
            return state.microSlider
        },
        microCharacteristic(state){
            return state.microCharacteristic
        },
        microProductsCharacteristic(state){
            return state.microProductsCharacteristic
        },
        typhoonSlider(state){
            return state.typhoonSlider
        },
        typhoonCharacteristic(state){
            return state.typhoonCharacteristic
        },
        typhoonProductsCharacteristic(state){
            return state.typhoonProductsCharacteristic
        },
        typhoon50Slider(state){
            return state.typhoon50Slider
        },
        typhoon50Characteristic(state){
            return state.typhoon50Characteristic
        },
        typhoon50ProductsCharacteristic(state){
            return state.typhoon50ProductsCharacteristic
        },
        y2Slider(state){
            return state.y2Slider
        },
        y2Characteristic(state){
            return state.y2Characteristic
        },
        y2ProductsCharacteristic(state){
            return state.y2ProductsCharacteristic
        }

    }
}
