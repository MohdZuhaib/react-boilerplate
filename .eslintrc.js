module.exports = {
    env: {
        browser: true,
        es2021: true,
        es6: true,
        jest: true
    },
    extends: ['plugin:react/recommended', 'airbnb', 'airbnb/hooks', 'prettier'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 13,
        sourceType: 'module'
    },
    plugins: ['react', 'prettier'],
    rules: {
        'arrow-body-style': ['error', 'as-needed'],
        'prettier/prettier': [
            1,
            {
                endOfLine: 'auto',
                printWidth: 80,
                trailingComma: 'none',
                semi: true,
                doubleQuote: false,
                jsxSingleQuote: false,
                singleQuote: true,
                useTabs: false,
                tabWidth: 4,
                bracketSameLine: false
            }
        ],
        'react/function-component-definition': [
            2,
            { namedComponents: 'arrow-function' }
        ],
        'react/react-in-jsx-scope': 0,
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'react/jsx-props-no-spreading': 0,
        'react/jsx-first-prop-new-line': [2, 'multiline'],
        'react/jsx-max-props-per-line': [2, { maximum: 1, when: 'multiline' }]
    }
};
