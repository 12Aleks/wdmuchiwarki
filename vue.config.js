module.exports = {
    css: {
        loaderOptions: {
            scss: {
                prependData: `@import "~@/styles/styles.scss";`
            },
        }
    },

    pluginOptions: {
        i18n: {
            locale: 'pl',
            fallbackLocale: 'en',
            localeDir: 'locales',
            enableInSFC: false
        }
    },

}
