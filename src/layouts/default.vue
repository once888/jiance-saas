<template>
  <div class="content">
    <div
      :class="headerClass(flag && !opacity)"
      :style="{ height: visibleMsg ? '110px' : '70px' }"
    >
      <v-expand-transition>
        <div class="top-msg" v-if="visibleMsg">
          <scroll-text>
            <span>限时开放企业版试用，支持企业自定义参数、权限管理、委托单自定义参数配置、出具报告等能力 </span>
            <a href="https://saasjcjt.zjbdgs.com/" target="_blank" style="color: #fff;"> 申请试用 👉</a>
          </scroll-text>
          <v-icon
            icon="mdi-close"
            color="black"
            @click="handleCloseMsg"
          />
        </div>
      </v-expand-transition>
      <div class="control">
        <div class="content-header-bg" :style="{ opacity, backgroundSize: `100% ${visibleMsg ? '1100px' : '700px'}` }"></div>
        <div class="content-header-left">
          <v-img :max-width="60" :max-height="40" :src="logo"></v-img>
          <span class="font-transition" :style="{ color: fontColor }">标点检测云</span>
        </div>
        <v-tabs
          class="header-tabs"
          align-tabs="center"
          v-model="tab"
          @update:modelValue="onChangeTab"
        >
          <v-tab
            v-for="(item, index) in tabs"
            :key="index"
            :value="item.value"
          >{{ item.title }}</v-tab>
        </v-tabs>
        <div class="content-header-right">
          <div class="phone-chip">
            <svg t="1699240448390" class="icon" viewBox="0 0 1288 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4851" width="32" height="32"><path d="M394.421677 42.396903a584.48929 584.48929 0 0 0-286.984258 150.577549 112.590452 112.590452 0 0 0-37.623742 88.130064c0.644129 21.008516 0 41.438968 0 62.447484 0 42.611613 29.976774 70.044903 77.163355 70.044903h130.097549c49.746581 0 79.723355-26.277161 79.723354-71.795613a136.770065 136.770065 0 0 1 25.500904-80.532645 228.368516 228.368516 0 0 1 123.094709-89.30271 485.788903 485.788903 0 0 1 171.553033-17.507096 336.780387 336.780387 0 0 1 133.92929 28.589419c74.636387 35.608774 122.467097 88.146581 123.09471 169.25729 0 33.858065 33.808516 61.869419 71.432258 61.86942h140.387096c42.727226 0 72.670968-27.43329 72.670968-66.526968 0-21.603097-0.627613-43.189677 0-64.792774a116.356129 116.356129 0 0 0-40.811355-93.382194 589.295484 589.295484 0 0 0-266.586838-142.980129 1200.722581 1200.722581 0 0 0-266.586839-26.855226 1233.589677 1233.589677 0 0 0-250.004645 22.759226z m249.393549 568.452129c-79.079226 0-143.492129 58.368-143.492129 131.319742 0 71.779097 64.412903 131.319742 142.864516 131.319742 80.350968 0 143.492129-58.946065 143.492129-132.492387 0.049548-71.201032-65.090065-130.147097-142.881032-130.147097z m501.925161 222.373162a277.371871 277.371871 0 0 0-25.517419-123.738839 1263.896774 1263.896774 0 0 0-169.653678-270.864516 67.930839 67.930839 0 0 0-56.749419-25.682581c-8.935226 0-17.870452-0.578065-26.789161 0-6.391742 0-8.258065-1.75071-8.258065-7.580903 0-23.353806-0.644129-47.285677 0-70.622968a42.826323 42.826323 0 0 0-23.601548-40.266322 93.283097 93.283097 0 0 0-75.891613-8.753549c-30.620903 8.753548-44.015484 25.682581-44.015484 54.272 0 21.008516-0.644129 42.611613 0 63.620129 0 7.002839-1.271742 9.909677-10.206968 9.909678a4247.568516 4247.568516 0 0 0-123.094709 0c-9.562839 0-10.851097-2.923355-10.851097-10.520775 0-22.164645-0.644129-44.345806 0-66.526967a46.245161 46.245161 0 0 0-29.332645-44.940387 94.72 94.72 0 0 0-71.432258-5.830194 51.051355 51.051355 0 0 0-42.727226 53.693935v44.494452c0 9.348129 4.459355 22.181161-1.915871 27.43329a61.258323 61.258323 0 0 1-29.976774 1.75071 71.845161 71.845161 0 0 0-61.225291 29.729032c-7.646968 10.504258-15.310452 20.430452-22.329806 30.93471a1624.675097 1624.675097 0 0 0-142.864516 235.784258 262.788129 262.788129 0 0 0-28.705033 131.319742c0 36.764903 0.644129 62.447484 0.644129 93.382194 0 42.595097 30.604387 70.028387 76.535742 70.028387H643.79871q213.338839 0 426.661161-0.578065c44.593548 0 75.264-28.077419 75.264-68.872258 0-33.874581 1.899355-68.31071 0-101.574193z m-503.857548 105.604129c-117.991226-0.594581-214.296774-89.880774-213.652645-197.268646 0.644129-109.716645 98.221419-197.268645 218.756129-196.69058 116.702968 0.594581 212.380903 90.475355 211.736774 197.863226-0.644129 109.171613-97.57729 196.707097-216.840258 196.096z" :fill="fontColor" p-id="4852"></path></svg>
            <p :style="{ color: fontColor }">
              <span class="font-transition">联系电话</span>
              <span>135 7554 8422</span>
            </p>
          </div>
          <v-btn
            color="grey-lighten-3"
            class="btn-use"
            rounded
            @click="handleTry"
          >立即试用</v-btn>
          <v-btn class="btn-menu" variant="plain" :color="fontColor" icon="mdi-menu" @click="handleMenu"></v-btn>
        </div>
      </div>
    </div>
    <v-expand-transition>
      <div v-if="visibleMsg" style="height: 40px;"></div>
    </v-expand-transition>
    <div style="height: 70px;"></div>
    <slot />
    <div class="content-footer">
      <div class="info">
        <div class="info-cloud">
          <v-card
            class="mx-auto"
            width="100%"
            height="100%"
            color="#111"
            title="标点云"
            :prepend-avatar="bdImg"
          >
            <v-card-text>
              <template v-slot:default>
                <p class="info-cloud-text">
                  我们团队引领全浙江行业信息化，服务200多家检测机构。<br />
                  专业软件具备SaaS云能力，简便部署，私有化选项确保 数据安全。<br />
                  选择我们，选择卓越的解决方案。<br />
                  您的信任是我们最大的动力。
                </p>
              </template>
            </v-card-text>
          </v-card>
        </div>
        <div class="info-divider">
          <div></div>
        </div>
        <div class="info-link">
          <v-card
            class="mx-auto"
            width="100%"
            height="100%"
            color="#111"
            title="友情链接"
          >
            <v-card-text v-for="(item, index) in outside" :key="index" style="padding-bottom: 0;">
              <template v-slot:default>
                <a :href="item.url" target="_blank">{{ item.label }}</a>
              </template>
            </v-card-text>
          </v-card>
        </div>
      </div>
      <div class="msg">
        <p style="font-size: 14px;">标点检测云Ⓒ版权公告© 2017-2023 浙江标点信息科技有限公司</p>
        <p class="msg-copyright">
          <v-img class="image" :max-width="16" :max-height="16" :src="footerIcon"></v-img>
          <a href="https://beian.miit.gov.cn/" target="_blank">浙ICP备14039844号-12</a>
          <span>|</span>
          <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33060202001443" target="_blank">浙公网安备33060202001443号</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import logo from '../assets/images/biaodian-256.png';
