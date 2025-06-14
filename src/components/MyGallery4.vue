<template>
  <div class="_gallery">
    <div class="title_area _english_font _big_text _gray">
      gallery
    </div>
    <div class="_big_text _gray">
      웨딩 갤러리
    </div>
    <div class="description _large_text _silver">
      이미지를 클릭하시면 확대보기가 가능합니다.
    </div>
    <div class="ui images">
      <img class="ui image _gallery_image"
           v-for="(image, index) in images"
           :key="index"
           :src="image"
           @click.prevent="showViewer(image, index)"
      >
    </div>
  </div>
</template>

<script>

import viewerImages from "@/common/viewerImages";

export default {
  name: "my-gallery2",
  computed: {
    selectedImage() {
      return viewerImages.images[this.selectedImageIndex]
    }

  },
  data() {
    return {
      itemSize: viewerImages.images.length,
      images : viewerImages.images,
      selectedImageIndex: 0,
      computeWideImageMargin: undefined,
      computeNarrowImageMargin: undefined,

    }
  },
  methods: {
    showViewer(image, index) {
      const $viewer = this.$viewerApi({
        images: this.images,
        options: {
          initialViewIndex: index,
          fullscreen: true,
          zoomable: false,
          swipeable: true,
          movable: false,
          navbar: false,
          title: false,
          toolbar: {
            prev: true,
            next: true,
            close: () => {
              $viewer.destroy()
            },
          },
          view: (e) => {
            const canvasElement = e.target.viewer.canvas
            canvasElement.style.visibility = 'hidden';

            setTimeout(() => {
              this.fadeInImage(canvasElement)
            }, 200)
          },
        }
      })

      const viewerCanvas = document.getElementsByClassName("viewer-canvas")
      for (let i = 0; i < viewerCanvas.length; i++) {
        const element = viewerCanvas[i]
        element.addEventListener('touchstart', (e) => {
          e.stopPropagation()
          e.preventDefault()
        });
        element.addEventListener('touchend', (e) => {
          e.stopPropagation()
          e.preventDefault()
        });
      }
    },
    async fadeInImage(canvasElement) {
      const imgElement = canvasElement.querySelector('img');
      this.setImageStyle(imgElement)
      if(this.isWideImage(imgElement.src) && !this.computeWideImageMargin) {
        await this.delay(200)
        const marginTop = this.computeMarginTop(imgElement)
        this.computeWideImageMargin = marginTop
      }
      if(!this.isWideImage(imgElement.src) && !this.computeNarrowImageMargin) {
        await this.delay(200)
        const marginTop = this.computeMarginTop(imgElement)
        this.computeNarrowImageMargin = marginTop
      }
      if(this.isWideImage(imgElement.src)) {
        imgElement.style.marginTop = this.computeWideImageMargin + 'px';
      } else {
        imgElement.style.marginTop = this.computeNarrowImageMargin + 'px';
      }
      canvasElement.style.visibility = 'visible';
      imgElement.style.display = 'block';
    },
    async setImageStyle(imgElement) {
      imgElement.style.width = '100%';
      imgElement.style.height = 'auto';
      imgElement.style.maxWidth = null;
      imgElement.style.margin = null;
    },
    isWideImage(imageSrc) {
      if (/_h\.jpg$/.test(imageSrc)) {
        return true
      } else {
        return false
      }
    },
    delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },
    computeMarginTop(imgElement) {
      const imageHeight = imgElement.clientHeight;
      const clientHeight = window.innerHeight;
      const marginTop = (clientHeight - imageHeight) / 2;
      return marginTop
    }
  },
};
</script>

<style lang="scss" scoped>

._gallery {
  margin-top: 100px;
  text-align: center;
  .title_area {
    line-height: 24px;
    margin-bottom: 8px;
  }
  .description {
    margin-top: 16px;
    margin-bottom: 32px;
  }
}


._gallery_image {
  width:133px!important;
  //min-height: 166px;
  height: 180px;
  border-radius: 4px;
}


@media (max-width:412px){
  ._gallery_image {
    width:120px!important;
    //min-height: 149px;
  }
}

@media (max-width:390px){
  ._gallery_image {
    width:112px!important;
    //min-height: 139px;
  }
}

