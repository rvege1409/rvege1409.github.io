<template>
  <div class="invitation_area">
    <p class="header _big_text _green">
    </p>
    <div class="desc _large_text _gray">
      겨울의 시작,<br />
      따스한 눈길로 서로를 바라보며<br />
      서로의 마음을 조심스레 열었던 두 사람.<br />
      이제는 서로의 온기가 되어<br />
      함께 계절을 걸어왔습니다. <br />
      이제 하나 되어 <br />
      새로운 계절의 문을 함께 열고자 합니다. <br />
      언제나 당신 곁에서 <br />
      늘 그 자리에 피어 있는 <br />
      따스한 꽃 같은 사람이 되고 싶습니다. <br />
      <br>
      <br>
    </div>

    <Divider3 :padding-bottom="0" padding-right="24" padding-left="24"/>

    <div class="names _small_text _gray">
      <p>최수현∙김미자<span class="male">의 차남</span><strong>최창우</strong></p>
      <p>나채훈∙박주형<span class="male">의 장녀</span><strong>나영선</strong></p>
    </div>

    <img class="invi_main_image" src="../assets/images/new/invitation/invi_img.webp" />

  </div>
</template>

<script>

import Divider3 from "@/components/Divider3.vue";

export default {
  name: "invitation-area",
  components: {
    Divider3,
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
.names p {
  white-space: nowrap;
}

.invitation_area {
  background: var(--secondary-bg-color);
  text-align: center;
  line-height: 0;
  .header {
    padding-top: 30px;
    line-height: 28px;
  }
  .desc {
    line-height: 30px;
    padding-bottom: 36px;
  }
  .line_area {
    padding-bottom: 36px;
  }
  .line {
    width: 382px;
    border: 0.7px solid;
    color: #D7D7D7;
  }
  .names {
    text-align: right;
    line-height: 0;
    letter-spacing: 3px;
    margin-top: 24px;
    padding-right: 68px;
    .male {
      font-size: 12.5px;
      margin-left: 26px;
      margin-right: 26px;
    }
    .female {
      font-size: 12.5px;
      margin-left: 26px;
      margin-right: 43px;
    }
  }
  .names_image {
    width: 291px;
    height: 58px;
  }
  .invi_main_image {
    margin-top: 50px;
    width: 100%;
    height: auto;
  }
}
</style>