const Article = './template/Content/Article';
const ComponentDoc = './template/Content/ComponentDoc';
const path = require('path');

const homeTmpl = './template/Home/index';
// const contentTmpl = './template/Content/index';

function pickerGenerator(module = 'language/') {
  const tester = new RegExp(`^${module}`);
  return (markdownData) => {
    const { filename } = markdownData.meta;
    if (tester.test(filename) && !/\/demo$/.test(path.dirname(filename))) {
      return {
        meta: markdownData.meta,
      };
    }
    return null;
  };
}

module.exports = {
  lazyLoad(nodePath, nodeValue) {
    if (typeof nodeValue === 'string') {
      return true;
    }
    return nodePath.endsWith('/demo');
  },
  pick: {
    language: pickerGenerator(),
    components: pickerGenerator('components'),
    api: pickerGenerator('components'),
  },
  plugins: [
    'bisheng-plugin-description',
    'bisheng-plugin-toc?maxDepth=2&keepElem',
    'bisheng-plugin-antd',
    'bisheng-plugin-react?lang=__react',
  ],
  routes: {
    path: '/',
    component: './template/Layout/index',
    indexRoute: { component: homeTmpl },
    childRoutes: [
      {
        path: 'index-cn',
        component: homeTmpl,
      },
      { 
        path: '/language/:children', 
        component: Article 
      },
      // {
      //   path: '/components/:children',
      //   component: ComponentDoc,
      // },
      // { 
      //   path: '/api/:children', 
      //   component: Article 
      // }
    ],
  },
};
