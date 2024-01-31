<template>
  <div class="content">
    <section class="content-a" :style="{ backgroundPosition: showTopMsg ? '0 -40px' : '0 -70px' }">
      <h1>cma报告出具更快捷</h1>
      <p>委托单/试验数据/报告/人员/设备 全管理系统</p>
      <div>
        <v-btn
          color="grey-lighten-3"
          class="btn-use"
          size="x-large"
          rounded
          @click="handleTest"
        >
          <template v-slot:default>
            <span style="color: rgb(104, 71, 232);font-weight: 700;">免费试用</span>
          </template>
        </v-btn>
        <v-btn
          color="#fff"
          rounded
          variant="outlined"
          size="x-large"
          @click="handleDemonstration"
        >
          <template v-slot:default>
            <span style="color: #fff;font-weight: 700;">预约演示</span>
          </template>
        </v-btn>
      </div>
      <p>预约可开通全部功能</p>
      <p class="content-a-screen">
        CMA是中国计量认证，对工程、产品出具公证数据报告。<br/>
        以前出CMA报告委托单、试验数据参数特别的复杂，现在使用标点检测云。<br />
        让参数配置变的更加简单，出报告更快捷，成员职责更清楚，而且过程超方便。
      </p>
      <p class="content-a-mobile">以前出报告委托单、试验数据参数特别的复杂，现在使用标点检测云。 让参数配置变的更加简单，出报告更快捷，成员职责更清楚，而且过程超方便。</p>
    </section>
    <section class="content-a2">
      <v-card color="#fff" theme="dark" x min-height="calc(100% - 30px)" variant="elevated">
        <div class="card-content">
          <div class="card-content-left">
            <v-card-title>
              <h2>cma检测报告更省成本</h2>
            </v-card-title>
            <v-card-subtitle>
              标点云如何帮你更方便的开具委托单,<br />
              搞定试验数据和报告的！
            </v-card-subtitle>
            <v-card-actions>
              <v-btn
                size="x-large"
                rounded
                variant="outlined"
                @click="handleTest"
              >
                <template v-slot:default>
                  <span style="font-weight: 700;">免费试用</span>
                </template>
              </v-btn>
            </v-card-actions>
          </div>
          <div class="card-content-right">
            <v-btn
              class="btn-use"
              size="x-large"
              height="120px"
              prepend-icon="mdi-play-circle-outline"
              @click="visibleInit = true"
            >
              <template v-slot:prepend>
                <v-icon color="#fff"></v-icon>
              </template>
              初始化参数
            </v-btn>
            <v-btn
              color="rgb(167, 132, 179)"
              class="btn-use"
              size="x-large"
              prepend-icon="mdi-play-circle-outline"
              height="120px"
              @click="visibleContract = true"
            >
              <template v-slot:prepend>
                <v-icon color="#fff"></v-icon>
              </template>
              创建合同
            </v-btn>
          </div>
        </div>
      </v-card>
    </section>
    <section class="content-b">
      <h2>出具cma质检报告系统的产品特色</h2>
      <div class="content-b-img">
        <v-sheet
          class="mx-auto"
          max-width="100%"
        >
          <v-slide-group
            v-model="model"
            center-active
            @update:modelValue="onChangeSlide"
          >
            <v-slide-group-item
              v-for="(item, index) in productBMap"
              :key="index"
              v-slot="{ isSelected, toggle }"
            >
              <div class="slide-item">
                <v-card
                  class="ma-4"
                  height="202"
                  width="300"
                  variant="outlined"
                  @click="toggle"
                  @mouseenter="onMECard(item, index)"
                  @mouseleave="onMLCard"
                >
                  <div class="d-flex fill-height align-center justify-center slide-item-ctn">
                    <v-img
                      class="slide-item-img"
                      max-width="90%"
                      max-height="90%"
                      cover
                      :src="item.img"
                    ></v-img>
                    <v-scale-transition>
                      <v-icon
                        v-if="imgZoomIndex === index"
                        color="blue-grey-darken-4"
                        size="48"
                        icon="mdi-magnify-expand"
                        class="slide-item-icon"
                        @click="handleImg(item.img)"
                      ></v-icon>
                    </v-scale-transition>
                  </div>
                </v-card>
                <span>{{ item.label }}</span>
              </div>
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>
      </div>
    </section>
    <section class="content-c">
      <v-img class="img1" :max-width="195" :max-height="195" :src="circle1"></v-img>
      <v-img class="img2" :max-width="141" :max-height="141" :src="circle2"></v-img>
      <v-img class="img3" :max-width="40" :max-height="40" :src="circle3"></v-img>
      <div class="left">
        <h2>{{ contentCTxt.title }}</h2>
        <p>{{ contentCTxt.txt }}</p>
      </div>
      <div class="right">
        <div class="carousel">
          <v-carousel
            :continuous="false"
            hide-delimiter-background
            delimiter-icon="mdi-square"
            height="100%"
            cycle
            show-arrows="hover"
            @update:modelValue="handleCarousel"
          >
            <v-carousel-item
              v-for="(slide, i) in productCMap"
              :key="i"
              :src="slide.img"
              cover
            >
            </v-carousel-item>
          </v-carousel>
        </div>
      </div>
      <p class="bottom-title">使用福利</p>
      <h2 class="bottom-txt">加入建工检测云你会得到什么</h2>
    </section>
    <section class="content-d">
      <p>
        让检测系统更好用，<br />
        更安全的服务，我们还退出了数据备份计划， <br />
        能下载属于您的所有报告。
      </p>
      <div class="group">
        <div
          v-for="(item, index) in productDMap"
          :key="index"
          class="group-item"
        >
          <div class="group-item-img">
            <v-img :max-width="87" :max-height="91" :src="item.icon"></v-img>
          </div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
          <div></div>
        </div>
      </div>
      <div class="phone">
        <p>如果您对此有兴趣，不妨尝试下，留下您的联系方式</p>
        <div class="phone-input">
          <v-text-field ref="phoneInputRef" v-model="phone" label="您的手机号码" clearable>
            <template v-slot:append-inner>
              <v-btn :loading="loadingBtn" color="black" @click="handleSubmit">提交</v-btn>
            </template>
          </v-text-field>
        </div>
      </div>
    </section>
    <section class="content-e">
      <div class="content-e-title">
        <p>
          高效工程检测与快速报告生成：<br />
          第三方检测中心的快速解决方案
        </p>
        <p>利用先进检测工具，提高效率，确保工程质量可靠</p>
      </div>
      <div class="content-e-param">
        <div class="item-title">
          <v-img :max-width="80" :max-height="80" :src="imgE2" />
          <h2 class="text-8xl">参数管理</h2>
        </div>
        <p class="item-remark">
          一直以来，检测机构的参数特别多，很多系统无法做到兼顾多
          种系统。导致参数配置管理特别无序，我们提高了更有效的参
          数服务，让你更有效的管理参数。
        </p>
        <div class="count" ref="countRef">
          <div
            class="count-item"
            v-for="(item, index) in paramCount"
            :key="index"
          >
            <count-to
              :startVal="item.start"
              :endVal="item.end"
              :duration="1000"
            />
            <span>+</span>
            <p>{{ item.label }}</p>
          </div>
        </div>
      </div>
      <div
        class="content-e-normal"
        v-for="(item, index) in productEMap"
        :key="index"
      >
        <div class="item-title">
          <v-img :max-width="80" :max-height="80" :src="item.icon" />
          <h2 class="text-8xl">{{ item.label }}</h2>
        </div>
        <p class="item-remark">{{ item.text }}</p>
        <v-img
          :max-width="1100"
          :max-height="400"
          :src="item.img"
          @mouseenter="imgEZoomIndex = index"
          @mouseleave="imgEZoomIndex = null"
        >
          <template v-slot:default>
            <v-fade-transition>
              <div class="img-musk" v-if="imgEZoomIndex === index">
                <v-icon
                  color="blue-grey-darken-4"
                  size="48"
                  icon="mdi-magnify-expand"
                  class="slide-item-icon"
                  @click="handleImg(item.img)"
                ></v-icon>
              </div>
            </v-fade-transition>
          </template>
        </v-img>
      </div>
    </section>
    <section class="content-f">
      <div class="content-f-plan">
        <div
          v-for="(item, index) in productFMap"
          :key="index"
          :class="['item', index === 2 ? 'danger' : 'primary']"
        >
          <v-img class="image" :max-width="78" :max-height="78" :src="item.icon"></v-img>
          <h2 class="text-8xl">{{ item.version }}</h2>
          <p :class="['label', index === 2 && 'text-red']">{{ item.label }}</p>
          <p v-if="index === 2" class="tip">按每个检测项目付费</p>
          <p class="price" :style="{ marginTop: index === 2 && '10px' }">
            <span v-if="typeof item.price === 'number'" style="font-size: 20px;">$ </span>
            <span>{{ item.price }}</span>
          </p>
          <p class="remark">{{ item.remark }}</p>
          <v-btn rounded size="large" color="blue-lighten-1" @click="handlePlan(item.version)">{{ item.btn }}</v-btn>
          <div class="list" :style="{ paddingBottom: index === 2 && '5px' }">
            <div
              v-for="(_item, _index) in item.list"
              :key="_index"
              :class="['list-item', (!index && _index === 3) && 'list-item-pad']"
            >
              <v-icon :class="['icon', !(!index && _index === 3) && 'icon-pad']" icon="mdi-check" />
              <span>{{ _item.text }}</span>
              <v-chip v-if="_item?.tip" style="margin-left: 6px;margin-bottom: 3px;">{{ _item.tip }}</v-chip>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 联系电话 -->
    <v-dialog v-model="visiblePhone" width="400">
      <v-card>
        <v-card-title>
          检测负责人
        </v-card-title>
        <v-card-text>
          朱富强：13575548422
        </v-card-text>
        <v-card-title>
          全国服务热线
        </v-card-title>
        <v-card-text>
          0575-88622455<br />
          0571-85160781<br />
          0575-88121672<br />
          0575-88037090
        </v-card-text>
        <v-card-actions>
          <v-btn color="blue" block @click="visiblePhone = false">关 闭</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- 初始化视频 -->
    <v-dialog v-model="visibleInit" width="1200">
      <v-card>
        <v-card-title>
          <div class="dialog-title">
            <span class="text-h5">初始化参数</span>
            <v-icon icon="mdi-close" @click="visibleInit = false"></v-icon>
          </div>
        </v-card-title>
        <div class="dialog-video">
          <video width="1180" :height="deviceVideoHeight[getCurrentDevice(width)]" controls>
            <source src="https://bd-res.oss-cn-hangzhou.aliyuncs.com/saas/workspace/saasassets/initProgress.mp4" type="video/mp4">
            您的浏览器不支持 video 标签。
          </video>
        </div>
        <v-card-actions>
          <div class="dialog-bottom">
            <v-btn variant="tonal" @click="visibleInit = false">关闭</v-btn>
          </div>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- 创建合同 -->
    <v-dialog v-model="visibleContract" width="1200">
      <v-card>
        <v-card-title>
          <div class="dialog-title">
            <span class="text-h5">创建合同</span>
            <v-icon icon="mdi-close" @click="visibleContract = false"></v-icon>
          </div>
        </v-card-title>
        <div class="dialog-video">
          <video width="1180" :height="deviceVideoHeight[getCurrentDevice(width)]" controls>
            <source src="https://bd-res.oss-cn-hangzhou.aliyuncs.com/saas/workspace/saasassets/contractCreate.mp4" type="video/mp4">
            您的浏览器不支持 video 标签。
          </video>
        </div>
        <v-card-actions>
          <div class="dialog-bottom">
            <v-btn variant="tonal" @click="visibleContract = false">关闭</v-btn>
          </div>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import slideImg1 from '../assets/images/product-b-1.png';
