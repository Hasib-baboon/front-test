<template>
  <div class="text-white" id="app">
    <video
      autoplay
      muted
      loop
      id="myVideo"
      class="
        xsm-sm:scale-y-25
        w-full
        xsm-sm:w-full
        md-up:object-cover
        h-full
        min-h-full
        xsm-sm:object-none
      "
    >
      <source
        src="https://yuastatics.s3.amazonaws.com/YuaBackground.mp4"
        type="video/mp4"
      />
    </video>
    <!-- <button @click="goto('div1')">Div 1</button>
    <button @click="goto('div2')">Div 2</button>
    <button @click="goto('div3')">Div 3</button>
    <br /> -->
    <navbar
      :show_icons="true"
      v-bind:disable_connect="disable_connect"
      :key="nav_index"
    ></navbar>
    <section class="pb-[20%] h-screen" id="home">
      <div class="flex justify-center py-[5%]">
        <span class="xsm-sm:text-5xl text-xxxl text-effect"> YUAVERSE </span>
        <!-- <img src="logo_white.png" width="30%"/> -->
      </div>
      <!-- <div class="flex justify-center">
	  <img width="20%" height="10%" src="galaxy.png">
	  </div> -->
      <!-- <div class="flex justify-center">
        <p class="subtitle logo_title text-effect  text-xl">
          The dimension where LOVE resides
        </p>
      </div> -->

      <div
        class="md-up:hidden fixed object-cover top-0 -z-10"
        style="margin-top: 140%; filter: brightness(50%)"
      >
        <img class="w-screen" src="unknown.png" />
        <div class="bottom-0">
          <img class="w-screen" src="unknown.png" />
        </div>
      </div>
      <section
        style="background-repeat: no-repeat; background-size: contain"
        class="absolute py-4 md-lg:py-4 bottom-[1%] inset-x-0 mx-auto pl-[50%]"
      >
        <a href="#story" @click="goto('story2')">
          <section class="arrow">
            <span></span>
            <span></span>
            <span></span>
          </section>
        </a>
      </section>
    </section>

    <div class="flex justify-center items-center opacity-50">
      <img src="Divider3.png" width="90%" />
    </div>

    <section
      class="md-up:hidden grid justify-center items-center section-background"
      id="story"
    >
      <div class="flex justify-center my-8 opacity-80">
        <img class="w-[25%]" src="Callout3.png" />

        <p class="absolute text-center pt-[12%] title_font text-xxxl">Story</p>
      </div>
      <div class="flex justify-center items-center">
        <img src="Frame5-vertical.png" width="90%" />
        <!-- <div class="absolute mr-[30%] w-[1.5%] h-[80%] flex items-center">
          <img class="" src="Divider4.png" />
        </div> -->
        <div
          class="
            absolute
            h-[75%]
            sm:h-[95%]
            w-[90%]
            px-[10%]
            text-justify
            transition
            main_font
            ease-in-out
            my-[1%]
          "
          id="story"
        >
          <p class="text-center text-xxxl font-bold text-sky-500 mb-[2%]">
            Preamble
          </p>
          <p
            class="
              xl-up:whitespace-pre-line
              text-xxl
              overflow-y-auto
              leading-loose
              indent-4
            "
          >
            {{ story }}
          </p>
        </div>
      </div>
    </section>

    <section
      class="
        xsm-sm:hidden
        grid
        justify-center
        items-center
        section-background
        opacity-80
      "
    >
      <div class="flex justify-center my-8">
        <img class="w-[12%]" src="Callout3.png" />

        <p class="absolute text-center pt-[4.5%] title_font text-xxl">Story</p>
      </div>
      <div class="flex justify-center items-center" id="story2">
        <img src="Frame5-full.png" width="90%" />
        <!-- <div class="absolute mr-[30%] w-[1.5%] h-[80%] flex items-center">
          <img class="" src="Divider4.png" />
        </div> -->
        <div
          class="
            absolute
            container
            text-lg
            h-[70%]
            xsm:h-[19%]
            sm:h-[25%]
            md:h-[30%]
            lg:h-[43%]
            xl:h-[53%]
            xsm:-right-[3%]
            sm:-right-[2%]
            -right-[8%]
            w-[42%]
            mr-[22%]
            3xl-up:mr-[25%]
            xsm:mr-[15%]
            sm:mr-[20%]
            md:mr-[25%]
            object-right
            text-justify
            transition
            main_font
            ease-in-out
            my-[1%]
          "
          id="story"
        >
          <p class="text-center text-xl xsm:text-xxl font-bold text-sky-500">
            Preamble
          </p>
          <p
            class="
              xl-up:whitespace-pre-line
              xsm:text-xxl
              overflow-y-auto
              leading-loose
              indent-4
            "
          >
            {{ story }}
          </p>
        </div>
      </div>
    </section>
    <div
      class="flex justify-center items-center py-16 md-lg:py-8 xsm:py-4"
      style="background: rgba(0, 0, 0, 0.598)"
    >
      <img src="Divider3.png" width="90%" />
    </div>
    <section
      class="grid justify-center items-center"
      style="background: rgba(0, 0, 0, 0.598)"
      id="roadmap"
    >
      <div class="flex justify-center opacity-80">
        <img class="w-[15%] xsm:w-[25%]" src="Callout3.png" />
        <p
          class="
            absolute
            text-center
            xsm-sm:text-xxxl
            text-xxl
            xsm-sm:pt-[12%]
            title_font
            pt-[5%]
          "
        >
          Roadmap
        </p>
      </div>
      <div
        class="
          flex
          justify-center
          items-center
          opacity-80
          pt-8
          md-lg:pt-4
          xsm:pt-2
        "
      >
        <img class="w-[2%] xsm:w-[6%]" src="Arrow4.png" />
      </div>

      <div class="flex justify-center items-center">
        <roadmap></roadmap>
      </div>
    </section>
    <div
      class="flex justify-center items-center py-16 md-lg:py-8 xsm:py-4"
      style="background: rgba(0, 0, 0, 0.598)"
    >
      <img src="Divider3.png" width="90%" />
    </div>
    <section
      style="background: rgba(0, 0, 0, 0.598)"
      class="xsm-md:pb-[60%] pb-[40%] -z-4 xsm-sm:h-screen"
    >
      <div v-if="screen_width < 450">
        <slide_phone></slide_phone>
      </div>
      <div v-else>
        <slider></slider>
      </div>
    </section>
    <div style="background: rgba(0, 0, 0, 0.598)">
      <!-- <div
        class="
          md-up:hidden
          flex
          justify-center
          items-center
          py-16
          md-lg:py-8
          xsm:py-4
          opacity-50
        "
      >
        <img src="Divider3.png" width="80%" id="sliderDivider2" />
      </div> -->
      <div
        class="
          flex
          justify-center
          items-center
          md-lg:pb-16
          xsm:py-8
        "
      >
        <img src="Divider3.png" width="90%" id="sliderDivider" />
      </div>
    </div>
    <section
      class="items-center"
      style="background: rgba(0, 0, 0, 0.598)"
      id="team"
    >
      <div class="flex justify-center pb-16 md-lg:pb-8 opacity-80 xsm:pb-4">
        <img class="w-[12%] xsm:w-[25%]" src="Callout3.png" />
        <p
          class="
            absolute
            text-center
            xsm-sm:text-xxxl
            text-xxl
            xsm-sm:pt-[12%]
            title_font
            pt-[4.5%]
          "
        >
          Team
        </p>
      </div>
      <div class="xl-down:hidden">
        <div
          class="
            absolute
            flex
            columns-3
            space-x-[15%]
            justify-center
            items-center
            pt-[2%]
          "
        >
          <img class="w-[10%]" src="Circle-pr.png" />
          <img class="w-[10%]" src="Circle-pr.png" />
          <img class="w-[10%]" src="Circle-pr.png" />
        </div>
        <div
          class="
            absolute
            flex
            columns-3
            space-x-[20%]
            justify-center
            items-center
            text-justify
            pt-[15%]
            px-[18%]
            text-base
          "
        >
          <p class="overflow-y-auto">
            {{ description }}
          </p>
          <p class="overflow-y-auto">
            {{ description }}
          </p>
          <p class="overflow-y-auto">
            {{ description }}
          </p>
        </div>
        <div class="flex columns-3 space-x-[5%] justify-center items-center">
          <img class="w-[20%]" src="Frame6.png" />
          <!-- <p class="absolute overflow-y-auto">
            {{ description }}
          </p> -->
          <img class="w-[20%]" src="Frame6.png" />
          <!-- <p class="absolute overflow-y-auto">
            {{ description }}
          </p> -->
          <img class="w-[20%]" src="Frame6.png" />
          <!-- <p class="absolute overflow-y-auto">
            {{ description }}
          </p> -->
        </div>
      </div>
    </section>
    <section
      class="xl-up:hidden flex justify-center items-center"
      style="background: rgba(0, 0, 0, 0.598)"
    >
      <div
        class="
          grid
          text-justify
          space-y-[10%]
          justify-between
          items-center
          grid-rows-3 grid-col-1
          w-[70%]
          md-lg:w-[40%]
        "
      >
        <div class="flex justify-center opacity-80">
          <img
            class="h-[25%] sm:h-[30%] md-lg:h-[30%] absolute pt-[10%]"
            src="Circle-pr.png"
          />
          <p
            class="
              overflow-y-auto
              absolute
              xl-up:pt-[60%]
              sm:pt-[50%]
              lg:pt-[30%]
              md:pt-[40%]
              md-lg:px-[20%]
              xsm:h-[25%]
              sm:mt-[5%]
              xsm:mt-[65%]
              px-[20%]
            "
          >
            {{ description }}
          </p>
          <img class="" src="Frame6.png" />
        </div>
        <div class="flex justify-center opacity-80">
          <img
            class="h-[25%] sm:h-[30%] md-lg:h-[30%] absolute pt-[10%]"
            src="Circle-pr.png"
          />
          <p
            class="
              overflow-y-auto
              absolute
              xl-up:pt-[60%]
              sm:pt-[50%]
              lg:pt-[30%]
              md:pt-[40%]
              md-lg:px-[20%]
              xsm:h-[25%]
              sm:mt-[5%]
              xsm:mt-[65%]
              px-[20%]
            "
          >
            {{ description }}
          </p>
          <img class="" src="Frame6.png" />
        </div>
        <div class="flex justify-center opacity-80">
          <img
            class="h-[25%] sm:h-[30%] md-lg:h-[30%] absolute pt-[10%]"
            src="Circle-pr.png"
          />
          <p
            class="
              overflow-y-auto
              absolute
              xl-up:pt-[60%]
              sm:pt-[50%]
              lg:pt-[30%]
              md:pt-[40%]
              md-lg:px-[20%]
              xsm:h-[25%]
              sm:mt-[5%]
              xsm:mt-[65%]
              px-[20%]
            "
          >
            {{ description }}
          </p>
          <img class="" src="Frame6.png" />
        </div>
      </div>
    </section>
    <div
      class="flex justify-center items-center py-16 md-lg:py-8 xsm:py-4"
      style="background: rgba(0, 0, 0, 0.598)"
    >
      <img src="Divider3.png" width="90%" />
    </div>
    <section>
      <thefooter></thefooter>
    </section>
  </div>
