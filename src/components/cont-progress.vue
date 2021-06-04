<template>
  <div>
    <div
      class="card rounded-4 overflow-hidden"
      v-for="(img, key) in 3"
      :key="key"
      :class="key > 0 ? 'mt-3' : ''"
    >
      <div class="row g-0">
        <div
          class="col-4 overflow-hidden card-photo"
          :style="{
            'background-image': `url(../assets/images/news0${key + 1}.jpg)`,
          }"
        ></div>
        <div class="col-8 p-3 d-flex flex-column justify-content-start">
          <h5 class="fs-6 m-0">高雄體驗會｜免費參加送帆布袋</h5>
          <small class="text-muted ff-bt2 mt-2">2021-6-20</small>
          <p class="text-secondary m-0 mt-3 fs-6">
            大家安安！謝謝每位贊助者的熱情支持，讓我們離夢想更進一步，我們將於下個月舉辦體驗會，歡迎各位踴躍參與！
          </p>
          <a href="#" class="stretched-link ff-bt2 text-link text-danger mt-2"
            >MORE</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
