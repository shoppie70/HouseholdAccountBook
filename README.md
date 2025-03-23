# コーディング規約：コード自動整形

## 1. `editorconfig`の導入

EditorConfigを導入することで、
誰がどんなテキストエディタを使っていようとも、整形のルールを統一することができます。

### 設定方法

以下のコードをコピーし、テーマのドキュメントルートに
`.editorconfig`という名前で保存してください。

> **重要**
> インデントは半角スペース4つで統一しようと思います。

```config
root = true

[*]
charset = utf-8
end_of_line = lf
insert_final_newline = true
indent_style = space
indent_size = 4
trim_trailing_whitespace = true
quote_type = single

[*.md]
trim_trailing_whitespace = false
```

こちらのファイルを設定することで、
`PHPStorm`のコード整形キーを押したときの整形ルールが統一されます。

## 2. `.gitignore`の導入

`.gitignore`を導入することで、
gitにプッシュしないファイルを定義することができます。

### 設定方法

以下のコードをコピーし、テーマのドキュメントルートに
`.gitignore`という名前で保存してください。

<details>
<summary>詳細</summary>

```config
# Created by https://www.toptal.com/developers/gitignore/api/macos,windows,laravel,wordpress,phpstorm,php-cs-fixer
# Edit at https://www.toptal.com/developers/gitignore?templates=macos,windows,laravel,wordpress,phpstorm,php-cs-fixer

### Laravel ###
/vendor/
node_modules/
npm-debug.log
yarn-error.log

# Laravel 4 specific
bootstrap/compiled.php
app/storage/

# Laravel 5 & Lumen specific
public/storage
public/hot

# Laravel 5 & Lumen specific with changed public path
public_html/storage
public_html/hot

storage/*.key
.env
Homestead.yaml
Homestead.json
/.vagrant
.phpunit.result.cache

### macOS ###
# General
.DS_Store
.AppleDouble
.LSOverride

# Icon must end with two \r
Icon


# Thumbnails
._*

# Files that might appear in the root of a volume
.DocumentRevisions-V100
.fseventsd
.Spotlight-V100
.TemporaryItems
.Trashes
.VolumeIcon.icns
.com.apple.timemachine.donotpresent

# Directories potentially created on remote AFP share
.AppleDB
.AppleDesktop
Network Trash Folder
Temporary Items
.apdisk

### macOS Patch ###
# iCloud generated files
*.icloud

### PHP-CS-Fixer ###
# Covers PHP CS Fixer
# Reference: https://cs.symfony.com/

# Generated files
.php-cs-fixer.cache

# Local config See: https://cs.symfony.com/doc/config.html
.php-cs-fixer.php

### PhpStorm ###
# Covers JetBrains IDEs: IntelliJ, RubyMine, PhpStorm, AppCode, PyCharm, CLion, Android Studio, WebStorm and Rider
# Reference: https://intellij-support.jetbrains.com/hc/en-us/articles/206544839

# User-specific stuff
.idea/**/workspace.xml
.idea/**/tasks.xml
.idea/**/usage.statistics.xml
.idea/**/dictionaries
.idea/**/shelf

# AWS User-specific
.idea/**/aws.xml

# Generated files
.idea/**/contentModel.xml

# Sensitive or high-churn files
.idea/**/dataSources/
.idea/**/dataSources.ids
.idea/**/dataSources.local.xml
.idea/**/sqlDataSources.xml
.idea/**/dynamic.xml
.idea/**/uiDesigner.xml
.idea/**/dbnavigator.xml

# Gradle
.idea/**/gradle.xml
.idea/**/libraries

# Gradle and Maven with auto-import
# When using Gradle or Maven with auto-import, you should exclude module files,
# since they will be recreated, and may cause churn.  Uncomment if using
# auto-import.
# .idea/artifacts
# .idea/compiler.xml
# .idea/jarRepositories.xml
# .idea/modules.xml
# .idea/*.iml
# .idea/modules
# *.iml
# *.ipr

# CMake
cmake-build-*/

# Mongo Explorer plugin
.idea/**/mongoSettings.xml

# File-based project format
*.iws

# IntelliJ
out/

# mpeltonen/sbt-idea plugin
.idea_modules/

# JIRA plugin
atlassian-ide-plugin.xml

# Cursive Clojure plugin
.idea/replstate.xml

# SonarLint plugin
.idea/sonarlint/

# Crashlytics plugin (for Android Studio and IntelliJ)
com_crashlytics_export_strings.xml
crashlytics.properties
crashlytics-build.properties
fabric.properties

# Editor-based Rest Client
.idea/httpRequests

# Android studio 3.1+ serialized cache file
.idea/caches/build_file_checksums.ser

### PhpStorm Patch ###
# Comment Reason: https://github.com/joeblau/gitignore.io/issues/186#issuecomment-215987721

# *.iml
# modules.xml
# .idea/misc.xml
# *.ipr

# Sonarlint plugin
# https://plugins.jetbrains.com/plugin/7973-sonarlint
.idea/**/sonarlint/

# SonarQube Plugin
# https://plugins.jetbrains.com/plugin/7238-sonarqube-community-plugin
.idea/**/sonarIssues.xml

# Markdown Navigator plugin
# https://plugins.jetbrains.com/plugin/7896-markdown-navigator-enhanced
.idea/**/markdown-navigator.xml
.idea/**/markdown-navigator-enh.xml
.idea/**/markdown-navigator/

# Cache file creation bug
# See https://youtrack.jetbrains.com/issue/JBR-2257
.idea/$CACHE_FILE$

# CodeStream plugin
# https://plugins.jetbrains.com/plugin/12206-codestream
.idea/codestream.xml

# Azure Toolkit for IntelliJ plugin
# https://plugins.jetbrains.com/plugin/8053-azure-toolkit-for-intellij
.idea/**/azureSettings.xml

### Windows ###
# Windows thumbnail cache files
Thumbs.db
Thumbs.db:encryptable
ehthumbs.db
ehthumbs_vista.db

# Dump file
*.stackdump

# Folder config file
[Dd]esktop.ini

# Recycle Bin used on file shares
$RECYCLE.BIN/

# Windows Installer files
*.cab
*.msi
*.msix
*.msm
*.msp

# Windows shortcuts
*.lnk

### WordPress ###
# Core
#
# Note: if you want to stage/commit WP core files
# you can delete this whole section/until Configuration.
/wp-admin/
/wp-content/index.php
/wp-content/languages
/wp-content/plugins/index.php
/wp-content/themes/index.php
/wp-includes/
/index.php
/license.txt
/readme.html
/wp-*.php
/xmlrpc.php

# Configuration
wp-config.php

# Example themes
/wp-content/themes/twenty*/

# Example plugin
/wp-content/plugins/hello.php

# Uploads
/wp-content/uploads/

# Log files
*.log

# htaccess
/.htaccess

# All plugins
# Note: If you wish to whitelist plugins,
# uncomment the next line
#/wp-content/plugins

# All themes
# Note: If you wish to whitelist themes,
# uncomment the next line
#/wp-content/themes


# End of https://www.toptal.com/developers/gitignore/api/macos,windows,laravel,wordpress,phpstorm,php-cs-fixer
```

