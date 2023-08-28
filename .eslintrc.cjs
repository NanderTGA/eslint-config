module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:jsdoc/recommended",
    ],
    plugins: [
        "jsdoc",
        "@typescript-eslint",
        "eslint-plugin-jsonc",
    ],
    ignorePatterns: [
        "package.json",
        "package-lock.json",
        "**/node_modules/*",
    ],
    rules: {
        "indent"                          : [ "error", 4, { "SwitchCase": 1 } ],
        "quotes"                          : [ "error", "double", { "allowTemplateLiterals": true } ],
        "semi"                            : [ "error", "always" ],
        "no-var"                          : [ "off" ],
        "no-else-return"                  : [ "error" ],
        "array-bracket-spacing"           : [ "error", "always" ],
        "block-spacing"                   : [ "error" ],
        "brace-style"                     : [ "error", "1tbs" ],
        "comma-dangle"                    : [ "error", "always-multiline" ],
        "eol-last"                        : [ "error", "never" ],
        "func-call-spacing"               : [ "error", "never" ],
        "implicit-arrow-linebreak"        : [ "error" ],
        "key-spacing"                     : [ "error", { "mode": "minimum", "align": "colon" } ],
        "new-parens"                      : [ "error", "always" ],
        "no-lonely-if"                    : [ "error" ],
        "no-multi-assign"                 : [ "error" ],
        "no-trailing-spaces"              : [ "error", { "skipBlankLines": true } ],
        "no-unneeded-ternary"             : [ "error" ],
        "no-whitespace-before-property"   : [ "error" ],
        "nonblock-statement-body-position": [ "off" ],
        "object-curly-spacing"            : [ "error", "always" ],
        "operator-assignment"             : [ "error", "always" ],
        "semi-spacing"                    : [ "error" ],
        "space-infix-ops"                 : [ "error", { "int32Hint": false } ],
        "no-unused-vars"                  : [ "off" ],
        "comma-spacing"                   : [ "error", { "before": false, "after": true } ],
        "jsdoc/newline-after-description" : [ "off" ],
        "jsdoc/check-types"               : [ "warn" ],
        "keyword-spacing"                 : [ "error" ],
        "arrow-spacing"                   : [ "error", { "before": true, "after": true } ],
        "no-duplicate-imports"            : [ "error", { "includeExports": true } ],
        "no-throw-literal"                : "error",
    },
    overrides: [
        {
            files        : [ "*.ts" ],
            parser       : "@typescript-eslint/parser",
            parserOptions: {
                project        : "../../../tsconfig.eslint.json",
                tsconfigRootDir: __dirname,
            },
            extends: [
                "plugin:@typescript-eslint/recommended",
                "plugin:@typescript-eslint/recommended-requiring-type-checking",
                //"plugin:@typescript-eslint/strict"
            ],
            rules: {
                "indent"                                 : [ "off" ],
                "quotes"                                 : [ "off" ],
                "semi"                                   : [ "off" ],
                "@typescript-eslint/indent"              : [ "error", 4, { "SwitchCase": 1 } ],
                "@typescript-eslint/quotes"              : [ "error", "double", { "allowTemplateLiterals": true } ],
                "@typescript-eslint/semi"                : [ "error", "always" ],
                "no-var"                                 : [ "off" ],
                "no-else-return"                         : [ "error" ],
                "array-bracket-spacing"                  : [ "error", "always" ],
                "block-spacing"                          : [ "error" ],
                "brace-style"                            : [ "off" ],
                "comma-dangle"                           : [ "off" ],
                "@typescript-eslint/brace-style"         : [ "error", "1tbs" ],
                "@typescript-eslint/comma-dangle"        : [ "error", "always-multiline" ],
                "eol-last"                               : [ "error", "never" ],
                "func-call-spacing"                      : [ "off" ],
                "@typescript-eslint/func-call-spacing"   : [ "error", "never" ],
                "implicit-arrow-linebreak"               : [ "error" ],
                "key-spacing"                            : [ "error", { "mode": "minimum", "align": "colon" } ],
                "new-parens"                             : [ "error", "always" ],
                "no-lonely-if"                           : [ "error" ],
                "no-multi-assign"                        : [ "error" ],
                "no-trailing-spaces"                     : [ "error", { "skipBlankLines": true } ],
                "no-unneeded-ternary"                    : [ "error" ],
                "no-whitespace-before-property"          : [ "error" ],
                "nonblock-statement-body-position"       : [ "error" ],
                "object-curly-spacing"                   : [ "off" ],
                "@typescript-eslint/object-curly-spacing": [ "error", "always" ],
                "operator-assignment"                    : [ "error", "always" ],
                "semi-spacing"                           : [ "error" ],
                "space-infix-ops"                        : [ "off" ],
                "@typescript-eslint/space-infix-ops"     : [ "error", { "int32Hint": false } ],
                "no-unused-vars"                         : [ "off" ],
                "comma-spacing"                          : [ "off" ],
                "@typescript-eslint/no-unused-vars"      : [ "off" ],
                "@typescript-eslint/comma-spacing"       : [ "error", { "before": false, "after": true } ],
                "jsdoc/newline-after-description"        : [ "off" ],
                "jsdoc/check-types"                      : [ "warn" ],
                "no-unused-labels"                       : [ "off" ],
                "jsdoc/require-returns"                  : [ "off" ],
                "jsdoc/require-param-type"               : [ "off" ],
                "jsdoc/require-returns-type"             : [ "off" ],
                "jsdoc/require-jsdoc"                    : [ "off" ],
                "@typescript-eslint/ban-tslint-comment"  : [ "error" ],
                "no-throw-literal"                       : "off",
                "@typescript-eslint/no-throw-literal"    : "error",
                "@typescript-eslint/ban-ts-comment"      : [ "error", {
                    "ts-ignore": "allow-with-description",
                } ],
            },
        },
        {
            files  : [ "*.json5", "*.jsonc" ],
            parser: "jsonc-eslint-parser",
            //extends: [ "plugin:jsonc/recommended-with-jsonc" ],
            rules  : {
                "jsonc/auto": [ "error" ],
            },
        },
        {
            files  : [ "*.json", "*.mcmeta" ],
            parser: "jsonc-eslint-parser",
            //extends: [ "plugin:jsonc/recommended-with-jsonc" ],
            rules  : {
                "jsonc/auto"        : [ "error" ],
                "jsonc/comma-dangle": [ "error", "never" ],
            },
        },
    ],
};