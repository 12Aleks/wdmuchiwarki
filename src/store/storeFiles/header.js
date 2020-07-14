export default {
    state:{
        locales: process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(','),
        mainMenu: [
            {
                title: 'heading.presentation',
                url: 'presentation',
            },
            {
                title: 'heading.products',
                url: 'products-band',
            },
            {
                title: 'heading.contact',
                url: 'contact',
            }
        ],
        footerMenu: [
            {title: 'TERMA SPÓŁKA', url: 'http://www.termagroup.pl/'},
            {title: 'MASZYNY BUDOWLANE', url: 'http://www.termamax.pl/ru/glowna'},
            {title: 'USŁUGI PRZEMYSŁOWE', url: 'http://www.termaservices.pl/'},
            {title: 'GALWANIZERNIA', url: 'http://www.termagalvanic.pl/'},
            {title: 'PRODUKTY MEDYCZNE', url: 'https://www.termamed.pl/'},
            {title: 'WYPRZEDAŻ GRZEJNIKÓW', url: 'http://www.termaoutlet.pl/'},
        ]
    },
    getters:{
        locales(state){
            return state.locales
        },
        mainMenu(state){
            return state.mainMenu
        },
        footerMenu(state){
            return state.footerMenu
        }
    }
}
