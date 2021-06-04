<template>
  <div class="position-sticky" style="top: 82px;">
    <div class="card rounded-3 overlow-hidde mb-4 p-3">
      <div class="card-header bg-white border-0 p-0 d-flex flex-row align-items-center">
        <p class="avatar border border-3 border-warning m-0">
          <img src="../../public/assets/images/store_img.jpg" alt="">
        </p>
        <div class="text-dark ps-3">
          <p class="fs-5 fw-bold m-0">缺錢事務所</p>
          <span>已發起<b>1</b>個專案</span>
        </div>
      </div>
      <p class="mt-3">
        需要點錢錢做些酷酷的東西，拜託各位乾爹乾媽囉！
      </p>
      <div class="d-flex justify-content-start align-items-center">
        <a href="#" class="medin-icons"
          @click.prevent>
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="#" class="medin-icons ms-2"
          @click.prevent>
          <i class="fab fa-youtube"></i>
        </a>
        <a href="#" class="btn btn-sm rounded-pill btn-outline-secondary ms-auto"
          @click.prevent>
          <i class="far fa-comment-dots"></i>
          聯絡我們
        </a>
      </div>
    </div>
    <p class="bg-light rounded-3 border-start border-end border-4 border-warning p-2 m-0 overflow-hidden text-center fs-5 fw-bold"
    style="letter-spacing: 1px;">
      選擇一個方案來支持
    </p>
    <div class="card-plan card rounded-5 overlow-hidden mt-3"
    v-for="(item, key) in projects" :key="key">
      <img src="../../public/assets/images/plan_img.jpg" alt="" class="card-img-top">
      <div class="card-body">
        <p class="text-muted border-bottom d-flex justify-content-between pb-2">
          <small>限時優惠</small>
          <small>2 days 20:05:20</small>
        </p>
        <h4 class="fs-5">買一送一，只有兩百組別錯過</h4>
        <p class="ff-bt2 fs-4 fw-bold m-0">NT$ 1600</p>
        <p class="ff-bt2 fs-7 tags d-flex justify-content-start">
          <small class="rounded-3">已被贊助88次</small>
          <small class="rounded-3 bg-secondary text-light ms-2">限量<b class="text-warning"> 200 </b>個</small>
        </p>
        <p class="text-secondary">
          受就相法大夠局來畫師我只這然以放灣得的後人心年我物我年，或人有動與次出女親構算帶年行著所間女。
        </p>
        <button type="button" class="btn btn-warning rounded-pill w-100 py-2"
        @click="scrollToForm(key)">贊助此專案</button>
      </div>
    </div>
  </div>
</template>

<script>
import scroll from './scrollToForm'
export default {
  props: ['projects'],
  data () {
    return {
    }
  },
  methods: {
    scrollToForm (key) {
      scroll()
      this.$emit('selectPlane', key)
    }
  }
}
</script>
