# github-action-workflows

This repository is used to store reusable GitHub Action Workflows, to be used in other repositories.

## Usage

In your local repository:
```yml
jobs:
  install:
    uses: KL-Engineering/github-action-workflows/.github/workflows/npm-ci.yml@v1.1.5
      secrets:
        NODE_AUTH_TOKEN: ${{ secrets.PACKAGES_TOKEN }}
```
More details here: https://docs.github.com/en/actions/using-workflows/reusing-workflows

## Tooling

### VSCode

#### YAML Language Support
https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml

##### Caveats
Some GitHub workflow files with specific names (e.g. `build.yml`) might not be able to load the correct YAML parser, it is therefore recommended to set the following settings in VSCode:
```json
{
  ...
  "yaml.schemas": {
    "https://json.schemastore.org/github-workflow": "/.github/workflows/**/*.yml"
  }
  ...
}
```
See https://github.com/redhat-developer/vscode-yaml/issues/397 for more info