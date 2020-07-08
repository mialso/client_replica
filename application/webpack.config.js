const path = require('path');

module.exports = {
	entry: './application/src/entries/inline.ts',
    mode: 'development',
	output: {
		filename: 'inlineEntry.js',
		path: path.resolve(__dirname, 'target/static')
	},
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            }
        ]
    },
    resolve: {
        extensions: [ '.ts', '.js' ]
    }
};
