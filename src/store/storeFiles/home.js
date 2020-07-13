export default {
    state: {
        multiSlider: [
            {
                title: 'MultiTyphoon',
                slFirst: 'System do wdmuchiwania światłowodów, który składa się z elektrycznego Podajnika MultiTank\n' +
                    '                                oraz wymiennych głowic. Wysoce uniwersalny zestaw przystosowany do pracy zarówno z\n' +
                    '                                mikrorurkami jak i rurami HDPE. Brak konieczności napędzania podajnika powietrzem\n' +
                    '                                zmniejsza\n' +
                    '                                konieczny wydatek dzięki czemu można zastosować mniejszy i tańszy kompresor. Wbudowany\n' +
                    '                                rejestrator danych pozwala na generowanie raportów wdmuchiwania.',
                slSecond: 'Wdmuchiwarka umożliwia również wprowadzanie pakietów mikrorurek w rury HDPE.',
            },
            {
                title: 'Raport Wdmuchiwania',
                slFirst: 'Podajnik MultiTank R wyposażony jest w rejestrator danych, który zbiera wszystkie\n' +
                    '                                wymagane\n' +
                    '                                przez inspektorów parametry: opory, prędkość i ciśnienie w funkcji długości\n' +
                    '                                wdmuchniętego\n' +
                    '                                kabla. Automatycznie zapisywany jest też czas, lokalizacja i temperatura otoczenia.',
                slSecond: 'Dane przeniesione z wdmuchiwarki do komputera przetwarzane są przez aplikację webową co\n' +
                    '                                pozwala na wygenerowanie raportu wdmuchiwania. Dodatkowo wszystkie pliki zbierane są na\n' +
                    '                                koncie Użytkownika i mogą być dostępne z każdego urządzenia online.',
            }
        ],
        productsTitle: 'Produkty',
        products: [
            {
                title: 'Podajnik MultiTank',
                photo: '3M7A2089n.png',
                alt: 'Podajnik MultiTank',
                link: '',
                backgroundOne: 'product_a.svg',
                altOne: 'circle one',
                backgroundTwo: 'product_b.svg',
                altTwo: 'circle two',
                styles: '',
                active: false
            },
            {
                title: 'Głowica MicroTyphoon',
                photo: 'IMG_0033.png',
                alt: 'Głowica MicroTyphoon',
                link: '',
                backgroundOne: 'product_a.svg',
                altOne: 'circle one',
                backgroundTwo: 'product_b.svg',
                altTwo: 'circle two',
                styles: '',
                active: false
            },
            {
                title: 'Głowice Typhoon 32/40',
                photo: 'typhoon_32_40.png',
                alt: 'Głowice Typhoon 32/40',
                link: '',
                backgroundOne: 'product_a.svg',
                altOne: 'circle one',
                backgroundTwo: 'product_b.svg',
                altTwo: 'circle two',
                styles: '',
                active: false
            },
            {
                title: 'Głowice Typhoon 50/63',
                photo: 'typhon_50_63.png',
                alt: 'Głowice Typhoon 50/63',
                link: '',
                backgroundOne: 'product_a.svg',
                altOne: 'circle one',
                backgroundTwo: 'product_b.svg',
                altTwo: 'circle two',
                styles: 'offset-md-0 offset-lg-2',
                active: false
            },
            {
                title: 'Złącze Y2',
                photo: '3M7A2122n.png',
                alt: 'Złącze Y2',
                link: '',
                backgroundOne: 'product_a.svg',
                altOne: 'circle one',
                backgroundTwo: 'product_b.svg',
                altTwo: 'circle two',
                styles: 'offset-sm-0 offset-md-3 offset-lg-0',
                active: false
            },
        ],
        workers: [
            {
                name: 'Filip Madzio',
                position: 'Menadżer Produktu, Techniki Światłowodowe',
                image: 'madfi.png',
                phone: '+ 48 669 097 469',
                email: 'filip.madzio@termagroup.pl'
            }
        ],
        form: {
            email: '',
            phone: '',
            text: ''
        },

    },
    getters: {
        multiSlider(state) {
            return state.multiSlider
        },
        productsTitle(state) {
            return state.productsTitle
        },
        products(state) {
            return state.products
        },
        form(state) {
            return state.form
        },
        workers(state){
            return state.workers
        }
    },
    mutations: {
        down(state, payload){
            state.products[payload].active = true
        },
        up(state, payload){
            state.products[payload].active = false
        },
    },
    actions: {
        down({commit}, payload){
            commit('down', payload)
        },
        up({commit}, payload){
            commit('up', payload)
        }
    }

}
