<template>
  <div class="d-flex flex-column col-12 col-md-5 pt-3 py-md-0">
    <div class="fs-6 text-secondary ff-bt2">目標 $600,000</div>
    <div class="fs-2 ff-bt2" style="font-weight: 600">$280,047</div>
    <!-- 進度條 -->
    <div class="progress rounded-pill d-block">
      <div
        class="progress-bar bg-warning text-secondary ff-bt2"
        role="progressbar"
        style="width: 41%"
      >
        41%
      </div>
    </div>
    <!-- 募資進度 -->
    <div class="row g-0 mt-3">
      <div class="col-6">
        <div class="fs-6 text-secondary mb-3">贊助人數</div>
        <div class="fs-2 ff-bt2" style="font-weight: 600">
          1374
          <span class="fs-4">人</span>
        </div>
      </div>
      <div class="col-6">
        <div class="fs-6 text-secondary mb-3">募資倒數</div>
        <div class="fs-2 ff-bt2" style="font-weight: 600">
          27
          <span class="fs-4">天</span>
        </div>
      </div>
    </div>
    <!-- 獎章 icons -->
    <div class="row g-0 col-md-5 d-flex justify-content-between">
      <div
        class="ico-tooltip col-3 col-md-auto position-relative"
        v-for="(item, i) in tooltips"
        :key="i"
      >
        <span
          class="w-100 h-100 position-absolute d-none d-md-block"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          :data-bs-original-title="item"
          role="button"
        >
        </span>
        <div class="w-100 d-flex align-items-center flex-nowrap">
          <img
            class="col-ms-3"
            :src="`../assets/images/icon_good0${i + 1}.svg`"
            alt=""
          />
          <small class="col d-md-none px-1 text-nowrap text-secondary">{{
            item
          }}</small>
        </div>
      </div>
    </div>
    <!-- 官方資訊 -->
    <div
      class="row g-0 bg-white rounded border-3 border-start border-warning p-3 mt-3 text-secondary"
    >
      <p class="m-0">專案募資中！</p>
      <p class="m-0">
        在 <b>2021/06/14 23:59</b> 募資結束前，您都可以贊助我們！
      </p>
    </div>
    <!-- 按鈕 -->
    <div class="row g-0 mt-auto">
      <a
        role="button"
        @click.prevent="scrollToForm"
        class="btn btn-lg btn-warning rounded-pill my-2"
      >
        贊助專案
      </a>
      <div class="row g-0">
        <button
          class="col-7 btn btn-lg btn-outline-secondary rounded-pill border-2 d-flex align-items-center justify-content-center"
        >
          <i class="fas fa-heart me-2"></i>
          追蹤專案
        </button>
        <button
          class="col ms-2 btn btn-lg btn-outline-secondary rounded-pill border-2 d-flex align-items-center justify-content-center"
        >
          <i class="fas fa-share-alt me-2"></i>
          分享
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { Tooltip } from 'bootstrap'
import scroll from './scrollToForm'
export default {
  data () {
    return {
      tooltips: ['認證標章', '品質保證', '原生創意', '人氣王']
    }
  },
  methods: {
    scrollToForm () {
      scroll()
    }
  },
  mounted () {
    Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]')).forEach(
      (tooltipNode) => new Tooltip(tooltipNode)
    )
  }
}
</script>
