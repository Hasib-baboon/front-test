<template>
<footer class="footer-distributed">
    <div class="footer-right">
          <ul class="flex items-center justify-around ">
          <li>
                  <a
                    href="https://discord.gg/hssxW7qE"
                    class="
                      block
                      py-4
                      no-underline
                      hover:underline
                      xsm-xl:hover:text-xxxl xsm-xl:hover:text-amber-600
                      gray-image
                    "
                    aria-current="page"
                  >
                    <img height="35" width="35" src="~/static/discord.svg" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/YuaVerse"
                    class="
                      block
                      py-4
                      no-underline
                      hover:underline
                      xsm-xl:hover:text-xxxl xsm-xl:hover:text-amber-600
                      gray-image
                    "
                  >
                    <img height="30" width="30" src="~/static/twitter.png" />
                  </a>
                </li>
                <!-- <li>
                  <a
                    href="#"
                    class="
                      block
                      py-4
                      no-underline
                      hover:underline
                      xsm-xl:hover:text-xxxl xsm-xl:hover:text-amber-600
                      gray-image
                    "
                  >
                    <img height="50" width="50" src="~/static/opensea-blk.png" />
                  </a>
                </li> -->
          </ul>
    </div>

    <div class="footer-left">

        <p class="footer-links">
            <a class="link-1" @click="goto('home')">Home</a>
            <a @click="goto('story')">Story</a>
            <a @click="goto('roadmap')">Roadmap</a>
            <a @click="goto('team')">Team</a>
            <a href="#">Doc</a>
        </p>

        <p>YLabs &copy; 2022</p>
    </div>
</footer>
</template>
<script>
export default {
  methods:{
        goto(refName) {
      var element = this.$root.$el.querySelector("#" + refName);
      var top = element.offsetTop;

      window.scrollTo({ top: top, behavior: "smooth" });
    },
  }
}
</script>
<style scoped>
section {
  width: 100%;
  display: inline-block;
  background: #ccc;
  height: 60vh;
  text-align: center;
  font-size: 22px;
  font-weight: 700;
  text-decoration: underline;
}

.footer-distributed {
  background-color: #000000ce;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  width: 100%;
  text-align: left;
  font: normal 16px sans-serif;
  padding: 45px 50px;
}

.footer-distributed .footer-left p {
  color: #8f9296;
  font-size: 14px;
  margin: 0;
}
/* Footer links */

.footer-distributed p.footer-links {
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  margin: 0 0 10px;
  padding: 0;
  transition: ease .25s;
}

.footer-distributed p.footer-links a {
  display: inline-block;
  line-height: 1.8;
  text-decoration: none;
  color: inherit;
  transition: ease .25s;
}

.footer-distributed .footer-links a:before {
  content: "·";
  font-size: 20px;
  left: 0;
  color: #fff;
  display: inline-block;
  padding-right: 5px;
}

.footer-distributed .footer-links .link-1:before {
  content: none;
}

.footer-distributed .footer-right {
  float: right;
  margin-top: 6px;
  max-width: 180px;
}

.footer-distributed .footer-right a {
  display: inline-block;
  border-radius: 2px;
  font-size: 20px;
  color: #ffffff;
  text-align: center;
  line-height: 35px;
  margin-left: 3px;
  transition:all .25s;
}

.footer-distributed .footer-right a:hover{transform:scale(1.1); -webkit-transform:scale(1.1);}

.footer-distributed p.footer-links a:hover{text-decoration:underline;}

/* Media Queries */

@media (min-width: 200px) {
  .footer-distributed .footer-left, .footer-distributed .footer-right {
    text-align: center;
  }
  .footer-distributed .footer-right {
    float: none;
    margin: 0 auto 20px;
  }
  .footer-distributed .footer-left p.footer-links {
    line-height: 1.8;
  }
}
</style>