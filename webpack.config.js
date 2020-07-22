//importa el plugin de html
const htmlWebpackPlugin = require ('html-webpack-plugin');
// importa el plugin oara poder visualizar el css
const MiniCssEstractPluging = require ('mini-css-extract-plugin');

module.exports = {//inicio de la configuracion de webpack

    //entrada y salida de los JS
    entry: './src/app.js',

    output: {
        path: __dirname+'/build',
        filename: 'bundle.js'
    },

    //configuracion del puerto
    devServer: {
        port: 4000

    },
    
    //configuracion para importar los css en los JS
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {loader: MiniCssEstractPluging.loader},
                    {loader: 'css-loader'}
                ]
            }
        ]
    },

    // importa los plugins de html y css
    plugins:[
        new htmlWebpackPlugin({
            template: './src/index.html'
        }),

        new MiniCssEstractPluging({
            filename: 'bandel.css'
        })
    ]


}