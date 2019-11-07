const path = require('path')

module.exports = {
    lintOnSave:false,
    devServer: {
        proxy: {
            '/api': {
                target: 'http://169.254.12.168:3000',
                changeOrigin: true,
                pathRewrite: {
                    '/api': ''
                }
            }
        }
    }
}