<template>
  <div :class="wrapStyle">

  </div>
</template>

<script>

export default {
  name: "my-audio-player",
  props: {
    "is-fixed": {
      type: Boolean,
      defaultValue: false,
    }
  },
  computed: {
    autoPlayStartTime() {
      return this.autoPlayStartSeconds * 1000
    },
    relative() {
      return !this.fixed
    },
    wrapStyle() {
      if(this.fixed) {
        return "_fixed_right"
      } else {
        return "_relative_right"
      }
    },
  },
  data() {
    return {
      isPlaying: false,
      autoPlayStartSeconds: 1,
    }
  },
  methods : {
    playAndPause() {
      const audio = this.$refs.audio
      if(!this.isPlaying) {
        audio.play()
        this.isPlaying = true
      } else {
        audio.pause()
        this.isPlaying = false
      }
    },
  },
  mounted() {
    document.addEventListener("DOMContentLoaded", () => {
      setTimeout(() => {
        this.playAndPause()
      }, this.autoPlayStartTime);
    });
  }
};
</script>
<style>
._fixed_right {
  bottom: 20px;
  position: fixed;
  right: 20px;
  text-align: right;
  z-index: 9999;
}

._relative_right {
  top: 20px;
  position: relative;
  right: 20px;
  text-align: right;
  z-index: 9999;
}

._bgm_color {
  background-color: #FFB52F!important;
  background: none;
  opacity: 90%;
}

</style>

