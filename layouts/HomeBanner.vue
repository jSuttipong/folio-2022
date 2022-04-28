<template>
  <div>
    <div class="bg">
      <div class="blur"></div>
    </div>
    <div
      class="home-banner d-flex align-items-center px-xl-5 px-lg-4 px-md-3 px-1"
    >
      <div class="home-content container-content mx-3 mx-md-0">
        <div class="text-right font-weight-bold upper-font big-text">
          Jumbo <br />
          <div style="color: #12d487; margin-top: -21px">portfolio.</div>
        </div>
        <div class="mt-4 mt-md-2">
          <h3>Suttipong Senasuttiphan</h3>
          <p>WEB DEVELOPER</p>
        </div>

        <div class="w-100 text-center text-md-left">
          <h4 class="mt-4 mb-3">Resume</h4>
          <div>
            <b-button @click="downloadResume('th')" class="download-btn">
              TH
            </b-button>
            <b-button @click="downloadResume('en')" class="download-btn">
              EN
            </b-button>
          </div>
        </div>
      </div>
    </div>
    <div class="mouse_scroll">
        <div>
          <span class="m_scroll_arrows unu"></span>
          <span class="m_scroll_arrows doi"></span>
          <span class="m_scroll_arrows trei"></span>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    downloadResume(value) {
      let img = "";
      switch (value) {
        case "th":
          img = require(`@/assets/resume/resume-th.png`);
          break;
        case "en":
          img = require(`@/assets/resume/resume-en.png`);
          break;
      }

      this.$store.commit("modal/setImageModal", { img: img });
      this.$store.commit("modal/setModalShow", { value: true });
      this.$store.commit("modal/setPageScroll", { value: false });
      // let routeData = this.$router.resolve({
      //   name: "routeName",
      //   query: { data: "someData" },
      // });
      // window.open(img, "_blank");
    },
  },
};
</script>
<style>
.home-banner {
  /* background: #000; */
  width: 100vw;
  height: 100vh;
  z-index: 2;
  position: relative;
}
.home-content {
  width: 100%;
  color: white;
}
.big-text {
  font-size: 8vh;
}
.bg {
  position: absolute;

  /* background: #0b0b0b; */
  height: 100vh;
  width: 100vw;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.blur {
  /* background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  height: 100vh; */
}
.download-btn {
  background: transparent;
  border: 1px solid #0a6985;
  /* color: #000; */
}
.download-btn:hover {
  background: rgb(18, 212, 135);
}
.download-btn:active {
  background: rgb(18, 212, 135);
}
.download-btn:focus {
  background: rgb(18, 212, 135);
  box-shadow: none;
}

@media only screen and (max-width: 600px) {
  .home-content {
    margin-top: -60px;
  }
}
</style>
