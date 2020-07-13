export default {
    state: {
        multiSlider: [
            {
                img: 'multiTank.png',
                title: 'Podajnik MultiTank'
            },
            {
                img: 'multiTank.png',
                title: 'Drugi Podajnik MultiTank'
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
        multiParameters:[
            {denomination: '', title: '', technicalReductions: '',  description: ''}
        ]
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
        }
    }
}