import slideImg2 from '../assets/images/product-b-2.png';
import slideImg3 from '../assets/images/product-b-3.png';
import slideImg4 from '../assets/images/product-b-4.png';
import slideImg5 from '../assets/images/product-b-5.png';
import slideImg6 from '../assets/images/product-b-6.png';
import slideImg7 from '../assets/images/product-b-7.png';
import slideImg8 from '../assets/images/product-b-8.png';
import slideImg9 from '../assets/images/product-b-9.png';
import slideImg10 from '../assets/images/product-b-10.png';
import slideImg11 from '../assets/images/product-b-11.png';
import slideImg12 from '../assets/images/product-b-12.png';
import slideImg13 from '../assets/images/product-b-13.png';
import slideImg14 from '../assets/images/product-b-14.png';
import slideImg15 from '../assets/images/product-b-15.png';
import cImg1 from '../assets/images/product-c-1.png';
import cImg2 from '../assets/images/product-c-2.png';
import cImg3 from '../assets/images/product-c-3.png';
import cImg4 from '../assets/images/product-c-4.png';
import cImg5 from '../assets/images/product-c-5.png';
import cImg6 from '../assets/images/product-c-6.png';
import cImg7 from '../assets/images/product-c-7.png';
import circle1 from '../assets/images/product-3.png';
import circle2 from '../assets/images/product-4.png';
import circle3 from '../assets/images/product-5.png';
import imgD1 from '../assets/images/product-d-1.png';
import imgD2 from '../assets/images/product-d-2.png';
import imgD3 from '../assets/images/product-d-3.png';
import imgD4 from '../assets/images/product-d-4.png';
import imgD5 from '../assets/images/product-d-5.png';
import imgD6 from '../assets/images/product-d-6.png';
import imgE2 from '../assets/images/product-e-2.png';
import imgE3 from '../assets/images/product-e-3.png';
import imgE4 from '../assets/images/product-e-4.png';
import imgE5 from '../assets/images/product-e-5.png';
import imgE6 from '../assets/images/product-e-6.png';
import imgE7 from '../assets/images/product-e-7.png';
import imgE8 from '../assets/images/product-e-8.png';
import imgE9 from '../assets/images/product-e-9.png';
import imgE10 from '../assets/images/product-e-10.png';
import imgF1 from '../assets/images/product-f-1.png';
import imgF2 from '../assets/images/product-f-2.png';
import imgF3 from '../assets/images/product-f-3.png';
import imgF4 from '../assets/images/product-f-4.png';
import { emitterHeader, TabCheck } from '~/utils/eventbus';
import { getCurrentScroll, getCurrentDevice } from '~/utils/tools';
import { useOptionsStore } from '~/store';

