
fis.set('project.ignore',['node_modules/**', 'fis-conf.js','component.json','README.md']);
//fis.set('project.files', 'mod/pages/index/index.html'); // 按需编译

var sModPath = 'client/mods';

fis.unhook('components');
fis.hook('node_modules');
fis.hook('commonjs',{
    baseUrl: sModPath,
	extList: ['.js', '.jsx', '.es', '.ts', '.tsx']
});

fis.match('/{node_modules,' + sModPath + '}/**.{js,jsx,es}', {
    isMod: true
});

fis.match(sModPath + '/**.{js,jsx,es}', {
    useSameNameRequire:true
});

fis.match('client/static/(**)',{
    release: '/static/$1'
});

fis.match('**.scss', {
    rExt: '.css',
    parser: fis.plugin('node-sass', {
        
    })
});
// 编译所有后缀为 jsx 的文件为 js
fis.match('{*.jsx,*:jsx,*.es}', {
    parser: fis.plugin('babel-5.x', {
        sourceMaps: true
    }),
    rExt: '.js'
});
// 添加css和image加载支持
fis.match('*.{js,jsx,ts,tsx,es}', {
    preprocessor: [
      fis.plugin('js-require-css'),
      fis.plugin('js-require-file', {
        useEmbedWhenSizeLessThan: 3 * 1024 // 小于3k用base64
      })
    ]
});

fis.match(sModPath + "/pages/index/(*.html)",{
    release: '/$1',
    useCache : false
});

fis.match('::package', {
    postpackager: fis.plugin('loader',{
        resourceType: 'mod',
        useInlineMap: true
    })
});

fis.media('prod')
    .match('**.{css,scss}', {
        optimizer: fis.plugin('clean-css'),
        useHash:true,
        useSprite:true
    })
    .match('**.{js,es,jsx}',{
        optimizer: fis.plugin('uglify-js'),         
        useHash:true
    })
    .match(/\.png$/i, {
    	optimizer: fis.plugin('png-compressor')
  	})
    .match('node_modules/**',{
        useHash: false
    })
    .match('::package', {
        packager: fis.plugin('deps-pack', {
            'pkg/vue.all.js':[
    
            ],
            'pkg/npm.js': [
                sModPath + '/pages/index/index.es:deps',
                '!' + sModPath + '/**'
            ],
            'pkg/index.js': [
                sModPath + '/pages/index/index.es',
                sModPath + '/pages/index/index.es:deps'
            ],
            'pkg/index.css': [
                sModPath + '/pages/index/index.es:deps'
            ],
            'pkg/trend.js': [
                sModPath + '/pages/trend/trend.es',
                sModPath + '/pages/trend/trend.es:deps'
            ],
            'pkg/trend.css': [
                sModPath + '/pages/trend/trend.es:deps'
            ],
            'pkg/article.js': [
                sModPath + '/pages/article/article.es',
                sModPath + '/pages/article/article.es:deps'
            ],
            'pkg/article.css': [
                sModPath + '/pages/article/article.es:deps'
            ]
        })
    });