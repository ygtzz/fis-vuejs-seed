
fis.set('project.ignore',['node_modules/**', 'fis-conf.js','component.json','README.md']);

fis.hook('commonjs',{
	baseUrl:'./widget',
	extList: ['.js', '.jsx', '.es', '.ts', '.tsx']
});

fis.match('/{components,widget,pages}/**.js', {
    isMod: true,
    useSameNameRequire:true
});

fis.match('**.scss', {
    rExt: '.css',
    parser: fis.plugin('node-sass', {
        
    })
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

fis.match('**',{
    release: '/static/$0'
});

fis.match("pages/index/(*.html)",{
    release: '/$1',
    useCache : false
});

fis.match("/static/(**)",{
    release: '/static/$1'
});

fis.match('::package', {
    postpackager: fis.plugin('loader',{
        resourceType: 'mod',
        useInlineMap: true
    })
});

fis.set('baseUrl','http://cdn.com');
fis.set('cssPath',fis.get('baseUrl') + '/css/xpromt/efmp');
fis.set('jsPath',fis.get('baseUrl') + '/js/xpromt/efmp');
fis.set('imgPath',fis.get('baseUrl') + '/images/xpromt/efmp');

fis.media('prod')
    .match('**.{css,scss}', {
        optimizer: fis.plugin('clean-css'),
        useHash:true,
        useSprite:true
        //domain:fis.get('cssPath')
    })
    .match('**.js',{
        optimizer: fis.plugin('uglify-js'),         
        useHash:true
    })
    .match('/components/**', {
        release: false
    })
    .match('/components/**.{css,scss}', {
        release:true,
        packTo: '/static/coms/com.css'
    })
    .match('/components/**.js', {
        release:true,
        packTo: '/static/coms/coms.js'
    })
    .match('/widget/**.{css,scss}', {
        packTo: '/static/widget/widget.css'
    })
    .match('/widget/(**).js', {
        packTo: '/static/widget/widget.js'
    })
    .match('/pages/(**)/(*).{css,scss}', {
        packTo:'/static/pages/page.css'
    })
    .match('/pages/(**)/(*).js', {
        packTo:'/static/pages/page.js'
    })
    // .match('/static/**.{css,scss}', {
    //     useHash:true
    // })
    // .match('/static/**.js', {
    //     //domain:fis.get('jsPath')
    // });
    