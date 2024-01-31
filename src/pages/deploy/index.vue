<template>
  <div class="content">
    <section class="content-a">
      <div class="content-a-left">
        <div>
          <p>检测SaaS<span>私有化部署</span></p>
          <p>快捷高效的私有化填单平台，值得信赖</p>
          <p>专属服务器、数据加密，更安全稳定, 独享云资源，速度更快。</p>
        </div>
      </div>
      <div class="content-a-right">
        <div class="block"></div>
        <v-sheet rounded :elevation="4" :height="420" :min-width="390" class="pa-6">
          <v-form @submit.prevent="handleSubmit">
            <v-text-field v-model="form.name" label="您的姓名" :rules="formRules.name" variant="outlined"></v-text-field>
            <v-text-field v-model="form.phone" label="手机号码" :rules="formRules.phone" variant="outlined"></v-text-field>
            <v-text-field v-model="form.company" label="企业名称" :rules="formRules.company" variant="outlined"></v-text-field>
            <v-text-field v-model="form.num" label="使用人数" :rules="formRules.num" variant="outlined"></v-text-field>
            <v-btn :loading="loadingBtn" type="submit" color="rgb(67, 110, 206)" block class="mt-2" size="large">获取报价方案</v-btn>
          </v-form>
        </v-sheet>
      </div>
    </section>
    <section class="content-b">
      <p>
        <span>为什么选择</span>
        <span>私有化部署？</span>
      </p>
      <div class="info-list">
        <div
          v-for="(item, index) in infoListB"
          :key="index"
        >
          <div class="info-list-item">
            <div>
              <v-img :max-width="100" :max-height="100" :src="item.icon"></v-img>
              <p>{{ item.title }}</p>
            </div>
          </div>
        </div>
    </div>
    </section>
    <section class="content-c">
      <div class="info">
        <p>详细了解检测SaaS私有化部署，出具报告更方便</p>
        <v-btn color="rgb(67, 110, 206)" width="200" rounded @click="handlePhone">预约讲解</v-btn>
      </div>
    </section>
    <section class="content-d">
      <p>
        <span>为什么选择</span>
        <span>私有化部署？</span>
      </p>
      <div class="info-list">
        <div
          v-for="(item, index) in infoListD"
          :key="index"
        >
          <div class="info-list-item">
            <v-img :max-width="79" :max-height="78" :src="item.icon" style="margin: 0 auto 20px auto;"></v-img>
            <p>{{ item.title }}</p>
            <p>{{ item.text }}</p>
            <div v-if="index < 2" class="screen-divider">
              <v-divider :thickness="2" vertical></v-divider>
            </div>
            <div v-if="index < 2" class="mobile-divider">
              <v-divider :thickness="2" inset length="100"></v-divider>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="content-e">
      <div class="content-e-group">
        <div class="row1">
          <div class="row1-item">
            <v-row no-gutters>
              <v-col cols="6" align-self="center">
                <div class="icon">
                  <div class="icon-side">
                    <v-img max-width="30" max-height="30" cover :src="eIcon1"></v-img>
                  </div>
                </div>
              </v-col>
              <v-col cols="6" align-self="center" style="height: 110px;">
                <div class="chip">
                  <div class="item">内网部署</div>
                  <div class="item">自建云部署</div>
                  <div class="item">私有云部署</div>
                </div>
              </v-col>
              <v-col cols="12" align-self="center" style="margin: 20px 0;">
                <p class="title">多种部署方式</p>
              </v-col>
              <v-col cols="12" align-self="center">
                <p class="text">支持单体和集群部署，提供完善的内网、自建云、私有云等多种部署方案</p>
              </v-col>
            </v-row>
          </div>
          <div class="row1-item">
            <v-row no-gutters>
              <v-col cols="12" align-self="center">
                <div class="icon" style="margin-top: 10px;">
                  <div class="icon-side">
                    <v-img max-width="30" max-height="30" cover :src="eIcon2"></v-img>
                  </div>
                </div>
              </v-col>
              <v-col cols="12" align-self="center" style="margin: 20px 0;">
                <p class="title">国产化需要</p>
              </v-col>
              <v-col cols="12" align-self="center">
                <p class="text">系统不但支持 windows，也支持国产系统，无论是公有云还是私有云，都能顺畅的运行</p>
              </v-col>
            </v-row>
          </div>
        </div>
        <div class="row2">
          <div class="row2-item">
            <v-row no-gutters>
              <v-col cols="6" align-self="center">
                <p class="title">数据可交付</p>
                <p class="text">我们提供离线的数据交付，如果你使用我们的企业版，即可享受离线数据全交付，无论是委托单、试验数据还是报告都可一键下载到本地</p>
              </v-col>
              <v-col cols="6" align-self="center">
                <div style="display: flex;justify-content: center;align-items: center;">
                  <v-img max-width="100" max-height="100" cover :src="eIcon3"></v-img>
                </div>
              </v-col>
            </v-row>
          </div>
          <div class="row2-item">
            <v-img style="width: 100%;" max-width="80" max-height="80" cover :src="eIcon4"></v-img>
            <p class="title">参数可定制</p>
            <p class="text">检测报告的参数非常多，导致很多软件无法有效的进行定制参数，我们的产品可进行参数的可定制。</p>
          </div>
        </div>
      </div>
    </section>
    <section class="content-f">
      <p>获取检测 SaaS解决方案</p>
      <p>请点击下方按钮咨询私有化部署详情，检测标点云团队将在1个工作日内响应您的需求</p>
      <v-btn color="rgb(67, 110, 206)" width="200" rounded size="x-large" @click="handlePhone">一键获取</v-btn>
    </section>
    <!-- 联系电话 -->
    <v-dialog v-model="visiblePhone" width="500">
      <v-card>
        <v-card-title>
          <div class="dialog-title">
            <span class="text-h5">联系电话</span>
            <v-icon icon="mdi-close" @click="visiblePhone = false"></v-icon>
          </div>
        </v-card-title>
        <div class="phone-input">
          <v-form ref="formRef">
            <v-text-field v-model="formPhone.phone" label="请输入手机号码" :rules="[rules.phone]" clearable variant="outlined"></v-text-field>
          </v-form>
        </div>
        <v-card-actions>
          <div class="dialog-bottom">
            <v-btn variant="tonal" @click="visiblePhone = false">关闭</v-btn>
            <v-btn
              class="text-none text-subtitle-1"
              color="blue"
              variant="flat"
              :loading="loadingBtn"
              @click="handlePhoneConfirm"
            >确认</v-btn>
          </div>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { useDeploySetup } from './hooks';
