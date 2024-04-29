// client/.eslintrc.js
module.exports = {
    "env": {
        browser: true,
        node: true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/vue3-essential",
    ],
    "parserOptions": {
        "ecmaVersion": 'latest',
        'sourceType': 'module',
        "extraFileExtensions": [".vue"],
    },
    "rules": {
        // Add your Vue-specific ESLint rules here
        "vue/no-unused-components": "warn",
        // 0 off, 1 warning, 2 error
        'indent': [
            'error',
            2
        ],
        'quotes': [
            'error',
            'double'
        ],
        'semi': [
            'error',
            'always'
        ],
        'max-len': [1, {
            'code': 80,
            'comments': 80,
            // eslint-disable-next-line max-len
            'ignorePattern': '^import\\s.+\\sfrom\\s.+;$', // max-length warning disabled for imports
            'ignoreUrls': true
        }],
        'no-cond-assign': 2,
        'no-dupe-else-if': 2,
        'no-duplicate-case': 2,
    },
    // eslint-disable-next-line max-len
    ignorePatterns: ['jquery.js', 'jquery-ui.js', 'xml2json', 'script', 'integrator', 'imagesloaded', 'ima', 'client', 'bridge.html', 'external']
};
