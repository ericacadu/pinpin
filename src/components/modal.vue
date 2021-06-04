<template>
  <div class="modal fade" id="modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content rounded-top overflow-hidden border-0">
        <div class="modal-header rounded-0 modal-header">
          <h5 class="modal-title">
            <slot name="title" />
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <slot>
          <div class="modal-body">
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>
