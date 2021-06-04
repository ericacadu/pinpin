<template>
  <div class="accordion" id="ContAccordion">
    <div class="accordion-item bg-white border rounded overflow-hidden"
      v-for="(item, key) in conts" :key="key"
      :class="[key == 0 ? 'shadow-sm' : '',
      key > 0 ? 'mt-3' : '']">
      <h2 class="accordion-header" :id="'heading' + (key + 1)">
        <button
          class="accordion-button text-dark shadow-none"
          type="button"
          data-bs-toggle="collapse"
          :data-bs-target="'#collapse' + (key + 1)"
          aria-expanded="true"
          :aria-controls="'heading' + (key + 1)"
          @click="expandCollapse(key)"
        >
          <span class="icon me-2 bg-warning ff-bt2 rounded-2">Q{{key + 1}}</span>
          {{ item.title }}
        </button>
      </h2>
      <div
        :id="'collapse' + (key + 1)"
        class="accordion-collapse collapse text-secondary lh-lg"
        :class=" key == 0 ? 'show' : ''"
        :aria-labelledby="'heading' + (key + 1)"
        data-bs-parent="#ContAccordion"
      >
        <div class="accordion-body ps-md-6">
          {{ item.cont }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      conts: [{
        title: '影片拍完之後可以編輯嗎？',
        cont: '可以進行簡易的編輯，內建 5 種濾鏡，影片秒數有3秒、5秒、10秒可以選擇，拍完的當下可以編輯要印出來的影片範圍哦！'
      }, {
        title: '有提供保固或維修服務嗎？',
        cont: '自收到產品後，產品保固一年。保固期限內非人為破壞可免費維修。'
      }, {
        title: '補充包底片要去哪裡購買呢？',
        cont: '斜角巷文具用品店全球門市皆可購買。'
      }, {
        title: '印出來的拍立得照片需要充電嗎？',
        cont: '照片不需要充電，只需呼喊咒語「霹靂卡・霹靂拉拉・波波力那・貝貝魯多」即可。'
      }, {
        title: '運送方式及付款方式有哪些呢？',
        cont: '可使用信用卡刷卡，或至古靈閣匯款至指定帳戶後，派遣貓頭鷹限時宅配。'
      }, {
        title: '退換貨方式及規則',
        cont: '不可退換貨，貓頭鷹會生氣。'
      }]
    }
  },
  methods: {
    expandCollapse (key) {
      const items = document.querySelectorAll('.accordion-item')
      // const parent = e.path[2]
      items.forEach(item => item.classList.remove('shadow-sm'))
      items[key].classList.add('shadow-sm')
    }
  }
}
</script>
