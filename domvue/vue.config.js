const path = require('path')

module.exports = {
    lintOnSave:false,
    devServer: {
        proxy: {
            '/api': {
                target: 'http://169.254.189.129:3000',
                changeOrigin: true,
                pathRewrite: {
                    '/api': ''
                }
            }
        }
    }
}