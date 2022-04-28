<template>
  <div class="container py-5 md-lg:py-4 xsm:py-2">
    <div
      class="
        fixed
        top-0
        xsm-sm:top-1/3
        xl-up:left-[70%]
        xsm-sm:inset-y-0
        xsm-sm:left-[60%]
        hidden
        opacity-0
      "
      id="yuarocket"
    >
      <img
        class="xsm-sm:opacity-70 md-xl:w-[80%] xsm-sm:h-[70%] " 
        src="https://yuastatics.s3.amazonaws.com/YuaRocket.webp"
      />
    </div>
    <div class="grid grid-cols-1 text-center justify-center items-center">
      <div v-for="(items, title) in roadmapData" :key="title">
        <div class="flex justify-center items-center py-4 md-lg:py-4 xsm:py-2">
          <img class="w-[15%] xsm:w-[35%]" src="Button3.png" />
          <h3 class="absolute title_font text-rose-600" 
          v-bind:class="bindFont(title)">
            {{title}}
          </h3>
        </div>
        <div class="flex justify-center" id="text_boxes">
          <img class="w-[40%] xsm-sm:w-[100%]" src="Frame3.png" />
          <div
            class="
              absolute
              container
              shrink
              w-[25%]
              py-[2%]
              xsm:mt-[4%]
              md:text-lg
              xsm:h-[15%]
              sm:h-[30%]
              md:h-[15%]
              lg:h-[18%]
              h-[28%]
              xsm:text-xxl
              sm:text-xl
              xsm:w-[65%]
              sm:w-[60%]
              text-base
              overflow-y-auto
              mt-[1%]
            "
          >
            <p class="main_font leading-loose hyphenate">
              <ul v-for="i in items" :key="i">
              <li>
                {{i}}
              </li>
              </ul>
            </p>
          </div>
        </div>
        <div class="flex justify-center items-center py-4 md-lg:py-4 xsm:py-2">
          <img class="w-[5%] xsm:w-[15%]" src="Arrow1.png" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ROADMAP } from "~/config.js";

export default {
  setup() {},
  data() {
    return {
      roadmapData: ROADMAP,
      screen_width: '',
    };
  },
  mounted() {
    this.screen_width = window.screen.width
    let txx = document.getElementById("text_boxes");
    let element = document.getElementById("yuarocket");

    console.log("width", this.screen_width);

    var lastScrollTop = 0;
    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;
      var ch_first = txx.offsetTop;
      var ch_last = 1.3 * (ch_first + txx.offsetHeight);
      if (this.screen_width < 450) {
        ch_first = ch_first;
        ch_last = 0.8 * ch_last;
      }
      var st = window.pageYOffset || document.documentElement.scrollTop;

      if (ch_last > currentScroll && currentScroll > 2 * (ch_first / 3)) {
        element.classList.remove("hidden");
        if (st > lastScrollTop) {
          // scroll down
          element.style.opacity = parseFloat(element.style.opacity) + 0.05;
        } else {
          // scroll up
          element.style.opacity = parseFloat(element.style.opacity) - 0.03;
        }
      } else if (ch_last < currentScroll && currentScroll < 3 * (ch_last / 2)) {
        element.classList.remove("hidden");
        if (st > lastScrollTop) {
          // scroll down
          element.style.opacity = parseFloat(element.style.opacity) - 0.03;
        } else {
          // scroll up
          element.style.opacity = parseFloat(element.style.opacity) + 0.04;
        }
      } else {
        element.classList.add("hidden");
        element.style.opacity = 0;
      }
      lastScrollTop = st <= 0 ? 0 : st;
    });
  },

  methods:{
    bindFont(title){
      
      if(this.screen_width < 500){
        if(title.length < 12){
          return "text-xxl"
        }else{
          return "text-xll"
        }
      }else{
        if(title.length < 12){
          return "text-xl"
        }else{
          return "text-lg"
        }
      }

    }
  }
};
</script>
<style>

.hyphenate {
  word-wrap: break-word;
  overflow-wrap: break-word;
  word-spacing: 2px;
  text-align: left;
-webkit-hyphens: auto;
   -moz-hyphens: auto;
        hyphens: auto;
}

.hover_frame:hover {
  background-image: url("./static/Frame3-glow.png");
  background-repeat: no-repeat;
  background-size: contain;
}

.fadeIn {
  -webkit-animation: animat_show 0.8s;
  animation: animat_show 0.8s;
  visibility: visible !important;
}

@-webkit-keyframes animat_show {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>