export default {
    state:{
        languages: [
            {title: 'PL', url: '/'},
            {title: 'EN', url: '/en'},
            {title: 'DE', url: '/de'},
        ],
        mainMenu: [
            {
                title: 'Prezentacja',
                url: '#prezentacja',
                classActive: 'active'
            },
            {
                title: 'Produkty',
                url: '#producty'
            },
            {
                title: 'Kontakt',
                url: '#contact'
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
        languages(state){
            return state.languages
        },
        mainMenu(state){
            return state.mainMenu
        },
        footerMenu(state){
            return state.footerMenu
        }
    },
    mutations:{},
    actions:{}
}
