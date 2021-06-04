<template>
  <header class="bg-light border-bottom">
    <div class="container px-3 pt-3 pb-5 pt-md-5">
      <!-- 標題 -->
      <div class="row g-0 mb-3">
        <div class="col-12">
          <span class="badge bg-secondary px-3 py-1 mb-2">魔法科技</span>
          <h1 class="d-flex flex-column flex-md-row fs-2 fw-bold">
            <span>拍出會動的照片｜</span>
            <span>LivePhotos 魔法拍立得</span>
          </h1>
        </div>
      </div>
      <!-- 募資內容 -->
      <div class="row g-0">
        <div class="col-12 col-md-7 pe-md-4">
          <p class="overflow-hidden radius m-0">
            <img
              class="img-fluid"
              src="../../public/assets/images/produt_image.jpg"
              alt="produt image"
            />
          </p>
        </div>
        <ProductInfo />
      </div>
    </div>
  </header>
</template>

<script>
import ProductInfo from './info'
export default {
  components: {
    ProductInfo
  }
}
</script>
