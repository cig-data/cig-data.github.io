import collect from 'bisheng/collect';
import Layout from './Layout';
import * as utils from '../utils';

export default collect(async (nextProps) => {
  const pathname = nextProps.location.pathname;

  const path = pathname.replace('-cn', '');

  let pageDataPath = path.split('/');

  if (path === 'index' || path === '/') {
    const componentsPageData = nextProps.utils.get(nextProps.data, ['components'])['business'].demo();
    return {
      localizedPageData: {
        'business': await componentsPageData,
      },
    };
  }
  if (/\/components/.test(path) && pageDataPath[1]) {
    const str = pageDataPath[1];
    pageDataPath[1] = str.charAt(0).toUpperCase() + str.slice(1);
  }

  if (/api/.test(path) && pageDataPath[1]) {
    pageDataPath = ['components', pageDataPath[1]];
  }
  let pageData = nextProps.utils.get(nextProps.data, pageDataPath);

  // 路由跳转统一处理
  if (pathname === 'components') {
    location.href = '/components/business';
    return;
  }

  if (!pageData) {
    throw 404; // eslint-disable-line no-throw-literal
  }
  const locale = utils.isZhCN(pathname) ? 'zh-CN' : 'en-US';
  const pageDataPromise = typeof pageData === 'function'
    ? pageData() : (pageData[locale] || pageData.index[locale] || pageData.index)();

  //dirty code 页面统一存储demo数据
  pageDataPath = ["components", "business"];

  const demosFetcher = nextProps.utils.get(nextProps.data, [...pageDataPath, 'demo']);
  // console.log(pageDataPath,'nextProps.data')
  if (demosFetcher) {
    const [localizedPageData, demos] = await Promise.all([pageDataPromise, demosFetcher()]);
    return { localizedPageData, demos };
  }
  return { localizedPageData: await pageDataPromise };
})(Layout);
