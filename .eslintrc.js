// required to load local dependencies of kidsloop-eslint-config
// https://github.com/eslint/eslint/issues/3458
require(`@rushstack/eslint-patch/modern-module-resolution`);

module.exports = {
    overrides: [
        {
            extends: [ `plugin:yml/recommended` ],
            files: [ `*.yaml`, `*.yml` ],
            parser: `yaml-eslint-parser`,
            parserOptions: {
                project: `tsconfig.json`,
            },
            rules: {
                'yml/no-empty-mapping-value': `off`,
                'yml/indent': [ `error`, 2 ],
            },
        },
        {
            extends: [ `@kl-engineering/eslint-config` ],
            files: [ `*.js`, `*.ts` ],
            parserOptions: {
                project: `tsconfig.json`,
            },
        },
    ],
};
