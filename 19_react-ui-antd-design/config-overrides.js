const {injectBabelPlugin} = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
    config = injectBabelPlugin(
        [
            'import',    // 声明 babel-plugin-import 根据 import 进行打包
            {
                libraryName: 'antd',    // 针对 entd 进行打包
                libraryDirectory: 'es',
                style: true    // 自动打包 其 css 文件 - true 打包 js、css
            }
        ],
        config
    );
    
    config = rewireLess.withLoaderOptions({
        modifyVars: {"@primary-color": "#ff0000"},
        javascriptEnabled: true,
    })(config, env);
    
    return config;
};
