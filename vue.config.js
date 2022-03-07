const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    devServer: {
        port: 7778
    },
    transpileDependencies: true
})
