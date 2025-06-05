<template>
  <div class="map">
    <div class="title_area _english_font _big_text _black">
      Location
    </div>
    <div class="_big_text _black">
      <b>오시는 길</b>
    </div>

    <div class="address_area _large_text _gray">
      서울시 구로구 경인로 625<br>
      신도림 라마다 호텔 5층 세인트 그레이스홀<br>
      <p>T. 02-2162-2000</p>
    </div>

    <a style="cursor: pointer" @click="copyAddress">
      <img class="addr_btn" src="../assets/images/new/map/aadr_btn.png" />
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
      <a :href="navermapUrl">
        <img class="util_btn_icon" src="../assets/images/new/map/navermap.png"/>
      </a>
      <a :href="kakaoTaxiUrl">
        <img class="util_btn_icon" src="../assets/images/new/map/kakaonavi.png"/>
      </a>
      <a :href="tmapUrl">
        <img class="util_btn_icon" src="../assets/images/new/map/tmap.png"/>
      </a>
    </div>

    <div class="map_desc_area _tiny_text _gray">
      <p class="_large_text _blue"><b>주차장 입구</b></p>
      서울특별시 구로구 경인로 624<br>
      <p class="_large_text _green"><b>자가용</b></p>
      <Divider3 :padding-bottom="0" padding-right="44"/>
      <strong class="_small_text _black">강남역</strong><br>
      강남대로 -> 사평대로 -> 올림픽대로(김포공항)방면<br>
      -> 노량 대교 -> 여의도(서울교)교차로 -> 경인로<br>
      <strong class="_small_text _black">서울역</strong><br>
      한강대로 -> 청파로 -> 만리재로 -> 마포대교(마포대로)<br>
      -> 여의대로 -> 경인로<br>
      <strong class="_small_text _black">인천국제공항</strong><br>
      인천국제공항고속도로 -> 서울외곽순환고속도로<br>
      -> 경인고속도로 -> 서부간선도로(안양방면) -> 신도림고가차로<br>
      -> 경인로<br>
      <strong class="_small_text _black">김포공항</strong><br>
      개화동로 -> 남부순환로 -> 오류IC -> 경인로<br>
    </div>

    <div class="map_desc_area _tiny_text _gray">
      <p class="_large_text _green"><b>지하철</b></p>
      <Divider3 :padding-bottom="0" padding-right="44"/>
      <strong class="_small_text _black">셔틀버스 타는 곳 : 신도림역 1번 출구 앞</strong><br>
      지하철 1호선, 2호선 신도림역 1번 출구 (신도림역 광장 도보 5분)<br>
    </div>

    <div class="map_desc_area _tiny_text _gray">
      <p class="_large_text _green"><b>버스</b></p>
      <Divider3 :padding-bottom="0" padding-right="44"/>
      <strong class="_small_text _black">신도림역(구로역)</strong><br>
      간선버스(파랑) : 160. 503. 600. 662. 660. N16(심야)<br>
      지선버스(초록) : 6515. 6516. 6637. 6640A. 6640B(신도림역 방면). 6713<br>
      경기일반 : 10.11-1.11-2.530. 83. 88<br>
      직행버스(빨강) : 5200. 301. 320
    </div>

    <div class="map_desc_area _tiny_text _gray">
      <p class="_large_text _green"><b>공항 리무진 이용 시</b></p>
      <Divider3 :padding-bottom="0" padding-right="44"/>
      <strong class="_small_text _black">인천국제공항</strong><br>
      6B 또는 13A 에서 6018번 버스 탑승 후, 신도림역에서 하차 (약 1시간 10분 소요)<br>
      성인(만12세~) : 15,000원 /소인(만 6세~만 11세) : 11,000원<br>

      <strong class="_small_text _black">김포국제공항</strong><br>
      국내선 4번 게이트 또는 6번 게이트에서 6003번 버스 탑승 후, 구로역(애경백화점)에서 하차 (약 35분 소요)<br>
      신도림역 방향으로 도보 10분<br>
      성인 및 소인 : 4,000원
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


.address_area {
  margin-top: 16px;
  line-height: 30px;
  p {
    margin-top: 4px;
  }
}

.addr_btn {
  width: 82px;
  height: 44px;
  margin-top: 24px;
  line-height: 28px;
  margin-bottom: 48px;
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
  margin-left: 10px;
  margin-right: 10px;
  border: 0;
  width: 80%;
  min-height: 310px;
  min-width: 320px;
}

.util_btn_icon_area {
  margin-top: 16px;
}

.util_btn_icon {
  width: 113px;
  height: 46px;
  background: var(--secondary-bg-color);
}

.map_desc_area {
  text-align: left;
  margin-top: 56px;
  margin-left: 43px;
  line-height: 28px;
}

</style>
