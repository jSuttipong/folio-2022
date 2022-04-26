<template>
  <div
  >
  <div class="bg">
    <div class="blur"></div>
  </div>
    <div class="home-banner d-flex align-items-center px-xl-5 px-lg-4 px-md-3 px-1">
      <div class="home-content container-content">
        <div class="text-right font-weight-bold upper-font big-text">
          Jumbo <br />
          <div style="color: #12d487">
            portfolio.
          </div>
        </div>
        <h3>Suttipong Senasuttiphan</h3>
        <p>WEB DEVELOPER</p>
      </div>
    </div>
  </div>
</template>
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
.blur{
  /* background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  height: 100vh; */
}
</style>