const productBMap = [
  { img: slideImg1, label: '可自定义的项目配置' },
  { img: slideImg2, label: '可自定义的编号配置' },
  { img: slideImg3, label: '设备管理并提供超期管理' },
  { img: slideImg4, label: '根据合同和项目分类快速选择' },
  { img: slideImg5, label: '方便的选择项目产品来新建委托单' },
  { img: slideImg6, label: '未受理即可查看预览委托单报告' },
  { img: slideImg7, label: '打印可设置、无需安装繁琐的插件' },
  { img: slideImg8, label: '修改申请记录可追溯' },
  { img: slideImg9, label: '委托单搜索方案可配置，方便的自定义条件' },
  { img: slideImg10, label: '支持分配到科室，科室长再分配' },
  { img: slideImg11, label: '试验数据可配置，模板可自定义' },
  { img: slideImg12, label: '试验报告可预览、可待查、可复核' },
  { img: slideImg13, label: '报告可下滑待查、复核、签发、分发' },
  { img: slideImg14, label: '报告打印可查询打印记录' },
  { img: slideImg15, label: '离线版的pdf 可下载到本地文件夹中' }
];
const productCMap = [
  { img: cImg1, title: '清晰明了的委托单录入界面', txt: '能清晰方便的委托单录入' },
  { img: cImg2, title: '多种合同类型的组合', txt: '检测合同、监督合同、临时合同自由搭配' },
  { img: cImg3, title: '自定义的帮助表', txt: '能够自定义帮助表内容' },
  { img: cImg4, title: '承诺日期自定义', txt: '灵活的承诺日期可配置、工作日可自定义' },
  { img: cImg5, title: '超承诺和到期预警', txt: '可自定义的超承诺提醒' },
  { img: cImg6, title: '快捷地在线数据录入', txt: '可自定义的内容表格' },
  { img: cImg7, title: '方便的下滑审核报告', txt: '滚动下滑的快捷审核，点错即可撤销' }
];
const productDMap = [
  {
    icon: imgD1,
    title: '开具委托单更快捷',
    text: '我们会从专业的角度帮助你最短时间开具委托单。'
  },
  {
    icon: imgD2,
    title: '试验数据录入更便捷',
    text: '试验数据是个变量特别多的录入，我们能从最低成本帮助你便捷的录入试验数据。'
  },
  {
    icon: imgD3,
    title: '出报告更简单',
    text: '传统的出具报告需要插件，如今只要使用主流浏览器既能出报告，方便快捷。'
  },
  {
    icon: imgD4,
    title: '参数使用模块化',
    text: '按照最新国家规定的参数配置，让你不需要配置即可使用，当然您也可以自定义参数。'
  },
  {
    icon: imgD5,
    title: '参数自定义',
    text: '每个检测机构都有自己配置字段，自定义服务更智能、更快捷。'
  },
  {
    icon: imgD6,
    title: '数据可交付',
    text: '提供离线数据下载，即使未来不订阅我们的服务，数据依然归还您，再无后顾之忧。'
  }
];
const productEMap = [
  { label: '委托单管理', icon: imgE3, img: imgE4, text: '更加科学的委托单录入布局，帮助用户更好的录入委托单。' },
  { label: '试验数据管理', icon: imgE5, img: imgE6, text: '试验数据是为了做试验而录入的数据管理，这个模块我们独有的模板定义系统，帮助第三方检测中心完成自定义的试验数据模板的定制。' },
  { label: '报告管理', icon: imgE7, img: imgE8, text: '生成的最终报告需要有效的管理，方便快捷的审核、签发、分发、归档，有效的帮助建设工程质量检测企业更好的管理报告。' },
  { label: '财务管理', icon: imgE9, img: imgE10, text: '每份委托单都需要进行更智能的计算，让费用变的准确无误，我们独有的 AI 后台计算，帮助识别异常费用。' },
];

