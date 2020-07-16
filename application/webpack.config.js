const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
        inlineEntry: './application/src/entries/inline.ts',
    },
    mode: 'development',
	output: {
		filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js',
		path: path.resolve(__dirname, 'target/static'),
	},
    plugins: [
        new HtmlWebpackPlugin({
            template: './application/static/index.html',
            filename: 'index.html',
        }),
    ],
    optimization: {
	    splitChunks: {
	        chunks: 'async',
        },
    },
    module: {
        rules: [
            {
                test: /\.ts/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                    compilerOptions: {
                        module: 'esnext',
                        target: 'es5',
                    },
                },
            },
        ],
    },
    resolve: {
        modules: ['./src', '../node_modules'],
        extensions: [ '.ts', '.js' ],
    },
};
