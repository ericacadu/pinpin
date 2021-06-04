<template>
  <nav>
    <div class="container px-md-3">
      <ul class="nav nav-pills d-flex justify-content-between justify-content-md-start" role="tablist" id="nav-pills">
        <li class="nav-item col-3 col-md-auto">
          <button
            class="nav-link position-relative active"
            id="nav-intro-tab"
            data-bs-toggle="pill"
            data-bs-target="#nav-intro"
            type="button"
            role="tab"
            @click.prevent="scrollTop"
          >
            <span>專案介紹</span>
          </button>
        </li>
        <li class="nav-item col-3 col-md-auto">
          <button
            class="nav-link position-relative"
            id="nav-qa-tab"
            data-bs-toggle="pill"
            data-bs-target="#nav-qa"
            type="button"
            role="tab"
            @click.prevent="scrollTop"
          >
            <span>常見問題</span>
          </button>
        </li>
        <li class="nav-item col-3 col-md-auto">
          <button
            class="nav-link position-relative"
            id="nav-progress-tab"
            data-bs-toggle="pill"
            data-bs-target="#nav-progress"
            type="button"
            role="tab"
            @click.prevent="scrollTop"
          >
            <span>目前進度</span>
          </button>
        </li>
        <li class="nav-item col-3 col-md-auto">
          <button
            class="nav-link position-relative"
            id="nav-message-tab"
            data-bs-toggle="pill"
            data-bs-target="#nav-message"
            type="button"
            role="tab"
            @click.prevent="scrollTop"
          >
            <span>留言</span>
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import scroll from './scrollTop'
export default {
  data () {
    return {}
  },
  methods: {
    scrollTop () {
      scroll()
    }
  }
}
</script>
