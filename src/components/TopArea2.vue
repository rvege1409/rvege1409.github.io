<template>
  <div>
    <div class="_main_date_warp _gray">
      <div style="width: 33.28px;">
      <Divider3
      />
      </div>
    </div>

    <div class="_main_left_warp _gray" style="padding-top:60px;">
      <p class="_english_font" style="font-size: 20px;margin-bottom: 12px;">
        The marriage of
      </p>
      <p>최창우 <span class="_and">&</span> 나영선</p>
    </div>

    <div class="_main_image_warp">
      <img class="_main_image" src="../assets/images/new/top/main_image.webp" />
    </div>

    <div class="_main_left_warp _big_text _gray" style="padding-top:23px;padding-bottom: 30px;">
      <div class="_main_txt">
        <p>2025년 11월 23일 일요일 오후 4시</p>
      </div>
      <div class="_large_text" style="margin-top: 5px;">신도림 라마다 호텔 5층 세인트 그레이스 홀</div>
    </div>
  </div>
</template>

<script>

import Divider3 from "@/components/Divider3.vue";
export default {
  name: "top-area",
  components : {
    Divider3,
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
._main_date_warp {
  font-family: 'MaruBuri', sans-serif !important;
  text-align: left;
  //padding-top:80px;
  margin-left: 24px;
  font-size: 32px;
  ._and {
    margin-left: 12px;
    margin-right: 12px;
    font-size: 24px;
  }
  p {
    margin-top: 5px;
    margin-bottom: 5px;
  }
}

._main_left_warp {
  text-align: left;
  margin-left: 24px;
  font-size: 23px;
  ._and {
    margin-left: 12px;
    margin-right: 12px;
    font-size: 24px;
  }
}

._main_date {
  width: 34px;
  height: 88px;
}

._main_title_img {
  width: 181px;
  height: 68px;
}

._main_image_warp {
  text-align: left;
  margin-left: 14px;
  margin-top: 32px;
  height : 100%;
}

._main_image {
  max-width: 380px;
  max-height: 600px;
  width: 100%;
  height: auto;
}
</style>
