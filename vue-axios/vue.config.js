module.exports = {
    productionSourceMap: false,
    devServer: {
        proxy: {
            '/api': {
                target: "http://127.0.0.1:3000",
                changeOrigin: true,
                pathRewrite: {
                    '/api': ''
                }
            }
        },
        host: '127.0.0.1',
        open: true,
        port: 8080,
        disableHostCheck: true
    },
    configureWebpack: {
        resolve: {
            alias: {
                'components': '@/components',
                'views': '@/views',
                'assets': '@/assets'
            }
        }
    },
    
   
}