@media (max-width:375px){
  ._gallery_image {
    width:112px!important;
    //min-height: 139px;
  }
}

@media (max-width:360px) {
  ._gallery_image {
    width:105px!important;
    //min-height: 131px;
  }
}

@media (max-width:330px) {
  ._gallery_image {
    width:102px!important;
    //min-height: 131px;
  }
}
</style>

<style lang="scss">
// viewer.js

/*!
* Viewer.js v1.11.6
* https://fengyuanchen.github.io/viewerjs
*
* Copyright 2015-present Chen Fengyuan
* Released under the MIT license
*
* Date: 2023-09-17T03:16:35.830Z
*/

.viewer-zoom-in::before, .viewer-zoom-out::before, .viewer-one-to-one::before, .viewer-reset::before, .viewer-prev::before, .viewer-play::before, .viewer-next::before, .viewer-rotate-left::before, .viewer-rotate-right::before, .viewer-flip-horizontal::before, .viewer-flip-vertical::before, .viewer-fullscreen::before, .viewer-fullscreen-exit::before, .viewer-close::before {
background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAAAUCAYAAABWOyJDAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAQPSURBVHic7Zs/iFxVFMa/0U2UaJGksUgnIVhYxVhpjDbZCBmLdAYECxsRFBTUamcXUiSNncgKQbSxsxH8gzAP3FU2jY0kKKJNiiiIghFlccnP4p3nPCdv3p9778vsLOcHB2bfveeb7955c3jvvNkBIMdxnD64a94GHMfZu3iBcRynN7zAOI7TG15gHCeeNUkr8zaxG2lbYDYsdgMbktBsP03jdQwljSXdtBhLOmtjowC9Mg9L+knSlcD8TNKpSA9lBpK2JF2VdDSR5n5J64m0qli399hNFMUlpshQii5jbXTbHGviB0nLNeNDSd9VO4A2UdB2fp+x0eCnaXxWXGA2X0au/3HgN9P4LFCjIANOJdrLr0zzZ+BEpNYDwKbpnQMeAw4m8HjQtM6Z9qa917zPQwFr3M5KgA6J5rTJCdFZJj9/lyvGhsDvwFNVuV2MhhjrK6b9bFiE+j1r87eBl4HDwCF7/U/k+ofAX5b/EXBv5JoLMuILzf3Ap6Z3EzgdqHMCuF7hcQf4HDgeoHnccncqdK/TvSDWffFXI/exICY/xZyqc6XLWF1UFZna4gJ7q8BsRvgd2/xXpo6P+D9dfT7PpECtA3cnWPM0GXGFZh/wgWltA+cDNC7X+AP4GzjZQe+k5dRxuYPeiuXU7e1qwLpDz7dFjXKRaSwuMLvAlG8zZlG+YmiK1HoFqT7wP2z+4Q45TfEGcMt01xLoNZEBTwRqD4BLpnMLeC1A41UmVxsXgXeBayV/Wx20rpTyrpnWRft7p6O/FdqzGrDukPNtkaMoMo3FBdBSQMOnYBCReyf05s126fU9ytfX98+mY54Kxnp7S9K3kj6U9KYdG0h6UdLbkh7poFXMfUnSOyVvL0h6VtIXHbS6nOP+s/Zm9mvyXW1uuC9ohZ72E9uDmXWLJOB1GxsH+DxPftsB8B6wlGDN02TAkxG6+4D3TWsbeC5CS8CDFce+AW500LhhOW2020TRjK3b21HEmgti9m0RonxbdMZeVzV+/4tF3cBpP7E9mKHNL5q8h5g0eYsCMQz0epq8gQrwMXAgcs0FGXGFRcB9wCemF9PkbYqM/Bas7fxLwNeJPdTdpo4itQti8lPMqTpXuozVRVXPpbHI3KkNTB1NfkL81j2mvhDp91HgV9MKuRIqrykj3WPq4rHyL+axj8/qGPmTqi6F9YDlHOvJU6oYcTsh/TYSzWmTE6JT19CtLTJt32D6CmHe0eQn1O8z5AXgT4sx4Vcu0/EQecMydB8z0hUWkTd2t4CrwNEePqMBcAR4mrBbwyXLPWJa8zrXmmLEhNBmfpkuY2102xxrih+pb+ieAb6vGhuA97UcJ5KR8gZ77K+99xxeYBzH6Q3/Z0fHcXrDC4zjOL3hBcZxnN74F+zlvXFWXF9PAAAAAElFTkSuQmCC');
background-repeat: no-repeat;
background-size: 280px;
color: transparent;
display: block;
font-size: 0;
height: 20px;
line-height: 0;
width: 20px;
}

