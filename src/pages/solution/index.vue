<template>
  <div class="content">
    <section class="content-top">
      <v-parallax src="https://bd-res.oss-cn-hangzhou.aliyuncs.com/saas/workspace/images/jiance/solution-bg.png">
        <div class="d-flex flex-column fill-height justify-center align-center text-white">
          <p class="font-weight-thin mb-4">高效检测 SAAS 解决方案</p>
          <p class="font-weight-thin mb-4">科技驱动的创新服务</p>
        </div>
      </v-parallax>
    </section>
    <div class="content-list">
      <div v-if="loading" class="content-list-item">
        <v-skeleton-loader type="article"></v-skeleton-loader>
        <v-skeleton-loader type="article"></v-skeleton-loader>
        <v-skeleton-loader type="article"></v-skeleton-loader>
      </div>
      <div
        v-else-if="items.length"
        class="content-list-item"
        v-for="(item, index) in items"
        :key="index"
      >
        <v-card width="100%" elevation="2">
          <template v-slot:title>
            <h1 class="title py-md-9">{{ item.name }}</h1>
          </template>
          <template v-slot:subtitle>
            <div class="subtitle">
              <v-icon icon="mdi-calendar-range"></v-icon>
              <span>{{ item.createTime }}</span>
            </div>
          </template>
          <template v-slot:text>
            <div class="detail" v-html="item.detail"></div>
          </template>
        </v-card>
      </div>
      <div v-else class="content-list-item">
        <p style="text-align: center;">暂无数据</p>
      </div>
    </div>
  </div>
</template>

<script>
import { useSolutionSetup } from './hooks';
import { VSkeletonLoader } from 'vuetify/labs/VSkeletonLoader';

export default defineComponent({
  name: 'Solution',
  components: { VSkeletonLoader },
  setup() {
    return {
      ...useSolutionSetup()
    };
  }
});
</script>

<style lang="scss" scoped>
:deep(.v-card-text) {
  padding-left: 30px;
  padding-right: 30px;
}
@media screen and (max-width: $media-sm) {
  :deep(.v-card-text) {
    padding-left: 20px;
    padding-right: 10px;
  }
}
.content {
  width: 100%;
  &-top {
    width: 100%;
    height: 500px;
    font-size: 60px;
    p:nth-child(1) {
      font-size: 60px;
    }
    p:nth-child(2) {
      font-size: 30px;
    }
    @media screen and (max-width: $media-md) {
      height: 300px;
    }
    @media screen and (max-width: $media-sm) {
      p:nth-child(1) {
        font-size: 40px;
      }
      p:nth-child(2) {
        font-size: 20px;
      }
      box-sizing: border-box;
      height: 157px;
      font-size: 30px;
    }
    @media screen and (max-width: $media-xs) {
      p:nth-child(1) {
        font-size: 30px;
      }
      p:nth-child(2) {
        font-size: 18px;
      }
    }
  }
  &-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 0;
    box-sizing: border-box;
    &-item {
      width: 90%;
      max-width: 1200px;
      min-height: 200px;
      margin-bottom: 100px;
      :deep(.v-card-title) {
        word-break: break-all !important;
        white-space: normal !important;
      }
      .title {
        width: 100%;
        font-size: 40px;
        font-weight: bold;
        min-height: 50px;
        line-height: 50px;
        text-align: center;
        margin-bottom: 10px;
      }
      .subtitle {
        text-align: center;
        span {
          margin-left: 10px;
        }
      }
      .detail {
        padding-bottom: 30px;
      }
    }
  }
}
</style>
