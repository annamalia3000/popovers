const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    // Устанавливаем режим разработки
    mode: 'development',
    // Контролируем, как создаются карты исходного кода
    devtool: 'inline-source-map',

    // Настройки dev-сервера
    devServer: {
        historyApiFallback: true,
        open: true,
        compress: true,
        port: 9000,  // Добавляем порт, если требуется
    },
    plugins: [
        // Включаем горячую замену модулей
        new webpack.HotModuleReplacementPlugin(),
    ],
});
