"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("nuxt/config");
exports.default = (0, config_1.defineNuxtConfig)({
    // Disable SSR
    ssr: false,
    generate: {
        fallback: true // Enables SPA fallback for any unmatched routes
    },
    build: {
        publicPath: '/zeinahasan/'
    },
    router: {
        base: '/zeinahasan/'
    },
    css: [
        'bootstrap/dist/css/bootstrap.min.css',
        '~/assets/css/bootstrap.css'
    ],
    plugins: [
        '~/plugins/pinia'
    ],
    vite: {
        optimizeDeps: {
            include: ['bootstrap']
        },
        resolve: {
            alias: {
                '@/': './',
                '~': './'
            }
        }
    },
    compatibilityDate: '2024-08-11'
});
