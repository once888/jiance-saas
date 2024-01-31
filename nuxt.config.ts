import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

export default defineNuxtConfig({
  srcDir: 'src/',
  build: {
    transpile: ['vuetify', '@hapi', '@sideway']
  },
  css: ['~/assets/styles/common.scss'],
  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    }
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/default.scss";'
        }
      }
    },
    vue: {
      template: {
        transformAssetUrls,
      }
    }
  },
  app: {
    head: {
      title: '混凝土检测报告 | 专业混凝土质量检测服务 - 快速出具检测报告',
      meta: [
        { name: 'keywords', content: '混凝土检测报告, 混凝土配合比检测报告, 混凝土强度检测报告, 混凝土试块检测报告, 混凝土防冻剂检测报告, 混凝土抗压强度检测报告, 混凝土抗渗检测报告, 混凝土回弹检测报告' },
        { name: 'description', content: '获取可靠的混凝土检测报告,包括混凝土配合比、强度、试块、防冻剂、抗压强度、抗渗、回弹法等检测结果。欢迎咨询我们的混凝土检测服务,为您的工程质量保驾护航。' },
        { name: 'baidu-site-verification', content: 'codeva-QT6iPHKkHx' },
        { name: '360-site-verification', content: '4713af4b464865fe1c0146c25fee34fd' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }
      ],
      script: [
        {
          innerHTML: `
          var _hmt = _hmt || [];
          (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?5dbeda72394b0aad4749e9beb795bcb6";
            var s = document.getElementsByTagName("script")[0]; 
            s.parentNode.insertBefore(hm, s);
          })();
          `
        }
      ]
    }
  },
  nitro: {
    devProxy: {
      '/saasApi': {
        target: 'https://saasjcjt.zjbdgs.com',
        changeOrigin: true,
        prependPath: true,
      }
    },
    // 服务端请求转发
    routeRules: {
      '/saasApi/**': {
        proxy: 'https://saasjcjt.zjbdgs.com/**'
      }
    }
  },
  plugins: [
    {
      src: '~/plugins/wang-editor',
      mode: 'client'
    }
  ],
  imports: {
    dirs: [
      // 扫描顶级模块
      'composables',
      // ... 或扫描带有特定名称和文件扩展名的一级嵌套模块
      'composables/*/index.{ts,js,mjs,mts}',
      // ... 或扫描给定目录中的所有模块
      'composables/**'
    ]
  }
});