const productFMap = [
  {
    version: '基础版',
    label: '提供小团队的使用',
    price: 0,
    remark: '限时免费',
    btn: '免费试用',
    icon: imgF1,
    list: [
      { text: '提供可配置的项目、编号' },
      { text: '提供委托单录入' },
      { text: '提供试验数据录入' },
      { text: '方便的报告管理', tip: '限制打印' }
    ]
  },
  {
    version: '企业版',
    label: '企业数字化首选',
    price: 1999,
    remark: '每年年费 / 20人',
    btn: '立即注册',
    icon: imgF2,
    list: [
      { text: '提供所有功能使用' },
      { text: '提供无限制的打印报告' },
      { text: '更自由的报告打印功能' },
      { text: '离线客户端下载全部报告' }
    ]
  },
  {
    version: '旗舰版',
    label: '全功能版本',
    price: 300,
    remark: '按照1 个检测项目/1年/$300',
    btn: '立即使用',
    icon: imgF3,
    list: [
      { text: '可定制外部检测人员账号' },
      { text: '提供所有功能使用' },
      { text: '提供无限制的打印报告' },
      { text: '更自由的报告打印功能' },
      { text: '离线的客户端下载全部报告' }
    ]
  },
  {
    version: '私有部署版',
    label: '提供私有部署',
    price: '咨询客服',
    remark: '提供高效定制需求',
    btn: '联系客服',
    icon: imgF4,
    list: [
      { text: '提供所有功能使用' },
      { text: '提供系统部署解决方案' },
      { text: '专业团队进行实施' },
      { text: '全流程定制化需求' }
    ]
  }
];
const store = useOptionsStore();
const { width } = useWindowSize();
const { loadingBtn, setLoadingBtn } = useLoading(false);
const messageRef = computed(() => store.options.messageRef);
const deviceVideoHeight = {
  mobile: 190,
  pad: 380,
  screen: 500
};
const visiblePhone = ref(false);
const visibleInit = ref(false);
const visibleContract = ref(false);
const model = ref(null);
const imgZoomIndex = ref<null | number>(null);
const imgEZoomIndex = ref<null | number>(null);
const phone = ref<null | number>(null);
const countRef = ref();
const phoneInputRef = ref();
const contentCTxt = reactive({
  title: '委托单录入更直接',
  txt: '能清晰方便的委托单录入'
});
const paramCount = ref([
  { label: '常用资质', start: 0, end: 0 },
  { label: '常用检测项目', start: 0, end: 0 },
  { label: '常用产品', start: 0, end: 0 }
]);
const showTopMsg = computed(() => store.options.showTopMsg);
const targetIsVisible = useElementVisibility(countRef);