.viewer-zoom-in::before {
background-position: 0 0;
content: 'Zoom In';
}

.viewer-zoom-out::before {
background-position: -20px 0;
content: 'Zoom Out';
}

.viewer-one-to-one::before {
background-position: -40px 0;
content: 'One to One';
}

.viewer-reset::before {
background-position: -60px 0;
content: 'Reset';
}

.viewer-prev::before {
background-position: -80px 0;
content: 'Previous';
}

.viewer-play::before {
background-position: -100px 0;
content: 'Play';
}

.viewer-next::before {
background-position: -120px 0;
content: 'Next';
}

.viewer-rotate-left::before {
background-position: -140px 0;
content: 'Rotate Left';
}

.viewer-rotate-right::before {
background-position: -160px 0;
content: 'Rotate Right';
}

.viewer-flip-horizontal::before {
background-position: -180px 0;
content: 'Flip Horizontal';
}

.viewer-flip-vertical::before {
background-position: -200px 0;
content: 'Flip Vertical';
}

.viewer-fullscreen::before {
background-position: -220px 0;
content: 'Enter Full Screen';
}

.viewer-fullscreen-exit::before {
background-position: -240px 0;
content: 'Exit Full Screen';
}

.viewer-close::before {
background-position: -260px 0;
content: 'Close';
}

.viewer-container {
bottom: 0;
direction: ltr;
font-size: 0;
left: 0;
line-height: 0;
overflow: hidden;
position: absolute;
right: 0;
-webkit-tap-highlight-color: transparent;
top: 0;
-ms-touch-action: none;
touch-action: none;
-webkit-touch-callout: none;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
}

.viewer-container::-moz-selection, .viewer-container *::-moz-selection {
background-color: transparent;
}

.viewer-container::selection,
.viewer-container *::selection {
background-color: transparent;
}

.viewer-container:focus {
outline: 0;
}

.viewer-container img {
display: block;
height: auto;
max-height: none !important;
max-width: none !important;
min-height: 0 !important;
min-width: 0 !important;
width: 100%;
}

.viewer-canvas {
bottom: 0;
left: 0;
overflow: hidden;
position: absolute;
right: 0;
top: 0;
}

.viewer-canvas > img {
height: auto;
max-width: 430px !important;
width: auto;
margin: 0 auto;
}

.viewer-footer {
bottom: 0;
left: 0;
overflow: hidden;
position: absolute;
right: 0;
text-align: center;
}

.viewer-navbar {
background-color: rgba(0, 0, 0, 0.5);
overflow: hidden;
}

.viewer-list {
box-sizing: content-box;
height: 50px;
margin: 0;
overflow: hidden;
padding: 1px 0;
}

.viewer-list > li {
color: transparent;
cursor: pointer;
float: left;
font-size: 0;
height: 50px;
line-height: 0;
opacity: 0.5;
overflow: hidden;
transition: opacity 0.15s;
width: 30px;
}

.viewer-list > li:focus,
.viewer-list > li:hover {
opacity: 0.75;
}

.viewer-list > li:focus {
outline: 0;
}

.viewer-list > li + li {
margin-left: 1px;
}

.viewer-list > .viewer-loading {
position: relative;
}

.viewer-list > .viewer-loading::after {
border-width: 2px;
height: 20px;
margin-left: -10px;
margin-top: -10px;
width: 20px;
}

.viewer-list > .viewer-active,
.viewer-list > .viewer-active:focus,
.viewer-list > .viewer-active:hover {
opacity: 1;
}

.viewer-player {
background-color: #000;
bottom: 0;
cursor: none;
display: none;
left: 0;
position: absolute;
right: 0;
top: 0;
z-index: 1;
}

