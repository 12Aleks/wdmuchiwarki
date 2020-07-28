module.exports = {
    // publicPath: './',
    // productionSourceMap: false,
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
    chainWebpack: config => {
        config.module
            .rule("pdf")
            .test(/\.pdf$/)
            .use("file-loader")
            .loader("file-loader");
    }
}
