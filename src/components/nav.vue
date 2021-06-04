<template>
  <nav
    class="navbar navbar-expand-md navbar-light border-5 border-bottom border-warning"
  >
    <div class="container px-3">
      <a href="#" class="navbar-brand">
        <img
          src="../../public/assets/images/logo.jpg"
          alt="logo"
          height="40px"
        />
      </a>
      <button
        class="navbar-toggler border-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item px-md-3">
            <a href="#" class="nav-link">關於</a>
          </li>
          <li class="nav-item px-md-3">
            <a href="#" class="nav-link">挖寶</a>
          </li>
          <li class="nav-item px-md-3">
            <a href="#" class="nav-link">我有個大膽的想法</a>
          </li>
        </ul>
        <div class="ms-auto py-2 py-md-0">
          <button
            type="button"
            class="btn px-4 py-1 border-2 rounded-pill btn-warning"
            @click="openModal"
          >
            登入
          </button>
          <button
            type="button"
            class="btn px-4 py-1 border-2 rounded-pill btn-outline-secondary ms-2"
          >
            註冊
          </button>
        </div>
      </div>
    </div>
    <!-- modal -->
    <modal-component></modal-component>
  </nav>
</template>

<script>
import { Modal } from 'bootstrap'
import modalComponent from './login'
export default {
  components: {
    modalComponent
  },
  data () {
    return {
      modal: {}
    }
  },
  methods: {
    openModal () {
      this.modal.show()
    }
  },
  mounted () {
    this.modal = new Modal(document.getElementById('login'))
  }
}
</script>
