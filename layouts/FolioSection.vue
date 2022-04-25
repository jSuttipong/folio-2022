<template>
  <div
    class="section-banner px-xl-5 px-lg-4 px-md-3 px-1 d-flex align-items-center"
  >
    <div class="container-content">
      <b-row
        v-if="oddNumber"
        class="width-100 d-flex align-items-center none-margin"
        style="height: 50vh"
      >
        <b-col class="text-md-right order-2 order-md-1 col-12 col-md-6">
          <h2>{{ folioName }}</h2>
          <h5>{{ folioTech }}
            <!-- <img src="../assets/logo/vue.svg" alt="" style="fill: #000"> -->
          </h5>
          <p>{{ folioDescription }}</p>
        </b-col>
        <b-col
          class="d-flex justify-content-center order-1 order-md-2 col-12 col-md-6"
        >
          <div style="width: 100%">
            <carousel
              :per-page="1"
              paginationColor="#fff"
              paginationActiveColor="green"
              paginationPosition="bottom-overlay"
            >
              <slide v-for="(image, index) in folioImages" :key="index">
                <div class="image-container">
                  <img :src="require(`@/assets/images/${image}`)" class="image-folio"/>
                </div>
                
              </slide>
            </carousel>
          </div>
        </b-col>
      </b-row>
      <b-row
        v-else
        class="width-100 d-flex align-items-center none-margin"
        style="height: 50vh"
      >
        <b-col class="d-flex justify-content-center col-12 col-md-6">
          <div style="width: 100%">
            <carousel
              :per-page="1"
              paginationColor="#fff"
              paginationActiveColor="green"
              paginationPosition="bottom-overlay"
            >
              <slide v-for="(image, index) in folioImages" :key="index">
                <div class="image-container">
                  <img :src="require(`@/assets/images/${image}`)" class="image-folio"/>
                </div>
              </slide>
            </carousel>
          </div>
        </b-col>
        <b-col class="text-left col-12 col-md-6">
          <h2>{{ folioName }}</h2>
          <h5>{{ folioTech }}</h5>
          <p>{{ folioDescription }}</p>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script>
export default {
  props: ["folioData", "folioNumber"],
  data() {
    return {
      screenWidth: window.innerWidth,
      oddNumber: true,
      folioName: "",
      folioTech: [],
      folioDescription: "",
      folioImages: [],
    };
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
    this.oddNumber = this.isOdd(this.folioNumber + 1);

    this.folioName = this.folioData.name;
    this.folioTech = this.folioData.tech;
    this.folioDescription = this.folioData.des;
    this.folioImages = this.folioData.images;

  },
  destroyed() {
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    onResize() {
      this.screenWidth = window.innerWidth;
    },
    isOdd(numbers) {
      if (numbers % 2 != 0) {
        return true;
      }
      return false;
    },
  },
  // computed:{

  // }
};
</script>
<style>
.section-banner {
  background: #999;
  width: 100vw;
  height: 50vh;
  /* min-height: 500px; */
}
.width-100 {
  width: 100%;
}
.none-margin {
  margin: unset !important;
}
.VueCarousel-slide{
  background: #000;
}
.image-container{
  width: 100%;
  max-height: 32vh;
  background: #000;
}
.image-folio{
  width: 100%;
}

@media only screen and (max-width: 600px) {
  .section-banner {
    height: 100vh;
  }
}
</style>
