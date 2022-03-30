module.exports = {
    types: [
        {
            type: `feat`,
            section: `✨ Features`,
            hidden: false,
        },
        {
            type: `fix`,
            section: `🐛 Bug Fixes`,
            hidden: false,
        },
        {
            type: `chore`,
            section: `♻️ Chores`,
            hidden: false,
        },
        {
            type: `docs`,
            section: `📚 Docs`,
            hidden: true,
        },
        {
            type: `style`,
            section: `💎 Style`,
            hidden: true,
        },
        {
            type: `refactor`,
            section: `📦 Refactor`,
            hidden: false,
        },
        {
            type: `perf`,
            section: `🚀 Performance`,
            hidden: false,
        },
        {
            type: `test`,
            section: `🧪 Tests`,
            hidden: true,
        },
        {
            type: `ci`,
            section: `⚙️ Continuous Integrations`,
            hidden: true,
        },
        {
            type: `build`,
            section: `🔨 Build`,
            hidden: true,
        },
        {
            type: `revert`,
            section: `🗑 Reverts`,
            title: `Reverts`,
        },
    ],
    commitUrlFormat: `{{host}}/{{owner}}/{{repository}}/commits/{{hash}}`,
    compareUrlFormat: `{{host}}/{{owner}}/{{repository}}/branches/compare/{{currentTag}}%0D{{previousTag}}`,
    issueUrlFormat: `https://calmisland.atlassian.net/browse/{{prefix}}{{id}}`,
    issuePrefixes: [ `AD-`, `DT-` ],
};
