<template>
  <div class="map">
    <div class="title_area _english_font _big_text _gray">
      Location
    </div>
    <div class="_big_text _gray">
      오시는 길
    </div>

    <div class="address_area _large_text _gray">
      서울시 구로구 경인로 625<br>
      신도림 라마다 호텔 5층 세인트 그레이스홀<br>
      <p>T. 02-2162-2000</p>
    </div>

    <a class="aTag_copy" style="cursor: pointer" @click="copyAddress">
      <div class="addr_btn">
        주소 복사
      </div>
    </a>

    <div class="bottom center ui toast-container _toast" v-show="showCopyCompleteModal">
      <div class="floating toast-box" style="text-align: left">
        <div role="alert" class="ui toast compact _toast_color" style="opacity: 1;">
          <i class="copy icon" style="visibility: visible;"></i>
          <div class="content">
            <div class="message">복사가 완료되었습니다.</div>
          </div>
        </div>
      </div>
    </div>



    <iframe
        class="_google_map_iframe"
        :src="googleMapSrc"
        allowFullScreen="" loading="lazy"
        referrerPolicy="no-referrer-when-downgrade">
    </iframe>

    <div class="util_btn_icon_area">

      <a :href="navermapUrl" class = "aTag">
        <img class="util_btn_icon" src="../assets/images/new/map/navermap.jpg"/> 네이버 지도
      </a>
      <a :href="kakaoTaxiUrl" class="aTag">
        <img class="util_btn_icon" src="../assets/images/new/map/kakaonav.png"/> 카카오 네비
      </a>
    </div>

    <div class="map_desc_area _tiny_text _gray">
      <p class="_large_text _blue"><b>주차장 입구</b></p>
      서울특별시 구로구 경인로 624<br>
    </div>

    <div class="map_desc_area _tiny_text _gray">
      <p class="_large_text _gray"><b>지하철</b></p>
      <Divider3 :padding-bottom="0" padding-right="44"/>
      <strong class="_small_text _black">셔틀버스 타는 곳 : 신도림역 1번 출구 앞</strong><br>
      지하철 1호선, 2호선 신도림역 1번 출구 (신도림역 광장 도보 5분)<br>
    </div>

    <div class="map_desc_area _tiny_text _gray">
      <p class="_large_text _gray"><b>버스</b></p>
      <Divider3 :padding-bottom="0" padding-right="44"/>
      <strong class="_small_text _black">신도림역(구로역)</strong><br>
      간선버스(파랑) : 160 503 600 662 660 N16(심야)<br>
      지선버스(초록) : 6515 6516 6637 6640A <br><p class="nextLine">6640B(신도림역 방면) 6713</p>
      경기일반 : 10 11-1 11-2 530 83 88<br>
      직행버스(빨강) : 5200 301 320
    </div>
  </div>
</template>

<script>

import Divider3 from "@/components/Divider3.vue";

export default {
  name: "google-map-area",
  components : {
    Divider3
  },
  data() {
    return {
      locationName: "라마다 서울 신도림 호텔",
      address : "432-30, Sindorim-Dong, gu, 구로구 서울특별시",
      showCopyCompleteModal: false,
      tmapUrl: "",
      kakaoTaxiUrl: "",
      navermapUrl: "",
      kakaomapUrl: "",
      googleMapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.0628649396485!2d126.88274607531311!3d37.506435427572995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9e68c1a74703%3A0x45ccfce8a9b9274a!2z652866eI64ukIOyEnOyauCDsi6Drj4Trprwg7Zi47YWU!5e0!3m2!1sko!2skr!4v1749045586115!5m2!1sko!2skr",
    }
  },
  mounted() {
    this.makeUrls()
  },
  methods: {
    makeUrls() {
      const locationName = this.locationName
      this.tmapUrl = "tmap://search?name=" + locationName
      this.kakaoTaxiUrl = "https://t.kakao.com/launch?type=taxi&amp;dest_lat=37.49878007763176&amp;dest_lng=127.03170076652506&amp;ref=localweb"
      this.navermapUrl = "nmap://search?query=" + locationName
      this.kakaomapUrl = "kakaomap://search?q=" + locationName
    },
    copyAddress() {
      this.$copyText(this.address).then(() => {
        this.showCopyCompleteModal = true
        setTimeout(() => {
          this.showCopyCompleteModal = false
        }, 1000)
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.nextLine{
  padding: 5px 0px 0px 104px;

}
.map {
  margin-top: 18px;
  margin-bottom: 18px;
  text-align: center;
}

.title_area {
  margin-top: 56px;
  line-height: 24px;
  color: #797979;
  margin-bottom: 8px;
}

.aTag{
  color: #797979 !important;
  font-size: 13px;
  margin-right:30px;
}

.aTag_copy{
  color: #797979 !important;
  font-size: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
}

.address_area {
  margin-top: 16px;
  line-height: 30px;
  p {
    margin-top: 4px;
  }
}

.addr_btn {
  width: 82px;
  height: 31px;
  margin-top: 12px;
  line-height: 28px;
  margin-bottom: 48px;
  border: 1px solid #D3D3D3;
  border-radius: 10px
}

._toast {
  bottom: 300px!important;
}

._toast_color {
  background-color: #4d7846!important;
  opacity: 0.9!important;
  color: white!important;
}

._google_map_iframe {
  margin-left: 5px;
  margin-right: 5px;
  border: 0;
  width: 95%;
  min-height: 190px;
  min-width: 320px;
}

.util_btn_icon_area {
  margin-top: 16px;
}

.util_btn_icon {
  width: 14px;
  //font-family: 'Nanum Myeongjo', serif !important;
  height: 14px;
  background: var(--secondary-bg-color);

}

.map_desc_area {
  text-align: left;
  margin-top: 56px;
  margin-left: 25px;
  line-height: 28px;
}

</style>
