<template>
  <div>
    <form class="pt-4" id="sponsor-form" @keydown.enter="checkValidation">
      <p class="text-center">
        <img src="../../public/assets/images/icon_heart.svg" alt="" />
      </p>
      <div
        class="border border-2 border-warning position-relative text-center my-4"
      >
        <span
          class="position-absolute top-50 start-50 translate-middle px-3 bg-white fs-4 fw-bold"
          style="letter-spacing: 2px"
          >贊助專案</span
        >
      </div>
      <div class="form-group">
        <label class="form-label" for="#plane-title">贊助方案</label>
        <select class="form-select form-control" id="plane-title" required>
          <option :value="getKey" selected disabled>請選擇一個方案</option>
          <option
            v-for="(item, key) in projects"
            :key="key"
            :value="item"
            :selected="item === getKey"
          >
            {{ item }}
          </option>
        </select>
        <div class="invalid-feedback">請選擇方案</div>
      </div>
      <div class="form-group mt-2">
        <label class="form-label" for="#name">收件人姓名</label>
        <input
          type="text"
          class="form-control"
          id="name"
          v-model="form.name"
          required
        />
        <div class="invalid-feedback">請輸入收件人姓名</div>
      </div>
      <div class="form-group mt-2">
        <label class="form-label" for="#phone">聯絡電話</label>
        <input
          type="text"
          class="form-control"
          id="phone"
          v-model="form.phone"
          required
        />
        <div class="invalid-feedback">請輸入正確的聯絡電話</div>
      </div>
      <div class="form-group mt-2">
        <label class="form-label" for="#mail">聯絡信箱</label>
        <input
          type="email"
          class="form-control"
          id="mail"
          v-model="form.mail"
          required
        />
        <div class="invalid-feedback">請輸入正確的郵件格式</div>
      </div>
      <div class="form-group mt-2">
        <label class="form-label" for="#plane-title">付款方式</label>
        <select
          class="form-select form-control"
          id="plane-title"
          v-model="form.pay"
          required
        >
          <option value="" selected disabled>請選擇付款方式</option>
          <option value="信用卡付款">信用卡付款</option>
          <option value="古靈閣轉帳">古靈閣轉帳</option>
        </select>
        <div class="invalid-feedback">請選擇付款方式</div>
      </div>
    </form>
    <!-- 釘選贊助按鈕 -->
    <div class="row g-0 text-center">
      <button
        type="submit"
        class="col-auto btn btn-warning rounded-pill px-5 py-2 fs-5 mt-4 mx-auto"
        @click="checkValidation"
      >
        贊助專案
      </button>
    </div>
    <div
      class="row text-center position-fixed bottom-0 start-0 overflow-hidden btn-shadow d-md-none"
      v-if="sticky == true"
    >
      <a
        role="button"
        @click.prevent="scrollToForm"
        class="btn btn-warning px-5 py-2 fs-5 mx-auto rounded-0 vw-100"
      >
        贊助專案
      </a>
    </div>
    <!-- modal 練習 slot -->
    <modal-component>
      <template #title>完成訂單</template>
      <template>
        <div class="modal-body text-center p-5">
          <i class="fa fa-heart fa-beat fs-1 text-danger"></i>
          <p class="fs-4 fw-bold mt-3 mb-1">感謝您的贊助</p>
        </div>
      </template>
    </modal-component>
  </div>
</template>
<script>
import { Modal } from 'bootstrap'
import modalComponent from './modal'
import scroll from './scrollToForm'
export default {
  components: {
    modalComponent
  },
  props: ['projects', 'selectKey'],
  data () {
    return {
      sticky: false,
      modal: {},
      form: {
        plan: '',
        name: '專案贊助人',
        phone: '0912345678',
        mail: 'pinpin@gmail.com',
        pay: ''
      }
    }
  },
  methods: {
    scrollEvent () {
      const nav = document.getElementById('nav-pills')
      const form = document.getElementById('sponsor-form')
      const wrapper = document.getElementById('tabs-wrapper')
      const navBottom = wrapper.offsetTop + nav.offsetHeight
      const formBottom = form.offsetTop + form.offsetHeight
      const windowBottom = window.scrollY + window.innerHeight
      if (windowBottom >= navBottom && windowBottom < formBottom) {
        this.sticky = true
      } else {
        this.sticky = false
      }
    },
    scrollToForm () {
      scroll()
    },
    checkMail (mail) {
      const regex = /^([\w]+)(.[\w]+)*@([\w]+)(.[\w]{2,3}){1,2}$/
      if (!regex.test(mail)) {
        return false
      } else {
        return true
      }
    },
    checkPhone (phone) {
      const regex = /^09\d{2}-?\d{3}-?\d{3}$/
      if (!regex.test(phone)) {
        return false
      } else {
        return true
      }
    },
    checking (item, isRequire) {
      if (isRequire) {
        item.classList.add('is-invalid')
        item.nextSibling.classList.add('d-block')
      } else {
        item.classList.remove('is-invalid')
        item.nextSibling.classList.remove('d-block')
      }
    },
    checkValidation () {
      const form = document.getElementById('sponsor-form')
      const elemts = form.querySelectorAll('input, select')
      const phone = document.getElementById('phone')
      const mail = document.getElementById('mail')
      const isPhone = this.checkPhone(phone.value.trim())
      const isMail = this.checkMail(mail.value.trim())
      elemts.forEach((item) => {
        const isValue = item.value.trim()
        this.checking(item, !isValue)
      })
      this.checking(phone, isPhone === false)
      this.checking(mail, isMail === false)
      this.form.plan = this.projects[this.selectKey]
      const isInvalid = form.querySelectorAll('.is-invalid')
      if (isInvalid.length <= 0) {
        this.openModal()
      }
    },
    openModal () {
      this.modal.show()
    }
  },
  computed: {
    getKey () {
      return this.projects[this.selectKey]
    }
  },
  mounted () {
    document.addEventListener('scroll', this.scrollEvent)
    this.modal = new Modal(document.getElementById('modal'))
  }
}
</script>