</template>

<script>
import roadmap from "~/components/roadmap.vue";
import slider from "~/components/slider.vue";
import slide_phone from "~/components/slide_phone.vue";
import thefooter from "~/components/thefooter.vue";
import { story } from "~/config.js";

export default {
  components: {
    roadmap,
    slider,
    thefooter,
    slide_phone,
  },
  data() {
    return {
      nav_index: 0,
      disable_connect: false,
      screen_width: 0,
      story: story,
      description: `They are simply wild. Darkness affects them greatly, so they prefer to be near the sun. Here, passions burn as hot as the
  solar flares that erupt from the molten surface of the yellow star. Molten rivers of lava flow over
  the surface, bathing the Yua settlements with heat and light.`,
    };
  },

  mounted() {
    this.screen_width = window.screen.width;
    this.setImageTop();
    window.addEventListener("resize", this.setImageTop, true);
  },
  methods: {
    goto(refName) {
      var element = this.$root.$el.querySelector("#" + refName);
      var top = element.offsetTop;

      window.scrollTo({ top: top, behavior: "smooth" });
    },
    getCoords(elem) {
      // crossbrowser version
      var box = elem.getBoundingClientRect();

      var body = document.body;
      var docEl = document.documentElement;

      var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
      // var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

      var clientTop = docEl.clientTop || body.clientTop || 0;
      // var clientLeft = docEl.clientLeft || body.clientLeft || 0;

      var top = box.top + scrollTop - clientTop;
      // var left = box.left + scrollLeft - clientLeft;

      // return { top: Math.round(top), left: Math.round(left) };
      return Math.round(top);
    },
    setImageTop() {
      let element = document.getElementById("sampleimage");
      let divider = document.getElementById("sliderDivider");
      let top = this.getCoords(element);
      divider.style.position = "absolute";
      divider.style.top =
        top + element.offsetHeight - 3 * divider.offsetHeight / 2 + "px";

      // if (this.screen_width < 450) {
      //   let element2 = document.getElementById("sampleimage2");
      //   let divider2 = document.getElementById("sliderDivider2");
      //   let top2 = this.getCoords(element2);
      //   divider2.style.position = "absolute";
      //   divider2.style.top =
      //     top2 + element2.offsetHeight - divider2.offsetHeight / 2 + "px";
      // }
    },
  },
};
</script>

