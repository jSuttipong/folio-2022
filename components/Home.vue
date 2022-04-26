<template>
  <div>
    <div class="web-bg">
      <section><HomeBanner /></section>
      <section v-for="(value, index) in folioData" :key="index"><FolioSection :folioData="value" :folioNumber="index" /></section>
    </div>
  </div>
</template>
<script>
import HomeBanner from "@/layouts/HomeBanner";
import FolioSection from "@/layouts/FolioSection";
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
      folioData: []
    };
  },
  created(){
    this.folioData = require('../json/folio.json')
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });

    this.calculateSectionOffsets();

    window.addEventListener("DOMMouseScroll", this.handleMouseWheelDOM); // Mozilla Firefox
    window.addEventListener("mousewheel", this.handleMouseWheel, {
      passive: false,
    }); // Other browsers

    window.addEventListener("touchstart", this.touchStart, { passive: false }); // mobile devices
    window.addEventListener("touchmove", this.touchMove, { passive: false }); // mobile devices

    // this.folioData = require('../json/folio.json')
    // console.log('folioData length==>',this.folioData.length);
  },
  destroyed() {
    window.removeEventListener('resize', this.onResize);
    window.removeEventListener("mousewheel", this.handleMouseWheel, {
      passive: false,
    }); // Other browsers
    window.removeEventListener("DOMMouseScroll", this.handleMouseWheelDOM); // Mozilla Firefox

    window.removeEventListener("touchstart", this.touchStart); // mobile devices
    window.removeEventListener("touchmove", this.touchMove); // mobile devices
  },
  methods: {
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
      } else {
        this.moveUp();
      }

      this.touchStartY = 0;
      return false;
    },
    onResize() {
            this.screenWidth = window.innerWidth
        }
  },
};
</script>

<style>
.web-bg{
  background: #07090d;
}
</style>
