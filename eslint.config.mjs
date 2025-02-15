import shopifyEslintPlugin from '@shopify/eslint-plugin';
import shopifyPrettier from '@shopify/prettier-plugin-liquid';
import prettier from 'eslint-plugin-prettier';
import globals from 'globals';

const config = [
    ...shopifyEslintPlugin.configs.esnext,
    ...shopifyEslintPlugin.configs.prettier,
    {
        ignores: ['**/*.min.js', './build/**/*'],
        plugins: {
            prettier,
            shopifyPrettier,
        },
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.jquery,
                LazyLoad: 'readonly',
                ModifyCustomStore_General: 'readonly',
                Shopify: 'readonly',
                ReleasesPage: 'readonly',
            },
            ecmaVersion: 2018,
            sourceType: 'module',
        },
        rules: {
            semi: ['error', 'always'],
            'no-console': 'off',
            'guard-for-in': 'off',
            '@babel/no-invalid-this': 'off',
            'no-unused-vars': [
                'warn',
                {
                    args: 'all',
                    argsIgnorePattern: '^_',
                    ignoreRestSiblings: false,
                },
            ],
            'no-undef': 'error',
            'no-restricted-globals': 'error',
            'comma-dangle': ['error', 'always-multiline'],
            quotes: ['error', 'single'],
            indent: ['error', 4],
            'no-extra-semi': 'error',
            'prettier/prettier': 'warn',
            eqeqeq: 'off',
            'id-length': [
                'warn',
                {
                    min: 2,
                    exceptions: ['a', 'b', 'i', 'j', 'x', 'y'],
                },
            ],
        },
    },
];

export default config;