const onChangeSlide = (val: any) => {
  console.log('val', val);
};
const onMECard = (item: typeof productBMap[0], index: number) => {
  imgZoomIndex.value = index;
};
const onMLCard = () => {
  imgZoomIndex.value = null;
};
const handleSubmit = () => {
  if (!phone.value) {
    messageRef.value.showMsg({ type: 'error', message: '手机号码不能为空' });
    return;
  }
  if (!/^1(3|4|5|7|8|9)\d{9}$/.test(phone.value + '')) {
    messageRef.value.showMsg({ type: 'error', message: '手机号码格式不正确' });
    return;
  }
  setLoadingBtn(true);
  useRequest({
    url: '/saasApi/api/testing/mobile/addReadyMobile',
    method: 'post',
    body: {
      mobile: phone.value
    },
    server: false
  }).then(() => {
    messageRef.value.showMsg({ type: 'success', message: '已提交' });
    phone.value = null;
  }).finally(() => {
    setLoadingBtn(false);
  });
};
const handleImg = (img: typeof slideImg1) => {
  usePreview(img);
};
const handleTest = () => {
  window.open('https://saasjcjt.zjbdgs.com/');
};
const handleDemonstration = () => {
  window.scrollTo({
    top: getCurrentScroll(width.value, 'contact'),
    behavior: 'smooth'
  });
  setTimeout(() => {
    phoneInputRef.value.focus();
  }, 1000);
};
const handleCarousel = (index: number) => {
  contentCTxt.title = productCMap[index].title;
  contentCTxt.txt = productCMap[index].txt;
};
const handlePlan = (val: string) => {
  if (val === '基础版' || val === '企业版' || val === '旗舰版') {
    handleTest();
  } else {
    visiblePhone.value = true;
  }
};


