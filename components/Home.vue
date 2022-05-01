<template>
  <div>
    <div class="web-bg">
      <section><HomeBanner /></section>
      <section v-for="(value, index) in folioData" :key="index">
        <FolioSection :folioData="value" :folioNumber="index" />
      </section>
    </div>
    <div class="web-bg-pic">
      <div class="circle-1"></div>
      <div class="circle-2"></div>
    </div>
    <div class="modal-container" v-if="ModalActived.modal">
      <div class="bg-modal"></div>
      <div class="close-modal" @click="closeModal">
        <h3><font-awesome-icon icon="fa-solid fa-circle-xmark" /></h3>
      </div>
      <div class="modal-img-container d-flex justify-content-center">
        <img :src="imageModal" class="modal-img" />
      </div>
    </div>
  </div>
</template>
<script>
import HomeBanner from "@/layouts/HomeBanner";
import FolioSection from "@/layouts/FolioSection";

import { mapGetters } from "vuex";
export default {
  components: {
    HomeBanner,
    FolioSection,
  },
  data() {
    return {
      inMove: false,
      activeSection: 0,
      offsets: [],
      touchStartY: 0,
      screenWidth: window.innerWidth,
      folioData: [],
    };
  },
  created() {
    this.folioData = require("../json/folio.json");
  },
  watch: {
    ModalActived() {
      if (this.ModalActived.scroll) {
        this.scrollEventActive();
      } else this.scrollEventUnActive();
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });

    this.calculateSectionOffsets();
    this.imgModal = this.ModalActived.modal;
    this.scrollEventActive();
  },
  destroyed() {
    this.scrollEventUnActive();
  },
  computed: {
    ...mapGetters({
      ModalActived: "modal/isModalActived",
      imageModal: "modal/getImageModal",
    }),
  },
  methods: {
    scrollEventActive() {
      window.addEventListener("DOMMouseScroll", this.handleMouseWheelDOM); // Mozilla Firefox
      window.addEventListener("mousewheel", this.handleMouseWheel, {
        passive: false,
      }); // Other browsers

      window.addEventListener("touchstart", this.touchStart, {
        passive: false,
      }); // mobile devices
      window.addEventListener("touchmove", this.touchMove, { passive: false }); // mobile devices
    },
    scrollEventUnActive() {
      window.removeEventListener("resize", this.onResize);
      window.removeEventListener("mousewheel", this.handleMouseWheel, {
        passive: false,
      }); // Other browsers
      window.removeEventListener("DOMMouseScroll", this.handleMouseWheelDOM); // Mozilla Firefox

      window.removeEventListener("touchstart", this.touchStart); // mobile devices
      window.removeEventListener("touchmove", this.touchMove); // mobile devices
    },
    calculateSectionOffsets() {
      let sections = document.getElementsByTagName("section");
      let length = sections.length;

      for (let i = 0; i < length; i++) {
        let sectionOffset = sections[i].offsetTop;
        this.offsets.push(sectionOffset);
      }
    },
    handleMouseWheel: function (e) {
      if (e.wheelDelta < 30 && !this.inMove) {
        this.moveUp();
      } else if (e.wheelDelta > 30 && !this.inMove) {
        this.moveDown();
      }

      e.preventDefault();
      return false;
    },
    handleMouseWheelDOM: function (e) {
      if (e.detail > 0 && !this.inMove) {
        this.moveUp();
      } else if (e.detail < 0 && !this.inMove) {
        this.moveDown();
      }

      return false;
    },
    moveDown() {
      this.inMove = true;
      this.activeSection--;

      if (this.activeSection < 0) this.activeSection = 0;

      this.scrollToSection(this.activeSection, true);
    },
    moveUp() {
      this.inMove = true;
      this.activeSection++;

      if (this.activeSection > this.offsets.length - 1)
        this.activeSection = this.offsets.length - 1;

      this.scrollToSection(this.activeSection, true);
    },
    scrollToSection(id, force = false) {
      if (this.inMove && !force) return false;

      this.activeSection = id;
      this.inMove = true;

      document
        .getElementsByTagName("section")
        [id].scrollIntoView({ behavior: "smooth" });

      setTimeout(() => {
        this.inMove = false;
      }, 400);
    },
    touchStart(e) {
      e.preventDefault();
      this.touchStartY = e.touches[0].clientY;
    },
    touchMove(e) {
      if (this.inMove) return false;
      e.preventDefault();

      const currentY = e.touches[0].clientY;

      if (this.touchStartY < currentY) {
        this.moveDown();
      } else if (this.touchStartY > currentY) {
        this.moveUp();
      }

      this.touchStartY = 0;
      return false;
    },
    onResize() {
      this.screenWidth = window.innerWidth;
    },
    closeModal() {
      this.scrollEventActive();
      this.$store.commit("modal/setImageModal", { img: "" });
      this.$store.commit("modal/setModalShow", { value: false });
      this.$store.commit("modal/setPageScroll", { value: true });
    },
  },
};
</script>

<style>
.web-bg {
  background: #07090d;
  position: absolute;
}

.web-bg-pic {
  width: 100vw;
  height: 100vh;
  /* background: #12d487; */
  position: fixed;
}
.circle-1 {
  width: 50vh;
  height: 50vh;
  border-radius: 1000px;
  background: #0097bb;
  left: 300px;
  position: absolute;
  filter: blur(240px);
  -webkit-filter: blur(240px);
  -moz-filter: blur(240px);
  -o-filter: blur(240px);
  -ms-filter: blur(240px);
  -webkit-perspective: 1000;
  -webkit-font-smoothing: subpixel-antialiased;
  backface-visibility: hidden;
  transform: translateZ(0);
}
.circle-2 {
  width: 40vh;
  height: 40vh;
  border-radius: 1000px;
  background: #0eda93;
  bottom: 50px;
  right: 200px;
  position: absolute;
  filter: blur(240px);
  -webkit-filter: blur(240px);
  -moz-filter: blur(240px);
  -o-filter: blur(240px);
  -ms-filter: blur(240px);
  -webkit-perspective: 1000;
  -webkit-font-smoothing: subpixel-antialiased;
  backface-visibility: hidden;
  transform: translateZ(0);
}

.modal-container {
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 20;
  overflow-y: auto;
}

.close-modal {
  position: absolute;
  text-align: right;
  top: 15px;
  right: 15px;
  cursor: pointer;
  z-index: 22;
  color: #12d487;
}

.bg-modal {
  position: absolute;
  width: 100%;
  min-height: 100%;
  height: auto;
  background: #000;
  opacity: 0.9;
}

.modal-img-container {
  position: relative;
  z-index: 21;
  height: 100%;
  padding: 50px 0;
}
.modal-img {
  height: 100%;
  width: 50%;
  object-fit: scale-down;
}

@media only screen and (max-width: 600px) {
  .modal-img {
    width: 100%;
    height: 80%;
    /* object-fit: unset; */
    padding: 0 10px;
  }
  .circle-1 {
    left: -100px;
    filter: blur(150px);
    -webkit-filter: blur(150px);
    -moz-filter: blur(150px);
    -o-filter: blur(150px);
    -ms-filter: blur(150px);
  }
  .circle-2 {
    right: -100px;
    filter: blur(150px);
    -webkit-filter: blur(150px);
    -moz-filter: blur(150px);
    -o-filter: blur(150px);
    -ms-filter: blur(150px);
  }
}
</style>
