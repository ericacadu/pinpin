<template>
  <div class="modal fade" id="login">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content rounded-top overflow-hidden border-0">
        <div class="modal-header rounded-0 modal-header">
          <h5 class="modal-title">登入</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body mb-3">
          <form @submit.prevent>
            <div class="form-group">
              <label for="#username" class="form-label">帳號</label>
              <input type="username" class="form-control" id="username" />
            </div>
            <div class="form-group mt-2">
              <label for="#password" class="form-label">密碼</label>
              <input type="password" class="form-control" id="password" />
            </div>
            <a href="#" class="text-link text-muted fs-7 mt-3">忘記密碼？</a>
          </form>
          <button
            class="w-100 btn btn-lg btn-warning rounded-pill my-2"
            type="button"
          >
            登入
          </button>
        </div>
        <div class="modal-footer border-0 mb-4">
          <div class="w-100 border-0 border-bottom border-1 position-relative">
            <p
              class="position-absolute top-50 start-50 translate-middle text-muted fs-7 bg-white px-3"
            >
              還沒有帳號？
              <a href="#" class="text-link text-danger">註冊一個帳號</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
