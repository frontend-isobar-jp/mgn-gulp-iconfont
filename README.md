# Download

[↓ Download zip file](https://github.com/frontend-isobar-jp/mgn-gulp-iconfont/blob/master/mgn-gulp-iconfont.zip?raw=true)

----


# Iconfont |

## install

$ npm install lodash gulp-iconfont gulp-iconfont-css gulp-rename gulp-consolidate --save

## 1. setting追加

'font.name' には フォント名を設定します。(必須)  
'font.class' には CSSで表示する際の class名 を設定します。(必須)
'font.format' には 生成するフォント形式を設定します。(必須)
'font.svg' には 元素材となるSVG画像の格納場所を設定します。(必須)
'font.dist' には フォントの出力ディレクトリを設定します。(必須)

'scss.template' には フォントの設定が記述される scssテンプレートの格納場所 を設定します。(必須)
'scss.dist' には フォントの設定が記述された 出力ディレクトリ を設定します。(必須)

'guideline.template' には ガイドライン用ページの テンプレートの格納場所 を設定します。(任意)
'guideline.dist' には ガイドライン用ページの 出力ディレクトリ を設定します。(任意)
'guideline.path' ガイドライン用ページの CSSのディレクトリパス を設定します。(任意)

```
const SETTING = {

    'iconFont': [
        {
            'font': [
                {
                    'name': 'iconfont', // フォント名
                    'class': 'a-icon', // class名
                    'format': ['ttf', 'eot', 'woff', 'svg'], // フォーマット
                    'svg': './src/fonts/icons/*.svg', // 元素材
                    'dist': ROOT_PATH + 'assets/fonts/', // フォント出力先
                }
            ],
            'sass': [
                {
                    'template': './src/fonts/tmp/fontawesome-style.scss', // scssテンプレート
                    'dist': './src/scss/0_atoms/', // scss出力先
                }
            ],
            'guideline': [
                {
                    'template': './src/fonts/tmp/fontawesome-style.html', // guidelineテンプレート
                    'dist': ROOT_PATH + 'guide_line/component/', // guidelineテンプレート出力先
                    'path': '/assets/css/style.css', // guidelineテンプレート内で読み込むCSSファイル
                }
            ]
        }
        // 対象ディレクトリを増やす場合は、配列を追加する
    ]

}
```

## 2. Module Import

```
const Iconfont = require("./gulp/iconfont");
```

## 3. task定義

```
gulp.task('iconfont', () => {
    Iconfont(SETTING);
});
```

## 4. Default Task
（ taskListへ記述することで、default起動するようになります。 ）

```
const taskList = [

    'iconfont'

]
```
