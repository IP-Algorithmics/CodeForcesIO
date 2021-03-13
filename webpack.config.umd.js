module.exports = {
    entry: './src/index.ts',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'umd/index.min.js',
        library: 'messageApi',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    mode: 'production'
};