.viewer-player > img {
left: 0;
position: absolute;
top: 0;
}

.viewer-toolbar > ul {
display: inline-block;
margin: 0 auto 5px;
overflow: hidden;
padding: 6px 3px;
}

.viewer-toolbar > ul > li {
background-color: rgba(0, 0, 0, 0.5);
border-radius: 50%;
cursor: pointer;
float: left;
height: 24px;
overflow: hidden;
transition: background-color 0.15s;
width: 24px;
}

.viewer-toolbar > ul > li:focus,
.viewer-toolbar > ul > li:hover {
background-color: rgba(0, 0, 0, 0.8);
}

.viewer-toolbar > ul > li:focus {
box-shadow: 0 0 3px #fff;
outline: 0;
position: relative;
z-index: 1;
}

.viewer-toolbar > ul > li::before {
margin: 2px;
}

.viewer-toolbar > ul > li + li {
margin-left: 1px;
}

.viewer-toolbar > ul > .viewer-small {
height: 18px;
margin-bottom: 3px;
margin-top: 3px;
width: 18px;
}

.viewer-toolbar > ul > .viewer-small::before {
margin: -1px;
}

.viewer-toolbar > ul > .viewer-large {
height: 30px;
margin-bottom: -3px;
margin-top: -3px;
width: 30px;
}

.viewer-toolbar > ul > .viewer-large::before {
margin: 5px;
}

.viewer-tooltip {
background-color: rgba(0, 0, 0, 0.8);
border-radius: 10px;
color: #fff;
display: none;
font-size: 12px;
height: 20px;
left: 50%;
line-height: 20px;
margin-left: -25px;
margin-top: -10px;
position: absolute;
text-align: center;
top: 50%;
width: 50px;
}

.viewer-title {
color: #ccc;
display: inline-block;
font-size: 12px;
line-height: 1.2;
margin: 5px 5%;
max-width: 90%;
min-height: 14px;
opacity: 0.8;
overflow: hidden;
text-overflow: ellipsis;
transition: opacity 0.15s;
white-space: nowrap;
}

.viewer-title:hover {
opacity: 1;
}

.viewer-button {
-webkit-app-region: no-drag;
background-color: rgba(0, 0, 0, 0.5);
border-radius: 50%;
cursor: pointer;
height: 80px;
overflow: hidden;
position: absolute;
right: -40px;
top: -40px;
transition: background-color 0.15s;
width: 80px;
}

.viewer-button:focus,
.viewer-button:hover {
background-color: rgba(0, 0, 0, 0.8);
}

.viewer-button:focus {
box-shadow: 0 0 3px #fff;
outline: 0;
}

.viewer-button::before {
bottom: 15px;
left: 15px;
position: absolute;
}

.viewer-fixed {
position: fixed;
}

.viewer-open {
overflow: hidden;
}

.viewer-show {
display: block;
}

.viewer-hide {
display: none;
}

.viewer-backdrop {
background-color: rgba(0, 0, 0, 0.5);
}

.viewer-invisible {
visibility: hidden;
}

.viewer-move {
cursor: move;
cursor: grab;
}

.viewer-fade {
opacity: 0;
}

.viewer-in {
opacity: 1;
}

.viewer-transition {
transition: all 0.3s;
}

@keyframes viewer-spinner {
0% {
transform: rotate(0deg);
}

100% {
transform: rotate(360deg);
}
}

.viewer-loading::after {
animation: viewer-spinner 1s linear infinite;
border: 4px solid rgba(255, 255, 255, 0.1);
border-left-color: rgba(255, 255, 255, 0.5);
border-radius: 50%;
content: '';
display: inline-block;
height: 40px;
left: 50%;
margin-left: -20px;
margin-top: -20px;
position: absolute;
top: 50%;
width: 40px;
z-index: 1;
}

@media (max-width: 767px) {
.viewer-hide-xs-down {
display: none;
}
}

@media (max-width: 991px) {
.viewer-hide-sm-down {
display: none;
}
}

@media (max-width: 1199px) {
.viewer-hide-md-down {
display: none;
}
}

</style>
