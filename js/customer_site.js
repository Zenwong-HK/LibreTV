const CUSTOMER_SITES = {
    dyttzy: {
        api: 'https://libretv-proxy.wongzen081.workers.dev/?api=http://caiji.dyttzyapi.com/api.php/provide/vod',
        name: '电影天堂资源',
        detail: 'http://caiji.dyttzyapi.com',
    },
    ruyi: {
        api: 'https://libretv-proxy.wongzen081.workers.dev/?api=https://cj.rycjapi.com/api.php/provide/vod',
        name: '如意资源',
    },
    bfzy: {
        api: 'https://libretv-proxy.wongzen081.workers.dev/?api=https://bfzyapi.com/api.php/provide/vod',
        name: '暴风资源',
    },
    tyyszy: {
        api: 'https://libretv-proxy.wongzen081.workers.dev/?api=https://tyyszy.com/api.php/provide/vod',
        name: '天涯资源',
    },
    xiaomaomi: {
        api: 'https://libretv-proxy.wongzen081.workers.dev/?api=https://zy.xmm.hk/api.php/provide/vod',
        name: '小猫咪资源',
    },
    ffzy: {
        api: 'https://libretv-proxy.wongzen081.workers.dev/?api=http://ffzy5.tv/api.php/provide/vod',
        name: '非凡影视',
        detail: 'http://ffzy5.tv',
    },
    heimuer: {
        api: 'https://libretv-proxy.wongzen081.workers.dev/?api=https://json.heimuer.xyz/api.php/provide/vod',
        name: '黑木耳',
        detail: 'https://heimuer.tv',
    },
    zy360: {
        api: 'https://libretv-proxy.wongzen081.workers.dev/?api=https://360zy.com/api.php/provide/vod',
        name: '360资源',
    },
    iqiyi: {
        api: 'https://libretv-proxy.wongzen081.workers.dev/?api=https://www.iqiyizyapi.com/api.php/provide/vod',
        name: 'iqiyi资源',
    },
    wolong: {
        api: 'https://libretv-proxy.wongzen081.workers.dev/?api=https://wolongzyw.com/api.php/provide/vod',
        name: '卧龙资源',
    },
    hwba: {
        api: 'https://libretv-proxy.wongzen081.workers.dev/?api=https://cjhwba.com/api.php/provide/vod',
        name: '华为吧资源',
    },
    jisu: {
        api: 'https://libretv-proxy.wongzen081.workers.dev/?api=https://jszyapi.com/api.php/provide/vod',
        name: '极速资源',
        detail: 'https://jszyapi.com',
    },
    dbzy: {
        api: 'https://libretv-proxy.wongzen081.workers.dev/?api=https://dbzy.tv/api.php/provide/vod',
        name: '豆瓣资源',
    },
    mozhua: {
        api: 'https://libretv-proxy.wongzen081.workers.dev/?api=https://mozhuazy.com/api.php/provide/vod',
        name: '魔爪资源',
    },
    mdzy: {
        api: 'https://libretv-proxy.wongzen081.workers.dev/?api=https://www.mdzyapi.com/api.php/provide/vod',
        name: '魔都资源',
    },
    zuid: {
        api: 'https://libretv-proxy.wongzen081.workers.dev/?api=https://api.zuidapi.com/api.php/provide/vod',
        name: '最大资源',
    },
    yinghua: {
        api: 'https://libretv-proxy.wongzen081.workers.dev/?api=https://m3u8.apiyhzy.com/api.php/provide/vod',
        name: '樱花资源',
    },
    baidu: {
        api: 'https://libretv-proxy.wongzen081.workers.dev/?api=https://api.apibdzy.com/api.php/provide/vod',
        name: '百度云资源',
    },
    wujin: {
        api: 'https://libretv-proxy.wongzen081.workers.dev/?api=https://api.wujinapi.me/api.php/provide/vod',
        name: '无尽资源',
    },
    wwzy: {
        api: 'https://libretv-proxy.wongzen081.workers.dev/?api=https://wwzy.tv/api.php/provide/vod',
        name: '旺旺短剧',
    },
    ikun: {
        api: 'https://libretv-proxy.wongzen081.workers.dev/?api=https://ikunzyapi.com/api.php/provide/vod',
        name: 'iKun资源',
    },
    lzi: {
        api: 'https://libretv-proxy.wongzen081.workers.dev/?api=https://cj.lziapi.com/api.php/provide/vod/',
        name: '量子资源站',
    },
    testSource: {
        api: 'https://libretv-proxy.wongzen081.workers.dev/?api=https://www.example.com/api.php/provide/vod',
        name: '空内容测试源',
        adult: true,
    }
};

// 合併到原始配置
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
    console.log('✅ 所有代理源已成功加入');
} else {
    console.error('❌ extendAPISites 方法不存在');
}