import footerIcon from '../assets/images/footer-icon.png';
import bdImg from '../assets/images/bd.png';
import { emitterHeader, TabCheck } from '~/utils/eventbus';
import { useOptionsStore } from '~/store';
import { OTHER_TAB_NAME } from '~/utils/const';

const route = useRoute();
const store = useOptionsStore();
const { y } = useWindowScroll();
const { width } = useWindowSize();
const tabs = [
  { value: 'product', title: '产品' },
  { value: 'price', title: '价格' },
  { value: 'deploy', title: '私有部署' },
  { value: 'solution', title: '解决方案' },
  // { value: 'doc', title: '帮助文档' }
];
const outside = [
  { label: '浙江省住房和城乡建设厅', url: 'https://jst.zj.gov.cn/' },
  { label: '赢筑网', url: 'https://www.zjyzw.net/'  },
  { label: '中华人民共和国人民政府国家市场监督管理总局令', url: 'https://www.gov.cn/zhengce/zhengceku/2021-05/06/content_5604930.htm' },
  { label: '检测机构百度贴吧', url: 'https://tieba.baidu.com/f?dyTabStr=MCwxLDMsMiw2LDgsNCw1LDcsOQ%3D%3D&fr=wwwt&ie=utf-8&kw=%E6%A3%80%E6%B5%8B%E6%9C%BA%E6%9E%84' },
];
const visibleMsg = ref(true);
const opacity = ref(1);
const fontColor = ref('#fff');
const tab = ref<null | TabCheck>(null);
const flag = ref(true);
const headerClass = computed(() => (val: boolean) => ['content-header', val && 'border-shadow']);