</details>

詳細をクリックで、内容が開きます。

## 3. GitHub Actionの実行設定

### テーマ側の設定

テーマのドキュメントルートからみて
`.github/workflows/action.yml`というファイルを設置してください。

参考コマンド

```shell=
$ mkdir .github/workflows
$ touch .github/workflows/action.yml
```

作成した`action.yml`に以下の内容をコピペしてください。

```yml
name: php-cs-fixer
on:
    push:
        branches:
            - master
            - main
    pull_request:
        branches:
            - master
            - main

jobs:
    php-cs-fixer:
        runs-on: ubuntu-20.04
        steps:
            - name: Setup PHP 7.4
              run: sudo update-alternatives --set php /usr/bin/php7.4
            - uses: actions/checkout@master
            - name: git setting
              run: |
                  git config --local user.email "info@hajimecreate.com"
                  git config --local user.name "Hajimecreate"
            - name: Prepare
              run: |
                  wget https://cs.symfony.com/download/php-cs-fixer-v2.phar -O php-cs-fixer
                  chmod a+x php-cs-fixer
            - name: php-cs-fixer
              run: php php-cs-fixer fix . --config=php_cs.dist
            - uses: actions/setup-node@v1
              with:
                  node-version: 14.x
            - name: Run Prettier
              run: |
                  npx prettier --write '**/*.{js,json,md,scss,css,html}' --tab-width 4
            - name: Commit and Push
              run: |
                  line=`git diff | wc -l`
                  if [ $line -eq 0 ]; then
                    echo "コミットするものがないので終了"
                    exit 0
                  fi
                  git add .
                  git commit -m "Code fix by Github Action" -a
                  git pull
                  git push origin HEAD
```

こちらのファイルがテーマにあるだけで、
GitHubの`master`または`main`ブランチにプッシュされたときに
コード整形が自動で走るようになります。

すなわち、プッシュするだけでコードが自動的に規約に沿います。
プルして、コードを最新にしてください。

> **重要**
> GitHubにpushする前にpullを行う癖をつけてください。

### リポジトリ設定の更新

