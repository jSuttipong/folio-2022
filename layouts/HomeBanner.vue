<template>
  <div class="home-banner d-flex align-items-center px-xl-5 px-lg-4 px-md-3 px-1">
    <div class="home-content">
      <div class="text-right font-weight-bold upper-font big-text">Jumbo <br> portfolio.</div>
      <p>Suttipong Senasuttiphan</p>
      <p>I'm WEB DEVELOPER</p>
    </div>
  </div>
</template>
<style>
.home-banner {
  background: #333;
  width: 100vw;
  height: 100vh;
}
.home-content{
    width: 100%;
    color: white;
    padding: 10vw;
}
.big-text{
    font-size: 8vh;
}

@media only screen and (max-width: 600px) {
  .home-content{
    padding: 0;
  }
}
</style>