const setHeaderColor = (_fontColor: string, _opacity: number) => {
  fontColor.value = _fontColor;
  opacity.value = _opacity;
  const headerTabs: HTMLElement | null = document.querySelector('.header-tabs');
  if (headerTabs) {
    const vBtnContentElements: NodeListOf<HTMLElement> = headerTabs.querySelectorAll('.v-btn__content');
    vBtnContentElements.forEach((element: HTMLElement) => {
      element.style.color = _fontColor;
    });
  }
};
const setScrollColor = (val: number) => {
  if (OTHER_TAB_NAME.includes(tab.value as string) && OTHER_TAB_NAME.includes(route.name as string)) {
    fontColor.value = '#000';
    opacity.value = 0;
    setHeaderColor(fontColor.value, opacity.value);
  } else {
    let _opacity: number, _fontColor :string;
    if (val > 650) {
      _opacity = 0;
      _fontColor = '#000';
    } else {
      _opacity = (650 - val) / 650;
      _fontColor = '#fff';
    }
    setHeaderColor(_fontColor, _opacity);
  }
};
const onChangeTab = (val: TabCheck) => {
  emitterHeader.emit('click-tab', () => val);
};
const handleTry = () => {
  window.open('https://saasjcjt.zjbdgs.com/');
};
const handleMenu = () => {
  emitterHeader.emit('click-menu', () => [...tabs, { value: 'use', title: '立即试用' }]);
};
const handleCloseMsg = () => {
  visibleMsg.value = false;
  store.options.showTopMsg = false;
  flag.value = false;
  setTimeout(() => {
    flag.value = true;
  }, 300);
};

watch(() => y.value, setScrollColor);
watch(() => route.name, val => {
  if (OTHER_TAB_NAME.includes(val as TabCheck)) {
    tab.value = val as TabCheck;
    fontColor.value = '#000';
    opacity.value = 0;
    setHeaderColor(fontColor.value, opacity.value);
  } else {
    fontColor.value = '#fff';
    opacity.value = 1;
    setHeaderColor(fontColor.value, opacity.value);
  }
});

onMounted(() => {
  if (tab.value !== route.name) {
    tab.value = route.name as TabCheck;
    onChangeTab(tab.value);
  }
  if (OTHER_TAB_NAME.includes(route.name as TabCheck)) {
    tab.value = route.name as TabCheck;
    fontColor.value = '#000';
    opacity.value = 0;
    setHeaderColor(fontColor.value, opacity.value);
  } else {
    fontColor.value = '#fff';
    opacity.value = 1;
    setHeaderColor(fontColor.value, opacity.value);
  }
});
</script>

<style scoped lang="scss">
$headerFontColor: #fff;