watch(() => targetIsVisible.value, val => {
  if (val && !paramCount.value[0].end) {
    const values = [10, 250, 300];
    paramCount.value.forEach((item, index) => {
      item.end = values[index];
    });
  }
});
</script>

<style scoped lang="scss">
:deep(.v-btn--variant-outlined) {
  border-width: 2px;
}

$grey: rgb(102, 101, 101);

@mixin greyFont() {
  color: $grey;
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0;
}

.content {
  box-sizing: border-box;
  &-a {
    width: 100%;
    height: 730px;
    background: url(https://bd-res.oss-cn-hangzhou.aliyuncs.com/saas/workspace/images/jiance/background.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    p:nth-child(1) {
      margin: 80px 0 30px 0;
      color: #fff;
      font-size: 60px;
      font-weight: 700;
      @media screen and (max-width: $media-sm) {
        font-size: 40px;
      }
    }
    p:nth-child(2) {
      margin-bottom: 40px;
      color: #fff;
      font-size: 20px;
      font-weight: 400;
      @media screen and (max-width: $media-sm) {
        font-size: 16px;
      }
    }
    div:nth-child(3) {
      margin-bottom: 30px;
      width: 350px;
      height: 100px;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    p:nth-child(4) {
      margin-bottom: 30px;
      color: rgb(249, 249, 249);
      font-size: 18px;
      font-weight: 400;
    }
    .content-a-screen {
      width: 640px;
      color: rgb(249, 249, 249);
      font-size: 18px;
      font-weight: 400;
    }
    .content-a-mobile {
      color: rgb(249, 249, 249);
      width: 90%;
      font-size: 14px;
      text-align: center;
      font-weight: 400;
    }
    h1{
      font-size: 44px;
      font-weight: 800;
      margin-top: 20px;
      margin-bottom: 20px;
    }
    @media screen and (max-width: $media-sm) {
      .content-a-screen {
        display: none;
      }
    }
    @media screen and (min-width: $media-sm) {
      .content-a-mobile {
        display: none;
      }
    }
  }
  &-a2 {
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    .card-content {
      width: 100%;
      height: 455px;
      padding: 80px 40px;
      box-sizing: border-box;
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      &-left {
        box-sizing: border-box;
        margin-right: 40px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .v-card-subtitle {
          font-size: 20px;
          height: 70px;
          line-height: 39px;
        }
      }
      &-right {
        width: 300px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }
    @media screen and (max-width: $media-sm) {
      height: 600px;
      display: block;
      .card-content {
        flex-direction: column;
        padding: 10px 20px;
        .text-h3 {
          font-size: 20px !important;
        }
        .v-card-actions {
          margin: 20px 0;
        }
        .v-card-subtitle {
          font-size: 16px;
        }
        &-right {
          width: 100%;
          button:nth-child(1) {
            margin-bottom: 20px;
          }
        }
      }
    }
  }
  &-b {
    width: 100%;
    height: 500px;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    p:nth-child(1) {
      font-size: 26px;
      font-weight: 700;
      line-height: 86px;
      letter-spacing: 0;
      margin: 0 auto;
      width: 104px;
    }
    &-img {
      flex: 1;
      .slide-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        &-img {
          position: absolute;
          width: 100%;
          height: 100%;
        }
        &-icon {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          z-index: 999;
        }
      }
    }
    :deep(.v-card--variant-outlined) {
      border: 2px solid #adadad;
    }
  }
  &-c {
    width: 100%;
    height: 1000px;
    background: linear-gradient(to bottom, #90CAF9, #fff);
    position: relative;
    display: flex;
    .img1 {
      position: absolute;
      top: 43px;
      right: 41px;
      width: 100%;
      display: none;
    }
    .img2 {
      position: absolute;
      top: 570px;
      left: 123px;
      width: 100%;
    }
    .img3 {
      position: absolute;
      top: 681px;
      left: 128px;
      width: 100%;
    }
    .bottom-title {
      position: absolute;
      bottom: 93px;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #64B5F6;
      font-size: 20px;
      font-weight: 400;
      line-height: 30px;
    }
    .bottom-txt {
      position: absolute;
      bottom: -25px;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 46px;
      font-weight: 700;
      width: 100%;
      text-align: center;
    }
    .left {
      width: 40%;
      padding: 150px 80px 0 80px;
      box-sizing: border-box;
      text-align: right;
      h1 {
        color: rgb(71, 71, 71);
        font-size: 50px;
        margin-bottom: 20px;
      }
      p {
        @include greyFont();
      }
    }
    .right {
      flex: 1;
      display: flex;
      padding-top: 100px;
      padding-left: 100px;
      .carousel {
        border: 10px solid #fff;
        background-color: #fff;
        border-radius: 5px;
        width: 99%;
        max-width: 1000px;
        height: 400px;
        @media screen and (min-width: $media-md) {
          height: 500px;
        }
        @media screen and (max-width: $media-sm) {
          height: 300px;
        }
      }
    }
    @media screen and (max-width: $media-md-pro) {
      .left {
        padding-left: 10px;
      }
      .right {
        padding-left: 0;
        padding-right: 10px;
      }
    }
    @media screen and (max-width: $media-sm) {
      flex-direction: column;
      height: 900px;
      .left {
        padding: 100px 0 0 0;
        text-align: center;
        width: 100%;
        h1 {
          font-size: 40px;
        }
      }
      .right {
        padding: 60px 0 0 0;
        .carousel {
          margin: 0 auto;
          width: 98%;
        }
      }
      .bottom-txt {
        font-size: 30px;
      }
    }
  }
  &-d {
    width: 100%;
    height: 1100px;
    text-align: center;
    position: relative;
    &:nth-child(1) {
      font-size: 26px;
    }
    @media screen and (max-width: $media-md) {
      height: 1300px;
    }
    @media screen and (max-width: $media-sm) {
      height: 2200px;
    }
    .group {
      width: 60%;
      height: 700px;
      margin: 30px auto 0 auto;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(2, 1fr);
      @media screen and (max-width: $media-sm) {
        display: flex;
        flex-direction: column;
      }
      @media screen and (max-width: $media-md) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, 1fr);
      }
      @media screen and (min-width: $media-md) {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
      }
      &-item {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        &-img {
          width: 140px;
          height: 140px;
          background-color: #fff;
          border-radius: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 12px;
        }
        p {
          margin-top: 12px;
          width: 200px;
          display: grid;
          place-items: center;
        }
        @media screen and (max-width: $media-md) {
          margin-bottom: 20px;
        }
      }
    }
    .phone {
      width: 100%;
      height: 200px;
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 0 10px;
      box-sizing: border-box;
      p {
        @include greyFont();
        margin-bottom: 12px;
      }
      &-input {
        margin: 0 auto;
        max-width: 500px;
        width: 100%;
      }
    }
  }
  .text-8xl{
    font-size: 48px;
    margin-left: 20px;
  }
  &-e {
    width: 100%;
    height: 4000px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @mixin item() {
      width: 90%;
      max-width: 1000px;
    }
    .item-title {
      width: 100%;
      display: flex;
      margin-bottom: 30px;
      h1 {
        font-size: 48px;
        margin-left: 30px;
      }
    }
    .item-remark {
      color: $grey;
      font-weight: 300;
      font-size: 30px;
      margin-bottom: 50px;
    }
    &-title {
      @include item();
      height: 500px;
      background: url(../../src/assets/images/product-e-1.png);
      background-repeat: no-repeat;
      background-position: 50% 50%;
      background-size: 20% 80%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      p:nth-child(1) {
        font-size: 50px;
        font-weight: bold;
        margin-bottom: 20px;
      }
      p:nth-child(2) {
        color: #7A7A7A;
        font-size: 30px;
        font-weight: 400;
      }
    }
    &-param {
      @include item();
      height: 600px;
      .count {
        width: 100%;
        height: 300px;
        padding-bottom: 50px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        &-item {
          width: 33%;
          height: 100%;
          padding: 0 10px;
          box-sizing: border-box;
          span:nth-child(1) {
            font-size: 100px;
          }
          span:nth-child(2) {
            font-size: 26px;
          }
          p {
            color: #000;
            font-size: 26px;
          }
        }
      }
    }
    &-normal {
      @include item();
      height: 745px;
    }
    @media screen and (max-width: $media-md) {
      &-title {
        p:nth-child(1) {
          font-size: 40px;
        }
        p:nth-child(2) {
          font-size: 26px;
        }
      }
      &-param {
        .count {
          &-item {
            span:nth-child(1) {
              font-size: 80px;
            }
          }
        }
      }
    }
    @media screen and (max-width: $media-xs) {
      height: 2850px;
      .item-title {
        h1 {
          font-size: 30px;
          line-height: 70px;
          margin-left: 30px;
        }
      }
      .item-remark {
        color: $grey;
        font-weight: 300;
        font-size: 20px;
        margin-bottom: 50px;
      }
      &-title {
        height: 300px;
        p:nth-child(1) {
          font-size: 24px;
        }
        p:nth-child(2) {
          font-size: 18px;
        }
      }
      &-param {
        height: 500px;
        .count {
          &-item {
            span:nth-child(1) {
              font-size: 50px;
            }
            span:nth-child(2) {
              font-size: 20px;
            }
            p {
              color: #000;
              font-size: 16px;
            }
          }
        }
      }
      &-normal {
        height: 500px;
      }
    }
  }
  &-f {
    width: 100%;
    height: 1000px;
    background: linear-gradient(to bottom, #64B5F6, #fff);
    display: flex;
    @media screen and (max-width: $media-sm) {
      height: 3000px;
    }
    @media screen and (max-width: $media-md) {
      height: 3000px;
    }
    &-plan {
      width: 1400px;
      max-width: 100%;
      margin: 0 auto;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .primary {
        &:hover {
          outline: 5px solid #42A5F5;
          outline-offset: -5px;
        }
      }
      .danger {
        &:hover {
          outline: 5px solid red;
          outline-offset: -5px;
        }
      }
      .item {
        width: 320px;
        height: 700px;
        background-color: #fff;
        border-radius: 30px;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 65px;
        box-sizing: border-box;
        transition: all .1s linear;
        .image {
          position: absolute;
          top: 29px;
          left: 70px;
          width: 100%;
          z-index: 0;
        }
        h1 {
          z-index: 9;
        }
        .label {
          margin-top: 12px;
          @include greyFont();
        }
        .tip {
          font-size: 12px;
          color: #BEBCBC;
        }
        .price {
          margin-top: 30px;
          color: rgb(71, 71, 71);
          font-size: 50px;
        }
        .remark {
          @include greyFont();
          margin: 20px 0;
          font-size: 18px;
        }
        .text-red {
          color: red;
          font-weight: 600;
        }
        .list {
          margin-top: 20px;
          width: 100%;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          padding-bottom: 40px;
          box-sizing: border-box;
          &-item {
            width: 90%;
            height: 50px;
            border-radius: 40px;
            border: 1px solid #64B5F6;
            line-height: 50px;
            padding-left: 50px;
            box-sizing: border-box;
            position: relative;
            .icon {
              position: absolute;
              top: 12px;
              left: 14px;
            }
          }
        }
      }
      @media screen and (max-width: $media-md) {
        flex-direction: column;
        .item {
          width: 400px;
        }
      }
      @media screen and (max-width: $media-sm) {
        flex-direction: column;
        .item {
          width: 340px;
        }
      }
    }
  }
}
.dialog-video {
  display: flex;
  justify-content: center;
  align-items: center;
}
.img-musk {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  cursor: pointer;
  border-radius: 26px;
}

@media screen and (max-width: $media-md) {
  .content-a-img {
    display: none;
  }
}
@media screen and (max-width: $media-sm) {
  .phone-chip {
    width: 150px;
    display: flex;
    margin-top: 10px;
    margin-left: 10px;
    font-size: 14px;
    justify-content: space-between;
    align-items: center;
    p {
      margin-left: 10px;
      display: flex;
      flex-direction: column;
      :nth-child(2) {
        font-weight: bold;
        color: red;
      }
    }
  }
}
@media screen and (min-width: $media-sm) {
  .phone-chip {
    display: none;
  }
}
</style>