<style>
@import url("~/assets/css/main.css");

.progress-container {
  width: 100%;
  height: 8px;
  background: #ccc;
}

/* The progress bar (scroll indicator) */
.progress-bar {
  height: 8px;
  background: #04aa6d;
  width: 0%;
}
.section-background {
  background: rgba(0, 0, 0, 0.849);
  box-shadow: 10px 0 90px 50px rgb(0, 0, 0);
}

.hover_arrow:hover {
  background-repeat: no-repeat;
  background-size: contain;
  transition: all 0.4s;
  -moz-transition: all 0.4s;
  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
}

.arrow span {
  display: block;
  width: 45px;
  height: 45px;
  margin: -22px;
  border-bottom: 6px solid #aebdce;
  border-right: 6px solid #aebdce;
  transform: rotate(45deg);
  animation: animate 2s infinite;
}
.arrow span:nth-child(2) {
  animation-delay: -0.2s;
}
.arrow span:nth-child(3) {
  animation-delay: -0.4s;
}
@keyframes animate {
  0% {
    opacity: 0;
    transform: rotate(45deg) translate(-20px, -20px);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: rotate(45deg) translate(20px, 20px);
  }
}

.text-effect {
  color: #fff6a9;
  font-weight: 600;
  text-align: center;
  text-transform: capitalize;
  margin: 20px auto 0;
  text-shadow: 0 0 5px #ffa500, 0 0 15px #ffa500, 0 0 20px #ffa500,
    0 0 40px #ffa500, 0 0 60px #ff0000, 0 0 10px #ff8d00, 0 0 98px #ff0000;
  position: relative;
  animation: animate 2s ease-in-out infinite;
}
@keyframes animate {
  20%,
  24%,
  55% {
    color: #111;
    text-shadow: none;
  }
  0%,
  19%,
  21%,
  23%,
  25%,
  54%,
  56%,
  100% {
    color: #fff6a9;
    text-shadow: 0 0 5px #ffa500, 0 0 15px #ffa500, 0 0 20px #ffa500,
      0 0 40px #ffa500, 0 0 60px #ff0000, 0 0 10px #ff8d00, 0 0 98px #ff0000;
  }
}
@media only screen and (max-width: 990px) {
  .text-effect {
    font-size: 100px;
  }
}
@media only screen and (max-width: 767px) {
  .text-effect {
    font-size: 80px;
  }
}
@media only screen and (max-width: 479px) {
  .text-effect {
    font-size: 60px;
  }
}
@media only screen and (max-width: 359px) {
  .text-effect {
    font-size: 45px;
  }
}
</style>