const WORKER_PROXY = 'https://libretv-proxy.wongzen081.workers.dev';

const API_SITES = {
  dyttzy: {
    api: `${WORKER_PROXY}/?api=http://caiji.dyttzyapi.com/api.php/provide/vod`,
    name: '电影天堂资源',
    detail: 'http://caiji.dyttzyapi.com',
  },
  ruyi: {
    api: `${WORKER_PROXY}/?api=https://cj.rycjapi.com/api.php/provide/vod`,
    name: '如意资源',
  },
  bfzy: {
    api: `${WORKER_PROXY}/?api=https://bfzyapi.com/api.php/provide/vod`,
    name: '暴风资源',
  },
  tyyszy: {
    api: `${WORKER_PROXY}/?api=https://tyyszy.com/api.php/provide/vod`,
    name: '天涯资源',
  },
  xiaomaomi: {
    api: `${WORKER_PROXY}/?api=https://zy.xmm.hk/api.php/provide/vod`,
    name: '小猫咪资源',
  },
  ffzy: {
    api: `${WORKER_PROXY}/?api=http://ffzy5.tv/api.php/provide/vod`,
    name: '非凡影视',
    detail: 'http://ffzy5.tv',
  },
  heimuer: {
    api: `${WORKER_PROXY}/?api=https://json.heimuer.xyz/api.php/provide/vod`,
    name: '黑木耳',
    detail: 'https://heimuer.tv',
  },
  zy360: {
    api: `${WORKER_PROXY}/?api=https://360zy.com/api.php/provide/vod`,
    name: '360资源',
  },
  iqiyi: {
    api: `${WORKER_PROXY}/?api=https://www.iqiyizyapi.com/api.php/provide/vod`,
    name: 'iqiyi资源',
  },
  wolong: {
    api: `${WORKER_PROXY}/?api=https://wolongzyw.com/api.php/provide/vod`,
    name: '卧龙资源',
  },
  hwba: {
    api: `${WORKER_PROXY}/?api=https://cjhwba.com/api.php/provide/vod`,
    name: '华为吧资源',
  },
  jisu: {
    api: `${WORKER_PROXY}/?api=https://jszyapi.com/api.php/provide/vod`,
    name: '极速资源',
    detail: 'https://jszyapi.com',
  },
  dbzy: {
    api: `${WORKER_PROXY}/?api=https://dbzy.tv/api.php/provide/vod`,
    name: '豆瓣资源',
  },
  mozhua: {
    api: `${WORKER_PROXY}/?api=https://mozhuazy.com/api.php/provide/vod`,
    name: '魔爪资源',
  },
  mdzy: {
    api: `${WORKER_PROXY}/?api=https://www.mdzyapi.com/api.php/provide/vod`,
    name: '魔都资源',
  },
  zuid: {
    api: `${WORKER_PROXY}/?api=https://api.zuidapi.com/api.php/provide/vod`,
    name: '最大资源',
  },
  yinghua: {
    api: `${WORKER_PROXY}/?api=https://m3u8.apiyhzy.com/api.php/provide/vod`,
    name: '樱花资源',
  },
  baidu: {
    api: `${WORKER_PROXY}/?api=https://api.apibdzy.com/api.php/provide/vod`,
    name: '百度云资源',
  },
  wujin: {
    api: `${WORKER_PROXY}/?api=https://api.wujinapi.me/api.php/provide/vod`,
    name: '无尽资源',
  },
  wwzy: {
    api: `${WORKER_PROXY}/?api=https://wwzy.tv/api.php/provide/vod`,
    name: '旺旺短剧',
  },
  ikun: {
    api: `${WORKER_PROXY}/?api=https://ikunzyapi.com/api.php/provide/vod`,
    name: 'iKun资源',
  },
  lzi: {
    api: `${WORKER_PROXY}/?api=https://cj.lziapi.com/api.php/provide/vod/`,
    name: '量子资源站',
  },
  testSource: {
    api: `${WORKER_PROXY}/?api=https://www.example.com/api.php/provide/vod`,
    name: '空内容测试源',
    adult: true,
  },
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
