const gulp = require("gulp");
const gulpLoadPlugins = require("gulp-load-plugins");
const $ = gulpLoadPlugins();

module.exports = (setting) => {

    setting.iconFont.forEach( (e,i,entryPoint) => {


        const FONT_NAME = setting.iconFont[i].font[0].name;
        const FONT_CLASS = setting.iconFont[i].font[0].class;
        const FONT_FORMAT = setting.iconFont[i].font[0].format;
        const FONT_SVG = setting.iconFont[i].font[0].svg;
        const FONT_DIST = setting.iconFont[i].font[0].dist;

        const SASS_TEMP = setting.iconFont[i].sass[0].template;
        const SASS_DIST = setting.iconFont[i].sass[0].dist;

        const GUIDE_TEMP = setting.iconFont[i].guideline[0].template;
        const GUIDE_DIST = setting.iconFont[i].guideline[0].dist;
        const GUIDE_PATH = setting.iconFont[i].guideline[0].path;

        gulp.src([ FONT_SVG ])

        // アイコンフォントを生成
        .pipe($.iconfont({
            fontName: FONT_NAME,
            formats: FONT_FORMAT,
            prependUnicode: true,
            normalize: true,
            fontHeight: 1000
        }))

        // テンプレートを生成
        .on('glyphs', function(glyphs) {

            // パラメータ設定
            var options = {
                glyphs: glyphs.map(function(glyph) {
                    return {
                        name: glyph.name,
                        codepoint:
                        glyph.unicode[0].charCodeAt(0)
                    };
                }),
                fontName: FONT_NAME,
                fontPath: "/" + FONT_DIST.split(setting.rootPath)[1],
                cssPath: GUIDE_PATH,
                className: FONT_CLASS
            };

            // SCSSの作成
            gulp.src( SASS_TEMP )
            .pipe($.consolidate('lodash', options))
            .pipe($.rename({ basename: '_' + FONT_NAME }))
            .pipe(gulp.dest( SASS_DIST ));

            // ガイドライン用HTMLの作成
            if( GUIDE_TEMP ){
                gulp.src( GUIDE_TEMP )
                .pipe($.consolidate('lodash', options))
                .pipe($.rename({ basename:FONT_NAME }))
                .pipe(gulp.dest( GUIDE_DIST ));
            }

        })

        .pipe(gulp.dest( FONT_DIST ));

    });

};
