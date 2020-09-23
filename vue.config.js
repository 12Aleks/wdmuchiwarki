
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin;
const path = require('path');
const PrerenderSPAPlugin =
    require('prerender-spa-plugin');

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
        },
        sitemap: {
            urls: [
                'http://termafiber.pl/',
                'http://termafiber.pl/pl/multi',
                'http://termafiber.pl/pl/micro_typhoon',
                'http://termafiber.pl/pl/typhoon_32',
                'http://termafiber.pl/pl/typhoon_50',
                'http://termafiber.pl/pl/y_2',
                'http://termafiber.pl/en/multi',
                'http://termafiber.pl/en/micro_typhoon',
                'http://termafiber.pl/en/typhoon_32',
                'http://termafiber.pl/en/typhoon_50',
                'http://termafiber.pl/en/y_2',
                'http://termafiber.pl/de/multi',
                'http://termafiber.pl/de/micro_typhoon',
                'http://termafiber.pl/de/typhoon_32',
                'http://termafiber.pl/de/typhoon_50',
                'http://termafiber.pl/de/y_2',
            ]
        }
    },
    chainWebpack: config => {
        config.module
            .rule("pdf")
            .test(/\.pdf$/)
            .use("file-loader")
            .loader("file-loader");
    },

    configureWebpack: {
        plugins: [
            new BundleAnalyzerPlugin(),
            new PrerenderSPAPlugin({
                staticDir: path.join(__dirname, 'dist'),
                // Required - Routes to render.
                routes: [ '/', '/pl/multi', '/pl/micro_typhoon', '/pl/typhoon_32', '/pl/typhoon_50', '/pl/y_2', '/some/deep/nested/route' ],
            })]
    }
}
