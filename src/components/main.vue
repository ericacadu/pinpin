<template>
  <div class="row g-0">
    <!-- 頁籤內容 -->
    <div class="col-md-7 col-lg-8 tab-content pb-4" id="pills-tabContent">
      <div class="tab-pane fade show active" id="nav-intro" role="tabpanel">
        <Intro />
      </div>
      <div class="tab-pane fade" id="nav-qa" role="tabpanel">
        <Accordion />
      </div>
      <div class="tab-pane fade" id="nav-progress" role="tabpanel">
        <Progress />
      </div>
      <div class="tab-pane fade" id="nav-message" role="tabpanel">
        <Message />
      </div>
      <!-- 手機版方案選單 -->
      <div class="d-md-none mt-4">
        <Case :projects="caseArray" @selectPlane="selectPlane" />
      </div>
      <!-- 贊助表單 -->
      <Form :projects="caseArray" :selectKey="selectKey" />
    </div>
    <!-- 方案選單 -->
    <div class="col-md-5 col-lg-4 ps-md-4 d-none d-md-block">
      <Case :projects="caseArray" @selectPlane="selectPlane" />
    </div>
  </div>
</template>
<script>
import Intro from './cont-intro'
import Accordion from './cont-accordion'
import Progress from './cont-progress'
import Message from './cont-message'
import Case from './case'
import Form from './form'
export default {
  components: {
    Intro,
    Accordion,
    Progress,
    Message,
    Case,
    Form
  },
  data () {
    return {
      caseArray: ['方案1', '方案2', '方案3'],
      selectKey: ''
    }
  },
  methods: {
    selectPlane (key) {
      this.selectKey = key
    }
  }
}
</script>
