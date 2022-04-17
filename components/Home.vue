<template>
  <div>
    <!-- <Navbar /> -->
    <!-- <div class="py-2 px-1 px-lg-5 px-md-4 py-lg-4 py-xl-5 py-md-3" style="background: #333">
      <b-row>
        <b-col><FolioCard /></b-col>
        <b-col><FolioCard /></b-col>
        <b-col><FolioCard /></b-col>
        <b-col><FolioCard /></b-col>
        <b-col><FolioCard /></b-col>
      </b-row>
    </div> -->
    <div>
      <HomeBanner />
    </div>
  </div>
</template>
<script>
import Navbar from "@/layouts/Navbar";
import FolioCard from "@/layouts/FolioCard";
import HomeBanner from "@/layouts/HomeBanner"
export default {
  components: {
    Navbar,
    FolioCard,
    HomeBanner
  },
};
</script>


