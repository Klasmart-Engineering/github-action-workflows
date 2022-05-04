# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [3.2.1](https://github.com/KL-Engineering/github-action-workflows/branches/compare/v3.2.1%0Dv3.2.0) (2022-05-04)


### 🐛 Bug Fixes

* git lfs checkout for internal npm packages (#18) ([11207d9](https://github.com/KL-Engineering/github-action-workflows/commits/11207d944a8e5d06d7bd51d13cdd716acf2de0bb))

## [3.2.0](https://github.com/KL-Engineering/github-action-workflows/branches/compare/v3.2.0%0Dv3.1.1) (2022-04-29)


### ✨ Features

* multi arch containers (#16) ([6bc07ea](https://github.com/KL-Engineering/github-action-workflows/commits/6bc07ea0fbe8b691ca69533f42280b659061251b))

### [3.1.1](https://github.com/KL-Engineering/github-action-workflows/branches/compare/v3.1.1%0Dv3.1.0) (2022-04-20)


### ⚙️ Continuous Integrations

* add optional build context to action (#10) ([257bb0e](https://github.com/KL-Engineering/github-action-workflows/commits/257bb0e28fbe6163c9c7e333471aa571bd226bf0))
* add optional dockerfile_context (#9) ([ba70d46](https://github.com/KL-Engineering/github-action-workflows/commits/ba70d467ab03c339edc93ca849837b6a860981fe))
* don't replace periods in image tags (#11) ([72697e1](https://github.com/KL-Engineering/github-action-workflows/commits/72697e1014be51b7e1879f115eb1db31817baa70))
* **npm-generate-version, package:** add outputs to generate version (#12) ([af92bc4](https://github.com/KL-Engineering/github-action-workflows/commits/af92bc4dae9521b06053761eefba78151c529f2a))


### 🐛 Bug Fixes

* **npm-generate-version:** fix generate version (#13) ([fd75ae1](https://github.com/KL-Engineering/github-action-workflows/commits/fd75ae138cbb40d666d49b091ec2a4220a0ebeb3))

## [3.1.0](https://github.com/KL-Engineering/github-action-workflows/branches/compare/v3.1.0%0Dv3.0.1) (2022-04-13)


### ✨ Features

* Adding new actions (#7) ([44facad](https://github.com/KL-Engineering/github-action-workflows/commits/44facad37173b9cc3f13b5ebdb562307577f5d18))
* **version-bump:** add release_as parameter (#8) ([deb04d5](https://github.com/KL-Engineering/github-action-workflows/commits/deb04d5abaf4aaa5fbc72d3e06ee345c9e693df7))

### [3.0.1](https://github.com/KL-Engineering/github-action-workflows/branches/compare/v3.0.1%0Dv3.0.0) (2022-04-08)


### 🐛 Bug Fixes

* change conventional commit pr title preset to allow breaking change indicator (#5) ([e6aad2b](https://github.com/KL-Engineering/github-action-workflows/commits/e6aad2bcb1956551522e294540c8230826db2c9a))

## [3.0.0](https://github.com/KL-Engineering/github-action-workflows/branches/compare/v3.0.0%0Dv2.1.0) (2022-04-06)


### ⚠ BREAKING CHANGES

* separate publish into two separate workflows, one for builds, one for no build

### ♻️ Chores

* remove link between lint and conventional-pr-title workflows ([f101786](https://github.com/KL-Engineering/github-action-workflows/commits/f101786e58a6502aa3e9497e5c58ece47251e515))


### ✨ Features

* deploy-kidskube and docker-build-push (#3) ([d7627bf](https://github.com/KL-Engineering/github-action-workflows/commits/d7627bfc846394fb145167fb5cbca14c32855d4c))


### ⚙️ Continuous Integrations

* separate pull request pipeline for meta info (#4) ([d1455db](https://github.com/KL-Engineering/github-action-workflows/commits/d1455dbd0abaa8420746a551406589335b492246))


### 📦 Refactor

* separate publish into two separate workflows, one for builds, one for no build ([37adb5c](https://github.com/KL-Engineering/github-action-workflows/commits/37adb5ca092f5831f703610b125d8cd7d8c2566a))

## [2.1.0](https://github.com/KL-Engineering/github-action-workflows/branches/compare/v2.1.0%0Dv2.0.3) (2022-04-05)


### ✨ Features

* add conventional pr title workflow (#2) ([a4533be](https://github.com/KL-Engineering/github-action-workflows/commits/a4533beb2a1b4f84b4509fdabc60c66e7d5b8e6b))

### [2.0.3](https://github.com/KL-Engineering/github-action-workflows/branches/compare/v2.0.3%0Dv2.0.2) (2022-04-01)


### 🐛 Bug Fixes

* load node_modules before npm publish which runs npm prepare as well ([a6535ac](https://github.com/KL-Engineering/github-action-workflows/commits/a6535ac497bd64c36c3d1fef009e5c468f863b11))

### [2.0.2](https://github.com/KL-Engineering/github-action-workflows/branches/compare/v2.0.2%0Dv2.0.1) (2022-04-01)


### 🐛 Bug Fixes

* download build artifact name ([aea9ab1](https://github.com/KL-Engineering/github-action-workflows/commits/aea9ab122e34bb61327e3fa3789eaaaa25deaacf))

### [2.0.1](https://github.com/KL-Engineering/github-action-workflows/branches/compare/v2.0.1%0Dv2.0.0) (2022-04-01)


### ♻️ Chores

* rename workflow ([e56e4f8](https://github.com/KL-Engineering/github-action-workflows/commits/e56e4f8239369591254d4bc4f783e879399680c2))


### 🐛 Bug Fixes

* build artifact name ([2595137](https://github.com/KL-Engineering/github-action-workflows/commits/2595137116d9002a8e0f4ef8d11173088a7b9111))

## [2.0.0](https://github.com/KL-Engineering/github-action-workflows/branches/compare/v2.0.0%0Dv1.1.5) (2022-03-31)


### ⚠ BREAKING CHANGES

* separate npm build and npm publish workflow

### 📚 Docs

* updated usage example ([4e25f42](https://github.com/KL-Engineering/github-action-workflows/commits/4e25f427312e18f44727ec26850483676d59d70b))


### 📦 Refactor

* separate npm build and npm publish workflow ([bb892a0](https://github.com/KL-Engineering/github-action-workflows/commits/bb892a02bc38763b462ea13c46f537e9cf3c88f3))


### ♻️ Chores

* change environment name ([3be3054](https://github.com/KL-Engineering/github-action-workflows/commits/3be3054c7890963a2e8be3fc372f5cc9018f42ca))
* update workflow names ([4619924](https://github.com/KL-Engineering/github-action-workflows/commits/46199240da6efb2e097ceda7b7c47398623455e0))

### [1.1.5](https://github.com/KL-Engineering/github-action-workflows/branches/compare/v1.1.5%0Dv1.1.4) (2022-03-31)


### 🐛 Bug Fixes

* checkout with lfs ([c2976bb](https://github.com/KL-Engineering/github-action-workflows/commits/c2976bb1b5b70e072987fb64b65ed814fa6c1652))

### [1.1.4](https://github.com/KL-Engineering/github-action-workflows/branches/compare/v1.1.4%0Dv1.1.3) (2022-03-31)


### 💎 Style

* rename jobs ([028cd74](https://github.com/KL-Engineering/github-action-workflows/commits/028cd741f7e2a95ea782f2757eef62ab2f1bfcad))

### [1.1.3](https://github.com/KL-Engineering/github-action-workflows/branches/compare/v1.1.3%0Dv1.1.2) (2022-03-31)

### [1.1.2](https://github.com/KL-Engineering/github-action-workflows/branches/compare/v1.1.2%0Dv1.1.1) (2022-03-31)


### 🐛 Bug Fixes

* get latest github tag ([a2fc62d](https://github.com/KL-Engineering/github-action-workflows/commits/a2fc62d577886f290b78c4650873111b28191e2f))

### [1.1.1](https://github.com/KL-Engineering/github-action-workflows/branches/compare/v1.1.1%0Dv1.1.0) (2022-03-31)


### 🐛 Bug Fixes

* published release tag name ([d2c4e0b](https://github.com/KL-Engineering/github-action-workflows/commits/d2c4e0bbbd298952141618450c6d68b3e21894a8))

## [1.1.0](https://github.com/KL-Engineering/github-action-workflows/branches/compare/v1.1.0%0Dv1.0.0) (2022-03-31)


### ✨ Features

* automatically post release notes & normalize headings (#1) ([4613cda](https://github.com/KL-Engineering/github-action-workflows/commits/4613cda40e717d35557b4c0bfcd9e0b632fbdcef))


### 🐛 Bug Fixes

* bump version input ([d4a2a84](https://github.com/KL-Engineering/github-action-workflows/commits/d4a2a846b7894b264f34e31031e8814d4342a020))

## 1.0.0 (2022-03-30)


### ✨ Features

* add first reusable workflows ([05dee17](https://github.com/KL-Engineering/github-action-workflows/commits/05dee17313ee0436a8e3ae2041ba8d620fc515da))

# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.