### PHP CS Fixerの設定

- PHP CS Fixerとは、PHPの赤ペン先生
    - コードの内容を解析して、自動で整形をしてくれる
- 設定ファイルに応じて整形するルールを決められる

#### php_cs.dist

コード整形の基準を示すファイル。
`php_cs.dist`という名前でテーマのドキュメントルートに置いてください。

以下の設定ファイルを弊社のPHPコーディング規約とします。

```php
<?php

// PHP CS Fixer v3用の設定ファイルへの修正済みコード
use PhpCsFixer\Config;
use PhpCsFixer\Finder;

return (new Config())
    ->setRiskyAllowed(true) // リスキーなルールを許可
    ->setRules([
        '@PSR2' => true, // PSR-2標準に準拠
        'binary_operator_spaces' => [
            'operators' => [
                '=>' => 'align', // => の位置を揃える
                '=' => 'align',  // = の位置を揃える
            ],
        ],
        'blank_line_after_namespace' => true, // namespace の後に空行
        'blank_line_after_opening_tag' => true, // PHPタグ開始後に空行
        'blank_line_before_statement' => [ // 空行を追加するステートメントを指定
            'statements' => [
                'break',
                'continue',
                'declare',
                'return',
                'throw',
                'try',
            ],
        ],
        'braces' => [
            'allow_single_line_closure' => false, // シングルラインのクロージャを禁止
            'position_after_anonymous_constructs' => 'same', // 無名クラス、関数の波括弧の位置
            'position_after_control_structures' => 'same', // ifなど制御構文の波括弧の位置
            'position_after_functions_and_oop_constructs' => 'next', // 関数、クラスの波括弧の位置
        ],
        'cast_spaces' => [
            'space' => 'single', // キャスト後にスペース
        ],
        'concat_space' => [
            'spacing' => 'one', // 文字列連結演算子にスペースを追加
        ],
        'combine_consecutive_issets' => true, // 連続する isset を1つに結合
        'combine_consecutive_unsets' => true, // 連続する unset を1つに結合
        'declare_strict_types' => false, // strict_types 宣言を追加しない
        'function_declaration' => [
            'closure_function_spacing' => 'one', // クロージャ関数の function の後にスペース
        ],
        'full_opening_tag' => true, // <?php を強制
        'function_typehint_space' => true, // 型ヒントの後にスペース
        'no_superfluous_phpdoc_tags' => false, // 不要なPHPDocタグは許可
        'phpdoc_no_package' => false, // package タグを削除しない
        'general_phpdoc_annotation_remove' => [ // 削除するPHPDoc注釈
            'annotations' => ['author'], // PHPDocからauthorタグを削除
        ],
        'phpdoc_separation' => false, // PHPDocのセパレータを無効
        'phpdoc_align' => [
            'align' => 'vertical', // PHPDocのアラインメント
        ],
        'include' => true, // include 文の形式を統一
        'increment_style' => [
            'style' => 'pre', // ++、-- を前置スタイルに変更
        ],
        'is_null' => true, // is_null を使用（ === null を適用しない）
        'line_ending' => true, // 改行文字を設定
        'lowercase_cast' => true, // キャストを小文字に変更
        'constant_case' => [ // 定数の表記スタイル
            'case' => 'lower', // 定数を小文字に変更
        ],
        'lowercase_keywords' => true, // キーワードを小文字に変更
        'trailing_comma_in_multiline' => false, // 複数行の配列で末尾カンマを削除
        'no_leading_namespace_whitespace' => true, // namespace 前に空白を許可しない
        'echo_tag_syntax' => [ // echo タグの使用
            'format' => 'long', // <?= の代わりに <?php echo を使用
        ],
        'no_mixed_echo_print' => [
            'use' => 'echo', // echo の使用を強制
        ],
        'no_multiline_whitespace_around_double_arrow' => true, // => 周辺で複数行の空白禁止
        'no_superfluous_elseif' => true, // 不要な elseif を削除
        'no_useless_else' => true, // 無駄な else を削除
        'no_trailing_comma_in_singleline' => true, // シングルライン配列の末尾カンマ禁止
        'no_trailing_whitespace' => true, // 行末の空白を削除
        'no_unneeded_control_parentheses' => [ // 制御構文の () を必要に応じて削除
            'statements' => [
                'break',
                'clone',
                'continue',
                'echo_print',
                'return',
                'switch_case',
                'yield',
            ],
        ],
    ])
    ->setUsingCache(false) // キャッシュを使用しない設定
    ->setFinder(
        Finder::create()
            ->exclude('vendor') // vendorディレクトリを除外
            ->in(__DIR__) // 現在のディレクトリを指定
    );
```