import eIcon1 from '../../assets/images/e-icon1.png';
import eIcon2 from '../../assets/images/e-icon2.png';
import eIcon3 from '../../assets/images/e-icon3.png';
import eIcon4 from '../../assets/images/e-icon4.png';

export default defineComponent({
  name: 'Deploy',
  setup() {
    return {
      eIcon1, eIcon2, eIcon3, eIcon4,
      ...useDeploySetup()
    };
  }
});
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  &-a {
    width: 100%;
    height: 550px;
    background-image: url(https://bd-res.oss-cn-hangzhou.aliyuncs.com/saas/workspace/images/jiance/deploy-bg.png);
    background-repeat: no-repeat;
    background-size: cover;
    -moz-background-size: cover;
    -webkit-background-size: cover;
    background-position: 50% 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #b2cbff;
    &-left {
      width: 50%;
      height: 100%;
      padding: 130px 0 130px 80px;
      display: flex;
      flex-direction: column;
      justify-content: right;
      align-items: flex-end;
      p:nth-child(1) {
        color: rgb(255, 255, 255);
        font-size: 70px;
        font-weight: 700;
        letter-spacing: 10px;
        margin-bottom: 20px;
        span {
          color: rgb(36, 138, 247);
        }
      }
      p:nth-child(2) {
        color: rgb(223, 215, 215);
        font-size: 20px;
        font-weight: 400;
        margin-bottom: 20px;
      }
      p:nth-child(3) {
        color: #fff;
        font-size: 20px;
        font-weight: 400;
      }
    }
    &-right {
      flex: 1;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .block {
        width: 20%;
        max-width: 200px;
      }
    }
    @media screen and (max-width: $media-sm) {
      height: 900px;
      flex-direction: column;
      padding: 0;
      &-left {
        width: 100%;
        text-align: center;
        padding: 100px 30px 20px 30px;
        p:nth-child(1) {
          font-size: 60px;
        }
      }
      &-right {
        padding-bottom: 50px;
        .block {
          display: none;
        }
      }
    }
  }
  &-b {
    width: 100%;
    height: 600px;
    padding: 100px 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    p:nth-child(1) {
      font-size: 56px;
      font-weight: 700;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span:nth-child(1) {
        color: rgb(0, 0, 0);
        margin-right: 10px;
      }
      span:nth-child(2) {
        margin-left: 10px;
        background: linear-gradient(177.80deg, rgb(36, 138, 247),rgba(149, 230, 233, 0));
        -webkit-background-clip:
            text;
        -webkit-text-fill-color:
            transparent;
        text-fill-color:
            transparent;
      }
    }
    .info-list {
      width: 800px;
      display: grid;
      grid-template-columns: repeat(4,25%);
      grid-template-rows: repeat(4,25%);
      grid-auto-flow: row dense;
      &-item {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-self: center;
        p {
          margin-top: 10px;
          color: rgb(36, 138, 247);
          font-size: 18px;
          font-weight: 500;
        }
      }
    }
    @media screen and (max-width: $media-md) {
      p:nth-child(1) {
        font-size: 60px;
      }
    }
    @media screen and (max-width: $media-sm) {
      p:nth-child(1) {
        font-size: 29px;
        padding: 0 13px;
        span:nth-child(2) {
          margin: 0;
        }
      }
      .info-list {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2,50%);
        grid-template-rows: repeat(2,50%);
        grid-auto-flow: row dense;
        &-item {
          margin-bottom: 20px;
        }
      }
    }
  }
  &-c {
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-self: center;
    .info {
      width: 1000px;
      height: 200px;
      max-width: 100%;
      background-image: url(../../assets/images/c-bg.png);
      background-repeat: no-repeat;
      background-size: cover;
      -moz-background-size: cover;
      -webkit-background-size: cover;
      background-position: 50% 50%;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      p {
        color: #fff;
        font-size: 20px;
        font-weight: 700;
      }
    }
    @media screen and (max-width: $media-sm) {
      .info {
        text-align: center;
        padding: 0 20px;
        box-sizing: border-box;
      }
    }
  }
  &-d {
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    p:nth-child(1) {
      font-size: 56px;
      font-weight: 700;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span:nth-child(1) {
        color: rgb(0, 0, 0);
        margin-right: 10px;
      }
      span:nth-child(2) {
        margin-left: 10px;
        background: linear-gradient(177.80deg, rgb(36, 138, 247),rgba(149, 230, 233, 0));
        -webkit-background-clip:
            text;
        -webkit-text-fill-color:
            transparent;
        text-fill-color:
            transparent;
      }
    }
    .info-list {
      width: 1200px;
      max-width: 100%;
      display: grid;
      grid-template-columns: repeat(3,33%);
      grid-template-rows: repeat(3,33%);
      grid-auto-flow: row dense;
      &-item {
        padding: 0 20px;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        color: #000;
        text-align: center;
        position: relative;;
        p:nth-child(2) {
          font-size: 26px;
          font-weight: 700;
          margin-bottom: 20px;
        }
        p:nth-child(3) {
          color: rgb(36, 138, 247);
          font-size: 16px;
        }
      }
    }
    @media screen and (max-width: $media-md) {
      .info-list {
        &-item {
          p:nth-child(2) {
            font-size: 22px;
          }
        }
      }
    }
    @media screen and (max-width: $media-sm) {
      height: 750px;
      justify-content: flex-start;
      p:nth-child(1) {
        font-size: 29px;
        padding: 0 13px;
        margin-bottom: 20px;
        span:nth-child(2) {
          margin: 0;
        }
      }
      .info-list {
        display: flex;
        flex-direction: column;
        &-item {
          .screen-divider {
            display: none;
          }
          .mobile-divider {
            display: block;
            width: 100%;
            height: 100%;
            :deep(.v-divider) {
              margin: 20px auto 0 auto;
            }
          }
          margin-top: 20px;
        }
      }
    }
    @media screen and (min-width: $media-sm) {
      padding-bottom: 100px;
      box-sizing: border-box;
      .info-list {
        &-item {
          .screen-divider {
            width: 100%;
            height: 100%;
            display: block;
            :deep(.v-divider) {
              position: absolute;
              right: 0;
              top: 50%;
              transform: translate(-50%);
            }
          }
          .mobile-divider {
            display: none;
          }
        }
      }
    }
  }
  &-e {
    width: 100%;
    height: 800px;
    padding-bottom: 100px;
    box-sizing: border-box;
    &-group {
      width: 1000px;
      height: 100%;
      max-width: 100%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 0 20px;
      box-sizing: border-box;
      @mixin row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 335px;
      }
      .title {
        font-size: 30px;
        font-weight: 700;
      }
      .text {
        width: 70%;
        color: rgb(107, 107, 107);
        font-size: 14px;
      }
      .row1 {
        @include row();
        .icon {
          width: 100px;
          height: 90px;
          border-radius: 50%;
          margin: 0 auto;
          box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.25);
          background: rgb(250, 250, 250);
          display: flex;
          justify-content: center;
          align-items: center;
          &-side {
            width: 70px;
            height: 60px;
            box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.25);
            background: rgb(229, 236, 250);
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
        &-item {
          height: 100%;
          border-radius: 30px;
          background: linear-gradient(180.00deg, rgba(100, 101, 235, 0.1) 0%,rgba(40, 207, 211, 0.1) 108%);
          padding: 45px;
          box-sizing: border-box;
        }
        &-item:nth-child(1) {
          width: 447px;
          max-width: 43%;
        }
        &-item:nth-child(2) {
          width: 516px;
          max-width: 69%;
        }
        .chip {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-end;
          .item {
            text-align: center;
            color: rgb(155, 155, 155);
            font-size: 14px;
            line-height: 30px;
            width: 140px;
            height: 30px;
            background-color: rgb(249, 249, 249);
          }
        }
      }
      .row2 {
        @include row();
        &-item {
          height: 100%;
          border-radius: 30px;
          background: linear-gradient(180.00deg, rgba(100, 101, 235, 0.1) 0%,rgba(40, 207, 211, 0.1) 108%);
        }
        &-item:nth-child(1) {
          width: 700px;
          max-width: 69%;
          padding: 45px;
          box-sizing: border-box;
          .title {
            margin: 40px 0;
          }
          .text {
            width: 100%;
          }
        }
        &-item:nth-child(2) {
          width: 270px;
          max-width: 33%;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          padding: 20px 0;
        }
      }
    }
    @media screen and (max-width: $media-sm) {
      height: 1400px;
      padding-bottom: 0;
      &-group {
        justify-content: flex-start;
        .row1 {
          box-sizing: border-box;
          &-item {
            padding: 30px 20px;
          }
        }
        .row1, .row2 {
          height: 707px;
          flex-direction: column;
          margin-bottom: 20px;
          &-item:nth-child(1) {
            width: 100%;
            max-width: 100%;
            margin-bottom: 20px;
          }
          &-item:nth-child(2) {
            width: 100%;
            max-width: 100%;
          }
        }
      }
    }
  }
  &-f {
    width: 100%;
    height: 500px;
    background-color: #000;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 100px;
    box-sizing: border-box;
    p:nth-child(1) {
      color: #fff;
      font-size: 46px;
      font-weight: 700;
      margin-bottom: 20px;
    }
    p:nth-child(2) {
      text-align: center;
      padding: 0 20px ;
      color: rgb(216, 216, 216);
      font-size: 28px;
      font-weight: 400;
      margin-bottom: 100px;
    }
    @media screen and (max-width: $media-sm) {
      padding: 100px 20px 0 20px;
      p:nth-child(1) {
        font-size: 30px;
      }
      p:nth-child(2) {
        font-size: 20px;
      }
    }
  }
}
.phone-input {
  padding: 10px;
  box-sizing: border-box;
}
</style>