.header-tabs {
  :deep(.v-btn__content) {
    color: $headerFontColor;
  }
}
:deep(.v-slide-group) {
  z-index: 2;
}
.font-transition {
  transition: color 0.5s;
}
.border-shadow {
  box-shadow: $shadow-bottom;
}
.content {
  &-header {
    box-sizing: border-box;
    background-color: #fff;
    position: fixed;
    width: 100%;
    z-index: 999;
    .top-msg {
      width: 100%;
      height: 40px;
      padding: 0 40px 0 0;
      background: linear-gradient(90.00deg, rgb(96, 57, 245),rgba(82, 48, 214) 103.32%);
      z-index: 999;
      color: #fff;
      font-size: 14px;
      font-weight: 400;
      text-align: center;
      line-height: 40px;
      :deep(.mdi-close) {
        position: absolute;
        right: 10px;
        top: 10px;
        color: #fff !important;
      }
    }
    .control {
      width: 100%;
      height: 70px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
    }
    &-bg {
      width: 100%;
      height: 100%;
      position: absolute;
      background: url(https://bd-res.oss-cn-hangzhou.aliyuncs.com/saas/workspace/images/jiance/background.png);
      background-repeat: no-repeat;
      z-index: 1;
    }
    &-left {
      margin-left: 50px;
      width: 160px;
      height: 40px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      cursor: pointer;
      z-index: 2;
      span {
        font-family: Bitter;
        font-size: 20px;
        font-weight: 800;
        line-height: 27px;
        letter-spacing: 0;
        text-align: center;
      }
    }
    &-right {
      margin-right: 40px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      position: relative;
      z-index: 2;
    }
  }
  &-footer {
    width: 100%;
    height: 336px;
    padding: 20px 20px 10px 20px;
    box-sizing: border-box;
    background-color: #111;
    display: flex;
    flex-direction: column;
    align-items: center;
    .info {
      width: 80%;
      height: 240px;
      padding-top: 10px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      &-cloud {
        width: 49%;
        height: 100%;
        &-text {
          font-size: 16px;
          line-height: 40px;
          font-weight: 400;
        }
      }
      &-divider {
        width: 2px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        div {
          width: 1px;
          height: 60%;
          background-color: #fff;
        }
      }
      &-link {
        width: 49%;
        height: 100%;
        a {
          font-size: 16px;
          color: #dadada;
        }
      }
    }
    .msg {
      flex: 1;
      color: #fff;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: column;
      text-align: center;
      &-copyright {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        a {
          color: #fff;
          text-decoration: none;
        }
        span {
          margin: 0 6px;
        }
        .image {
          width: 100%;
          margin-right: 10px;
        }
        font-size: 14px;
        @media screen and (max-width: $media-xs) {
          font-size: 11px;
        }
      }
    }
    @media screen and (max-width: $media-sm) {
      height: 700px;
      .info {
        width: 90%;
        height: 540px;
        flex-direction: column;
        &-cloud {
          width: 100%;
          height: 310px;
        }
        &-divider {
          width: 100%;
          height: 2px;
          margin-bottom: 10px;
          div {
            width: 90%;
            height: 1px;
          }
        }
        &-link {
          width: 100%;
          height: 210px;
        }
      }
      .msg {
        margin-top: 30px;
      }
    }
  }
}
@media screen and (max-width: $media-sm) {
  .content-header-left {
    margin-left: 10px;
  }
  .content-header-right {
    width: auto;
  }
  .v-tabs {
    display: none;
  }
  .phone-chip {
    display: none;
  }
  .btn-use {
    display: none;
  }
  .btn-menu {
    display: block;
  }
}
@media screen and (min-width: $media-sm) {
  .content-header-right {
    width: 200px;
  }
  .v-tabs {
    display: block;
  }
  .phone-chip {
    display: flex;
    font-size: 14px;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 0;
    left: -73px;
    p {
      margin-left: 10px;
      display: flex;
      flex-direction: column;
      color: $headerFontColor;
      :nth-child(2) {
        font-weight: bold;
      }
    }
  }
  .btn-use {
    display: block;
  }
  .btn-menu {
    display: none;
  }
}
@media screen and (max-width: $media-md-pro) {
  .phone-chip {
    left: -50px;
  }
  .content {
    &-header {
      &-right {
        margin-right: 10px;
      }
    }
  }
}
</style>
