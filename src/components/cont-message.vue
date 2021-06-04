<template>
  <div>
    <p
      class="rounded-3 border-start border-3 border-warning px-3 py-2 p-md-3 m-0 mb-4 overflow-hidden"
    >
      只有本專案的贊助者才可以留言哦，如果有任何專案相關的問題，歡迎
      <a class="text-danger text-link" href="#">聯絡提案人</a>
      ！
    </p>
    <div
      class="card rounded-4 p-3"
      v-for="(item, key) in messages"
      :key="key"
      :class="key > 0 ? 'mt-3' : ''"
    >
      <div
        class="card-header bg-white border-0 p-0 d-flex flex-row align-items-center"
      >
        <p class="avatar m-0">
          <img
            v-if="item.avatar"
            :src="require(`../../public/assets/images/${item.avatar}`)"
            alt="item.name"
          />
          <img v-else src="../../public/assets/images/user_img02.jpg" alt="" />
        </p>
        <div class="ps-3">
          <p class="text-dark fs-5 m-0">{{ item.name }}</p>
          <span class="text-muted ff-bt2">2020年5月22日 11:32</span>
        </div>
      </div>
      <div class="card-body px-0 pt-3 pb-0">
        {{ item.content }}
      </div>
      <div class="card-footer bg-white border-0 p-0 pt-3" v-if="item.reply">
        <div class="bg-light py-2 px-3 rounded-2 lh-lg">
          <p class="text-danger m-0">提案者回覆</p>
          <p class="m-0">{{ item.reply }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      messages: [
        {
          avatar: 'user_img01.jpg',
          name: '廖小杰',
          content:
            '晚上起床上廁所看到照片裡的人一直動其實有點恐怖，希望可以有暫停或是定時的功能！',
          reply: '你要嘛起床的時候開燈，要嘛給我們更多錢開發阿'
        },
        {
          name: '卡阿伯',
          content: '希望有更多花色可以選擇！我女兒最近喜歡綠色'
        },
        {
          name: '賈師',
          content:
            '可以做個相簿功能嗎？拍出好看的影片再讓我們選擇要印出哪一張這樣'
        },
        {
          name: '俊俊',
          content: 'test123 看一下我是不是真的可以留言'
        }
      ]
    }
  }
}
</script>
