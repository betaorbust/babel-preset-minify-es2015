module.exports = {
    plugins: [
        require('babel-plugin-groundskeeper-willie'),
        require('babel-plugin-transform-mangle'),
        require('babel-plugin-transform-member-expression-literals'),
        require('babel-plugin-transform-merge-sibling-variables'),
        require('babel-plugin-transform-minify-booleans'),
        require('babel-plugin-transform-undefined-to-void')
    ]
};